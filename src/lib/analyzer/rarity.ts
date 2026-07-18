import type { Developer } from "@/types/developer";

const RANK_THRESHOLDS = {
  sss: 17001,
  ss: 12001,
  s: 8001,
  a: 5001,
  b: 3001,
  c: 1501,
} as const;

export function calculateRank(powerScore: number): string {
  if (powerScore >= RANK_THRESHOLDS.sss) {
    return "SSS";
  }

  if (powerScore >= RANK_THRESHOLDS.ss) {
    return "SS";
  }

  if (powerScore >= RANK_THRESHOLDS.s) {
    return "S";
  }

  if (powerScore >= RANK_THRESHOLDS.a) {
    return "A";
  }

  if (powerScore >= RANK_THRESHOLDS.b) {
    return "B";
  }

  if (powerScore >= RANK_THRESHOLDS.c) {
    return "C";
  }

  return "D";
}

export function analyzeRarity(developer: Developer): string {
  if (developer.followers >= 10000 || developer.stars >= 2000) {
    return "Legendary";
  }

  return calculateRank(analyzeLegacyPowerScore(developer));
}

const analyzeLegacyPowerScore = (developer: Developer): number =>
  developer.followers + developer.stars + developer.repositories * 20;
