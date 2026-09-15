"use client";

import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

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
  /** Heavier/later elements can settle in on DURATION_SLOW instead of the default DURATION_BASE. */
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

export function HeroScrollIndicator({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const { ease, slow } = useMotionTokens();
  // useMotionTokens() already collapses fast/base/slow toward ~0 under
  // reduced motion, which is enough for a one-shot transition — but not for
  // an *infinitely repeating* one: a near-zero duration looping forever
  // would just vibrate in place instead of stopping. So the repeat itself
  // is gated on this raw flag, not on the resolved duration.
  const prefersReducedMotion = useReducedMotion();

  return (
    <a
      href={href}
      aria-label={label}
      className={`inline-flex flex-col items-center gap-2 text-faint transition-colors hover:text-ink ${className ?? ""}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{label}</span>
      <motion.span
        className="flex"
        animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: slow, ease, repeat: Infinity, repeatType: "loop" }
        }
      >
        <ArrowDown className="h-4 w-4" />
      </motion.span>
    </a>
  );
}
