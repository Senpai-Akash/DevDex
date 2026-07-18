import type { Developer } from "@/types/developer";

const hasLanguage = (languages: Set<string>, language: string): boolean =>
  languages.has(language.toLowerCase());

const hasAnyLanguage = (languages: Set<string>, options: string[]): boolean =>
  options.some((language) => hasLanguage(languages, language));

const repositoryText = (developer: Developer): string =>
  developer.repositoryNames.join(" ").toLowerCase();

export function detectRole(developer: Developer): string {
  const languages = new Set(
    developer.languages.map((language) => language.trim().toLowerCase()),
  );
  const repoText = repositoryText(developer);
  const usesNode =
    hasLanguage(languages, "node") ||
    repoText.includes("node") ||
    repoText.includes("express");
  const usesFrontendPair =
    hasLanguage(languages, "typescript") && hasLanguage(languages, "javascript");

  if (hasLanguage(languages, "typescript") && usesNode) {
    return "Full Stack Developer";
  }

  if (usesFrontendPair) {
    return "Frontend Engineer";
  }

  if (hasLanguage(languages, "python")) {
    return "AI Engineer";
  }

  if (hasLanguage(languages, "go")) {
    return "Backend Engineer";
  }

  if (hasLanguage(languages, "rust")) {
    return "Systems Programmer";
  }

  if (hasLanguage(languages, "java")) {
    return "Software Engineer";
  }

  if (hasAnyLanguage(languages, ["javascript", "typescript"])) {
    return "Frontend Engineer";
  }

  if (hasAnyLanguage(languages, ["c#", "c++", "php", "ruby", "kotlin"])) {
    return "Software Engineer";
  }

  return "Developer";
}

export const detectPrimaryRole = detectRole;
