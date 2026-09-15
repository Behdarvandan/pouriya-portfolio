import { useReducedMotion } from "framer-motion";
import { cubicBezier } from "motion-utils";

/**
 * Faz 6.10: the "standard" easing curve — no overshoot, symmetric fast-in/
 * slow-out — replacing the earlier ease-out-expo-ish [0.22,1,0.36,1].
 * Recalibrated after studying ssamilg.dev's source (throwaway clone, not
 * copied): every transition there, reveals and hovers alike, uses this
 * exact curve and nothing else — no bounce/spring/overshoot anywhere. Kept
 * the name (EASE_PRECISE is referenced throughout the codebase) and just
 * updated the value, so this is a one-line-per-consumer feel change, not a
 * rename.
 */
export const EASE_PRECISE = [0.4, 0, 0.2, 1] as const;

/**
 * EASE_PRECISE resolved to a JS easing function. Framer Motion's
 * declarative `transition.ease` (e.g. motion-provider.tsx) accepts the raw
 * bezier tuple directly, but useTransform's imperative `options.ease` only
 * accepts an EasingFunction — this is that form, for scroll-linked
 * consumers (see motion/photo-reveal-motion.tsx).
 */
export const EASE_PRECISE_FN = cubicBezier(...EASE_PRECISE);

/** Micro-interactions: hover states, small toggles. ssamilg.dev's own
 * hover/click feedback sits at 200-300ms — already where this was. */
export const DURATION_FAST = 0.22;
/** Reveals: the value motion-provider.tsx already uses for its default
 * transition. Faz 6.10: nudged 0.45 -> 0.5 to match the reference's own
 * description-reveal timing (duration-500) almost exactly. */
export const DURATION_BASE = 0.5;
/** Scroll-linked / large-scale transitions, and the heaviest hero reveal
 * items (HeroRevealItem's `slow` prop). Faz 6.10: bumped 0.8 -> 1.0 — the
 * reference's title reveal runs a full 1000ms, slower/more cinematic than
 * ours was. */
export const DURATION_SLOW = 1.0;

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
