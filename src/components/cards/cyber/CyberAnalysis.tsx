'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface CyberAnalysisProps {
  data: CardData;
}

export function CyberAnalysis({ data }: CyberAnalysisProps) {
  const developerClass = data.developerClass ?? data.role;
  const rating = data.rating;
  
  // Power score
  const powerVal = data.powerScore ?? (rating * 115 + 180);
  const powerFormatted = powerVal.toLocaleString();
  
  // Rank
  let rank = data.rank;
  if (!rank) {
    if (rating >= 95) rank = 'SSS';
    else if (rating >= 90) rank = 'SS';
    else if (rating >= 85) rank = 'S';
    else if (rating >= 75) rank = 'A';
    else if (rating >= 65) rank = 'B';
    else rank = 'C';
  }

  // Abbreviated class name to fit well in panel
  const getShortClass = (cls: string) => {
    const uppercaseCls = cls.toUpperCase();
    if (uppercaseCls.includes('FRONT') || uppercaseCls.includes('UI')) return 'FRONTEND';
    if (uppercaseCls.includes('BACK') || uppercaseCls.includes('ARCH')) return 'BACKEND';
    if (uppercaseCls.includes('FULL')) return 'FULLSTACK';
    if (uppercaseCls.includes('GUARD')) return 'GUARDIAN';
    if (uppercaseCls.includes('HERO')) return 'HERO';
    return uppercaseCls.split(' ')[0] || 'ADVENTURER';
  };

  const shortClass = getShortClass(developerClass);

  return (
    <section aria-label="System Identity Scan" className="w-full py-3 px-1 my-1 font-['Share_Tech_Mono',monospace]">
      <div className="grid grid-cols-3 gap-3">
        
        {/* Class Panel */}
        <div className="relative bg-slate-950/70 border border-cyan-500/20 p-2 rounded-sm flex flex-col items-center justify-center text-center shadow-[inset_0_0_8px_rgba(6,182,212,0.1)]">
          <span className="text-[0.48rem] tracking-[0.2em] text-cyan-400 font-bold uppercase mb-1">
            CLASS //
          </span>
          <span className="text-[0.72rem] font-bold text-white tracking-widest font-['Orbitron',sans-serif] truncate w-full">
            {shortClass}
          </span>
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan-400" />
        </div>
        
        {/* Rank Panel */}
        <div className="relative bg-slate-950/70 border border-cyan-500/20 p-2 rounded-sm flex flex-col items-center justify-center text-center shadow-[inset_0_0_8px_rgba(6,182,212,0.1)]">
          <span className="text-[0.48rem] tracking-[0.2em] text-cyan-400 font-bold uppercase mb-1">
            RANK //
          </span>
          <span className="text-[0.8rem] font-black text-magenta-400 tracking-wider font-['Orbitron',sans-serif]">
            {rank}
          </span>
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan-400" />
        </div>
        
        {/* Processing Power Panel */}
        <div className="relative bg-slate-950/70 border border-cyan-500/20 p-2 rounded-sm flex flex-col items-center justify-center text-center shadow-[inset_0_0_8px_rgba(6,182,212,0.1)]">
          <span className="text-[0.48rem] tracking-[0.2em] text-cyan-400 font-bold uppercase mb-1">
            SYS_PWR //
          </span>
          <span className="text-[0.75rem] font-black text-white font-['Orbitron',sans-serif] tracking-wider">
            {powerFormatted}
          </span>
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan-400" />
        </div>
      </div>
    </section>
  );
}
