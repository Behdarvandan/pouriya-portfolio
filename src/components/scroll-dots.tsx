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
 * Faz 6.6: right-edge dot nav (ssamilg.dev reference), one dot per main
 * homepage section. Homepage-only by construction — these ids don't exist
 * on /resume or /work/[slug], so this only gets rendered from
 * app/[locale]/page.tsx, not nav.tsx (which is shared across routes).
 *
 * Active section comes from useScroll's page-level `scrollY` (not an
 * IntersectionObserver): each tick, find the last section whose top has
 * passed the viewport's vertical midpoint. useMotionValueEvent subscribes
 * to that MotionValue without putting scroll position itself in React
 * state — only the derived active id triggers a re-render, and only when
 * it actually changes.
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
    <nav
      aria-label="Section"
      className="fixed inset-y-0 end-4 z-40 hidden md:flex md:items-center"
    >
      <ul className="flex flex-col items-center gap-4">
        {SECTION_IDS.map((id) => {
          const isActive = id === activeId;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={labels[id]}
                aria-current={isActive ? "true" : undefined}
                className="group flex h-4 w-4 items-center justify-center"
              >
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
