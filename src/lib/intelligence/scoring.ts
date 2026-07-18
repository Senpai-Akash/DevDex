export const MIN_CARD_RATING = 50;
export const MAX_CARD_RATING = 99;
export const MIN_CARD_STAT = 1;
export const MAX_CARD_STAT = 99;

export function clampScore(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(value)));
}

export function logScale(value: number, scale: number, cap: number): number {
  if (value <= 0) {
    return 0;
  }

  return Math.min(Math.log10(value + 1) * scale, cap);
}

export function linearScale(value: number, scale: number, cap: number): number {
  if (value <= 0) {
    return 0;
  }

  return Math.min(value * scale, cap);
}
