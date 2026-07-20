'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface CyberModulesProps {
  data: CardData;
}

export function CyberModules({ data }: CyberModulesProps) {
  const topAchievements = data.achievements.slice(0, 3);
  
  if (topAchievements.length === 0) {
    return null;
  }

  // Generate generic system module titles based on the index or description
  const getModuleTitle = (index: number) => {
    if (index === 0) return 'AI_CORE';
    if (index === 1) return 'NET_BOOST';
    return 'LANG_ENGINE';
  };

  const getModuleColor = (index: number) => {
    if (index === 0) return 'border-cyan-500/40 text-cyan-400 bg-cyan-950/10 shadow-[0_0_8px_rgba(34,211,238,0.15)]';
    if (index === 1) return 'border-magenta-500/40 text-magenta-400 bg-magenta-950/10 shadow-[0_0_8px_rgba(236,72,153,0.15)]';
    return 'border-purple-500/40 text-purple-400 bg-purple-950/10 shadow-[0_0_8px_rgba(168,85,247,0.15)]';
  };

  const getPinColor = (index: number) => {
    if (index === 0) return 'bg-cyan-500/65';
    if (index === 1) return 'bg-magenta-500/65';
    return 'bg-purple-500/65';
  };

  return (
    <section aria-label="System Modules" className="w-full space-y-2 py-2 font-['Share_Tech_Mono',monospace]">
      <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.3em] text-cyan-400/50">
        INSTALLED_MODULES //
      </p>
      
      <div className="flex flex-col gap-2 max-w-[440px] mx-auto">
        {topAchievements.map((achievement, idx) => (
          <div key={achievement.id || idx} className="relative flex items-center">
            
            {/* Left Microchip Connection Pins */}
            <div className="flex flex-col gap-1 pr-1.5 select-none">
              <span className={`h-1 w-1.5 rounded-sm ${getPinColor(idx)}`} />
              <span className={`h-1 w-1.5 rounded-sm ${getPinColor(idx)}`} />
              <span className={`h-1 w-1.5 rounded-sm ${getPinColor(idx)}`} />
            </div>

            {/* The Microchip Body */}
            <div
              className={`flex-1 flex flex-col p-2.5 border rounded-sm ${getModuleColor(idx)} transition duration-300 hover:brightness-110`}
            >
              <div className="flex items-baseline justify-between gap-2 border-b border-current/15 pb-1 mb-1">
                <span className="text-[0.58rem] font-bold tracking-widest uppercase">
                  MOD_{idx + 1} // {getModuleTitle(idx)}
                </span>
                <span className="text-[0.45rem] font-bold px-1 rounded bg-slate-950/60 uppercase tracking-widest scale-90">
                  ONLINE
                </span>
              </div>
              <p className="truncate text-xs font-bold text-white uppercase tracking-wider">
                {achievement.title}
              </p>
              <p className="truncate text-[0.62rem] text-cyan-200/60 font-semibold tracking-wide mt-0.5">
                {achievement.description}
              </p>
            </div>

            {/* Right Microchip Connection Pins */}
            <div className="flex flex-col gap-1 pl-1.5 select-none">
              <span className={`h-1 w-1.5 rounded-sm ${getPinColor(idx)}`} />
              <span className={`h-1 w-1.5 rounded-sm ${getPinColor(idx)}`} />
              <span className={`h-1 w-1.5 rounded-sm ${getPinColor(idx)}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
