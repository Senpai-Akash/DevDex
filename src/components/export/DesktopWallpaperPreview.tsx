'use client';

import { forwardRef } from 'react';
import WallpaperPreview from './WallpaperPreview';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';

interface DesktopWallpaperPreviewProps {
  data: CardData;
  theme: CardTheme;
  className?: string;
}

/**
 * Wrapper for a desktop‑oriented wallpaper preview.
 */
const DesktopWallpaperPreview = forwardRef<HTMLDivElement, DesktopWallpaperPreviewProps>(function DesktopWallpaperPreview(
  { data, theme, className = '' },
  ref,
) {
  return (
    <WallpaperPreview
      ref={ref}
      variant="desktop"
      data={data}
      theme={theme}
      className={className}
    />
  );
});

export default DesktopWallpaperPreview;