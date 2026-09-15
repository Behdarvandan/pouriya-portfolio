"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function NavContactLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="rounded-full border border-edge px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </motion.a>
  );
}
