'use client';

import React from 'react';

interface YugiohFooterProps {
  edition: string;
  branding: string;
  cardNumber: string;
  displayName: string;
}

export function YugiohFooter({
  edition,
  branding,
  cardNumber,
  displayName,
}: YugiohFooterProps) {
  return (
    <footer className="mt-3 border-t border-[#4b351d]/20 pt-3 font-['Cinzel',serif]">

      {/* Serial Number */}

      <div className="mb-2 flex items-center justify-between text-[0.58rem] tracking-[0.18em]">

        <span className="font-bold text-[#3d2411]">
          {cardNumber}
        </span>

        <span className="rounded border border-[#b88a4b] bg-[#e8d7b7] px-2 py-[2px] font-bold text-[#6d4418]">
          1st EDITION
        </span>

      </div>

      {/* Bottom Line */}

      <div className="flex items-end justify-between">

        {/* Attribute */}

        <div className="flex flex-col leading-tight">

          <span className="text-[0.5rem] uppercase tracking-[0.2em] text-[#8c6239]">
            System
          </span>

          <span className="text-[0.7rem] font-black text-[#3b220f] uppercase">
            {branding}
          </span>

        </div>

        {/* Foil Stamp */}

        <div className="relative flex items-center justify-center">

          <div
            className="
            h-10
            w-10
            rounded-full
            border
            border-[#d6b25e]
            bg-gradient-to-br
            from-[#f9e08b]
            via-[#c99b45]
            to-[#8c5d1d]
            shadow-[0_0_12px_rgba(252,211,77,.45)]
          "
          />

          <div
            className="
            absolute
            text-[0.55rem]
            font-black
            tracking-widest
            text-white
          "
          >
            RARE
          </div>

        </div>

        {/* Signature */}

        <div className="flex flex-col items-end leading-tight">

          <span className="text-[0.5rem] uppercase tracking-[0.2em] text-[#8c6239]">
            Creator
          </span>

          <span
            className="text-lg italic text-[#7d5628]"
            style={{
              fontFamily: 'cursive',
            }}
          >
            {displayName}
          </span>

        </div>

      </div>

      {/* Copyright */}

      <div className="mt-3 flex items-center justify-between border-t border-[#4b351d]/15 pt-2 text-[0.45rem] tracking-[0.18em] text-[#8c6239]">

        <span>© DEVDEX CARD SYSTEM</span>

        <span>{edition.toUpperCase()}</span>

      </div>

    </footer>
  );
}