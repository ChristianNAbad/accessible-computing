import type { Metadata } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./editorial.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "The Editorial — Design Concept",
};

export default function EditorialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-editorial ${fraunces.variable} ${newsreader.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
