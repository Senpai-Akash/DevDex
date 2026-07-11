export default function HeroVisual() {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-3xl rounded-[2rem] border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-1 shadow-2xl shadow-indigo-500/20">
        <div className="rounded-[1.75rem] border border-slate-800/50 bg-slate-900/80 backdrop-blur-sm p-8 shadow-[0_30px_80px_-30px_rgba(99,102,241,0.4)]">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[1.4rem] bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.15),_transparent_25%)]">
            <div className="flex h-full w-full items-center justify-center text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-400 opacity-90">
              Developer card preview area
            </div>
          </div>
          <div className="mt-6 rounded-3xl bg-slate-800/60 border border-indigo-500/20 px-5 py-4 text-sm text-slate-300">
            Placeholder section for the future developer card illustration. It will
            show live preview details when a username is entered.
          </div>
        </div>
      </div>
    </div>
  );
}
