import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "./section";
import { RevealGroup } from "./motion/reveal";
import { ProjectCard } from "./motion/project-card";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <SectionHeading
          number="04"
          label="Projects"
          title="Production architectures."
          description="Four cloud and AI systems shipped to production, each solving a specific infrastructure or data problem."
        />

        {/* perspective on the grid, not each card, so hover tilt reads as one
            shared vanishing point instead of each card tilting independently */}
        <RevealGroup
          as="div"
          className="mt-14 grid gap-px border border-edge bg-edge [perspective:1200px] md:grid-cols-2"
        >
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
