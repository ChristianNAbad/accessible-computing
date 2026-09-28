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
    default: `${COMPANY.name} | Marketing for Brands That Sell Online`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "A small marketing agency for brands that sell online: content, search, email, paid and AI-search visibility, with a dedicated account manager on every account. Built to WCAG 2.2 AAA.",
  keywords: [
    "marketing agency for ecommerce brands",
    "outsourced marketing department",
    "ecommerce SEO agency",
    "Klaviyo email marketing agency",
    "Google Ads management",
    "AI search visibility",
    "generative engine optimization",
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
    title: `${COMPANY.name} | Marketing for Brands That Sell Online`,
    description:
      "A small marketing agency for brands that sell online, with a dedicated account manager on every account.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Marketing for Brands That Sell Online`,
    description:
      "A small marketing agency for brands that sell online, with a dedicated account manager on every account.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* Organization + WebSite schema. Lived on the root page until the root
   became a redirect; the layout renders it on every route instead. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
      foundingDate: String(COMPANY.founded),
      founder: {
        "@type": "Person",
        name: "Christian N. Abad",
        url: COMPANY.linkedin,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Matthews",
        addressRegion: "NC",
        postalCode: "28105",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      name: COMPANY.name,
      url: COMPANY.url,
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
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
