import type { Developer } from "@/types/developer";
import { rankLanguages } from "@/lib/analyzer/language";

const CLASS_THRESHOLDS = {
  openSourceStars: 1200,
  openSourceFollowers: 1500,
  fullStackRepositories: 12,
  cloudOrganizations: 2,
} as const;

const languageSet = (developer: Developer): Set<string> =>
  new Set(developer.languages.map((language) => language.trim().toLowerCase()));

const hasLanguage = (languages: Set<string>, language: string): boolean =>
  languages.has(language.toLowerCase());

const hasAnyLanguage = (
  languages: Set<string>,
  options: readonly string[],
): boolean => options.some((language) => hasLanguage(languages, language));

const repositoryText = (developer: Developer): string =>
  developer.repositoryNames.join(" ").toLowerCase();

export function detectDeveloperClass(developer: Developer): string {
  const languages = languageSet(developer);
  const rankedLanguages = rankLanguages(developer);
  const primaryLanguage = rankedLanguages[0]?.name.toLowerCase();
  const repoText = repositoryText(developer);

  if (
    developer.stars >= CLASS_THRESHOLDS.openSourceStars ||
    developer.followers >= CLASS_THRESHOLDS.openSourceFollowers
  ) {
    return "Open Source Guardian";
  }

  if (hasLanguage(languages, "python") && hasAnyLanguage(languages, ["r", "jupyter notebook"])) {
    return "Data Scientist";
  }

  if (hasLanguage(languages, "python")) {
    return "AI Researcher";
  }

  if (hasAnyLanguage(languages, ["rust", "c", "c++"])) {
    return "Systems Engineer";
  }

  if (hasAnyLanguage(languages, ["swift", "kotlin", "dart"])) {
    return "Mobile Creator";
  }

  if (hasAnyLanguage(languages, ["c#", "lua", "gdscript"])) {
    return "Game Developer";
  }

  if (repoText.includes("security") || repoText.includes("auth")) {
    return "Security Specialist";
  }

  if (repoText.includes("docker") || repoText.includes("kubernetes") || repoText.includes("terraform")) {
    return "DevOps Commander";
  }

  if (repoText.includes("aws") || repoText.includes("azure") || repoText.includes("gcp")) {
    return "Cloud Engineer";
  }

  if (
    hasAnyLanguage(languages, ["typescript", "javascript"]) &&
    developer.repositories >= CLASS_THRESHOLDS.fullStackRepositories &&
    hasAnyLanguage(languages, ["go", "python", "java", "php", "ruby"])
  ) {
    return "Full Stack Builder";
  }

  if (hasAnyLanguage(languages, ["typescript", "javascript"])) {
    return "Frontend Wizard";
  }

  if (
    primaryLanguage === "go" ||
    primaryLanguage === "java" ||
    hasAnyLanguage(languages, ["go", "java", "php", "ruby"])
  ) {
    return "Backend Architect";
  }

  if (developer.organizations.length >= CLASS_THRESHOLDS.cloudOrganizations) {
    return "Cloud Engineer";
  }

  return "Developer";
}

export const analyzeDeveloperClass = detectDeveloperClass;
