"use client";

import type { ReactNode } from "react";

import { Link, usePathname } from "@/i18n/navigation";

/**
 * The only nav item that's a real route rather than a same-page hash link,
 * so (unlike its siblings in nav.tsx) it needs client-side pathname access
 * to know when it's the active route.
 */
export function ResumeNavLink({
  href,
  className = "",
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${className} transition-colors ${
        isActive ? "font-semibold text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}
