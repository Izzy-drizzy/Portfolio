import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export const isVideo = (src: string) => /\.(mp4|webm)$/i.test(src);

/** `foo.mp4` / `foo-preview.mp4` → `foo-poster.webp` (the convention used in /public). */
export const posterFor = (src: string) => src.replace(/(-preview)?\.(mp4|webm)$/i, '-poster.webp');

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

interface AutoVideoProps {
  src: string;
  className?: string;
  /**
   * Set by the parent to hold the video (a pause button, or a slide that is hidden). When the parent
   * controls it, the parent decides about reduced motion too (see prefersReducedMotion).
   */
  paused?: boolean;
  label?: string;
}

/**
 * A silent, looping preview. It only plays while it is on screen, never autoplays for people who
 * ask for reduced motion (they see the poster), and can be held by the parent with `paused`.
 */
const AutoVideo = forwardRef<HTMLVideoElement, AutoVideoProps>(function AutoVideo(
  { src, className = '', paused, label },
  ref,
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement);
  const [inView, setInView] = useState(false);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const hold = paused ?? reduced;
    if (inView && !hold) el.play().catch(() => {});
    else el.pause();
  }, [inView, paused, reduced]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={posterFor(src)}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={className}
    />
  );
});

export default AutoVideo;
