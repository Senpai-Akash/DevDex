'use client';

import { CardData } from '@/types/card';
import { getPokemonType, TYPE_META, TYPE_WEAKNESS, TYPE_RESISTANCE } from './pokemonTypeUtils';

interface PokemonFooterProps {
  data: CardData;
}

/**
 * Bottom metadata strip matching authentic Pokémon TCG layout:
 *   • Weakness  |  Resistance  |  Retreat cost
 *   • Collector number  |  Rarity  |  DEVDEX brand
 */
export function PokemonFooter({ data }: PokemonFooterProps) {
  const pkType = getPokemonType(data.technology);
  const weakType = TYPE_WEAKNESS[pkType];
  const resType = TYPE_RESISTANCE[pkType];
  const weakMeta = weakType ? TYPE_META[weakType] : null;
  const resMeta = resType ? TYPE_META[resType] : null;

  // Retreat cost circles (derived from versatility stat — more versatile = lower retreat)
  const retreatCost = Math.max(1, Math.round(4 - (data.stats.versatility / 30)));

  return (
    <div className="mx-3 mb-2.5 mt-auto space-y-1.5">
      {/* Weakness / Resistance / Retreat */}
      <div className="flex items-center justify-between rounded-md border border-gray-200/60 bg-white/50 px-3 py-1.5 text-[0.6rem]">
        {/* Weakness */}
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-bold uppercase tracking-wider text-gray-500">Weakness</span>
          {weakMeta ? (
            <div className="flex items-center gap-1">
              <div
                className="h-4 w-4 rounded-full text-[0.55rem] flex items-center justify-center text-white font-black shadow-sm"
                style={{ background: weakMeta.color }}
              >
                {weakMeta.icon}
              </div>
              <span className="font-black text-gray-700">×2</span>
            </div>
          ) : (
            <span className="font-bold text-gray-400">–</span>
          )}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Resistance */}
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-bold uppercase tracking-wider text-gray-500">Resistance</span>
          {resMeta ? (
            <div className="flex items-center gap-1">
              <div
                className="h-4 w-4 rounded-full text-[0.55rem] flex items-center justify-center text-white font-black shadow-sm"
                style={{ background: resMeta.color }}
              >
                {resMeta.icon}
              </div>
              <span className="font-black text-gray-700">–20</span>
            </div>
          ) : (
            <span className="font-bold text-gray-400">–</span>
          )}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Retreat cost */}
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-bold uppercase tracking-wider text-gray-500">Retreat</span>
          <div className="flex gap-0.5">
            {Array.from({ length: retreatCost }).map((_, i) => (
              <div
                key={i}
                className="h-3.5 w-3.5 rounded-full border border-white/60 bg-gray-400 shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Collector number / brand row */}
      <div className="flex items-center justify-between px-1">
        {/* Left: DEVDEX brand */}
        <span className="text-[0.52rem] font-black uppercase tracking-[0.3em] text-gray-400">
          DEVDEX
        </span>

        {/* Center: edition */}
        <span className="text-[0.52rem] font-semibold text-gray-400 italic">
          {data.edition}
        </span>

        {/* Right: collector number */}
        <span className="text-[0.52rem] font-black text-gray-500 tabular-nums">
          {data.cardNumber}
        </span>
      </div>
    </div>
  );
}
