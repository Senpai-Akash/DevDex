import type { Developer } from "@/types/developer";

const languagePriority = [
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
];

const canonicalLanguage = new Map<string, string>([
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
  return canonicalLanguage.get(trimmed.toLowerCase()) ?? trimmed;
};

const priorityIndex = (language: string): number => {
  const normalized = language.trim().toLowerCase();
  const index = languagePriority.indexOf(normalized);
  return index === -1 ? languagePriority.length : index;
};

/**
 * Choose the strongest technology from repository language frequency.
 */
export function detectPrimaryTechnology(developer: Developer): string {
  if (developer.languages.length === 0) {
    return "Unknown";
  }

  const sortedLanguages = Object.entries(developer.languageCounts).sort((a, b) => {
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
