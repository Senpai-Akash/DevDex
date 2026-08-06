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

interface BannerPreviewProps {
  data: CardData;
  theme: CardTheme;
  /** Twitter/X or LinkedIn */
  variant: 'linkedin' | 'twitter';
  className?: string;
}

const DIMENSIONS = {
  linkedin: { width: 1584, height: 396 },
  twitter: { width: 1500, height: 500 },
} as const;

/**
 * BannerPreview renders a wide banner (LinkedIn or Twitter/X).
 *
 * Layout: developer card anchored on the right, profile details on the left.
 * The lower-left region is intentionally kept empty for LinkedIn because the
 * profile picture overlaps it.
 */
const BannerPreview = forwardRef<HTMLDivElement, BannerPreviewProps>(
  function BannerPreview({ data, theme, variant, className = '' }, ref) {
    const CardComponent = getThemeComponent(theme);
    const { width, height } = DIMENSIONS[variant];

    const cardWidth = Math.round(height * 0.7);
    const cardHeight = Math.round(height * 1.05);

    return (
      <div
        ref={ref}
        className={`relative isolate overflow-hidden text-white ${className}`}
        style={{ width, height }}
      >
        <BrandedBackground variant="aurora" />

        <div className="relative flex h-full w-full items-center justify-between gap-8 px-12">
          {/* Left: profile details. On LinkedIn we move them up to
              keep the lower-left empty for the profile photo. */}
          <div
            className={`flex max-w-[58%] flex-1 flex-col ${
              variant === 'linkedin' ? 'justify-start pt-8' : 'justify-center'
            }`}
          >
            <BrandedProfile data={data} orientation="horizontal" />
          </div>

          {/* Right: developer card scaled into the banner */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform: `translateY(${variant === 'linkedin' ? 6 : 0}%)`,
            }}
          >
            <div
              style={{
                transform: `scale(${cardWidth / 760})`,
                transformOrigin: 'center',
                width: 760,
                height: 1040,
              }}
            >
              {createElement(CardComponent, { data })}
            </div>
          </div>
        </div>

        <BrandedWatermark
          position={variant === 'linkedin' ? 'bottom-right' : 'bottom-left'}
        />
      </div>
    );
  }
);

export default BannerPreview;