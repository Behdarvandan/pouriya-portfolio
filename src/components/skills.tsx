import { getLocale, getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "./section";
import {
  SKILL_CATEGORY_ICONS,
  SKILL_GROUP_ICONS,
  SkillTechIcon,
} from "./skill-icons";
import { RevealGroup, RevealItem } from "./motion/reveal";

/**
 * Faz 6.9 restructure (ssamilg.dev reference): the old flat 4-category
 * pill grid becomes two bordered "Development" / "Tools" cards, each with
 * its own accent color (emerald / amber — the project's existing duotone
 * identity, not a new palette) and its own icon+label subcategories.
 * Individual technologies drop the pill/border chrome entirely — just an
 * icon+name pair per the reference, flex-wrapped.
 */
export async function Skills() {
  const locale = (await getLocale()) as Locale;
  const sectionT = await getTranslations("Sections.skills");

  return (
    <section
      id="skills"
      className="scroll-mt-24 flex flex-col justify-center border-t border-edge bg-canvas md:min-h-screen"
    >
      <div className="shell py-[var(--space-section)]">
        <SectionHeading
          icon={SKILL_GROUP_ICONS.development}
          label={sectionT("label")}
          title={sectionT("title")}
          description={sectionT("description")}
        />

        {/* grid-cols-1 below md (no grid-cols-* set) stacks the two group
            cards on phones; md:grid-cols-2 puts them side by side. */}
        <RevealGroup
          as="div"
          className="mt-[var(--space-section-sm)] grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {portfolio.skills.map((group) => {
            const GroupIcon = SKILL_GROUP_ICONS[group.id];
            const accentClass =
              group.id === "development" ? "text-accent" : "text-accent-warm";

            return (
              <RevealItem
                key={group.id}
                as="div"
                className="rounded-2xl border border-edge bg-panel p-6 md:p-8"
              >
                <h3
                  className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ${accentClass}`}
                >
                  <GroupIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  {group.label[locale]}
                </h3>

                <div className="mt-6 flex flex-col gap-6">
                  {group.categories.map((category) => {
                    const CategoryIcon = SKILL_CATEGORY_ICONS[category.id];
                    return (
                      <div key={category.id}>
                        <h4
                          className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${accentClass}`}
                        >
                          <CategoryIcon
                            className="h-3.5 w-3.5"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          {category.category[locale]}
                        </h4>
                        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                          {category.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-1.5 text-sm text-muted"
                            >
                              <SkillTechIcon
                                name={item}
                                className="h-4 w-4 shrink-0 text-faint"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
