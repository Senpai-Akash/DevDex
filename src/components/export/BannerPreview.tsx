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

interface BannerPreviewProps {
  data: CardData;
  theme: CardTheme;
  /** LinkedIn or Twitter/X */
  variant: 'linkedin' | 'twitter';
  className?: string;
}

/**
 * BannerPreview renders a platform‑specific banner.
 * LinkedIn – clean professional layout.
 * Twitter/X – bold expressive layout.
 */
const BannerPreview = forwardRef<HTMLDivElement, BannerPreviewProps>(function BannerPreview(
  { data, theme, variant, className = '' },
  ref,
) {
  const CardComponent = getThemeComponent(theme);
  const { width, height } = variant === 'linkedin'
    ? { width: 1584, height: 396 }
    : { width: 1500, height: 500 };

  // Card sizing based on banner height
  const cardWidth = Math.round(height * 0.7);
  const cardHeight = Math.round(height * 1.05);
  const scale = cardWidth / 760;

  // Render tech badges (up to 6)
  const renderTech = () => {
    const techStack = data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 6) ?? [];
    return (
      <div className="flex flex-wrap gap-2 mt-3">
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

  if (variant === 'linkedin') {
    // LinkedIn layout – respects profile picture safe area (lower‑left empty)
    return (
      <div
        ref={ref}
        className={'relative isolate overflow-hidden text-white ' + className}
        style={{ width, height }}
      >
        <BrandedBackground variant="aurora" />
        <div className="relative h-full w-full p-8">
          {/* Text block */}
          <div className="max-w-[60%]">
            <h1 className="text-5xl font-black text-white">{data.displayName}</h1>
            <p className="mt-1 text-xl font-semibold text-indigo-200">{data.role}</p>
            {renderTech()}
          </div>

          {/* Card positioned bottom‑right */}
          <div
            className="absolute bottom-8 right-8"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform: 'scale(' + scale + ')',
              transformOrigin: 'bottom right',
            }}
          >
            {createElement(CardComponent, { data })}
          </div>

          <BrandedWatermark position="bottom-left" />
        </div>
      </div>
    );
  }

  // Twitter / X layout – bold and dynamic
  return (
    <div
      ref={ref}
      className={'relative isolate overflow-hidden text-white ' + className}
      style={{ width, height }}
    >
      <BrandedBackground variant="sunset" />
      <div className="relative flex h-full w-full items-center justify-between px-12">
        {/* Left side – name, role, tech */}
        <div className="flex max-w-[45%] flex-col">
          <h1 className="text-6xl font-black text-white">{data.displayName}</h1>
          <p className="mt-1 text-2xl font-semibold text-indigo-200">{data.role}</p>
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

export default BannerPreview;