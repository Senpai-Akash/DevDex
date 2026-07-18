import { RarityBadge } from './RarityBadge';

interface FootballHeaderProps {
  rating: number;
  rarity: string;
}

export function FootballHeader({ rating, rarity }: FootballHeaderProps) {
  return (
    <header className="mb-1 flex items-start justify-between gap-3">
      <div className="leading-none">
        <p className="text-[2.6rem] font-black uppercase tracking-[-0.03em] text-amber-300 sm:text-[3.25rem]">
          {rating}
        </p>
        <p className="-mt-1 text-[0.65rem] uppercase tracking-[0.42em] text-slate-400">DEV</p>
      </div>
      <RarityBadge rarity={rarity} />
    </header>
  );
}
