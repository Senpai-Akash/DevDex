/* eslint-disable @typescript-eslint/no-explicit-any */

export type ExportFormat = 'png' | 'jpeg';

export interface ExportElementOptions {
  element: HTMLElement;
  filename: string;
  format?: ExportFormat;
  /** Controls the output pixel ratio. 1 = element's natural size. */
  pixelRatio?: number;
  /** CSS background string applied behind the element. */
  backgroundColor?: string;
}

/**
 * Export a DOM element to a PNG/JPEG file using html-to-image.
 *
 * The element must be in the DOM when this is called.
 */
export async function exportElement({
  element,
  filename,
  format = 'png',
  pixelRatio = 1,
  backgroundColor,
}: ExportElementOptions): Promise<void> {
  const htmlToImage = await import('html-to-image');
  const fn = format === 'jpeg' ? htmlToImage.toJpeg : htmlToImage.toPng;

  const dataUrl = await fn(element, {
    pixelRatio,
    cacheBust: true,
    backgroundColor: backgroundColor ?? undefined,
  } as any);

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Backwards-compatible wrapper used by existing callers.
 */
export async function exportCard({
  element,
  filename,
  format,
  pixelRatio,
  background,
}: {
  element: HTMLElement;
  filename: string;
  format: ExportFormat;
  pixelRatio: number;
  background?: 'dark' | 'light' | 'transparent';
  includeWatermark?: boolean;
  includeShadow?: boolean;
  preserveCorners?: boolean;
}): Promise<void> {
  const backgroundColor =
    background === 'light'
      ? '#ffffff'
      : background === 'transparent'
      ? 'transparent'
      : '#0f172a';

  await exportElement({
    element,
    filename,
    format,
    pixelRatio,
    backgroundColor,
  });
}