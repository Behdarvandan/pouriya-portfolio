import type { MetadataRoute } from "next";

import { caseStudies } from "@/content/case-studies";
import { SITE_URL } from "@/config/site";
import { routing } from "@/i18n/routing";

function localeUrl(locale: string): string {
  return locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Self-referencing hreflang: every locale variant of the home page lists
  // all locale variants (itself included) plus x-default, per Google's
  // recommended sitemap hreflang shape.
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((locale) => [locale, localeUrl(locale)]),
  );
  languages["x-default"] = SITE_URL;

  return [
    ...routing.locales.map((locale) => ({
      url: localeUrl(locale),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages },
    })),
    // /work/[slug] is outside i18n routing entirely — one locale-less entry
    // per case study, same as before Faz 5.
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/work/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
