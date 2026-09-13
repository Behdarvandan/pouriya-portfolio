import { expertise } from "@/lib/data";
import { SectionHeading } from "./section";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="02"
          label="Expertise"
          title="What I bring to the table."
          description="A full-stack view of the cloud and AI landscape — from the network layer up to the product."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col gap-5 bg-canvas p-7 transition-colors hover:bg-panel"
            >
              <item.icon className="h-6 w-6 text-accent" />
              <h3 className="font-display text-xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-edge px-2 py-1 font-mono text-[11px] text-faint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
