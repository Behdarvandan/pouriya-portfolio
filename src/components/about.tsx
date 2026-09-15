import { User } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "./section";
import { RevealGroup, RevealItem } from "./motion/reveal";

export async function About() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("About");
  const sectionT = await getTranslations("Sections.about");

  return (
    <section
      id="about"
      className="scroll-mt-24 flex min-h-screen flex-col justify-center bg-canvas"
    >
      <RevealGroup
        as="div"
        className="shell grid gap-12 py-24 md:grid-cols-[0.9fr_1.2fr] md:py-32"
      >
        <RevealItem as="div">
          <SectionHeading
            icon={User}
            label={sectionT("label")}
            title={sectionT("title")}
          />
        </RevealItem>

        <RevealItem as="div" className="flex flex-col gap-6">
          {portfolio.bio.map((paragraph) => (
            <p
              key={paragraph[locale]}
              className="text-base leading-relaxed text-muted md:text-lg"
            >
              {paragraph[locale]}
            </p>
          ))}

          <dl className="mt-4 grid gap-4 border-t border-edge pt-6 font-mono text-xs uppercase tracking-widest">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">{t("locationLabel")}</dt>
              {/* text-end (logical), not text-right (physical) — reads
                  correctly in the fa RTL layout too. */}
              <dd className="text-end text-ink">{portfolio.contact.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">{t("timezoneLabel")}</dt>
              <dd className="text-end text-ink">{portfolio.contact.timezone}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">{t("availabilityLabel")}</dt>
              <dd className="text-end text-ink">
                {portfolio.availability[locale]}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">{t("emailLabel")}</dt>
              <dd className="text-end text-ink">{portfolio.email}</dd>
            </div>
          </dl>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
