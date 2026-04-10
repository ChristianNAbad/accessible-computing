import Link from "next/link";
import { Accessibility, ExternalLink } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Accessibility
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              <span className="text-lg font-black tracking-tight">
                <span className="gradient-text">{COMPANY.shortName}</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Full-service web development and accessibility consulting.
              Making the web usable for everyone since {COMPANY.founded}.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Accessibility className="h-3.5 w-3.5" aria-hidden="true" />
              WCAG 2.2 AAA Compliant
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Connect
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
              <p className="text-sm text-muted-foreground">
                <a
                  href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-primary"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                LinkedIn
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>
            &copy; {COMPANY.founded}&ndash;{currentYear} {COMPANY.name} All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
