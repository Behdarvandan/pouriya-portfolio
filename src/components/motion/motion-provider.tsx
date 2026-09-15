"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * reducedMotion="user" reads prefers-reduced-motion itself and strips
 * transform/scale/rotate animation from every motion.* descendant,
 * so Framer Motion honors the same OS setting the Phase 2 CSS rules do.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
