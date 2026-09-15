/**
 * Shared font instances for both root layouts (app/[locale]/layout.tsx and
 * app/work/layout.tsx). next/font instances are safe to import from a shared
 * module and reused across multiple call sites.
 */
import { Fraunces, Geist, Geist_Mono, Vazirmatn } from "next/font/google";

import type { Locale } from "@/i18n/routing";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

// Farsi only: Latin+Arabic-script coverage in one open-source family, so
// Persian text doesn't fall back to the OS default mid-layout.
export const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: "variable",
});

export function fontClassNames(locale: Locale): string {
  const base = `${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`;
  // Only fa needs the Vazirmatn variable on <html>; globals.css swaps body's
  // font-family to it via the html[lang="fa"] selector.
  return locale === "fa" ? `${base} ${vazirmatn.variable}` : base;
}
