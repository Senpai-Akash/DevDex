import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import ThemePreview from "@/components/sections/ThemePreview";
import type { CardData } from "@/types/card";

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
  <main className="bg-slate-950 text-slate-50">
    <Navbar />

    <Hero />

    <section id="themes" className="scroll-mt-20">
  <ThemePreview cardData={demoCard} />
</section>

    {/* FAQ */}
<section
  id="faq"
  className="mx-auto max-w-full sm:max-w-4xl px-6 py-24 overflow-x-hidden scroll-mt-20"
>
      <h2 className="text-center text-4xl font-black">
        Frequently Asked Questions
      </h2>

      <div className="mt-12 space-y-6 w-full">
        {faqItems.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-lg font-semibold">
              {item.question}
            </h3>

            <p className="mt-3 text-slate-400">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
    <footer className="border-t border-slate-800 py-10">
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">

    <h3 className="text-xl font-bold text-white">
      DevDex
    </h3>

    <p className="text-sm text-slate-400">
      Turn GitHub profiles into collectible developer cards.
    </p>

    <div className="flex gap-6 pt-3 text-sm text-slate-400">

      <a
        href="https://github.com/Senpai-Akash/DevDex"
        target="_blank"
        className="hover:text-white"
      >
        GitHub
      </a>

      <a
        href="#themes"
        className="hover:text-white"
      >
        Themes
      </a>

      <a
        href="#faq"
        className="hover:text-white"
      >
        FAQ
      </a>

    </div>

    <p className="pt-5 text-xs text-slate-600">
      © 2026 DevDex. Built with Next.js & TypeScript.
    </p>

  </div>
</footer>

  </main>
);
}