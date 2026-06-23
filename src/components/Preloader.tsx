import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TARGET = 'Bukunmi Isijola';
const CHARS = '!<>-_\\/[]{}—=+*^?#@$%&0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState(
    TARGET.split('').map(c => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)])).join('')
  );

  useEffect(() => {
    const duration = 900;
    const tickMs = 20;
    const totalTicks = duration / tickMs;
    let tick = 0;

    const timer = setInterval(() => {
      tick++;
      const ratio = tick / totalTicks;

      // Progress counter
      setProgress(Math.min(Math.round(Math.pow(ratio, 0.6) * 100), 100));

      // Scramble: lock in characters left-to-right as ratio increases
      const locked = Math.floor(ratio * TARGET.length * 1.1);
      setDisplayText(
        TARGET.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < locked) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );

      if (tick >= totalTicks) {
        clearInterval(timer);
        setDisplayText(TARGET);
        setTimeout(() => setIsLoading(false), 150);
      }
    }, tickMs);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-[#141414] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-start gap-4"
          >
            {/* Left - Logo, same height as name text */}
            <div className="flex items-center h-[18px] md:h-[26px]">
              <img src="/logo.svg" alt="Logo" className="h-full w-auto opacity-80" />
            </div>

            {/* Right - Name + progress percentage below */}
            <div>
              <h1 className="text-[18px] md:text-[26px] font-semibold tracking-tight text-[#E4E3E0] leading-none">
                {displayText}
              </h1>
              <p className="text-[8px] md:text-[10px] font-mono text-gray-500 mt-2 tracking-widest">
                [ LOADING ... {progress}% ]
              </p>
            </div>
          </motion.div>

          {/* Bottom dashed border */}
          <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-800" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
