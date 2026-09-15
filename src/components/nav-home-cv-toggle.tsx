"use client";

import { usePathname } from "@/i18n/navigation";
import { HomeAwareLink } from "./nav-home-link";
import { ResumeNavLink } from "./resume-nav-link";

/**
 * Faz 6.6: replaces nav.tsx's old logo + ABOUT/EXPERIENCE/.../CONTACT link
 * row + separate CONTACT button with a single "Home / CV" toggle
 * (ssamilg.dev reference) — the active side reads bold/ink, the other
 * faint/muted. Reuses the two existing link components rather than
 * reimplementing their behavior: HomeAwareLink already does the
 * "already on / → smooth-scroll to top instead of a no-op route change"
 * trick, and ResumeNavLink already tracks the /resume route as active
 * (now styled bold to match this toggle — see resume-nav-link.tsx). Only
 * the Home side's active/inactive color is computed here, since
 * HomeAwareLink (unlike ResumeNavLink) takes plain className as-is with no
 * active-state logic of its own.
 */
export function NavHomeCvToggle({
  homeLabel,
  cvLabel,
}: {
  homeLabel: string;
  cvLabel: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest">
      <HomeAwareLink
        href="/"
        className={`transition-colors ${
          isHome ? "font-semibold text-ink" : "text-muted hover:text-ink"
        }`}
      >
        {homeLabel}
      </HomeAwareLink>
      <span aria-hidden="true" className="text-faint">
        /
      </span>
      <ResumeNavLink href="/resume">{cvLabel}</ResumeNavLink>
    </div>
  );
}
