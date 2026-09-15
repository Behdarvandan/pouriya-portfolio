"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";

import { rtlLocales, type Locale } from "@/i18n/routing";
import { useMotionTokens } from "@/lib/motion-tokens";
import { ResumeNavLink } from "@/components/resume-nav-link";
import { ThemeToggle } from "@/components/theme-toggle";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function subscribeNever() {
  return () => {};
}

// The portal target (document.body) doesn't exist during SSR. This mirrors
// once true/false forever, so the server and first client render agree
// (both false), and only the second, post-hydration client render — a
// normal DOM update, not a mismatch — adds the (empty, isOpen starts false)
// portal.
function useMounted() {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );
}

interface HashLink {
  href: string;
  key: string;
  label: string;
}

/**
 * md:hidden hamburger trigger + full-height slide-in panel, for viewports
 * below the breakpoint where nav.tsx's text links are hidden entirely (see
 * README "Known trade-off", resolved by this component in Faz 6.2).
 *
 * The panel rests at the CSS logical `end` edge (Tailwind `end-0`/`border-s`)
 * so it lands on the same physical side the header's trailing cluster
 * mirrors to under `dir="rtl"` (right in LTR, left in fa) with no JS
 * involved in that placement. The slide *transform*, unlike inset/border,
 * isn't direction-aware on its own, so its sign alone is chosen from the
 * current locale.
 *
 * Backdrop + panel are portaled to `document.body` rather than rendered
 * inline: nav.tsx's `<header>` has `backdrop-blur-md`, and a `backdrop-filter`
 * on an ancestor creates a new containing block for `position: fixed`
 * descendants (same as `transform` does), which pinned them to the header's
 * own 64px box instead of the viewport when they were rendered in place.
 */
export function MobileNav({
  links,
  resumeHref,
  resumeLabel,
  contactHref,
  contactLabel,
  openLabel,
  closeLabel,
  menuLabel,
}: {
  links: HashLink[];
  resumeHref: string;
  resumeLabel: string;
  contactHref: string;
  contactLabel: string;
  openLabel: string;
  closeLabel: string;
  menuLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const locale = useLocale() as Locale;
  const isRtl = rtlLocales.includes(locale);
  const { ease, fast, base } = useMotionTokens();

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // WAI-ARIA dialog pattern: focus the first focusable element on open, trap
  // Tab/Shift+Tab within the panel, and close on Escape.
  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    if (!panel) return;

    panel.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") return;

      const items = Array.from(
        panel!.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? closeLabel : openLabel}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-9 w-9 items-center justify-center text-ink md:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <>
                  <motion.div
                    key="backdrop"
                    className="fixed inset-0 z-50 bg-canvas/70 backdrop-blur-sm md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: fast, ease }}
                    onClick={close}
                    aria-hidden="true"
                  />
                  <motion.div
                    key="panel"
                    id={panelId}
                    ref={panelRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label={menuLabel}
                    className="fixed inset-y-0 end-0 z-[60] flex w-full max-w-xs flex-col gap-8 border-s border-edge bg-panel p-6 md:hidden"
                    initial={{ x: isRtl ? "-100%" : "100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: isRtl ? "-100%" : "100%" }}
                    transition={{ duration: base, ease }}
                  >
                    <div className="flex items-center justify-between">
                      <ThemeToggle />
                      <button
                        type="button"
                        aria-label={closeLabel}
                        onClick={close}
                        className="inline-flex h-9 w-9 items-center justify-center text-ink"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <nav aria-label="Primary" className="flex flex-col gap-6">
                      {links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={close}
                          className="font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                        </a>
                      ))}
                      <ResumeNavLink
                        href={resumeHref}
                        onClick={close}
                        className="font-mono text-sm uppercase tracking-widest"
                      >
                        {resumeLabel}
                      </ResumeNavLink>
                    </nav>

                    <a
                      href={contactHref}
                      onClick={close}
                      className="mt-auto inline-flex items-center justify-center rounded-full border border-edge px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {contactLabel}
                    </a>
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
