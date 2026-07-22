'use client';

import { createElement, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardData } from '@/types/card';
import { CardTheme } from '@/types/theme';
import { ThemeSelector } from '@/components/theme/ThemeSelector';
import { getThemeComponent } from '@/lib/themes';
import ExportStudio from '@/components/export/ExportStudio';

interface ProfileCardDisplayProps {
  cardData: CardData;
}

export function ProfileCardDisplay({
  cardData,
}: ProfileCardDisplayProps) {
  const [activeTheme, setActiveTheme] =
    useState<CardTheme>('football');

  const [showExportModal, setShowExportModal] =
    useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const CardComponent = getThemeComponent(activeTheme);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowExportModal(false);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  // Prevent page scrolling while modal is open
  useEffect(() => {
    if (showExportModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showExportModal]);

  return (
    <div className="flex flex-col items-center gap-8">

      <ThemeSelector
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <div
            ref={cardRef}
            className="bg-transparent p-4"
          >
            {createElement(CardComponent, {
              data: cardData,
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setShowExportModal(true)}
        className="rounded-full border border-amber-400/40 bg-amber-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 transition-all duration-300 hover:border-amber-300 hover:bg-amber-500/20 hover:scale-105"
      >
        Export Card
      </button>

      <AnimatePresence>

        {showExportModal && (

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowExportModal(false)}
          >

            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 25,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="relative w-[95vw] max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-2xl"
            >

              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
              >
                ✕
              </button>

              <ExportStudio
                cardRef={cardRef}
                username={cardData.username}
                theme={activeTheme}
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}