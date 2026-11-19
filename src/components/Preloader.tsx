import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const TARGET = 'Bukunmi Isijola';
const CHARS = '!<>-_\\/[]{}—=+*^?#@$%&0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const SEEN_KEY = 'preloader-seen';
const DURATION = 600; // ms the name takes to resolve
const HOLD = 100; // ms the finished name stays before the panel lifts
const LIFT = 350; // ms the panel takes to slide away

// The panel only plays on a visitor's first visit. After that, and for anyone who prefers reduced
// motion, it is skipped so the page appears at once.
function shouldPlay() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    if (localStorage.getItem(SEEN_KEY)) return false;
  } catch {
    /* storage blocked: play it */
  }
  return true;
}

export default function Preloader() {
  const [phase, setPhase] = useState<'show' | 'lift' | 'gone'>(() => (shouldPlay() ? 'show' : 'gone'));
  const isLoading = phase !== 'gone';
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState(
    TARGET.split('').map(c => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)])).join('')
  );

  useEffect(() => {
    if (!isLoading) return;
    try { localStorage.setItem(SEEN_KEY, '1'); } catch { /* ignore */ }

    const start = performance.now();
    const tick = setInterval(() => {
      const ratio = Math.min((performance.now() - start) / DURATION, 1);
      setProgress(Math.min(Math.round(Math.pow(ratio, 0.6) * 100), 100));
      const locked = Math.floor(ratio * TARGET.length * 1.1);
      setDisplayText(
        TARGET.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < locked) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );
    }, 30);

    // One timer decides when the panel goes, so a slow or throttled tab cannot stretch it.
    const done = setTimeout(() => {
      clearInterval(tick);
      setDisplayText(TARGET);
      setPhase('lift');
    }, DURATION + HOLD);
    // Removed by a timer rather than by an animation callback, so a tab opened in the background
    // (where animation frames are paused) is never left under the panel.
    const gone = setTimeout(() => setPhase('gone'), DURATION + HOLD + LIFT);

    return () => { clearInterval(tick); clearTimeout(done); clearTimeout(gone); };
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className="fixed inset-0 z-[100] bg-[#141414] flex items-center justify-center"
          style={{ transform: phase === 'lift' ? 'translateY(-100%)' : 'none', transition: `transform ${LIFT}ms cubic-bezier(0.76, 0, 0.24, 1)` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-start gap-4"
          >
            {/* Left - Logo, same height as name text */}
            <div className="flex items-center h-[18px] md:h-[26px]">
              <img src="/logo.svg" alt="" className="h-full w-auto opacity-80" />
            </div>

            {/* Right - Name + progress percentage below */}
            <div>
              <p aria-hidden="true" className="text-[18px] md:text-[26px] font-semibold tracking-tight text-[#E4E3E0] leading-none">
                {displayText}
              </p>
              <p className="text-[8px] md:text-[10px] font-mono text-gray-400 mt-2 tracking-widest">
                [ LOADING ... {progress}% ]
              </p>
            </div>
          </motion.div>

          {/* Bottom dashed border */}
          <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-800" />
        </div>
      )}
    </>
  );
}
