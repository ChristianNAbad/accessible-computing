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
  TESTIMONIALS,
  STATS,
  MESSAGING,
  PLATFORMS,
  EMAIL_PLATFORMS,
} from "@/lib/constants";

/* Sample report figures. Labeled as a sample in the UI; never a client's numbers. */
const REPORT_TILES = [
  { label: "Organic sessions", value: "+38%", note: "vs. last quarter" },
  { label: "Email revenue", value: "$42.1k", note: "this month" },
  { label: "AI answer citations", value: "17", note: "ChatGPT · Perplexity · AI Overviews" },
  { label: "Cost per lead", value: "$31", note: "down from $58" },
] as const;

const REPORT_NOTES = [
  { k: "What shipped", v: "Six product pages rewritten, two guides published, the welcome flow rebuilt, one ad group retired." },
  { k: "What it did", v: "Organic sessions up, email revenue up, cost per lead down. The numbers above, with the why." },
  { k: "What changes next month", v: "Two category pages, a win-back flow, and a push for citations on the three questions buyers ask most." },
] as const;

const SPARK_POINTS = [12, 18, 15, 22, 27, 25, 31, 36, 34, 41, 47, 52];

function sparkPath(points: number[], w = 320, h = 80) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = w / (points.length - 1);
  return points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / (max - min)) * (h - 8) - 4;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function slug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function CraftSite() {
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
      <header className="cr-hero relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label={`${COMPANY.shortName} — Home`} className="cr-display text-xl font-semibold">
            Accessible Computing
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-7" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link href={navItem.href} className="cr-hero-muted text-sm font-medium transition-colors hover:text-[var(--cr-hero-fg)]">
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#audit" className="cr-hero-cta hidden h-10 items-center px-5 text-sm sm:inline-flex">
              Free audit
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ============ Hero: craft headline + audit panel ============ */}
        <section id="hero" aria-labelledby="hero-heading" className="cr-hero px-6 pt-12 pb-20 sm:pt-16 lg:pb-24">
          <div className="cr-glow" aria-hidden="true" />
          <motion.div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center" variants={container} initial="hidden" animate="show">
            <div className="lg:col-span-7">
              <motion.p variants={item} className="cr-hero-accent text-xs font-semibold uppercase tracking-[0.22em]">
                {MESSAGING.eyebrow}
              </motion.p>
              <motion.h1 id="hero-heading" variants={item} className="cr-display mt-5 text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
                Marketing, practiced as a <em className="cr-hero-accent font-semibold italic">craft.</em>
              </motion.h1>
              <motion.p variants={item} className="cr-display mt-4 text-xl italic sm:text-2xl">
                Growth you can read every month.
              </motion.p>
              <motion.p variants={item} className="cr-hero-muted mt-6 max-w-xl text-lg leading-relaxed">
                {MESSAGING.positioning}
              </motion.p>
              <motion.p variants={item} className="cr-hero-muted mt-4 max-w-xl text-base leading-relaxed">
                {MESSAGING.edge}
              </motion.p>
              <motion.dl variants={item} className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--cr-hero-line)] pt-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="cr-hero-muted order-last mt-1 text-xs">{stat.label}</dt>
                    <dd className="cr-display order-first text-2xl font-semibold sm:text-3xl">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            <motion.div variants={item} className="lg:col-span-5" id="audit">
              <div className="cr-panel p-6 sm:p-7">
                <p className="cr-display text-xl font-semibold">Get your free visibility audit</p>
                <p className="cr-hero-muted mt-1 text-sm">Your account manager reviews it before it is sent.</p>
                <p className="cr-hero-muted mt-2 text-xs">{[...PLATFORMS, ...EMAIL_PLATFORMS].join(" · ")}</p>
                <div className="mt-5">
                  <CraftHeroForm />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============ Sample report ============ */}
        <section aria-labelledby="report-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-start">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Every month, in plain language</p>
              <h2 id="report-heading" className="cr-display mt-3 text-4xl font-medium sm:text-5xl">
                What your report looks like.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                One page, written by your account manager, not exported from a tool. Three sections, every time.
              </p>
              <dl className="mt-8 divide-y divide-border border-y border-border">
                {REPORT_NOTES.map((n) => (
                  <div key={n.k} className="py-4">
                    <dt className="cr-display text-lg font-semibold">{n.k}</dt>
                    <dd className="mt-1 text-base leading-relaxed text-muted-foreground">{n.v}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7">
              <div
                className="cr-report p-5 sm:p-6"
                role="img"
                aria-label="Illustrative sample of a monthly report: organic sessions up 38 percent, $42.1k email revenue, 17 AI answer citations, $31 cost per lead, and a rising leads-per-week line"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Monthly report</p>
                    <p className="cr-display mt-1 text-lg font-semibold">Q3 · sample data</p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary">Sample</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {REPORT_TILES.map((tile) => (
                    <div key={tile.label} className="cr-tile p-4">
                      <p className="text-xs text-muted-foreground">{tile.label}</p>
                      <p className="cr-display mt-1 text-2xl font-semibold">{tile.value}</p>
                      <p className="mt-1 text-[0.7rem] text-muted-foreground">{tile.note}</p>
                    </div>
                  ))}
                </div>
                <div className="cr-tile mt-3 p-4">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs text-muted-foreground">Leads per week</p>
                    <p className="cr-display text-sm font-semibold text-primary">+333%</p>
                  </div>
                  <svg className="cr-spark mt-2 h-20 w-full" viewBox="0 0 320 80" preserveAspectRatio="none" aria-hidden="true">
                    <path d={sparkPath(SPARK_POINTS)} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Illustrative. Sample figures, not a client&rsquo;s results.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Contents: every line links to its plate ============ */}
        <section id="services" aria-labelledby="services-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contents</p>
              <h2 id="services-heading" className="cr-display mt-3 text-4xl font-medium sm:text-5xl">
                What we practice
              </h2>
              <div className="cr-double-rule mt-8" />
            </ScrollReveal>
            <ol className="cr-toc" role="list">
              {SERVICES.map((service, i) => (
                <li key={service.title}>
                  <a href={`#service-${slug(service.title)}`}>
                    <span className="cr-display text-lg font-semibold text-primary" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="cr-toc-title cr-display text-2xl font-medium transition-colors sm:text-3xl">{service.title}</span>
                    <span className="cr-leader hidden sm:block" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Read</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ Service plates ============ */}
        <section aria-label="Services in detail" className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <article key={service.title} id={`service-${slug(service.title)}`} className="cr-plate p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="cr-display mt-4 text-2xl font-medium">{service.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{service.description}</p>
                  <a href="#services" className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Back to contents
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ============ How we work: personal, by design ============ */}
        <section id="about" aria-labelledby="about-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How we work</p>
              <h2 id="about-heading" className="cr-display mt-3 text-4xl font-medium sm:text-5xl">
                One person knows your account. A team stands behind them.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>{MESSAGING.manager}</p>
                <p>{MESSAGING.team}</p>
                <p className="text-foreground">{MESSAGING.fit}</p>
                <p>{MESSAGING.platforms}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Easy to work with</p>
                <ul className="mt-4 space-y-4" role="list">
                  {[
                    ["One call to start", "The audit, then a plan with one number to move. No proposal theater."],
                    ["A person reviews everything", "Nothing ships to your site, your list or your ad account without a human sign-off."],
                    ["One client per category", "Your account manager never works for a competitor of yours."],
                    ["Terms you see before you sign", MESSAGING.terms],
                  ].map(([k, v]) => (
                    <li key={k}>
                      <p className="cr-display text-lg font-semibold">{k}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{v}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Work and words ============ */}
        <section id="portfolio" aria-labelledby="portfolio-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The record</p>
              <h2 id="portfolio-heading" className="cr-display mt-3 text-4xl font-medium sm:text-5xl">
                Selected engagements
              </h2>
              <div className="cr-double-rule mt-8" />
            </ScrollReveal>
            <ul role="list">
              {PORTFOLIO.map((project) => (
                <li key={project.client} className="grid gap-2 border-b border-border py-5 sm:grid-cols-12 sm:gap-6">
                  <h3 className="cr-display text-xl font-medium sm:col-span-3">{project.client}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-6">{project.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:col-span-3 sm:text-right">{project.tags.join(" · ")}</p>
                </li>
              ))}
            </ul>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.08}>
                  <figure className="rounded-2xl border border-border bg-card p-7">
                    <blockquote className="cr-display text-lg italic leading-relaxed">“{t.quote}”</blockquote>
                    <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                      <cite className="font-semibold not-italic">{t.name}</cite>
                      <span className="text-muted-foreground">, {t.title}, {t.company}</span>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>

            {/* The founder, one line, where it belongs */}
            <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted-foreground">{MESSAGING.founder}</p>
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section id="contact" aria-labelledby="contact-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Start with the audit</p>
              <h2 id="contact-heading" className="cr-display mt-3 text-4xl font-medium sm:text-5xl">
                Write to us.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{MESSAGING.audit}</p>
              <p className="mt-8 text-sm text-muted-foreground">
                <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-foreground hover:text-primary">{COMPANY.phone}</a>
                {" "}· {COMPANY.address} · Since {COMPANY.founded}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <CraftBodyForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 pt-12 pb-32" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="cr-display text-lg font-semibold">Accessible Computing</p>
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

/* Hero form: email + site. The contact API keeps name, email and message, so
   the URL rides inside the message. */
function CraftHeroForm() {
  const { status, handleSubmit } = useContactForm();
  function submitWithSite(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const site = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    const message = form.elements.namedItem("message") as HTMLInputElement | null;
    if (message) message.value = `Free visibility audit requested from the hero form for ${site}`;
    handleSubmit(e);
  }
  return (
    <form onSubmit={submitWithSite} className="space-y-4">
      <div>
        <label htmlFor="cr-hero-email" className="block text-sm font-semibold">
          Work email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <input id="cr-hero-email" name="email" type="email" required autoComplete="email" className="cr-hero-input mt-1.5" />
      </div>
      <div>
        <label htmlFor="cr-hero-website" className="block text-sm font-semibold">
          Your website <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <input id="cr-hero-website" name="website" type="url" inputMode="url" required placeholder="https://" autoComplete="url" className="cr-hero-input mt-1.5" />
      </div>
      <input type="hidden" name="name" defaultValue="Hero audit request" />
      <input type="hidden" name="message" defaultValue="Free visibility audit requested from the hero form." />
      <button type="submit" disabled={status === "sending"} className="cr-hero-cta inline-flex h-12 w-full items-center justify-center px-6 text-sm disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Get my free audit"}
      </button>
      {status === "sent" && (
        <p className="cr-hero-accent text-sm font-semibold" role="status">{MESSAGING.auditSent}</p>
      )}
      {status === "error" && (
        <p className="cr-hero-accent text-sm font-semibold" role="alert">That did not go through. Try the form below, or call us.</p>
      )}
    </form>
  );
}

function CraftBodyForm() {
  const { status, handleSubmit } = useContactForm();
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cr-name" className="block text-sm font-semibold">
            Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="cr-name" name="name" type="text" required autoComplete="name" className="cr-input mt-1.5" />
        </div>
        <div>
          <label htmlFor="cr-email" className="block text-sm font-semibold">
            Email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="cr-email" name="email" type="email" required autoComplete="email" className="cr-input mt-1.5" />
        </div>
      </div>
      <div>
        <label htmlFor="cr-website" className="block text-sm font-semibold">Your website</label>
        <input id="cr-website" name="website" type="url" inputMode="url" placeholder="https://" autoComplete="url" className="cr-input mt-1.5" />
      </div>
      <div>
        <label htmlFor="cr-message" className="block text-sm font-semibold">
          What should the audit focus on? <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <textarea id="cr-message" name="message" required rows={4} className="cr-input mt-1.5 resize-y" />
      </div>
      <button type="submit" disabled={status === "sending"} className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto">
        {status === "sending" ? "Sending…" : "Send me the audit"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-semibold text-primary" role="status">{MESSAGING.auditSent}</p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-accent" role="alert">That did not go through. Try again, or call us.</p>
      )}
    </form>
  );
}
