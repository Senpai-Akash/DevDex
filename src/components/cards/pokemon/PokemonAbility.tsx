// src/components/cards/pokemon/PokemonAbility.tsx
'use client';
import { motion } from 'framer-motion';

interface AbilityProps {
  ability?: string; // developerClass
  trait?: string;
}

/**
 * Ability box – mimics the Pokémon ability area with a subtle gradient.
 */
export function PokemonAbility({ ability, trait }: AbilityProps) {
  if (!ability && !trait) return null;
  return (
    <motion.section
      className="my-2 rounded border border-gray-300 bg-white/80 p-2 text-center shadow-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {ability && (
        <p className="text-xs font-bold uppercase text-gray-700">{ability}</p>
      )}
      {trait && (
        <p className="mt-1 text-sm text-gray-600">{trait}</p>
      )}
    </motion.section>
  );
}
