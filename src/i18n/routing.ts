import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "tr", "fa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// RTL locales — only Farsi for now. Read by the [locale] root layout to set
// <html dir> and by components with icon/arrow directions that read wrong
// mirrored (see motion/project-card.tsx).
export const rtlLocales: readonly Locale[] = ["fa"];

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export const routing = defineRouting({
  locales,
  defaultLocale,
  // "as-needed": default locale (en) has no URL prefix, others (de/tr/fa) do.
  localePrefix: "as-needed",
  // No automatic Accept-Language redirect — locale is only ever chosen
  // explicitly via the switcher, for predictable UX and stable SEO URLs.
  localeDetection: false,
});
