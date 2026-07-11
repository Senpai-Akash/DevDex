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

function createHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.status === 404) {
    throw new GitHubNotFoundError("GitHub user not found.");
  }

  if (!response.ok) {
    const body = await response.text();
    throw new GitHubApiError(
      `GitHub API returned ${response.status}: ${body}`,
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

  const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(trimmed)}`, {
    headers: createHeaders(),
  });

  return handleResponse<GitHubUser>(response);
}

export async function getRepositories(username: string): Promise<GitHubRepository[]> {
  const trimmed = username.trim();
  if (!trimmed) {
    throw new GitHubApiError("Username is required.", 400);
  }

  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(trimmed)}/repos?per_page=100&sort=updated`,
    {
      headers: createHeaders(),
    },
  );

  return handleResponse<GitHubRepository[]>(response);
}

export async function getOrganizations(username: string): Promise<GitHubOrganization[]> {
  const trimmed = username.trim();
  if (!trimmed) {
    throw new GitHubApiError("Username is required.", 400);
  }

  const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(trimmed)}/orgs`, {
    headers: createHeaders(),
  });

  return handleResponse<GitHubOrganization[]>(response);
}
