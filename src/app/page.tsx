import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";

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
    answer: "No. Just enter a public GitHub username to generate a card.",
  },
  {
    question: "Can I generate cards for anyone?",
    answer: "Yes, as long as their profile is public and accessible.",
  },
  {
    question: "How are the ratings calculated?",
    answer: "From publicly available GitHub activity and repository metrics.",
  },
];

export default function Page() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-[2rem] border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-10 shadow-2xl shadow-indigo-500/10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-400">
                Your code deserves better than a profile page
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-50 sm:text-4xl">
                Generate beautiful developer cards in seconds.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                DevDex transforms your GitHub activity into collectible, themed cards
                designed for sharing and showcasing your unique developer identity.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-purple-500/20 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm p-6 shadow-[0_30px_60px_-30px_rgba(99,102,241,0.3)]">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-500/20 via-transparent to-cyan-500/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 shadow-lg shadow-indigo-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
              Turn Your GitHub Into Legendary Cards
            </p>
            <h3 className="mt-4 text-3xl font-bold text-slate-50">
              One profile, five legendary styles.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Pick a theme and create a custom developer card that highlights your
              public GitHub work and unique style.
            </p>
            <ul className="mt-8 space-y-3 text-slate-200">
              {themeList.map((theme) => (
                <li key={theme} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30">
              Let&apos;s Show Off!
            </button>
          </div>

          <div className="grid gap-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/20 border border-purple-500/30 p-8 text-white shadow-[0_30px_60px_-30px_rgba(99,102,241,0.4)]">
              <div className="aspect-[4/3] rounded-[1.5rem] bg-slate-950/30" />
            </div>
            <div className="rounded-[2rem] border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 shadow-lg shadow-indigo-500/10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Explore your dev identity
              </p>
              <h3 className="mt-4 text-2xl font-bold text-slate-50">
                Show off how your GitHub looks as a collectible card.
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Your GitHub becomes a shareable, polished card in a style inspired
                by cards, games, and developer lore.
              </p>
              <button className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-500/30">
                Check Your Card
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 text-center shadow-lg shadow-indigo-500/10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/50">
              ★
            </div>
            <h4 className="mt-6 text-xl font-semibold text-slate-50">Collect</h4>
            <p className="mt-3 text-slate-400">
              Unlock multiple developer card styles from a single GitHub profile.
            </p>
          </div>
          <div className="rounded-[2rem] border border-cyan-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 text-center shadow-lg shadow-cyan-500/10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50">
              ⚡
            </div>
            <h4 className="mt-6 text-xl font-semibold text-slate-50">Explore</h4>
            <p className="mt-3 text-slate-400">
              See your repositories, languages, and achievements reimagined as
              interactive game-inspired designs.
            </p>
          </div>
          <div className="rounded-[2rem] border border-emerald-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 text-center shadow-lg shadow-emerald-500/10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/50">
              ✨
            </div>
            <h4 className="mt-6 text-xl font-semibold text-slate-50">Share</h4>
            <p className="mt-3 text-slate-400">
              Create a developer identity that feels polished, playable, and worth
              showing off.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-[2rem] border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-10 shadow-2xl shadow-indigo-500/10">
          <h2 className="text-3xl font-bold text-slate-50">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-indigo-500/20 bg-slate-800/50 p-6 shadow-lg shadow-indigo-500/5">
                <p className="font-semibold text-slate-50">{item.question}</p>
                <p className="mt-3 text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
