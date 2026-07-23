interface RarityBadgeProps {
  rarity: string;
}

export function RarityBadge({ rarity }: RarityBadgeProps) {
  const colors: Record<
    string,
    {
      border: string;
      bg: string;
      glow: string;
      text: string;
    }
  > = {
    Common: {
      border: "border-slate-400/40",
      bg: "from-slate-700 to-slate-900",
      glow: "shadow-slate-400/30",
      text: "text-slate-200",
    },

    Rare: {
      border: "border-sky-300/40",
      bg: "from-sky-500 to-sky-900",
      glow: "shadow-sky-400/40",
      text: "text-sky-100",
    },

    Epic: {
      border: "border-fuchsia-400/50",
      bg: "from-fuchsia-500 to-purple-900",
      glow: "shadow-fuchsia-500/40",
      text: "text-fuchsia-100",
    },

    Legendary: {
      border: "border-amber-300/60",
      bg: "from-yellow-300 via-amber-500 to-yellow-800",
      glow: "shadow-amber-400/50",
      text: "text-white",
    },

    Mythic: {
      border: "border-red-400/60",
      bg: "from-red-500 via-orange-500 to-yellow-500",
      glow: "shadow-red-500/50",
      text: "text-white",
    },
  };

  const style =
    colors[rarity] ??
    {
      border: "border-amber-300/50",
      bg: "from-yellow-300 to-amber-700",
      glow: "shadow-amber-400/40",
      text: "text-white",
    };

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-xl
        border
        ${style.border}
        bg-gradient-to-br
        ${style.bg}
        px-5
        py-2
        shadow-xl
        ${style.glow}
      `}
    >
      {/* Shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent" />

      {/* Metallic highlight */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/50" />

      <div
        className={`
          relative
          text-[11px]
          font-black
          uppercase
          tracking-[0.32em]
          ${style.text}
        `}
      >
        ★ {rarity}
      </div>
    </div>
  );
}