'use client';

import { CardData } from '@/types/card';
import {
  getPokemonType,
  TYPE_META,
  TYPE_RESISTANCE,
  TYPE_WEAKNESS,
} from './pokemonTypeUtils';

interface PokemonFooterProps {
  data: CardData;
}

export function PokemonFooter({ data }: PokemonFooterProps) {
  const pkType = getPokemonType(data.technology);

  const weakType = TYPE_WEAKNESS[pkType];
  const resistType = TYPE_RESISTANCE[pkType];

  const weak = weakType ? TYPE_META[weakType] : null;
  const resist = resistType ? TYPE_META[resistType] : null;

  const retreat = Math.max(
    1,
    Math.min(4, Math.round(4 - data.stats.versatility / 30))
  );

  return (
    <footer className="mt-auto border-t border-black/20 px-3 py-2">

      <div className="grid grid-cols-3 items-center text-center">

        {/* Weakness */}

        <div>

          <p className="text-[8px] font-bold uppercase tracking-wider">
            Weakness
          </p>

          <div className="mt-1 flex justify-center items-center gap-1">

            {weak ? (
              <>
                <div
                  className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white"
                  style={{
                    background: weak.color,
                  }}
                >
                  {weak.icon}
                </div>

                <span className="text-[11px] font-black">
                  ×2
                </span>
              </>
            ) : (
              "-"
            )}

          </div>

        </div>

        {/* Resistance */}

        <div>

          <p className="text-[8px] font-bold uppercase tracking-wider">
            Resistance
          </p>

          <div className="mt-1 flex justify-center items-center gap-1">

            {resist ? (
              <>
                <div
                  className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white"
                  style={{
                    background: resist.color,
                  }}
                >
                  {resist.icon}
                </div>

                <span className="text-[11px] font-black">
                  −20
                </span>
              </>
            ) : (
              "-"
            )}

          </div>

        </div>

        {/* Retreat */}

        <div>

          <p className="text-[8px] font-bold uppercase tracking-wider">
            Retreat
          </p>

          <div className="mt-1 flex justify-center gap-1">

            {Array.from({ length: retreat }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-full bg-neutral-700 border border-black/20"
              />
            ))}

          </div>

        </div>

      </div>

      {/* Bottom Information */}

      <div className="mt-2 flex items-center justify-between border-t border-black/15 pt-1 text-[8px] text-neutral-600">

        <span>
          DEVDEX · {data.edition}
        </span>

        <span>
          No. {data.cardNumber}
        </span>

      </div>

    </footer>
  );
}