import type {
  GitHubOrganization,
  GitHubRepository,
  GitHubUser,
} from "@/types/github";

export class GitHubApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "GitHubApiError";
    this.status = status;
  }
}

export class GitHubNotFoundError extends GitHubApiError {
  constructor(message = "GitHub resource not found") {
    super(message, 404);
    this.name = "GitHubNotFoundError";
  }
}

const BASE_URL = "https://api.github.com";
const REVALIDATE_SECONDS = 60 * 30; // 30 minutes

function createHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function fetchOptions() {
  return {
    headers: createHeaders(),
    next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] as string[] },
  };
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.status === 404) {
    throw new GitHubNotFoundError("GitHub user not found.");
  }

  if (response.status === 403) {
    const remaining = response.headers.get("x-ratelimit-remaining");
    if (remaining === "0") {
      throw new GitHubApiError(
        "GitHub API rate limit exceeded. Please try again in a few minutes.",
        403,
      );
    }
  }

  if (!response.ok) {
    const body = await response.text();
    throw new GitHubApiError(
      `GitHub API returned ${response.status}: ${body.slice(0, 200)}`,
      response.status,
    );
  }

  return response.json() as Promise<T>;
}

export async function getUser(username: string): Promise<GitHubUser> {
  const trimmed = username.trim();
  if (!trimmed) {
    throw new GitHubApiError("Username is required.", 400);
  }

  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(trimmed)}`,
    fetchOptions(),
  );

  return handleResponse<GitHubUser>(response);
}

export async function getRepositories(username: string): Promise<GitHubRepository[]> {
  const trimmed = username.trim();
  if (!trimmed) {
    throw new GitHubApiError("Username is required.", 400);
  }

  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(trimmed)}/repos?per_page=100&sort=updated`,
    fetchOptions(),
  );

  return handleResponse<GitHubRepository[]>(response);
}

export async function getOrganizations(username: string): Promise<GitHubOrganization[]> {
  const trimmed = username.trim();
  if (!trimmed) {
    throw new GitHubApiError("Username is required.", 400);
  }

  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(trimmed)}/orgs`,
    fetchOptions(),
  );

  return handleResponse<GitHubOrganization[]>(response);
}