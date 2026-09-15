import type { ReactNode } from "react";

import { JsonLd } from "@/components/json-ld";
import { personJsonLd } from "@/lib/json-ld";
import { MotionProvider } from "@/components/motion/motion-provider";

/**
 * Shared between both root layouts (app/[locale]/layout.tsx and
 * app/work/layout.tsx) now that they no longer share a single top-level
 * app/layout.tsx (see the "multiple root layouts" pattern used for RTL/EN
 * <html> divergence). Keeps the skip-link, Person JSON-LD, and motion
 * provider defined once instead of duplicated in both layouts.
 */
export function SiteShell({
  skipToContentLabel,
  children,
}: {
  skipToContentLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-on-accent"
      >
        {skipToContentLabel}
      </a>
      <JsonLd data={personJsonLd()} />
      <MotionProvider>{children}</MotionProvider>
    </>
  );
}
