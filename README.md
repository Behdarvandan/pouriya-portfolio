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
Update this one file to change any credential, employer, or link.

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
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, skip link, Person JSON-LD
│   ├── page.tsx                # Homepage composition
│   ├── globals.css             # Tailwind theme tokens + base styles
│   ├── opengraph-image.tsx     # Code-generated OG image for the homepage
│   ├── sitemap.ts              # Sitemap (home + every case study)
│   ├── robots.ts               # robots.txt
│   └── work/[slug]/
│       ├── page.tsx            # Case study route (generateStaticParams/generateMetadata)
│       └── opengraph-image.tsx # Per-case-study OG image
├── components/
│   ├── nav.tsx                 # Sticky navigation (homepage)
│   ├── hero.tsx                # Hero section with rotating tagline
│   ├── metrics.tsx             # Highlight metrics band
│   ├── about.tsx                # Bio and quick facts
│   ├── experience.tsx          # Work timeline
│   ├── skills.tsx               # Technology stack
│   ├── projects.tsx            # Production projects grid
│   ├── contact.tsx              # Contact details + social links
│   ├── footer.tsx               # Footer
│   ├── section.tsx              # Shared section heading
│   ├── icons.tsx                 # GitHub brand icon
│   ├── rotating-text.tsx        # Client tagline rotator (respects prefers-reduced-motion)
│   ├── case-study.tsx           # Case study nav/header/body (reusable across all case studies)
│   └── json-ld.tsx              # Renders a JSON-LD <script> tag
├── config/
│   ├── portfolio.ts             # Types + all CV/summary content
│   └── site.ts                  # SITE_URL — single source for absolute URLs
├── content/
│   └── case-studies.ts          # Long-form case study narratives (separate concern from portfolio.ts)
└── lib/
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

## SEO

- `metadataBase`, Open Graph, and Twitter Card metadata on every route.
- Code-generated OG images (`next/og`) for the homepage and every case study
  — no external image assets to maintain.
- `sitemap.xml` and `robots.txt`, generated from the same case study data as
  the routes themselves.
- JSON-LD: `Person` on every page (root layout), `CreativeWork` on every case
  study page.

## Deployment

The project is ready to deploy to Vercel or any Node.js host that supports
Next.js. Run `npm run build` followed by `npm run start` to preview a production
build locally. Production: `SITE_URL` in
[`src/config/site.ts`](src/config/site.ts).
