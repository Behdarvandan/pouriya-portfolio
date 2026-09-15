"use client";

import type { MouseEvent, ReactNode } from "react";

import { Link, usePathname } from "@/i18n/navigation";

/**
 * nav.tsx's logo and section links point at "/" and "/#about" etc.
 * (absolute, not bare "#about") since Faz 6.3.1, so they resolve correctly
 * from any route, not just "/". Cross-page, that alone is enough — Next.js
 * scrolls to the hash once the destination page mounts. But clicking one of
 * these while ALREADY on "/" is a same-route, hash-only (or no-op) change,
 * which Next.js's router does not scroll for — a documented gap, not
 * something the `scroll` prop fixes (see
 * node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md,
 * "Scrolling to an id": scrolling happens "upon navigation", and a
 * same-route hash change isn't one — confirmed empirically too). So when
 * already home, this bypasses routing and does a plain DOM scroll instead,
 * matching what these links did before Faz 6.3.1 as bare "#about" <a> tags.
 *
 * Only the home branch gets a custom onClick — the non-home path forwards
 * the caller's `onClick` (or undefined) completely untouched, so Link's own
 * cross-page navigation and scroll-to-hash behavior stay exactly the
 * default, unmodified by anything this component does.
 */
export function HomeAwareLink({
  href,
  className,
  onClick,
  children,
}: {
  /** "/" for the logo, "/#about" etc. for section links. */
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const targetId = href.includes("#") ? href.slice(href.indexOf("#") + 1) : null;

  const handleClick = isHome
    ? (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (targetId) {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        // Keep the URL in sync without a router navigation (which would
        // no-op here anyway, since the route itself isn't changing).
        const base = window.location.pathname;
        history.pushState(null, "", targetId ? `${base}#${targetId}` : base);
        onClick?.();
      }
    : onClick;

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
