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

export const metadata: Metadata = {
  title: "Pouriya Behdarvandan — Cloud Infrastructure Architect & Full-Stack AI Engineer",
  description:
    "Portfolio of Pouriya Behdarvandan — AWS serverless pipelines, containerized cloud orchestration on ECS Fargate, multi-tenant RLS data security, and real-time AI/RAG systems.",
  applicationName: "Pouriya Behdarvandan Portfolio",
  authors: [{ name: "Pouriya Behdarvandan" }],
  keywords: [
    "Cloud Infrastructure Architect",
    "Full-Stack AI Engineer",
    "AWS Serverless",
    "ECS Fargate",
    "Terraform",
    "RAG",
    "Portfolio",
  ],
  openGraph: {
    title: "Pouriya Behdarvandan — Cloud Infrastructure Architect & Full-Stack AI Engineer",
    description:
      "AWS serverless pipelines, containerized cloud orchestration, and real-time AI/RAG systems in production.",
    type: "website",
    siteName: "Pouriya Behdarvandan",
  },
  twitter: {
    card: "summary",
    title: "Pouriya Behdarvandan — Cloud Infrastructure Architect & Full-Stack AI Engineer",
    description:
      "AWS serverless pipelines, containerized cloud orchestration, and real-time AI/RAG systems in production.",
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

