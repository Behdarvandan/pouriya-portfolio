import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "./section";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="03"
          label="Skills"
          title="Technical capabilities."
          description="A full-stack view across cloud, frontend, security, and AI."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.skills.map((category) => (
            <div key={category.category} className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {category.category}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
