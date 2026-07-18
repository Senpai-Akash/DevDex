import type { Developer } from "@/types/developer";
import type { CardStats } from "@/types/card";
import type { DeveloperAnalyzerResult } from "@/types/analysis";
import { calculatePowerScore } from "@/lib/analyzer/score";
import { calculateRank } from "@/lib/analyzer/rarity";
import { analyzeLanguages } from "@/lib/analyzer/language";
import { detectDeveloperClass } from "@/lib/analyzer/developerClass";
import { generateAchievements } from "@/lib/analyzer/achievements";

export function analyzeDeveloper(
  developer: Developer,
  rating: number,
  stats: CardStats,
): DeveloperAnalyzerResult {
  const achievements = generateAchievements(developer);
  const developerClass = detectDeveloperClass(developer);
  const powerScore = calculatePowerScore(developer, rating, stats);
  const rank = calculateRank(powerScore);
  const languageProfile = analyzeLanguages(developer);

  return {
    achievements,
    developerClass,
    powerScore,
    rank,
    languageProfile,
  };
}
