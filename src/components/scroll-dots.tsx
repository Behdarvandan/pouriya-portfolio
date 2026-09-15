"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";

const SECTION_IDS = [
  "top",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

/**
 * Faz 6.6: right-edge dot nav, one dot per main homepage section.
 * Homepage-only by construction — these ids don't exist on /resume or
 * /work/[slug], so this only gets rendered from app/[locale]/page.tsx, not
 * nav.tsx (which is shared across routes).
 *
 * Active section comes from useScroll's page-level `scrollY` (not an
 * IntersectionObserver): each tick, find the last section whose top has
 * passed the viewport's vertical midpoint. useMotionValueEvent subscribes
 * to that MotionValue without putting scroll position itself in React
 * state — only the derived active id triggers a re-render, and only when
 * it actually changes.
 *
 * Faz 6.10, after studying ssamilg.dev's source (throwaway clone, not
 * copied): two adaptations from that reference —
 * 1) It never actually shows this nav on mobile at all (its whole homepage
 *    swaps to a different, plain page below 768px, so the dot-nav concept
 *    simply doesn't exist there). We were explicitly asked to keep this
 *    visible on mobile regardless — `hidden md:flex` is gone below, on
 *    purpose, diverging from the reference here.
 * 2) Its hover-tooltip mechanism (label fades/slides in only on
 *    :hover — never shown permanently for the active dot, which is
 *    distinguished purely by size+color) is reused as-is: same idea, ported
 *    to our own tokens/colors. We use scale+opacity instead of its
 *    translate-x slide, since translate-x is a physical direction and this
 *    codebase's other RTL-sensitive spots (fa locale) use logical
 *    properties throughout — a scale reveal has no direction to get wrong.
 */
export function ScrollDots() {
  const { scrollY } = useScroll();
  const [activeId, setActiveId] = useState<SectionId>("top");

  const tNav = useTranslations("Nav");
  const tAbout = useTranslations("Sections.about");
  const tExperience = useTranslations("Sections.experience");
  const tSkills = useTranslations("Sections.skills");
  const tProjects = useTranslations("Sections.projects");
  const tContact = useTranslations("Sections.contact");

  const labels: Record<SectionId, string> = {
    top: tNav("home"),
    about: tAbout("label"),
    experience: tExperience("label"),
    skills: tSkills("label"),
    projects: tProjects("label"),
    contact: tContact("label"),
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const viewportMid = latest + window.innerHeight / 2;
    let current: SectionId = SECTION_IDS[0];
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= viewportMid) {
        current = id;
      }
    }
    setActiveId((prev) => (prev === current ? prev : current));
  });

  return (
    <nav aria-label="Section" className="fixed inset-y-0 end-4 z-40 flex items-center">
      <ul className="flex flex-col items-center gap-4">
        {SECTION_IDS.map((id) => {
          const isActive = id === activeId;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={labels[id]}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex h-4 w-4 items-center justify-center"
              >
                {/* Hover-only label, reused as the tooltip's visible text —
                    aria-hidden since the anchor's own aria-label already
                    carries this to screen readers. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute end-full me-3 origin-[100%_center] scale-90 whitespace-nowrap rounded-md border border-edge bg-panel px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-ink opacity-0 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100 group-hover:opacity-100"
                >
                  {labels[id]}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-2.5 w-2.5 bg-accent"
                      : "h-1.5 w-1.5 bg-faint group-hover:bg-muted"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
