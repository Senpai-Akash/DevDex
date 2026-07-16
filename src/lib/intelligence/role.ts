import type { Developer } from "@/types/developer";

const keywordMatch = (text: string, patterns: string[]) =>
  patterns.some((pattern) => text.includes(pattern));

const normalizeText = (...parts: Array<string | null | undefined>) =>
  parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

/**
 * Infer a developer role from GitHub profile text, company, languages, and repo names.
 */
export function detectPrimaryRole(developer: Developer): string {
  const profileText = normalizeText(
    developer.bio,
    developer.company,
    developer.repositoryNames.join(" "),
  );

  const languageText = developer.languages.map((language) => language.toLowerCase());

  const isFrontend = keywordMatch(profileText, [
    "frontend",
    "ui",
    "ux",
    "react",
    "vue",
    "angular",
    "svelte",
    "ember",
    "next",
  ]);

  const isBackend = keywordMatch(profileText, [
    "backend",
    "api",
    "server",
    "node",
    "express",
    "django",
    "flask",
    "spring",
    "lambda",
    "kotlin",
    "java",
    "rust",
    "go",
    "c#",
    "c++",
    "php",
  ]);

  const isFullStack = keywordMatch(profileText, [
    "full stack",
    "full-stack",
    "fullstack",
    "jack of all trades",
  ]);

  const isMobile = keywordMatch(profileText, [
    "mobile",
    "android",
    "ios",
    "swift",
    "kotlin",
    "react native",
    "flutter",
    "xamarin",
  ]);

  const isDevOps = keywordMatch(profileText, [
    "devops",
    "ci/cd",
    "docker",
    "kubernetes",
    "terraform",
    "aws",
    "azure",
    "gcp",
    "cloud",
  ]);

  const isSecurity = keywordMatch(profileText, [
    "security",
    "pentest",
    "vulnerability",
    "crypto",
    "auth",
    "sso",
    "ssl",
  ]);

  const isOpenSource = keywordMatch(profileText, [
    "open source",
    "opensource",
    "maintainer",
    "contributor",
    "community",
  ]);

  const isMl = keywordMatch(profileText, [
    "machine learning",
    "ml engineer",
    "ai engineer",
    "artificial intelligence",
    "tensorflow",
    "pytorch",
    "scikit",
    "keras",
  ]);

  if (isFullStack || (isFrontend && isBackend)) {
    return "Full Stack Developer";
  }

  if (isMl || languageText.includes("python") || languageText.includes("r")) {
    return keywordMatch(profileText, ["ai", "artificial intelligence"]) ? "AI Engineer" : "ML Engineer";
  }

  if (isMobile) {
    return "Mobile Developer";
  }

  if (isDevOps) {
    return "DevOps Engineer";
  }

  if (isSecurity) {
    return "Security Engineer";
  }

  if (isOpenSource) {
    return "Open Source Maintainer";
  }

  if (isFrontend || languageText.includes("typescript") || languageText.includes("javascript")) {
    return "Frontend Developer";
  }

  if (isBackend || languageText.includes("go") || languageText.includes("rust") || languageText.includes("java") || languageText.includes("python") || languageText.includes("c#") || languageText.includes("php")) {
    return "Backend Developer";
  }

  if (developer.company) {
    return "Professional Developer";
  }

  return "Developer";
}
