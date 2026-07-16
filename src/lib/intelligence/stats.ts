import type { CardStats } from "@/types/card";
import type { Developer } from "@/types/developer";

const clamp = (value: number): number => Math.min(99, Math.max(1, Math.round(value)));

const scoreFromRange = (value: number, divisor: number, cap: number): number =>
  Math.min(value / divisor, cap);

/**
 * Produce six balanced stats from a developer profile.
 */
export function calculateStats(developer: Developer): CardStats {
  const languageBonus = developer.languages.length * 10;
  const organizationBonus = developer.organizations.length * 8;
  const hasCompanyBonus = developer.company ? 8 : 0;

  const attack = clamp(
    15 + scoreFromRange(developer.stars, 15, 30) + scoreFromRange(developer.forks, 20, 25),
  );

  const defense = clamp(
    10 + scoreFromRange(developer.followers, 20, 35) + scoreFromRange(developer.organizations.length, 1, 30),
  );

  const speed = clamp(
    12 + scoreFromRange(developer.repositories, 3, 30) + scoreFromRange(developer.following, 5, 20) + scoreFromRange(developer.languages.length, 1, 15),
  );

  const intelligence = clamp(
    18 + Math.min(languageBonus, 40) + hasCompanyBonus + (developer.bio ? 5 : 0),
  );

  const versatility = clamp(
    14 + Math.min(languageBonus, 45) + Math.min(organizationBonus, 20),
  );

  const teamwork = clamp(
    10 + Math.min(organizationBonus, 40) + scoreFromRange(developer.followers, 50, 20) + hasCompanyBonus,
  );

  const overall = clamp(
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
