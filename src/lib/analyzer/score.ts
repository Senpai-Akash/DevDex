import type { CardStats } from "@/types/card";
import type { Developer } from "@/types/developer";

const POWER_WEIGHTS = {
  rating: 55,
  followers: 7,
  stars: 10,
  repositories: 24,
  organizations: 280,
  languages: 180,
  statTotal: 5,
} as const;

const logScore = (value: number, weight: number): number => {
  if (value <= 0) {
    return 0;
  }

  return Math.log10(value + 1) * weight;
};

const statTotal = (stats: CardStats): number =>
  stats.attack +
  stats.defense +
  stats.intelligence +
  stats.speed +
  stats.versatility +
  stats.teamwork +
  stats.overall;

export function calculatePowerScore(
  developer: Developer,
  rating: number,
  stats: CardStats,
): number {
  const rawScore =
    rating * POWER_WEIGHTS.rating +
    logScore(developer.followers, POWER_WEIGHTS.followers) +
    logScore(developer.stars, POWER_WEIGHTS.stars) +
    developer.repositories * POWER_WEIGHTS.repositories +
    developer.organizations.length * POWER_WEIGHTS.organizations +
    developer.languages.length * POWER_WEIGHTS.languages +
    statTotal(stats) * POWER_WEIGHTS.statTotal;

  return Math.max(0, Math.round(rawScore));
}

export function analyzeScore(developer: Developer): number {
  return Math.min(
    100,
    Math.round(
      logScore(developer.followers, 8) +
        logScore(developer.stars, 10) +
        developer.repositories * 0.8 +
        developer.organizations.length * 4 +
        developer.languages.length * 3,
    ),
  );
}
