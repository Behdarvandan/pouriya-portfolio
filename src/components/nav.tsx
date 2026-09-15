import { getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import { NavContactLink } from "./motion/nav-contact-link";
import { MobileNav } from "./motion/mobile-nav";
import { ResumeNavLink } from "./resume-nav-link";
import { HomeAwareLink } from "./nav-home-link";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

// Absolute paths (not bare "#about" fragments) so these still resolve
// correctly from routes other than "/" (e.g. /resume) instead of turning
// into "/resume#about", which navigates nowhere — see Faz 6.3.1. `Link`
// (not a plain <a>) locale-prefixes them, so a de/tr/fa visitor clicking
// "About" from /resume lands back on their own locale's homepage, not en.
const links = [
  { href: "/#about", key: "about" },
  { href: "/#experience", key: "experience" },
  { href: "/#skills", key: "skills" },
  { href: "/#projects", key: "projects" },
  { href: "/#contact", key: "contact" },
] as const;

export async function Nav() {
  const t = await getTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-canvas/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <HomeAwareLink
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          {portfolio.initials}
          <span className="text-accent">.</span>
        </HomeAwareLink>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <HomeAwareLink
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              {t(link.key)}
            </HomeAwareLink>
          ))}
          <ResumeNavLink
            href="/resume"
            className="font-mono text-xs uppercase tracking-widest"
          >
            {t("resume")}
          </ResumeNavLink>
        </nav>

        <div className="flex items-center gap-4">
          <MobileNav
            links={links.map((link) => ({ ...link, label: t(link.key) }))}
            resumeHref="/resume"
            resumeLabel={t("resume")}
            contactHref={`mailto:${portfolio.email}`}
            contactLabel={t("contactButton")}
            openLabel={t("openMenu")}
            closeLabel={t("closeMenu")}
            menuLabel={t("menuLabel")}
          />
          <ThemeToggle />
          <LocaleSwitcher />
          <NavContactLink href={`mailto:${portfolio.email}`}>
            {t("contactButton")}
          </NavContactLink>
        </div>
      </div>
    </header>
  );
}
