import { RarityBadge } from './RarityBadge';

interface FootballHeaderProps {
  rating: number;
  rarity: string;
}

export function FootballHeader({ rating, rarity }: FootballHeaderProps) {
  return (
    <header className="mb-4 flex items-start justify-between gap-4">
      <div className="space-y-1">
        <p className="text-[3rem] font-black uppercase tracking-[-0.03em] text-amber-300 sm:text-[4rem]">
          {rating}
        </p>
        <p className="text-xs uppercase tracking-[0.45em] text-slate-400">DEV</p>
      </div>
      <RarityBadge rarity={rarity} />
    </header>
  );
}
