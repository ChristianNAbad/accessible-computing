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

const ACRONYMS = [
  { k: "SEO", name: "Search engine optimization", body: "Rank on the results page. Still the foundation." },
  { k: "AEO", name: "Answer engine optimization", body: "Be the direct answer in snippets and voice results." },
  { k: "GEO", name: "Generative engine optimization", body: "Get cited inside ChatGPT, Perplexity and AI Overviews." },
  { k: "CRO", name: "Conversion rate optimization", body: "Turn the visit into an order, whichever door they came through." },
];

const COMPARE = [
  { factor: "Where you show up", before: "Ten blue links", now: "Inside the answer, before any click" },
  { factor: "What gets measured", before: "Rankings and sessions", now: "Citations, mentions, share of the answer" },
  { factor: "What wins", before: "Keywords and backlinks", now: "Clear structure, real expertise, trusted sources" },
  { factor: "Who runs it for you", before: "A tool and a freelancer", now: "A dedicated account manager and a team" },
];

const DELIVERABLES = [
  "AI visibility and entity audit across Google AI Overviews, ChatGPT, Gemini and Perplexity",
  "Content restructured so machines can parse it and people still want to read it",
  "New pages and posts written to be the cited source, in your voice",
  "Klaviyo flows and campaigns, human-approved before they send",
  "Google Ads built, watched and cut the day they stop working",
  "A monthly report from your account manager, in plain language",
];

export function ConversationSite() {
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
      {/* ============ Header (black) ============ */}
      <header className="cv-hero relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label={`${COMPANY.shortName} — Home`} className="cv-display text-base font-bold">
            Accessible Computing
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-7" role="list">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label}>
                  <Link href={navItem.href} className="cv-hero-muted text-sm font-medium transition-colors hover:text-[var(--cv-hero-fg)]">
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="cv-cta cv-cta--magenta hidden h-10 items-center px-5 text-sm sm:inline-flex">
              Let&rsquo;s talk
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ============ Hero with the form in it ============ */}
        <section id="hero" aria-labelledby="hero-heading" className="cv-hero px-6 pt-12 pb-20 sm:pt-16">
          <div className="cv-bubbles" aria-hidden="true" />
          <motion.div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center" variants={container} initial="hidden" animate="show">
            <div className="lg:col-span-7">
              <motion.h1 id="hero-heading" variants={item} className="cv-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Be part of the conversation your customers are{" "}
                <span className="cv-lime cv-caret">already having.</span>
              </motion.h1>
              <motion.p variants={item} className="cv-hero-muted mt-6 max-w-xl text-lg leading-relaxed">
                People ask ChatGPT, Perplexity and Google which brand to buy
                before they ever search your name. We are a small agency that
                gets brands that sell online into that answer, and into the
                inbox and the results page too. Every account has a dedicated
                account manager who is a working marketing expert.
              </motion.p>
              <motion.dl variants={item} className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--cv-hero-line)] pt-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="cv-hero-muted order-last mt-1 text-xs">{stat.label}</dt>
                    <dd className="cv-display cv-lime order-first text-2xl font-bold sm:text-3xl">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>
            <motion.div variants={item} className="lg:col-span-5">
              <div className="cv-form-card p-6 sm:p-7">
                <p className="cv-display text-lg font-bold">Get your free visibility audit</p>
                <p className="cv-hero-muted mt-1 text-sm">Reviewed by your account manager before it is sent.</p>
                <div className="mt-5">
                  <ConversationHeroForm />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============ Stat strip ============ */}
        <section aria-label="Why this matters now" className="cv-strip">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-3">
            {[
              { big: "Before the click", small: "is where buying decisions now start, inside AI answers" },
              { big: "One manager", small: "owns your plan, your reviews and your monthly report" },
              { big: "One per category", small: "we never work for your competitor" },
            ].map((s) => (
              <div key={s.big} className="px-6 py-7">
                <p className="cv-display text-xl font-bold text-primary">{s.big}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.small}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ Before / now ============ */}
        <section aria-labelledby="shift-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2 id="shift-heading" className="cv-display text-3xl font-bold sm:text-5xl">
                Search used to be a lookup. <span className="text-accent">Now it is a conversation.</span>
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="cv-before h-full rounded-2xl p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Before</p>
                  <p className="cv-display mt-3 text-2xl font-bold">One search. One click. One outcome.</p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    You picked keywords, ranked for them, and counted the clicks.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="cv-now h-full rounded-2xl p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Now</p>
                  <p className="cv-display mt-3 text-2xl font-bold">One question. Several follow-ups. One answer.</p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    The engine stitches an answer from sources it trusts. If you are not in it, you are not seen, however well you rank.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============ Acronyms ============ */}
        <section aria-labelledby="acro-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2 id="acro-heading" className="cv-display text-3xl font-bold sm:text-5xl">Four letters, one job: be found.</h2>
            </ScrollReveal>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list">
              {ACRONYMS.map((a, i) => (
                <ScrollReveal key={a.k} delay={prefersReducedMotion ? 0 : i * 0.06}>
                  <li className="cv-acro h-full p-6">
                    <strong>{a.k}</strong>
                    <h3 className="mt-2 text-sm font-bold">{a.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Comparison ============ */}
        <section aria-labelledby="compare-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 id="compare-heading" className="cv-display text-3xl font-bold sm:text-5xl">What changed, in one table.</h2>
            </ScrollReveal>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="cv-table w-full min-w-[36rem] text-sm">
                <caption className="sr-only">Traditional search compared with AI-answer search</caption>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Traditional search</th>
                    <th scope="col">AI-answer search</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.factor}>
                      <th scope="row" className="font-bold">{r.factor}</th>
                      <td className="text-muted-foreground">{r.before}</td>
                      <td className="font-medium">{r.now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ Services + deliverables ============ */}
        <section id="services" aria-labelledby="services-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 id="services-heading" className="cv-display text-3xl font-bold sm:text-5xl">What we deliver</h2>
                <ul className="mt-8 space-y-3" role="list">
                  {DELIVERABLES.map((d) => (
                    <li key={d} className="flex gap-3 text-base leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2" role="list">
                {SERVICES.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <ScrollReveal key={service.title} delay={prefersReducedMotion ? 0 : i * 0.05}>
                      <li className="cv-acro h-full p-5">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                        <h3 className="mt-3 text-base font-bold">{service.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                      </li>
                    </ScrollReveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ About ============ */}
        <section id="about" aria-labelledby="about-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <h2 id="about-heading" className="cv-display text-3xl font-bold sm:text-5xl">Who is on the other end</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p><strong className="text-foreground">Your account manager</strong>: a working marketing expert who owns the plan, reviews everything before it ships, and writes your monthly report.</p>
                <p><strong className="text-foreground">The team</strong>: content, search, email and paid specialists. Short client list, one client per product category.</p>
                <p><strong className="text-foreground">The founder</strong>: Christian N. Abad, a thirty-year engineer and the Founder and CEO of CannaBuddy and Purely Found, both run on this playbook.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-5">
              <ol className="cv-acro divide-y divide-border p-6" role="list">
                {MILESTONES.map((m) => (
                  <li key={m.year} className="py-3">
                    <p className="text-xs font-bold text-accent">{m.year}</p>
                    <h3 className="font-bold">{m.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ Portfolio + testimonials ============ */}
        <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-section-alt px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <h2 id="portfolio-heading" className="cv-display text-3xl font-bold sm:text-5xl">Accounts, past and present</h2>
            </ScrollReveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {PORTFOLIO.map((project, i) => (
                <ScrollReveal key={project.client} delay={prefersReducedMotion ? 0 : i * 0.04}>
                  <li className="cv-acro h-full p-5">
                    <h3 className="text-base font-bold">{project.client}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-primary">{project.tags.join(" · ")}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={i} delay={prefersReducedMotion ? 0 : i * 0.08}>
                  <figure className="cv-acro h-full p-6">
                    <blockquote className="text-base leading-relaxed">“{t.quote}”</blockquote>
                    <figcaption className="mt-4 text-sm">
                      <cite className="font-bold not-italic">{t.name}</cite>
                      <span className="text-muted-foreground">, {t.title}, {t.company}</span>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section id="contact" aria-labelledby="contact-heading" className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <h2 id="contact-heading" className="cv-display text-3xl font-bold sm:text-5xl">Let&rsquo;s talk.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Tell us what you sell and what is stuck. Your account manager replies within one business day, and the free audit follows within two.
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="font-bold text-foreground hover:text-primary">{COMPANY.phone}</a>
                {" "}· {COMPANY.address}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-7">
              <div className="cv-acro p-6 sm:p-8">
                <ConversationBodyForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 pt-12 pb-32" role="contentinfo">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="cv-display text-base font-bold">Accessible Computing</p>
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

/* Short form in the hero: email + site. The body form collects the rest. */
function ConversationHeroForm() {
  const { status, handleSubmit } = useContactForm();
  // The contact API keeps name, email and message only, so the URL rides
  // inside the message; otherwise the one thing this form asks for is lost.
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
        <label htmlFor="cv-hero-email" className="block text-sm font-semibold">
          Work email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <input id="cv-hero-email" name="email" type="email" required autoComplete="email" className="cv-hero-input mt-1.5" />
      </div>
      <div>
        <label htmlFor="cv-hero-website" className="block text-sm font-semibold">
          Your website <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <input id="cv-hero-website" name="website" type="url" inputMode="url" required placeholder="https://" autoComplete="url" className="cv-hero-input mt-1.5" />
      </div>
      <input type="hidden" name="name" defaultValue="Hero audit request" />
      <input type="hidden" name="message" defaultValue="Free visibility audit requested from the hero form." />
      <button type="submit" disabled={status === "sending"} className="cv-cta inline-flex h-12 w-full items-center justify-center px-6 text-sm disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Get my free audit"}
      </button>
      {status === "sent" && (
        <p className="cv-lime text-sm font-semibold" role="status">Received. Your account manager will be in touch within one business day.</p>
      )}
      {status === "error" && (
        <p className="cv-magenta text-sm font-semibold" role="alert">That did not go through. Try the form below, or call us.</p>
      )}
    </form>
  );
}

function ConversationBodyForm() {
  const { status, handleSubmit } = useContactForm();
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cv-name" className="block text-sm font-bold">
            Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="cv-name" name="name" type="text" required autoComplete="name" className="cv-input mt-1.5" />
        </div>
        <div>
          <label htmlFor="cv-email" className="block text-sm font-bold">
            Email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id="cv-email" name="email" type="email" required autoComplete="email" className="cv-input mt-1.5" />
        </div>
      </div>
      <div>
        <label htmlFor="cv-website" className="block text-sm font-bold">Your website</label>
        <input id="cv-website" name="website" type="url" inputMode="url" placeholder="https://" autoComplete="url" className="cv-input mt-1.5" />
      </div>
      <div>
        <label htmlFor="cv-message" className="block text-sm font-bold">
          What do you sell, and what is stuck? <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <textarea id="cv-message" name="message" required rows={4} className="cv-input mt-1.5 resize-y" />
      </div>
      <button type="submit" disabled={status === "sending"} className="cv-cta inline-flex h-12 w-full items-center justify-center px-7 text-sm disabled:opacity-50 sm:w-auto">
        {status === "sending" ? "Sending…" : "Start the conversation"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-bold text-primary" role="status">Received. Your account manager will reply within one business day.</p>
      )}
      {status === "error" && (
        <p className="text-sm font-bold text-accent" role="alert">That did not go through. Try again, or call us.</p>
      )}
    </form>
  );
}
