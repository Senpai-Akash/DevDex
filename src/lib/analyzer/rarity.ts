import type { Developer } from "@/types/developer";

export function analyzeRarity(developer: Developer): string {
  if (developer.followers >= 10000 || developer.stars >= 2000) {
    return "Legendary";
  }

  if (developer.followers >= 2500 || developer.stars >= 750 || developer.organizations.length >= 8) {
    return "Epic";
  }

  if (developer.followers >= 800 || developer.stars >= 250 || developer.organizations.length >= 4) {
    return "Rare";
  }

  if (developer.followers >= 200 || developer.stars >= 75 || developer.organizations.length >= 2) {
    return "Uncommon";
  }

  return "Common";
}
