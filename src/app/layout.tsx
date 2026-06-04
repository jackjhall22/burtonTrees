import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://burtonindustry.com";
const siteName = "Burton Industry LLC";
const siteDescription =
  "ISA-certified arborist services, tree preservation, precision care, and 24/7 storm response across Central Texas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Burton Industry LLC — Professional Tree Care, Rooted in Integrity",
    template: "%s — Burton Industry LLC",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "arborist",
    "tree care",
    "tree removal",
    "tree trimming",
    "ISA certified arborist",
    "storm response",
    "emergency tree service",
    "Central Texas",
    "Austin tree service",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Burton Industry LLC — Professional Tree Care, Rooted in Integrity",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Burton Industry LLC — Professional Tree Care, Rooted in Integrity",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${hankenGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
