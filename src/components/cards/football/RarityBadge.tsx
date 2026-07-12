interface RarityBadgeProps {
  rarity: string;
}

export function RarityBadge({ rarity }: RarityBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-300/15 bg-black/30 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-amber-200 shadow-sm shadow-amber-500/10">
      {rarity}
    </span>
  );
}
