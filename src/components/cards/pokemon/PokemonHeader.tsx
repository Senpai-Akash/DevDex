'use client';

import { CardData } from '@/types/card';
import { getPokemonType, TYPE_META } from './pokemonTypeUtils';

interface PokemonHeaderProps {
  data: CardData;
  isRare: boolean;
}

export function PokemonHeader({
  data,
}: PokemonHeaderProps) {

  const type = getPokemonType(data.technology);
  const meta = TYPE_META[type];

  return (
    <header className="relative z-10 px-4 pt-2.5 pb-2">

      {/* Top Row */}

      <div className="flex items-start justify-between">

        {/* LEFT */}

        <div className="min-w-0">

          {/* Stage */}

          <p className="text-[9px] italic font-semibold text-neutral-700">
            Basic Developer
          </p>

          {/* Name */}

          <h2 className="truncate text-[27px] font-black leading-none tracking-[-0.03em] text-black">
            {data.displayName}
          </h2>

        </div>

        {/* RIGHT */}

        <div className="flex items-start gap-2">

          {/* HP */}

          <div className="flex items-start">

            <span className="text-[32px] font-black leading-none text-red-600">
              {data.rating}
            </span>

            <span className="mt-[6px] ml-[2px] text-[11px] font-black uppercase tracking-tight text-red-600">
              HP
            </span>

          </div>

          {/* Energy Symbol */}

          <div
            className="
              mt-[3px]
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-black/25
              shadow-[inset_0_1px_2px_rgba(255,255,255,.5)]
            "
            style={{
              background: meta.bg,
            }}
          >
            <span className="text-[13px]">
              {meta.icon}
            </span>

          </div>

        </div>

      </div>

      {/* Thin divider exactly like Pokémon cards */}

      <div className="mt-2 h-px bg-black/15" />

    </header>
  );
}