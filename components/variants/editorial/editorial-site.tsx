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

const VALUES = [
  "Accessible",
  "Inclusive",
  "Performant",
  "Compliant",
  "Responsive",
  "Semantic",
];

export function EditorialSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      <div className="ed-grain" aria-hidden="true" />

      {/* ============ Masthead ============ */}
      <header className="relative z-10">
        {/* Top hairline bar */}
        <div className="ed-hairline border-b border-border">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Est. {COMPANY.founded} · Matthews, NC
            </p>
            <div className="flex items-center gap-4">
              <p className="hidden text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:block">
                WCAG 2.2 AAA
              </p>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Masthead title */}
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-8 text-center">
          <Link href="/" aria-label={`${COMPANY.shortName} — Home`}>
            <h1 className="ed-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Accessible Computing
            </h1>
          </Link>
          <p className="ed-display mt-3 text-sm italic text-muted-foreground">
            A journal of craft, standards & the usable web — Vol. XXI
          </p>
        </div>
      </header>

      {/* Sticky nav rail */}
      <nav
        aria-label="Main Navigation"
        className="sticky top-0 z-40 border-y border-foreground bg-background"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-6 py-3">
          {NAV_ITEMS.map((navItem) => (
            <Link
              key={navItem.label}
              href={navItem.href}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary"
            >
              {navItem.label}
            </Link>
          ))}
        </div>
      </nav>

      <main id="main-content" className="relative z-10">
        {/* ============ Hero ============ */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="px-6 pt-16 pb-14 sm:pt-24"
        >
          <motion.div
            className="mx-auto max-w-5xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary"
            >
              The Accessibility Issue
            </motion.p>

            <motion.h2
              id="hero-heading"
              variants={item}
              className="ed-display mx-auto mt-6 max-w-4xl text-center text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              The web should work for{" "}
              <em className="font-semibold italic text-primary">everyone.</em>
            </motion.h2>

            <motion.p
              variants={item}
              className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Full-service web development, accessibility consulting, and
              agentic AI engineering — practiced with the patience of a
              thirty-year craft.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-8 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground"
            >
              By{" "}
              <span className="font-semibold text-foreground">
                Christian N. Abad
              </span>{" "}
              · President & Founder
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center bg-foreground px-8 text-xs font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary"
              >
                Commission a project
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center border border-foreground px-8 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Read the services
              </a>
            </motion.div>

            {/* Figures */}
            <motion.div variants={item} className="mt-16">
              <div className="ed-double-rule" />
              <dl className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {STATS.map((stat) => (
                  <div key={stat.label} className="px-6 py-6 text-center">
                    <dd className="ed-display text-4xl font-semibold text-foreground md:text-5xl">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </dd>
                    <dt className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
              <div className="ed-rule" />
            </motion.div>
          </motion.div>
        </section>

        {/* Values line */}
        <div aria-hidden="true" className="px-6 pb-4">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {VALUES.join("  ·  ")}
          </p>
        </div>

        {/* ============ Services — table of contents ============ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Contents
              </p>
              <h2
                id="services-heading"
                className="ed-display mt-3 text-4xl font-medium tracking-tight sm:text-5xl"
              >
                What we practice
              </h2>
              <div className="ed-rule mt-8" />
            </ScrollReveal>

            <ol className="mt-2" role="list">
              {SERVICES.map((service, i) => (
                <ScrollReveal
                  key={service.title}
                  delay={prefersReducedMotion ? 0 : i * 0.06}
                >
                  <li className="group ed-hairline border-b border-border py-6">
                    <div className="flex items-baseline gap-4">
                      <span
                        className="ed-display text-xl font-semibold text-primary"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="ed-display text-2xl font-medium tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                        {service.title}
                      </h3>
                      <span className="ed-leader hidden sm:block" aria-hidden="true" />
                    </div>
                    <p className="mt-2 max-w-2xl pl-10 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ About — the story ============ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                The Story
              </p>
              <h2
                id="about-heading"
                className="ed-display mt-3 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl"
              >
                Thirty years, one conviction
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-14 lg:grid-cols-5">
              {/* Narrative */}
              <ScrollReveal direction="left" className="lg:col-span-3">
                <div className="space-y-5 text-lg leading-relaxed text-foreground">
                  <p className="ed-dropcap">
                    Founded in 2005 by Christian N. Abad, Accessible Computing
                    was born from a simple conviction: the web should work for
                    everyone. The conviction has roots — a degree from
                    Appalachian State pairing Psychology with Computer Science.
                    Understanding people has shaped how Christian builds
                    software ever since.
                  </p>
                  <p>
                    At Bank of America, as VP and Web Accessibility Team
                    Manager, he led compliance for more than 5,000
                    customer-facing pages, setting enterprise-wide WCAG and
                    Section 508 standards. That discipline became the
                    foundation of this practice — carried through federal work
                    for DHS/USCIS and the US Navy.
                  </p>
                  <p>
                    Today the same pioneering instinct is aimed at{" "}
                    <strong>agentic AI development</strong>. With Claude Code
                    and autonomous workflows, Christian ships what once took
                    whole teams — the engine behind{" "}
                    <strong>CannaBuddy.com</strong>, the award-winning hemp THC
                    beverage brand he co-founded under Fueling My Dreams and
                    leads as CEO.
                  </p>
                </div>

                {/* Pull quote */}
                <figure className="my-10 border-y-2 border-foreground py-8">
                  <blockquote className="ed-display text-center text-2xl font-medium italic leading-snug sm:text-3xl">
                    “Three decades. Countless technologies. One constant:
                    making technology work for people.”
                  </blockquote>
                </figure>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 border-primary pb-0.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:border-foreground hover:text-foreground"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={COMPANY.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 border-primary pb-0.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:border-foreground hover:text-foreground"
                  >
                    Full Résumé ↗
                  </a>
                </div>
              </ScrollReveal>

              {/* Timeline ledger */}
              <ScrollReveal direction="right" className="lg:col-span-2">
                <div className="border border-border bg-card p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    A Ledger of Milestones
                  </h3>
                  <ol className="mt-6" role="list">
                    {MILESTONES.map((milestone) => (
                      <li
                        key={milestone.year}
                        className="ed-hairline border-b border-border py-4 last:border-b-0"
                      >
                        <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                          {milestone.year}
                        </p>
                        <h4 className="ed-display mt-1 text-lg font-medium">
                          {milestone.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {milestone.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============ Portfolio — selected engagements ============ */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                The Record
              </p>
              <h2
                id="portfolio-heading"
                className="ed-display mt-3 text-4xl font-medium tracking-tight sm:text-5xl"
              >
                Selected engagements
              </h2>
              <div className="ed-double-rule mt-8" />
            </ScrollReveal>

            <ul role="list">
              {PORTFOLIO.map((project, i) => (
                <ScrollReveal
                  key={project.client}
                  delay={prefersReducedMotion ? 0 : i * 0.04}
                >
                  <li className="ed-hairline grid gap-2 border-b border-border py-6 transition-colors hover:bg-muted sm:grid-cols-12 sm:gap-6">
                    <h3 className="ed-display text-xl font-medium tracking-tight sm:col-span-3">
                      {project.client}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-6">
                      {project.description}
                    </p>
                    <p className="text-[0.65rem] font-semibold uppercase leading-loose tracking-[0.2em] text-primary sm:col-span-3 sm:text-right">
                      {project.tags.join(" · ")}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Testimonials — correspondence ============ */}
        <section
          aria-labelledby="testimonials-heading"
          className="px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2
                id="testimonials-heading"
                className="ed-display text-center text-4xl font-medium tracking-tight sm:text-5xl"
              >
                Letters from clients
              </h2>
            </ScrollReveal>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.1}>
                  <figure className="border border-border bg-card p-8">
                    <span className="ed-quote-mark" aria-hidden="true">
                      “
                    </span>
                    <blockquote className="mt-4 text-lg italic leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-4">
                      <cite className="text-sm font-bold not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact — write to us ============ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Correspondence
              </p>
              <h2
                id="contact-heading"
                className="ed-display mt-3 text-4xl font-medium tracking-tight sm:text-5xl"
              >
                Write to us
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-14 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <EditorialContactForm />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A full build, an accessibility audit, or an exploration of
                    what agentic AI can do for your delivery schedule — the
                    correspondence starts here.
                  </p>

                  <dl className="space-y-4">
                    <div className="ed-hairline border-b border-border pb-4">
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                        Location
                      </dt>
                      <dd className="ed-display mt-1 text-lg">
                        {COMPANY.address}
                      </dd>
                    </div>
                    <div className="ed-hairline border-b border-border pb-4">
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                        Telephone
                      </dt>
                      <dd className="ed-display mt-1 text-lg">
                        <a
                          href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                          className="transition-colors hover:text-primary"
                        >
                          {COMPANY.phone}
                        </a>
                      </dd>
                    </div>
                    <div className="ed-hairline border-b border-border pb-4">
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                        LinkedIn
                      </dt>
                      <dd className="ed-display mt-1 text-lg">
                        <a
                          href={COMPANY.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-primary"
                        >
                          Christian Abad ↗
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div>
                    <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Certifications
                    </h3>
                    <p className="mt-2 text-sm leading-loose">
                      Certified Scrum Master · ITIL Foundation · Six Sigma
                      Green Belt · HubSpot Inbound
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ============ Footer — colophon ============ */}
      <footer className="relative z-10 px-6 py-14" role="contentinfo">
        <div className="mx-auto max-w-4xl text-center">
          <div className="ed-double-rule" />
          <p className="ed-display mt-8 text-2xl font-semibold tracking-tight">
            Accessible Computing
          </p>
          <nav aria-label="Footer Navigation" className="mt-5">
            <ul
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
              role="list"
            >
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-6 text-xs leading-loose text-muted-foreground">
            {COMPANY.address} · {COMPANY.phone}
            <br />
            Set in Fraunces & Newsreader. Built to WCAG 2.2 AAA.
            <br />© {COMPANY.founded}–{new Date().getFullYear()} {COMPANY.name}{" "}
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function EditorialContactForm() {
  const { status, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label
          htmlFor="ed-contact-name"
          className="block text-[0.65rem] font-semibold uppercase tracking-[0.25em]"
        >
          Name <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="ed-contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="ed-input mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="ed-contact-email"
          className="block text-[0.65rem] font-semibold uppercase tracking-[0.25em]"
        >
          Email <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="ed-contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="ed-input mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="ed-contact-phone"
          className="block text-[0.65rem] font-semibold uppercase tracking-[0.25em]"
        >
          Telephone{" "}
          <span className="normal-case tracking-normal text-muted-foreground">
            (optional)
          </span>
        </label>
        <input
          id="ed-contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="ed-input mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="ed-contact-message"
          className="block text-[0.65rem] font-semibold uppercase tracking-[0.25em]"
        >
          Message <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="ed-contact-message"
          name="message"
          required
          rows={5}
          className="ed-input mt-1 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center bg-foreground px-10 text-xs font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Post the letter"}
      </button>

      {status === "sent" && (
        <p className="text-sm font-semibold italic" role="status">
          Received with thanks — we’ll reply shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold italic text-primary" role="alert">
          Something went astray. Please try again, or ring us directly.
        </p>
      )}
    </form>
  );
}
