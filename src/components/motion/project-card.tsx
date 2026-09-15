"use client";

import { ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Locale } from "@/i18n/routing";
import type { Project } from "@/config/portfolio";
import { GitHubIcon } from "../icons";
import { itemVariants } from "./reveal";

// rotateX needs a perspective ancestor (set on the grid in projects.tsx) and
// transform-style: preserve-3d here so the tilt reads as depth, not a skew.
export function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("ProjectCard");
  // fa is RTL: an "up-right" arrow reads as pointing backwards in a
  // right-to-left flow, so the external/forward-motion icons mirror to
  // "up-left" / "left" for that locale only (see AGENTS.md Faz 5 RTL scope).
  const isRtl = locale === "fa";
  const ExternalArrow = isRtl ? ArrowUpLeft : ArrowUpRight;
  const ForwardArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ rotateX: -4, y: -4, scale: 1.01, zIndex: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group flex flex-col gap-4 bg-canvas p-5 transition-colors hover:bg-panel md:gap-5 md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-xl font-medium text-ink">
            {project.name}
          </h3>
          <span className="font-mono text-xs text-faint">{project.slug}</span>
        </div>
        <ExternalArrow className="h-5 w-5 shrink-0 text-faint transition-colors group-hover:text-accent" />
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {project.description[locale]}
      </p>

      <div className="mt-auto flex flex-col gap-4 pt-2">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-edge px-2 py-1 font-mono text-[11px] text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="border-t border-edge pt-4">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            {project.badge[locale]}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            {t("viewSource")}
          </a>

          {/* Faz 4: warm accent marks a live, running deployment — distinct
              from the neutral repo link and the emerald case-study link. */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-warm transition-colors hover:text-ink"
            >
              <ExternalArrow className="h-3.5 w-3.5" />
              {t("liveDemo")}
            </a>
          ) : null}

          {project.caseStudySlug ? (
            <Link
              href={`/work/${project.caseStudySlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-ink"
            >
              {t("caseStudy")}
              <ForwardArrow className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
