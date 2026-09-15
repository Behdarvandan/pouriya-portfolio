# Pouriya Behdarvandan — Portfolio

A minimalist dark-mode portfolio for **Pouriya Behdarvandan**, Cloud
Infrastructure Architect & Full-Stack AI Engineer.

Built with the Next.js App Router, strict TypeScript, Tailwind CSS v4, and
Lucide React icons. Fully responsive, accessible, and server-rendered with a
single-page, data-driven layout plus a reusable case study system.

## Tech stack

- **Next.js 16** (App Router, Server Components)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Lucide React**
- **`next/font`** — Fraunces (display), Geist (body), Geist Mono (labels)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                                             |
| -------------------- | -------------------------------------------------------- |
| `npm run dev`        | Start the development server                            |
| `npm run build`      | Create a production build                                |
| `npm run start`      | Serve the production build                               |
| `npm run lint`       | Lint the project with ESLint                             |
| `npm run typecheck`  | Generate route types, then run strict TypeScript checking |

CI (`.github/workflows/ci.yml`) runs `lint`, `tsc --noEmit`, and `build` on
every push and pull request against `main`.

## Content

All CV/summary content lives in a single, strictly-typed source of truth:
[`src/config/portfolio.ts`](src/config/portfolio.ts) — identity, bio, summary,
social links, contact details, metrics, experience, skills, and projects.
Update this one file to change any credential, employer, or link. Narrative
fields (bio, summary, experience, project copy, skill labels) are keyed per
locale — see [Internationalization](#internationalization-i18n).

Long-form project narratives (case studies) are a separate concern — see
below.

## Adding a new case study

The `/work/[slug]` route is fully generic — adding a new case study never
requires touching the route, components, sitemap, or OG image code. Two
files, every time:

1. **[`src/content/case-studies.ts`](src/content/case-studies.ts)** — append
   a new `CaseStudy` entry (`slug`, `eyebrow`, `title`, `dek`, `stack`,
   `links`, `sections`). This is the single source of truth for the case
   study's narrative content.
2. **[`src/config/portfolio.ts`](src/config/portfolio.ts)** — on the matching
   `Project` entry, set `caseStudySlug` (must equal the `slug` above) and
   optionally `liveUrl`.

That's it. The new route (`/work/<slug>`), its metadata, its OG image, its
JSON-LD, its `sitemap.xml` entry, and its "Case study →" link on the project
card all pick it up automatically.

## Project structure

```
src/
├── proxy.ts                     # next-intl locale routing (Next.js 16 renamed middleware.ts → proxy.ts)
├── i18n/
│   ├── routing.ts               # locales, defaultLocale, localePrefix, localeDetection
│   ├── request.ts               # next-intl request config (loads src/messages/{locale}.json)
│   └── navigation.ts            # locale-aware Link/redirect/usePathname/useRouter
├── messages/
│   └── {en,de,tr,fa}.json       # UI chrome translations (nav, buttons, section labels, footer)
├── app/
│   ├── global-not-found.tsx    # Global 404 — required because there are two root layouts (see below)
│   ├── globals.css             # Tailwind theme tokens + base styles
│   ├── sitemap.ts              # Sitemap (every locale's home + every case study)
│   ├── robots.ts               # robots.txt
│   ├── [locale]/
│   │   ├── layout.tsx          # Root layout #1 — <html lang dir>, fonts, hreflang alternates
│   │   ├── page.tsx            # Homepage composition
│   │   └── opengraph-image.tsx # Code-generated OG image, per locale
│   └── work/
│       ├── layout.tsx          # Root layout #2 — fixed <html lang="en" dir="ltr">, outside i18n routing
│       └── [slug]/
│           ├── page.tsx            # Case study route (generateStaticParams/generateMetadata)
│           └── opengraph-image.tsx # Per-case-study OG image
├── components/
│   ├── site-shell.tsx           # Shared skip-link + Person JSON-LD + MotionProvider (used by both root layouts)
│   ├── locale-switcher.tsx      # EN/DE/TR/FA switcher (nav only — never shown on /work)
│   ├── nav.tsx                  # Sticky navigation (homepage)
│   ├── hero.tsx                 # Hero section with rotating tagline
│   ├── metrics.tsx              # Highlight metrics band
│   ├── about.tsx                # Bio and quick facts
│   ├── experience.tsx           # Work timeline
│   ├── skills.tsx                # Technology stack
│   ├── projects.tsx             # Production projects grid
│   ├── contact.tsx               # Contact details + social links
│   ├── footer.tsx                # Footer (translatable via props; defaults to English for /work)
│   ├── section.tsx               # Shared section heading
│   ├── icons.tsx                  # GitHub brand icon
│   ├── rotating-text.tsx         # Client tagline rotator (respects prefers-reduced-motion)
│   ├── case-study.tsx            # Case study nav/header/body (reusable across all case studies, always English)
│   └── json-ld.tsx               # Renders a JSON-LD <script> tag
├── config/
│   ├── portfolio.ts             # Types + all CV/summary content (narrative fields are per-locale, see i18n section)
│   └── site.ts                  # SITE_URL — single source for absolute URLs
├── content/
│   └── case-studies.ts          # Long-form case study narratives — always English, outside i18n entirely
└── lib/
    ├── fonts.ts                  # Shared next/font instances (Geist, Fraunces, Vazirmatn) for both root layouts
    ├── json-ld.ts                # Person / CreativeWork schema.org builders
    └── og-style.ts               # Shared color/size tokens for OG image generation
```

## Performance budget

The site is fully statically prerendered (no client-side data fetching, one
small client component for the hero's rotating tagline) and ships no images,
so Core Web Vitals targets are comfortably within reach by construction:

- **LCP** < 2.5s — static HTML, `next/font` with `display: "swap"`.
- **CLS** < 0.1 — no layout-shifting async content or images.
- **INP** < 200ms — minimal client JavaScript.

There are currently no images in the site. If one is added, use `next/image`
(never a bare `<img>`) to keep this budget intact.

## Accessibility

- WCAG AA color contrast has been audited across all `globals.css` tokens on
  the dark canvas background; every text/background pair meets or exceeds
  4.5:1.
- A "Skip to content" link (visually hidden until focused) and a consistent
  accent-colored `:focus-visible` ring are present site-wide.
- `prefers-reduced-motion: reduce` is respected both in CSS (`globals.css`)
  and in JavaScript (the hero's `RotatingText` component stops rotating).
- Heading hierarchy (`h1` → `h2` → `h3`) is consistent across every page.
- **Known trade-off:** the primary nav's text links are hidden below the
  `md` breakpoint with no hamburger/alternate menu (only the logo and
  "Contact" button remain) — a deliberate scroll-first design for a
  single-page mobile experience, not an oversight. Revisit if the site grows
  beyond a single scrollable page.

## Internationalization (i18n)

Four locales via [`next-intl`](https://next-intl.dev): **English** (default,
unprefixed — `/`), **German** (`/de`), **Turkish** (`/tr`), **Farsi**
(`/fa`, RTL). Locale is chosen only through the nav's language switcher —
there is no automatic `Accept-Language` redirect (`localeDetection: false`),
by deliberate choice, for predictable UX and stable canonical URLs.

`/work/[slug]` case studies are entirely outside i18n routing: always
English, no language switcher shown, and the route is explicitly excluded
from the locale-routing proxy's matcher (`src/proxy.ts`).

- **Content model**: UI chrome (nav labels, buttons, section headings,
  footer) lives in `src/messages/{locale}.json`. CV content (bio, experience,
  project copy, skill category labels) lives in `src/config/portfolio.ts` as
  `Record<Locale, string>` fields. Technology names, URLs, slugs, company
  names, and dates are intentionally plain strings — never translated.
- **Translation quality**: the German, Turkish, and Farsi strings (in both
  `src/messages/*.json` and `portfolio.ts`) are AI-translated drafts — flagged
  with a `$comment` in each message file — and need a native-speaker review
  before being considered final, given this is a professional CV where tone
  and word choice matter.
- **RTL scope (known limitation)**: Farsi sets `<html dir="rtl">`, which
  mirrors flexbox/grid layout automatically. On top of that, three spots
  known to break under `dir="rtl"` were explicitly fixed: the project card's
  arrow icons (`ArrowUpRight`/`ArrowRight` → `ArrowUpLeft`/`ArrowLeft` for
  `fa`), and `about.tsx`'s quick-facts list (`text-right` → the logical
  `text-end`). The rest of the codebase was **not** swept for physical
  (`pl-`/`pr-`/`left-`/`right-`, etc.) → logical (`ps-`/`pe-`/`start-`/`end-`)
  Tailwind utilities in this pass — e.g. the skip-to-content link in
  `site-shell.tsx` still positions itself with `focus:left-4` rather than
  `focus:start-4`, so it anchors to the physical left even in the `fa` RTL
  layout. Flagged here as a deliberate scope cut, not an oversight — a
  follow-up pass should grep for these across the whole `[locale]` tree.
- **Farsi font**: [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn)
  (`next/font/google`, Latin + Arabic-script subsets), loaded only when
  `locale === "fa"` (see `src/lib/fonts.ts`).
- **OG image, fa only (known limitation)**: `next/og`'s renderer (Satori)
  throws `lookupType: 5 - substFormat: 3 is not yet supported` on Persian
  text — a documented Satori limitation with Arabic-script contextual
  letter-joining, independent of font choice, since real Arabic/Persian
  fonts need that same GSUB table for cursive joining. `[locale]/opengraph-image.tsx`
  falls back to the English availability/role strings for `fa` specifically
  so the share-card image renders at all instead of 500ing. The rest of the
  `fa` site is unaffected — this is scoped to the OG image renderer only.

## SEO

- `metadataBase`, Open Graph, and Twitter Card metadata on every route.
- `hreflang` alternates (`alternates.languages`, plus `x-default`) on every
  `[locale]` page, and self-referencing hreflang on every locale's home entry
  in `sitemap.xml`.
- Code-generated OG images (`next/og`) for the homepage (per locale) and
  every case study — no external image assets to maintain.
- `sitemap.xml` and `robots.txt`, generated from the same case study/locale
  data as the routes themselves.
- JSON-LD: `Person` on every page (kept English-fixed across all locales —
  see [Internationalization](#internationalization-i18n)), `CreativeWork` on
  every case study page.

## Deployment

The project is ready to deploy to Vercel or any Node.js host that supports
Next.js. Run `npm run build` followed by `npm run start` to preview a production
build locally. Production: `SITE_URL` in
[`src/config/site.ts`](src/config/site.ts).
