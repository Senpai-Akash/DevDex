'use client';

import { DeveloperAchievement } from '@/types/analysis';
import { PokemonType, TYPE_META } from './pokemonTypeUtils';

interface PokemonAttacksProps {
  achievements: DeveloperAchievement[];
  powerScore?: number;
  stats: {
    attack: number;
    intelligence: number;
    speed: number;
  };
  pkType: PokemonType;
}

export function PokemonAttacks({
  achievements,
  powerScore,
  stats,
  pkType,
}: PokemonAttacksProps) {
  const meta = TYPE_META[pkType];

  const attacks = [
    achievements[0] ?? {
      title: 'Code Slash',
      description: 'Deliver clean commits with incredible precision.',
    },
    achievements[1] ?? {
      title: 'Bug Crusher',
      description: 'Fixes critical bugs before deployment.',
    },
  ];

  const damages = [
    Math.max(30, Math.round(stats.attack * 0.7 + (powerScore ?? 0) / 900)),
    Math.max(60, Math.round(stats.intelligence * 0.8 + (powerScore ?? 0) / 700)),
  ];

  return (
    <section className="mx-4 mt-2">

      {attacks.map((attack, index) => (

        <div
          key={index}
          className={`py-3 ${
            index === 0
              ? 'border-t border-black/25'
              : 'border-t border-black/15'
          }`}
        >

          {/* Attack Header */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              {/* Energy Cost */}

              <div className="flex gap-[3px]">

                <div
                  className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black/25 text-[10px]"
                  style={{
                    background: meta.bg,
                  }}
                >
                  {meta.icon}
                </div>

                <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black/25 bg-neutral-300 text-[9px]">
                  ★
                </div>

              </div>

              {/* Move Name */}

              <span className="text-[15px] font-black tracking-tight text-black">
                {attack.title}
              </span>

            </div>

            {/* Damage */}

            <span className="text-[24px] font-black leading-none tracking-tight text-black">
              {damages[index]}
            </span>

          </div>

          {/* Attack Description */}

          <p className="mt-1 pl-[46px] pr-2 text-[10px] leading-[1.35] text-neutral-700">
            {attack.description}
          </p>

        </div>

      ))}

    </section>
  );
}