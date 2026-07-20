'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface RPGPowerProps {
  data: CardData;
}

export function RPGPower({ data }: RPGPowerProps) {
  const rating = data.rating;
  
  // Format the Power Score as XP
  const xpVal = data.powerScore ?? (rating * 148 + 324);
  const xpFormatted = xpVal.toLocaleString();
  
  // Level is rating
  const level = rating;

  // Let's compute a progress percentage for the XP bar.
  // Say, the remainder of XP inside a hypothetical "current level bracket"
  const xpProgressPercent = Math.min(100, Math.max(10, (xpVal % 1000) / 10));

  return (
    <section aria-label="Experience and Level" className="w-full py-3 px-1 my-1 flex flex-col gap-2">
      <div className="flex items-end justify-between">
        {/* XP */}
        <div className="leading-tight">
          <p className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-orange-200/50 font-['Cinzel',serif]">
            Experience Points
          </p>
          <p className="text-xl font-black tracking-wide text-amber-100 font-['Cinzel',serif] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            XP <span className="text-amber-400">{xpFormatted}</span>
          </p>
        </div>

        {/* Level */}
        <div className="text-right leading-tight">
          <p className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-orange-200/50 font-['Cinzel',serif]">
            Character Level
          </p>
          <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-500 font-['Cinzel',serif] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Lv. {level}
          </p>
        </div>
      </div>

      {/* Fantasy XP Bar */}
      <div className="relative flex items-center">
        {/* Left Ornate Cap */}
        <div className="w-1.5 h-3 bg-amber-600 border border-amber-800 rounded-l-sm" />
        
        {/* The Bar Track */}
        <div className="relative flex-1 h-2 bg-[#0e0a07] border-y border-amber-900/60 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
            style={{ width: `${xpProgressPercent}%` }}
          />
          {/* Subtle line marks on XP track */}
          <div className="absolute inset-0 flex justify-around pointer-events-none opacity-25">
            <span className="h-full w-px bg-[#1d120a]" />
            <span className="h-full w-px bg-[#1d120a]" />
            <span className="h-full w-px bg-[#1d120a]" />
            <span className="h-full w-px bg-[#1d120a]" />
            <span className="h-full w-px bg-[#1d120a]" />
          </div>
        </div>

        {/* Right Ornate Cap */}
        <div className="w-1.5 h-3 bg-amber-600 border border-amber-800 rounded-r-sm" />
      </div>
    </section>
  );
}
