import HeroSearch from "./HeroSearch";

export default function HeroContent() {
  return (
    <div>

      {/* Small Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
        🚀 Game Inspired GitHub Profiles
      </div>

      {/* Heading */}

      <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">

        Your GitHub.

        <br />

        Reimagined as a Legendary

        <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
       Trading Card
        </span>

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
        Transform any public GitHub profile into a collectible developer card
        inspired by Football Ultimate Team, Pokémon, RPGs, Cyberpunk,
        Yu-Gi-Oh and more.
      </p>

      {/* CTA */}

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          className="
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          px-8
          py-4
          text-base
          font-bold
          text-white
          shadow-[0_0_40px_rgba(99,102,241,.45)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_60px_rgba(99,102,241,.75)]
        "
        >
          Generate My Card →
        </button>

      </div>

      {/* Search */}

      <div className="mt-12 max-w-xl">
        <HeroSearch />
      </div>

      <div id="features" className="sr-only" />

    </div>
  );
}