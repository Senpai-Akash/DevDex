import HeroSearch from "./HeroSearch";

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 md:text-6xl">
        Turn GitHub profiles into legendary developer cards
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
        Create beautiful, theme-driven developer cards from any public GitHub
        username. Share your identity with a collectible game-inspired profile.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-200/40 transition hover:bg-slate-800">
          Wanna create one?
        </button>
        <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
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
