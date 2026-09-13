import {
  Activity,
  Boxes,
  BrainCircuit,
  Cloud,
  Database,
  ShieldCheck,
} from "lucide-react";

import type {
  Expertise,
  ExperienceItem,
  Metric,
  Profile,
  Project,
  SkillGroup,
} from "./types";

/**
 * Single source of truth for all personal content.
 * Update the values below to reflect Pouriya Behdarvandan's real credentials.
 */
export const profile: Profile = {
  name: "Pouriya Behdarvandan",
  firstName: "Pouriya",
  lastName: "Behdarvandan",
  role: "Cloud Infrastructure Architect & Full-Stack AI Engineer",
  tagline:
    "I build event-driven AWS serverless pipelines, containerized cloud platforms, and real-time AI systems that hold up in production.",
  location: "Remote — Worldwide",
  email: "pouriya@behdarvandan.dev",
  availability: "Available for B2B Contracts & Cloud Roles",
  bio: [
    "I design and ship cloud-native systems end to end — event-driven AWS serverless pipelines, containerized workloads orchestrated on ECS Fargate, and infrastructure defined entirely as code with Terraform.",
    "On the data and security side, I build multi-tenant platforms with strict row-level security so tenant data never crosses boundaries. On the AI side, I ship retrieval-augmented generation and LLM systems with real-time token streaming, from vector indexing to the client.",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Behdarvandan",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:pouriya@behdarvandan.dev",
      icon: "mail",
    },
  ],
};

export const metrics: Metric[] = [
  { value: "8+", label: "Years building cloud & AI systems" },
  { value: "40+", label: "Projects delivered to production" },
  { value: "99.99%", label: "Uptime SLO achieved across platforms" },
  { value: "12+", label: "AI/ML systems running in production" },
];

export const expertise: Expertise[] = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Multi-region, multi-account foundations built with infrastructure-as-code, cost governance, and zero-trust networking from day one.",
    tags: ["AWS", "GCP", "Azure", "Terraform"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "LLM orchestration, retrieval-augmented generation, and MLOps pipelines that move models from notebook to production safely.",
    tags: ["LLMs", "RAG", "PyTorch", "LangChain"],
  },
  {
    icon: Boxes,
    title: "Platform Engineering",
    description:
      "Internal developer platforms on Kubernetes with GitOps, paved-road CI/CD, and self-service observability.",
    tags: ["Kubernetes", "Docker", "ArgoCD", "GitOps"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Streaming and batch pipelines, lakehouses, and warehouses designed for freshness, lineage, and cost control.",
    tags: ["Kafka", "dbt", "Snowflake", "Airflow"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Identity, secrets, and policy-as-code with a security-first posture aligned to SOC 2 and well-architected reviews.",
    tags: ["IAM", "Zero Trust", "SOC 2", "Vault"],
  },
  {
    icon: Activity,
    title: "Site Reliability",
    description:
      "SLOs, incident response, capacity planning, and chaos-engineering practices that keep systems boringly reliable.",
    tags: ["SRE", "Prometheus", "Grafana", "PagerDuty"],
  },
];

export const stack: SkillGroup[] = [
  {
    category: "Cloud & DevOps",
    items: [
      "AWS Lambda",
      "AWS S3",
      "AWS ECS Fargate",
      "AWS ECR",
      "Terraform IaC",
      "Docker (Multi-stage)",
      "GitHub Actions CI/CD",
    ],
  },
  {
    category: "Core Engineering",
    items: ["Next.js 15 (App Router)", "TypeScript", "Python", "Tailwind CSS"],
  },
  {
    category: "Data & Security",
    items: [
      "Supabase (PostgreSQL)",
      "Multi-Tenant RLS",
      "pgvector HNSW",
      "Stripe",
      "Upstash Redis",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Cloud & AI Architect",
    company: "Enterprise Cloud Consultancy",
    period: "2022 — Present",
    location: "Remote",
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
    location: "Remote",
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
    location: "Remote",
    summary: "Operated high-throughput, compliance-bound payment infrastructure.",
    highlights: [
      "Automated infrastructure with Terraform, enabling reproducible, audited environments.",
      "Built monitoring and alerting that cut mean time to detection by 60%.",
      "Hardened IAM and secrets management ahead of SOC 2 certification.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "ai-invoice-analyzer",
    description:
      "Event-driven PDF document processing microservice that extracts structured data from invoices on upload, with no servers idling between requests.",
    stack: ["AWS S3", "AWS Lambda", "Groq AI Llama 3.3", "Pydantic"],
    badge: "$0 Idle Compute Cost • 100% Structured JSON Accuracy",
  },
  {
    name: "nextjs-cloud-catalog",
    description:
      "Containerized e-commerce catalog deployed via Terraform IaC on AWS ECS Fargate, with a hardened multi-stage Docker build pipeline.",
    stack: ["Next.js", "Terraform", "AWS ECS Fargate", "Docker"],
    badge: "Slashed Docker footprint to ~145MB (85%+ optimization)",
  },
  {
    name: "enterprise-saas-starter",
    description:
      "Production B2B SaaS core with Supabase SSR authentication and tenant-scoped row-level security enforced at the database layer.",
    stack: ["Next.js", "Supabase", "PostgreSQL RLS", "TypeScript"],
    badge: "Zero-Cross-Tenant Data Leak Enforcement",
  },
  {
    name: "ai-rag-knowledge-assistant",
    description:
      "Multi-tenant, embeddable visitor RAG assistant with Supabase pgvector HNSW indexing for fast semantic retrieval at scale.",
    stack: ["Supabase pgvector", "HNSW", "LLM Streaming", "TypeScript"],
    badge: "Millisecond-Level Token Streaming (SSE)",
  },
];
