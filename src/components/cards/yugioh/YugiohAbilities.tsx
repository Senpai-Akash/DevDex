'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface YugiohAbilitiesProps {
  data: CardData;
}

export function YugiohAbilities({ data }: YugiohAbilitiesProps) {
  const role = (data.developerClass ?? data.role).toLowerCase();

  let effect1 = 'When this card is summoned, increase all allied developers by 15% productivity.';
  let effect2 = 'Once per turn: negate one critical bug and immediately deploy a stable build.';

  if (role.includes('front') || role.includes('ui')) {
    effect1 =
      'When this card is summoned: all UI-based monsters gain 400 ATK until the end of the turn.';
    effect2 =
      'Once per turn: render any interface instantly without consuming resources.';
  } else if (role.includes('back')) {
    effect1 =
      'If this card is face-up: API latency becomes 0 for one full turn.';
    effect2 =
      'Negate one database failure and recover 500 system integrity.';
  } else if (role.includes('ai')) {
    effect1 =
      'Predict your opponent’s next move and draw one additional card.';
    effect2 =
      'Copy one activated ability on the field and use it immediately.';
  } else if (role.includes('security')) {
    effect1 =
      'Prevent all cyber attacks targeting your field this turn.';
    effect2 =
      'Destroy one malicious process and recover 600 DEF.';
  }

  const atk = Math.round((data.stats.attack ?? 80) * 35 + 500);
  const def = Math.round((data.stats.defense ?? 80) * 30 + 400);

  return (
    <section
      className="
      mb-3
      rounded
      border-2
      border-[#4b351d]
      bg-[#dfceb6]
      p-3
      shadow-[inset_0_2px_6px_rgba(0,0,0,.28)]
      font-['Cormorant_Garamond',serif]
      text-[#2d1b0d]
    "
    >
      <div className="mb-2 border-b border-[#4b351d]/20 pb-1">
        <span className="font-['Cinzel',serif] text-[0.75rem] font-black tracking-wider">
          CARD EFFECT
        </span>
      </div>

      <div className="space-y-2 text-[0.8rem] leading-6">

        <p>
          <span className="font-bold text-[#6b3d18]">
            ● Effect 1:
          </span>
          {' '}
          {effect1}
        </p>

        <p>
          <span className="font-bold text-[#6b3d18]">
            ● Effect 2:
          </span>
          {' '}
          {effect2}
        </p>

      </div>

      <div className="my-3 h-px bg-[#4b351d]/20" />

      <div
        className="
        flex
        justify-end
        gap-8
        font-['Cinzel',serif]
        text-sm
        font-black
        tracking-wider
      "
      >
        <span>
          ATK /
          <span className="ml-1 text-[#7f1d1d]">
            {atk}
          </span>
        </span>

        <span>
          DEF /
          <span className="ml-1 text-[#1e3a8a]">
            {def}
          </span>
        </span>
      </div>
    </section>
  );
}