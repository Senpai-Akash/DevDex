'use client';
import CardReveal from "@/components/opening/CardReveal";
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

<div className="mt-12 flex flex-wrap justify-center gap-6">

  {AVAILABLE_THEMES.map((theme) => {

    const active = selectedTheme === theme;

    return (
      <button
        key={theme}
        onClick={() => setSelectedTheme(theme)}
        className={`
          group
          relative
          h-[120px]
          w-[120px]
          overflow-hidden
          rounded-2xl
          border
          transition-all
          duration-300
          ${
            active
              ? 'border-amber-400 bg-gradient-to-b from-amber-500/20 to-amber-900/20 shadow-[0_0_35px_rgba(251,191,36,.35)]'
              : 'border-slate-700 bg-slate-900 hover:border-indigo-500 hover:-translate-y-1 hover:shadow-xl'
          }
        `}
      >

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/5
            to-transparent
          "
        />

        <div className="relative flex h-full flex-col items-center justify-center">

          <div className="text-4xl">
            {getThemeIcon(theme)}
          </div>

          <div className="mt-4 text-sm font-semibold text-white">
            {THEME_LABELS[theme]}
          </div>

          {active && (
            <div
              className="
                absolute
                bottom-3
                rounded-full
                bg-amber-400
                px-3
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-black
              "
            >
              Active
            </div>
          )}

        </div>

      </button>
    );

  })}

</div>

        {/* Preview */}

        <div className="mt-16 flex justify-center">
          <div ref={cardRef}>
    <CardReveal>
        <ActiveCard data={cardData} />
    </CardReveal>
</div>
        </div>

      </div>
    </section>
  );
}

