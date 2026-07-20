'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface YugiohInfoProps {
  data: CardData;
}

export function YugiohInfo({ data }: YugiohInfoProps) {
  const role = data.developerClass ?? data.role;
  const trait = data.trait;
  const rating = data.rating;

  // Classify monster type
  let monsterType = 'Normal';
  if (rating >= 90) monsterType = 'Effect / Legendary';
  else if (rating >= 80) monsterType = 'Effect / Special';
  else if (rating >= 70) monsterType = 'Effect';

  return (
    <section className="w-full bg-[#dfceb6] border-2 border-[#4b351d] p-3 rounded shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] text-[#2d1b0d] font-['Cormorant_Garamond',serif] mb-3 select-none">
      {/* Card Type Header */}
      <div className="flex items-center justify-between border-b border-[#4b351d]/25 pb-1 mb-1.5 font-['Cinzel',serif] text-xs font-bold">
        <span>[{role.toUpperCase()} / {monsterType.toUpperCase()}]</span>
        <span className="text-[#ab8552]">ID: {data.username.toUpperCase()}</span>
      </div>

      {/* Lore / Description Text */}
      <p className="text-[0.82rem] leading-normal font-medium italic text-[#3c2918]">
        "A legendary developer whose presence dominates the codebase. Equipped with the signature trait <span className="font-bold not-italic text-[#4b351d] bg-[#4b351d]/5 px-1 rounded">{trait}</span>, they push features through firewalls and fix bugs with divine precision."
      </p>
    </section>
  );
}
