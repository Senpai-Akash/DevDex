'use client';

import { forwardRef } from 'react';
import BannerPreview from './BannerPreview';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';

interface LinkedInBannerPreviewProps {
  data: CardData;
  theme: CardTheme;
  className?: string;
}

/**
 * Simple wrapper that forces BannerPreview to render a LinkedIn‑style banner.
 */
const LinkedInBannerPreview = forwardRef<HTMLDivElement, LinkedInBannerPreviewProps>(function LinkedInBannerPreview(
  { data, theme, className = '' },
  ref,
) {
  return (
    <BannerPreview
      ref={ref}
      variant="linkedin"
      data={data}
      theme={theme}
      className={className}
    />
  );
});

export default LinkedInBannerPreview;