import type { Developer } from "@/types/developer";

/**
 * Calculate card rarity from developer score and profile strength.
 */
export function calculateRarity(developer: Developer, rating: number): string {
  if (rating >= 90 || developer.followers >= 5000 || developer.stars >= 2500) {
    return "Mythic";
  }

  if (rating >= 75 || developer.followers >= 2000 || developer.stars >= 1000) {
    return "Legendary";
  }

  if (rating >= 55 || developer.followers >= 800 || developer.stars >= 400) {
    return "Epic";
  }

  if (rating >= 35 || developer.followers >= 300 || developer.stars >= 150) {
    return "Rare";
  }

  return "Common";
}
