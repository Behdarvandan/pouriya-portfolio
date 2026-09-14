import { ImageResponse } from "next/og";

import { portfolio } from "@/config/portfolio";
import { ogColors, ogSize } from "@/lib/og-style";

export const alt = `${portfolio.name} — ${portfolio.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
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
          {portfolio.availability}
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
          {portfolio.role}
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
