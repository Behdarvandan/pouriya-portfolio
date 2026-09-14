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

export interface Project {
  name: string;
  slug: string;
  description: string;
  badge: string;
  technologies: string[];
  sourceUrl: string;
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
  skills: SkillCategory[];
  projects: Project[];
}

export const portfolio: Portfolio = {
  name: "Pouriya Behdarvandan",
  initials: "PB",
  role: "Cloud Infrastructure Architect & Full-Stack AI Engineer",
  taglines: [
    "I build resilient AWS serverless pipelines, containerized cloud applications, and streaming AI microservices that hold up in production.",
    "Enforcing zero-cross-tenant data isolation with strict Row-Level Security.",
    "Shipping multi-tenant SaaS cores with Stripe billing and observability baked in.",
    "Turning retrieval-augmented generation and LLM streaming into production reality.",
  ],
  availability: "Open for B2B Contracts & Global Roles",
  email: "pouriya@behdarvandan.dev",

  bio: [
    "I design and ship resilient cloud-native systems end to end — event-driven AWS serverless pipelines, containerized applications orchestrated on ECS Fargate, and infrastructure defined entirely as code with Terraform.",
    "On the data and security side, I build multi-tenant platforms with strict row-level security so tenant data never crosses boundaries. On the AI side, I ship streaming AI microservices — retrieval-augmented generation and LLM systems with real-time token streaming, from vector indexing to the client.",
  ],

  summary: [
    "Cloud Infrastructure Architect and Full-Stack AI Engineer with 6+ years of experience designing, shipping, and operating resilient cloud-native systems end to end.",
    "I specialize in event-driven AWS serverless pipelines, containerized applications on ECS Fargate, and infrastructure defined entirely as code with Terraform.",
    "Proven across multi-tenant data security with strict Row-Level Security and streaming AI microservices with real-time token streaming.",
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
    location: "Ankara, Turkey",
    timezone: "UTC+3",
  },

  metrics: [
    { value: "6+", label: "Years in web development" },
    { value: "85%+", label: "Docker footprint reduction" },
    { value: "$0", label: "Idle cloud architecture costs" },
    { value: "100%", label: "RLS tenant data isolation" },
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
      category: "Cloud & DevOps",
      items: ["AWS ECS", "AWS Lambda", "AWS S3", "Terraform", "Docker", "CI/CD"],
    },
    {
      category: "Frontend & Core",
      items: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend & Security",
      items: ["Supabase", "Multi-tenant RLS", "Stripe API", "Upstash Redis"],
    },
    {
      category: "AI Integrations",
      items: ["Groq AI", "OpenAI Embeddings", "Pydantic", "pgvector HNSW"],
    },
  ],

  projects: [
    {
      name: "Enterprise Multi-Tenant SaaS Core & Booking Engine",
      slug: "enterprise-saas-starter",
      description:
        "Production-ready B2B SaaS boilerplate featuring Next.js 15 App Router, Supabase SSR Auth, tenant-scoped Row-Level Security (RLS), Stripe billing, Resend email workflows, Playwright E2E, and Sentry observability.",
      badge: "Zero-Cross-Tenant Data Leak Enforcement",
      technologies: ["Next.js 15", "TypeScript", "Supabase RLS", "Stripe", "Playwright", "Sentry"],
      sourceUrl: "https://github.com/Behdarvandan/enterprise-saas-starter",
    },
    {
      name: "Event-Driven AI Document Intelligence Microservice",
      slug: "ai-invoice-analyzer",
      description:
        "Serverless PDF invoice parsing pipeline on AWS S3 & Lambda utilizing Groq AI (Llama 3.3) and Pydantic structured JSON validation with zero idle compute costs.",
      badge: "$0 Idle Compute Cost • 100% JSON Accuracy",
      technologies: ["AWS S3", "AWS Lambda", "Docker", "Python", "Groq AI", "Pydantic"],
      sourceUrl: "https://github.com/Behdarvandan/ai-invoice-analyzer",
    },
    {
      name: "Standalone Containerized Cloud Catalog Engine",
      slug: "nextjs-cloud-catalog",
      description:
        "E-commerce product catalog optimized with Next.js 15 standalone Docker builds, deployed on AWS ECS Fargate via Terraform Infrastructure as Code (IaC).",
      badge: "Slashed Docker footprint to ~145MB (85%+ optimization)",
      technologies: ["Next.js 15", "Docker Standalone", "AWS ECS Fargate", "Terraform", "AWS ECR"],
      sourceUrl: "https://github.com/Behdarvandan/nextjs-cloud-catalog",
    },
    {
      name: "Multi-Tenant Vector RAG Knowledge Base Engine",
      slug: "ai-rag-knowledge-assistant",
      description:
        "Embeddable visitor RAG assistant backed by Supabase pgvector HNSW indexing for real-time cosine similarity search and SSE token streaming.",
      badge: "Millisecond-Level Token Streaming (SSE)",
      technologies: ["pgvector", "HNSW Index", "Web Streams", "OpenAI", "Groq AI"],
      sourceUrl: "https://github.com/Behdarvandan/ai-rag-knowledge-assistant",
    },
  ],
};
