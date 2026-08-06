'use client';

import { forwardRef } from 'react';
import { createElement } from 'react';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import { getThemeComponent } from '@/lib/themes';
import {
  BrandedBackground,
  BrandedProfile,
  BrandedWatermark,
} from '@/components/export/BrandedContent';

interface WallpaperPreviewProps {
  data: CardData;
  theme: CardTheme;
  variant: 'desktop' | 'mobile';
  className?: string;
}

const DIMENSIONS = {
  desktop: { width: 1920, height: 1080 },
  mobile: { width: 1080, height: 1920 },
} as const;

/**
 * WallpaperPreview renders the developer profile as a desktop or
 * mobile wallpaper. Developer card is anchored on the right /
 * centered, profile details sit beside it.
 */
const WallpaperPreview = forwardRef<HTMLDivElement, WallpaperPreviewProps>(
  function WallpaperPreview({ data, theme, variant, className = '' }, ref) {
    const CardComponent = getThemeComponent(theme);
    const { width, height } = DIMENSIONS[variant];
    const isMobile = variant === 'mobile';

    const cardWidth = isMobile
      ? Math.round(width * 0.8)
      : Math.round(height * 0.42);
    const cardHeight = isMobile
      ? Math.round(height * 0.42)
      : Math.round(height * 0.94);
    const scale = cardWidth / 760;

    return (
      <div
        ref={ref}
        className={`relative isolate overflow-hidden text-white ${className}`}
        style={{ width, height }}
      >
        <BrandedBackground variant={isMobile ? 'sunset' : 'aurora'} />

        {isMobile ? (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-10 px-16 py-24">
            <div
              className="relative"
              style={{
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center',
                  width: 760,
                  height: 1040,
                }}
              >
                {createElement(CardComponent, { data })}
              </div>
            </div>

            <div className="max-w-[90%]">
              <BrandedProfile data={data} orientation="vertical" showLabel />
            </div>

            <BrandedWatermark position="bottom-center" />
          </div>
        ) : (
          <div className="relative flex h-full w-full items-center justify-between gap-16 px-24">
            <div className="flex max-w-[55%] flex-1 flex-col justify-center">
              <BrandedProfile data={data} orientation="horizontal" />
            </div>

            <div
              className="relative flex items-center justify-center"
              style={{ width: cardWidth, height: cardHeight }}
            >
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center',
                  width: 760,
                  height: 1040,
                }}
              >
                {createElement(CardComponent, { data })}
              </div>
            </div>

            <BrandedWatermark position="bottom-right" />
          </div>
        )}
      </div>
    );
  }
);

export default WallpaperPreview;