'use client';

import { useState, useRef } from 'react';

import { AVAILABLE_THEMES, THEME_LABELS, type CardTheme } from '@/types/theme';
import type { CardData } from '@/types/card';
import { getThemeComponent, getThemeIcon } from '@/lib/themes';


interface ThemePreviewProps {
  cardData: CardData;
}

export default function ThemePreview({
  cardData,
}: ThemePreviewProps) {
  const [selectedTheme, setSelectedTheme] =
    useState<CardTheme>('football');

  const ActiveCard = getThemeComponent(selectedTheme);
  const cardRef = useRef<HTMLDivElement>(null);
  const username = (cardData as any)?.displayName || 'developer';

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">
            Theme Collection
          </p>

          <h2 className="mt-3 text-4xl font-black text-white">
            Choose Your Card Style
          </h2>

          <p className="mt-4 text-slate-400">
            Every GitHub profile can be transformed into multiple collectible
            card designs.
          </p>
        </div>

        {/* Theme Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {AVAILABLE_THEMES.map((theme) => (

            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`rounded-xl border px-5 py-3 transition-all duration-300 ${
                selectedTheme === theme
                  ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'
              }`}
            >
              <div className="text-xl">{getThemeIcon(theme)}</div>

              <div className="mt-2 text-sm font-semibold">
                {THEME_LABELS[theme]}
              </div>
            </button>

          ))}

        </div>

        {/* Preview */}

        <div className="mt-16 flex justify-center">
          <div ref={cardRef}>
            <ActiveCard data={cardData} />
          </div>
        </div>

      </div>
    </section>
  );
}