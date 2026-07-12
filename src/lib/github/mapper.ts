import type {
  GitHubOrganization,
  GitHubRepository,
  GitHubUser,
} from "@/types/github";
import type { CardData } from "@/types/card";
import type { Developer } from "@/types/developer";

export function mapGithubToDeveloper(
  user: GitHubUser,
  repositories: GitHubRepository[],
  organizations: GitHubOrganization[],
): Developer {
  const stars = repositories.reduce((total, repo) => total + repo.stargazers_count, 0);
  const forks = repositories.reduce((total, repo) => total + repo.forks_count, 0);
  const languages = Array.from(
    new Set(
      repositories
        .map((repo) => repo.language)
        .filter((language): language is string => Boolean(language)),
    ),
  ).sort();

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
    organizations: organizations.map((org) => org.login),
    company: user.company,
    location: user.location,
    joinedAt: user.created_at,
    website: user.blog ? user.blog.trim() : null,
    profileUrl: user.html_url,
  };
}

export function mapDeveloperToCardData(developer: Developer): CardData {
  const rating = Math.min(99, Math.max(1, Math.round((developer.followers + developer.stars + developer.repositories) / 3)));
  const technology = developer.languages[0] ?? "Unknown";
  const role = developer.company ?? "Developer";
  const rarity = developer.followers > 500 ? "Legendary" : developer.followers > 100 ? "Rare" : "Common";
  const trait = developer.bio ? developer.bio.split(" ")[0] : "Commit Machine";
  const edition = "Edition 001 of 1000";
  const cardNumber = `DDX-${String(developer.followers).padStart(6, "0")}`;
  const branding = "DEVDEX";

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
    stats: {
      overall: rating,
      attack: Math.min(100, Math.round(developer.stars / 10 + 20)),
      defense: Math.min(100, Math.round(developer.followers / 10 + 15)),
      intelligence: Math.min(100, Math.round(developer.repositories / 2 + 20)),
      speed: Math.min(100, Math.round(developer.following / 5 + 10)),
      versatility: Math.min(100, developer.languages.length * 10),
      teamwork: Math.min(100, Math.round(developer.organizations.length * 15)),
    },
    visuals: {
      rarity,
      borderStyle: "standard",
      frameStyle: "standard",
      badge: "none",
    },
    achievements: [],
  };
}
