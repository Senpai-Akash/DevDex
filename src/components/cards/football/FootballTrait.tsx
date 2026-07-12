interface FootballTraitProps {
  trait: string;
}

export function FootballTrait({ trait }: FootballTraitProps) {
  return (
    <section className="rounded-[2rem] border border-amber-400/10 bg-slate-950/80 p-4 backdrop-blur-xl">
      <p className="text-[0.63rem] uppercase tracking-[0.35em] text-slate-500">
        Trait
      </p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
        {trait}
      </p>
    </section>
  );
}
