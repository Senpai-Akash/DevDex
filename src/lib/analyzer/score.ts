import type { Developer } from "@/types/developer";

export function analyzeScore(developer: Developer): number {
  const followerScore = Math.min(developer.followers / 50, 30);
  const starScore = Math.min(developer.stars / 25, 25);
  const repositoryScore = Math.min(developer.repositories / 10, 15);
  const forkScore = Math.min(developer.forks / 20, 10);
  const organizationScore = Math.min(developer.organizations.length * 5, 10);
  const languageScore = Math.min(developer.languages.length * 5, 10);

  return Number(
    Math.min(
      followerScore + starScore + repositoryScore + forkScore + organizationScore + languageScore,
      100,
    ).toFixed(0),
  );
}
