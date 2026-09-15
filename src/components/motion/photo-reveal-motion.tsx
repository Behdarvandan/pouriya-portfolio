"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { EASE_PRECISE_FN } from "@/lib/motion-tokens";

/**
 * Faz 6.5: drives the photo-reveal section's entrance off scroll position
 * directly (useScroll + useTransform), not mount-time or whileInView — the
 * reveal tracks the scrollbar 1:1, so stopping mid-scroll freezes it and
 * scrolling back up reverses it. hero-reveal.tsx's mount-time
 * initial/animate pattern doesn't fit here for that reason.
 *
 * offset ["start end", "start 0.35"]: progress 0 when the section's top
 * edge reaches the viewport's bottom edge (about to enter), progress 1 once
 * that same edge reaches 35% down from the viewport's top — a fast, early
 * reveal within the section's own min-h-screen height, so the photo holds
 * at its final state for the rest of the scroll room rather than only
 * finishing as the section exits.
 */
export function PhotoRevealMotion({
  eyebrow,
  caption,
  children,
}: {
  eyebrow: string;
  caption: string;
  children: ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.35"],
  });

  const photoOpacity = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: EASE_PRECISE_FN,
  });
  const photoScale = useTransform(scrollYProgress, [0, 1], [0.85, 1], {
    ease: EASE_PRECISE_FN,
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [60, 0], {
    ease: EASE_PRECISE_FN,
  });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: EASE_PRECISE_FN,
  });

  // Omitting the style prop under reduced motion (rather than pinning it to
  // explicit final values) leaves these elements with no inline
  // opacity/transform at all, which resolves to the same visible end state
  // (opacity 1, no transform) without needing a second set of "final value"
  // constants to keep in sync with the ranges above.
  const textStyle = prefersReducedMotion ? undefined : { opacity: photoOpacity, y: photoY };
  const photoStyle = prefersReducedMotion
    ? undefined
    : { opacity: photoOpacity, scale: photoScale, y: photoY };
  const glowStyle = prefersReducedMotion ? undefined : { opacity: glowOpacity };

  return (
    <div
      ref={sectionRef}
      className="shell relative flex min-h-screen flex-col items-center justify-center gap-10 py-24 text-center"
    >
      <motion.div
        aria-hidden="true"
        className="photo-reveal-glow pointer-events-none absolute inset-0"
        style={glowStyle}
      />

      <motion.p
        className="relative font-mono text-label uppercase tracking-label text-muted"
        style={textStyle}
      >
        {eyebrow}
      </motion.p>

      {/* w-full (not just "relative"): this motion.div is a flex item of
          the flex-col container below, so an auto width would shrink-wrap
          to content — collapsing HeroPhotoSlot's own w-full to 0 against a
          circular reference. An explicit width here escapes that flex
          auto-sizing special case and gives HeroPhotoSlot a real width to
          resolve its percentage/aspect-ratio sizing against. */}
      <motion.div className="relative w-full" style={photoStyle}>
        {children}
      </motion.div>

      <motion.p
        className="relative max-w-md text-body leading-relaxed text-muted"
        style={textStyle}
      >
        {caption}
      </motion.p>
    </div>
  );
}
