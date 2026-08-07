'use client';

import { forwardRef } from 'react';
import WallpaperPreview from './WallpaperPreview';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';

interface MobileWallpaperPreviewProps {
  data: CardData;
  theme: CardTheme;
  className?: string;
}

/**
 * Wrapper for a mobile (portrait) wallpaper preview.
 */
const MobileWallpaperPreview = forwardRef<HTMLDivElement, MobileWallpaperPreviewProps>(function MobileWallpaperPreview(
  { data, theme, className = '' },
  ref,
) {
  return (
    <WallpaperPreview
      ref={ref}
      variant="mobile"
      data={data}
      theme={theme}
      className={className}
    />
  );
});

export default MobileWallpaperPreview;