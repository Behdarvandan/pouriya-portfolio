"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, type Theme } from "./theme-script";

const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

// The server can't know the stored/preferred theme; THEME_INIT_SCRIPT
// corrects the DOM before paint, and useSyncExternalStore's hydration
// handling reconciles this mismatch itself (no suppressHydrationWarning
// needed here — only on <html>, where the script actually writes).
function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  // Cross-tab sync: another tab's toggle fires a native "storage" event here.
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode, blocked) — theme still applies for
    // this load, it just won't persist across visits.
  }
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Dev-only: React Strict Mode's remount resets <html> to only the
  // attributes JSX manages, clearing what THEME_INIT_SCRIPT set (see the
  // Next.js guide's "Re-applying attributes in development"). Re-applying
  // here is a no-op in production.
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        document.documentElement.setAttribute("data-theme", stored);
      }
    } catch {
      // ignore
    }
  }, []);

  return {
    theme,
    toggleTheme: () => applyTheme(theme === "dark" ? "light" : "dark"),
  };
}
