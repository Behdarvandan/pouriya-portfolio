import { getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import { NavContactLink } from "./motion/nav-contact-link";
import { LocaleSwitcher } from "./locale-switcher";

const links = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export async function Nav() {
  const t = await getTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-canvas/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          {portfolio.initials}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <NavContactLink href={`mailto:${portfolio.email}`}>
            {t("contactButton")}
          </NavContactLink>
        </div>
      </div>
    </header>
  );
}
