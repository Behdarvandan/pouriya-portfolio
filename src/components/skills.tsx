import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "./section";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="03"
          label="Skills"
          title="Technical toolkit."
          description="A technology map built across years of shipping frontend products."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {portfolio.skills.map((section) => (
            <div key={section.section} className="flex flex-col gap-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {section.section}
              </h3>

              {section.categories.map((category) => (
                <div key={category.category} className="flex flex-col gap-3">
                  <h4 className="text-sm font-medium text-ink">
                    {category.category}
                  </h4>
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
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
