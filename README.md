# Pouriya Behdarvandan — Portfolio

A minimalist dark-mode portfolio for **Pouriya Behdarvandan**, Cloud
Infrastructure Architect & Full-Stack AI Engineer.

Built with the Next.js App Router, strict TypeScript, Tailwind CSS v4, and
Lucide React icons. Fully responsive, accessible, and server-rendered with a
single-page, data-driven layout.

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

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Start the development server        |
| `npm run build`    | Create a production build           |
| `npm run start`    | Serve the production build          |
| `npm run lint`     | Lint the project with ESLint        |
| `npx tsc --noEmit` | Run strict TypeScript type-checking |

## Content

All personal content lives in a single, strictly-typed source of truth:
[`src/config/portfolio.ts`](src/config/portfolio.ts) — identity, bio, summary,
social links, contact details, metrics, experience, skills, and projects.
Update this one file to change any credential, employer, or link.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, and metadata
│   ├── page.tsx          # Page composition
│   └── globals.css       # Tailwind theme tokens + base styles
├── components/
│   ├── nav.tsx           # Sticky navigation
│   ├── hero.tsx          # Hero section with rotating tagline
│   ├── metrics.tsx       # Highlight metrics band
│   ├── about.tsx         # Bio and quick facts
│   ├── experience.tsx    # Work timeline
│   ├── skills.tsx        # Technology stack
│   ├── projects.tsx      # Production projects
│   ├── contact.tsx       # Contact details + social links
│   ├── footer.tsx        # Footer
│   ├── section.tsx       # Shared section heading
│   ├── icons.tsx         # GitHub brand icon
│   └── rotating-text.tsx # Client tagline rotator
└── config/
    └── portfolio.ts      # Types + all personal content
```

## Deployment

The project is ready to deploy to Vercel or any Node.js host that supports
Next.js. Run `npm run build` followed by `npm run start` to preview a production
build locally.
