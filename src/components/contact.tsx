import { Clock, Mail, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { portfolio } from "@/config/portfolio";
import { SocialIcon } from "./icons";
import { RevealGroup, RevealItem } from "./motion/reveal";

export async function Contact() {
  const t = await getTranslations("Contact");
  const sectionT = await getTranslations("Sections.contact");

  const rows = [
    {
      icon: Mail,
      label: t("emailLabel"),
      value: portfolio.contact.email,
      href: `mailto:${portfolio.contact.email}`,
    },
    { icon: MapPin, label: t("locationLabel"), value: portfolio.contact.location },
    { icon: Clock, label: t("timezoneLabel"), value: portfolio.contact.timezone },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-edge bg-panel"
    >
      <RevealGroup
        as="div"
        className="shell flex flex-col items-start gap-10 py-24 md:flex-row md:items-end md:justify-between md:py-32"
      >
        <RevealItem as="div" className="flex max-w-2xl flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            05 — {sectionT("label")}
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            {sectionT("title")}
          </h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {sectionT("description")}
          </p>
        </RevealItem>

        <RevealItem as="div" className="flex flex-col gap-5">
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            {portfolio.contact.email}
          </a>

          <div className="grid gap-3">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-3 text-sm text-muted"
              >
                <row.icon className="h-4 w-4 text-faint" />
                <span className="w-20 font-mono text-xs uppercase tracking-widest text-faint">
                  {row.label}
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    className="text-ink transition-colors hover:text-accent"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-ink">{row.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-1">
            {portfolio.socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={
                  social.icon === "mail" ? undefined : "noopener noreferrer"
                }
                aria-label={social.title}
                title={social.title}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
