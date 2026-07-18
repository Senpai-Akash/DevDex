import type { Developer } from "@/types/developer";
import type { DeveloperAchievement } from "@/types/analysis";

const ACHIEVEMENT_LIMITS = {
  minimum: 3,
  maximum: 6,
} as const;

const ACHIEVEMENT_THRESHOLDS = {
  openSourceHeroStars: 100,
  repositoryCollectorRepos: 50,
  polyglotLanguages: 5,
  communityFavoriteFollowers: 500,
  starsClub: 100,
  thousandStarsClub: 1000,
  organizationMemberOrganizations: 1,
  knowledgeSeekerLanguages: 3,
  codeVeteranRepos: 100,
  teamPlayerOrganizations: 3,
  risingDeveloperRepos: 10,
  legendaryStars: 2500,
  legendaryFollowers: 2500,
} as const;

const ACHIEVEMENT_ICONS = {
  trophy: "🏆",
  collection: "📚",
  language: "🌐",
  community: "⭐",
  star: "✨",
  organization: "🤝",
  knowledge: "🧠",
  veteran: "⚔️",
  rocket: "🚀",
  legend: "👑",
} as const;

const createAchievement = (
  id: string,
  title: string,
  description: string,
  icon: string,
  priority: number,
) => ({ id, title, description, icon, priority });

type CandidateAchievement = ReturnType<typeof createAchievement>;

const sortByPriority = (achievements: CandidateAchievement[]) =>
  achievements.sort((a, b) => b.priority - a.priority);

const fallbackAchievements = (): CandidateAchievement[] => [
  createAchievement(
    "rising-developer",
    "Rising Developer",
    "Shows early public building momentum",
    ACHIEVEMENT_ICONS.rocket,
    30,
  ),
  createAchievement(
    "knowledge-seeker",
    "Knowledge Seeker",
    "Explores and learns through public code",
    ACHIEVEMENT_ICONS.knowledge,
    20,
  ),
  createAchievement(
    "repository-collector",
    "Repository Collector",
    "Started a public repository catalog",
    ACHIEVEMENT_ICONS.collection,
    10,
  ),
];

const stripPriority = (achievement: CandidateAchievement): DeveloperAchievement => ({
  id: achievement.id,
  title: achievement.title,
  description: achievement.description,
  icon: achievement.icon,
});

export function generateAchievements(developer: Developer): DeveloperAchievement[] {
  const candidates: CandidateAchievement[] = [];

  if (
    developer.stars >= ACHIEVEMENT_THRESHOLDS.legendaryStars ||
    developer.followers >= ACHIEVEMENT_THRESHOLDS.legendaryFollowers
  ) {
    candidates.push(
      createAchievement(
        "legendary-contributor",
        "Legendary Contributor",
        "Reached elite community or open source impact",
        ACHIEVEMENT_ICONS.legend,
        100,
      ),
    );
  }

  if (developer.stars >= ACHIEVEMENT_THRESHOLDS.thousandStarsClub) {
    candidates.push(
      createAchievement(
        "1000-stars-club",
        "1000 Stars Club",
        "Earned over 1000 repository stars",
        ACHIEVEMENT_ICONS.star,
        95,
      ),
    );
  }

  if (developer.stars >= ACHIEVEMENT_THRESHOLDS.openSourceHeroStars) {
    candidates.push(
      createAchievement(
        "open-source-hero",
        "Open Source Hero",
        "Earned over 100 stars",
        ACHIEVEMENT_ICONS.trophy,
        90,
      ),
    );
  }

  if (developer.repositories >= ACHIEVEMENT_THRESHOLDS.codeVeteranRepos) {
    candidates.push(
      createAchievement(
        "code-veteran",
        "Code Veteran",
        "Published over 100 public repositories",
        ACHIEVEMENT_ICONS.veteran,
        85,
      ),
    );
  }

  if (developer.repositories >= ACHIEVEMENT_THRESHOLDS.repositoryCollectorRepos) {
    candidates.push(
      createAchievement(
        "repository-collector",
        "Repository Collector",
        "Built a deep public repository catalog",
        ACHIEVEMENT_ICONS.collection,
        80,
      ),
    );
  }

  if (developer.followers >= ACHIEVEMENT_THRESHOLDS.communityFavoriteFollowers) {
    candidates.push(
      createAchievement(
        "community-favorite",
        "Community Favorite",
        "Attracted a strong developer following",
        ACHIEVEMENT_ICONS.community,
        75,
      ),
    );
  }

  if (developer.languages.length >= ACHIEVEMENT_THRESHOLDS.polyglotLanguages) {
    candidates.push(
      createAchievement(
        "polyglot-developer",
        "Polyglot Developer",
        "Works across five or more languages",
        ACHIEVEMENT_ICONS.language,
        70,
      ),
    );
  }

  if (developer.organizations.length >= ACHIEVEMENT_THRESHOLDS.teamPlayerOrganizations) {
    candidates.push(
      createAchievement(
        "team-player",
        "Team Player",
        "Collaborates across multiple organizations",
        ACHIEVEMENT_ICONS.organization,
        65,
      ),
    );
  }

  if (developer.organizations.length >= ACHIEVEMENT_THRESHOLDS.organizationMemberOrganizations) {
    candidates.push(
      createAchievement(
        "organization-member",
        "Organization Member",
        "Contributes through a GitHub organization",
        ACHIEVEMENT_ICONS.organization,
        55,
      ),
    );
  }

  if (developer.stars >= ACHIEVEMENT_THRESHOLDS.starsClub) {
    candidates.push(
      createAchievement(
        "100-stars-club",
        "100 Stars Club",
        "Earned over 100 repository stars",
        ACHIEVEMENT_ICONS.star,
        50,
      ),
    );
  }

  if (developer.languages.length >= ACHIEVEMENT_THRESHOLDS.knowledgeSeekerLanguages) {
    candidates.push(
      createAchievement(
        "knowledge-seeker",
        "Knowledge Seeker",
        "Explores several technology ecosystems",
        ACHIEVEMENT_ICONS.knowledge,
        45,
      ),
    );
  }

  if (developer.repositories >= ACHIEVEMENT_THRESHOLDS.risingDeveloperRepos) {
    candidates.push(
      createAchievement(
        "rising-developer",
        "Rising Developer",
        "Shows consistent public building momentum",
        ACHIEVEMENT_ICONS.rocket,
        40,
      ),
    );
  }

  const achievementMap = new Map<string, CandidateAchievement>();

  for (const achievement of [...candidates, ...fallbackAchievements()]) {
    if (!achievementMap.has(achievement.id)) {
      achievementMap.set(achievement.id, achievement);
    }
  }

  return sortByPriority([...achievementMap.values()])
    .slice(0, ACHIEVEMENT_LIMITS.maximum)
    .map(stripPriority)
    .slice(0, Math.max(ACHIEVEMENT_LIMITS.minimum, Math.min(achievementMap.size, ACHIEVEMENT_LIMITS.maximum)));
}

export const analyzeAchievements = generateAchievements;
