import type { Metadata } from "next";
import Link from "next/link";

import { fontClassNames } from "@/lib/fonts";
import "./globals.css";

// Required because this app has multiple root layouts ([locale] and work) —
// there's no single layout to compose a global 404 from, so Next.js needs
// this experimental convention instead of a plain not-found.tsx (see
// node_modules/next/dist/docs/.../not-found.md, "global-not-found.js").
// It bypasses every layout, so it brings its own <html>/<body> and fonts,
// and stays plain English/LTR — there's no next-intl context to read a
// locale from here.
export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr" className={fontClassNames("en")}>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            404
          </p>
          <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Page not found
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5"
          >
            Return home
          </Link>
        </div>
      </body>
    </html>
  );
}
