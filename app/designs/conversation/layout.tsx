import type { Metadata } from "next";
import { Unbounded, Hanken_Grotesk } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./conversation.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-unbounded",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "The Conversation — Design Concept",
};

export default function ConversationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-conversation ${unbounded.variable} ${hanken.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
