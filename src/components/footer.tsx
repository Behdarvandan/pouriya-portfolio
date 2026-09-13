import { ArrowUp } from "lucide-react";

import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge">
      <div className="shell flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">
          © {year} {profile.name}
        </p>
        <p className="text-xs text-faint">
          Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
