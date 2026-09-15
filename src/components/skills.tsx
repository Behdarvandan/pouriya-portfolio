import { getLocale, getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "./section";
import { RevealGroup, RevealItem } from "./motion/reveal";

export async function Skills() {
  const locale = (await getLocale()) as Locale;
  const sectionT = await getTranslations("Sections.skills");

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-edge bg-canvas"
    >
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="03"
          label={sectionT("label")}
          title={sectionT("title")}
          description={sectionT("description")}
        />

        <RevealGroup
          as="div"
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {portfolio.skills.map((category) => (
            <RevealItem
              key={category.category[locale]}
              as="div"
              className="flex flex-col gap-4"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {category.category[locale]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-edge px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
