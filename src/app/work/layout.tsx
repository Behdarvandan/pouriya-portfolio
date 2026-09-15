import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SITE_URL } from "@/config/site";
import { fontClassNames } from "@/lib/fonts";
import { SiteShell } from "@/components/site-shell";
import "../globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

// work/[slug]/page.tsx sets a relative alternates.canonical, which needs a
// metadataBase to resolve against — previously inherited from the single
// root layout.tsx, now that it's split into two root layouts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

// Second root layout ("multiple root layouts" pattern): /work/[slug] case
// studies are entirely outside i18n routing, fixed English/LTR. No
// NextIntlClientProvider here on purpose — if a component under /work ever
// calls useTranslations() by mistake, it fails loudly instead of silently
// rendering the wrong locale.
export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={fontClassNames("en")}>
      <body>
        <SiteShell skipToContentLabel="Skip to content">
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
