'use client';

import { createElement, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardData } from '@/types/card';
import { CardTheme } from '@/types/theme';
import { ThemeSelector } from '@/components/theme/ThemeSelector';
import { getThemeComponent } from '@/lib/themes';
import { exportCard } from '@/lib/export/exportCard';

interface ProfileCardDisplayProps {
  cardData: CardData;
}

export function ProfileCardDisplay({ cardData }: ProfileCardDisplayProps) {
  const [activeTheme, setActiveTheme] = useState<CardTheme>('football');
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const CardComponent = getThemeComponent(activeTheme);

  const handleExport = async () => {
    if (!cardRef.current || isExporting) {
      return;
    }

    setIsExporting(true);

    try {
      await exportCard({
        element: cardRef.current,
        username: cardData.username,
        theme: activeTheme,
      });
    } finally {
      setIsExporting(false);
    }
  };

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

      <button
        type="button"
        onClick={handleExport}
        disabled={isExporting}
        className="rounded-full border border-amber-400/40 bg-amber-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-300 hover:bg-amber-500/20 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isExporting ? 'Exporting...' : 'Export Card'}
      </button>
    </div>
  );
}
