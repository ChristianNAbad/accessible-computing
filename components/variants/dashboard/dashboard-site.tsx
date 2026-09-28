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

/* Illustrative panel data. Labelled "sample" in the UI; never presented
   as a client's real numbers. */
const SAMPLE_TILES = [
  { label: "Organic sessions", value: "+38%", note: "vs. last quarter" },
  { label: "Email revenue", value: "$42.1k", note: "this month" },
  { label: "AI answer citations", value: "17", note: "ChatGPT · Perplexity · AIO" },
  { label: "Cost per lead", value: "$31", note: "down from $58" },
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

export function DashboardSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      <div className="db-mesh" aria-hidden="true" />
      <div className="db-grain" aria-hidden="true" />

      {/* ============ Top bar ============ */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            aria-label={`${COMPANY.shortName} — Home`}
            className="flex items-center gap-3"
          >
            <span
              className="db-display grid h-9 w-9 place-items-center rounded-lg bg-foreground text-sm font-bold text-background"
              aria-hidden="true"
            >
              AC
            </span>
            <span className="db-display text-lg font-semibold">
              Accessible Computing
            </span>
          </Link>

          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-7" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
              className="hidden h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-background transition-colors hover:bg-primary-light sm:inline-flex"
            >
              Get your free audit
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content" className="relative z-10">
        {/* ============ Hero ============ */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="px-6 pt-10 pb-20 sm:pt-16 lg:pb-28"
        >
          <motion.div
            className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="lg:col-span-6">
              <motion.p
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-accent"
              >
                <span className="db-dot" aria-hidden="true" />
                Outsourced marketing department
              </motion.p>

              <motion.h1
                id="hero-heading"
                variants={item}
                className="db-display mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl"
              >
                Marketing that reports in{" "}
                <span className="text-primary">numbers,</span> not adjectives.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              >
                Content, search, email and paid for brands that sell online.
                Run by a thirty-year engineer, measured every week, and
                reported in a dashboard you will actually read.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-background transition-colors hover:bg-primary-light"
                >
                  Get your free growth audit
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
                >
                  See what is included
                </a>
              </motion.div>

              <motion.dl
                variants={item}
                className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6"
              >
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dd className="db-display text-2xl font-bold sm:text-3xl">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </dd>
                    <dt className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* Results panel */}
            <motion.div variants={item} className="lg:col-span-6">
              <div
                className="db-panel p-5 sm:p-6"
                role="img"
                aria-label="Sample client dashboard showing organic sessions up 38 percent, $42.1k email revenue, 17 AI answer citations and a $31 cost per lead"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Client dashboard
                    </p>
                    <p className="db-display mt-1 text-lg font-semibold">
                      Q3 · sample data
                    </p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-accent">
                    Live
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {SAMPLE_TILES.map((tile) => (
                    <div key={tile.label} className="db-tile p-4">
                      <p className="text-xs text-muted-foreground">
                        {tile.label}
                      </p>
                      <p className="db-display mt-1 text-2xl font-bold">
                        {tile.value}
                      </p>
                      <p className="mt-1 text-[0.7rem] text-muted-foreground">
                        {tile.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="db-tile mt-3 p-4">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs text-muted-foreground">
                      Leads per week
                    </p>
                    <p className="db-display text-sm font-semibold text-accent">
                      +333%
                    </p>
                  </div>
                  <svg
                    className="db-spark mt-2 h-20 w-full"
                    viewBox="0 0 320 80"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d={sparkPath(SPARK_POINTS)}
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============ Services — bento ============ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What is included
              </p>
              <h2
                id="services-heading"
                className="db-display mt-3 max-w-2xl text-4xl font-bold sm:text-5xl"
              >
                One retainer. The whole department.
              </h2>
            </ScrollReveal>

            <ul
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
            >
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                const featured = i === 0;
                return (
                  <ScrollReveal
                    key={service.title}
                    delay={prefersReducedMotion ? 0 : i * 0.05}
                    className={featured ? "sm:col-span-2" : undefined}
                  >
                    <li className="db-panel h-full p-6 transition-colors hover:border-primary">
                      <div className="flex items-center justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-muted text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="db-display mt-5 text-xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </li>
                  </ScrollReveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ============ About ============ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="px-6 py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Who runs it
              </p>
              <h2
                id="about-heading"
                className="db-display mt-3 text-4xl font-bold sm:text-5xl"
              >
                An engineer who sells things online too.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Christian N. Abad has shipped software for thirty years, from
                  Solaris workstations to autonomous coding agents. He led web
                  accessibility for more than 5,000 customer-facing pages at
                  Bank of America and built applications for DHS and the US
                  Navy.
                </p>
                <p>
                  He also runs two consumer brands on the same engine your
                  account would use:{" "}
                  <strong className="text-foreground">CannaBuddy</strong> and{" "}
                  <strong className="text-foreground">Purely Found</strong>.
                  Every process here is one he uses on his own companies
                  first.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-semibold transition-colors hover:border-foreground"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={COMPANY.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-semibold transition-colors hover:border-foreground"
                >
                  Full résumé ↗
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="db-panel p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Changelog
                </p>
                <ol className="mt-4" role="list">
                  {MILESTONES.map((milestone) => (
                    <li key={milestone.year} className="db-row py-4">
                      <div className="flex items-baseline gap-4">
                        <span className="w-20 shrink-0 text-xs font-semibold text-primary">
                          {milestone.year}
                        </span>
                        <div>
                          <h3 className="db-display font-semibold">
                            {milestone.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Portfolio — table ============ */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Track record
              </p>
              <h2
                id="portfolio-heading"
                className="db-display mt-3 text-4xl font-bold sm:text-5xl"
              >
                Accounts, in order of scale
              </h2>
            </ScrollReveal>

            <div className="db-panel mt-12 overflow-hidden">
              <ul role="list">
                {PORTFOLIO.map((project, i) => (
                  <ScrollReveal
                    key={project.client}
                    delay={prefersReducedMotion ? 0 : i * 0.03}
                  >
                    <li className="db-row grid gap-2 px-6 py-5 transition-colors hover:bg-muted sm:grid-cols-12 sm:gap-6">
                      <span className="text-xs font-semibold text-muted-foreground sm:col-span-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="db-display font-semibold sm:col-span-3">
                        {project.client}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-5">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:col-span-3 sm:justify-end">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-muted px-2.5 py-0.5 text-[0.7rem] font-semibold text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ Testimonials ============ */}
        <section
          aria-labelledby="testimonials-heading"
          className="px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2
                id="testimonials-heading"
                className="db-display text-4xl font-bold sm:text-5xl"
              >
                What clients report back
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.08}>
                  <figure className="db-panel h-full p-7">
                    <blockquote className="text-lg leading-relaxed">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-full bg-muted text-xs font-bold text-primary"
                        aria-hidden="true"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div>
                        <cite className="text-sm font-semibold not-italic">
                          {testimonial.name}
                        </cite>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact — audit request ============ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Free growth audit
              </p>
              <h2
                id="contact-heading"
                className="db-display mt-3 text-4xl font-bold sm:text-5xl"
              >
                See your numbers before you spend a dollar.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Send us your site. We come back with the search gaps, the
                email revenue you are leaving on the table, and where the AI
                answer engines mention you today. Reviewed by a human before
                it is sent.
              </p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-muted-foreground">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                      className="font-semibold transition-colors hover:text-primary"
                    >
                      {COMPANY.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-muted-foreground">Based in</dt>
                  <dd className="font-semibold">{COMPANY.address}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-muted-foreground">Since</dt>
                  <dd className="font-semibold">{COMPANY.founded}</dd>
                </div>
              </dl>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="db-panel p-6 sm:p-8">
                <DashboardAuditForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ============ Footer ============ */}
      <footer className="relative z-10 border-t border-border px-6 py-12" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="db-display text-lg font-semibold">
              Accessible Computing
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {COMPANY.address} · {COMPANY.phone} · © {COMPANY.founded}–
              {new Date().getFullYear()} {COMPANY.name}
            </p>
          </div>
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
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

function DashboardAuditForm() {
  const { status, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="db-name" className="block text-sm font-semibold">
            Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="db-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="db-input mt-1.5"
          />
        </div>
        <div>
          <label htmlFor="db-email" className="block text-sm font-semibold">
            Work email <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="db-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="db-input mt-1.5"
          />
        </div>
      </div>
      <div>
        <label htmlFor="db-website" className="block text-sm font-semibold">
          Your website
        </label>
        <input
          id="db-website"
          name="website"
          type="url"
          inputMode="url"
          placeholder="https://"
          autoComplete="url"
          className="db-input mt-1.5"
        />
      </div>
      <div>
        <label htmlFor="db-message" className="block text-sm font-semibold">
          The one number you want to move{" "}
          <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="db-message"
          name="message"
          required
          rows={4}
          className="db-input mt-1.5 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-background transition-colors hover:bg-primary-light disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request my free audit"}
      </button>

      {status === "sent" && (
        <p className="text-sm font-semibold text-accent" role="status">
          Got it. Your audit is in the queue; expect it within two business
          days.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-primary" role="alert">
          That did not go through. Try again, or call us directly.
        </p>
      )}
    </form>
  );
}
