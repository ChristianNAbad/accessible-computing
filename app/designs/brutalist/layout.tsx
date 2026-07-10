import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { VariantSwitcher } from "@/components/variants/variant-switcher";
import "./brutalist.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "The Brutalist — Design Concept",
};

export default function BrutalistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v-brutalist ${archivo.variable} ${archivoBlack.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
      <VariantSwitcher />
    </div>
  );
}
