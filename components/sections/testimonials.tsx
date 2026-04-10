"use client";

import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2
              id="testimonials-heading"
              className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            >
              Client <span className="gradient-text">Voices</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <blockquote className="rounded-2xl border border-border bg-card p-8">
                <Quote
                  className="mb-4 h-8 w-8 text-primary/20"
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                    aria-hidden="true"
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="text-sm font-bold not-italic">
                      {testimonial.name}
                    </cite>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
