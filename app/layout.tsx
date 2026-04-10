import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.name} | Web Accessibility & Development`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "Full-service web development, accessibility consulting, and AI-powered solutions. WCAG 2.2 AAA compliant. 30+ years of expertise making the web accessible for everyone.",
  keywords: [
    "web accessibility",
    "WCAG 2.2",
    "Section 508",
    "web development",
    "accessibility consulting",
    "ADA compliance",
    "agentic AI",
    "Charlotte NC",
    "Matthews NC",
  ],
  authors: [{ name: "Christian N. Abad" }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Web Accessibility & Development`,
    description:
      "Full-service web development and accessibility consulting. 30+ years making the web usable for everyone.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Web Accessibility & Development`,
    description:
      "Full-service web development and accessibility consulting. 30+ years making the web usable for everyone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
