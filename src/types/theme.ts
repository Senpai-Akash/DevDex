export type CardTheme = 'football' | 'pokemon' | 'rpg' | 'cyber' | 'legendary';

export const AVAILABLE_THEMES: CardTheme[] = ['football', 'pokemon', 'rpg', 'cyber', 'legendary'];

export const THEME_LABELS: Record<CardTheme, string> = {
  football: 'Football',
  pokemon: 'Pokemon',
  rpg: 'RPG',
  cyber: 'Cyber',
  legendary: 'Legendary',
};
