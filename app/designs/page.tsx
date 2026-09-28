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
  {
    href: "/designs/dashboard",
    name: "The Dashboard",
    thesis: "Marketing that reports in numbers",
    description:
      "Dark-native navy with a coral signal and mint confirmations. A sample client dashboard sits in the hero, services land in a bento grid, and every figure is tabular. The agency that shows its numbers.",
    swatches: ["#0b1020", "#e8ecf7", "#ff8a6b"],
  },
  {
    href: "/designs/storefront",
    name: "The Storefront",
    thesis: "Built for brands that sell",
    description:
      "Peach cream, cobalt ink, tangerine stickers and pistachio price tags. Condensed poster caps, product-card services with SKUs, and a conveyor strip of promises. Ecommerce energy, AAA contrast.",
    swatches: ["#fff3e6", "#1f3fbf", "#ff8a3d"],
  },
  {
    href: "/designs/blueprint",
    name: "The Blueprint",
    thesis: "Marketing, engineered",
    description:
      "Drafting-paper grid, dimension lines, numbered plates and mono annotations. A schematic of the growth system in the hero, a title block in the footer, safety-orange calls to action. Cyanotype in dark mode.",
    swatches: ["#eef3fb", "#16449e", "#f5953a"],
  },
  {
    href: "/designs/classic",
    name: "The Classic",
    thesis: "The site as it stands",
    description:
      "The current default: Geist, the blue-to-red gradient, the stock navbar and footer, and the same sections the live homepage renders. Here so it can be judged against the other six on equal terms.",
    swatches: ["#ffffff", "#003d80", "#c41400"],
  },
  {
    href: "/designs/answer",
    name: "The Answer",
    thesis: "Be the answer your customers get",
    description:
      "Built from the structure of the page that ranks #2 for generative engine optimization services: a page shaped like an AI answer. Definition first, what you get, a five-step process, a comparison table, FAQ. Dark hero with a glow field, light body.",
    swatches: ["#0f1a1c", "#084646", "#ffb454"],
  },
  {
    href: "/designs/proof",
    name: "The Proof",
    thesis: "Proof before pitch",
    description:
      "Built from the structure of the DR-80 agency homepage that ranks for AI SEO and Charlotte SEO: trust chips under the hero, a review row, testimonials before services, three named tools, plain-terms promises. Warm white, leaf green, clay orange.",
    swatches: ["#ffffff", "#155126", "#8a3700"],
  },
  {
    href: "/designs/conversation",
    name: "The Conversation",
    thesis: "Search is a conversation now",
    description:
      "Built from the structure of the page that ranks #3 for AI SEO agency: the lead form lives inside a black hero, then a stat strip, a before-and-now contrast, an acronym grid and a comparison table. Black, lime, magenta.",
    swatches: ["#0a0a0a", "#c6ff3d", "#ff7ad9"],
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
          Ten design concepts
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Same content, same WCAG 2.2 AAA rigor — ten points of view,
          including the site as it stands today and three built from the
          structure of the pages that currently rank for our keywords. Toggle dark mode on each; every palette is tuned for both
          themes. The three newest lead with the free-audit conversion.
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
