import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/SEO/StructuredData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  metadataBase: new URL("https://devdex.app"),
  title: {
    template: "%s | DevDex",
    default: "DevDex - Turn GitHub Profiles into Collectible Cards",
  },
  description: "DevDex turns GitHub profiles into collectible developer cards. Visualize your coding journey through gamified stats and rarity tiers.",
  keywords: ["GitHub", "Developer Cards", "Portfolio", "Coding Stats", "Gamification", "DevDex", "Software Engineering", "Open Source"],
  authors: [{ name: "Senpai-Akash", url: "https://github.com/Senpai-Akash" }],
  creator: "Senpai-Akash",
  publisher: "DevDex",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevDex - Turn GitHub Profiles into Collectible Cards",
    description: "Visualize your coding journey through gamified stats and rarity tiers.",
    url: "https://devdex.app",
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
    description: "Visualize your coding journey through gamified stats and rarity tiers.",
    creator: "@SenpaiAkash",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
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
    <body className="min-h-full flex flex-col">
      <StructuredData />
      <main className="flex-grow">
        {children}
      </main>
    </body>
    </html>
  );
}
