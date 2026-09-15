import type { Metadata, Viewport } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { portfolio } from "@/config/portfolio";
import { SITE_URL } from "@/config/site";
import { fontClassNames } from "@/lib/fonts";
import { getDirection, routing, type Locale } from "@/i18n/routing";
import { SiteShell } from "@/components/site-shell";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const title = `${portfolio.name} — ${portfolio.role[locale]}`;
  const description = portfolio.summary[0][locale];

  // hreflang alternates: en is unprefixed (localePrefix: "as-needed"), the
  // rest carry their locale segment. x-default points at the same
  // unprefixed URL as en, since en is the fallback for unrecognized locales.
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, l === routing.defaultLocale ? "/" : `/${l}`]),
  );
  languages["x-default"] = "/";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: portfolio.name,
    authors: [{ name: portfolio.name }],
    // Derived from actual portfolio.ts content: role + a representative
    // sample of real skills/tech, not placeholder terms.
    keywords: [
      portfolio.role[locale],
      "Cloud Architect",
      "AI Engineer",
      "AWS",
      "Terraform",
      "Docker",
      "Next.js",
      "TypeScript",
    ],
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: portfolio.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enables static rendering for this dynamic segment (next-intl docs).
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale: locale as Locale, namespace: "A11y" });

  return (
    <html
      lang={locale}
      dir={getDirection(locale as Locale)}
      className={fontClassNames(locale as Locale)}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteShell skipToContentLabel={t("skipToContent")}>
            {children}
          </SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
