import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { CardData, CardVisuals } from '../../types/card';

export type CardBuilder = (dev: Developer, analysis: DeveloperAnalysis) => CardData;

export function buildBaseCard(
  dev: Developer,
  analysis: DeveloperAnalysis,
  role: string,
  rating: number,
  technology: string,
  trait: string,
  edition: string,
  cardNumber: string,
  branding: string,
  visualsOverrides: Partial<CardVisuals> = {}
): CardData {
  const visuals: CardVisuals = {
    rarity: analysis.rarity ?? 'common',
    borderStyle: 'standard',
    frameStyle: 'standard',
    badge: 'none',
    ...visualsOverrides,
  };

  const stats = {
    overall: analysis.overallScore,
    attack: Math.round(analysis.powerLevel),
    defense: Math.round(analysis.powerLevel * 0.8),
    intelligence: Math.round(analysis.overallScore * 0.9),
    speed: Math.round(analysis.powerLevel * 0.6),
    versatility: Math.round(analysis.overallScore * 0.7),
    teamwork: Math.round(analysis.overallScore * 0.65),
  };

  return {
    username: dev.username,
    displayName: dev.displayName,
    avatar: dev.avatar,
    role,
    rating,
    rarity: analysis.rarity,
    technology,
    trait,
    edition,
    cardNumber,
    branding,
    stats,
    visuals,
    achievements: analysis.achievements ?? [],
  };
}
