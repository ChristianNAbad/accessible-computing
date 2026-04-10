"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      const id = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(id);
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-black tracking-tight text-primary md:text-5xl lg:text-6xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
