import { ArrowUp } from "lucide-react";

import { portfolio } from "@/config/portfolio";

// Shared between the [locale] tree and the always-English /work/[slug] tree
// (see app/work/layout.tsx: no NextIntlClientProvider there). Rather than a
// separate CaseStudyFooter duplicating this markup, the two translatable
// strings are props defaulting to their original English copy, so the
// English-only route keeps working unchanged while [locale] pages pass
// translated values.
export function Footer({
  backToTopLabel = "Back to top",
  builtWithLabel = "Built with Next.js, TypeScript & Tailwind CSS.",
}: {
  backToTopLabel?: string;
  builtWithLabel?: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge">
      <div className="shell flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">
          © {year} {portfolio.name}
        </p>
        <p className="text-xs text-faint">{builtWithLabel}</p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
        >
          {backToTopLabel}
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
