interface FootballTechnologyProps {
  technology: string;
}

export function FootballTechnology({ technology }: FootballTechnologyProps) {
  return (
    <section className="rounded-[2rem] border border-amber-400/10 bg-slate-950/80 p-3 backdrop-blur-xl">
      <p className="text-[0.63rem] uppercase tracking-[0.35em] text-slate-500">
        Primary technology
      </p>
      <div className="mt-3 rounded-full border border-amber-300/10 bg-slate-900/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
        {technology}
      </div>
    </section>
  );
}
