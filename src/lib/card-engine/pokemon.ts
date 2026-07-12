import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildPokemonCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const title = `${dev.displayName} — Trainer`; 
  const visuals = {
    borderStyle: 'polished',
    frameStyle: 'collector',
    badge: 'pokeball',
  };

  return buildBaseCard(dev, analysis, title, visuals);
};
