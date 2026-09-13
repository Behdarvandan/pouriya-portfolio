# Pouriya Behdarvandan — Portfolio

A minimalist portfolio for **Pouriya Behdarvandan**, Cloud & AI Architect.

Built with the Next.js App Router, strict TypeScript, Tailwind CSS v4, and Lucide
React icons. Fully responsive, accessible, and theme-aware (light/dark toggle
with system-preference detection and no flash of incorrect theme).

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

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start the development server             |
| `npm run build`       | Create a production build                |
| `npm run start`       | Serve the production build               |
| `npm run lint`        | Lint the project with ESLint             |
| `npx tsc --noEmit`    | Run strict TypeScript type-checking      |

## Content

All personal content lives in a single, typed source of truth:
[`src/lib/data.ts`](src/lib/data.ts) — profile, bio, metrics, expertise, stack,
experience, and projects. Interfaces are defined in
[`src/lib/types.ts`](src/lib/types.ts). Update these files to reflect your real
credentials, employers, and project metrics.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, theme script
│   ├── page.tsx          # Page composition
│   └── globals.css       # Tailwind theme tokens + base styles
├── components/
│   ├── nav.tsx           # Sticky navigation + theme toggle
│   ├── hero.tsx          # Hero section
│   ├── metrics.tsx       # Project metrics band
│   ├── about.tsx         # Bio and quick facts
│   ├── expertise.tsx     # Services grid
│   ├── stack.tsx         # Technology stack
│   ├── experience.tsx    # Work timeline
│   ├── projects.tsx      # Selected work
│   ├── contact.tsx       # Contact call-to-action
│   ├── footer.tsx        # Footer
│   ├── section.tsx       # Shared section heading
│   ├── icons.tsx         # GitHub / LinkedIn brand icons
│   └── theme-toggle.tsx  # Light / dark toggle (client)
└── lib/
    ├── types.ts          # TypeScript interfaces
    └── data.ts           # All personal content
```

## Deployment

The project is ready to deploy to Vercel or any Node.js host that supports
Next.js. Run `npm run build` followed by `npm run start` to preview a production
build locally.

