const RARITY_THRESHOLDS = {
  mythic: 96,
  legendary: 90,
  epic: 80,
  rare: 70,
} as const;

export function calculateRarity(rating: number): string {
  if (rating >= RARITY_THRESHOLDS.mythic) {
    return "Mythic";
  }

  if (rating >= RARITY_THRESHOLDS.legendary) {
    return "Legendary";
  }

  if (rating >= RARITY_THRESHOLDS.epic) {
    return "Epic";
  }

  if (rating >= RARITY_THRESHOLDS.rare) {
    return "Rare";
  }

  return "Common";
}
