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
 * CardPreview renders the developer card at full resolution.
 * Includes a subtle dark gradient background and soft shadow.
 */
const CardPreview = forwardRef<HTMLDivElement, CardPreviewProps>(function CardPreview(
  { data, theme, className = '' },
  ref,
) {
  const CardComponent = getThemeComponent(theme);

  return (
    <div
      ref={ref}
      className={'relative flex items-center justify-center ' + className + ' bg-gradient-to-b from-gray-900 via-purple-900 to-black rounded-2xl p-6 shadow-2xl overflow-hidden'}
      style={{ width: 760, height: 1040 }}
    >
      {/* Subtle particle / light speckle overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
      {createElement(CardComponent, { data })}
    </div>
  );
});

export default CardPreview;