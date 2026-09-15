import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    // Required for src/app/global-not-found.tsx: with multiple root layouts
    // ([locale] and work), there's no single layout to compose a global 404
    // from, so Next.js needs this opt-in flag instead of a plain not-found.tsx.
    globalNotFound: true,
  },
};

export default withNextIntl(nextConfig);
