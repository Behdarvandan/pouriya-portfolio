"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

import { DURATION_BASE, EASE_PRECISE } from "@/lib/motion-tokens";

/**
 * reducedMotion="user" reads prefers-reduced-motion itself and strips
 * transform/scale/rotate animation from every motion.* descendant,
 * so Framer Motion honors the same OS setting the Phase 2 CSS rules do.
 * Faz 6.10: pulls duration/ease from motion-tokens.ts instead of a
 * hardcoded duplicate, so the two never drift apart again.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: DURATION_BASE, ease: EASE_PRECISE }}
    >
      {children}
    </MotionConfig>
  );
}
