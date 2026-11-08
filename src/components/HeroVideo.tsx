import { useEffect, useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { posterFor, prefersReducedMotion } from './AutoVideo';

interface HeroVideoProps {
  src: string;
  label: string;
}

/**
 * Case study hero video. It starts with sound. Browsers block sound until the visitor has interacted
 * with the site, so on a cold visit it plays muted and turns the sound on at the first click or key
 * press anywhere on the page, unless the visitor has already used the toggle. It pauses when it
 * scrolls out of view or the tab is hidden, and people who ask for reduced motion start on the poster.
 */
export default function HeroVideo({ src, label }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [reduced] = useState(prefersReducedMotion);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(!reduced); // false = waiting on the poster (reduced motion)
  const usedToggle = useRef(false);
  const inView = useRef(true);

  const play = (withSound: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !withSound;
    setMuted(v.muted);
    v.play().catch(() => {
      if (!withSound) return;
      // Sound was blocked before any interaction: play silently instead.
      v.muted = true;
      setMuted(true);
      v.play().catch(() => {});
    });
  };

  // Start with sound.
  useEffect(() => {
    if (!reduced) play(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If the browser made us start muted, turn the sound on at the visitor's first interaction.
  useEffect(() => {
    const onGesture = (e: Event) => {
      const v = videoRef.current;
      const t = e.target as HTMLElement | null;
      if (t?.closest?.('[data-video-control]')) return; // the controls handle themselves
      if (v && !usedToggle.current && v.muted && !v.paused) {
        v.muted = false;
        setMuted(false);
      }
      stop();
    };
    const stop = () => {
      window.removeEventListener('click', onGesture, true);
      window.removeEventListener('keydown', onGesture, true);
    };
    window.addEventListener('click', onGesture, true);
    window.addEventListener('keydown', onGesture, true);
    return stop;
  }, []);

  // Pause off screen and in a hidden tab; resume when back.
  useEffect(() => {
    const v = videoRef.current;
    const box = boxRef.current;
    if (!v || !box) return;
    const sync = () => {
      if (!started) return;
      if (inView.current && document.visibilityState === 'visible') v.play().catch(() => {});
      else v.pause();
    };
    const io = new IntersectionObserver(
      ([e]) => {
        inView.current = e.intersectionRatio >= 0.25;
        sync();
      },
      { threshold: [0, 0.25, 0.5] },
    );
    io.observe(box);
    document.addEventListener('visibilitychange', sync);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, [started]);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    usedToggle.current = true;
    if (!started) {
      setStarted(true);
      play(true);
      return;
    }
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const startFromPoster = () => {
    usedToggle.current = true;
    setStarted(true);
    play(true);
  };

  return (
    <div ref={boxRef} className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#06060b]">
      <video
        ref={videoRef}
        src={src}
        poster={posterFor(src)}
        loop
        playsInline
        preload="auto"
        aria-label={label}
        className="w-full h-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {!started && !playing && (
        <button
          type="button"
          data-video-control
          onClick={startFromPoster}
          aria-label="Play video"
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-colors"
        >
          <Play size={22} fill="currentColor" className="ml-1" />
        </button>
      )}

      <button
        type="button"
        data-video-control
        onClick={toggleSound}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        aria-pressed={!muted}
        title={muted ? 'Sound off' : 'Sound on'}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-colors"
      >
        {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
      </button>
    </div>
  );
}
