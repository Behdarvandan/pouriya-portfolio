import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { portfolio } from "@/config/portfolio";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { CaseStudyNav, CaseStudyHeader, CaseStudyBody } from "@/components/case-study";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { caseStudyJsonLd } from "@/lib/json-ld";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.title} — ${portfolio.name}`,
    description: study.dek,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: study.title,
      description: study.dek,
      type: "article",
      siteName: portfolio.name,
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.dek,
    },
  };
}

export default async function Page(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={caseStudyJsonLd(study)} />
      <CaseStudyNav />
      <main id="main-content" className="flex-1">
        <CaseStudyHeader study={study} />
        <CaseStudyBody study={study} />
      </main>
      <Footer />
    </div>
  );
}
