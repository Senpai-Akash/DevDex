'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface YugiohHeaderProps {
  data: CardData;
}

export function YugiohHeader({ data }: YugiohHeaderProps) {
  const name = data.displayName.toUpperCase();
  const developerClass = (data.developerClass ?? data.role).toUpperCase();
  const tech = data.technology.toUpperCase();

  // Determine Attribute Emoji
  const getAttributeEmoji = (lang: string) => {
    const l = lang.toLowerCase();
    if (l.includes('typescript') || l.includes('javascript') || l.includes('js') || l.includes('ts')) return '⚡';
    if (l.includes('python') || l.includes('ai') || l.includes('machine')) return '🤖';
    if (l.includes('rust') || l.includes('c++') || l.includes('c ') || l.includes('ruby')) return '🔥';
    if (l.includes('go') || l.includes('swift') || l.includes('kotlin')) return '☁️';
    if (l.includes('html') || l.includes('css') || l.includes('design')) return '🎨';
    if (l.includes('php') || l.includes('java')) return '🌿';
    return '🔮';
  };

  const attribute = getAttributeEmoji(data.technology);

  // Convert Rating to stars (Level)
  const rating = data.rating;
  const starCount = Math.max(1, Math.min(12, Math.round(rating / 8.5))); // Maps ~80 rating to 9-10 stars

  return (
    <header className="relative flex flex-col border-b border-[#fcd34d]/25 pb-3 mb-3 select-none font-['Cinzel',serif]">
      {/* Top Bar: Primary Tech & Attribute */}
      <div className="flex items-center justify-between mb-2">
        {/* Primary Technology Label */}
        <div className="border border-[#ab8552] bg-[#1e140a]/80 px-2.5 py-0.5 rounded shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
          <span className="text-[0.62rem] font-black tracking-widest text-[#fcd34d]">
            [{tech}]
          </span>
        </div>

        {/* Attribute Circle Element */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#fcd34d] bg-[#3a2510] text-sm shadow-[0_0_8px_rgba(252,211,77,0.3)]">
            {attribute}
          </div>
          <span className="text-[0.55rem] font-bold text-stone-300 tracking-wider">ATTR</span>
        </div>
      </div>

      {/* Developer Name & Title */}
      <div className="flex flex-col">
        <h1 className="text-xl sm:text-2xl font-black tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] truncate">
          {name}
        </h1>
        <p className="text-[0.65rem] font-bold tracking-widest text-[#ab8552] uppercase mt-0.5">
          {developerClass}
        </p>
      </div>

      {/* Star Rating (Level Row) */}
      <div className="flex gap-1.5 mt-2 justify-start">
        {Array.from({ length: starCount }).map((_, i) => (
          <span key={i} className="text-xs text-[#fcd34d] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
            ★
          </span>
        ))}
      </div>
    </header>
  );
}
