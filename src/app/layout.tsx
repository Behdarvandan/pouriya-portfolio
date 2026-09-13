import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
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

// Applied in <head> before hydration to avoid a flash of the wrong theme.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export const metadata: Metadata = {
  title: "Pouriya Behdarvandan — Cloud & AI Architect",
  description:
    "Portfolio of Pouriya Behdarvandan, a cloud & AI architect designing resilient cloud platforms and shipping production-grade AI systems.",
  applicationName: "Pouriya Behdarvandan Portfolio",
  authors: [{ name: "Pouriya Behdarvandan" }],
  keywords: [
    "Cloud Architect",
    "AI Architect",
    "Platform Engineering",
    "DevOps",
    "Machine Learning",
    "Portfolio",
  ],
  openGraph: {
    title: "Pouriya Behdarvandan — Cloud & AI Architect",
    description: "Resilient cloud platforms and production-grade AI systems.",
    type: "website",
    siteName: "Pouriya Behdarvandan",
  },
  twitter: {
    card: "summary",
    title: "Pouriya Behdarvandan — Cloud & AI Architect",
    description: "Resilient cloud platforms and production-grade AI systems.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

