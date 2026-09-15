import { Briefcase } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "./section";
import { RevealGroup, RevealItem } from "./motion/reveal";

export async function Experience() {
  const locale = (await getLocale()) as Locale;
  const sectionT = await getTranslations("Sections.experience");

  return (
    <section
      id="experience"
      className="scroll-mt-24 flex min-h-screen flex-col justify-center border-t border-edge bg-panel"
    >
      <div className="shell py-24 md:py-32">
        <SectionHeading
          icon={Briefcase}
          label={sectionT("label")}
          title={sectionT("title")}
        />

        <RevealGroup as="ol" className="mt-14">
          {portfolio.experience.map((item) => (
            <RevealItem
              key={`${item.role[locale]}-${item.period}`}
              as="li"
              className="grid gap-4 border-t border-edge py-8 last:border-b md:grid-cols-[200px_1fr] md:gap-8"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {item.period}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {item.role[locale]}
                  </h3>
                  {item.company ? (
                    <p className="text-sm text-muted">{item.company}</p>
                  ) : null}
                </div>

                {item.summary ? (
                  <p className="text-sm leading-relaxed text-muted">
                    {item.summary[locale]}
                  </p>
                ) : null}

                <ul className="grid gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight[locale]}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
