'use client';

import { forwardRef } from 'react';
import BannerPreview from './BannerPreview';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';

interface TwitterHeaderPreviewProps {
  data: CardData;
  theme: CardTheme;
  className?: string;
}

/**
 * Wrapper that forces BannerPreview to render a Twitter/X header.
 */
const TwitterHeaderPreview = forwardRef<HTMLDivElement, TwitterHeaderPreviewProps>(function TwitterHeaderPreview(
  { data, theme, className = '' },
  ref,
) {
  return (
    <BannerPreview
      ref={ref}
      variant="twitter"
      data={data}
      theme={theme}
      className={className}
    />
  );
});

export default TwitterHeaderPreview;