'use client';

import { forwardRef } from 'react';
import { createElement } from 'react';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import { getThemeComponent } from '@/lib/themes';
import {
  BrandedBackground,
  BrandedWatermark,
} from '@/components/export/BrandedContent';

interface WallpaperPreviewProps {
  data: CardData;
  theme: CardTheme;
  variant: 'desktop' | 'mobile';
  className?: string;
}

/**
 * WallpaperPreview renders a full‑screen branding wallpaper.
 * Desktop – cinematic with atmospheric gradients.
 * Mobile – portrait lock‑screen respecting safe zones.
 */
const WallpaperPreview = forwardRef<HTMLDivElement, WallpaperPreviewProps>(function WallpaperPreview(
  { data, theme, variant, className = '' },
  ref,
) {
  const CardComponent = getThemeComponent(theme);
  const dimensions = {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 1080, height: 1920 },
  };
  const { width, height } = dimensions[variant];
  const isMobile = variant === 'mobile';

  // Card sizing
  const cardWidth = isMobile ? Math.round(width * 0.8) : Math.round(height * 0.42);
  const cardHeight = isMobile ? Math.round(height * 0.42) : Math.round(height * 0.94);
  const scale = cardWidth / 760;

  // Render tech badges (used in both layouts)
  const renderTech = () => {
    const techStack = data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 6) ?? [];
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {techStack.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white"
          >
            {t}
          </span>
        ))}
      </div>
    );
  };

  if (isMobile) {
    // Mobile portrait wallpaper
    return (
      <div
        ref={ref}
        className={'relative isolate overflow-hidden text-white ' + className}
        style={{ width, height }}
      >
        <BrandedBackground variant="sunset" />
        <div className="flex flex-col items-center justify-center h-full px-8 py-12 space-y-8">
          {/* Upper text */}
          <div className="text-center">
            <h1 className="text-5xl font-black text-white">{data.displayName}</h1>
            <p className="mt-1 text-xl font-semibold text-indigo-200">{data.role}</p>
            {renderTech()}
          </div>

          {/* Card in the middle */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: cardWidth, height: cardHeight }}
          >
            <div
              style={{
                transform: 'scale(' + scale + ')',
                transformOrigin: 'center',
                width: 760,
                height: 1040,
              }}
            >
              {createElement(CardComponent, { data })}
            </div>
          </div>

          <BrandedWatermark position="bottom-center" />
        </div>
      </div>
    );
  }

  // Desktop wallpaper – cinematic layout
  return (
    <div
      ref={ref}
      className={'relative isolate overflow-hidden text-white ' + className}
      style={{ width, height }}
    >
      <BrandedBackground variant="aurora" />
      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />
      <div className="relative flex h-full w-full items-center justify-between px-24">
        {/* Left side – typography */}
        <div className="flex max-w-[45%] flex-col justify-center space-y-4">
          <h1 className="text-6xl font-black text-white">{data.displayName}</h1>
          <p className="text-2xl font-semibold text-indigo-200">{data.role}</p>
          {renderTech()}
        </div>

        {/* Right side – developer card */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: cardWidth, height: cardHeight }}
        >
          {createElement(CardComponent, { data })}
        </div>

        <BrandedWatermark position="bottom-right" />
      </div>
    </div>
  );
});

export default WallpaperPreview;