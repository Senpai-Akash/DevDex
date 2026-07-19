// src/components/cards/pokemon/PokemonFrame.tsx
'use client';
import { ReactNode } from 'react';

interface PokemonFrameProps {
  children: ReactNode;
  isRare: boolean;
}

/**
 * Outer frame that mimics a Pokémon card border.
 * Rare/legendary cards gain a holographic gradient overlay.
 */
export function PokemonFrame({ children, isRare }: PokemonFrameProps) {
  return (
    <div className="relative w-full max-w-[380px] h-[540px] rounded-2xl overflow-hidden shadow-xl">
      {/* Base card border */}
      <div
        className={`absolute inset-0 rounded-2xl border-4 ${
          isRare ? 'border-yellow-400' : 'border-gray-300'
        } bg-white`}
      />
      {/* Holographic shine for rare cards */}
      {isRare && (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_70%)] opacity-30 animate-[shimmer_3s_linear_infinite]" />
      )}
      {/* Content */}
      <div className="relative h-full p-2 flex flex-col">{children}</div>
    </div>
  );
}

/*
 * Tailwind custom animation definition (add to tailwind.config.js if not present):
 *   @keyframes shimmer { to { background-position: 200% center; } }
 */
