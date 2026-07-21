import { toPng, toJpeg } from 'html-to-image';

interface ExportCardOptions {
  element: HTMLElement;
  filename: string;
  format: 'png' | 'jpeg';
  pixelRatio: number;
  background?: 'dark' | 'light' | 'transparent';
  includeWatermark?: boolean;
  includeShadow?: boolean;
  preserveCorners?: boolean;
}

export async function exportCard({
  element,
  filename,
  format,
  pixelRatio,
  background,
  includeWatermark,
  includeShadow,
  preserveCorners,
}: ExportCardOptions): Promise<void> {
  // For now, ignore background, watermark, shadow, and corner options.
  const dataUrl = await (format === 'png' ? toPng(element, { pixelRatio }) : toJpeg(element, { pixelRatio }));
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  link.click();
}
