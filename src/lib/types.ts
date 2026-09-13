import type { LucideIcon } from "lucide-react";

export type SocialIconName = "github" | "linkedin" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Expertise {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  badge: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  availability: string;
  bio: string[];
  socials: SocialLink[];
}
