import type { Developer } from "@/types/developer";

export function analyzeAchievements(developer: Developer): string[] {
  const achievements: string[] = [];

  if (developer.followers >= 1000) {
    achievements.push("Community Favorite");
  }

  if (developer.stars >= 500) {
    achievements.push("Star Contributor");
  }

  if (developer.repositories >= 50) {
    achievements.push("Repository Master");
  }

  if (developer.languages.length >= 4) {
    achievements.push("Polyglot");
  }

  if (developer.organizations.length >= 3) {
    achievements.push("Team Collaborator");
  }

  if (new Date(developer.joinedAt).getFullYear() <= new Date().getFullYear() - 5) {
    achievements.push("Veteran Coder");
  }

  return achievements;
}
