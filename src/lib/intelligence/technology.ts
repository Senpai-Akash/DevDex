import type { Developer } from "@/types/developer";

const LANGUAGE_PRIORITY = [
  "typescript",
  "javascript",
  "python",
  "rust",
  "go",
  "java",
  "c++",
  "c#",
  "swift",
  "kotlin",
  "php",
  "ruby",
  "dart",
  "scala",
  "haskell",
  "r",
] as const;

const CANONICAL_LANGUAGE = new Map<string, string>([
  ["typescript", "TypeScript"],
  ["javascript", "JavaScript"],
  ["python", "Python"],
  ["rust", "Rust"],
  ["go", "Go"],
  ["java", "Java"],
  ["c++", "C++"],
  ["c#", "C#"],
  ["swift", "Swift"],
  ["kotlin", "Kotlin"],
  ["php", "PHP"],
  ["ruby", "Ruby"],
  ["dart", "Dart"],
  ["scala", "Scala"],
  ["haskell", "Haskell"],
  ["r", "R"],
]);

const normalizeLanguage = (language: string): string => {
  const trimmed = language.trim();
  return CANONICAL_LANGUAGE.get(trimmed.toLowerCase()) ?? trimmed;
};

const priorityIndex = (language: string): number => {
  const normalized = language.trim().toLowerCase();
  const index = LANGUAGE_PRIORITY.findIndex((item) => item === normalized);
  return index === -1 ? LANGUAGE_PRIORITY.length : index;
};

export function detectPrimaryTechnology(developer: Developer): string {
  const languageEntries = Object.entries(developer.languageCounts);

  if (languageEntries.length === 0) {
    return "Unknown";
  }

  const sortedLanguages = languageEntries.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }

    const priorityDifference = priorityIndex(a[0]) - priorityIndex(b[0]);
    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return a[0].localeCompare(b[0]);
  });

  return normalizeLanguage(sortedLanguages[0][0]);
}
