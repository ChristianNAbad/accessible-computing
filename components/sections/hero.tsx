"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { COMPANY, STATS } from "@/lib/constants";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            30+ Years of Web Excellence
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          id="hero-heading"
          variants={item}
          className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Built Our Name
          <br />
          Making You{" "}
          <span className="gradient-text">Accessible</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {COMPANY.name} — full-service web development, accessibility
          consulting, and AI-powered solutions. From enterprise compliance to
          cutting-edge agentic development.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-border px-8 text-sm font-bold transition-colors hover:border-primary hover:text-primary"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-16"
        >
          <a
            href="#services"
            className="inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to services"
          >
            Explore
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
