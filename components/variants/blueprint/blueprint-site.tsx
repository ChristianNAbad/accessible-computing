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

const SPECS = [
  { k: "Sheet", v: "01 of 06" },
  { k: "Scale", v: "1 : 1" },
  { k: "Drawn by", v: "C. N. Abad" },
  { k: "Rev", v: String(new Date().getFullYear()) },
] as const;

export function BlueprintSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
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
      <div className="bp-grid" aria-hidden="true" />

      {/* ============ Header ============ */}
      <header className="relative z-10 border-b border-primary">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            aria-label={`${COMPANY.shortName} — Home`}
            className="flex items-center gap-3"
          >
            <span className="bp-callout" aria-hidden="true">
              AC
            </span>
            <span className="text-base font-semibold tracking-tight">
              Accessible Computing
            </span>
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-7" role="list">
              {NAV_ITEMS.map((navItem, i) => (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="bp-mono text-xs uppercase text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")} </span>
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="bp-cta hidden h-10 items-center px-4 text-sm font-semibold sm:inline-flex"
            >
              Free audit
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content" className="relative z-10">
        {/* ============ Hero — sheet 01 ============ */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="px-6 pt-12 pb-20 sm:pt-16 lg:pb-28"
        >
          <motion.div
            className="mx-auto max-w-7xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="bp-mono text-xs uppercase text-primary"
            >
              Plate 01 · Marketing system · Rev {new Date().getFullYear()}
            </motion.p>

            <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <motion.h1
                  id="hero-heading"
                  variants={item}
                  className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
                >
                  Marketing,{" "}
                  <span className="text-primary">engineered.</span>
                </motion.h1>

                <motion.p
                  variants={item}
                  className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
                >
                  Thirty years of building systems, pointed at your growth.
                  Search, content, email and paid, drawn to spec, built to
                  tolerance, and measured against the drawing every month.
                </motion.p>

                <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="bp-cta inline-flex h-12 items-center justify-center px-7 text-sm font-semibold"
                  >
                    Request a free audit
                  </a>
                  <a
                    href="#services"
                    className="inline-flex h-12 items-center justify-center border border-primary px-7 text-sm font-semibold text-primary transition-colors hover:bg-muted"
                  >
                    Read the plates
                  </a>
                </motion.div>

                {/* Dimensioned stats */}
                <motion.div variants={item} className="mt-12">
                  <div className="bp-dim" aria-hidden="true" />
                  <dl className="mt-4 grid grid-cols-3 gap-6">
                    {STATS.map((stat) => (
                      <div key={stat.label}>
                        <dd className="bp-mono text-3xl font-bold text-primary sm:text-4xl">
                          {stat.value.toLocaleString()}
                          {stat.suffix}
                        </dd>
                        <dt className="bp-mono mt-1 text-[0.65rem] uppercase text-muted-foreground">
                          {stat.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </div>

              {/* Elevation plate */}
              <motion.div variants={item} className="lg:col-span-5">
                <div className="bp-plate relative overflow-hidden p-6">
                  <div className="bp-scan" aria-hidden="true" />
                  <p className="bp-mono text-[0.65rem] uppercase text-muted-foreground">
                    Fig. 1 · Growth system, section view
                  </p>
                  <svg
                    viewBox="0 0 320 220"
                    className="mt-4 w-full"
                    role="img"
                    aria-label="Schematic of the marketing system: search, content and email feed a store, which feeds a monthly report"
                  >
                    <g
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    >
                      <rect x="16" y="24" width="84" height="40" />
                      <rect x="16" y="90" width="84" height="40" />
                      <rect x="16" y="156" width="84" height="40" />
                      <rect x="150" y="70" width="84" height="80" />
                      <rect x="270" y="90" width="36" height="40" />
                      <path d="M100 44 H124 V110 H150" />
                      <path d="M100 110 H150" />
                      <path d="M100 176 H124 V110" />
                      <path d="M234 110 H270" />
                      <path d="M150 40 V20 H234 V40" strokeDasharray="3 4" />
                      <circle cx="192" cy="110" r="16" />
                      <path d="M184 110 h16 M192 102 v16" />
                    </g>
                    <g
                      fill="var(--foreground)"
                      fontFamily="var(--font-chivo-mono), monospace"
                      fontSize="9"
                    >
                      <text x="24" y="48">SEARCH</text>
                      <text x="24" y="114">CONTENT</text>
                      <text x="24" y="180">EMAIL</text>
                      <text x="160" y="84">STORE</text>
                      <text x="272" y="146">REPORT</text>
                      <text x="150" y="16" fill="var(--muted-foreground)">
                        AI ANSWERS
                      </text>
                    </g>
                    <g
                      fill="var(--accent)"
                      stroke="var(--bp-on-accent)"
                      strokeWidth="0.75"
                    >
                      <circle cx="124" cy="110" r="4" />
                      <circle cx="252" cy="110" r="4" />
                    </g>
                  </svg>
                  <div className="bp-titleblock bp-mono mt-4 text-[0.65rem] uppercase">
                    {SPECS.map((s) => (
                      <div key={s.k}>
                        <span className="text-muted-foreground">{s.k} </span>
                        <span className="font-bold">{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ============ Services — plates ============ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="bp-mono text-xs uppercase text-primary">
                Plates 02–07 · Components
              </p>
              <h2
                id="services-heading"
                className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Every part of the system, specified.
              </h2>
            </ScrollReveal>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal key={service.title} delay={prefersReducedMotion ? 0 : i * 0.05}>
                    <li className="bp-plate h-full p-6">
                      <div className="flex items-center justify-between">
                        <span className="bp-callout" aria-hidden="true">
                          {i + 2}
                        </span>
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <p className="bp-mono mt-5 text-[0.65rem] uppercase text-muted-foreground">
                        Plate {String(i + 2).padStart(2, "0")} · Tol. ±0
                      </p>
                    </li>
                  </ScrollReveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ============ About — the engineer ============ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="px-6 py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="bp-mono text-xs uppercase text-primary">
                Drawn by
              </p>
              <h2
                id="about-heading"
                className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Thirty years of building things that have to work.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Christian N. Abad started in C on Solaris workstations, led
                  web accessibility for more than 5,000 pages at Bank of
                  America, and built applications for DHS and the US Navy. He
                  now ships with autonomous coding agents, which is how a
                  small team delivers what used to take a department.
                </p>
                <p>
                  He is also Founder and CEO of{" "}
                  <strong className="text-foreground">CannaBuddy</strong> and{" "}
                  <strong className="text-foreground">Purely Found</strong>.
                  The system on this sheet is the one both brands run on.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp-mono inline-flex h-10 items-center border border-primary px-4 text-xs uppercase text-primary transition-colors hover:bg-muted"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={COMPANY.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp-mono inline-flex h-10 items-center border border-primary px-4 text-xs uppercase text-primary transition-colors hover:bg-muted"
                >
                  Résumé ↗
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="bp-plate p-6">
                <p className="bp-mono text-[0.65rem] uppercase text-muted-foreground">
                  Fig. 2 · Revision history
                </p>
                <ol className="mt-4" role="list">
                  {MILESTONES.map((milestone, i) => (
                    <li key={milestone.year} className="flex gap-4 py-3">
                      <div className="flex flex-col items-center">
                        <span className="bp-callout" aria-hidden="true">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {i < MILESTONES.length - 1 && (
                          <span className="bp-leader mt-1 flex-1" aria-hidden="true" />
                        )}
                      </div>
                      <div className="pb-2">
                        <p className="bp-mono text-xs uppercase text-primary">
                          {milestone.year}
                        </p>
                        <h3 className="mt-0.5 font-semibold">{milestone.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Portfolio — schedule ============ */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="bp-mono text-xs uppercase text-primary">
                Schedule A · Prior works
              </p>
              <h2
                id="portfolio-heading"
                className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Built, delivered, signed off.
              </h2>
            </ScrollReveal>

            <div className="bp-plate mt-12 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Selected client engagements</caption>
                <thead className="bp-mono text-[0.65rem] uppercase text-muted-foreground">
                  <tr className="border-b border-primary">
                    <th scope="col" className="px-5 py-3">Ref</th>
                    <th scope="col" className="px-5 py-3">Client</th>
                    <th scope="col" className="px-5 py-3">Scope</th>
                    <th scope="col" className="px-5 py-3">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {PORTFOLIO.map((project, i) => (
                    <tr
                      key={project.client}
                      className="border-b border-border last:border-b-0 transition-colors hover:bg-muted"
                    >
                      <td className="bp-mono px-5 py-4 text-xs text-primary">
                        A-{String(i + 1).padStart(2, "0")}
                      </td>
                      <th scope="row" className="px-5 py-4 font-semibold">
                        {project.client}
                      </th>
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground">
                        {project.description}
                      </td>
                      <td className="bp-mono px-5 py-4 text-[0.65rem] uppercase">
                        {project.tags.join(" / ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ Testimonials — inspection notes ============ */}
        <section
          aria-labelledby="testimonials-heading"
          className="px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="bp-mono text-xs uppercase text-primary">
                Inspection notes
              </p>
              <h2
                id="testimonials-heading"
                className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Signed by the client
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.08}>
                  <figure className="bp-plate h-full p-7">
                    <blockquote className="text-lg leading-relaxed">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-4">
                      <cite className="text-sm font-semibold not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="bp-mono mt-0.5 text-[0.65rem] uppercase text-muted-foreground">
                        {testimonial.title} · {testimonial.company}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact — request for audit ============ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className="bp-mono text-xs uppercase text-primary">
                Form RFA-01 · Request for audit
              </p>
              <h2
                id="contact-heading"
                className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Get your site surveyed. Free.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Submit the URL. We return a survey of your search gaps, your
                email revenue ceiling, and how the AI answer engines describe
                you today. Reviewed by the engineer before it leaves the
                office.
              </p>
              <div className="bp-hatch mt-8 p-4">
                <dl className="bp-mono space-y-2 text-xs uppercase">
                  <div className="flex gap-4">
                    <dt className="w-20 text-muted-foreground">Tel</dt>
                    <dd>
                      <a
                        href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                        className="font-bold transition-colors hover:text-primary"
                      >
                        {COMPANY.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 text-muted-foreground">Office</dt>
                    <dd className="font-bold">{COMPANY.address}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 text-muted-foreground">Est.</dt>
                    <dd className="font-bold">{COMPANY.founded}</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="bp-plate p-6 sm:p-8">
                <BlueprintAuditForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ============ Footer — title block ============ */}
      <footer className="relative z-10 border-t border-primary px-6 py-12" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">Accessible Computing</p>
            <p className="bp-mono mt-2 text-[0.65rem] uppercase text-muted-foreground">
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
                    className="bp-mono text-xs uppercase text-muted-foreground transition-colors hover:text-primary"
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

function BlueprintAuditForm() {
  const { status, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="bp-website" className="bp-mono block text-xs uppercase">
          01 · Site URL
        </label>
        <input
          id="bp-website"
          name="website"
          type="url"
          inputMode="url"
          placeholder="https://"
          autoComplete="url"
          className="bp-input mt-1.5"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bp-name" className="bp-mono block text-xs uppercase">
            02 · Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="bp-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="bp-input mt-1.5"
          />
        </div>
        <div>
          <label htmlFor="bp-email" className="bp-mono block text-xs uppercase">
            03 · Email <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="bp-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="bp-input mt-1.5"
          />
        </div>
      </div>
      <div>
        <label htmlFor="bp-message" className="bp-mono block text-xs uppercase">
          04 · What should the survey focus on?{" "}
          <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="bp-message"
          name="message"
          required
          rows={4}
          className="bp-input mt-1.5 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bp-cta inline-flex h-12 w-full items-center justify-center px-7 text-sm font-semibold disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Submitting…" : "Submit request"}
      </button>

      {status === "sent" && (
        <p className="bp-mono text-xs uppercase" role="status">
          Received. Survey issued within two business days.
        </p>
      )}
      {status === "error" && (
        <p className="bp-mono text-xs uppercase text-primary" role="alert">
          Transmission failed. Retry, or call the office.
        </p>
      )}
    </form>
  );
}
