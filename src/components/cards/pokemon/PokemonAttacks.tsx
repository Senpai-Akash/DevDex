'use client';

import { motion } from 'framer-motion';
import { DeveloperAchievement } from '@/types/analysis';
import { PokemonType, TYPE_META } from './pokemonTypeUtils';

interface PokemonAttacksProps {
  achievements: DeveloperAchievement[];
  powerScore?: number;
  stats: { attack: number; intelligence: number; speed: number };
  pkType: PokemonType;
}

/**
 * Attack section — renders up to two attack rows in authentic Pokémon TCG format.
 * Each attack shows:
 *   • Cost icons (coloured energy circles derived from type)
 *   • Move name
 *   • Damage value
 *   • Short description
 */
export function PokemonAttacks({ achievements, powerScore, stats, pkType }: PokemonAttacksProps) {
  const meta = TYPE_META[pkType];

  // Use first 2 achievements as attacks; fall back to generic moves
  const rawAttacks = achievements.slice(0, 2);
  const attacks = [
    rawAttacks[0] ?? { title: 'Code Commit', description: 'Push high-quality code to production.', icon: '💾' },
    rawAttacks[1] ?? { title: 'Refactor Strike', description: 'Eliminate technical debt instantly.', icon: '🔨' },
  ];

  // Derive damage values from stats
  const damages = [
    Math.round((stats.attack * 0.6 + (powerScore ?? 0) * 0.002)),
    Math.round((stats.intelligence * 0.7 + (powerScore ?? 0) * 0.003)),
  ];

  return (
    <div className="mx-3 mb-1.5 space-y-1.5">
      {attacks.map((atk, idx) => (
        <motion.div
          key={idx}
          className="rounded-md border border-gray-200/80 px-2.5 py-2 backdrop-blur-sm"
          initial={{ backgroundColor: '#ffffffb3' }}
          whileHover={{ x: 2, backgroundColor: `${meta.color}22` }}
          transition={{ duration: 0.15 }}
        >
          <div className="flex items-center justify-between gap-2">
            {/* Left: Energy cost + name */}
            <div className="flex items-center gap-2 min-w-0">
              {/* Energy cost icons — 2 circles */}
              <div className="flex shrink-0 gap-0.5">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-4 rounded-full border border-white/50 shadow-sm text-[0.5rem] flex items-center justify-center text-white font-black"
                    style={{
                      background: i === 0
                        ? `linear-gradient(135deg, ${meta.color}, ${meta.darkColor})`
                        : 'linear-gradient(135deg, #9ca3af, #6b7280)',
                    }}
                  >
                    {i === 0 ? meta.icon : '⚪'}
                  </div>
                ))}
              </div>

              {/* Move name + icon */}
              <div className="min-w-0">
                <p className="truncate text-[0.68rem] font-black uppercase tracking-wide text-gray-800">
                  {atk.icon} {atk.title}
                </p>
                {atk.description && (
                  <p className="truncate text-[0.57rem] text-gray-500 leading-snug">
                    {atk.description}
                  </p>
                )}
              </div>
            </div>

            {/* Damage value */}
            <span className="shrink-0 text-[1.15rem] font-black text-gray-900 leading-none">
              {damages[idx] > 0 ? damages[idx] : idx === 0 ? 30 : 60}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
