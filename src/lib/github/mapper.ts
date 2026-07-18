import type {
  GitHubOrganization,
  GitHubRepository,
  GitHubUser,
} from "@/types/github";
import type { CardData } from "@/types/card";
import type { Developer } from "@/types/developer";
import { calculateOverallRating } from "@/lib/intelligence/rating";
import { detectRole } from "@/lib/intelligence/role";
import { detectPrimaryTechnology } from "@/lib/intelligence/technology";
import { calculateRarity } from "@/lib/intelligence/rarity";
import { generateTrait } from "@/lib/intelligence/trait";
import { calculateStats } from "@/lib/intelligence/stats";
import { analyzeDeveloper } from "@/lib/analyzer/analyzer";

export function mapGithubToDeveloper(
  user: GitHubUser,
  repositories: GitHubRepository[],
  organizations: GitHubOrganization[],
): Developer {
  const stars = repositories.reduce((total, repo) => total + repo.stargazers_count, 0);
  const forks = repositories.reduce((total, repo) => total + repo.forks_count, 0);
  const repositoryNames = repositories.map((repo) => repo.name);
  const languageCounts = repositories.reduce<Record<string, number>>((counts, repo) => {
    const language = repo.language?.trim();

    if (!language) {
      return counts;
    }

    counts[language] = (counts[language] ?? 0) + 1;
    return counts;
  }, {});

  const languages = Object.keys(languageCounts).sort();

  return {
    username: user.login,
    displayName: user.name ?? user.login,
    avatar: user.avatar_url,
    bio: user.bio,
    followers: user.followers,
    following: user.following,
    repositories: user.public_repos,
    stars,
    forks,
    languages,
    languageCounts,
    repositoryNames,
    organizations: organizations.map((org) => org.login),
    company: user.company,
    location: user.location,
    joinedAt: user.created_at,
    website: user.blog ? user.blog.trim() : null,
    profileUrl: user.html_url,
  };
}

export function mapDeveloperToCardData(developer: Developer): CardData {
  const rating = calculateOverallRating(developer);
  const technology = detectPrimaryTechnology(developer);
  const role = detectRole(developer);
  const rarity = calculateRarity(rating);
  const trait = generateTrait(developer);
  const edition = "Edition 001 of 1000";
  const cardNumber = `DDX-${String(developer.followers).padStart(6, "0")}`;
  const branding = "DEVDEX";
  const stats = calculateStats(developer);
  const analysis = analyzeDeveloper(developer, rating, stats);

  return {
    username: developer.username,
    displayName: developer.displayName,
    avatar: developer.avatar,
    role,
    rating,
    rarity,
    technology,
    trait,
    edition,
    cardNumber,
    branding,
    stats,
    visuals: {
      rarity,
      borderStyle: "standard",
      frameStyle: "standard",
      badge: "none",
    },
    analysis,
    powerScore: analysis.powerScore,
    rank: analysis.rank,
    developerClass: analysis.developerClass,
    languageProfile: analysis.languageProfile,
    achievements: analysis.achievements,
  };
}
