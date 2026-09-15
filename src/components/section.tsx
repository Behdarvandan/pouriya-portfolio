import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  icon: Icon,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        {label}
      </p>
      <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
