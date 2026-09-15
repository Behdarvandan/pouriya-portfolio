import { Terminal } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { HeroPhotoSlot } from "./hero-photo-slot";
import { HeroRevealGroup, HeroRevealItem, HeroScrollIndicator } from "./motion/hero-reveal";

/**
 * Faz 6.4 rebuilt this as a single-column typographic composition, no
 * photo; Faz 6.7 brings the photo back beside the text (the Faz 6.3
 * two-column grid mechanics — lg:grid-cols-[1.15fr_0.85fr], items-stretch
 * so the photo's height matches the text column's — without reviving the
 * rest of that layout's content (status badge, CTAs, social row stay gone;
 * see git history if those are ever wanted back). blueprint-grid/glow-accent/
 * duotone-wash moved up to page.tsx (Faz 6.7) so they extend the full page
 * instead of stopping at this section's bottom edge; hero-focus-glow stays
 * here since it's tuned to this section's own content position.
 */
export async function Hero() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Hero");

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Faz 6.4: faint wash centered on the content block below, so its
          off-center position doesn't read as empty space (see globals.css). */}
      <div
        className="hero-focus-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <HeroRevealGroup className="shell relative grid min-h-screen grid-cols-1 items-center gap-12 py-24 pb-[10vh] sm:pb-[14vh] lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="flex max-w-xl flex-col gap-6">
          <HeroRevealItem>
            {/* Icon-signature: the ssamilg.dev reference's mark above the
                name, adapted here. Terminal over Code2/Sparkles because it
                names the actual craft (shipping from a terminal) rather than
                gesturing at "developer" in the abstract, and matches the
                reference's own terminal-glyph detail almost literally. Plain
                --ink box (not --accent-warm) — that rare-accent budget is
                spent elsewhere; the icon glyph itself carries --accent. */}
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-edge">
              <Terminal className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
            </div>
          </HeroRevealItem>

          <HeroRevealItem>
            <p className="font-mono text-label uppercase tracking-label text-muted">
              {portfolio.role[locale]}
            </p>
          </HeroRevealItem>

          <HeroRevealItem>
            <h1 className="text-balance font-display text-display font-medium leading-[0.95] tracking-tight text-ink [overflow-wrap:normal]">
              {portfolio.name}
            </h1>
          </HeroRevealItem>

          <HeroRevealItem className="mt-4">
            {/* One sentence, not the full RotatingText cycle — a rotating
                claim competes with "quiet" for attention. taglines[0] reads
                as the most complete standalone sentence of the set. */}
            <p className="max-w-lg text-body-lg leading-relaxed text-muted">
              {portfolio.taglines[0][locale]}
            </p>
          </HeroRevealItem>
        </div>

        <HeroRevealItem slow className="justify-self-center lg:justify-self-end">
          <HeroPhotoSlot stretchOnLg />
        </HeroRevealItem>

        <HeroScrollIndicator
          href="#about"
          label={t("scrollDown")}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex"
        />
      </HeroRevealGroup>
    </section>
  );
}
