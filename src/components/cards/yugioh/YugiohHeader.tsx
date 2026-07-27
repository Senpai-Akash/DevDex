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

  const getAttributeEmoji = (lang: string) => {
    const l = lang.toLowerCase();

    if (
      l.includes('typescript') ||
      l.includes('javascript') ||
      l.includes('js') ||
      l.includes('ts')
    )
      return '⚡';

    if (
      l.includes('python') ||
      l.includes('ai') ||
      l.includes('machine')
    )
      return '🤖';

    if (
      l.includes('rust') ||
      l.includes('c++') ||
      l.includes('c ') ||
      l.includes('ruby')
    )
      return '🔥';

    if (
      l.includes('go') ||
      l.includes('swift') ||
      l.includes('kotlin')
    )
      return '☁️';

    if (
      l.includes('html') ||
      l.includes('css') ||
      l.includes('design')
    )
      return '🎨';

    if (
      l.includes('php') ||
      l.includes('java')
    )
      return '🌿';

    return '🔮';
  };

  const attribute = getAttributeEmoji(data.technology);

  const rating = data.rating;

  const starCount = Math.max(
    1,
    Math.min(
      12,
      Math.round(rating / 8.5)
    )
  );

  const rarity =
    rating >= 95
      ? 'GHOST'
      : rating >= 90
      ? 'SECRET'
      : rating >= 85
      ? 'ULTRA'
      : rating >= 75
      ? 'SUPER'
      : 'RARE';

  return (
    <header
      className="
      relative
      flex
      flex-col
      border-b
      border-[#f4cf74]/20
      pb-3
      mb-3
      select-none
      font-['Cinzel',serif]
    "
    >
      {/* Top Row */}

      <div className="flex items-center justify-between mb-2">

        {/* Technology */}

        <div
          className="
          rounded
          border
          border-[#f4cf74]/35
          bg-gradient-to-b
          from-[#6e4d22]
          to-[#2b1a09]
          px-3
          py-1
          shadow-[0_2px_6px_rgba(0,0,0,.55)]
        "
        >
          <span
            className="
            text-[0.62rem]
            font-black
            tracking-[0.22em]
            text-[#f7d978]
          "
          >
            [{tech}]
          </span>
        </div>

        {/* Attribute */}

        <div className="flex items-center gap-2">

          <div
            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#ffd24c]
            bg-gradient-to-b
            from-[#5b3b13]
            to-[#1b1208]
            text-base
            shadow-[0_0_12px_rgba(255,215,0,.28)]
          "
          >
            {attribute}
          </div>

          <div className="flex flex-col leading-none">

            <span
              className="
              text-[0.45rem]
              tracking-[0.18em]
              text-stone-400
            "
            >
              ATTR
            </span>

            <span
              className="
              text-[0.48rem]
              font-black
              tracking-[0.18em]
              text-[#ffd24c]
            "
            >
              {rarity}
            </span>

          </div>

        </div>

      </div>

      {/* Name */}

      <h1
        className="
        truncate
        text-2xl
        sm:text-[2rem]
        font-black
        tracking-[0.08em]
        text-white
        drop-shadow-[0_2px_6px_rgba(0,0,0,.85)]
      "
      >
        {name}
      </h1>

      {/* Class */}

      <p
        className="
        mt-1
        text-[0.7rem]
        font-bold
        italic
        uppercase
        tracking-[0.25em]
        text-[#d9b67a]
      "
      >
        {developerClass}
      </p>

      {/* Stars */}

      <div className="mt-2 flex gap-1.5">

        {Array.from({ length: starCount }).map((_, i) => (
          <span
            key={i}
            className="
            text-sm
            text-[#ffd24c]
            drop-shadow-[0_0_6px_rgba(255,215,0,.55)]
          "
          >
            ★
          </span>
        ))}

      </div>

      {/* Decorative Divider */}

      <div
        className="
        mt-3
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-[#c89b3c]/60
        to-transparent
      "
      />
    </header>
  );
}