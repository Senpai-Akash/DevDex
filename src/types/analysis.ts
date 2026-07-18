export interface DeveloperAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LanguageProfile {
  primary: string;
  secondary: string;
  others: string[];
}

export interface DeveloperAnalyzerResult {
  achievements: DeveloperAchievement[];
  developerClass: string;
  powerScore: number;
  rank: string;
  languageProfile: LanguageProfile;
}

export interface DeveloperAnalysis extends DeveloperAnalyzerResult {
  overallScore: number;
  rarity: string;
  developerClass: string;
  primaryLanguage: string;
  strongestSkill: string;
  powerLevel: number;
}
