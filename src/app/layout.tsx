import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

import { portfolio } from "@/config/portfolio";
import { SITE_URL } from "@/config/site";
import { JsonLd } from "@/components/json-ld";
import { personJsonLd } from "@/lib/json-ld";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.summary[0],
  applicationName: portfolio.name,
  authors: [{ name: portfolio.name }],
  keywords: [
    portfolio.role,
    "Frontend Engineer",
    "Vue.js",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.summary[0],
    type: "website",
    siteName: portfolio.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.summary[0],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-on-accent"
        >
          Skip to content
        </a>
        <JsonLd data={personJsonLd()} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
