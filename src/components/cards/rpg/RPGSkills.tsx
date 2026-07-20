'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface RPGSkillsProps {
  data: CardData;
}

export function RPGSkills({ data }: RPGSkillsProps) {
  const topAchievements = data.achievements.slice(0, 3);
  
  if (topAchievements.length === 0) {
    return null;
  }

  // Get a fun fantasy skill classification tag based on index
  const getSkillTag = (index: number) => {
    if (index === 0) return 'Passive';
    if (index === 1) return 'Active';
    return 'Ultimate';
  };

  const getTagStyle = (index: number) => {
    if (index === 0) return 'text-emerald-400 border-emerald-950/60 bg-emerald-950/20';
    if (index === 1) return 'text-blue-400 border-blue-950/60 bg-blue-950/20';
    return 'text-purple-400 border-purple-950/60 bg-purple-950/20';
  };

  return (
    <section aria-label="Character Skills" className="w-full space-y-2 py-2">
      <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.3em] text-orange-200/40 font-['Cinzel',serif]">
        Active Skills & Traits
      </p>
      
      <div className="flex flex-col gap-2 max-w-[440px] mx-auto">
        {topAchievements.map((achievement, idx) => (
          <div
            key={achievement.id || idx}
            className="group flex items-center gap-3 p-2 rounded border border-amber-900/35 bg-[#140e0b]/80 shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:border-[#b45309]/60 hover:bg-[#1a120e]/90"
          >
            {/* Ornate Skill Icon Slot */}
            <div className="flex-shrink-0 relative flex h-10 w-10 items-center justify-center rounded border border-[#b45309]/80 bg-[#27170c] shadow-[inset_0_0_6px_rgba(0,0,0,0.8)]">
              <span className="text-lg drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]" aria-hidden="true">
                {achievement.icon || '✨'}
              </span>
              {/* Corner brackets for icon */}
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-amber-400/50" />
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-amber-400/50" />
              <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-amber-400/50" />
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-amber-400/50" />
            </div>

            {/* Title and Description */}
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate text-xs font-black uppercase tracking-wider text-amber-200 font-['Cinzel',serif] group-hover:text-amber-100 transition-colors">
                  {achievement.title}
                </p>
                <span className={`text-[0.52rem] font-bold uppercase px-1.5 py-0.5 rounded border ${getTagStyle(idx)} font-['Cinzel',serif] tracking-widest flex-shrink-0 scale-90 origin-right`}>
                  {getSkillTag(idx)}
                </span>
              </div>
              <p className="truncate text-[0.62rem] leading-normal text-stone-300/80 font-['Marcellus',serif]">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
