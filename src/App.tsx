// src/App.tsx — readable code panel transcription from the video.
// The video shows this function in the editor as `applyTheme`.
// Line 8 is difficult to resolve at this recording size; see note below.

export function applyTheme(
  t: Theme,
  at?: { x: number; y: number }
) {
  const dark = matchMedia('(prefers-color-scheme: dark)').matches;
  const next = t === 'system' ? (dark ? 'dark' : 'light') : t;
  const d = document.documentElement;
  if (d.dataset.theme === next) return;
  const swap = () => { d.dataset.theme = next; };
  const vt = document.startViewTransition;
  if (!vt || !at /* || !dur(1) — small text is unclear */) return swap();

  // a fast circular wipe out of the toggle, never a slow cross-fade
  const R = Math.hypot(
    Math.max(at.x, innerWidth - at.x),
    Math.max(at.y, innerHeight - at.y)
  );
  const c = (r: string) => `circle(${r} at ${at.x}px ${at.y}px)`;
  vt.call(document, swap).ready.then(() => d.animate(
    { clipPath: [c('0%'), c(`${R}px`)] },
    { duration: 420, pseudoElement: '::view-transition-new(root)' }
  ));
}

// Theme type used by the visible function:
type Theme = 'light' | 'dark' | 'system';
