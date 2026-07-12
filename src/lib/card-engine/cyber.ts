import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildCyberCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const title = `${dev.displayName} — Cybernetic`; 
  const visuals = {
    borderStyle: 'neon',
    frameStyle: 'grid',
    badge: 'chip',
  };

  return buildBaseCard(dev, analysis, title, visuals);
};
