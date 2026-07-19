'use client';

import { motion } from 'framer-motion';
import { getPokemonType, TYPE_META } from './pokemonTypeUtils';

interface PokemonArtworkProps {
  avatar: string;
  name: string;
  isRare: boolean;
  technology: string;
}

/**
 * Central artwork panel — developer avatar inside a layered TCG art frame.
 * Rare cards: prismatic animated glow ring.
 */
export function PokemonArtwork({ avatar, name, isRare, technology }: PokemonArtworkProps) {
  const pkType = getPokemonType(technology);
  const meta = TYPE_META[pkType];

  return (
    <div className="relative mx-3 mt-1 mb-2 overflow-hidden rounded-lg" style={{ height: '185px' }}>
      {/* Art zone background — blurred type colour wash */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, ${meta.color}44 0%, ${meta.color}22 50%, transparent 100%)` }}
      />

      {/* Thin inner border */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{ boxShadow: `inset 0 0 0 1.5px ${meta.color}66` }}
      />

      {/* The avatar fills the frame */}
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="h-full w-full object-cover object-top"
        style={{ imageRendering: 'crisp-edges' }}
      />

      {/* Circular avatar spotlight — emulates centered Pokémon art */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(255,255,255,0.55) 100%)',
        }}
      />

      {/* Prismatic glow ring — rare only */}
      {isRare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            boxShadow: `inset 0 0 20px ${meta.color}66, 0 0 20px ${meta.color}44`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Bottom art fade to card body */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/60 to-transparent" />

      {/* Tiny type watermark bottom-right */}
      <div
        className="absolute bottom-1.5 right-2 text-[0.9rem] opacity-60"
        title={pkType}
      >
        {meta.icon}
      </div>
    </div>
  );
}
