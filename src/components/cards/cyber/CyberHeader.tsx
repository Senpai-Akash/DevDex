'use client';

import React from 'react';
import { CardData } from '../../../types/card';

interface CyberHeaderProps {
  data: CardData;
}

export function CyberHeader({ data }: CyberHeaderProps) {
  const name = data.displayName.toUpperCase();
  const role = (data.developerClass ?? data.role).toUpperCase();

  // Determine a threat level / security clearance based on rating
  let clearance = 'UNRESTRICTED';
  let threat = 'LEVEL_LOW';
  let threatColor = 'text-green-400 border-green-500/30 bg-green-950/20';
  
  const rating = data.rating;
  if (rating >= 95) {
    clearance = 'OVERSEER_ACCESS';
    threat = 'THREAT_MAXIMUM';
    threatColor = 'text-magenta-400 border-magenta-500/30 bg-magenta-950/20';
  } else if (rating >= 85) {
    clearance = 'SECURE_ACCESS';
    threat = 'THREAT_CRITICAL';
    threatColor = 'text-purple-400 border-purple-500/30 bg-purple-950/20';
  } else if (rating >= 75) {
    clearance = 'LEVEL_03';
    threat = 'THREAT_ELEVATED';
    threatColor = 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20';
  } else {
    clearance = 'LEVEL_02';
    threat = 'THREAT_STABLE';
    threatColor = 'text-blue-400 border-blue-500/30 bg-blue-950/20';
  }

  return (
    <header className="relative flex flex-col border-b border-cyan-500/20 pb-3.5 mb-3.5">
      {/* OS ID and Threat level HUD header */}
      <div className="flex items-center justify-between text-[0.55rem] font-['Share_Tech_Mono',monospace] tracking-[0.25em] text-cyan-400/80 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>DEVDEX // SECURE_OS_v4.82</span>
        </div>
        <div className={`px-2 py-0.5 rounded border ${threatColor} font-bold tracking-[0.18em]`}>
          {threat}
        </div>
      </div>

      {/* Name and Role panel */}
      <div className="relative">
        {/* Name */}
        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-[0.12em] text-white font-['Orbitron',sans-serif] truncate drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
          {name}
        </h1>
        
        {/* Role */}
        <div className="mt-1 flex items-center gap-2">
          <span className="text-[0.55rem] font-['Share_Tech_Mono',monospace] text-magenta-400 font-bold tracking-widest uppercase">
            SPEC //
          </span>
          <span className="text-[0.7rem] font-['Share_Tech_Mono',monospace] text-cyan-200 tracking-[0.15em] font-semibold">
            {role}
          </span>
        </div>
      </div>

      {/* HUD corner lines */}
      <div className="absolute top-0 right-0 w-3 h-[1px] bg-cyan-400/30" />
      <div className="absolute top-0 right-0 w-[1px] h-3 bg-cyan-400/30" />
    </header>
  );
}
