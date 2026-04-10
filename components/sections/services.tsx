"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-section-alt px-6 py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="section-number" aria-hidden="true">
        01
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2
              id="services-heading"
              className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            >
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Three decades of expertise distilled into services that make a
              difference.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={prefersReducedMotion ? 0 : i * 0.1}>
              <motion.div
                className="group relative rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { y: -4, transition: { duration: 0.2 } }
                }
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
