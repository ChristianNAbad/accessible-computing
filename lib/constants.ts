import {
  Globe,
  Code2,
  ShoppingCart,
  Megaphone,
  Accessibility,
  Bot,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "Accessible Computing, Inc.",
  shortName: "Accessible Computing",
  tagline: "We Built Our Name Making You Accessible",
  phone: "(704) 981-0185",
  address: "Matthews, NC 28105",
  email: "info@accessiblecomputing.com",
  founded: 2005,
  linkedin: "https://www.linkedin.com/in/christianabad/",
  resume: "https://theabads.com/resume/",
  url: "https://accessiblecomputing.com",
} as const;

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    title: "Web Design & Development",
    description:
      "Responsive, accessible websites built with modern standards. From corporate sites to complex web applications — crafted for every user.",
    icon: Globe,
  },
  {
    title: "Custom Application Development",
    description:
      "Full-stack applications tailored to your business logic. Database design, API development, and scalable architectures.",
    icon: Code2,
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Online stores that convert. Accessible shopping experiences, payment integration, and inventory management systems.",
    icon: ShoppingCart,
  },
  {
    title: "Internet Marketing",
    description:
      "Organic SEO, content strategy, and inbound marketing that drives qualified traffic. Data-driven campaigns that deliver ROI.",
    icon: Megaphone,
  },
  {
    title: "Accessibility Consulting",
    description:
      "WCAG 2.2 AAA audits, Section 508 compliance, remediation roadmaps. Making the web usable for everyone — it's in our name.",
    icon: Accessibility,
  },
  {
    title: "AI & Agentic Development",
    description:
      "Leveraging 30+ years of engineering expertise with cutting-edge agentic AI. Autonomous coding workflows that accelerate delivery.",
    icon: Bot,
  },
];

export interface PortfolioItem {
  client: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    client: "Bank of America",
    description:
      "Led web accessibility compliance for 5,000+ customer-facing pages as VP/Web Accessibility Team Manager.",
    tags: ["WCAG 1.0", "Section 508", "Enterprise"],
  },
  {
    client: "CannaBuddy.com",
    description:
      "Full ecommerce platform for Fueling My Dreams' award-winning hemp THC beverage brand. Powered by agentic AI development workflows.",
    tags: ["Ecommerce", "AI/Agentic", "Full-Stack"],
  },
  {
    client: "Autonomous Agent Fleet",
    description:
      "A production fleet of autonomous bots — Express, TypeScript, Prisma, Railway — built end-to-end with Claude Code agentic workflows and continuous deployment.",
    tags: ["Claude Code", "TypeScript", "CI/CD"],
  },
  {
    client: "DHS / USCIS",
    description:
      "Web applications supporting paperless immigration modernization. ADA-compliant, Section 508 certified.",
    tags: ["Government", "Accessibility", "Agile"],
  },
  {
    client: "Purely Found",
    description:
      "Modern web presence and digital marketing strategy for organic search visibility.",
    tags: ["SEO", "Web Design", "Marketing"],
  },
  {
    client: "Appalachian State University",
    description:
      "Web development and digital infrastructure for the university's online presence.",
    tags: ["Education", "Web Dev", "CMS"],
  },
  {
    client: "US Navy (Contractor)",
    description:
      "Classified, standards-compliant web applications built under full SDLC methodology.",
    tags: ["Government", "Classified", "Full-Stack"],
  },
  {
    client: "Blackboard",
    description:
      "Educational technology platform development and accessibility consulting.",
    tags: ["EdTech", "Accessibility", "SaaS"],
  },
  {
    client: "Ameren",
    description:
      "Utility company web applications and digital transformation initiatives.",
    tags: ["Enterprise", "Web Dev", "Utilities"],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Christian and his team delivered exceptional work on our accessibility compliance. Their deep understanding of WCAG standards transformed our digital presence.",
    name: "Michael Palermo",
    title: "Director of Technology",
    company: "Enterprise Client",
  },
  {
    quote:
      "The combination of technical expertise and accessibility knowledge is rare. Accessible Computing brought both to every engagement.",
    name: "Project Stakeholder",
    title: "Senior Manager",
    company: "Financial Services",
  },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: "1995",
    title: "Career Begins",
    description: "Software engineering at Mitsubishi Semiconductors. C, Solaris, X-Motif.",
  },
  {
    year: "2001",
    title: "Bank of America",
    description:
      "Joined BofA, eventually becoming VP leading web accessibility for 5,000+ pages.",
  },
  {
    year: "2005",
    title: "Accessible Computing Founded",
    description:
      "Launched the agency with a mission: make the web usable for everyone.",
  },
  {
    year: "2013",
    title: "Federal Government Work",
    description:
      "Senior developer for DHS/USCIS, building ADA-compliant government applications.",
  },
  {
    year: "2018",
    title: "CannaBuddy Launched",
    description:
      "Founder and CEO of CannaBuddy: hemp THC beverages and cannabis products.",
  },
  {
    year: "2025–Now",
    title: "AI & Agentic Era",
    description:
      "Pioneering agentic AI coding with Claude Code. Three decades of expertise compounding with autonomous workflows.",
  },
];

/**
 * Commercial terms (decided 2026-09-27). INTERNAL: they describe the client we
 * want, and no concept renders them. The voice-consistency test fails if a
 * price or term reaches a page. Discussed on the first call instead.
 */
export const TERMS = {
  monthlyUsd: 2000,
  setupFeeUsd: 2000,
  termMonths: 12,
  noticeDays: 60,
  outAfterMonths: 3,
} as const;

export const STATS = [
  { value: 30, suffix: "+", label: "Years Building for the Web" },
  { value: 2, suffix: "", label: "Consumer Brands Run on The Edge" },
  { value: 20, suffix: "+", label: "Enterprise Clients Served" },
] as const;

/** The technology the agency sells. Named, never explained: outcomes only. */
export const EDGE = {
  name: "The Edge",
  descriptor: "our content and growth platform",
} as const;

/** Commerce platforms the work plugs into. Order is the order we say them. */
export const PLATFORMS = [
  "Shopify",
  "WooCommerce",
  "Lightspeed Retail",
  "Lightspeed eCom",
] as const;

/** Email platforms we run campaigns and flows in. */
export const EMAIL_PLATFORMS = ["Klaviyo", "Mailchimp"] as const;

/**
 * The shared language every design concept renders. Headlines stay per
 * concept; these sentences do not change between concepts. Agency forward:
 * the agency and its team lead, The Edge is the named technology behind the
 * work, and the copy qualifies for established brands without stating a
 * price or a term.
 */
export const MESSAGING = {
  eyebrow: "A marketing agency for brands that sell online",
  positioning:
    "Accessible Computing is a marketing agency for established brands that sell online. Search, content, email, paid and AI-search visibility, delivered by a dedicated account manager who is a working marketing expert and a small team of specialists.",
  edge:
    "The work runs on The Edge, our own content and growth platform. We market this site with it too, so what you are reading is evidence of what it produces.",
  fit: "Built for brands ready to invest in growth every month, not a one-month test.",
  platforms:
    "We work in Shopify, WooCommerce, Lightspeed Retail and Lightspeed eCom, with Klaviyo, Mailchimp and other popular email platforms.",
  manager:
    "Your account manager is a working marketing expert who owns your plan, reviews every deliverable before it ships, and writes your monthly report.",
  team:
    "Behind them is a small team of specialists in content, search, email and paid. We keep the client list short and take one client per product category.",
  founder:
    "The founder, Christian N. Abad, is a thirty-year engineer and the Founder and CEO of CannaBuddy and Purely Found. Both brands run on The Edge.",
  audit:
    "Send us your site. You get your search gaps, what your email list could be earning, and whether AI answer engines mention you at all. Your account manager reviews it before it is sent.",
  auditSent: "Received. Your account manager will send your audit within two business days.",
  terms:
    "Engagements are long-term plans with a clear exit, agreed up front. We walk through the specifics on the first call.",
} as const;

export const BLOG_CATEGORIES = [
  "accessibility",
  "web-development",
  "seo-marketing",
  "ai-agentic-coding",
  "case-studies",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  accessibility: "Accessibility",
  "web-development": "Web Development",
  "seo-marketing": "SEO & Marketing",
  "ai-agentic-coding": "AI & Agentic Coding",
  "case-studies": "Case Studies",
};
