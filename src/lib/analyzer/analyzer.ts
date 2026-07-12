import type { Developer } from "@/types/developer";
import type { DeveloperAnalysis } from "@/types/analysis";
import { analyzeScore } from "@/lib/analyzer/score";
import { analyzeRarity } from "@/lib/analyzer/rarity";
import { analyzePrimaryLanguage, analyzeStrongestSkill } from "@/lib/analyzer/language";
import { analyzeDeveloperClass } from "@/lib/analyzer/developerClass";
import { analyzeAchievements } from "@/lib/analyzer/achievements";

function computePowerLevel(overallScore: number, rarity: string, achievements: string[]): number {
  const rarityMultiplier = {
    Legendary: 1.3,
    Epic: 1.15,
    Rare: 1.05,
    Uncommon: 0.95,
    Common: 0.8,
  } as const;

  const multiplier = rarityMultiplier[rarity as keyof typeof rarityMultiplier] ?? 1;
  const rawPower = overallScore * multiplier + achievements.length * 2;

  return Math.min(Math.round(rawPower), 150);
}

export function analyzeDeveloper(developer: Developer): DeveloperAnalysis {
  const overallScore = analyzeScore(developer);
  const rarity = analyzeRarity(developer);
  const developerClass = analyzeDeveloperClass(developer);
  const primaryLanguage = analyzePrimaryLanguage(developer);
  const strongestSkill = analyzeStrongestSkill(developer);
  const achievements = analyzeAchievements(developer);
  const powerLevel = computePowerLevel(overallScore, rarity, achievements);

  return {
    overallScore,
    rarity,
    developerClass,
    primaryLanguage,
    strongestSkill,
    achievements,
    powerLevel,
  };
}
