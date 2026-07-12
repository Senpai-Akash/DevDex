import type { Developer } from "@/types/developer";

export function analyzeDeveloperClass(developer: Developer): string {
  if (developer.stars >= 1500) {
    return "Open Source Champion";
  }

  if (developer.languages.length >= 5) {
    return "Polyglot";
  }

  if (developer.organizations.length >= 5) {
    return "Collaborator";
  }

  if (developer.company) {
    return "Professional Developer";
  }

  if (developer.followers >= 1000) {
    return "Community Builder";
  }

  return "Rising Developer";
}
