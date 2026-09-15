/**
 * Centralized, strictly-typed personal content for the portfolio.
 *
 * This file is the single source of truth. Every component reads its data from
 * here, so editing credentials, projects, metrics, or links only ever happens in
 * one place.
 *
 * Faz 5 (i18n): narrative CV content (bio, experience, project copy, skill
 * labels) is keyed per locale via `LocalizedString`. Proper nouns, tech
 * names, URLs, slugs, and dates are intentionally plain `string` — they don't
 * get translated (see AGENTS.md Faz 5 scope notes).
 */
import type { Locale } from "@/i18n/routing";

export type LocalizedString = Record<Locale, string>;

export type SocialIconName = "github" | "mail";

export interface SocialLink {
  icon: SocialIconName;
  title: string;
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: LocalizedString;
}

export interface ExperienceItem {
  role: LocalizedString;
  company?: string;
  period: string;
  summary?: LocalizedString;
  highlights: LocalizedString[];
}

export interface SkillCategory {
  category: LocalizedString;
  items: string[];
}

export interface Project {
  name: string;
  slug: string;
  description: LocalizedString;
  badge: LocalizedString;
  technologies: string[];
  sourceUrl: string;
  liveUrl?: string;
  caseStudySlug?: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  timezone: string;
}

export interface Portfolio {
  name: string;
  initials: string;
  role: LocalizedString;
  taglines: LocalizedString[];
  availability: LocalizedString;
  email: string;
  bio: LocalizedString[];
  summary: LocalizedString[];
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
  role: {
    en: "Cloud Infrastructure Architect & Full-Stack AI Engineer",
    de: "Cloud-Infrastruktur-Architekt & Full-Stack-KI-Ingenieur",
    tr: "Bulut Altyapı Mimarı ve Full-Stack Yapay Zeka Mühendisi",
    fa: "معمار زیرساخت ابری و مهندس فول‌استک هوش مصنوعی",
  },
  taglines: [
    {
      en: "I build resilient AWS serverless pipelines, containerized cloud applications, and streaming AI microservices that hold up in production.",
      de: "Ich baue robuste AWS-Serverless-Pipelines, containerisierte Cloud-Anwendungen und streamende KI-Microservices, die sich in der Produktion bewähren.",
      tr: "Üretimde sağlam kalan dayanıklı AWS serverless pipeline'ları, konteynerleştirilmiş bulut uygulamaları ve akış tabanlı yapay zeka mikroservisleri geliştiriyorum.",
      fa: "من pipeline‌های سرورلس AWS مقاوم، اپلیکیشن‌های ابری کانتینری‌شده و میکروسرویس‌های هوش مصنوعی با استریم زنده می‌سازم که در محیط تولید پایدار می‌مانند.",
    },
    {
      en: "Enforcing zero-cross-tenant data isolation with strict Row-Level Security.",
      de: "Durchsetzung strikter Mandantentrennung ohne Datenüberschneidung mittels Row-Level Security.",
      tr: "Sıkı Row-Level Security ile kiracılar arası sıfır veri sızıntısı sağlıyorum.",
      fa: "با Row-Level Security سخت‌گیرانه، ایزوله‌سازی کامل داده بین مستأجرها را تضمین می‌کنم.",
    },
    {
      en: "Shipping multi-tenant SaaS cores with Stripe billing and observability baked in.",
      de: "Ich liefere Multi-Tenant-SaaS-Kerne mit integrierter Stripe-Abrechnung und Observability.",
      tr: "Stripe faturalandırması ve observability'nin gömülü olduğu çok kiracılı SaaS çekirdekleri teslim ediyorum.",
      fa: "هسته‌های SaaS چندمستأجری را با صورتحساب Stripe و observability داخلی به تولید می‌رسانم.",
    },
    {
      en: "Turning retrieval-augmented generation and LLM streaming into production reality.",
      de: "Ich mache Retrieval-Augmented Generation und LLM-Streaming zur Produktionsrealität.",
      tr: "Retrieval-augmented generation ve LLM streaming'i üretim gerçekliğine dönüştürüyorum.",
      fa: "retrieval-augmented generation و استریم LLM را به واقعیتی در محیط تولید تبدیل می‌کنم.",
    },
  ],
  availability: {
    en: "Open for B2B Contracts & Global Roles",
    de: "Offen für B2B-Verträge & globale Positionen",
    tr: "B2B Sözleşmelere ve Global Rollere Açığım",
    fa: "آماده همکاری B2B و نقش‌های بین‌المللی",
  },
  email: "pouriya@behdarvandan.dev",

  bio: [
    {
      en: "I design and ship resilient cloud-native systems end to end — event-driven AWS serverless pipelines, containerized applications orchestrated on ECS Fargate, and infrastructure defined entirely as code with Terraform.",
      de: "Ich entwerfe und liefere robuste, cloud-native Systeme von A bis Z — event-getriebene AWS-Serverless-Pipelines, containerisierte Anwendungen orchestriert auf ECS Fargate und Infrastruktur, die vollständig als Code mit Terraform definiert ist.",
      tr: "Uçtan uca dayanıklı bulut-yerli sistemler tasarlıyor ve teslim ediyorum — olay güdümlü AWS serverless pipeline'lar, ECS Fargate üzerinde orkestre edilen konteynerleştirilmiş uygulamalar ve tamamen Terraform ile kod olarak tanımlanmış altyapı.",
      fa: "من سیستم‌های cloud-native مقاوم را از ابتدا تا انتها طراحی و به تولید می‌رسانم — pipeline‌های سرورلس رویدادمحور AWS، اپلیکیشن‌های کانتینری‌شده روی ECS Fargate و زیرساختی که کاملاً به‌صورت Terraform کد شده است.",
    },
    {
      en: "On the data and security side, I build multi-tenant platforms with strict row-level security so tenant data never crosses boundaries. On the AI side, I ship streaming AI microservices — retrieval-augmented generation and LLM systems with real-time token streaming, from vector indexing to the client.",
      de: "Im Bereich Daten und Sicherheit baue ich Multi-Tenant-Plattformen mit strikter Row-Level Security, damit Mandantendaten niemals Grenzen überschreiten. Im KI-Bereich liefere ich streamende KI-Microservices — Retrieval-Augmented-Generation- und LLM-Systeme mit Echtzeit-Token-Streaming, von der Vektorindizierung bis zum Client.",
      tr: "Veri ve güvenlik tarafında, kiracı verisinin asla sınırları aşmaması için sıkı row-level security'ye sahip çok kiracılı platformlar inşa ediyorum. Yapay zeka tarafında ise vektör indekslemeden istemciye kadar gerçek zamanlı token streaming'e sahip retrieval-augmented generation ve LLM sistemleri gibi akış tabanlı yapay zeka mikroservisleri teslim ediyorum.",
      fa: "در حوزه داده و امنیت، پلتفرم‌های چندمستأجری با row-level security سخت‌گیرانه می‌سازم تا داده هیچ مستأجری از مرزها عبور نکند. در حوزه هوش مصنوعی نیز میکروسرویس‌های استریم هوش مصنوعی — سیستم‌های retrieval-augmented generation و LLM با استریم توکن بلادرنگ، از ایندکس‌گذاری برداری تا کلاینت — تحویل می‌دهم.",
    },
  ],

  summary: [
    {
      en: "Cloud Infrastructure Architect and Full-Stack AI Engineer with 6+ years of experience designing, shipping, and operating resilient cloud-native systems end to end.",
      de: "Cloud-Infrastruktur-Architekt und Full-Stack-KI-Ingenieur mit mehr als 6 Jahren Erfahrung im Entwerfen, Liefern und Betreiben robuster, cloud-nativer Systeme von A bis Z.",
      tr: "Uçtan uca dayanıklı bulut-yerli sistemleri tasarlama, teslim etme ve işletme konusunda 6+ yıllık deneyime sahip Bulut Altyapı Mimarı ve Full-Stack Yapay Zeka Mühendisi.",
      fa: "معمار زیرساخت ابری و مهندس فول‌استک هوش مصنوعی با بیش از ۶ سال تجربه در طراحی، تحویل و بهره‌برداری از سیستم‌های cloud-native مقاوم از ابتدا تا انتها.",
    },
    {
      en: "I specialize in event-driven AWS serverless pipelines, containerized applications on ECS Fargate, and infrastructure defined entirely as code with Terraform.",
      de: "Ich bin spezialisiert auf event-getriebene AWS-Serverless-Pipelines, containerisierte Anwendungen auf ECS Fargate und Infrastruktur, die vollständig als Code mit Terraform definiert ist.",
      tr: "Olay güdümlü AWS serverless pipeline'larda, ECS Fargate üzerindeki konteynerleştirilmiş uygulamalarda ve tamamen Terraform ile kod olarak tanımlanmış altyapıda uzmanım.",
      fa: "تخصص من pipeline‌های سرورلس رویدادمحور AWS، اپلیکیشن‌های کانتینری‌شده روی ECS Fargate و زیرساخت کاملاً کدشده با Terraform است.",
    },
    {
      en: "Proven across multi-tenant data security with strict Row-Level Security and streaming AI microservices with real-time token streaming.",
      de: "Bewährt in Multi-Tenant-Datensicherheit mit strikter Row-Level Security und streamenden KI-Microservices mit Echtzeit-Token-Streaming.",
      tr: "Sıkı Row-Level Security ile çok kiracılı veri güvenliğinde ve gerçek zamanlı token streaming'e sahip akış tabanlı yapay zeka mikroservislerinde kanıtlanmış deneyim.",
      fa: "تجربه‌ای اثبات‌شده در امنیت داده چندمستأجری با Row-Level Security سخت‌گیرانه و میکروسرویس‌های هوش مصنوعی با استریم توکن بلادرنگ.",
    },
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
    {
      value: "6+",
      label: {
        en: "Years in web development",
        de: "Jahre Erfahrung in der Webentwicklung",
        tr: "Yıllık web geliştirme deneyimi",
        fa: "سال تجربه در توسعه وب",
      },
    },
    {
      value: "85%+",
      label: {
        en: "Docker footprint reduction",
        de: "Reduzierung des Docker-Footprints",
        tr: "Docker footprint azaltımı",
        fa: "کاهش حجم Docker",
      },
    },
    {
      value: "$0",
      label: {
        en: "Idle cloud architecture costs",
        de: "Leerlaufkosten der Cloud-Architektur",
        tr: "Boşta bulut mimarisi maliyeti",
        fa: "هزینه بیکاری معماری ابری",
      },
    },
    {
      value: "100%",
      label: {
        en: "RLS tenant data isolation",
        de: "RLS-Mandantendatenisolierung",
        tr: "RLS kiracı veri izolasyonu",
        fa: "ایزوله‌سازی داده مستأجر با RLS",
      },
    },
  ],

  experience: [
    {
      role: {
        en: "Cloud & AI Architect",
        de: "Cloud- & KI-Architekt",
        tr: "Bulut ve Yapay Zeka Mimarı",
        fa: "معمار ابری و هوش مصنوعی",
      },
      company: "Enterprise Cloud Consultancy",
      period: "2022 — Present",
      summary: {
        en: "Lead architecture for cloud-native and AI initiatives across fintech and SaaS clients.",
        de: "Verantwortlich für die Architektur cloud-nativer und KI-Initiativen bei Fintech- und SaaS-Kunden.",
        tr: "Fintech ve SaaS müşterileri genelinde bulut-yerli ve yapay zeka girişimleri için mimariye liderlik ediyorum.",
        fa: "رهبری معماری ابتکارات cloud-native و هوش مصنوعی برای مشتریان فین‌تک و SaaS.",
      },
      highlights: [
        {
          en: "Designed multi-region AWS foundations for 20+ workloads, cutting infrastructure spend by 35%.",
          de: "Entwarf Multi-Region-AWS-Grundlagen für über 20 Workloads und senkte die Infrastrukturkosten um 35%.",
          tr: "20'den fazla iş yükü için çok bölgeli AWS temelleri tasarlayarak altyapı harcamasını %35 azalttım.",
          fa: "طراحی زیرساخت چندناحیه‌ای AWS برای بیش از ۲۰ workload، با کاهش ۳۵٪ در هزینه زیرساخت.",
        },
        {
          en: "Shipped a retrieval-augmented knowledge platform serving 12k documents with sub-2s query latency.",
          de: "Lieferte eine Retrieval-Augmented-Wissensplattform mit 12.000 Dokumenten und einer Abfragelatenz unter 2 Sekunden.",
          tr: "12 bin belgeye hizmet veren ve 2 saniyenin altında sorgu gecikmesine sahip retrieval-augmented bir bilgi platformu teslim ettim.",
          fa: "تحویل یک پلتفرم دانش retrieval-augmented برای ۱۲ هزار سند با تأخیر پرس‌وجوی کمتر از ۲ ثانیه.",
        },
        {
          en: "Instituted SLOs and incident response across 3 product lines, reaching 99.99% uptime.",
          de: "Etablierte SLOs und Incident-Response über 3 Produktlinien hinweg und erreichte 99,99% Verfügbarkeit.",
          tr: "3 ürün hattında SLO'lar ve olay müdahale süreçleri kurarak %99,99 çalışma süresine ulaştım.",
          fa: "استقرار SLO و پاسخ به حوادث در ۳ خط محصول، با دستیابی به ۹۹.۹۹٪ uptime.",
        },
      ],
    },
    {
      role: {
        en: "Senior Platform Engineer",
        de: "Senior Platform Engineer",
        tr: "Kıdemli Platform Mühendisi",
        fa: "مهندس ارشد پلتفرم",
      },
      company: "SaaS Scale-up",
      period: "2019 — 2022",
      summary: {
        en: "Built the internal developer platform that powered a 4x engineering-team scale-up.",
        de: "Baute die interne Entwicklerplattform, die eine Vervierfachung des Engineering-Teams ermöglichte.",
        tr: "Mühendislik ekibinin 4 kat büyümesini destekleyen dahili geliştirici platformunu inşa ettim.",
        fa: "ساخت پلتفرم توسعه‌دهنده داخلی که رشد ۴برابری تیم مهندسی را ممکن ساخت.",
      },
      highlights: [
        {
          en: "Migrated 60+ services to Kubernetes with GitOps and self-service golden paths.",
          de: "Migrierte über 60 Services zu Kubernetes mit GitOps und Self-Service Golden Paths.",
          tr: "60'tan fazla servisi GitOps ve self-servis golden path'ler ile Kubernetes'e taşıdım.",
          fa: "مهاجرت بیش از ۶۰ سرویس به Kubernetes با GitOps و golden path‌های خوداتکا.",
        },
        {
          en: "Reduced deploy lead time from days to under 15 minutes with paved-road CI/CD.",
          de: "Reduzierte die Deploy-Vorlaufzeit dank standardisierter CI/CD von Tagen auf unter 15 Minuten.",
          tr: "Standartlaştırılmış CI/CD ile deploy süresini günlerden 15 dakikanın altına indirdim.",
          fa: "کاهش زمان استقرار از چند روز به کمتر از ۱۵ دقیقه با CI/CD استاندارد.",
        },
        {
          en: "Introduced FinOps tooling that surfaced and trimmed 25% of cloud waste.",
          de: "Führte FinOps-Tooling ein, das 25% der Cloud-Verschwendung aufdeckte und reduzierte.",
          tr: "Bulut israfının %25'ini tespit edip azaltan FinOps araçlarını devreye aldım.",
          fa: "معرفی ابزارهای FinOps که ۲۵٪ از هدررفت هزینه ابری را شناسایی و حذف کرد.",
        },
      ],
    },
    {
      role: {
        en: "Cloud Engineer",
        de: "Cloud Engineer",
        tr: "Bulut Mühendisi",
        fa: "مهندس ابری",
      },
      company: "FinTech Platform",
      period: "2017 — 2019",
      summary: {
        en: "Operated high-throughput, compliance-bound payment infrastructure.",
        de: "Betrieb einer durchsatzstarken, compliance-gebundenen Zahlungsinfrastruktur.",
        tr: "Yüksek işlem hacmine sahip, uyumluluk gerekliliği olan ödeme altyapısını işlettim.",
        fa: "بهره‌برداری از زیرساخت پرداخت با توان بالا و الزامات compliance.",
      },
      highlights: [
        {
          en: "Automated infrastructure with Terraform, enabling reproducible, audited environments.",
          de: "Automatisierte Infrastruktur mit Terraform für reproduzierbare, geprüfte Umgebungen.",
          tr: "Terraform ile altyapıyı otomatikleştirerek tekrarlanabilir, denetlenebilir ortamlar sağladım.",
          fa: "خودکارسازی زیرساخت با Terraform برای محیط‌های قابل بازتولید و قابل ممیزی.",
        },
        {
          en: "Built monitoring and alerting that cut mean time to detection by 60%.",
          de: "Baute Monitoring und Alerting auf, die die mittlere Erkennungszeit um 60% senkten.",
          tr: "Ortalama tespit süresini %60 azaltan izleme ve uyarı sistemleri kurdum.",
          fa: "ساخت مانیتورینگ و هشداردهی که میانگین زمان تشخیص را ۶۰٪ کاهش داد.",
        },
        {
          en: "Hardened IAM and secrets management ahead of SOC 2 certification.",
          de: "Härtete IAM und Secrets-Management im Vorfeld der SOC-2-Zertifizierung.",
          tr: "SOC 2 sertifikasyonu öncesinde IAM ve secrets yönetimini sağlamlaştırdım.",
          fa: "تقویت IAM و مدیریت اسرار پیش از دریافت گواهی SOC 2.",
        },
      ],
    },
  ],

  skills: [
    {
      category: {
        en: "Cloud & DevOps",
        de: "Cloud & DevOps",
        tr: "Bulut ve DevOps",
        fa: "ابر و DevOps",
      },
      items: ["AWS ECS", "AWS Lambda", "AWS S3", "Terraform", "Docker", "CI/CD"],
    },
    {
      category: {
        en: "Frontend & Core",
        de: "Frontend & Kernkompetenzen",
        tr: "Frontend ve Temel",
        fa: "فرانت‌اند و هسته",
      },
      items: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    },
    {
      category: {
        en: "Backend & Security",
        de: "Backend & Sicherheit",
        tr: "Backend ve Güvenlik",
        fa: "بک‌اند و امنیت",
      },
      items: ["Supabase", "Multi-tenant RLS", "Stripe API", "Upstash Redis"],
    },
    {
      category: {
        en: "AI Integrations",
        de: "KI-Integrationen",
        tr: "Yapay Zeka Entegrasyonları",
        fa: "یکپارچه‌سازی‌های هوش مصنوعی",
      },
      items: ["Groq AI", "OpenAI Embeddings", "Pydantic", "pgvector HNSW"],
    },
  ],

  projects: [
    {
      name: "Enterprise Multi-Tenant SaaS Core & Booking Engine",
      slug: "enterprise-saas-starter",
      description: {
        en: "Production-ready B2B SaaS boilerplate featuring Next.js 15 App Router, Supabase SSR Auth, tenant-scoped Row-Level Security (RLS), Stripe billing, Resend email workflows, Playwright E2E, and Sentry observability.",
        de: "Produktionsreifes B2B-SaaS-Boilerplate mit Next.js 15 App Router, Supabase-SSR-Auth, mandantenbezogener Row-Level Security (RLS), Stripe-Abrechnung, Resend-E-Mail-Workflows, Playwright-E2E und Sentry-Observability.",
        tr: "Next.js 15 App Router, Supabase SSR Auth, kiracı bazlı Row-Level Security (RLS), Stripe faturalandırma, Resend e-posta iş akışları, Playwright E2E ve Sentry observability içeren üretime hazır B2B SaaS boilerplate'i.",
        fa: "قالب آماده تولید B2B SaaS با Next.js 15 App Router، احراز هویت SSR در Supabase، Row-Level Security (RLS) در سطح مستأجر، صورتحساب Stripe، جریان‌های ایمیل Resend، تست E2E با Playwright و observability با Sentry.",
      },
      badge: {
        en: "Zero-Cross-Tenant Data Leak Enforcement",
        de: "Durchsetzung: Keine mandantenübergreifende Datenlecks",
        tr: "Sıfır Kiracılar Arası Veri Sızıntısı Garantisi",
        fa: "تضمین صفر نشت داده بین مستأجرها",
      },
      technologies: ["Next.js 15", "TypeScript", "Supabase RLS", "Stripe", "Playwright", "Sentry"],
      sourceUrl: "https://github.com/Behdarvandan/enterprise-saas-starter",
      liveUrl: "https://enterprise-saas-starter.vercel.app",
      caseStudySlug: "enterprise-saas-starter",
    },
    {
      name: "Event-Driven AI Document Intelligence Microservice",
      slug: "ai-invoice-analyzer",
      description: {
        en: "Serverless PDF invoice parsing pipeline on AWS S3 & Lambda utilizing Groq AI (Llama 3.3) and Pydantic structured JSON validation with zero idle compute costs.",
        de: "Serverlose PDF-Rechnungs-Parsing-Pipeline auf AWS S3 & Lambda mit Groq AI (Llama 3.3) und strukturierter JSON-Validierung via Pydantic, ohne Leerlauf-Rechenkosten.",
        tr: "Groq AI (Llama 3.3) ve Pydantic yapılandırılmış JSON doğrulaması kullanan, AWS S3 ve Lambda üzerinde sıfır boşta hesaplama maliyetine sahip serverless PDF fatura ayrıştırma pipeline'ı.",
        fa: "پایپ‌لاین سرورلس تجزیه فاکتور PDF روی AWS S3 و Lambda با استفاده از Groq AI (Llama 3.3) و اعتبارسنجی JSON ساختاریافته با Pydantic، بدون هزینه محاسباتی در حالت بیکاری.",
      },
      badge: {
        en: "$0 Idle Compute Cost • 100% JSON Accuracy",
        de: "0 $ Leerlaufkosten • 100% JSON-Genauigkeit",
        tr: "0$ Boşta Hesaplama Maliyeti • %100 JSON Doğruluğu",
        fa: "هزینه محاسباتی بیکاری صفر دلار • دقت ۱۰۰٪ JSON",
      },
      technologies: ["AWS S3", "AWS Lambda", "Docker", "Python", "Groq AI", "Pydantic"],
      sourceUrl: "https://github.com/Behdarvandan/ai-invoice-analyzer",
    },
    {
      name: "Standalone Containerized Cloud Catalog Engine",
      slug: "nextjs-cloud-catalog",
      description: {
        en: "E-commerce product catalog optimized with Next.js 15 standalone Docker builds, deployed on AWS ECS Fargate via Terraform Infrastructure as Code (IaC).",
        de: "E-Commerce-Produktkatalog, optimiert mit eigenständigen Next.js-15-Docker-Builds, bereitgestellt auf AWS ECS Fargate via Terraform Infrastructure as Code (IaC).",
        tr: "Next.js 15 bağımsız Docker build'leri ile optimize edilmiş, Terraform Infrastructure as Code (IaC) aracılığıyla AWS ECS Fargate üzerinde dağıtılan e-ticaret ürün kataloğu.",
        fa: "کاتالوگ محصول تجارت الکترونیک بهینه‌شده با build مستقل Docker در Next.js 15، مستقر روی AWS ECS Fargate از طریق Terraform Infrastructure as Code (IaC).",
      },
      badge: {
        en: "Slashed Docker footprint to ~145MB (85%+ optimization)",
        de: "Docker-Footprint auf ~145 MB reduziert (über 85% Optimierung)",
        tr: "Docker footprint'i ~145MB'a düşürdüm (%85+ optimizasyon)",
        fa: "کاهش حجم Docker به حدود ۱۴۵ مگابایت (بیش از ۸۵٪ بهینه‌سازی)",
      },
      technologies: ["Next.js 15", "Docker Standalone", "AWS ECS Fargate", "Terraform", "AWS ECR"],
      sourceUrl: "https://github.com/Behdarvandan/nextjs-cloud-catalog",
    },
    {
      name: "Multi-Tenant Vector RAG Knowledge Base Engine",
      slug: "ai-rag-knowledge-assistant",
      description: {
        en: "Embeddable visitor RAG assistant backed by Supabase pgvector HNSW indexing for real-time cosine similarity search and SSE token streaming.",
        de: "Einbettbarer RAG-Assistent für Besucher, unterstützt durch Supabase-pgvector-HNSW-Indizierung für Echtzeit-Cosine-Similarity-Suche und SSE-Token-Streaming.",
        tr: "Gerçek zamanlı kosinüs benzerliği araması ve SSE token streaming için Supabase pgvector HNSW indekslemesiyle desteklenen, gömülebilir ziyaretçi RAG asistanı.",
        fa: "دستیار RAG قابل جاسازی برای بازدیدکنندگان، مبتنی بر ایندکس‌گذاری pgvector HNSW در Supabase برای جست‌وجوی شباهت کسینوسی بلادرنگ و استریم توکن با SSE.",
      },
      badge: {
        en: "Millisecond-Level Token Streaming (SSE)",
        de: "Token-Streaming im Millisekundenbereich (SSE)",
        tr: "Milisaniye Seviyesinde Token Streaming (SSE)",
        fa: "استریم توکن در سطح میلی‌ثانیه (SSE)",
      },
      technologies: ["pgvector", "HNSW Index", "Web Streams", "OpenAI", "Groq AI"],
      sourceUrl: "https://github.com/Behdarvandan/ai-rag-knowledge-assistant",
    },
  ],
};
