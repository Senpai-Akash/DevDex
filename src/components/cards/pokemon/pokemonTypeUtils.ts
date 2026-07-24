'use client';

// ─────────────────────────────────────────────────────────────
// Pokémon Type Utility
// DevDex Pokémon Card Theme
// ─────────────────────────────────────────────────────────────

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
  color: string;
  darkColor: string;
  border: string;
  icon: string;
  bg: string;
}

export const TYPE_META: Record<PokemonType, TypeMeta> = {
  Electric: {
    color: '#F8D030',
    darkColor: '#C8A000',
    border: '#9F7E00',
    icon: '◈',
    bg: 'radial-gradient(circle,#F8D030 0%,#FCE570 45%,#FFF8DD 100%)',
  },

  Grass: {
    color: '#78C850',
    darkColor: '#4F9A2A',
    border: '#3F7A20',
    icon: '✿',
    bg: 'radial-gradient(circle,#78C850 0%,#A9E27F 45%,#F4FFF0 100%)',
  },

  Fire: {
    color: '#F08030',
    darkColor: '#C95A12',
    border: '#A84400',
    icon: '✹',
    bg: 'radial-gradient(circle,#F08030 0%,#FDBA74 45%,#FFF4EB 100%)',
  },

  Water: {
    color: '#6890F0',
    darkColor: '#386CEB',
    border: '#2455C3',
    icon: '◉',
    bg: 'radial-gradient(circle,#6890F0 0%,#A5C6FF 45%,#F2F7FF 100%)',
  },

  Steel: {
    color: '#B8B8D0',
    darkColor: '#8A8AA5',
    border: '#70708C',
    icon: '⬢',
    bg: 'radial-gradient(circle,#B8B8D0 0%,#D9D9E8 45%,#FAFAFF 100%)',
  },

  Dragon: {
    color: '#7038F8',
    darkColor: '#4D1DD0',
    border: '#3813A2',
    icon: '✦',
    bg: 'radial-gradient(circle,#7038F8 0%,#B39DFF 45%,#F5F2FF 100%)',
  },

  Psychic: {
    color: '#F85888',
    darkColor: '#D03060',
    border: '#A6204A',
    icon: '◐',
    bg: 'radial-gradient(circle,#F85888 0%,#FFA4C1 45%,#FFF1F6 100%)',
  },

  Dark: {
    color: '#705848',
    darkColor: '#4B3A2D',
    border: '#362920',
    icon: '⬤',
    bg: 'radial-gradient(circle,#705848 0%,#A68D79 45%,#F7F5F3 100%)',
  },

  Normal: {
    color: '#A8A878',
    darkColor: '#7E7E52',
    border: '#656541',
    icon: '●',
    bg: 'radial-gradient(circle,#A8A878 0%,#D7D7A8 45%,#FFFDF4 100%)',
  },

  Rock: {
    color: '#B8A038',
    darkColor: '#8F7424',
    border: '#6C5617',
    icon: '⬣',
    bg: 'radial-gradient(circle,#B8A038 0%,#E2D17A 45%,#FFFBEA 100%)',
  },

  Ice: {
    color: '#98D8D8',
    darkColor: '#5FB5C6',
    border: '#3F94A4',
    icon: '❅',
    bg: 'radial-gradient(circle,#98D8D8 0%,#D9FFFF 45%,#FFFFFF 100%)',
  },

  Fighting: {
    color: '#C03028',
    darkColor: '#90211A',
    border: '#6B1712',
    icon: '✸',
    bg: 'radial-gradient(circle,#C03028 0%,#F29B95 45%,#FFF3F3 100%)',
  },

  Fairy: {
    color: '#EE99AC',
    darkColor: '#D76A8B',
    border: '#B94D6D',
    icon: '✧',
    bg: 'radial-gradient(circle,#EE99AC 0%,#FFD7E3 45%,#FFF7FA 100%)',
  },
};

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

  React: 'Psychic',
  Next: 'Psychic',
  'Next.js': 'Psychic',

  Node: 'Dark',
  NodeJS: 'Dark',
  Express: 'Dark',

  MongoDB: 'Grass',

  PostgreSQL: 'Steel',
  MySQL: 'Steel',
  Prisma: 'Steel',

  Docker: 'Dragon',
  Kubernetes: 'Dragon',

  Python: 'Grass',

  Java: 'Fire',
  Kotlin: 'Fire',

  Go: 'Water',
  Golang: 'Water',

  Rust: 'Steel',

  HTML: 'Normal',

  CSS: 'Water',

  Tailwind: 'Fairy',
  'Tailwind CSS': 'Fairy',

  PHP: 'Dark',

  Dart: 'Water',

  Swift: 'Ice',

  Ruby: 'Psychic',

  C: 'Dragon',
  'C++': 'Dragon',
  'C#': 'Dragon',
};

export function getPokemonType(technology: string): PokemonType {
  return TECH_MAP[technology] ?? 'Normal';
}