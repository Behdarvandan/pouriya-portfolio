import { FolderGit2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "./section";
import { RevealGroup } from "./motion/reveal";
import { ProjectCard } from "./motion/project-card";

export async function Projects() {
  const sectionT = await getTranslations("Sections.projects");

  return (
    <section
      id="projects"
      className="scroll-mt-24 flex flex-col justify-center border-t border-edge md:min-h-screen"
    >
      <div className="shell py-14 md:py-32">
        <SectionHeading
          icon={FolderGit2}
          label={sectionT("label")}
          title={sectionT("title")}
          description={sectionT("description")}
        />

        {/* perspective on the grid, not each card, so hover tilt reads as one
            shared vanishing point instead of each card tilting independently.
            grid-cols-1 is implicit below md (no grid-cols-* set), so cards
            already stack full-width, one per row, on phones. */}
        <RevealGroup
          as="div"
          className="mt-8 grid gap-px border border-edge bg-edge [perspective:1200px] md:mt-14 md:grid-cols-2"
        >
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
