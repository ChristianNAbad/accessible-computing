import type { Metadata } from "next";
import { Barlow_Condensed, Albert_Sans } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./storefront.css";

/* Barlow Condensed rather than Big Shoulders: Next 16.2's font tooling has
   no fallback metrics for the merged Big Shoulders family and its Google
   CSS intermittently returns file URLs the loader cannot parse, which
   broke a CI build. */
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-storefront-display",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "The Storefront — Design Concept",
};

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-storefront ${barlowCondensed.variable} ${albertSans.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
