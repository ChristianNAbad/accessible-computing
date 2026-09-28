"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useContactForm } from "@/components/variants/use-contact-form";
import {
  COMPANY,
  NAV_ITEMS,
  SERVICES,
  PORTFOLIO,
  MILESTONES,
  TESTIMONIALS,
  STATS,
} from "@/lib/constants";

const CHIPS = ["Since 2005", "WCAG 2.2 AAA", "Klaviyo", "Shopify", "WooCommerce", "Google Ads"];

const TOOLS = [
  {
    name: "The Free Audit",
    body: "Your search gaps, your email revenue ceiling, and whether AI answer engines mention you. Reviewed by your account manager before it is sent.",
  },
  {
    name: "The Monthly Report",
    body: "One page in plain language: what shipped, what it did, what changes next month. Written by a person who knows your account, not exported from a dashboard.",
  },
  {
    name: "The Client Dashboard",
    body: "Rankings, traffic, content shipped, email performance and AI citations, live, without the jargon.",
  },
];

const PROMISES = [
  { title: "One client per category", body: "Your account manager never works for a competitor of yours." },
  { title: "A person reviews everything", body: "Nothing ships to your site, your list or your ad account without a human sign-off." },
  { title: "Sixty-day out after month three", body: "Twelve-month terms, with a door. Almost nobody uses it." },
];

export function ProofSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      {/* ============ Header ============ */}
      <header className="relative z-20 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label={`${COMPANY.shortName} — Home`} className="pf-display text-xl font-bold text-primary">
            Accessible Computing
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-7" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link href={navItem.href} className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="hidden text-sm font-bold text-primary lg:inline">
              {COMPANY.phone}
            </a>
            <a href="#contact" className="hidden h-10 items-center rounded-lg bg-accent px-5 text-sm font-bold text-background transition-opacity hover:opacity-90 sm:inline-flex">
              Get my free audit
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ============ Hero ============ */}
        <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden px-6 pt-14 pb-16 sm:pt-20">
          <div className="pf-blob" aria-hidden="true" />
          <motion.div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center" variants={container} initial="hidden" animate="show">
            <div className="lg:col-span-7">
              <motion.p variants={item} className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                A small marketing agency for brands that sell online
              </motion.p>
              <motion.h1 id="hero-heading" variants={item} className="pf-display mt-5 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
                Your own marketing team, <span className="text-primary">one account manager</span> away.
              </motion.h1>
              <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Content, search, email, ads and AI-search visibility on one
                retainer. Every account gets a dedicated account manager who is
                a working marketing expert, backed by a small team of
                specialists and an engineering-led founder.
              </motion.p>
              <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-7 text-sm font-bold text-background transition-opacity hover:opacity-90">
                  Get my free audit
                </a>
                <a href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-primary px-7 text-sm font-bold text-primary transition-colors hover:bg-muted">
                  See the work
                </a>
              </motion.div>
              <motion.ul variants={item} className="mt-8 flex flex-wrap gap-2" aria-label="Credentials and platforms">
                {CHIPS.map((c) => (
                  <li key={c} className="pf-chip">{c}</li>
                ))}
              </motion.ul>
            </div>
            <motion.div variants={item} className="relative lg:col-span-5">
              <div className="mx-auto max-w-sm">
                <div className="pf-portrait" role="img" aria-label="Portrait placeholder for your account manager">
                  <span aria-hidden="true">AM</span>
                </div>
                <figure className="pf-card -mt-10 ml-6 mr-2 p-5">
                  <blockquote className="text-sm leading-relaxed">
                    “You will know your account manager by name after the first call. They run the plan, review the work, and write the report.”
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-bold text-muted-foreground">How every account here works</figcaption>
                </figure>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============ Review row ============ */}
        <section aria-label="Reviews and track record" className="pf-review-row px-6 py-8">
          <dl className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <dt className="order-last mt-1 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</dt>
                <dd className="pf-metric order-first text-4xl">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ============ Testimonials first ============ */}
        <section aria-labelledby="testimonials-heading" className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2 id="testimonials-heading" className="pf-display text-center text-4xl font-bold sm:text-5xl">Our clients get results</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
                Do not take our word for it. Here is what the people we work with say.
              </p>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.08}>
                  <figure className="pf-card h-full p-7">
                    <p className="pf-stars text-lg" aria-hidden="true">★★★★★</p>
                    <blockquote className="mt-3 text-lg leading-relaxed">“{t.quote}”</blockquote>
                    <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                      <cite className="font-extrabold not-italic">{t.name}</cite>
                      <span className="text-muted-foreground">, {t.title}, {t.company}</span>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Services ============ */}
        <section id="services" aria-labelledby="services-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">What your team does</p>
              <h2 id="services-heading" className="pf-display mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Full-service, without the full-service invoice.
              </h2>
            </ScrollReveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal key={service.title} delay={prefersReducedMotion ? 0 : i * 0.05}>
                    <li className="pf-card h-full p-6">
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-muted text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="pf-display mt-5 text-xl font-bold">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    </li>
                  </ScrollReveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ============ Named tools ============ */}
        <section aria-labelledby="tools-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">How we keep you informed</p>
              <h2 id="tools-heading" className="pf-display mt-3 text-4xl font-bold sm:text-5xl">Three things every client gets</h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {TOOLS.map((tool, i) => (
                <ScrollReveal key={tool.name} delay={prefersReducedMotion ? 0 : i * 0.06}>
                  <div className="pf-tool h-full rounded-r-2xl p-6">
                    <h3 className="pf-display text-2xl font-bold">{tool.name}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{tool.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ About ============ */}
        <section id="about" aria-labelledby="about-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">Who you work with</p>
              <h2 id="about-heading" className="pf-display mt-3 text-4xl font-bold sm:text-5xl">Small on purpose.</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Your account manager</strong> is a working marketing expert who owns your plan, reviews every deliverable before it ships, and writes your monthly report.
                </p>
                <p>
                  <strong className="text-foreground">The team</strong> behind them covers content, search, email and paid. We keep the client list short and take one client per product category.
                </p>
                <p>
                  <strong className="text-foreground">The founder</strong>, Christian N. Abad, is a thirty-year engineer and the Founder and CEO of CannaBuddy and Purely Found. Both brands run on the same playbook your account gets.
                </p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3" role="list">
                {PROMISES.map((p) => (
                  <li key={p.title} className="pf-card p-4">
                    <h3 className="text-sm font-extrabold">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="pf-card p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">Since 2005</p>
                <ol className="mt-4 divide-y divide-border" role="list">
                  {MILESTONES.map((m) => (
                    <li key={m.year} className="py-3">
                      <p className="text-xs font-extrabold text-accent">{m.year}</p>
                      <h3 className="pf-display font-bold">{m.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Portfolio ============ */}
        <section id="portfolio" aria-labelledby="portfolio-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">The work</p>
              <h2 id="portfolio-heading" className="pf-display mt-3 text-4xl font-bold sm:text-5xl">Accounts and engagements</h2>
            </ScrollReveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {PORTFOLIO.map((project, i) => (
                <ScrollReveal key={project.client} delay={prefersReducedMotion ? 0 : i * 0.04}>
                  <li className="pf-card flex h-full flex-col p-6">
                    <h3 className="pf-display text-xl font-bold">{project.client}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-md bg-muted px-2 py-0.5 text-[0.7rem] font-bold text-primary">{tag}</li>
                      ))}
                    </ul>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section id="contact" aria-labelledby="contact-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">Free audit, no obligation</p>
              <h2 id="contact-heading" className="pf-display mt-3 text-4xl font-bold sm:text-5xl">Start with the audit.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Send us your site. Your account manager comes back with your
                search gaps, what your email list could be earning, and whether
                the AI answer engines mention you at all. No sales sequence
                attached.
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer to talk?{" "}
                <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="font-extrabold text-primary">
                  {COMPANY.phone}
                </a>
                <br />
                {COMPANY.address}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="pf-card p-6 sm:p-8">
                <ProofAuditForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 pt-12 pb-32" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="pf-display text-lg font-bold text-primary">Accessible Computing</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {COMPANY.address} · {COMPANY.phone} · © {COMPANY.founded}–{new Date().getFullYear()} {COMPANY.name}
            </p>
          </div>
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link href={navItem.href} className="text-xs font-bold text-muted-foreground transition-colors hover:text-primary">
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

function ProofAuditForm() {
  const { status, handleSubmit } = useContactForm();
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pf-name" className="block text-sm font-extrabold">
            Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="pf-name" name="name" type="text" required autoComplete="name" className="pf-input mt-1.5" />
        </div>
        <div>
          <label htmlFor="pf-email" className="block text-sm font-extrabold">
            Email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="pf-email" name="email" type="email" required autoComplete="email" className="pf-input mt-1.5" />
        </div>
      </div>
      <div>
        <label htmlFor="pf-website" className="block text-sm font-extrabold">Your website</label>
        <input id="pf-website" name="website" type="url" inputMode="url" placeholder="https://" autoComplete="url" className="pf-input mt-1.5" />
      </div>
      <div>
        <label htmlFor="pf-message" className="block text-sm font-extrabold">
          What would a win look like this quarter? <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <textarea id="pf-message" name="message" required rows={4} className="pf-input mt-1.5 resize-y" />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-accent px-7 text-sm font-bold text-background transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Get my free audit"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-extrabold text-primary" role="status">
          Thanks. Your account manager will send the audit within two business days.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-extrabold text-accent" role="alert">
          That did not go through. Try again, or call us.
        </p>
      )}
    </form>
  );
}
