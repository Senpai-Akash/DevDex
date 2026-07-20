'use client';

import React from 'react';

interface CyberFooterProps {
  edition: string;
  branding: string;
  cardNumber: string;
}

export function CyberFooter({ edition, branding, cardNumber }: CyberFooterProps) {
  return (
    <footer className="mt-3.5 w-full flex flex-col gap-2 font-['Share_Tech_Mono',monospace]">
      {/* Decorative cyber division line */}
      <div className="flex items-center justify-between opacity-35 text-cyan-400">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-current" />
        <span className="text-[0.45rem] px-2 tracking-widest font-black">SYS.SECURE_COMM</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-current" />
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-4 gap-1.5 text-[0.55rem] tracking-[0.15em] text-cyan-400/60">
        {/* Edition */}
        <div className="min-w-0">
          <p className="text-[0.48rem] text-magenta-400/50 uppercase font-bold mb-0.5">EDITION</p>
          <p className="truncate font-black text-white uppercase">{edition}</p>
        </div>
        
        {/* Branding */}
        <div className="min-w-0 text-center">
          <p className="text-[0.48rem] text-magenta-400/50 uppercase font-bold mb-0.5">PLATFORM</p>
          <p className="truncate font-black text-cyan-300 uppercase tracking-widest">{branding}</p>
        </div>
        
        {/* Card Number */}
        <div className="min-w-0 text-center">
          <p className="text-[0.48rem] text-magenta-400/50 uppercase font-bold mb-0.5">INDEX</p>
          <p className="truncate font-black text-white uppercase">{cardNumber}</p>
        </div>

        {/* Firmware Version */}
        <div className="min-w-0 text-right">
          <p className="text-[0.48rem] text-magenta-400/50 uppercase font-bold mb-0.5">FIRMWARE</p>
          <p className="truncate font-black text-cyan-300 uppercase">FW v3.2.1</p>
        </div>
      </div>

      {/* Decorative center check digit or tag */}
      <div className="flex justify-center text-[0.45rem] text-cyan-500/25 select-none mt-1 uppercase tracking-[0.4em]">
        <span>[ TRANSMISSION ENCRYPTED ]</span>
      </div>
    </footer>
  );
}
