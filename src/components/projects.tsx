import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data";
import { SectionHeading } from "./section";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="05"
          label="Case Studies"
          title="Featured production architectures."
          description="Four systems running in production, each solving a specific cloud or AI infrastructure problem."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-edge bg-edge md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col gap-5 bg-canvas p-7 transition-colors hover:bg-panel"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-medium text-ink">
                  {project.name}
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-colors group-hover:text-accent" />
              </div>

              <p className="text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-auto flex flex-col gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-edge px-2 py-1 font-mono text-[11px] text-faint"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-edge pt-4">
                  <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                    {project.badge}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
