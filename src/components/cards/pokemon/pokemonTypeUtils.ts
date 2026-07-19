'use client';

// ─── Pokémon Type Utility ────────────────────────────────────────────────────
// Maps developer technology → Pokémon type, with colour, icon, and meta.
// Used by PokemonHeader, PokemonFooter, PokemonBackground.

export type PokemonType =
  | 'Electric'
  | 'Grass'
  | 'Steel'
  | 'Water'
  | 'Fire'
  | 'Dragon'
  | 'Psychic'
  | 'Dark'
  | 'Normal'
  | 'Rock'
  | 'Ice'
  | 'Fighting'
  | 'Fairy';

interface TypeMeta {
  color: string;      // primary fill colour
  darkColor: string;  // darker shade for gradients
  icon: string;       // emoji icon
  bg: string;         // Tailwind-compatible CSS bg gradient string
}

export const TYPE_META: Record<PokemonType, TypeMeta> = {
  Electric: {
    color: '#FACC15',
    darkColor: '#CA8A04',
    icon: '⚡',
    bg: 'linear-gradient(135deg, #fde68a 0%, #facc15 100%)',
  },
  Grass: {
    color: '#22C55E',
    darkColor: '#15803D',
    icon: '🌿',
    bg: 'linear-gradient(135deg, #bbf7d0 0%, #22c55e 100%)',
  },
  Steel: {
    color: '#94A3B8',
    darkColor: '#475569',
    icon: '⚙️',
    bg: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
  },
  Water: {
    color: '#38BDF8',
    darkColor: '#0284C7',
    icon: '💧',
    bg: 'linear-gradient(135deg, #bae6fd 0%, #38bdf8 100%)',
  },
  Fire: {
    color: '#F97316',
    darkColor: '#C2410C',
    icon: '🔥',
    bg: 'linear-gradient(135deg, #fed7aa 0%, #f97316 100%)',
  },
  Dragon: {
    color: '#7C3AED',
    darkColor: '#4C1D95',
    icon: '🐉',
    bg: 'linear-gradient(135deg, #ddd6fe 0%, #7c3aed 100%)',
  },
  Psychic: {
    color: '#EC4899',
    darkColor: '#BE185D',
    icon: '🔮',
    bg: 'linear-gradient(135deg, #fbcfe8 0%, #ec4899 100%)',
  },
  Dark: {
    color: '#1E293B',
    darkColor: '#0F172A',
    icon: '🌑',
    bg: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
  },
  Normal: {
    color: '#A3A3A3',
    darkColor: '#737373',
    icon: '⭐',
    bg: 'linear-gradient(135deg, #e5e5e5 0%, #a3a3a3 100%)',
  },
  Rock: {
    color: '#92400E',
    darkColor: '#78350F',
    icon: '🪨',
    bg: 'linear-gradient(135deg, #fef3c7 0%, #92400e 100%)',
  },
  Ice: {
    color: '#67E8F9',
    darkColor: '#0891B2',
    icon: '❄️',
    bg: 'linear-gradient(135deg, #e0f2fe 0%, #67e8f9 100%)',
  },
  Fighting: {
    color: '#DC2626',
    darkColor: '#991B1B',
    icon: '👊',
    bg: 'linear-gradient(135deg, #fecaca 0%, #dc2626 100%)',
  },
  Fairy: {
    color: '#F9A8D4',
    darkColor: '#DB2777',
    icon: '🌸',
    bg: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)',
  },
};

// Weakness mapping: what type is this type weak to?
export const TYPE_WEAKNESS: Partial<Record<PokemonType, PokemonType>> = {
  Electric: 'Rock',
  Grass: 'Fire',
  Steel: 'Fighting',
  Water: 'Electric',
  Fire: 'Water',
  Dragon: 'Ice',
  Psychic: 'Dark',
  Dark: 'Fighting',
  Normal: 'Fighting',
  Rock: 'Water',
  Ice: 'Fire',
  Fighting: 'Psychic',
  Fairy: 'Steel',
};

// Resistance mapping
export const TYPE_RESISTANCE: Partial<Record<PokemonType, PokemonType>> = {
  Electric: 'Steel',
  Grass: 'Water',
  Steel: 'Grass',
  Water: 'Fire',
  Fire: 'Grass',
  Dragon: 'Electric',
  Psychic: 'Fighting',
  Dark: 'Psychic',
  Normal: 'Normal',
  Rock: 'Normal',
  Ice: 'Ice',
  Fighting: 'Steel',
  Fairy: 'Dragon',
};

const TECH_MAP: Record<string, PokemonType> = {
  TypeScript: 'Electric',
  JavaScript: 'Electric',
  Python: 'Grass',
  Rust: 'Steel',
  Go: 'Water',
  Golang: 'Water',
  Java: 'Fire',
  Kotlin: 'Fire',
  'C++': 'Dragon',
  'C#': 'Dragon',
  C: 'Dragon',
  Ruby: 'Psychic',
  Swift: 'Ice',
  PHP: 'Dark',
  Dart: 'Water',
  Scala: 'Electric',
  Haskell: 'Psychic',
  Elixir: 'Fairy',
  Clojure: 'Fairy',
  R: 'Grass',
  Shell: 'Rock',
  Bash: 'Rock',
  HTML: 'Normal',
  CSS: 'Normal',
};

export function getPokemonType(technology: string): PokemonType {
  return TECH_MAP[technology] ?? 'Normal';
}
