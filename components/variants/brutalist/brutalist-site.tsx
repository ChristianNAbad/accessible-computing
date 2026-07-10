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

const MARQUEE_ITEMS = [
  "ACCESSIBLE",
  "INCLUSIVE",
  "PERFORMANT",
  "COMPLIANT",
  "RESPONSIVE",
  "SEMANTIC",
];

export function BrutalistSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  const repeatedMarquee = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      {/* ============ Header ============ */}
      <header className="border-b-4 border-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            aria-label={`${COMPANY.shortName} — Home`}
            className="br-display text-xl uppercase leading-none tracking-tight sm:text-2xl"
          >
            Accessible
            <br />
            Computing<span aria-hidden="true">™</span>
          </Link>
          <ThemeToggle />
        </div>
        <nav
          aria-label="Main Navigation"
          className="border-t-2 border-foreground"
        >
          <ul className="mx-auto flex max-w-7xl flex-wrap" role="list">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.label} className="border-r-2 border-foreground">
                <Link
                  href={navItem.href}
                  className="block px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-[#101010]"
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* ============ Hero ============ */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="border-b-4 border-foreground px-6 py-16 sm:py-24"
        >
          <motion.div
            className="mx-auto max-w-7xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="inline-block border-2 border-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Since 2005 — Matthews, NC
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="br-display mt-8 text-[15vw] uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            >
              Making
              <br />
              the web
              <br />
              work for{" "}
              <span className="br-accent-block inline-block px-3">
                everyone
              </span>
              <span aria-hidden="true">*</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base font-medium leading-relaxed"
            >
              <span aria-hidden="true">*</span>Yes, everyone. It&apos;s in the
              name. Web development, accessibility consulting, and agentic AI
              engineering — zero decoration, all structure.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="br-shadow br-pop inline-flex h-14 items-center justify-center border-3 border-foreground bg-foreground px-8 text-sm font-bold uppercase tracking-[0.15em] text-background"
              >
                Start a project →
              </a>
              <a
                href="#services"
                className="br-shadow br-pop inline-flex h-14 items-center justify-center border-3 border-foreground bg-card px-8 text-sm font-bold uppercase tracking-[0.15em]"
              >
                See services
              </a>
            </motion.div>

            {/* Stats blocks */}
            <motion.dl
              variants={item}
              className="mt-16 grid gap-6 sm:grid-cols-3"
            >
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`br-shadow border-3 border-foreground p-6 ${
                    i === 1 ? "br-accent-block" : "bg-card"
                  }`}
                >
                  <dd className="br-display text-4xl md:text-5xl">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </dd>
                  <dt className="mt-2 text-xs font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </section>

        {/* ============ Marquee ============ */}
        <div
          className="overflow-hidden border-b-4 border-foreground bg-foreground py-3"
          aria-hidden="true"
        >
          <div className="animate-marquee flex whitespace-nowrap">
            {repeatedMarquee.map((word, i) => (
              <span
                key={i}
                className="br-display mx-6 text-lg uppercase tracking-[0.2em] text-background"
              >
                {word}
                <span className="ml-12 text-accent">■</span>
              </span>
            ))}
          </div>
        </div>

        {/* ============ Services ============ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="border-b-4 border-foreground bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2
                id="services-heading"
                className="br-display text-5xl uppercase tracking-tight sm:text-6xl"
              >
                What we{" "}
                <span className="br-accent-block inline-block px-2">build</span>
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium">
                Six services. Thirty years of reps behind each one.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid border-l-3 border-t-3 border-foreground sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <ScrollReveal
                  key={service.title}
                  delay={prefersReducedMotion ? 0 : i * 0.05}
                  className="border-b-3 border-r-3 border-foreground"
                >
                  <div className="group h-full bg-card p-7 transition-colors hover:bg-accent hover:text-[#101010]">
                    <div className="flex items-start justify-between gap-3">
                      <span className="br-display text-4xl" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <service.icon
                        className="h-8 w-8 shrink-0"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="br-display mt-6 text-lg uppercase leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ About ============ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-b-4 border-foreground px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2
                id="about-heading"
                className="br-display text-5xl uppercase tracking-tight sm:text-6xl"
              >
                The story so far
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="br-shadow border-3 border-foreground bg-card p-8">
                  <div className="space-y-5 text-base font-medium leading-relaxed">
                    <p>
                      Founded in 2005 by Christian N. Abad on one conviction:{" "}
                      <span className="br-mark">
                        the web should work for everyone.
                      </span>
                    </p>
                    <p>
                      The roots: a degree from Appalachian State pairing{" "}
                      <span className="br-mark">
                        Psychology with Computer Science
                      </span>{" "}
                      — people first, then machines. Career start in 1995 at
                      Mitsubishi Semiconductors. C, Solaris, X-Motif. The hard
                      way.
                    </p>
                    <p>
                      At Bank of America: VP, Web Accessibility Team Manager.{" "}
                      <span className="br-mark">5,000+ pages</span> brought to
                      WCAG and Section 508 compliance. Then federal work —
                      DHS/USCIS, US Navy. Standards aren&apos;t a checkbox
                      here; they&apos;re the material.
                    </p>
                    <p>
                      Now:{" "}
                      <span className="br-mark">agentic AI development</span>{" "}
                      with Claude Code. One engineer shipping what used to take
                      teams — the engine behind CannaBuddy.com, the
                      award-winning hemp THC beverage brand he co-founded under
                      Fueling My Dreams and leads as CEO.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={COMPANY.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="br-shadow-sm br-pop inline-flex items-center border-3 border-foreground bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em]"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href={COMPANY.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="br-shadow-sm br-pop inline-flex items-center border-3 border-foreground bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em]"
                    >
                      Full resume ↗
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <ol className="space-y-5" role="list">
                  {MILESTONES.map((milestone) => (
                    <li
                      key={milestone.year}
                      className="border-3 border-foreground bg-card"
                    >
                      <div className="flex items-stretch">
                        <p className="br-accent-block br-display flex items-center border-r-3 border-foreground px-4 py-3 text-sm whitespace-nowrap">
                          {milestone.year}
                        </p>
                        <div className="px-4 py-3">
                          <h3 className="br-display text-sm uppercase">
                            {milestone.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium leading-snug">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============ Portfolio ============ */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="border-b-4 border-foreground bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2
                id="portfolio-heading"
                className="br-display text-5xl uppercase tracking-tight sm:text-6xl"
              >
                Receipts
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium">
                Enterprise, government, ecommerce. Every one accessible.
              </p>
            </ScrollReveal>

            <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {PORTFOLIO.map((project, i) => (
                <ScrollReveal
                  key={project.client}
                  delay={prefersReducedMotion ? 0 : i * 0.04}
                >
                  <li className="br-shadow br-pop h-full border-3 border-foreground bg-card p-6">
                    <h3 className="br-display text-lg uppercase leading-snug">
                      {project.client}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed">
                      {project.description}
                    </p>
                    <p className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-2 border-foreground px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Testimonials ============ */}
        <section
          aria-labelledby="testimonials-heading"
          className="border-b-4 border-foreground px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2
                id="testimonials-heading"
                className="br-display text-5xl uppercase tracking-tight sm:text-6xl"
              >
                People say:
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.1}>
                  <figure className="border-l-8 border-foreground pl-6">
                    <span
                      className="br-display block text-7xl leading-[0.5]"
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-5">
                      <cite className="br-display text-sm uppercase not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                        {testimonial.title} — {testimonial.company}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2
                id="contact-heading"
                className="br-display text-5xl uppercase tracking-tight sm:text-6xl"
              >
                Talk to{" "}
                <span className="br-accent-block inline-block px-2">us</span>
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium">
                A build, an audit, or an agentic AI experiment. No layers of
                account managers — you talk to the engineer.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <BrutalistContactForm />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="space-y-7">
                  <div className="br-shadow border-3 border-foreground bg-card p-7">
                    <h3 className="br-display text-sm uppercase tracking-[0.1em]">
                      Coordinates
                    </h3>
                    <dl className="mt-4 space-y-3 text-sm font-medium">
                      <div className="flex justify-between gap-4 border-b-2 border-foreground pb-2">
                        <dt className="font-bold uppercase text-xs tracking-[0.15em]">
                          Location
                        </dt>
                        <dd>{COMPANY.address}</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b-2 border-foreground pb-2">
                        <dt className="font-bold uppercase text-xs tracking-[0.15em]">
                          Phone
                        </dt>
                        <dd>
                          <a
                            href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                            className="underline decoration-2 underline-offset-4 hover:decoration-4"
                          >
                            {COMPANY.phone}
                          </a>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="font-bold uppercase text-xs tracking-[0.15em]">
                          LinkedIn
                        </dt>
                        <dd>
                          <a
                            href={COMPANY.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-2 underline-offset-4 hover:decoration-4"
                          >
                            Christian Abad ↗
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="br-shadow br-accent-block border-3 border-foreground p-7">
                    <h3 className="br-display text-sm uppercase tracking-[0.1em]">
                      Credentials
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm font-bold" role="list">
                      <li>■ Certified Scrum Master</li>
                      <li>■ ITIL Foundation</li>
                      <li>■ Six Sigma Green Belt</li>
                      <li>■ HubSpot Inbound</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ============ Footer ============ */}
      <footer
        role="contentinfo"
        className="border-t-4 border-foreground bg-foreground text-background [--ring:#ffd400]"
      >
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="br-display text-3xl uppercase leading-none tracking-tight sm:text-5xl">
            Accessible Computing<span aria-hidden="true">™</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
                {NAV_ITEMS.map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      href={navItem.href}
                      className="text-xs font-bold uppercase tracking-[0.15em] underline decoration-2 underline-offset-4 hover:decoration-accent"
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="br-accent-block px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em]">
              WCAG 2.2 AAA — verified, not vibes
            </p>
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.1em]">
            © {COMPANY.founded}–{new Date().getFullYear()} {COMPANY.name} All
            rights reserved. {COMPANY.address} · {COMPANY.phone}
          </p>
        </div>
      </footer>
    </>
  );
}

function BrutalistContactForm() {
  const { status, handleSubmit } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="br-shadow space-y-6 border-3 border-foreground bg-card p-7"
    >
      <div>
        <label
          htmlFor="br-contact-name"
          className="br-display block text-xs uppercase tracking-[0.15em]"
        >
          Name <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="br-contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="br-input mt-2"
        />
      </div>
      <div>
        <label
          htmlFor="br-contact-email"
          className="br-display block text-xs uppercase tracking-[0.15em]"
        >
          Email <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="br-contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="br-input mt-2"
        />
      </div>
      <div>
        <label
          htmlFor="br-contact-phone"
          className="br-display block text-xs uppercase tracking-[0.15em]"
        >
          Phone <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="br-contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="br-input mt-2"
        />
      </div>
      <div>
        <label
          htmlFor="br-contact-message"
          className="br-display block text-xs uppercase tracking-[0.15em]"
        >
          Message <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="br-contact-message"
          name="message"
          required
          rows={5}
          className="br-input mt-2 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="br-shadow-sm br-pop br-accent-block br-display inline-flex h-14 w-full items-center justify-center border-3 border-foreground px-8 text-sm uppercase tracking-[0.15em] disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send it →"}
      </button>

      {status === "sent" && (
        <p className="br-display text-sm uppercase" role="status">
          ✓ Sent. We&apos;ll be in touch.
        </p>
      )}
      {status === "error" && (
        <p className="br-display text-sm uppercase" role="alert">
          ✗ Failed. Try again or call us.
        </p>
      )}
    </form>
  );
}
