"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PORTFOLIO } from "@/lib/constants";

export function Portfolio() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-section-alt px-6 py-24 lg:py-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="section-number" aria-hidden="true">
        03
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2
              id="portfolio-heading"
              className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            >
              Client <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Enterprise to startup. Government to ecommerce. Every project
              built with accessibility at its core.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((item, i) => (
            <ScrollReveal
              key={item.client}
              delay={prefersReducedMotion ? 0 : i * 0.05}
            >
              <motion.div
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { y: -2, transition: { duration: 0.2 } }
                }
              >
                <h3 className="text-lg font-bold tracking-tight">
                  {item.client}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
