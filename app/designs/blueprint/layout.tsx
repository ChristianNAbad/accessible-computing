import type { Metadata } from "next";
import { Familjen_Grotesk, Chivo_Mono } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./blueprint.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-chivo-mono",
});

export const metadata: Metadata = {
  title: "The Blueprint — Design Concept",
};

export default function BlueprintLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-blueprint ${familjen.variable} ${chivoMono.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
