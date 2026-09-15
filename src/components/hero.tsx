import { ArrowDown, ArrowUpRight } from "lucide-react";

import { portfolio } from "@/config/portfolio";
import { RotatingText } from "./rotating-text";
import { SocialIcon } from "./icons";
import { RevealGroup, RevealItem } from "./motion/reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="blueprint-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="glow-accent pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-80"
        aria-hidden="true"
      />
      {/* Faz 4: static two-accent wash, additive to the Faz 3 layers above —
          visible on first paint, independent of any hover/scroll motion. */}
      <div
        className="duotone-wash pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <RevealGroup
        as="div"
        className="shell relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-24"
      >
        <div className="flex max-w-3xl flex-col gap-8">
          <RevealItem as="div" className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {portfolio.availability}
            </p>
          </RevealItem>

          <RevealItem as="div">
            <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
              {portfolio.name}
            </h1>
          </RevealItem>

          <RevealItem as="div">
            <p className="font-mono text-sm uppercase tracking-widest text-accent sm:text-base">
              {portfolio.role}
            </p>
          </RevealItem>

          <RevealItem as="div">
            <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              <RotatingText phrases={portfolio.taglines} />
            </p>
          </RevealItem>

          <RevealItem as="div" className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-edge px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </RevealItem>

          <RevealItem as="div" className="flex items-center gap-6">
            {portfolio.socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
                {social.title}
              </a>
            ))}
          </RevealItem>
        </div>

        <a
          href="#metrics"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-ink md:flex"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </RevealGroup>
    </section>
  );
}
