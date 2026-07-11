import type {
  GitHubOrganization,
  GitHubRepository,
  GitHubUser,
} from "@/types/github";
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
