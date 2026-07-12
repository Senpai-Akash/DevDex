import { Developer } from '../../types/developer';
import { DeveloperAnalysis } from '../../types/analysis';
import { buildBaseCard, CardBuilder } from './base';

export const buildFootballCard: CardBuilder = (
  dev: Developer,
  analysis: DeveloperAnalysis
) => {
  const title = `${dev.displayName} — All-Star`; 
  const visuals = {
    borderStyle: 'stitch',
    frameStyle: 'stadium',
    badge: 'ball',
  };

  return buildBaseCard(dev, analysis, title, visuals);
};
