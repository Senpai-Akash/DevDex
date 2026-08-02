'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import {
  AVAILABLE_THEMES,
  THEME_LABELS,
  type CardTheme,
} from '@/types/theme';

import type { CardData } from '@/types/card';

import {
  getThemeComponent,
  getThemeIcon,
} from '@/lib/themes';

interface ThemePreviewProps {
  cardData: CardData;
}

export default function ThemePreview({
  cardData,
}: ThemePreviewProps) {
  const [selectedTheme, setSelectedTheme] =
    useState<CardTheme>('football');

  const currentIndex = AVAILABLE_THEMES.indexOf(selectedTheme);

  const ActiveCard = useMemo(
    () => getThemeComponent(selectedTheme),
    [selectedTheme]
  );

  function previousTheme() {
    const index =
      (currentIndex - 1 + AVAILABLE_THEMES.length) %
      AVAILABLE_THEMES.length;

    setSelectedTheme(AVAILABLE_THEMES[index]);
  }

  function nextTheme() {
    const index =
      (currentIndex + 1) %
      AVAILABLE_THEMES.length;

    setSelectedTheme(AVAILABLE_THEMES[index]);
  }

  return (
    <section className="w-full py-24 overflow-x-hidden">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-indigo-400">
            Theme Collection
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Choose Your Style
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Every GitHub profile can become a completely different
            collectible card.
          </p>

        </div>
                {/* Theme Selector */}

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          {AVAILABLE_THEMES.map((theme) => {

            const active =
              selectedTheme === theme;

            return (

              <motion.button
                key={theme}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setSelectedTheme(theme)}
className={`
  relative
  w-full sm:w-40
  h-auto
  min-h-[145px]
  overflow-hidden
  rounded-[32px]               /* smoother, premium corner radius */
  border
  transition-all
  duration-300
  shadow-lg                     /* deeper shadow for depth */
  ${active
    ? 'border-amber-400 bg-gradient-to-b from-amber-400/40 via-yellow-500/20 to-slate-900/95 shadow-[0_0_100px_rgba(251,191,36,.7)] hover:shadow-[0_0_120px_rgba(251,191,36,.9)]'
    : 'border-slate-700 bg-slate-900/85 hover:border-indigo-500 hover:shadow-[0_0_80px_rgba(100,149,237,.7)]'
  }
  hover:scale-105 hover:scale-[1.03]   /* subtle scaling on hover */
`}
>

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/5
                    via-transparent
                    to-transparent
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                  "
                >

                  <div className="text-5xl">
                    {getThemeIcon(theme)}
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white">
                    {THEME_LABELS[theme]}
                  </h3>

                  {active && (

                    <div
                      className="
                        absolute
                        bottom-4
                        rounded-full
                        bg-amber-400
                        px-4
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-black
                      "
                    >
                      ✓ Selected
                    </div>

                  )}

                </div>

              </motion.button>

            );

          })}

        </div>

        {/* Card Preview */}

        <div
          className="
            mt-20
            w-full
            max-w-full
            rounded-[48px]               /* larger radius for premium feel */
            border
            border-[3px]                 /* slightly thicker border */
            border-slate-700/70           /* subtle, softer border */
            bg-gradient-to-b
            from-[#181818]               /* deeper base */
            via-[#0f0f0f]                /* richer middle */
            to-[#000000]                 /* true black depth */
            p-6 sm:p-8 lg:p-12            /* more breathing room */
            shadow-[0_0_40px_rgba(255,215,0,.3),0_0_120px_rgba(255,215,0,.07)] /* premium gold glow */
          "
        >

          <div className="flex justify-center">
                      <AnimatePresence mode="wait">

            <motion.div
              key={selectedTheme}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: -20,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <ActiveCard data={cardData} />
            </motion.div>

          </AnimatePresence>

          </div>

          {/* Navigation */}

          <div className="mt-12 flex items-center justify-center gap-6">

            <button
              onClick={previousTheme}
              className="
                rounded-full
                border
                border-slate-700
                bg-slate-900
                px-6
                py-3
                text-sm
                font-semibold
                text-slate-200
                transition-all
                hover:border-indigo-500
                hover:bg-slate-800
              "
            >
              ← Previous
            </button>

            <div
              className="
                rounded-full
                border
                border-slate-800
                bg-slate-900/70
                px-5
                py-2
                text-xs
                uppercase
                tracking-[0.35em]
                text-slate-400
              "
            >
              {currentIndex + 1} / {AVAILABLE_THEMES.length}
            </div>

            <button
              onClick={nextTheme}
              className="
                rounded-full
                border
                border-slate-700
                bg-slate-900
                px-6
                py-3
                text-sm
                font-semibold
                text-slate-200
                transition-all
                hover:border-indigo-500
                hover:bg-slate-800
              "
            >
              Next →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}