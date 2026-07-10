"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const VARIANTS = [
  { href: "/designs/editorial", label: "Editorial" },
  { href: "/designs/brutalist", label: "Brutalist" },
  { href: "/designs/terminal", label: "Terminal" },
] as const;

export function VariantSwitcher() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Design concept switcher"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border-2 border-foreground bg-background p-1 shadow-lg">
        <Link
          href="/designs"
          className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Index
        </Link>
        {VARIANTS.map((variant) => {
          const isCurrent = pathname === variant.href;
          return (
            <Link
              key={variant.href}
              href={variant.href}
              aria-current={isCurrent ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors",
                isCurrent
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {variant.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
