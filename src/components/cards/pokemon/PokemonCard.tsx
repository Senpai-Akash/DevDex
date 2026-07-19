// src/components/cards/pokemon/PokemonCard.tsx
'use client';

import { motion } from 'framer-motion';
import { CardData } from '@/types/card';
import { PokemonFrame } from './PokemonFrame';
import { PokemonHeader } from './PokemonHeader';
import { PokemonArtwork } from './PokemonArtwork';
import { PokemonAbility } from './PokemonAbility';
import { PokemonAttacks } from './PokemonAttacks';
import { PokemonFooter } from './PokemonFooter';
import { PokemonBackground } from './PokemonBackground';

interface PokemonCardProps {
  data: CardData;
}

export function PokemonCard({ data }: PokemonCardProps) {
  // Determine if card is legendary/rare for special effects
  const isRare = /legendary|mythic|ultra|rare/i.test(data.rarity);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ rotateX: -2, rotateY: 3, scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative mx-auto flex max-w-[380px] cursor-pointer"
    >
      <PokemonFrame isRare={isRare}>
        <PokemonBackground isRare={isRare} />
        <div className="relative flex flex-col h-full p-4">
          <PokemonHeader data={data} />
          <PokemonArtwork avatar={data.avatar} name={data.displayName} />
          <PokemonAbility ability={data.developerClass} trait={data.trait} />
          <PokemonAttacks data={data} />
          <PokemonFooter data={data} />
        </div>
      </PokemonFrame>
    </motion.article>
  );
}
