export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs synchronously in <head>, before first paint (see
 * app/[locale]/layout.tsx and app/work/layout.tsx) — reads a stored
 * preference, falling back to prefers-color-scheme when there is none, and
 * stamps the result onto <html> before React ever mounts. This is the
 * documented fix for the "flash of wrong theme" problem; see
 * node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
 * ("Themes"). `suppressHydrationWarning` on <html> (only there) tells React
 * to accept this script's DOM change instead of treating it as a mismatch.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;
