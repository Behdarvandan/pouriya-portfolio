import { ArrowDown, ArrowUpRight, ImageIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { RotatingText } from "./rotating-text";
import { SocialIcon } from "./icons";
import { HeroRevealGroup, HeroRevealItem } from "./motion/hero-reveal";

export async function Hero() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Hero");

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="blueprint-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="glow-accent pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-80"
        aria-hidden="true"
      />
      {/* Faz 4: static two-accent wash, additive to the Faz 3 layers above —
          visible on first paint, independent of any hover/scroll motion. */}
      <div
        className="duotone-wash pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <HeroRevealGroup className="shell relative grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-16 py-24 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <div className="flex min-w-0 flex-col gap-8">
          <HeroRevealItem className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              {/* The page's one rare-accent (amber) use: this status dot,
                  in place of a hardcoded emerald so it also reads as a
                  distinct signal from --accent (see globals.css Faz 6.1
                  usage rule). */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-warm opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-warm" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {portfolio.availability[locale]}
            </p>
          </HeroRevealItem>

          <HeroRevealItem>
            <p className="font-mono text-label uppercase tracking-label text-muted">
              {portfolio.role[locale]}
            </p>
          </HeroRevealItem>

          <HeroRevealItem>
            <h1 className="break-words font-display text-display font-medium leading-[0.95] tracking-tight text-ink">
              {portfolio.name}
            </h1>
          </HeroRevealItem>

          <HeroRevealItem className="mt-6">
            <p className="max-w-xl text-body-lg leading-relaxed text-muted">
              <RotatingText
                phrases={portfolio.taglines.map((tagline) => tagline[locale])}
              />
            </p>
          </HeroRevealItem>

          <HeroRevealItem className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5"
            >
              {t("viewProjects")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-edge px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t("getInTouch")}
            </a>
          </HeroRevealItem>

          <HeroRevealItem className="flex items-center gap-6">
            {portfolio.socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
                {social.title}
              </a>
            ))}
          </HeroRevealItem>
        </div>

        <HeroRevealItem
          slow
          className="w-full max-w-sm justify-self-center lg:max-w-none lg:justify-self-end"
        >
          {/* Portrait slot: fixed 4:5 aspect ratio so the layout holds once a
              real photo lands here — swap in an <Image> filling this
              <figure> and nothing around it needs to change. */}
          <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-edge bg-panel">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-faint">
              <ImageIcon className="h-10 w-10" strokeWidth={1.25} aria-hidden="true" />
              <span className="font-mono text-label uppercase tracking-label">
                Photo
              </span>
            </div>
          </figure>
        </HeroRevealItem>

        <a
          href="#metrics"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-ink md:flex"
          aria-label={t("scrollDown")}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            {t("scrollDown")}
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </HeroRevealGroup>
    </section>
  );
}
