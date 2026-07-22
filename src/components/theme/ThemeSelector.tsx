"use client";

import { motion } from "framer-motion";
import { AVAILABLE_THEMES, THEME_LABELS, type CardTheme } from "@/types/theme";
import { getThemeIcon } from "@/lib/themes";

const THEME_COLORS: Record<CardTheme, string> = {
  football: "rgba(251,191,36,0.35)",
  pokemon: "rgba(255,230,0,0.35)",
  rpg: "rgba(34,197,94,0.35)",
  cyber: "rgba(6,182,212,0.35)",
  yugioh: "rgba(168,85,247,0.35)",
};

interface ThemeSelectorProps {
  activeTheme: CardTheme;
  onThemeChange: (theme: CardTheme) => void;
}

export function ThemeSelector({
  activeTheme,
  onThemeChange,
}: ThemeSelectorProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-amber-400">
          COLLECTIBLE EDITIONS
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Choose Your Theme
        </h2>

        <p className="mt-4 text-slate-400">
          Select a card style for your GitHub profile.
        </p>
      </div>

      <div className="flex justify-center gap-8">
        {AVAILABLE_THEMES.map((theme) => {
          const active = activeTheme === theme;

          return (
            <motion.button
              key={theme}
              onClick={() => onThemeChange(theme)}
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              animate={{
                scale: active ? 1.05 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              style={{
                boxShadow: active
                  ? `0 0 35px ${THEME_COLORS[theme]}`
                  : undefined,
              }}
              className={`relative flex h-[160px] w-[160px] flex-shrink-0 flex-col items-center justify-center rounded-3xl border transition-all duration-300
  ${
    active
      ? "border-amber-400 bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-slate-900"
      : "border-slate-700 bg-slate-900/70 hover:border-slate-500"
  }`}
            >
              {active && (
                <motion.div
                  layoutId="theme-active-border"
                  className="absolute inset-0 rounded-3xl border-2 border-amber-400"
                />
              )}

              <motion.div
                animate={
                  active
                    ? {
                        rotate: [0, -10, 10, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 0.7,
                }}
                className="mb-4 text-6xl"
              >
                {getThemeIcon(theme)}
              </motion.div>

              <h3
                className={`text-lg font-bold ${
                  active ? "text-amber-100" : "text-white"
                }`}
              >
                {THEME_LABELS[theme]}
              </h3>

              {active && (
                <motion.div
                  layoutId="theme-active"
                  className="absolute bottom-4 rounded-full bg-amber-400 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-900"
                >
                  Active
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
