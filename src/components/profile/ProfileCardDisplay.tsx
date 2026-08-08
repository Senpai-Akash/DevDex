'use client';

import { createElement, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardData } from '@/types/card';
import { CardTheme } from '@/types/theme';
import { ThemeSelector } from '@/components/theme/ThemeSelector';
import { getThemeComponent } from '@/lib/themes';
import ExportStudio from '@/components/export/ExportStudio';
import CardReveal from "@/components/opening/CardReveal";

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
            className="relative flex w-full justify-center bg-transparent py-4"
          >
            <CardReveal rarity={cardData.rarity}>
              {createElement(CardComponent, {
                data: cardData,
              })}
            </CardReveal>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Single, focused call-to-action — the Profile page stays clean */}
      <button
        type="button"
        onClick={() => setShowExportModal(true)}
        className="rounded-full border border-indigo-400/40 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-cyan-500/15 px-7 py-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.03] hover:border-indigo-300 hover:from-indigo-500/30 hover:via-purple-500/30 hover:to-cyan-500/30 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.6)]"
      >
        Open Export Studio
      </button>

       <AnimatePresence>
         {showExportModal && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-950/80 p-4 backdrop-blur-md"
           >
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative h-full max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl shadow-black/50"
             >
               <button
                 onClick={() => setShowExportModal(false)}
                 className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                 aria-label="Close Export Studio"
               >
                 ✕
               </button>

               <ExportStudio
                 cardData={cardData}
                 theme={activeTheme}
                 onClose={() => setShowExportModal(false)}
               />
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>

    </div>
  );
}