import { getTranslations } from "next-intl/server";

import { NavHomeCvToggle } from "./nav-home-cv-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

/**
 * Faz 6.6 simplification (ssamilg.dev reference): the old logo, the
 * ABOUT/EXPERIENCE/SKILLS/PROJECTS/CONTACT link row, the separate mobile
 * hamburger panel for that same row, and the standalone CONTACT button are
 * all gone — in-page navigation moves to scroll-dots.tsx's right-edge dot
 * nav instead. What's left (Home/CV toggle, theme, locale) is little enough
 * to render identically at every width, so there's no more mobile-specific
 * variant of this header.
 */
export async function Nav() {
  const t = await getTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-canvas/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <NavHomeCvToggle homeLabel={t("home")} cvLabel={t("resume")} />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
