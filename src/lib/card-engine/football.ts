import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildFootballCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const visuals = {
    borderStyle: 'stitch',
    frameStyle: 'stadium',
    badge: 'ball',
  };

  return buildBaseCard(
    dev,
    analysis,
    'All-Star',
    Math.round(analysis.overallScore),
    analysis.primaryLanguage,
    analysis.strongestSkill,
    'Edition 001 of 1000',
    `DDX-${String(Math.round(analysis.overallScore)).padStart(6, '0')}`,
    'DEVDEX',
    visuals
  );
};
