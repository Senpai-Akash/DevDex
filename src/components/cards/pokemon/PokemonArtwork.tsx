// src/components/cards/pokemon/PokemonArtwork.tsx
'use client';
import { motion } from 'framer-motion';

interface PokemonArtworkProps {
  avatar: string;
  name: string; // developer name (used for alt text)
}

/**
 * Central artwork area – shows the developer avatar as the Pokémon illustration.
 * Includes a gentle floating animation to evoke a holographic feel.
 */
export function PokemonArtwork({ avatar, name }: PokemonArtworkProps) {
  return (
    <motion.div
      className="my-4 flex justify-center"
      whileHover={{ scale: 1.03, rotate: -1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="relative h-[200px] w-[200px] overflow-hidden rounded-xl shadow-lg">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="h-full w-full object-cover"
        />
        {/* subtle flash overlay for legendary cards – controlled by parent via CSS */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
