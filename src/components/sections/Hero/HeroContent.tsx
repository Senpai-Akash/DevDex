import HeroSearch from "./HeroSearch";

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-50 md:text-6xl">
        Turn GitHub profiles into legendary developer cards
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
        Create beautiful, theme-driven developer cards from any public GitHub
        username. Share your identity with a collectible game-inspired profile.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-indigo-400">
          Wanna create one?
        </button>
        <button className="rounded-full border border-indigo-500/40 bg-slate-900/50 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800/50 hover:border-indigo-500/60">
          Click here
        </button>
      </div>

      <div className="mt-10 max-w-xl">
        <HeroSearch />
      </div>

      <div id="features" className="sr-only" />
    </div>
  );
}
