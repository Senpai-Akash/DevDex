import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildPokemonCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const visuals = {
    borderStyle: 'polished',
    frameStyle: 'collector',
    badge: 'pokeball',
  };

  return buildBaseCard(
    dev,
    analysis,
    'Trainer',
    Math.round(analysis.overallScore),
    analysis.primaryLanguage,
    analysis.strongestSkill,
    'Edition 001 of 1000',
    `DDX-${String(Math.round(analysis.overallScore)).padStart(6, '0')}`,
    'DEVDEX',
    visuals
  );
};
