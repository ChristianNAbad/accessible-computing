import type { Metadata } from "next";
import { Big_Shoulders, Albert_Sans } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./storefront.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-big-shoulders",
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
      className={`v-storefront ${bigShoulders.variable} ${albertSans.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
