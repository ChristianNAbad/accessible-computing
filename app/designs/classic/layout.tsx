import type { Metadata } from "next";
import { VariantSwitcher } from "@/components/variants/variant-switcher";

export const metadata: Metadata = {
  title: "The Classic — Design Concept",
};

export default function ClassicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="v-classic min-h-screen bg-background text-foreground">
      {children}
      <VariantSwitcher />
    </div>
  );
}
