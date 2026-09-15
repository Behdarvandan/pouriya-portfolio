import { useReducedMotion } from "framer-motion";

/** Apple-style "confident but not bouncy" ease-out-expo variant. */
export const EASE_PRECISE = [0.22, 1, 0.36, 1] as const;

/** Micro-interactions: hover states, small toggles. */
export const DURATION_FAST = 0.22;
/** Reveals: the value motion-provider.tsx already uses for its default transition. */
export const DURATION_BASE = 0.45;
/** Scroll-linked / large-scale transitions. */
export const DURATION_SLOW = 0.8;

/** Effectively instant, without dropping to a literal 0 some tweening libs treat as "skip". */
const REDUCED_DURATION = 0.001;

export interface MotionTokens {
  ease: typeof EASE_PRECISE;
  fast: number;
  base: number;
  slow: number;
}

/**
 * Resolves the shared easing/duration tokens against a reduced-motion flag,
 * so every caller collapses toward zero duration the same way the Faz 2
 * CSS rules do for prefers-reduced-motion, instead of each screen owning
 * its own reduced-motion branch.
 */
export function resolveMotionTokens(reducedMotion: boolean): MotionTokens {
  if (reducedMotion) {
    return {
      ease: EASE_PRECISE,
      fast: REDUCED_DURATION,
      base: REDUCED_DURATION,
      slow: REDUCED_DURATION,
    };
  }

  return {
    ease: EASE_PRECISE,
    fast: DURATION_FAST,
    base: DURATION_BASE,
    slow: DURATION_SLOW,
  };
}

/**
 * Client-only hook: reads the same OS-level reduced-motion preference that
 * MotionProvider's reducedMotion="user" already honors, and returns the
 * tokens pre-resolved against it.
 */
export function useMotionTokens(): MotionTokens {
  const prefersReducedMotion = useReducedMotion();
  return resolveMotionTokens(Boolean(prefersReducedMotion));
}
