'use client';

import { forwardRef } from 'react';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import CardPreview from './CardPreview';
import LinkedInBannerPreview from './LinkedInBannerPreview';
import TwitterHeaderPreview from './TwitterHeaderPreview';
import DesktopWallpaperPreview from './DesktopWallpaperPreview';
import MobileWallpaperPreview from './MobileWallpaperPreview';

/**
 * ExportOption renders a single export format tile inside ExportStudio.
 * It shows:
 *   • Live preview of the format
 *   • Title + platform icon
 *   • Short description
 *   • Recommended usage
 *   • Resolution information
 *
 * The `template` prop uses a loose type (`any`) to stay compatible with the
 * existing templateData shape.
 */
interface ExportOptionProps {
  data: CardData;
  theme: CardTheme;
  /** Shape matches the objects defined in templateData.ts */
  template: any;
}

/* Map template IDs to the appropriate preview component */
const previewMap: Record<string, React.ComponentType<any>> = {
  card: CardPreview,
  linkedin: LinkedInBannerPreview,
  twitter: TwitterHeaderPreview,
  desktop: DesktopWallpaperPreview,
  mobile: MobileWallpaperPreview,
};

const ExportOption = forwardRef<HTMLDivElement, ExportOptionProps>(function ExportOption(
  { data, theme, template },
  ref,
) {
  const Preview = previewMap[template.id] ?? CardPreview;

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-xl border border-white/10 bg-gray-900/50 p-4 backdrop-blur-lg"
    >
      {/* Header with icon and title */}
      <div className="mb-2 flex items-center space-x-2">
        {template.icon && (
          <img src={template.icon} alt={template.title} className="h-6 w-6 object-contain" />
        )}
        <h2 className="text-lg font-medium text-white">{template.title ?? 'Export Option'}</h2>
      </div>

      {/* Live preview */}
      <div className="relative mb-3 overflow-hidden rounded-md bg-gray-800">
        <Preview data={data} theme={theme} variant={template.variant ?? ''} />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300">{template.description ?? ''}</p>

      {/* Footer with usage & resolution */}
      <div className="mt-2 text-xs text-gray-400">
        {template.usage && <span>Recommended: {template.usage}</span>}
        {template.resolution && (
          <span className={template.usage ? 'ml-4' : ''}>Resolution: {template.resolution}</span>
        )}
      </div>
    </div>
  );
});

export default ExportOption;