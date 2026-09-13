import { Mail } from "lucide-react";

import { profile } from "@/lib/data";
import { SocialIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-edge">
      <div className="shell py-24 md:py-32">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              06 — Contact
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              Let’s build something resilient together.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              I’m currently {profile.availability.toLowerCase()}. If you’re
              scaling cloud infrastructure or shipping an AI product, I’d love
              to hear about it.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <div className="flex items-center gap-4">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={
                    social.icon === "mail" ? undefined : "noopener noreferrer"
                  }
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <SocialIcon name={social.icon} className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
