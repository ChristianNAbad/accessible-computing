import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Concepts",
};

const CONCEPTS = [
  {
    href: "/designs/editorial",
    name: "The Editorial",
    thesis: "Accessibility as craft",
    description:
      "Ink on paper at AAA contrast. A characterful display serif, magazine rules and ledgers, focus states celebrated as a design feature. Reads like thirty years of craftsmanship.",
    swatches: ["#f7f1e5", "#1f1a12", "#7a2116"],
  },
  {
    href: "/designs/brutalist",
    name: "The Brutalist",
    thesis: "The web as it's built",
    description:
      "Raw black borders, hard offset shadows, chunky uppercase type, one loud yellow. Structure made visible — nothing hidden, nothing decorative that isn't doing work.",
    swatches: ["#f1efe7", "#101010", "#ffd400"],
  },
  {
    href: "/designs/terminal",
    name: "The Terminal",
    thesis: "1995 → agentic era",
    description:
      "Phosphor green on near-black, monospace-forward, a timeline set like a git log. Thirty years from Solaris workstations to autonomous agents — the heritage aesthetic, at AAA.",
    swatches: ["#0b100d", "#d6e5d6", "#47e584"],
  },
] as const;

export default function DesignsIndex() {
  return (
    <main id="main-content" className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Internal — not indexed
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Three design concepts
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Same content, same WCAG 2.2 AAA rigor — three very different points
          of view. Toggle dark mode on each; every palette is tuned for both
          themes.
        </p>

        <div className="mt-12 space-y-6">
          {CONCEPTS.map((concept) => (
            <Link
              key={concept.href}
              href={concept.href}
              className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    {concept.thesis}
                  </p>
                  <h2 className="mt-1 text-2xl font-black tracking-tight">
                    {concept.name}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    {concept.swatches.map((color) => (
                      <span
                        key={color}
                        className="h-6 w-6 rounded-full border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {concept.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
