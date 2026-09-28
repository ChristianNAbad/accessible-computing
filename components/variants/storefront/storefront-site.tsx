"use client";

import Link from "next/link";
import { useState } from "react";
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

const STACK = ["Shopify", "WooCommerce", "Klaviyo", "Google Ads", "AI search"];

const STRIP = [
  "Product pages that rank",
  "Email that pays rent",
  "Ads that stop wasting money",
  "Answers in ChatGPT",
  "Content every week",
  "One number that moves",
];

export function StorefrontSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  const strip = [...STRIP, ...STRIP];
  const [stripPaused, setStripPaused] = useState(false);

  return (
    <>
      <div className="sf-dots" aria-hidden="true" />

      {/* ============ Header ============ */}
      <header className="relative z-10 border-b-[3px] border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            aria-label={`${COMPANY.shortName} — Home`}
            className="sf-display text-2xl font-black"
          >
            Accessible Computing
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-6" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="text-sm font-bold transition-colors hover:text-primary"
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
              className="hidden h-10 items-center rounded-full border-2 border-border bg-primary px-5 text-sm font-extrabold text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Free audit
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
          className="px-6 pt-14 pb-16 sm:pt-20 lg:pb-24"
        >
          <motion.div
            className="mx-auto max-w-7xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <span className="sf-sticker">For brands that sell</span>
              <span className="sf-sticker sf-sticker--alt">
                Shopify · WooCommerce
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="sf-display mt-8 text-[4.2rem] font-black leading-[0.88] sm:text-[6.5rem] lg:text-[9rem]"
            >
              More orders.
              <br />
              <span className="sf-wobble text-primary">Less noise.</span>
            </motion.h1>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <motion.p
                variants={item}
                className="max-w-xl text-xl leading-relaxed text-muted-foreground lg:col-span-7"
              >
                An outsourced marketing department for ecommerce brands:
                product content, search, email, ads, and the AI answers your
                customers read before they ever hit your store. A dedicated
                account manager runs your account from day one.
              </motion.p>

              <motion.div
                variants={item}
                className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end"
              >
                <a
                  href="#contact"
                  className="inline-flex h-14 items-center justify-center rounded-full border-[3px] border-border bg-primary px-8 text-base font-extrabold text-background transition-transform hover:-translate-y-1"
                >
                  Get a free store audit
                </a>
                <a
                  href="#services"
                  className="inline-flex h-14 items-center justify-center rounded-full border-[3px] border-border bg-card px-8 text-base font-extrabold text-foreground transition-transform hover:-translate-y-1"
                >
                  What you get
                </a>
              </motion.div>
            </div>

            <motion.ul
              variants={item}
              className="mt-12 flex flex-wrap gap-2"
              aria-label="Platforms we work in"
            >
              {STACK.map((s) => (
                <li key={s} className="sf-tag">
                  {s}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        {/* ============ Conveyor strip ============ */}
        <div className="sf-strip relative overflow-hidden py-4" data-paused={stripPaused}>
          <button
            type="button"
            onClick={() => setStripPaused((p) => !p)}
            aria-pressed={stripPaused}
            className="sf-strip-toggle absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-background bg-primary px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-background"
          >
            {stripPaused ? "Play" : "Pause"}
            <span className="sr-only"> the scrolling banner</span>
          </button>
          <div className="sf-strip-track" aria-hidden="true">
            {strip.map((s, i) => (
              <span
                key={i}
                className="sf-display mx-6 text-2xl font-extrabold tracking-wide"
              >
                {s} <span className="mx-4">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ============ Stats ============ */}
        <section aria-label="Track record at a glance" className="px-6 py-14">
          <ScrollReveal>
            <dl className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="sf-card flex flex-col p-6">
                  <dt className="order-last mt-2 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="sf-display order-first text-6xl font-black text-primary">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </section>

        {/* ============ Services — product cards ============ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <span className="sf-sticker">In the box</span>
              <h2
                id="services-heading"
                className="sf-display mt-5 text-5xl font-black sm:text-7xl"
              >
                Everything a marketing team does. One SKU.
              </h2>
            </ScrollReveal>

            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal
                    key={service.title}
                    delay={prefersReducedMotion ? 0 : i * 0.05}
                  >
                    <li className="sf-card flex h-full flex-col p-6">
                      <div className="flex items-start justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-border bg-muted text-primary">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="sf-tag">SKU {i + 1}</span>
                      </div>
                      <h3 className="sf-display mt-6 text-3xl font-extrabold">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <a
                        href="#contact"
                        className="mt-6 inline-flex h-10 items-center justify-center rounded-full border-2 border-border bg-card px-4 text-xs font-extrabold uppercase tracking-[0.12em] transition-colors hover:bg-primary hover:text-background"
                      >
                        Add to plan
                        <span className="sr-only">: {service.title}</span>
                      </a>
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
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <span className="sf-sticker sf-sticker--alt">Who is behind it</span>
              <h2
                id="about-heading"
                className="sf-display mt-5 text-5xl font-black sm:text-7xl"
              >
                A team that has to hit a number too.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Your account has a dedicated account manager: a working
                  marketing expert who owns the plan, reviews every
                  deliverable before it ships, and writes the monthly report
                  you can read in five minutes.
                </p>
                <p>
                  Behind them is a small team covering product content,
                  search, email and paid. One client per product category, so
                  nobody on your account is also working for your competitor.
                </p>
                <p>
                  Behind the team is the founder: Christian N. Abad, a
                  thirty-year software engineer who led web accessibility for
                  5,000+ pages at Bank of America, and Founder and CEO of{" "}
                  <strong className="text-foreground">CannaBuddy</strong> and{" "}
                  <strong className="text-foreground">Purely Found</strong>,
                  two consumer brands that live or die on the same channels
                  your store does. The playbook you get is the one his own
                  stores run on: product content that ranks, email that earns,
                  ads that are cut the day they stop working.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-border bg-card px-5 text-sm font-extrabold transition-colors hover:bg-primary hover:text-background"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={COMPANY.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-border bg-card px-5 text-sm font-extrabold transition-colors hover:bg-primary hover:text-background"
                >
                  Résumé ↗
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-5">
              <ol className="space-y-4" role="list">
                {MILESTONES.map((milestone, i) => (
                  <li
                    key={milestone.year}
                    className="sf-card p-5"
                    style={{
                      transform: prefersReducedMotion
                        ? undefined
                        : `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)`,
                    }}
                  >
                    <p className="sf-display text-xl font-extrabold text-primary">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1 text-base font-extrabold">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Portfolio — shelf ============ */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <span className="sf-sticker">On the shelf</span>
              <h2
                id="portfolio-heading"
                className="sf-display mt-5 text-5xl font-black sm:text-7xl"
              >
                Brands and teams we have shipped for
              </h2>
            </ScrollReveal>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {PORTFOLIO.map((project, i) => (
                <ScrollReveal key={project.client} delay={prefersReducedMotion ? 0 : i * 0.04}>
                  <li className="sf-card flex h-full flex-col p-6">
                    <h3 className="sf-display text-3xl font-extrabold">
                      {project.client}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
                      {project.tags.map((tag) => (
                        <li key={tag} className="sf-tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Testimonials — reviews ============ */}
        <section
          aria-labelledby="testimonials-heading"
          className="px-6 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2
                id="testimonials-heading"
                className="sf-display text-5xl font-black sm:text-7xl"
              >
                What customers say
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.08}>
                  <figure className="sf-card p-7">
                    <blockquote className="text-lg leading-relaxed">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t-2 border-border pt-4">
                      <cite className="text-sm font-extrabold not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact — checkout ============ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-section-alt px-6 py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <span className="sf-sticker">Free · No card required</span>
              <h2
                id="contact-heading"
                className="sf-display mt-5 text-5xl font-black sm:text-7xl"
              >
                Start with a free store audit
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Drop your store URL. We send back where you are losing search
                traffic, what your email list could be earning, and whether
                the AI shopping answers mention you at all. Your account
                manager reviews it before it is sent.
              </p>
              <p className="mt-8 text-sm font-bold">
                Or call{" "}
                <a
                  href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                  className="text-primary underline decoration-2 underline-offset-4"
                >
                  {COMPANY.phone}
                </a>
                <br />
                <span className="font-medium text-muted-foreground">
                  {COMPANY.address}
                </span>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="sf-card p-6 sm:p-8">
                <StorefrontAuditForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ============ Footer ============ */}
      <footer className="relative z-10 border-t-[3px] border-border px-6 pt-12 pb-32" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="sf-display text-4xl font-black">Accessible Computing</p>
            <p className="mt-2 text-xs font-bold text-muted-foreground">
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
                    className="text-sm font-bold transition-colors hover:text-primary"
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

function StorefrontAuditForm() {
  const { status, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="sf-website" className="block text-sm font-extrabold">
          Store URL
        </label>
        <input
          id="sf-website"
          name="website"
          type="url"
          inputMode="url"
          placeholder="https://yourstore.com"
          autoComplete="url"
          className="sf-input mt-1.5"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sf-name" className="block text-sm font-extrabold">
            Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="sf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="sf-input mt-1.5"
          />
        </div>
        <div>
          <label htmlFor="sf-email" className="block text-sm font-extrabold">
            Email <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="sf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="sf-input mt-1.5"
          />
        </div>
      </div>
      <div>
        <label htmlFor="sf-message" className="block text-sm font-extrabold">
          What are you selling, and what is stuck?{" "}
          <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="sf-message"
          name="message"
          required
          rows={4}
          className="sf-input mt-1.5 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-14 w-full items-center justify-center rounded-full border-[3px] border-border bg-primary px-8 text-base font-extrabold text-background transition-transform hover:-translate-y-1 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send me the audit"}
      </button>

      {status === "sent" && (
        <p className="text-sm font-extrabold" role="status">
          Order received. Your account manager will review your audit and
          ship it within two business days.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-extrabold text-primary" role="alert">
          Checkout failed. Try again, or call us.
        </p>
      )}
    </form>
  );
}
