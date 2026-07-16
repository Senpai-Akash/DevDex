import type { Developer } from "@/types/developer";

const clamp = (value: number, min = 1, max = 99): number =>
  Math.min(max, Math.max(min, Math.round(value)));

/**
 * Calculate a deterministic rating from GitHub profile metrics.
 *
 * The rating blends followers, repositories, stars, forks, organizations,
 * and language diversity into a single 1–99 score.
 */
export function calculateRating(developer: Developer): number {
  const followerScore = Math.min(developer.followers / 100, 30);
  const repositoryScore = Math.min(developer.repositories / 5, 25);
  const starScore = Math.min(developer.stars / 25, 25);
  const forkScore = Math.min(developer.forks / 20, 10);
  const organizationScore = Math.min(developer.organizations.length * 2.5, 5);
  const languageScore = Math.min(developer.languages.length * 5, 5);

  const rawScore =
    followerScore +
    repositoryScore +
    starScore +
    forkScore +
    organizationScore +
    languageScore;

  return clamp(rawScore === 0 ? 1 : rawScore, 1, 99);
}
