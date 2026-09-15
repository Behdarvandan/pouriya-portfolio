"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

import { useMotionTokens } from "@/lib/motion-tokens";

// Hero-only: unlike reveal.tsx's RevealGroup/RevealItem (whileInView, for
// below-the-fold sections), the hero is visible on first paint, so it
// animates on mount with initial/animate instead of a scroll trigger — and
// ties its timing to motion-tokens.ts explicitly rather than inheriting
// reveal.tsx's untimed default spring, per Faz 6.3.
const STAGGER_CHILDREN = 0.12;
const DELAY_CHILDREN = 0.1;

export function HeroRevealGroup({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: STAGGER_CHILDREN, delayChildren: DELAY_CHILDREN },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function HeroRevealItem({
  className,
  slow = false,
  children,
}: {
  className?: string;
  /** Heavier elements (the photo slot) settle in on DURATION_SLOW; text uses DURATION_BASE. */
  slow?: boolean;
  children: ReactNode;
}) {
  const { ease, base, slow: slowDuration } = useMotionTokens();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: slow ? slowDuration : base, ease },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
