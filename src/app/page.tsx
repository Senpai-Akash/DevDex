import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import ThemePreview from "@/components/sections/ThemePreview";
import type { CardData } from "@/types/card";

const demoCard: CardData = {
  username: "Senpai-Akash",
  displayName: "Akash",
  avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
  role: "Full Stack Developer",
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

const themeList = [
  "Football Ultimate",
  "Monster Trainer",
  "Fantasy RPG",
  "Cyber Profile",
  "Legendary Trading Card",
];

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
    <main className="bg-slate-950 text-slate-50">
      <Navbar />

      <Hero />

      <ThemePreview cardData={demoCard} />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Your remaining landing page sections */}
      </section>
    </main>
  );
}