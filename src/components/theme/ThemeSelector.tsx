'use client';

import { motion } from 'framer-motion';
import { AVAILABLE_THEMES, THEME_LABELS, type CardTheme } from '@/types/theme';
import { getThemeIcon } from '@/lib/themes';

interface ThemeSelectorProps {
  activeTheme: CardTheme;
  onThemeChange: (theme: CardTheme) => void;
}

export function ThemeSelector({ activeTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-950/70 p-4 backdrop-blur-sm">
      {AVAILABLE_THEMES.map((theme) => {
        const isActive = activeTheme === theme;

        return (
          <motion.button
            key={theme}
            onClick={() => onThemeChange(theme)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
              isActive
                ? 'border-amber-400 bg-gradient-to-r from-amber-500/20 to-amber-600/10 text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.2)]'
                : 'border border-slate-600/60 text-slate-300 hover:border-slate-500 hover:bg-slate-800/50'
            }`}
          >
            <span className="mr-2">{getThemeIcon(theme)}</span>
            {THEME_LABELS[theme]}

            {isActive && (
              <motion.div
                layoutId="activeThemeBorder"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-0 rounded border-2 border-amber-400/50"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
