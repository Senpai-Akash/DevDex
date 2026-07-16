import type { Developer } from "@/types/developer";

const normalizeText = (...parts: Array<string | null | undefined>) =>
  parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const textContains = (text: string, patterns: string[]) =>
  patterns.some((pattern) => text.includes(pattern));

const languageMatch = (developer: Developer, languages: string[]) =>
  developer.languages.some((language) =>
    languages.includes(language.toLowerCase()),
  );

/**
 * Generate a short, deterministic trait based on repository and GitHub stats.
 */
export function generateTrait(developer: Developer): string {
  const profileText = normalizeText(
    developer.bio,
    developer.company,
    developer.repositoryNames.join(" "),
  );

  if (developer.stars >= 1500 || developer.followers >= 5000) {
    return "Open Source Hero";
  }

  if (developer.repositories >= 100 || developer.forks >= 800) {
    return "Repository Collector";
  }

  if (developer.forks >= 500 || developer.organizations.length >= 7) {
    return "Bug Hunter";
  }

  if (languageMatch(developer, ["typescript", "javascript", "python", "rust", "go"])) {
    if (developer.languages.length >= 5) {
      return "Code Wizard";
    }
  }

  if (textContains(profileText, ["ci/cd", "docker", "kubernetes", "terraform", "devops"])) {
    return "Automation Expert";
  }

  if (textContains(profileText, ["frontend", "react", "vue", "angular", "svelte", "ui"])) {
    return "Frontend Ninja";
  }

  if (textContains(profileText, ["backend", "api", "server", "node", "django", "flask", "spring"])) {
    return "Backend Architect";
  }

  if (developer.languages.length >= 3 && developer.stars >= 300) {
    return "Algorithm Master";
  }

  if (developer.organizations.length >= 4) {
    return "Teamwork Champion";
  }

  if (developer.followers >= 1000) {
    return "Commit Machine";
  }

  return "Commit Machine";
}
