import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Footer from "@/components/layout/Footer";
import ThemePreview from "@/components/sections/ThemePreview";
import Link from "next/link";
import type { Metadata } from "next";
import type { CardData } from "@/types/card";

export const metadata: Metadata = {
  title: "Home",
  description: "Generate your professional developer card from your GitHub profile.",
};

const demoCard: CardData = {
  username: "torvalds",
displayName: "Linus Torvalds",
avatar: "https://avatars.githubusercontent.com/u/1024025?v=4",
role: "Creator of Linux",
  rating: 92,
  rarity: "Legendary",
  technology: "TypeScript",
  trait: "Problem Solver",
  edition: "Edition 001",
  cardNumber: "DEV-001",
  branding: "DEVDEX",

  stats: {
    overall: 92,
    attack: 89,
    defense: 90,
    intelligence: 95,
    speed: 87,
    versatility: 91,
    teamwork: 88,
  },

  visuals: {
    rarity: "Legendary",
    borderStyle: "standard",
    frameStyle: "standard",
    badge: "none",
  },

  achievements: [],
};


const faqItems = [
  {
    question: "Do I need a sign-in?",
    answer:
      "No. Just enter a public GitHub username to generate a card.",
  },
  {
    question: "Can I generate cards for anyone?",
    answer:
      "Yes, as long as their profile is public and accessible.",
  },
  {
    question: "How are the ratings calculated?",
    answer:
      "From publicly available GitHub activity and repository metrics.",
  },
];

export default function Page() {
  return (
  <>
    <Navbar />

    <main className="bg-slate-950 text-slate-50">
      <Hero />

      <section id="themes" className="scroll-mt-20">
        <ThemePreview cardData={demoCard} />
      </section>

      <section
        id="faq"
        className="mx-auto max-w-full sm:max-w-4xl px-6 py-24 overflow-x-hidden scroll-mt-20"
        aria-labelledby="faq-heading"
      >
        {/* FAQ */}
      </section>
    </main>

    <Footer />
  </>
);
}