import { ImageResponse } from "next/og";

import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { portfolio } from "@/config/portfolio";
import { ogColors, ogSize } from "@/lib/og-style";

export const alt = "Case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  const eyebrow = study?.eyebrow ?? "PORTFOLIO";
  const title = study?.title ?? portfolio.name;

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
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: ogColors.ink,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: ogColors.muted,
            marginTop: 32,
          }}
        >
          {portfolio.name}
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
