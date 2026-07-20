'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CyberAvatarProps {
  avatar: string;
  displayName: string;
}

export function CyberAvatar({ avatar, displayName }: CyberAvatarProps) {
  return (
    <motion.section
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="mx-auto mb-4 flex w-full justify-center items-center select-none"
    >
      <div className="relative flex items-center justify-center p-3">
        {/* Hologram Backlight/Glow */}
        <div className="absolute inset-6 rounded-full bg-cyan-500/10 blur-2xl opacity-80 animate-[pulse_3s_infinite]" />
        
        {/* Outer Rotating HUD Bracket Frame */}
        <div className="relative h-[220px] w-[220px] sm:h-[230px] sm:w-[230px] flex items-center justify-center">
          
          {/* Inner Rotating Ring 1 (Clockwise) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 p-1 pointer-events-none"
          />

          {/* Inner Rotating Ring 2 (Counter-Clockwise) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[8px] rounded-full border border-cyan-500/40 border-r-transparent border-l-transparent pointer-events-none"
          />

          {/* Hexagonal Outer HUD Bracket */}
          <svg className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] text-cyan-400 pointer-events-none" viewBox="0 0 100 100">
            {/* Crosshair corner markers */}
            <path d="M 12 28 L 12 12 L 28 12" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 88 28 L 88 12 L 72 12" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 12 72 L 12 88 L 28 88" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 88 72 L 88 88 L 72 88" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* Subtle radar ticks */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(34, 211, 238, 0.08)" strokeWidth="1" />
          </svg>

          {/* Hologram Scanner Bar */}
          <div 
            className="absolute left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
            style={{
              animation: 'cyber-scanline 3.5s ease-in-out infinite',
            }}
          />

          {/* Heavy Octagonal Border Frame for Avatar */}
          <div 
            className="relative h-[180px] w-[180px] sm:h-[190px] sm:w-[190px] overflow-hidden bg-slate-950 border border-cyan-500/40 shadow-[inset_0_0_24px_rgba(6,182,212,0.3)]"
            style={{
              clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'
            }}
          >
            {/* Digital grid overlay on image */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,_transparent_1px)] bg-[size:100%_4px] z-10 pointer-events-none" />
            
            {/* Cyan Glare Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(6,12,24,0.85)_100%)] z-10 pointer-events-none" />

            <img
              src={avatar}
              alt={displayName}
              className="relative h-full w-full object-cover filter saturate-[80%] brightness-[95%] hue-rotate-[355deg] transition-all duration-300 hover:scale-105 hover:saturate-[105%]"
            />
          </div>

          {/* Tech Spec Labeling */}
          <div className="absolute bottom-1 right-2 text-[0.45rem] font-['Share_Tech_Mono',monospace] text-magenta-400 font-bold bg-slate-950 px-1 border border-magenta-500/20 tracking-wider">
            SCANNING...
          </div>
          <div className="absolute top-1 left-2 text-[0.45rem] font-['Share_Tech_Mono',monospace] text-cyan-400 font-bold bg-slate-950 px-1 border border-cyan-500/20 tracking-wider">
            SYS.ID // 0x48A1
          </div>
        </div>
      </div>
    </motion.section>
  );
}
