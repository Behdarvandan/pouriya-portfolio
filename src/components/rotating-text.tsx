"use client";

import { useEffect, useState } from "react";

interface RotatingTextProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

/**
 * Cycles through a list of phrases on a fixed interval. Client-only so it can
 * own the timer; the rest of the hero stays a server component.
 */
export function RotatingText({
  phrases,
  interval = 4000,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (phrases.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases, interval]);

  return (
    <span key={index} className={className}>
      {phrases[index]}
    </span>
  );
}
