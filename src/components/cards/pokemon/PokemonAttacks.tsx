// src/components/cards/pokemon/PokemonAttacks.tsx
'use client';
import { motion } from 'framer-motion';
import { CardData } from '@/types/card';

interface PokemonAttacksProps {
  data: CardData;
}

/**
 * Attack section – displays up to two attacks derived from developer achievements.
 * Each attack shows a name and damage (using powerScore or a fallback).
 */
export function PokemonAttacks({ data }: PokemonAttacksProps) {
  const attacks = data.achievements?.slice(0, 2) || [];
  const damage = data.powerScore ?? data.stats?.attack ?? 0;

  return (
    <motion.div
      className="mt-4 space-y-2"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {attacks.map((atk, idx) => (
        <div
          key={idx}
          className="flex justify-between rounded border border-gray-300 bg-white/80 px-2 py-1 shadow-sm"
        >
          <p className="text-sm font-bold uppercase text-gray-700">{atk.title}</p>
          <p className="text-sm font-medium text-gray-800">{damage}</p>
        </div>
      ))}
    </motion.div>
  );
}
