import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildRpgCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const visuals = {
    borderStyle: 'engraved',
    frameStyle: 'parchment',
    badge: 'sword',
  };

  return buildBaseCard(
    dev,
    analysis,
    'Adventurer',
    Math.round(analysis.overallScore),
    analysis.primaryLanguage,
    analysis.strongestSkill,
    'Edition 001 of 1000',
    `DDX-${String(Math.round(analysis.overallScore)).padStart(6, '0')}`,
    'DEVDEX',
    visuals
  );
};
