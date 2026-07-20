'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface YugiohAbilitiesProps {
  data: CardData;
}

export function YugiohAbilities({ data }: YugiohAbilitiesProps) {
  const role = (data.developerClass ?? data.role).toLowerCase();
  
  // Decide signature attacks dynamically
  let attack1 = 'Bug Fix';
  let attack2 = 'Feature Deploy';
  
  if (role.includes('front') || role.includes('ui') || role.includes('designer')) {
    attack1 = 'Frontend Fury';
    attack2 = 'CSS Blast';
  } else if (role.includes('back') || role.includes('arch') || role.includes('sys')) {
    attack1 = 'API Blast';
    attack2 = 'Database Shield';
  } else if (role.includes('ai') || role.includes('machine') || role.includes('data')) {
    attack1 = 'Neural Override';
    attack2 = 'Model Train';
  } else if (role.includes('security') || role.includes('cloud') || role.includes('devops')) {
    attack1 = 'Kernel Strike';
    attack2 = 'Cloud Sync';
  }

  // Derive powers
  const atkVal = Math.round((data.stats.attack ?? 80) * 35 + 500);
  const defVal = Math.round((data.stats.defense ?? 80) * 30 + 400);

  return (
    <section aria-label="Attacks & Actions" className="w-full bg-[#dfceb6] border-2 border-[#4b351d] p-3 rounded shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] text-[#2d1b0d] font-['Cinzel',serif] mb-3.5 select-none">
      <div className="flex flex-col gap-2">
        {/* Attack 1 */}
        <div className="flex items-center justify-between border-b border-[#4b351d]/15 pb-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[#855f30]">⚔️</span>
            <span className="text-xs font-bold text-[#2d1b0d] tracking-wider">{attack1.toUpperCase()}</span>
          </div>
          <span className="text-xs font-black tracking-wide text-[#855f30]">{atkVal} ATK</span>
        </div>

        {/* Attack 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[#855f30]">🛡️</span>
            <span className="text-xs font-bold text-[#2d1b0d] tracking-wider">{attack2.toUpperCase()}</span>
          </div>
          <span className="text-xs font-black tracking-wide text-[#855f30]">{defVal} DEF</span>
        </div>
      </div>
    </section>
  );
}
