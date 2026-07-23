import { RarityBadge } from "./RarityBadge";

interface FootballHeaderProps {
  rating: number;
  rarity: string;
}

export function FootballHeader({
  rating,
  rarity,
}: FootballHeaderProps) {
  return (
    <header className="relative flex items-start justify-between">

      {/* LEFT SIDE */}
      <div className="flex flex-col">

        <h1 className="text-[4.6rem] leading-[0.8] font-black tracking-[-0.06em] text-[#FFD15A] drop-shadow-[0_0_20px_rgba(255,209,90,0.55)]">
          {rating}
        </h1>

        <span className="-mt-1 text-[13px] font-black uppercase tracking-[0.45em] text-white/90">
          DEV
        </span>

        {/* Tech Icons */}

        <div className="mt-4 flex gap-2">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-md">
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="h-5 w-5"
            />
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-md">
            <img
              src="/icons/typescript.svg"
              alt="TypeScript"
              className="h-5 w-5"
            />
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex flex-col items-end gap-4">

        <RarityBadge rarity={rarity} />

        <div className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-400/15 to-yellow-300/10 px-4 py-1.5 shadow-[0_0_18px_rgba(251,191,36,0.18)]">

          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-amber-100">
            DEVDEX
          </span>

        </div>

      </div>

      {/* Decorative Divider */}

      <div className="absolute left-0 right-0 bottom-[-14px] h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

    </header>
  );
}