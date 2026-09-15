import { getLocale } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { RevealGroup, RevealItem } from "./motion/reveal";

export async function Metrics() {
  const locale = (await getLocale()) as Locale;

  return (
    <section id="metrics" className="border-y border-edge">
      <RevealGroup
        as="div"
        className="shell grid grid-cols-2 gap-px bg-edge md:grid-cols-4"
      >
        {portfolio.metrics.map((metric) => (
          <RevealItem
            key={metric.label[locale]}
            as="div"
            className="flex flex-col gap-2 bg-canvas px-6 py-10"
          >
            <span className="font-mono text-3xl font-medium tracking-tight text-accent sm:text-4xl">
              {metric.value}
            </span>
            <span className="text-sm leading-snug text-muted">
              {metric.label[locale]}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
