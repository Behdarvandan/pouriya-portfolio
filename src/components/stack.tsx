import { stack } from "@/lib/data";
import { SectionHeading } from "./section";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="03"
          label="Stack"
          title="Technical Capabilities & Stack"
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.category} className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-edge px-3 py-1.5 font-mono text-xs text-muted"
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
