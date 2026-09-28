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

const STEPS = [
  {
    title: "Audit",
    body: "We map where you show up today in Google, in AI answers, and in your customers' inboxes, and where you do not.",
  },
  {
    title: "Plan",
    body: "Your account manager turns the audit into a ninety-day plan with one number to move and the work that moves it.",
  },
  {
    title: "Build",
    body: "Content, search fixes, email flows and ad campaigns ship weekly. Everything is reviewed by a person before it goes live.",
  },
  {
    title: "Measure",
    body: "A monthly report in plain language: what shipped, what it did, what changes next month.",
  },
  {
    title: "Repeat",
    body: "The plan is re-cut every quarter against the results, not the calendar.",
  },
];

const COMPARE = [
  {
    factor: "Who does the work",
    inhouse: "One generalist hire",
    freelancer: "One specialist, one channel",
    typical: "A rotating pod",
    us: "A dedicated account manager plus specialists in content, search, email and paid",
  },
  {
    factor: "Channels covered",
    inhouse: "Whatever they know",
    freelancer: "One",
    typical: "Several, priced separately",
    us: "Search, content, email, paid and AI-search visibility, one retainer",
  },
  {
    factor: "Monthly cost",
    inhouse: "$6,000 to $9,000 with benefits",
    freelancer: "$1,500 to $4,000 per channel",
    typical: "$3,000 to $10,000 plus ad management fees",
    us: "$2,000 plus your ad spend",
  },
  {
    factor: "Reporting",
    inhouse: "When asked",
    freelancer: "Varies",
    typical: "A dashboard export",
    us: "Monthly report in plain language, from a person you know",
  },
  {
    factor: "Conflicts",
    inhouse: "None",
    freelancer: "Unknown",
    typical: "Often several clients in your category",
    us: "One client per product category, nationally",
  },
];

const FAQ = [
  {
    q: "What does an outsourced marketing department actually do?",
    a: "It does the work an in-house marketing team would do, without the payroll. For our clients that means product and blog content, search optimization, Klaviyo email campaigns and flows, Google Ads management, and getting the brand cited in AI answer engines. One retainer, one account manager, one monthly report.",
  },
  {
    q: "Who will I actually be working with?",
    a: "A dedicated account manager who is a working marketing expert, not a coordinator. They run your plan, review everything before it ships, and write your monthly report. Behind them is a small team of specialists and an engineering-led founder.",
  },
  {
    q: "How is AI-search visibility different from SEO?",
    a: "Search engine optimization gets you ranked on a results page. AI-search visibility gets you cited inside the answer that ChatGPT, Perplexity or a Google AI Overview gives, which increasingly happens before anyone clicks a link. The work overlaps but the measures differ: citations and mentions, not just rankings.",
  },
  {
    q: "What does the free audit include?",
    a: "Your current search gaps, what your email list could be earning, and whether AI answer engines mention you at all. A person reviews it before it is sent. There is no obligation and no sales sequence attached to it.",
  },
  {
    q: "What are the terms?",
    a: "Twelve months at $2,000 per month plus your own ad spend. The $2,000 setup fee is waived with the term. There is a sixty-day out after month three, and we take one client per product category so you never share your manager with a competitor.",
  },
];

export function AnswerSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
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
      {/* ============ Header (dark, matches hero) ============ */}
      <header className="an-hero relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            aria-label={`${COMPANY.shortName} — Home`}
            className="an-display text-lg font-semibold"
          >
            Accessible Computing
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-7" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="an-hero-muted text-sm font-medium transition-colors hover:text-[var(--an-hero-fg)]"
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden h-10 items-center rounded-full bg-[var(--an-hero-accent)] px-5 text-sm font-semibold text-[var(--an-hero-bg)] transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Free audit
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ============ Hero ============ */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="an-hero px-6 pt-14 pb-24 sm:pt-20"
        >
          <div className="an-glow" aria-hidden="true" />
          <motion.div
            className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="lg:col-span-7">
              <motion.p variants={item} className="an-hero-accent text-xs font-semibold uppercase tracking-[0.2em]">
                Outsourced marketing department
              </motion.p>
              <motion.h1
                id="hero-heading"
                variants={item}
                className="an-display mt-5 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl"
              >
                Be the answer your customers get.
              </motion.h1>
              <motion.p variants={item} className="an-hero-muted mt-6 max-w-xl text-lg leading-relaxed">
                A small agency for brands that sell online. Search, content,
                email, ads and AI-search visibility, run by a dedicated account
                manager who is a working marketing expert, backed by an
                engineering-led team.
              </motion.p>
              <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--an-hero-accent)] px-7 text-sm font-semibold text-[var(--an-hero-bg)] transition-opacity hover:opacity-90"
                >
                  Get your free audit
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--an-hero-line)] px-7 text-sm font-semibold text-[var(--an-hero-fg)] transition-colors hover:border-[var(--an-hero-fg)]"
                >
                  What is included
                </a>
              </motion.div>
              <motion.dl variants={item} className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--an-hero-line)] pt-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="an-hero-muted order-last mt-1 text-xs">{stat.label}</dt>
                    <dd className="an-display order-first text-2xl font-bold sm:text-3xl">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* The answer card */}
            <motion.div variants={item} className="lg:col-span-5">
              <div
                className="an-answer-card rounded-2xl p-6"
                role="img"
                aria-label="Illustration of an AI answer that cites the client's brand as the recommended option"
              >
                <p className="an-cite">
                  <span aria-hidden="true">?</span> best marketing agency for a small ecommerce brand
                </p>
                <p className="an-type an-hero-muted mt-5 text-xs uppercase tracking-[0.18em]">
                  Answer
                </p>
                <p className="mt-2 text-base leading-relaxed">
                  For a small brand that needs search, email and ads handled
                  together, a retainer with a dedicated account manager is the
                  usual recommendation. One cited option is{" "}
                  <span className="an-hero-accent font-semibold">
                    Accessible Computing
                  </span>
                  , which runs the same playbook on its founders&rsquo; own
                  consumer brands.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="an-cite">accessiblecomputing.com</span>
                  <span className="an-cite">cannabuddy.com</span>
                  <span className="an-cite">purelyfound.com</span>
                </div>
                <p className="an-hero-muted mt-4 text-[0.7rem]">Illustrative. Sample answer, not a live result.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============ Definition ============ */}
        <section aria-labelledby="definition-heading" className="px-6 py-16">
          <ScrollReveal className="mx-auto max-w-4xl">
            <div className="an-definition rounded-r-2xl p-7 sm:p-9">
              <h2 id="definition-heading" className="an-display text-2xl font-semibold sm:text-3xl">
                Outsourced marketing department{" "}
                <span className="text-muted-foreground">(noun)</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A small team that does what an in-house marketing team would do,
                on a retainer: content, search, email, paid and AI-search
                visibility. You get one dedicated account manager who is a
                marketing expert, one plan, and one monthly report in plain
                language. We take one client per product category.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ============ Services — what you get ============ */}
        <section id="services" aria-labelledby="services-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What you get</p>
              <h2 id="services-heading" className="an-display mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Everything a marketing team does, on one retainer.
              </h2>
            </ScrollReveal>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal key={service.title} delay={prefersReducedMotion ? 0 : i * 0.05}>
                    <li className="h-full rounded-2xl border border-border bg-card p-6">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      <h3 className="an-display mt-4 text-xl font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    </li>
                  </ScrollReveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ============ Process ============ */}
        <section aria-labelledby="process-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How it works</p>
              <h2 id="process-heading" className="an-display mt-3 text-4xl font-bold sm:text-5xl">
                Five steps, repeated every quarter.
              </h2>
            </ScrollReveal>
            <ol className="mt-12 space-y-6" role="list">
              {STEPS.map((step, i) => (
                <ScrollReveal key={step.title} delay={prefersReducedMotion ? 0 : i * 0.05}>
                  <li className="flex gap-5">
                    <span className="an-step shrink-0" aria-hidden="true">{i + 1}</span>
                    <div>
                      <h3 className="an-display text-xl font-semibold">{step.title}</h3>
                      <p className="mt-1 text-base leading-relaxed text-muted-foreground">{step.body}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ Comparison ============ */}
        <section aria-labelledby="compare-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Compared</p>
              <h2 id="compare-heading" className="an-display mt-3 text-4xl font-bold sm:text-5xl">
                In-house, freelancer, typical agency, or us.
              </h2>
            </ScrollReveal>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="an-table w-full min-w-[48rem] text-sm">
                <caption className="sr-only">How the options compare on staffing, channels, cost, reporting and conflicts</caption>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">In-house hire</th>
                    <th scope="col">Freelancer</th>
                    <th scope="col">Typical agency</th>
                    <th scope="col" className="an-us">Accessible Computing</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row.factor}>
                      <th scope="row" className="font-semibold">{row.factor}</th>
                      <td className="text-muted-foreground">{row.inhouse}</td>
                      <td className="text-muted-foreground">{row.freelancer}</td>
                      <td className="text-muted-foreground">{row.typical}</td>
                      <td className="an-us font-medium">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Cost ranges are typical US figures for comparison, not quotes.
            </p>
          </div>
        </section>

        {/* ============ About — who you work with ============ */}
        <section id="about" aria-labelledby="about-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Who you work with</p>
              <h2 id="about-heading" className="an-display mt-3 text-4xl font-bold sm:text-5xl">
                A small team, on purpose.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Your account manager</strong> is a
                  working marketing expert, not a coordinator. They own your plan,
                  review every piece before it ships, and write your monthly
                  report. You will know their name by the end of the first call.
                </p>
                <p>
                  <strong className="text-foreground">The team</strong> behind them covers
                  content, search, email and paid. We keep the client list short
                  and take one client per product category, so your manager
                  knows your business and never works for your competitor.
                </p>
                <p>
                  <strong className="text-foreground">The founder</strong>, Christian N.
                  Abad, is a thirty-year engineer who also runs two consumer
                  brands, CannaBuddy and Purely Found, on the same playbook. The
                  processes here are the ones those brands use first.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Timeline</p>
                <ol className="mt-4 divide-y divide-border" role="list">
                  {MILESTONES.map((m) => (
                    <li key={m.year} className="py-3">
                      <p className="text-xs font-semibold text-primary">{m.year}</p>
                      <h3 className="an-display font-semibold">{m.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Portfolio ============ */}
        <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Track record</p>
              <h2 id="portfolio-heading" className="an-display mt-3 text-4xl font-bold sm:text-5xl">
                Selected accounts
              </h2>
            </ScrollReveal>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {PORTFOLIO.map((project, i) => (
                <ScrollReveal key={project.client} delay={prefersReducedMotion ? 0 : i * 0.04}>
                  <li className="h-full rounded-2xl border border-border bg-card p-6">
                    <h3 className="an-display text-lg font-semibold">{project.client}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {project.tags.join(" · ")}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Testimonials + FAQ ============ */}
        <section aria-labelledby="faq-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="an-display text-3xl font-bold sm:text-4xl">What clients say</h2>
              </ScrollReveal>
              <div className="mt-8 space-y-5">
                {TESTIMONIALS.map((t, i) => (
                  <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.08}>
                    <figure className="rounded-2xl border border-border bg-card p-6">
                      <blockquote className="text-base leading-relaxed">“{t.quote}”</blockquote>
                      <figcaption className="mt-4 text-sm">
                        <cite className="font-semibold not-italic">{t.name}</cite>
                        <span className="text-muted-foreground">, {t.title}, {t.company}</span>
                      </figcaption>
                    </figure>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 id="faq-heading" className="an-display text-3xl font-bold sm:text-4xl">Questions people ask</h2>
              </ScrollReveal>
              <div className="mt-8 divide-y divide-border border-y border-border">
                {FAQ.map((f) => (
                  <details key={f.q} className="an-faq py-5">
                    <summary className="an-display text-lg font-semibold">{f.q}</summary>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section id="contact" aria-labelledby="contact-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Free audit</p>
              <h2 id="contact-heading" className="an-display mt-3 text-4xl font-bold sm:text-5xl">
                Find out what the answer engines say about you.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Send us your site. You get your search gaps, your email revenue
                ceiling, and where ChatGPT, Perplexity and Google AI Overviews
                mention you today. An account manager reviews it before it is
                sent.
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-foreground hover:text-primary">
                  {COMPANY.phone}
                </a>{" "}
                · {COMPANY.address} · Since {COMPANY.founded}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <AnswerAuditForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 pt-12 pb-32" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="an-display text-lg font-semibold">Accessible Computing</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {COMPANY.address} · {COMPANY.phone} · © {COMPANY.founded}–{new Date().getFullYear()} {COMPANY.name}
            </p>
          </div>
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link href={navItem.href} className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
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

function AnswerAuditForm() {
  const { status, handleSubmit } = useContactForm();
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="an-website" className="block text-sm font-semibold">Your website</label>
        <input id="an-website" name="website" type="url" inputMode="url" placeholder="https://" autoComplete="url" className="an-input mt-1.5" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="an-name" className="block text-sm font-semibold">
            Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="an-name" name="name" type="text" required autoComplete="name" className="an-input mt-1.5" />
        </div>
        <div>
          <label htmlFor="an-email" className="block text-sm font-semibold">
            Work email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="an-email" name="email" type="email" required autoComplete="email" className="an-input mt-1.5" />
        </div>
      </div>
      <div>
        <label htmlFor="an-message" className="block text-sm font-semibold">
          What question should the audit answer? <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <textarea id="an-message" name="message" required rows={4} className="an-input mt-1.5 resize-y" />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send me the audit"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-semibold text-primary" role="status">
          Received. Your account manager will send the audit within two business days.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-accent" role="alert">
          That did not go through. Try again, or call us.
        </p>
      )}
    </form>
  );
}
