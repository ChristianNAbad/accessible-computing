import type { Metadata } from "next";
import { Schibsted_Grotesk, Figtree } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./answer.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-schibsted",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "The Answer — Design Concept",
};

export default function AnswerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-answer ${schibsted.variable} ${figtree.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
