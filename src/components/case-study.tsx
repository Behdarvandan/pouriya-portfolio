import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { portfolio } from "@/config/portfolio";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-canvas/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Work
        </Link>

        <span className="font-mono text-sm font-semibold tracking-tight text-ink">
          {portfolio.initials}
          <span className="text-accent">.</span>
        </span>
      </div>
    </header>
  );
}

export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <section id="top" className="border-b border-edge">
      <div className="shell flex flex-col gap-8 py-24 md:py-32">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {study.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {study.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {study.dek}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-edge px-2 py-1 font-mono text-[11px] text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-edge pt-6">
          {study.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyBody({ study }: { study: CaseStudy }) {
  return (
    <div>
      {study.sections.map((section) => (
        <section key={section.heading} className="border-b border-edge">
          <div className="shell grid gap-6 py-16 md:grid-cols-[0.9fr_1.2fr] md:py-20">
            <h2 className="font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
              {section.heading}
            </h2>

            <div className="flex flex-col gap-5">
              {section.paragraphs.map((paragraph, index) =>
                paragraph.kind === "point" ? (
                  <p
                    key={`${section.heading}-${index}`}
                    className={
                      // Faz 4: single warm-accent callout, closest to an
                      // architectural trade-off — flagged via the content
                      // model's `highlight` field, not a text match.
                      paragraph.highlight
                        ? "border-l-2 border-accent-warm pl-4 text-base leading-relaxed text-muted"
                        : "text-base leading-relaxed text-muted"
                    }
                  >
                    <span className="font-medium text-ink">{paragraph.lead}</span>{" "}
                    {paragraph.body}
                  </p>
                ) : (
                  <p
                    key={`${section.heading}-${index}`}
                    className="text-base leading-relaxed text-muted"
                  >
                    {paragraph.body}
                  </p>
                ),
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
