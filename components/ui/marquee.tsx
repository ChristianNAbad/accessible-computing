"use client";

export function Marquee() {
  const items = [
    "ACCESSIBLE",
    "INCLUSIVE",
    "PERFORMANT",
    "COMPLIANT",
    "RESPONSIVE",
    "SEMANTIC",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-border bg-muted py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground"
          >
            {item}
            <span className="mx-8 text-primary">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
