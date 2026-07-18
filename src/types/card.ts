import type {
    DeveloperAchievement,
    DeveloperAnalyzerResult,
    LanguageProfile,
} from "@/types/analysis";

export interface CardStats {
    overall: number;
    attack: number;
    defense: number;
    intelligence: number;
    speed: number;
    versatility: number;
    teamwork: number;
}

export interface CardVisuals {
    rarity: string;
    borderStyle: string;
    frameStyle: string;
    badge: string;
}

export interface CardData {
    username: string;
    displayName: string;
    avatar: string;
    role: string;
    rating: number;
    rarity: string;
    technology: string;
    trait: string;
    edition: string;
    cardNumber: string;
    branding: string;

    stats: CardStats;

    visuals: CardVisuals;

    analysis?: DeveloperAnalyzerResult;
    powerScore?: number;
    rank?: string;
    developerClass?: string;
    languageProfile?: LanguageProfile;
    achievements: DeveloperAchievement[];
}
