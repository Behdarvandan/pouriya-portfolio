import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

import { portfolio } from "@/config/portfolio";
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

export const metadata: Metadata = {
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
    card: "summary",
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
      <body>{children}</body>
    </html>
  );
}
