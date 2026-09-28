"use client";

import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MILESTONES, COMPANY } from "@/lib/constants";

export function AboutStory() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="section-number" aria-hidden="true">
        02
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Narrative */}
          <ScrollReveal direction="left">
            <div>
              <h2
                id="about-heading"
                className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
              >
                The <span className="gradient-text">Story</span>
              </h2>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Every Accessible Computing account has a dedicated account
                  manager: a working marketing expert who owns the
                  plan, reviews every deliverable before it ships, and writes
                  the monthly report in plain language.
                </p>
                <p>
                  Behind that manager is a small team covering content, search,
                  email and paid. We take one client per product category, so
                  nobody on your account is also working for your competitor.
                </p>
                <p>
                  The founder, Christian N. Abad, started the company in 2005
                  on a simple conviction: the web should work for everyone. His
                  degree from Appalachian State pairs Psychology with Computer
                  Science, and at Bank of America he managed accessibility
                  compliance for over 5,000 customer-facing pages as VP,
                  establishing enterprise-wide WCAG and Section 508 standards.
                </p>
                <p>
                  He brings that same pioneering spirit to{" "}
                  <strong>agentic AI development</strong>. Using Claude Code and
                  autonomous coding workflows, the team ships what once took
                  entire departments, the same engine behind{" "}
                  <strong>CannaBuddy.com</strong> and Purely Found. Christian
                  is Founder and CEO of CannaBuddy and Purely Found, and both
                  brands run on the playbook your account manager uses.
                </p>
                <p>
                  Three decades. Countless technologies. One constant: making
                  technology accessible, performant, and built to last.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={COMPANY.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  Full Resume
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div
                className="absolute left-4 top-0 bottom-0 w-px bg-border"
                aria-hidden="true"
              />
              <ol className="space-y-8" role="list">
                {MILESTONES.map((milestone, i) => (
                  <li key={i} className="relative pl-12">
                    <div
                      className="absolute left-2 top-1.5 h-5 w-5 rounded-full border-2 border-primary bg-background"
                      aria-hidden="true"
                    />
                    <div className="text-xs font-bold uppercase tracking-widest text-primary">
                      {milestone.year}
                    </div>
                    <h3 className="mt-1 text-base font-bold">{milestone.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
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
  );
}
