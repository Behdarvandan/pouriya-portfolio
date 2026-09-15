"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

// Container only orchestrates timing; children carry the actual motion so
// variant state propagates from RevealGroup down to each RevealItem.
export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const groupTags = { div: motion.div, ul: motion.ul, ol: motion.ol };
type GroupTag = keyof typeof groupTags;

const itemTags = { div: motion.div, li: motion.li };
type ItemTag = keyof typeof itemTags;

interface RevealGroupProps {
  as?: GroupTag;
  className?: string;
  children: ReactNode;
  /** Fraction of the element that must enter the viewport before it fires. */
  amount?: number;
}

export function RevealGroup({
  as = "div",
  className,
  children,
  amount = 0.2,
}: RevealGroupProps) {
  const Tag = groupTags[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={containerVariants}
    >
      {children}
    </Tag>
  );
}

interface RevealItemProps {
  as?: ItemTag;
  className?: string;
  children: ReactNode;
}

export function RevealItem({ as = "div", className, children }: RevealItemProps) {
  const Tag = itemTags[as];
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
