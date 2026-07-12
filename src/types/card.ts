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

    title: string;

    stats: CardStats;

    visuals: CardVisuals;

    achievements: string[];
}
