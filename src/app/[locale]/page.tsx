import { getTranslations, setRequestLocale } from "next-intl/server";

import { Nav } from "@/components/nav";
import { ScrollDots } from "@/components/scroll-dots";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // next-intl's static-rendering guide requires setRequestLocale in every
  // layout AND page in the segment (not just the layout) for the page to be
  // eligible for prerendering via the layout's generateStaticParams.
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Footer");

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Faz 6.7: moved up from hero.tsx so the grid/glow/wash identity
          extends behind every section instead of stopping at the hero's
          bottom edge — these are absolutely positioned, so (per normal CSS
          paint order) they paint above each section's own static-flow
          background color rather than being hidden behind it, and this
          wrapper's height comes from its normal-flow children (Nav/main/
          Footer below), so inset-0 spans the whole page, not one viewport.
          The overflow-hidden clip lives on this inner wrapper, not the
          outer flex container above — putting it on the outer container
          would make it an ancestor scroll container for Nav's
          position:sticky, breaking the stuck-to-top behavior. */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="blueprint-grid absolute inset-0" />
        <div className="glow-accent absolute inset-x-0 top-0 h-[560px] opacity-80" />
        <div className="duotone-wash absolute inset-0" />
      </div>

      <Nav />
      <ScrollDots />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer
        backToTopLabel={t("backToTop")}
        builtWithLabel={t("builtWith")}
      />
    </div>
  );
}
