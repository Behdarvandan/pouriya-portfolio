import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "./section";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="02"
          label="Experience"
          title="A track record of shipping."
        />

        <ol className="mt-14">
          {portfolio.experience.map((item) => (
            <li
              key={`${item.role}-${item.period}`}
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
                    {item.role}
                  </h3>
                  {item.company ? (
                    <p className="text-sm text-muted">{item.company}</p>
                  ) : null}
                </div>

                {item.summary ? (
                  <p className="text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                ) : null}

                <ul className="grid gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
