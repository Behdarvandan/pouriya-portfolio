import { Terminal } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { HeroRevealGroup, HeroRevealItem, HeroScrollIndicator } from "./motion/hero-reveal";

/**
 * Faz 6.4 rebuild: the Faz 6.3 hero (status badge, two CTAs, social row,
 * photo slot alongside a two-column grid) tested as a "standard landing
 * page" — busy, not distinctive. This is a pure typographic composition
 * instead (icon-signature, role, name, one sentence, scroll cue), closer to
 * ssamilg.dev's reference. Nothing below is deleted outright:
 * - the status badge already duplicates portfolio.availability, which
 *   about.tsx already renders as a definition-list row — dropped here with
 *   no separate home needed yet; footer/contact placement is a later call.
 * - "View projects" / "Get in touch" are redundant with the nav's own
 *   Projects/Contact links — the hero's job is curiosity, not conversion.
 * - the social row already duplicates contact.tsx's own social links.
 * - the photo <figure> moved to hero-photo-slot.tsx, unused for now,
 *   ready for Faz 6.5 to place wherever the photo reveal ends up living.
 */
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
      {/* Faz 6.4: faint wash centered on the content block below, so its
          off-center position doesn't read as empty space (see globals.css). */}
      <div
        className="hero-focus-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <HeroRevealGroup className="shell relative flex min-h-[calc(100vh-4rem)] flex-col justify-center pb-[10vh] sm:pb-[14vh]">
        {/* Deliberately not dead-centered (the ssamilg.dev reference read as
            "too empty" to the user): --ms shifts the block right of the
            shell's edge without reaching true center, and the logical
            margin-inline-start mirrors under dir="rtl" (fa) automatically —
            it starts from the right there, not the left. Mobile stays at
            the shell's plain edge; the offset only reads as "off-center"
            once there's enough width for center-vs-edge to be a real choice. */}
        <div className="flex max-w-xl flex-col gap-6 sm:ms-[6%] md:ms-[10%] lg:ms-[13%]">
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

        <HeroScrollIndicator
          href="#metrics"
          label={t("scrollDown")}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex"
        />
      </HeroRevealGroup>
    </section>
  );
}
