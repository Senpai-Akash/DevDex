'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface RPGHeaderProps {
  data: CardData;
}

export function RPGHeader({ data }: RPGHeaderProps) {
  const name = data.displayName;
  const developerClass = data.developerClass ?? data.role;
  
  // Calculate a beautiful Rank if it is not provided
  let rank = data.rank;
  if (!rank) {
    const rating = data.rating;
    if (rating >= 95) rank = 'SSS';
    else if (rating >= 90) rank = 'SS';
    else if (rating >= 85) rank = 'S';
    else if (rating >= 75) rank = 'A';
    else if (rating >= 65) rank = 'B';
    else rank = 'C';
  }

  // Choose color based on rank
  const getRankColor = (r: string) => {
    if (r.startsWith('S')) return 'from-yellow-200 via-amber-400 to-yellow-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]';
    if (r === 'A') return 'from-red-300 via-red-500 to-red-700 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]';
    if (r === 'B') return 'from-blue-300 via-blue-500 to-blue-700 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]';
    return 'from-stone-300 via-stone-400 to-stone-600';
  };

  return (
    <header className="relative flex items-center justify-between border-b border-amber-900/30 pb-3 mb-3">
      {/* Small fantasy filigree line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
      <div className="flex-1 min-w-0 pr-4">
        {/* Small Fantasy Title / Category */}
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.25em] text-amber-500/80 font-['Cinzel',serif]">
          🛡️ Legendary Adventurer
        </p>
        
        {/* Character Name */}
        <h1 className="mt-0.5 text-2xl sm:text-3xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-100 font-['Cinzel',serif] truncate leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {name}
        </h1>
        
        {/* Developer Class */}
        <p className="text-[0.72rem] font-semibold tracking-[0.15em] text-orange-200/70 font-['Marcellus',serif] italic capitalize truncate mt-0.5">
          {developerClass}
        </p>
      </div>

      {/* Ornate Rank Shield Badge */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 select-none">
        {/* Magical aura behind badge */}
        <div className="absolute inset-0.5 rounded-full bg-amber-500/10 blur-sm animate-[pulse_3s_infinite]" />
        
        {/* Shield Frame */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-amber-600 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
          {/* Ornate metallic shield back */}
          <path 
            d="M 50 5 L 85 20 L 85 55 C 85 75 68 90 50 95 C 32 90 15 75 15 55 L 15 20 Z" 
            fill="#1d120a" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinejoin="miter" 
          />
          {/* Inner bronze border */}
          <path 
            d="M 50 11 L 80 24 L 80 54 C 80 71 66 84 50 89 C 34 84 20 71 20 54 L 20 24 Z" 
            fill="none" 
            stroke="#b45309" 
            strokeWidth="2.5" 
          />
          {/* Corner gems or highlights */}
          <circle cx="50" cy="11" r="2" fill="#fcd34d" />
        </svg>

        {/* Rank Text */}
        <span className={`relative text-lg font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b ${getRankColor(rank)} font-['Cinzel',serif] leading-none mt-1`}>
          {rank}
        </span>
      </div>
    </header>
  );
}
