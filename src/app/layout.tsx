import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/SEO/StructuredData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://devdex.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | DevDex",
    default: "DevDex - Turn GitHub Profiles into Collectible Cards",
  },
  description:
    "DevDex turns GitHub profiles into collectible developer cards. Visualize your coding journey through gamified stats and rarity tiers.",
  keywords: [
    "GitHub",
    "Developer Cards",
    "Portfolio",
    "Coding Stats",
    "Gamification",
    "DevDex",
    "Software Engineering",
    "Open Source",
  ],
  authors: [{ name: "Senpai-Akash", url: "https://github.com/Senpai-Akash" }],
  creator: "Senpai-Akash",
  publisher: "DevDex",
  applicationName: "DevDex",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevDex - Turn GitHub Profiles into Collectible Cards",
    description:
      "Visualize your coding journey through gamified stats and rarity tiers.",
    url: SITE_URL,
    siteName: "DevDex",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevDex - GitHub Profiles to Cards",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDex - Turn GitHub Profiles into Collectible Cards",
    description:
      "Visualize your coding journey through gamified stats and rarity tiers.",
    creator: "@SenpaiAkash",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}