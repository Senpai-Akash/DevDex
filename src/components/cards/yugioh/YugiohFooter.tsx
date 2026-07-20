'use client';

import React from 'react';

interface YugiohFooterProps {
  edition: string;
  branding: string;
  cardNumber: string;
  displayName: string;
}

export function YugiohFooter({ edition, branding, cardNumber, displayName }: YugiohFooterProps) {
  return (
    <footer className="mt-4 w-full flex flex-col gap-2 text-sm font-['Cinzel',serif] text-[#ab8552] select-none">
      {/* Divider */}
      <div className="flex items-center justify-center gap-2 opacity-30">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-current" />
        <span className="uppercase tracking-widest text-xs">DEVDEX ENCODED</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-current" />
      </div>

      {/* Bottom Information Grid */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        {/* Edition */}
        <div className="flex flex-col">
          <span className="uppercase text-[0.6rem] font-bold mb-0.5">EDITION</span>
          <span className="font-semibold">{edition}</span>
        </div>
        {/* Branding */}
        <div className="flex flex-col text-center">
          <span className="uppercase text-[0.6rem] font-bold mb-0.5">BRAND</span>
          <span className="font-semibold uppercase">{branding}</span>
        </div>
        {/* Card Number */}
        <div className="flex flex-col text-right">
          <span className="uppercase text-[0.6rem] font-bold mb-0.5">NO.</span>
          <span className="font-semibold">{cardNumber}</span>
        </div>
      </div>

      {/* Signature line */}
      <div className="flex items-center justify-center mt-2">
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
        `}} />
        <span className="text-xl text-[#fcd34d] font-[\'Pinyon_Script\',cursive]" style={{ textShadow: '0 0 4px rgba(252,211,77,0.6)' }}>{displayName}</span>
      </div>
    </footer>
  );
}
