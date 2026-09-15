import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Next.js 16 renamed the `middleware.ts` convention to `proxy.ts` (the
// exported function is now named `proxy`, not `middleware`) — see
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md.
// next-intl's `createMiddleware` just returns a request handler, so it is
// exported here under the new convention name; nothing else changes.
export default createMiddleware(routing);

export const config = {
  matcher: [
    // Run on every path except: API routes, Next.js internals, files with an
    // extension (static assets), and — deliberately — `/work`, which is
    // fully outside i18n routing and must never be locale-rewritten.
    "/((?!api|_next|_vercel|work|.*\\..*).*)",
  ],
};
