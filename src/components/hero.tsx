import { ArrowDown, ArrowUpRight } from "lucide-react";

import { profile } from "@/lib/data";
import { SocialIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="glow-accent pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-80"
        aria-hidden="true"
      />

      <div className="shell relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-24">
        <div className="flex max-w-3xl flex-col gap-8">
          <div className="flex animate-rise items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {profile.role} — {profile.availability}
            </p>
          </div>

          <h1
            className="animate-rise font-display text-5xl font-medium leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">{profile.firstName}</span>
            <span className="block">{profile.lastName}</span>
          </h1>

          <p
            className="animate-rise max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="flex animate-rise flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
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
          </div>

          <div
            className="flex animate-rise items-center gap-6"
            style={{ animationDelay: "320ms" }}
          >
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
                {social.label}
              </a>
            ))}
          </div>
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
      </div>
    </section>
  );
}
