export interface Developer {
  username: string;
  displayName: string;
  avatar: string;
  bio: string | null;
  followers: number;
  following: number;
  repositories: number;
  stars: number;
  forks: number;
  languages: string[];
  languageCounts: Record<string, number>;
  repositoryNames: string[];
  organizations: string[];
  company: string | null;
  location: string | null;
  joinedAt: string;
  website: string | null;
  profileUrl: string;
}
