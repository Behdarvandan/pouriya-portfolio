import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "./section";
import { RevealGroup, RevealItem } from "./motion/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-canvas">
      <RevealGroup
        as="div"
        className="shell grid gap-12 py-24 md:grid-cols-[0.9fr_1.2fr] md:py-32"
      >
        <RevealItem as="div">
          <SectionHeading
            number="01"
            label="About"
            title="Cloud systems that stay simple under load."
          />
        </RevealItem>

        <RevealItem as="div" className="flex flex-col gap-6">
          {portfolio.bio.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-muted md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <dl className="mt-4 grid gap-4 border-t border-edge pt-6 font-mono text-xs uppercase tracking-widest">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">Location</dt>
              <dd className="text-right text-ink">
                {portfolio.contact.location}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">Timezone</dt>
              <dd className="text-right text-ink">
                {portfolio.contact.timezone}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">Availability</dt>
              <dd className="text-right text-ink">
                {portfolio.availability}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-faint">Email</dt>
              <dd className="text-right text-ink">{portfolio.email}</dd>
            </div>
          </dl>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
