import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import { SITE_URL } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * Route + nav skeleton only (Faz 6.2) — every entry below is lorem
 * placeholder, not portfolio.ts data. Real CV content replaces this in a
 * later phase. The chrome around it (labels, eyebrow, the placeholder
 * notice itself) is translated like the rest of the site; the throwaway
 * body copy intentionally isn't.
 */
const placeholderExperience = [
  {
    period: "20XX — Present",
    role: "Placeholder Role",
    company: "Placeholder Company",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    period: "20XX — 20XX",
    role: "Placeholder Role",
    company: "Placeholder Company",
    summary:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
] as const;

const placeholderSkills = [
  { category: "Placeholder Category", items: ["Lorem", "Ipsum", "Dolor"] },
  { category: "Placeholder Category", items: ["Sit", "Amet", "Consectetur"] },
] as const;

const placeholderEducation = [
  {
    period: "20XX — 20XX",
    degree: "Placeholder Degree",
    institution: "Placeholder Institution",
  },
] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "Resume" });
  const title = `${t("eyebrow")} — ${portfolio.name}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: t("title"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/resume" : `/${locale}/resume`,
    },
    // Placeholder content this phase — keep it out of search results until
    // the real CV copy lands (see the note above and README Faz 6.2).
    robots: { index: false, follow: true },
  };
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as Locale;
  const t = await getTranslations("Resume");

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main id="main-content" className="flex-1">
        <section className="bg-canvas">
          <div className="shell flex flex-col gap-4 py-24 md:py-32">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t("eyebrow")}
            </p>
            <h1 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              {portfolio.name} — {portfolio.role[loc]}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {t("title")}
            </p>
            <p className="mt-2 max-w-2xl rounded-md border border-dashed border-edge px-4 py-3 font-mono text-xs uppercase tracking-widest text-faint">
              {t("placeholderNote")}
            </p>
          </div>
        </section>

        <section className="border-t border-edge bg-panel">
          <div className="shell py-24 md:py-32">
            <SectionHeading
              number="01"
              label={t("summaryLabel")}
              title="Lorem ipsum dolor sit amet."
            />
            <RevealGroup as="div" className="mt-14">
              <RevealItem as="div" className="max-w-2xl text-sm leading-relaxed text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </RevealItem>
            </RevealGroup>
          </div>
        </section>

        <section className="border-t border-edge bg-canvas">
          <div className="shell py-24 md:py-32">
            <SectionHeading
              number="02"
              label={t("experienceLabel")}
              title="Consectetur adipiscing elit."
            />
            <RevealGroup as="ol" className="mt-14">
              {placeholderExperience.map((item, index) => (
                <RevealItem
                  key={index}
                  as="li"
                  className="grid gap-4 border-t border-edge py-8 last:border-b md:grid-cols-[200px_1fr] md:gap-8"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {item.period}
                  </span>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted">{item.company}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.summary}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="border-t border-edge bg-panel">
          <div className="shell py-24 md:py-32">
            <SectionHeading
              number="03"
              label={t("skillsLabel")}
              title="Sed do eiusmod tempor incididunt."
            />
            <RevealGroup
              as="div"
              className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {placeholderSkills.map((category, index) => (
                <RevealItem key={index} as="div" className="flex flex-col gap-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {category.category}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-edge px-3 py-1.5 font-mono text-xs text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="border-t border-edge bg-canvas">
          <div className="shell py-24 md:py-32">
            <SectionHeading
              number="04"
              label={t("educationLabel")}
              title="Ut labore et dolore magna aliqua."
            />
            <RevealGroup as="ol" className="mt-14">
              {placeholderEducation.map((item, index) => (
                <RevealItem
                  key={index}
                  as="li"
                  className="grid gap-4 border-t border-edge py-8 last:border-b md:grid-cols-[200px_1fr] md:gap-8"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-muted">{item.institution}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
