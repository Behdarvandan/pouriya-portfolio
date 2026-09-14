/**
 * Centralized, strictly-typed personal content for the portfolio.
 *
 * This file is the single source of truth. Every component reads its data from
 * here, so editing credentials, projects, metrics, or links only ever happens in
 * one place.
 */

export type SocialIconName = "github" | "mail";

export interface SocialLink {
  icon: SocialIconName;
  title: string;
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company?: string;
  period: string;
  summary?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SkillSection {
  section: string;
  categories: SkillCategory[];
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  technologies: string[];
  sourceUrl?: string;
  liveUrl?: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  timezone: string;
}

export interface Portfolio {
  name: string;
  initials: string;
  role: string;
  taglines: string[];
  availability: string;
  email: string;
  bio: string[];
  summary: string[];
  socials: SocialLink[];
  contact: ContactInfo;
  metrics: Metric[];
  experience: ExperienceItem[];
  skills: SkillSection[];
  projects: Project[];
}

export const portfolio: Portfolio = {
  name: "Pouriya Behdarvandan",
  initials: "PB",
  role: "Cloud Infrastructure Architect & Full-Stack AI Engineer",
  taglines: [
    "I build event-driven AWS serverless pipelines, containerized cloud platforms, and real-time AI systems that hold up in production.",
    "Shipping cloud-native infrastructure that scales without idle cost.",
    "Enforcing zero-cross-tenant data isolation with strict Row-Level Security.",
    "Turning LLMs and retrieval-augmented generation into production reality.",
  ],
  availability: "Open for Global Remote Contracts & European Roles",
  email: "pouriya@behdarvandan.dev",

  bio: [
    "I design and ship cloud-native systems end to end — event-driven AWS serverless pipelines, containerized workloads orchestrated on ECS Fargate, and infrastructure defined entirely as code with Terraform.",
    "On the data and security side, I build multi-tenant platforms with strict row-level security so tenant data never crosses boundaries. On the AI side, I ship retrieval-augmented generation and LLM systems with real-time token streaming, from vector indexing to the client.",
  ],

  summary: [
    "Cloud Infrastructure Architect and Full-Stack AI Engineer with 6+ years of experience designing, shipping, and operating cloud-native systems end to end.",
    "I specialize in event-driven AWS serverless pipelines, containerized workloads on ECS Fargate, and infrastructure defined entirely as code with Terraform.",
    "Proven across multi-tenant data security with strict Row-Level Security and retrieval-augmented generation systems with real-time token streaming.",
  ],

  socials: [
    {
      icon: "github",
      title: "GitHub",
      label: "Behdarvandan",
      href: "https://github.com/Behdarvandan",
    },
    {
      icon: "mail",
      title: "Email",
      label: "pouriya@behdarvandan.dev",
      href: "mailto:pouriya@behdarvandan.dev",
    },
  ],

  contact: {
    email: "pouriya@behdarvandan.dev",
    location: "Antalya, Turkey",
    timezone: "UTC+3",
  },

  metrics: [
    { value: "6+", label: "Years in web development" },
    { value: "85%+", label: "Docker image size reduction" },
    { value: "$0", label: "Idle cloud compute cost" },
    { value: "100%", label: "Row-level security tenant isolation" },
  ],

  experience: [
    {
      role: "Cloud & AI Architect",
      company: "Enterprise Cloud Consultancy",
      period: "2022 — Present",
      summary:
        "Lead architecture for cloud-native and AI initiatives across fintech and SaaS clients.",
      highlights: [
        "Designed multi-region AWS foundations for 20+ workloads, cutting infrastructure spend by 35%.",
        "Shipped a retrieval-augmented knowledge platform serving 12k documents with sub-2s query latency.",
        "Instituted SLOs and incident response across 3 product lines, reaching 99.99% uptime.",
      ],
    },
    {
      role: "Senior Platform Engineer",
      company: "SaaS Scale-up",
      period: "2019 — 2022",
      summary:
        "Built the internal developer platform that powered a 4x engineering-team scale-up.",
      highlights: [
        "Migrated 60+ services to Kubernetes with GitOps and self-service golden paths.",
        "Reduced deploy lead time from days to under 15 minutes with paved-road CI/CD.",
        "Introduced FinOps tooling that surfaced and trimmed 25% of cloud waste.",
      ],
    },
    {
      role: "Cloud Engineer",
      company: "FinTech Platform",
      period: "2017 — 2019",
      summary:
        "Operated high-throughput, compliance-bound payment infrastructure.",
      highlights: [
        "Automated infrastructure with Terraform, enabling reproducible, audited environments.",
        "Built monitoring and alerting that cut mean time to detection by 60%.",
        "Hardened IAM and secrets management ahead of SOC 2 certification.",
      ],
    },
  ],

  skills: [
    {
      section: "Cloud & Infrastructure",
      categories: [
        { category: "AWS", items: ["ECS Fargate", "Lambda", "S3", "ECR"] },
        { category: "Infrastructure as Code", items: ["Terraform", "Docker"] },
      ],
    },
    {
      section: "Engineering",
      categories: [
        { category: "Languages & Frameworks", items: ["Next.js 15", "TypeScript", "Python"] },
        { category: "Data & Security", items: ["Supabase", "Row-Level Security", "pgvector"] },
        { category: "AI & LLM", items: ["Groq AI", "RAG", "SSE Streaming"] },
      ],
    },
  ],

  projects: [
    {
      name: "Enterprise Multi-Tenant SaaS Engine",
      slug: "enterprise-saas-starter",
      description:
        "Production B2B SaaS core with Supabase SSR authentication and tenant-scoped row-level security enforced at the database layer.",
      technologies: ["Next.js 15", "Supabase SSR Auth", "PostgreSQL RLS", "Stripe", "Resend", "Playwright", "Sentry"],
      sourceUrl: "https://github.com/Behdarvandan/enterprise-saas-starter",
    },
    {
      name: "Event-Driven AI Document Intelligence",
      slug: "ai-invoice-analyzer",
      description:
        "Event-driven PDF document processing microservice that extracts structured data from invoices on upload, with no servers idling between requests.",
      technologies: ["AWS S3", "AWS Lambda", "Groq AI", "Llama 3.3", "Pydantic"],
      sourceUrl: "https://github.com/Behdarvandan/ai-invoice-analyzer",
    },
    {
      name: "Cloud-Native Standalone Catalog Engine",
      slug: "nextjs-cloud-catalog",
      description:
        "Containerized e-commerce catalog deployed via Terraform IaC on AWS ECS Fargate, with a hardened multi-stage Docker build pipeline.",
      technologies: ["Next.js 15", "Docker", "Terraform", "AWS ECS Fargate"],
      sourceUrl: "https://github.com/Behdarvandan/nextjs-cloud-catalog",
    },
    {
      name: "Multi-Tenant Vector RAG Assistant",
      slug: "ai-rag-knowledge-assistant",
      description:
        "Multi-tenant, embeddable visitor RAG assistant with Supabase pgvector HNSW indexing for fast semantic retrieval at scale.",
      technologies: ["Supabase pgvector", "HNSW", "Groq AI", "Llama 3.3", "SSE Streaming"],
      sourceUrl: "https://github.com/Behdarvandan/ai-rag-knowledge-assistant",
    },
  ],
};
