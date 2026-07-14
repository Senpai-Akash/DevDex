export function CardBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_18%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(15,23,42,0.78)_55%,rgba(15,23,42,0.88))]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_16px),repeating-linear-gradient(0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_16px)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_45%,rgba(15,23,42,0.3)_85%)]" />
      <div className="absolute inset-x-8 top-0 h-40 rounded-full bg-gradient-to-b from-amber-300/10 to-transparent blur-3xl opacity-90" />
      <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(circle,_rgba(245,158,11,0.14),transparent_36%)] opacity-80" />
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 600 800" preserveAspectRatio="none">
        <path d="M60 120h80m-40 0v120h120m-40-40h120" stroke="rgba(148,163,184,0.22)" strokeWidth="1.4" fill="none" />
        <path d="M260 60h140m0 0v80m0 0h80" stroke="rgba(248,113,113,0.18)" strokeWidth="1.2" fill="none" />
        <path d="M90 520h180m0 0v80m-60-40h80" stroke="rgba(56,189,248,0.18)" strokeWidth="1.2" fill="none" />
        <circle cx="80" cy="280" r="3" fill="rgba(148,163,184,0.22)" />
        <circle cx="520" cy="220" r="2.5" fill="rgba(251,191,36,0.24)" />
        <circle cx="380" cy="620" r="2.5" fill="rgba(56,189,248,0.18)" />
      </svg>
      <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hexPattern" width="60" height="52" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="600" fill="url(#hexPattern)" />
      </svg>
      <div className="absolute left-6 top-24 text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-slate-300/40">
        {'<> '}
      </div>
      <div className="absolute right-8 top-44 text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-slate-300/35">
        {'{} '}
      </div>
      <div className="absolute left-16 bottom-24 text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-slate-300/35">
        {'</>'}
      </div>
      <div className="absolute right-10 bottom-28 text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-slate-300/35">
        {'=>'}
      </div>
      <div className="absolute left-12 top-16 h-1 w-1 rounded-full bg-amber-300/30 shadow-[0_0_12px_rgba(251,191,36,0.3)]" />
      <div className="absolute right-16 top-32 h-1 w-1 rounded-full bg-sky-400/30 shadow-[0_0_10px_rgba(56,189,248,0.3)]" />
      <div className="absolute left-36 bottom-20 h-1 w-1 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.18)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_55%,rgba(15,23,42,0.72)_100%)] opacity-60" />
    </div>
  );
}
