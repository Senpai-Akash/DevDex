import type { CardStats } from "@/types/card";
import type { Developer } from "@/types/developer";
import {
  clampScore,
  linearScale,
  logScale,
  MAX_CARD_STAT,
  MIN_CARD_STAT,
} from "@/lib/intelligence/scoring";

const BASE_STAT = 20;

const REPOSITORY_QUALITY_FLOOR = 1;

const ACTIVITY_WEIGHTS = {
  following: 0.35,
  languages: 2,
} as const;

const STAT_WEIGHTS = {
  attack: {
    stars: 12,
    starsCap: 38,
    repositories: 7,
    repositoriesCap: 24,
    forks: 5,
    forksCap: 12,
  },
  defense: {
    followers: 8,
    followersCap: 30,
    repositoryQuality: 10,
    repositoryQualityCap: 25,
    organizations: 2,
    organizationsCap: 10,
  },
  intelligence: {
    languages: 7,
    languagesCap: 35,
    repositories: 6,
    repositoriesCap: 22,
    bioBonus: 5,
  },
  speed: {
    activity: 8,
    activityCap: 34,
    following: 5,
    followingCap: 18,
  },
  versatility: {
    languages: 10,
    languagesCap: 50,
    repositories: 4,
    repositoriesCap: 14,
  },
  teamwork: {
    organizations: 9,
    organizationsCap: 36,
    followers: 7,
    followersCap: 28,
    companyBonus: 5,
  },
} as const;

const averageStarsPerRepository = (developer: Developer): number =>
  developer.repositories > 0 ? developer.stars / developer.repositories : 0;

const activityEstimate = (developer: Developer): number =>
  developer.repositories +
  developer.following * ACTIVITY_WEIGHTS.following +
  developer.languages.length * ACTIVITY_WEIGHTS.languages;

const stat = (value: number): number =>
  clampScore(value, MIN_CARD_STAT, MAX_CARD_STAT);

export function calculateStats(developer: Developer): CardStats {
  const repositoryQuality = Math.max(
    averageStarsPerRepository(developer),
    REPOSITORY_QUALITY_FLOOR,
  );
  const organizationCount = developer.organizations.length;
  const languageCount = developer.languages.length;

  const attack = stat(
    BASE_STAT +
      logScale(developer.stars, STAT_WEIGHTS.attack.stars, STAT_WEIGHTS.attack.starsCap) +
      logScale(
        developer.repositories,
        STAT_WEIGHTS.attack.repositories,
        STAT_WEIGHTS.attack.repositoriesCap,
      ) +
      logScale(developer.forks, STAT_WEIGHTS.attack.forks, STAT_WEIGHTS.attack.forksCap),
  );

  const defense = stat(
    BASE_STAT +
      logScale(
        developer.followers,
        STAT_WEIGHTS.defense.followers,
        STAT_WEIGHTS.defense.followersCap,
      ) +
      logScale(
        repositoryQuality,
        STAT_WEIGHTS.defense.repositoryQuality,
        STAT_WEIGHTS.defense.repositoryQualityCap,
      ) +
      linearScale(
        organizationCount,
        STAT_WEIGHTS.defense.organizations,
        STAT_WEIGHTS.defense.organizationsCap,
      ),
  );

  const intelligence = stat(
    BASE_STAT +
      linearScale(
        languageCount,
        STAT_WEIGHTS.intelligence.languages,
        STAT_WEIGHTS.intelligence.languagesCap,
      ) +
      logScale(
        developer.repositories,
        STAT_WEIGHTS.intelligence.repositories,
        STAT_WEIGHTS.intelligence.repositoriesCap,
      ) +
      (developer.bio ? STAT_WEIGHTS.intelligence.bioBonus : 0),
  );

  const speed = stat(
    BASE_STAT +
      logScale(
        activityEstimate(developer),
        STAT_WEIGHTS.speed.activity,
        STAT_WEIGHTS.speed.activityCap,
      ) +
      logScale(
        developer.following,
        STAT_WEIGHTS.speed.following,
        STAT_WEIGHTS.speed.followingCap,
      ),
  );

  const versatility = stat(
    BASE_STAT +
      linearScale(
        languageCount,
        STAT_WEIGHTS.versatility.languages,
        STAT_WEIGHTS.versatility.languagesCap,
      ) +
      logScale(
        developer.repositories,
        STAT_WEIGHTS.versatility.repositories,
        STAT_WEIGHTS.versatility.repositoriesCap,
      ),
  );

  const teamwork = stat(
    BASE_STAT +
      linearScale(
        organizationCount,
        STAT_WEIGHTS.teamwork.organizations,
        STAT_WEIGHTS.teamwork.organizationsCap,
      ) +
      logScale(
        developer.followers,
        STAT_WEIGHTS.teamwork.followers,
        STAT_WEIGHTS.teamwork.followersCap,
      ) +
      (developer.company ? STAT_WEIGHTS.teamwork.companyBonus : 0),
  );

  const overall = stat(
    (attack + defense + speed + intelligence + versatility + teamwork) / 6,
  );

  return {
    overall,
    attack,
    defense,
    speed,
    intelligence,
    versatility,
    teamwork,
  };
}
