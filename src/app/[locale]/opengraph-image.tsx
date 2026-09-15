import { ImageResponse } from "next/og";

import { portfolio } from "@/config/portfolio";
import { ogColors, ogSize } from "@/lib/og-style";
import { hasLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";

// alt is a static export (can't be a function), so it stays English — low
// stakes for OG alt text, and avoids generateImageMetadata's added
// complexity for one fixed-size image.
export const alt = `${portfolio.name} — ${portfolio.role.en}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;

  // fa falls back to the English strings here: next/og's renderer (Satori)
  // throws "lookupType: 5 - substFormat: 3 is not yet supported" on Persian
  // text — a documented Satori limitation with Arabic-script contextual
  // letter-joining (GSUB), independent of font choice, since virtually any
  // real Arabic/Persian font needs that same substitution table. A crashed
  // (500) OG image is worse than an English-language share-card preview, so
  // this is a deliberate fallback, not a translation gap — see README.
  const ogLocale: Locale = locale === "fa" ? "en" : locale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: ogColors.canvas,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: ogColors.accent,
            marginBottom: 28,
          }}
        >
          {portfolio.availability[ogLocale]}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            color: ogColors.ink,
            lineHeight: 1.1,
          }}
        >
          {portfolio.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: ogColors.muted,
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          {portfolio.role[ogLocale]}
        </div>
        <div
          style={{
            display: "flex",
            width: 120,
            height: 6,
            backgroundColor: ogColors.accent,
            marginTop: 48,
            borderRadius: 3,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
