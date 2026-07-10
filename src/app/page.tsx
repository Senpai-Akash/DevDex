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
    <main className="bg-white text-slate-950">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-10 shadow-lg shadow-slate-200/60">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">
                Your code deserves better than a profile page
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Generate beautiful developer cards in seconds.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                DevDex transforms your GitHub activity into collectible, themed cards
                designed for sharing and showcasing your unique developer identity.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.15)]">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-200 via-slate-100 to-cyan-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">
              Turn Your GitHub Into Legendary Cards
            </p>
            <h3 className="mt-4 text-3xl font-bold text-slate-950">
              One profile, five legendary styles.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Pick a theme and create a custom developer card that highlights your
              public GitHub work and unique style.
            </p>
            <ul className="mt-8 space-y-3 text-slate-700">
              {themeList.map((theme) => (
                <li key={theme} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Let&apos;s Show Off!
            </button>
          </div>

          <div className="grid gap-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-700 to-violet-600 p-8 text-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]">
              <div className="aspect-[4/3] rounded-[1.5rem] bg-slate-950/10" />
            </div>
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">
                Explore your dev identity
              </p>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">
                Show off how your GitHub looks as a collectible card.
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Your GitHub becomes a shareable, polished card in a style inspired
                by cards, games, and developer lore.
              </p>
              <button className="mt-8 inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
                Check Your Card
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-600 text-white">
              ★
            </div>
            <h4 className="mt-6 text-xl font-semibold text-slate-950">Collect</h4>
            <p className="mt-3 text-slate-600">
              Unlock multiple developer card styles from a single GitHub profile.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-600 text-white">
              ⚡
            </div>
            <h4 className="mt-6 text-xl font-semibold text-slate-950">Explore</h4>
            <p className="mt-3 text-slate-600">
              See your repositories, languages, and achievements reimagined as
              interactive game-inspired designs.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-600 text-white">
              ✨
            </div>
            <h4 className="mt-6 text-xl font-semibold text-slate-950">Share</h4>
            <p className="mt-3 text-slate-600">
              Create a developer identity that feels polished, playable, and worth
              showing off.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-950">{item.question}</p>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
