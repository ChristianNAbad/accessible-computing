import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./terminal.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
});

export const metadata: Metadata = {
  title: "The Terminal — Design Concept",
};

export default function TerminalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-terminal ${plexMono.variable} ${plexSans.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
