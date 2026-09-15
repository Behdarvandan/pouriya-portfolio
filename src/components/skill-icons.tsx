import {
  Boxes,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiPydantic,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiUpstash,
} from "react-icons/si";
import type { IconType } from "react-icons";

import type { SkillCategoryId } from "@/config/portfolio";

/** "Development" / "Tools" group icon — reuses skills.tsx's own
 * SectionHeading icon choice (Code2) for the left group, and the task's
 * other suggested option (Wrench) for the right, so the two read as a
 * deliberate pair rather than two unrelated picks. */
export const SKILL_GROUP_ICONS: Record<"development" | "tools", LucideIcon> = {
  development: Code2,
  tools: Wrench,
};

export const SKILL_CATEGORY_ICONS: Record<SkillCategoryId, LucideIcon> = {
  frontend: Layout,
  "backend-data": Database,
  "ai-ml": Brain,
  "cloud-platform": Cloud,
  "infra-devops": Server,
};

/**
 * Per-technology icon, keyed by the exact display string in
 * portfolio.ts's `items` arrays. Prefers a real brand mark (react-icons/si,
 * Simple Icons) and falls back to a generic lucide glyph where no brand
 * icon exists — Simple Icons has no AWS/Amazon mark at all (a known,
 * deliberate omission over trademark permissions), and none for Groq or
 * OpenAI either, so those three plus the non-brand concepts (CI/CD,
 * Multi-tenant RLS) get a generic icon instead of a logo.
 */
const SKILL_ITEM_ICONS: Record<string, IconType | LucideIcon> = {
  "AWS ECS": Boxes,
  "AWS Lambda": Zap,
  "AWS S3": Database,
  Terraform: SiTerraform,
  Docker: SiDocker,
  "CI/CD": Workflow,
  "Next.js 15": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Supabase: SiSupabase,
  "Multi-tenant RLS": ShieldCheck,
  "Stripe API": SiStripe,
  "Upstash Redis": SiUpstash,
  "Groq AI": Cpu,
  "OpenAI Embeddings": Sparkles,
  Pydantic: SiPydantic,
  "pgvector HNSW": SiPostgresql,
};

export function SkillTechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = SKILL_ITEM_ICONS[name] ?? Code2;
  return <Icon className={className} aria-hidden="true" />;
}
