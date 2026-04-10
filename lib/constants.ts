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
      "Full ecommerce platform for award-winning hemp THC beverages. Powered by agentic AI development workflows.",
    tags: ["Ecommerce", "AI/Agentic", "Full-Stack"],
  },
  {
    client: "DHS / USCIS",
    description:
      "Web applications supporting paperless immigration modernization. ADA-compliant, Section 508 certified.",
    tags: ["Government", "Accessibility", "Agile"],
  },
  {
    client: "PurelyFound.com",
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
      "Co-founded CannaBuddy — hemp THC beverages & cannabis products. CEO role.",
  },
  {
    year: "2025",
    title: "AI & Agentic Era",
    description:
      "Pioneering agentic AI coding with Claude Code. 30+ years of expertise meets bleeding-edge technology.",
  },
];

export const STATS = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Pages Made Accessible" },
  { value: 20, suffix: "+", label: "Enterprise Clients" },
] as const;

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
