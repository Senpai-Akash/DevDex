'use client';

import React from 'react';
import { CardStats } from '../../../types/card';

interface CyberStatsProps {
  stats: CardStats;
}

interface CyberStatConfig {
  key: keyof CardStats;
  label: string;
  code: string;
  colorClass: string;
  glowClass: string;
}

const STATS_CONFIG: CyberStatConfig[] = [
  { 
    key: 'attack', 
    label: 'CPU', 
    code: 'SYS.CPU', 
    colorClass: 'bg-cyan-400', 
    glowClass: 'shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
  },
  { 
    key: 'defense', 
    label: 'FIREWALL', 
    code: 'SYS.FWR', 
    colorClass: 'bg-magenta-500', 
    glowClass: 'shadow-[0_0_8px_rgba(236,72,153,0.6)]' 
  },
  { 
    key: 'intelligence', 
    label: 'AI ENGINE', 
    code: 'SYS.AI', 
    colorClass: 'bg-purple-500', 
    glowClass: 'shadow-[0_0_8px_rgba(168,85,247,0.6)]' 
  },
  { 
    key: 'speed', 
    label: 'BANDWIDTH', 
    code: 'SYS.BND', 
    colorClass: 'bg-cyan-400', 
    glowClass: 'shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
  },
  { 
    key: 'versatility', 
    label: 'MEMORY', 
    code: 'SYS.MEM', 
    colorClass: 'bg-magenta-500', 
    glowClass: 'shadow-[0_0_8px_rgba(236,72,153,0.6)]' 
  },
  { 
    key: 'teamwork', 
    label: 'ENCRYPTION', 
    code: 'SYS.ENC', 
    colorClass: 'bg-purple-500', 
    glowClass: 'shadow-[0_0_8px_rgba(168,85,247,0.6)]' 
  },
];

export function CyberStats({ stats }: CyberStatsProps) {
  return (
    <section aria-label="System Metrics" className="w-full py-2 px-1 border-y border-cyan-500/20 font-['Share_Tech_Mono',monospace]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
        {STATS_CONFIG.map((cfg) => {
          const val = Math.min(100, Math.max(0, Math.round(stats[cfg.key] || 50)));
          return (
            <div key={cfg.key} className="flex flex-col">
              {/* Label & Value */}
              <div className="flex items-center justify-between text-[0.62rem] tracking-wider text-cyan-300 font-bold mb-1">
                <span>{cfg.code}</span>
                <span className="text-white font-black">{val}%</span>
              </div>
              
              {/* Neon Progress Track */}
              <div className="relative h-2 w-full bg-slate-950 border border-cyan-500/20 rounded-sm overflow-hidden">
                <div 
                  className={`h-full ${cfg.colorClass} ${cfg.glowClass}`} 
                  style={{ width: `${val}%` }}
                />
                
                {/* Horizontal digital ticks overlay */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-30">
                  <span className="h-full w-px bg-slate-900" />
                  <span className="h-full w-px bg-slate-900" />
                  <span className="h-full w-px bg-slate-900" />
                  <span className="h-full w-px bg-slate-900" />
                  <span className="h-full w-px bg-slate-900" />
                  <span className="h-full w-px bg-slate-900" />
                  <span className="h-full w-px bg-slate-900" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
