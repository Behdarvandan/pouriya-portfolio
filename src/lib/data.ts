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
  role: "Cloud & AI Architect",
  tagline:
    "I design resilient cloud platforms and ship production-grade AI systems — from multi-region infrastructure to LLM-powered products.",
  location: "Remote — Worldwide",
  email: "pouriya@behdarvandan.dev",
  availability: "Available for new engagements",
  bio: [
    "I help teams turn ambitious ideas into dependable systems. As a cloud and AI architect, I work across the full stack of modern infrastructure — multi-region cloud foundations, Kubernetes platforms, data pipelines, and machine-learning systems that survive contact with production.",
    "My focus sits where engineering rigor meets product velocity: well-architected defaults, observable and cost-aware platforms, and AI that is safe, fast, and genuinely useful. Above all, I care about reducing complexity rather than adding to it.",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Behdarvandan",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pouriya-behdarvandan",
      icon: "linkedin",
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
    category: "Cloud",
    items: ["AWS", "Google Cloud", "Azure", "Terraform", "Pulumi", "CloudFormation"],
  },
  {
    category: "AI & ML",
    items: ["Python", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Hugging Face"],
  },
  {
    category: "Platform",
    items: ["Kubernetes", "Docker", "Helm", "ArgoCD", "GitHub Actions", "Linux"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "Redis", "Kafka", "Snowflake", "dbt", "Airflow"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "SQL", "Bash"],
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
    name: "Multi-Region Cloud Landing Zone",
    description:
      "A Terraform-driven AWS landing zone with isolated accounts, zero-trust networking, and centralized observability for regulated workloads.",
    stack: ["Terraform", "AWS", "VPC", "IAM"],
    metrics: ["3 regions", "-35% infra cost", "99.99% uptime"],
  },
  {
    name: "LLM RAG Knowledge Platform",
    description:
      "A retrieval-augmented generation system that answers questions over enterprise documentation with citations and guardrails.",
    stack: ["Python", "LangChain", "PostgreSQL", "OpenAI"],
    metrics: ["12k documents", "sub-2s latency", "92% answer quality"],
  },
  {
    name: "Real-time Analytics Pipeline",
    description:
      "A streaming pipeline unifying product events into a governed lakehouse for near-real-time reporting and ML feature generation.",
    stack: ["Kafka", "dbt", "Snowflake", "Airflow"],
    metrics: ["1M events/min", "<5 min freshness"],
  },
  {
    name: "MLOps Serving Platform",
    description:
      "An end-to-end platform for training, versioning, and serving models with GPU auto-scaling and drift monitoring.",
    stack: ["Kubernetes", "PyTorch", "MLflow", "Grafana"],
    metrics: ["12 models", "auto-scaling GPU", "24/7 monitoring"],
  },
];
