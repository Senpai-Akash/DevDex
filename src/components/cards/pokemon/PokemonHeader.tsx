'use client';

import { motion } from 'framer-motion';
import { CardData } from '@/types/card';
import { getPokemonType, TYPE_META } from './pokemonTypeUtils';

interface PokemonHeaderProps {
  data: CardData;
  isRare: boolean;
}

/**
 * Card header — name on the left, HP on the right, type icon below name.
 * Layout mirrors authentic Pokémon TCG Base Set cards.
 */
export function PokemonHeader({ data, isRare }: PokemonHeaderProps) {
  const pkType = getPokemonType(data.technology);
  const meta = TYPE_META[pkType];
  const hp = data.rating;

  // Rarity stars
  const raritySymbol = isRare ? '✦' : '◆';

  return (
    <div className="relative z-10 px-3 pt-3 pb-1">
      {/* Top row: Name + HP */}
      <div className="flex items-start justify-between gap-2">
        {/* Left: Name + stage pill */}
        <div className="flex flex-col min-w-0">
          {/* Evolution stage pill */}
          <div
            className="mb-1 self-start rounded-full px-2 py-0.5 text-[0.55rem] font-black uppercase tracking-widest text-white shadow-sm"
            style={{ background: meta.color }}
          >
            {data.analysis?.languageProfile?.primary
              ? `Stage: ${data.analysis.languageProfile.others.length > 2 ? '2' : data.analysis.languageProfile.others.length > 0 ? '1' : 'Basic'}`
              : 'Basic'}
          </div>

          {/* Developer name */}
          <h2
            className="truncate text-[1.05rem] font-black uppercase leading-none tracking-tight"
            style={{ color: '#1a1a2e', textShadow: '0 1px 0 rgba(255,255,255,0.6)' }}
          >
            {data.displayName}
          </h2>
        </div>

        {/* Right: Type icon + HP */}
        <div className="flex shrink-0 items-center gap-1.5">
          {/* Type icon */}
          <motion.div
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex h-7 w-7 items-center justify-center rounded-full text-lg shadow-md"
            style={{ background: `linear-gradient(135deg, ${meta.color}, ${meta.darkColor})` }}
            title={pkType}
          >
            <span className="text-sm">{meta.icon}</span>
          </motion.div>

          {/* HP value */}
          <div className="flex items-baseline gap-0.5">
            <span className="text-[1.4rem] font-black leading-none text-red-600">{hp}</span>
            <span className="text-[0.55rem] font-black uppercase tracking-widest text-red-500">HP</span>
          </div>
        </div>
      </div>

      {/* Rarity indicator row */}
      <div className="mt-0.5 flex items-center justify-between">
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gray-500">
          {data.role}
        </p>
        <span
          className="text-[0.6rem]"
          style={{ color: isRare ? '#d97706' : '#6b7280' }}
        >
          {raritySymbol} {data.rarity}
        </span>
      </div>
    </div>
  );
}
