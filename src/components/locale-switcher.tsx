"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { locales, type Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleChange(nextLocale: Locale) {
    startTransition(() => {
      // next-intl's usePathname() already strips the locale prefix, so
      // replacing with { locale } re-adds (or drops, for "en") the right one.
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">{t("label")}</span>
      <select
        value={activeLocale}
        disabled={isPending}
        onChange={(event) => handleChange(event.target.value as Locale)}
        aria-label={t("label")}
        className="rounded-md border border-edge bg-canvas px-2 py-1 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink focus-visible:text-ink"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {t(locale)}
          </option>
        ))}
      </select>
    </label>
  );
}
