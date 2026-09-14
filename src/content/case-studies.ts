/**
 * Long-form case study narratives. Separate concern from `config/portfolio.ts`,
 * which holds only CV-summary data. Adding a new case study means appending an
 * entry here and setting `caseStudySlug` (and optionally `liveUrl`) on the
 * matching `Project` in portfolio.ts — no other file needs to change.
 */

export interface CaseStudyLink {
  label: string;
  href: string;
}

export type CaseStudyParagraph =
  | { kind: "text"; body: string }
  | { kind: "point"; lead: string; body: string };

export interface CaseStudySection {
  heading: string;
  paragraphs: CaseStudyParagraph[];
}

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  dek: string;
  stack: string[];
  links: CaseStudyLink[];
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-saas-starter",
    eyebrow: "CASE STUDY — 01",
    title: "From a dead deployment to two products",
    dek: "I didn't start this project by writing a booking feature. I started by finding a deployment that had failed 15 times in a row over 22+ hours, and fixing it — then kept going until it became two products.",
    stack: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "Supabase (Postgres + RLS, multi-tenant)",
      "Stripe",
      "Groq (Llama 3.3) + pgvector RAG",
      "Resend",
      "Vercel",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://enterprise-saas-starter.vercel.app",
      },
      {
        label: "Repair-shop landing",
        href: "https://enterprise-saas-starter.vercel.app/repair-shops",
      },
      {
        label: "Repair-shop booking demo",
        href: "https://enterprise-saas-starter.vercel.app/book/repair-shop-demo",
      },
      {
        label: "Source",
        href: "https://github.com/Behdarvandan/enterprise-saas-starter",
      },
    ],
    sections: [
      {
        heading: "What I found",
        paragraphs: [
          {
            kind: "text",
            body: "The Vercel deployment had failed 15 consecutive times over more than 22 hours. In a shared AWS ECS Fargate cluster from another project, two services were crash-looping — restarting, dying, restarting again, burning compute for nothing. That was the starting state, not a footnote.",
          },
        ],
      },
      {
        heading: "Diagnosis, not guesswork",
        paragraphs: [
          {
            kind: "point",
            lead: "Broken Supabase connection.",
            body: "A malformed SUPABASE_URL env var and a stale service-role key were silently breaking every server-side call. Fixed the values, then verified with real authenticated requests against the live database — not just a green build.",
          },
          {
            kind: "point",
            lead: "A single dependency could take the whole API down.",
            body: "The rate limiter hard-crashed three API endpoints outright whenever Redis was unreachable — and it turned out the Upstash Redis credentials had never actually been provisioned in production. Rewrote the limiter to fail open (pass requests through instead of throwing a 500 when Redis is down), provisioned real credentials, and confirmed genuine 429 responses under load. Both the failure mode and the fix were tested, not assumed.",
          },
        ],
      },
      {
        heading: "Fargate → Vercel: a cost call, not a preference",
        paragraphs: [
          {
            kind: "text",
            body: "Once the site was actually running, I moved the deployment target from AWS ECS Fargate to Vercel. Fargate plus an ALB has no real zero-cost tier — you pay for the cluster whether or not anyone's hitting it. For a solo-developer budget with unpredictable traffic, that's the wrong cost shape. Vercel's usage-based pricing matched the actual load pattern. Not \"better tech\" — better fit.",
          },
        ],
      },
      {
        heading: "One booking core, two products",
        paragraphs: [
          {
            kind: "text",
            body: "With the platform stable, I adapted the generic multi-tenant booking engine into a repair-shop-specific product: added nullable device_info and issue_description fields to the booking schema, applied the migration to the live production database, and built a dedicated landing page for the vertical.",
          },
          {
            kind: "text",
            body: "Regenerating Supabase's TypeScript types after that migration surfaced a latent, unrelated type-safety bug in the pgvector embeddings code — a mismatch that compiled fine and would have broken silently for the next person who touched the RAG chat feature. Fixed it while it was in front of me.",
          },
          {
            kind: "text",
            body: "The same core is now being adapted into two directions: a focused SaaS for repair shops, and a boilerplate/starter kit for sale.",
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
