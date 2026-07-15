'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardData } from '@/types/card';
import { CardTheme } from '@/types/theme';
import { ThemeSelector } from '@/components/theme/ThemeSelector';
import { getThemeComponent } from '@/lib/themes';

interface ProfileCardDisplayProps {
  cardData: CardData;
}

export function ProfileCardDisplay({ cardData }: ProfileCardDisplayProps) {
  const [activeTheme, setActiveTheme] = useState<CardTheme>('football');

  const CardComponent = getThemeComponent(activeTheme);

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
          <CardComponent data={cardData} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
