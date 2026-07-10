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

/* Decorative fake commit hashes for the git-log timeline */
const HASHES = ["f3a8c21", "7b2d94e", "c0a5e12", "9d4f508", "e8b2c67", "a11ce55"];

const STAT_VARS = ["YEARS_EXPERIENCE", "PAGES_MADE_ACCESSIBLE", "ENTERPRISE_CLIENTS"];

export function TerminalSite() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.45,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      <div className="tm-scanlines" aria-hidden="true" />

      {/* ============ Nav ============ */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <nav
          aria-label="Main Navigation"
          className="tm-mono mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3"
        >
          <Link
            href="/"
            aria-label={`${COMPANY.shortName} — Home`}
            className="text-sm font-semibold"
          >
            <span className="text-primary" aria-hidden="true">
              ~/
            </span>
            accessible-computing{" "}
            <span className="text-primary" aria-hidden="true">
              $
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {NAV_ITEMS.map((navItem) => (
              <Link
                key={navItem.label}
                href={navItem.href}
                className="text-xs font-medium lowercase transition-colors hover:text-primary hover:underline hover:underline-offset-4"
              >
                ./{navItem.label.toLowerCase()}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="main-content" className="relative z-10">
        {/* ============ Hero — terminal session ============ */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="px-6 pt-14 pb-16 sm:pt-20"
        >
          <motion.div
            className="mx-auto max-w-4xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="tm-window shadow-2xl">
              <div className="tm-titlebar" aria-hidden="true">
                <span className="tm-dot" />
                <span className="tm-dot" />
                <span className="tm-dot" />
                <span className="tm-mono ml-2 text-xs text-muted-foreground">
                  christian@accessible-computing — est. {COMPANY.founded}
                </span>
              </div>

              <div className="space-y-6 p-6 sm:p-10">
                <motion.div variants={item} className="tm-mono text-sm">
                  <p aria-hidden="true">
                    <span className="text-primary">$</span> whoami
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    Christian N. Abad — President & Founder. 30+ years shipping
                    for the web.
                  </p>
                </motion.div>

                <motion.div variants={item}>
                  <p className="tm-mono text-sm" aria-hidden="true">
                    <span className="text-primary">$</span> cat mission.txt
                  </p>
                  <h1
                    id="hero-heading"
                    className="tm-mono tm-glow mt-3 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl"
                  >
                    The web should
                    <br />
                    work for everyone.
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Web development, accessibility consulting, and agentic AI
                    engineering — from Solaris workstations in 1995 to
                    autonomous coding agents today.
                  </p>
                </motion.div>

                <motion.div variants={item} className="tm-mono text-sm">
                  <p aria-hidden="true">
                    <span className="text-primary">$</span> env | grep CRED
                  </p>
                  <dl className="mt-2 space-y-1">
                    {STATS.map((stat, i) => (
                      <div key={stat.label} className="flex flex-wrap gap-x-2">
                        <dt className="text-accent">{STAT_VARS[i]}=</dt>
                        <dd className="font-bold">
                          {stat.value.toLocaleString()}
                          {stat.suffix}
                          <span className="sr-only"> {stat.label}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>

                <motion.div
                  variants={item}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  <a
                    href="#contact"
                    className="tm-mono inline-flex h-11 items-center justify-center bg-primary px-6 text-sm font-bold text-background transition-colors hover:bg-primary-light"
                  >
                    [ start a project ]
                  </a>
                  <a
                    href="#services"
                    className="tm-mono inline-flex h-11 items-center justify-center border border-primary px-6 text-sm font-bold text-primary transition-colors hover:bg-muted"
                  >
                    [ view services ]
                  </a>
                </motion.div>

                <motion.p
                  variants={item}
                  className="tm-mono tm-cursor text-sm text-muted-foreground"
                  aria-hidden="true"
                >
                  <span className="text-primary">$</span>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============ Services — ls output ============ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="border-y border-border bg-section-alt px-6 py-18 lg:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="tm-mono text-sm text-muted-foreground" aria-hidden="true">
                <span className="text-primary">$</span> ls -la ./services/
              </p>
              <h2
                id="services-heading"
                className="tm-mono mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              >
                services/
              </h2>
            </ScrollReveal>

            <ul className="mt-10 divide-y divide-border border-y border-border" role="list">
              {SERVICES.map((service, i) => (
                <ScrollReveal
                  key={service.title}
                  delay={prefersReducedMotion ? 0 : i * 0.05}
                >
                  <li className="group grid gap-2 py-5 transition-colors hover:bg-muted sm:grid-cols-12 sm:gap-6 sm:px-4">
                    <p
                      className="tm-mono hidden text-xs leading-6 text-muted-foreground sm:col-span-2 sm:block"
                      aria-hidden="true"
                    >
                      drwxr-xr-x
                    </p>
                    <h3 className="tm-mono text-lg font-bold text-primary sm:col-span-4">
                      {service.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}
                      /
                      <span className="sr-only"> — {service.title}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-6">
                      {service.description}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
            <p className="tm-mono mt-4 text-xs text-muted-foreground" aria-hidden="true">
              6 directories, 0 broken links
            </p>
          </div>
        </section>

        {/* ============ About — cat + git log ============ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="px-6 py-18 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <p className="tm-mono text-sm text-muted-foreground" aria-hidden="true">
                  <span className="text-primary">$</span> cat ABOUT.md
                </p>
                <h2
                  id="about-heading"
                  className="tm-mono mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                  <span aria-hidden="true"># </span>The story
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Founded in 2005 by Christian N. Abad on a simple
                    conviction:{" "}
                    <strong className="text-foreground">
                      the web should work for everyone.
                    </strong>{" "}
                    His Appalachian State degree pairs Psychology with Computer
                    Science — people first, then machines — and that lens has
                    shaped three decades of engineering.
                  </p>
                  <p>
                    The career boots in 1995 at Mitsubishi Semiconductors — C,
                    Solaris, X-Motif. At Bank of America he rose to VP leading
                    web accessibility across{" "}
                    <strong className="text-foreground">5,000+ pages</strong>,
                    then built ADA-compliant systems for DHS/USCIS and the US
                    Navy.
                  </p>
                  <p>
                    Today he runs{" "}
                    <strong className="text-foreground">
                      agentic AI workflows with Claude Code
                    </strong>{" "}
                    — one engineer shipping what once took teams. It&apos;s the
                    engine behind CannaBuddy.com, the award-winning hemp THC
                    beverage brand he co-founded under Fueling My Dreams and
                    leads as CEO, and a production fleet of autonomous bots
                    running on Railway.
                  </p>
                </div>
                <div className="tm-mono mt-8 flex flex-wrap gap-4 text-sm">
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary-light"
                  >
                    linkedin ↗
                  </a>
                  <a
                    href={COMPANY.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary-light"
                  >
                    resume ↗
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <p className="tm-mono text-sm text-muted-foreground" aria-hidden="true">
                  <span className="text-primary">$</span> git log --oneline
                  --reverse career/
                </p>
                <ol className="tm-mono mt-6 space-y-5 border-l border-border pl-5" role="list">
                  {MILESTONES.map((milestone, i) => (
                    <li key={milestone.year}>
                      <p className="flex flex-wrap items-baseline gap-x-3 text-sm">
                        <span className="text-accent" aria-hidden="true">
                          {HASHES[i % HASHES.length]}
                        </span>
                        <span className="font-bold text-primary">
                          {milestone.year}
                        </span>
                        <span className="font-bold">{milestone.title}</span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {milestone.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============ Portfolio — client files ============ */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="border-y border-border bg-section-alt px-6 py-18 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="tm-mono text-sm text-muted-foreground" aria-hidden="true">
                <span className="text-primary">$</span> grep -ri
                &quot;shipped&quot; ./clients/
              </p>
              <h2
                id="portfolio-heading"
                className="tm-mono mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              >
                clients/
              </h2>
            </ScrollReveal>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {PORTFOLIO.map((project, i) => (
                <ScrollReveal
                  key={project.client}
                  delay={prefersReducedMotion ? 0 : i * 0.04}
                >
                  <li className="h-full border border-border bg-card p-5 transition-colors hover:border-primary">
                    <h3 className="tm-mono text-sm font-bold text-primary">
                      {project.client
                        .toLowerCase()
                        .replace(/[^a-z0-9.]+/g, "-")
                        .replace(/(^-|-$)/g, "")}
                      .md
                      <span className="sr-only"> — {project.client}</span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="tm-mono mt-4 text-xs text-accent">
                      {project.tags.map((tag) => `#${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`).join(" ")}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Testimonials — feedback.log ============ */}
        <section
          aria-labelledby="testimonials-heading"
          className="px-6 py-18 lg:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="tm-mono text-sm text-muted-foreground" aria-hidden="true">
                <span className="text-primary">$</span> tail -n 2 feedback.log
              </p>
              <h2
                id="testimonials-heading"
                className="tm-mono mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              >
                feedback.log
              </h2>
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              {TESTIMONIALS.map((testimonial, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.1}>
                  <figure className="border border-border border-l-4 border-l-primary bg-card p-6">
                    <blockquote className="text-base leading-relaxed">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="tm-mono mt-4 text-xs text-muted-foreground">
                      <span className="text-accent" aria-hidden="true">
                        [OK]
                      </span>{" "}
                      <cite className="font-bold not-italic text-foreground">
                        {testimonial.name}
                      </cite>{" "}
                      — {testimonial.title}, {testimonial.company}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact — ssh session ============ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="border-t border-border bg-section-alt px-6 py-18 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="tm-mono text-sm text-muted-foreground" aria-hidden="true">
                <span className="text-primary">$</span> ssh
                guest@accessiblecomputing.com
              </p>
              <h2
                id="contact-heading"
                className="tm-mono mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              >
                Connection established
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                A build, an audit, or an agentic AI pilot — describe it below
                and it lands directly with the engineer.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <TerminalContactForm />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="tm-mono space-y-6 text-sm">
                  <div className="tm-window">
                    <div className="tm-titlebar" aria-hidden="true">
                      <span className="tm-dot" />
                      <span className="tm-dot" />
                      <span className="tm-dot" />
                      <span className="ml-2 text-xs text-muted-foreground">
                        contact.cfg
                      </span>
                    </div>
                    <dl className="space-y-3 p-6">
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="text-accent">location =</dt>
                        <dd>{COMPANY.address}</dd>
                      </div>
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="text-accent">phone =</dt>
                        <dd>
                          <a
                            href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                            className="underline decoration-1 underline-offset-4 hover:text-primary"
                          >
                            {COMPANY.phone}
                          </a>
                        </dd>
                      </div>
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="text-accent">linkedin =</dt>
                        <dd>
                          <a
                            href={COMPANY.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-1 underline-offset-4 hover:text-primary"
                          >
                            christianabad ↗
                          </a>
                        </dd>
                      </div>
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="text-accent">certs =</dt>
                        <dd className="max-w-xs">
                          CSM, ITIL, Six Sigma Green Belt, HubSpot Inbound
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary" aria-hidden="true">
                      [✓]
                    </span>{" "}
                    WCAG 2.2 AAA — all checks passed
                    <br />
                    <span className="text-primary" aria-hidden="true">
                      [✓]
                    </span>{" "}
                    prefers-reduced-motion respected
                    <br />
                    <span className="text-primary" aria-hidden="true">
                      [✓]
                    </span>{" "}
                    keyboard-navigable end to end
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ============ Footer ============ */}
      <footer role="contentinfo" className="relative z-10 border-t border-border px-6 py-12">
        <div className="tm-mono mx-auto max-w-6xl space-y-4 text-sm">
          <p aria-hidden="true">
            <span className="text-primary">$</span> exit
          </p>
          <p className="text-muted-foreground">
            Connection to accessiblecomputing.com closed.
          </p>
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="text-xs lowercase text-muted-foreground transition-colors hover:text-primary hover:underline hover:underline-offset-4"
                  >
                    ./{navItem.label.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-muted-foreground">
            <span aria-hidden="true"># </span>© {COMPANY.founded}–
            {new Date().getFullYear()} {COMPANY.name} All rights reserved.
            <br />
            <span aria-hidden="true"># </span>
            {COMPANY.address} · {COMPANY.phone} · Set in IBM Plex.
          </p>
        </div>
      </footer>
    </>
  );
}

function TerminalContactForm() {
  const { status, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="tm-contact-name"
          className="tm-mono block text-sm font-bold"
        >
          <span className="text-primary" aria-hidden="true">
            &gt;{" "}
          </span>
          name: <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="tm-contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="tm-input mt-2"
        />
      </div>
      <div>
        <label
          htmlFor="tm-contact-email"
          className="tm-mono block text-sm font-bold"
        >
          <span className="text-primary" aria-hidden="true">
            &gt;{" "}
          </span>
          email: <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="tm-contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="tm-input mt-2"
        />
      </div>
      <div>
        <label
          htmlFor="tm-contact-phone"
          className="tm-mono block text-sm font-bold"
        >
          <span className="text-primary" aria-hidden="true">
            &gt;{" "}
          </span>
          phone:{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="tm-contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="tm-input mt-2"
        />
      </div>
      <div>
        <label
          htmlFor="tm-contact-message"
          className="tm-mono block text-sm font-bold"
        >
          <span className="text-primary" aria-hidden="true">
            &gt;{" "}
          </span>
          message: <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="tm-contact-message"
          name="message"
          required
          rows={5}
          className="tm-input mt-2 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="tm-mono inline-flex h-11 items-center justify-center bg-primary px-8 text-sm font-bold text-background transition-colors hover:bg-primary-light disabled:opacity-50"
      >
        {status === "sending" ? "transmitting…" : "[ transmit ]"}
      </button>

      {status === "sent" && (
        <p className="tm-mono text-sm font-bold text-primary" role="status">
          [✓] message delivered — reply incoming.
        </p>
      )}
      {status === "error" && (
        <p className="tm-mono text-sm font-bold text-accent" role="alert">
          [✗] transmission failed — retry or call us.
        </p>
      )}
    </form>
  );
}
