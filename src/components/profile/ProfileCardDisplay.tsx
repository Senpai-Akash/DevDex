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

export function ProfileCardDisplay({ cardData }: ProfileCardDisplayProps) {
  const [activeTheme, setActiveTheme] = useState<CardTheme>('football');
  console.log('Active theme:', activeTheme);
  const cardRef = useRef<HTMLDivElement>(null);
  const [showExportModal, setShowExportModal] = useState(false);

  const CardComponent = getThemeComponent(activeTheme);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showExportModal) {
        setShowExportModal(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [showExportModal]);



  return (
    <div className="flex flex-col items-center gap-8">
      <ThemeSelector activeTheme={activeTheme} onThemeChange={setActiveTheme} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div ref={cardRef} className="bg-transparent p-4">
            {createElement(CardComponent, { data: cardData })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Export trigger – opens the modal */}
      <button
        type="button"
        onClick={() => setShowExportModal(true)}
        className="rounded-full border border-amber-400/40 bg-amber-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-300 hover:bg-amber-500/20"
      >
        Export Card
      </button>

      {/* Export modal */}
      {showExportModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setShowExportModal(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={() => setShowExportModal(false)}
              className="absolute top-2 right-2 text-white/70 hover:text-white text-xl"
            >
              &times;
            </button>
            <ExportStudio cardRef={cardRef} username={cardData.username} theme={activeTheme} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
