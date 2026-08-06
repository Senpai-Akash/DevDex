'use client';

import { forwardRef } from 'react';
import { createElement } from 'react';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import { getThemeComponent } from '@/lib/themes';

interface CardPreviewProps {
  data: CardData;
  theme: CardTheme;
  className?: string;
}

/**
 * CardPreview renders the currently selected developer card with the
 * active theme. Used as the "Developer Card" export option (PNG).
 *
 * The component is exported in this wrapper so it can be sized
 * independently of the in-profile render and captured by html-to-image.
 */
const CardPreview = forwardRef<HTMLDivElement, CardPreviewProps>(
  function CardPreview({ data, theme, className = '' }, ref) {
    const CardComponent = getThemeComponent(theme);

    return (
      <div
        ref={ref}
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: 760, height: 1040 }}
      >
        {createElement(CardComponent, { data })}
      </div>
    );
  }
);

export default CardPreview;