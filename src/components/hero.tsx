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

  // Faz 6.11: split so each name part is its own block-level line — with
  // --text-display's clamp() now safely fit to the longer word (see
  // globals.css), the layout no longer needs "wherever the browser
  // happens to wrap it" (text-balance's job); it needs a fixed, known
  // 2-line shape so overflow-wrap/word-break below have exactly one word
  // each to protect, never a mid-word break point to consider.
  const [firstName, ...restName] = portfolio.name.split(" ");
  const surname = restName.join(" ");

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Faz 6.4: faint wash centered on the content block below, so its
          off-center position doesn't read as empty space (see globals.css). */}
      <div
        className="hero-focus-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Faz 6.8: min-h-screen and the scroll-indicator's reserved bottom
          padding (pb-[14vh]) both moved to md: — below that, a stacked
          icon+role+name+tagline+photo column can run taller than one
          screen, and forcing full-viewport height there just crams it;
          the indicator itself is also md:flex (hidden on mobile), so
          reserving space for it below md was dead padding anyway.
          Faz 6.10: py-14/md:py-24 collapsed into the single fluid
          --space-section token (see globals.css) — one class covers both
          ends now, no separate md: step needed. */}
      <HeroRevealGroup className="shell relative grid grid-cols-1 items-center gap-8 py-[var(--space-section)] pb-6 md:min-h-screen md:gap-12 md:pb-[14vh] lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
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
            <h1 className="font-display text-display font-medium leading-[0.95] tracking-tight text-ink [overflow-wrap:normal] [word-break:keep-all]">
              <span className="block">{firstName}</span>
              <span className="block">{surname}</span>
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

        {/* w-full below lg (not just "justify-self-center"): below lg this
            grid item's cell spans the shell's full width, and
            justify-self-center alone shrinks the item to its own
            content size to center it — which collapses HeroPhotoSlot's
            own w-full to 0 against that shrunk, width-less parent (same
            flex/grid shrink-to-fit trap fixed in photo-reveal-motion.tsx
            for Faz 6.5). lg:w-auto reverts to the original, already-
            verified desktop sizing (HeroPhotoSlot's width is aspect-ratio-
            derived there via stretchOnLg, not a percentage, so it doesn't
            need this). */}
        <HeroRevealItem
          slow
          className="w-full justify-self-center lg:w-auto lg:justify-self-end"
        >
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
