import { getTranslations, setRequestLocale } from "next-intl/server";

import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
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
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <Metrics />
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
