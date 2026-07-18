import type { Developer } from "@/types/developer";
import type { LanguageProfile } from "@/types/analysis";

const FALLBACK_LANGUAGE = "General";

const LANGUAGE_PRIORITY = [
  "typescript",
  "javascript",
  "python",
  "go",
  "rust",
  "java",
  "c++",
  "c#",
  "swift",
  "kotlin",
  "dart",
  "php",
  "ruby",
  "r",
  "scala",
] as const;

const CANONICAL_LANGUAGE = new Map<string, string>([
  ["typescript", "TypeScript"],
  ["javascript", "JavaScript"],
  ["python", "Python"],
  ["go", "Go"],
  ["rust", "Rust"],
  ["java", "Java"],
  ["c++", "C++"],
  ["c#", "C#"],
  ["swift", "Swift"],
  ["kotlin", "Kotlin"],
  ["dart", "Dart"],
  ["php", "PHP"],
  ["ruby", "Ruby"],
  ["r", "R"],
  ["scala", "Scala"],
]);

export interface RankedLanguage {
  name: string;
  count: number;
}

const normalizeLanguage = (language: string): string =>
  language.trim().toLowerCase();

const canonicalLanguage = (language: string): string => {
  const trimmed = language.trim();

  return CANONICAL_LANGUAGE.get(normalizeLanguage(trimmed)) ?? trimmed;
};

const priorityIndex = (language: string): number => {
  const index = LANGUAGE_PRIORITY.findIndex(
    (item) => item === normalizeLanguage(language),
  );

  return index === -1 ? LANGUAGE_PRIORITY.length : index;
};

export function rankLanguages(developer: Developer): RankedLanguage[] {
  return Object.entries(developer.languageCounts)
    .map(([language, count]) => ({
      name: canonicalLanguage(language),
      count,
    }))
    .sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }

      const priorityDifference = priorityIndex(a.name) - priorityIndex(b.name);
      if (priorityDifference !== 0) {
        return priorityDifference;
      }

      return a.name.localeCompare(b.name);
    });
}

export function analyzeLanguages(developer: Developer): LanguageProfile {
  const rankedLanguages = rankLanguages(developer);

  if (rankedLanguages.length === 0) {
    return {
      primary: FALLBACK_LANGUAGE,
      secondary: FALLBACK_LANGUAGE,
      others: [],
    };
  }

  const [primary, secondary, ...others] = rankedLanguages;

  return {
    primary: primary.name,
    secondary: secondary?.name ?? FALLBACK_LANGUAGE,
    others: others.map((language) => language.name),
  };
}

export function analyzePrimaryLanguage(developer: Developer): string {
  return analyzeLanguages(developer).primary;
}

export function analyzeStrongestSkill(developer: Developer): string {
  return `${analyzeLanguages(developer).primary} Mastery`;
}
