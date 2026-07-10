export default function HeroVisual() {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-3xl rounded-[2rem] border border-white/40 bg-gradient-to-r from-pink-100 via-slate-100 to-teal-200 p-1 shadow-xl shadow-slate-200/60">
        <div className="rounded-[1.75rem] bg-white p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[1.4rem] bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_25%)]">
            <div className="flex h-full w-full items-center justify-center text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-200 opacity-90">
              Developer card preview area
            </div>
          </div>
          <div className="mt-6 rounded-3xl bg-slate-900/5 px-5 py-4 text-sm text-slate-600">
            Placeholder section for the future developer card illustration. It will
            show live preview details when a username is entered.
          </div>
        </div>
      </div>
    </div>
  );
}
