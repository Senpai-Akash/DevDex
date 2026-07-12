import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildLegendaryCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const title = `${dev.displayName} — Legendary`; 
  const visuals = {
    borderStyle: 'gold',
    frameStyle: 'ornate',
    badge: 'crown',
  };

  return buildBaseCard(dev, analysis, title, visuals);
};
