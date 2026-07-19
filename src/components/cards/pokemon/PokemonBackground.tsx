// src/components/cards/pokemon/PokemonBackground.tsx
'use client';
import { motion } from 'framer-motion';

interface PokemonBackgroundProps {
  isRare: boolean;
}

/**
 * Background pattern for the card. Uses a subtle radial gradient.
 * When the card is rare/legendary a shimmering overlay is added.
 */
export function PokemonBackground({ isRare }: PokemonBackgroundProps) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {isRare && (
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_0%,transparent_70%)] opacity-30 animate-[shimmer_4s_linear_infinite]" />
      )}
    </motion.div>
  );
}

/*
 * The `shimmer` keyframes are the same as defined for other components:
 * @keyframes shimmer { to { background-position: 200% center; } }
 */
