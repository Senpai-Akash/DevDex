export type CardTheme = 'football' | 'pokemon' | 'rpg' | 'cyber' | 'yugioh';

export const AVAILABLE_THEMES: CardTheme[] = ['football', 'pokemon', 'rpg', 'cyber', 'yugioh'];

export const THEME_LABELS: Record<CardTheme, string> = {
  football: 'Football',
  pokemon: 'Pokemon',
  rpg: 'RPG',
  cyber: 'Cyber',
  yugioh: 'Yu‑Gi‑Oh',
};
