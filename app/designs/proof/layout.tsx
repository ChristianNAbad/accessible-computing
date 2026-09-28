import type { Metadata } from "next";
import { Rubik, Mulish } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./proof.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-rubik",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "The Proof — Design Concept",
};

export default function ProofLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-proof ${rubik.variable} ${mulish.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
