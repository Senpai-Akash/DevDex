import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildRpgCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const title = `${dev.displayName} — Adventurer`;
  const visuals = {
    borderStyle: 'engraved',
    frameStyle: 'parchment',
    badge: 'sword',
  };

  return buildBaseCard(dev, analysis, title, visuals);
};
