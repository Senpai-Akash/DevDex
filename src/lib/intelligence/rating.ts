import type { Developer } from "@/types/developer";
import {
  clampScore,
  linearScale,
  logScale,
  MAX_CARD_RATING,
  MIN_CARD_RATING,
} from "@/lib/intelligence/scoring";

const BASE_RATING = 50;

const RATING_WEIGHTS = {
  followers: 9,
  repositories: 11,
  stars: 15,
  organizations: 6,
  languages: 8,
} as const;

const RATING_SCALES = {
  followers: 3,
  repositories: 5,
  stars: 5,
  organizations: 2,
  languages: 2,
} as const;

export function calculateOverallRating(developer: Developer): number {
  const rawScore =
    BASE_RATING +
    logScale(developer.followers, RATING_SCALES.followers, RATING_WEIGHTS.followers) +
    logScale(developer.repositories, RATING_SCALES.repositories, RATING_WEIGHTS.repositories) +
    logScale(developer.stars, RATING_SCALES.stars, RATING_WEIGHTS.stars) +
    linearScale(developer.organizations.length, RATING_SCALES.organizations, RATING_WEIGHTS.organizations) +
    linearScale(developer.languages.length, RATING_SCALES.languages, RATING_WEIGHTS.languages);

  return clampScore(rawScore, MIN_CARD_RATING, MAX_CARD_RATING);
}

export const calculateRating = calculateOverallRating;
