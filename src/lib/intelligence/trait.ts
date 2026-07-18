import type { Developer } from "@/types/developer";

const TRAIT_THRESHOLDS = {
  openSourceStars: 1000,
  openSourceFollowers: 1500,
  prolificRepositories: 75,
  architectureLanguages: 6,
  organizationLeader: 4,
  bugHunterForks: 250,
  nightCoderFollowing: 250,
} as const;

const languageMatch = (developer: Developer, languages: readonly string[]) =>
  developer.languages.some((language) =>
    languages.includes(language.trim().toLowerCase()),
  );

export function generateTrait(developer: Developer): string {
  if (
    developer.stars >= TRAIT_THRESHOLDS.openSourceStars ||
    developer.followers >= TRAIT_THRESHOLDS.openSourceFollowers
  ) {
    return "Open Source Hero";
  }

  if (developer.repositories >= TRAIT_THRESHOLDS.prolificRepositories) {
    return "Commit Machine";
  }

  if (developer.forks >= TRAIT_THRESHOLDS.bugHunterForks) {
    return "Bug Hunter";
  }

  if (developer.organizations.length >= TRAIT_THRESHOLDS.organizationLeader) {
    return "Code Architect";
  }

  if (languageMatch(developer, ["go", "java", "php", "ruby"])) {
    return "Backend Beast";
  }

  if (languageMatch(developer, ["typescript", "javascript"])) {
    return "Frontend Wizard";
  }

  if (languageMatch(developer, ["python", "r"])) {
    return "AI Tinkerer";
  }

  if (languageMatch(developer, ["rust", "c++", "c"]) || developer.stars >= 500) {
    return "Performance Freak";
  }

  if (developer.languages.length >= TRAIT_THRESHOLDS.architectureLanguages) {
    return "Code Architect";
  }

  if (developer.following >= TRAIT_THRESHOLDS.nightCoderFollowing) {
    return "Night Coder";
  }

  return "Commit Machine";
}
