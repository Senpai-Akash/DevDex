import { toPng } from "html-to-image";
import type { CardTheme } from "@/types/theme";

const EXPORT_PIXEL_RATIO = 3;
const FILE_PART_SEPARATOR = "-";

interface ExportCardOptions {
  element: HTMLElement;
  username: string;
  theme: CardTheme;
}

const sanitizeFilenamePart = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, FILE_PART_SEPARATOR)
    .replace(/^-+|-+$/g, "");

const buildFilename = (username: string, theme: CardTheme): string => {
  const safeUsername = sanitizeFilenamePart(username) || "developer";
  const safeTheme = sanitizeFilenamePart(theme) || "card";

  return `${safeUsername}-${safeTheme}-devdex.png`;
};

const downloadDataUrl = (dataUrl: string, filename: string): void => {
  const link = document.createElement("a");

  link.download = filename;
  link.href = dataUrl;
  link.click();
};

export async function exportCard({
  element,
  username,
  theme,
}: ExportCardOptions): Promise<void> {
  const dataUrl = await toPng(element, {
    pixelRatio: EXPORT_PIXEL_RATIO,
    cacheBust: true,
    backgroundColor: "transparent",
  });

  downloadDataUrl(dataUrl, buildFilename(username, theme));
}
