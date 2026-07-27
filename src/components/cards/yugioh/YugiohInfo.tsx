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

  let monsterType = 'Normal';

  if (rating >= 95) {
    monsterType = 'Divine / Legendary';
  } else if (rating >= 90) {
    monsterType = 'Legendary';
  } else if (rating >= 80) {
    monsterType = 'Effect';
  } else {
    monsterType = 'Normal';
  }

  return (
    <section
      className="
      mb-3
      w-full
      rounded
      border-2
      border-[#4b351d]
      bg-[#e5d4bc]
      p-3
      shadow-[inset_0_3px_8px_rgba(0,0,0,.25)]
      text-[#2d1b0d]
      font-['Cormorant_Garamond',serif]
      select-none
    "
    >
      {/* Type Line */}

      <div
        className="
        mb-2
        flex
        items-center
        justify-between
        border-b
        border-[#4b351d]/30
        pb-1
        font-['Cinzel',serif]
        text-[0.72rem]
        font-bold
      "
      >
        <span>
          [{role.toUpperCase()} / {monsterType.toUpperCase()}]
        </span>

        <span className="text-[#8c6239]">
          #{data.cardNumber}
        </span>
      </div>

      {/* Lore */}

      <p
        className="
        text-[0.82rem]
        leading-6
        italic
        text-[#352111]
      "
      >
        "
        A highly skilled developer capable of building advanced systems and
        solving impossible engineering challenges. Empowered by the legendary
        ability
        {' '}
        <span
          className="
          rounded
          bg-[#cab08d]
          px-1.5
          font-bold
          not-italic
          text-[#3b220f]
        "
        >
          {trait}
        </span>
        , this developer overwhelms opponents through unmatched technical
        mastery and relentless innovation.
        "
      </p>

      {/* Divider */}

      <div className="my-3 h-px bg-[#4b351d]/25" />

      {/* ATK / DEF */}

      <div
        className="
        flex
        justify-end
        gap-6
        font-['Cinzel',serif]
        text-[0.82rem]
        font-black
        tracking-wider
        text-[#24150b]
      "
      >
        <span>
          ATK/
          <span className="text-[#7a230f]">
            {data.stats.attack}
          </span>
        </span>

        <span>
          DEF/
          <span className="text-[#123c69]">
            {data.stats.defense}
          </span>
        </span>
      </div>
    </section>
  );
}