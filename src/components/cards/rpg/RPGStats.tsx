'use client';

import React from 'react';
import { CardStats } from '../../../types/card';

interface RPGStatsProps {
  stats: CardStats;
}

interface StatConfig {
  key: keyof CardStats;
  label: string;
  icon: string;
  gradientClass: string;
  glowColor: string;
}

const STATS_CONFIG: StatConfig[] = [
  { 
    key: 'attack', 
    label: 'Strength', 
    icon: '⚔️', 
    gradientClass: 'from-red-800 via-red-600 to-red-500',
    glowColor: 'rgba(239, 68, 68, 0.4)' 
  },
  { 
    key: 'defense', 
    label: 'Defense', 
    icon: '🛡️', 
    gradientClass: 'from-stone-700 via-amber-700 to-amber-600',
    glowColor: 'rgba(217, 119, 6, 0.3)'
  },
  { 
    key: 'intelligence', 
    label: 'Intelligence', 
    icon: '🧠', 
    gradientClass: 'from-blue-900 via-blue-600 to-cyan-500',
    glowColor: 'rgba(6, 182, 212, 0.4)' 
  },
  { 
    key: 'speed', 
    label: 'Agility', 
    icon: '⚡', 
    gradientClass: 'from-emerald-800 via-emerald-600 to-emerald-400',
    glowColor: 'rgba(52, 211, 153, 0.4)'
  },
  { 
    key: 'versatility', 
    label: 'Luck', 
    icon: '🍀', 
    gradientClass: 'from-yellow-700 via-amber-500 to-yellow-400',
    glowColor: 'rgba(251, 191, 36, 0.4)'
  },
  { 
    key: 'teamwork', 
    label: 'Vitality', 
    icon: '❤️', 
    gradientClass: 'from-rose-800 via-rose-600 to-rose-500',
    glowColor: 'rgba(244, 63, 94, 0.4)'
  },
];

export function RPGStats({ stats }: RPGStatsProps) {
  return (
    <section aria-label="Character Stats" className="w-full py-2.5 px-1 border-y border-amber-900/30">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
        {STATS_CONFIG.map((cfg) => {
          const val = Math.min(100, Math.max(0, Math.round(stats[cfg.key] || 50)));
          return (
            <div key={cfg.key} className="flex flex-col">
              {/* Stat Name, Icon and Numeric Value */}
              <div className="flex items-center justify-between text-[0.68rem] font-bold tracking-wider font-['Cinzel',serif] text-orange-100/90 mb-1">
                <span className="flex items-center gap-1">
                  <span>{cfg.icon}</span>
                  <span className="text-[0.62rem] uppercase">{cfg.label}</span>
                </span>
                <span className="font-semibold text-amber-300">{val}</span>
              </div>
              
              {/* Fantasy Progress Bar */}
              <div className="relative h-3 w-full rounded-sm bg-[#0e0a07] border border-[#78350f]/60 overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                {/* Background slab gridlines for notches */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-25">
                  <span className="h-full w-px bg-amber-950" />
                  <span className="h-full w-px bg-amber-950" />
                  <span className="h-full w-px bg-amber-950" />
                  <span className="h-full w-px bg-amber-950" />
                </div>

                {/* Progress fill */}
                <div 
                  className={`h-full rounded-l-sm bg-gradient-to-r ${cfg.gradientClass} relative`}
                  style={{ 
                    width: `${val}%`,
                    boxShadow: `0 0 10px ${cfg.glowColor}`
                  }}
                >
                  {/* Subtle inner glare on the bar */}
                  <div className="absolute inset-x-0 top-0 h-[30%] bg-white/20" />
                  {/* Liquid shimmer effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[pulse_2s_infinite]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
