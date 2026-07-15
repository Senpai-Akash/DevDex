import { type CardTheme } from '@/types/theme';
import { FootballCard } from '@/components/cards/football/FootballCard';
import { PokemonCard } from '@/components/cards/pokemon/PokemonCard';
import { RPGCard } from '@/components/cards/rpg/RPGCard';
import { CyberCard } from '@/components/cards/cyber/CyberCard';
import { LegendaryCard } from '@/components/cards/legendary/LegendaryCard';
import type { CardData } from '@/types/card';
import { ComponentType } from 'react';

type CardComponent = ComponentType<{ data: CardData }>;

const themeComponentMap: Record<CardTheme, CardComponent> = {
  football: FootballCard,
  pokemon: PokemonCard,
  rpg: RPGCard,
  cyber: CyberCard,
  legendary: LegendaryCard,
};

export function getThemeComponent(theme: CardTheme): CardComponent {
  return themeComponentMap[theme] || FootballCard;
}

export function getThemeIcon(theme: CardTheme): string {
  const icons: Record<CardTheme, string> = {
    football: '🏈',
    pokemon: '⚡',
    rpg: '⚔️',
    cyber: '🤖',
    legendary: '👑',
  };
  return icons[theme];
}
