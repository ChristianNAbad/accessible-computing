"use client";

import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MILESTONES, COMPANY, MESSAGING } from "@/lib/constants";

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
                <p>{MESSAGING.manager}</p>
                <p>{MESSAGING.team}</p>
                <p>{MESSAGING.founder}</p>
                <p>
                  The team ships with <strong>agentic AI development</strong>{" "}
                  in Claude Code. See it live at{" "}
                  <a
                    href="https://cannabuddy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                  >
                    CannaBuddy.com
                  </a>
                  .
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
