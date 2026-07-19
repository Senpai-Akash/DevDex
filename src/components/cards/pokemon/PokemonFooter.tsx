// src/components/cards/pokemon/PokemonFooter.tsx
'use client';
import { CardData } from '@/types/card';
import { motion } from 'framer-motion';

interface PokemonFooterProps {
  data: CardData;
}

/**
 * Bottom strip of the card – displays the DEVDEX brand, card number, and spaces for
 * weakness / resistance (can be expanded later). Uses a subtle gradient background.
 */
export function PokemonFooter({ data }: PokemonFooterProps) {
  return (
    <motion.footer
      className="mt-auto flex items-center justify-between bg-gray-100 py-1 px-2 text-xs font-medium text-gray-700"
      whileHover={{ scaleY: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Brand */}
      <div className="font-bold uppercase tracking-wider text-gray-800">DEVDEX</div>
      {/* Collector number */}
      <div className="text-gray-600">#{data.edition ?? data.cardNumber}</div>
      {/* Placeholder for weakness/resistance – can be replaced with real data */}
      <div className="flex gap-1">
        <span className="rounded bg-gray-300 px-1">Wk: –</span>
        <span className="rounded bg-gray-300 px-1">Rs: –</span>
      </div>
    </motion.footer>
  );
}
