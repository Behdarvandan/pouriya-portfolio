import { portfolio } from "@/config/portfolio";
import { SITE_URL } from "@/config/site";
import type { CaseStudy } from "@/content/case-studies";

/**
 * Minimal hand-written schema.org shapes — avoids pulling in `schema-dts` as
 * a new dependency for two small, stable object shapes.
 */

export interface PersonJsonLd {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle: string;
  url: string;
  email: string;
  sameAs: string[];
}

export interface CreativeWorkJsonLd {
  "@context": "https://schema.org";
  "@type": "CreativeWork";
  name: string;
  description: string;
  url: string;
  author: {
    "@type": "Person";
    name: string;
    url: string;
  };
}

export function personJsonLd(): PersonJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    url: SITE_URL,
    email: portfolio.email,
    sameAs: portfolio.socials.map((social) => social.href),
  };
}

export function caseStudyJsonLd(study: CaseStudy): CreativeWorkJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.dek,
    url: `${SITE_URL}/work/${study.slug}`,
    author: {
      "@type": "Person",
      name: portfolio.name,
      url: SITE_URL,
    },
  };
}
