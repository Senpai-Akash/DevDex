import type { Developer } from "@/types/developer";

export function analyzePrimaryLanguage(developer: Developer): string {
  if (developer.languages.length === 0) {
    return "General";
  }

  return developer.languages[0];
}

export function analyzeStrongestSkill(developer: Developer): string {
  if (developer.languages.length === 0) {
    return "Versatility";
  }

  return `${developer.languages[0]} Mastery`;
}
