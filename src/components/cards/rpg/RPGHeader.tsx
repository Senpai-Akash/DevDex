import React from 'react';
import { CardData } from '../../../types/card';

interface RPGHeaderProps {
  data: CardData;
}

const getRankColor = (rank: string) => {
  if (rank === 'SSS') return 'from-yellow-100 via-yellow-300 to-amber-600';
  if (rank === 'SS') return 'from-amber-100 via-yellow-400 to-orange-600';
  if (rank === 'S') return 'from-red-200 via-red-500 to-red-700';
  if (rank === 'A') return 'from-emerald-200 via-emerald-500 to-green-700';
  if (rank === 'B') return 'from-sky-200 via-blue-500 to-blue-700';
  return 'from-stone-200 via-stone-400 to-stone-600';
};

const getFantasyTitle = (developerClass: string) => {
  const role = developerClass.toLowerCase();
  if (role.includes('backend')) return 'Rune Architect';
  if (role.includes('frontend')) return 'Crystal Weaver';
  if (role.includes('full')) return 'Grand Spellsmith';
  if (role.includes('mobile')) return 'Storm Rider';
  if (role.includes('ai')) return 'Void Scholar';
  if (role.includes('ml')) return 'Chronomancer';
  if (role.includes('security')) return 'Shadow Sentinel';
  return 'Legendary Adventurer';
};

export function RPGHeader({ data }: RPGHeaderProps) {
  const name = data.displayName;
  const developerClass = data.developerClass ?? data.role;

  let rank = data.rank;
  if (!rank) {
    const rating = data.rating;
    if (rating >= 98) rank = 'SSS';
    else if (rating >= 94) rank = 'SS';
    else if (rating >= 88) rank = 'S';
    else if (rating >= 80) rank = 'A';
    else if (rating >= 70) rank = 'B';
    else rank = 'C';
  }

  const level = Math.min(99, Math.max(1, Math.round(data.rating)));

  return (
    <header className="relative mb-5">

      {/* Decorative Top Border */}

      <div
        className="
        absolute
        left-0
        right-0
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-amber-500/40
        to-transparent
      "
      />

      <div className="flex items-start justify-between">

        {/* LEFT */}

        <div className="min-w-0 pr-5">

            <p className="text-[11px] uppercase tracking-[0.45em] text-amber-400/80 font-bold">
              ✠ {getFantasyTitle(developerClass)}
            </p>

          <h1
            className="
            mt-1
            truncate
            text-4xl
            font-black
            uppercase
            tracking-wide
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-yellow-100
            via-amber-200
            to-yellow-50
          "
            style={{
              textShadow:
                '0 1px 0 rgba(255,255,255,.15), 0 4px 12px rgba(0,0,0,.75)',
            }}
          >
            {name}
          </h1>

          <p
            className="
            mt-1
            text-xs
            italic
            tracking-[0.25em]
            text-orange-200/70
          "
          >
            Class • {developerClass}
          </p>

        </div>

        {/* RIGHT BADGE */}

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">

          <div
            className="
            absolute
            inset-0
            rounded-full
            bg-amber-500/20
            blur-xl
          "
          />

           <svg
             viewBox="0 0 100 100"
             className="absolute inset-0 h-full w-full text-amber-500"
             aria-labelledby="rank-badge"
           >
            <path
              d="M50 6
                 L84 20
                 L84 56
                 C84 77 66 91 50 96
                 C34 91 16 77 16 56
                 L16 20 Z"
              fill="#1b120b"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              d="M50 12
                 L79 24
                 L79 54
                 C79 72 65 84 50 89
                 C35 84 21 72 21 54
                 L21 24 Z"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />
                         <text
               id="rank-badge"
               x="50"
               y="56"
               textAnchor="middle"
               className={`fill-current font-black ${getRankColor(rank)}`}
               style={{
                 fontSize: '28px',
                 fontWeight: 900,
               }}
             >
               {rank}
             </text>
          </svg>

          {/* LEVEL */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
            <div
              className="
              rounded-full
              border
              border-amber-500/50
              bg-[#1b120b]
              px-3
              py-[3px]
              shadow-lg
            "
            >
              <span
                className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-amber-300
              "
              >
                LV {level}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Decorative Divider */}

      <div className="mt-7 flex items-center gap-3">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-600/50 to-amber-400/20" />

        <span
          className="
          text-lg
          text-amber-400
          drop-shadow-[0_0_8px_rgba(245,158,11,.45)]
        "
        >
          ⚜
        </span>

        <span
          className="
          text-xs
          uppercase
          tracking-[0.45em]
          text-amber-200/70
        "
        >
          HERO RECORD
        </span>

        <span
          className="
          text-lg
          text-amber-400
          drop-shadow-[0_0_8px_rgba(245,158,11,.45)]
        "
        >
          ⚜
        </span>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-600/50 to-amber-400/20" />

      </div>

    </header>
  );
}