'use client';

import React from 'react';

interface RPGFooterProps {
  edition: string;
  branding: string;
  cardNumber: string;
}

export function RPGFooter({ edition, branding, cardNumber }: RPGFooterProps) {
  return (
    <footer className="mt-2.5 w-full flex flex-col gap-2">
      {/* Decorative filigree line separating abilities from footer */}
      <div className="flex items-center justify-center gap-2 opacity-25 text-amber-500/50">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-currentColor" />
        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-current rotate-45">
          <rect x="3" y="3" width="4" height="4" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-currentColor" />
      </div>

      {/* Footer Meta Grid */}
      <div className="grid grid-cols-3 gap-2 text-[0.58rem] tracking-[0.15em] font-['Cinzel',serif] text-stone-500">
        {/* Edition */}
        <div className="min-w-0">
          <p className="text-[0.5rem] tracking-[0.2em] text-orange-200/30 uppercase">Edition</p>
          <p className="truncate font-bold text-stone-300 capitalize">{edition}</p>
        </div>
        
        {/* Branding (DevDex) */}
        <div className="min-w-0 text-center flex flex-col items-center">
          <p className="text-[0.5rem] tracking-[0.2em] text-orange-200/30 uppercase">Emblem</p>
          <p className="truncate font-black text-amber-400/90 tracking-[0.25em] uppercase hover:text-amber-300 transition-colors">
            {branding}
          </p>
        </div>
        
        {/* Card Number */}
        <div className="min-w-0 text-right">
          <p className="text-[0.5rem] tracking-[0.2em] text-orange-200/30 uppercase">Index</p>
          <p className="truncate font-bold text-stone-300 uppercase">{cardNumber}</p>
        </div>
      </div>
      
      {/* Decorative bottom center emblem */}
      <div className="flex justify-center text-[0.45rem] text-amber-600/30 select-none mt-1">
        <span>❖ ⚜ ❖</span>
      </div>
    </footer>
  );
}
