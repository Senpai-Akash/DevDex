'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RPGAvatarProps {
  avatar: string;
  displayName: string;
  rarity: string;
}

export function RPGAvatar({ avatar, displayName, rarity }: RPGAvatarProps) {
  // Choose glow color based on rarity
  const getGlowColor = (r: string) => {
    const low = r.toLowerCase();
    if (low.includes('legend') || low.includes('myth')) return 'rgba(217, 119, 6, 0.4)'; // Orange/Gold
    if (low.includes('epic') || low.includes('rare')) return 'rgba(124, 58, 237, 0.4)'; // Purple
    if (low.includes('uncommon')) return 'rgba(13, 148, 136, 0.4)'; // Teal
    return 'rgba(220, 38, 38, 0.3)'; // Red
  };

  const glowColor = getGlowColor(rarity);

  return (
    <motion.section
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="mx-auto mb-4 flex w-full justify-center items-center"
    >
      <div className="relative flex items-center justify-center p-2">
        {/* Soft magical backdrop glow */}
        <div 
          className="absolute inset-4 rounded-xl blur-2xl opacity-80 animate-[pulse_4s_infinite]"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
          }}
        />

        {/* Ornate Frame Container */}
        <div className="relative h-[230px] w-[230px] sm:h-[240px] sm:w-[240px] flex items-center justify-center">
          {/* Outer Heavy Gold/Bronze Frame */}
          <div className="absolute inset-0 bg-[#1e140d] rounded-2xl border-[3px] border-[#92400e] shadow-[0_12px_24px_rgba(0,0,0,0.6),_inset_0_4px_12px_rgba(0,0,0,0.8)]" />
          
          {/* Inner Gold Bevel Border */}
          <div className="absolute inset-[4px] rounded-xl border-2 border-[#d97706] opacity-80" />
          
          {/* Inner Stone Frame Background */}
          <div className="absolute inset-[6px] rounded-lg bg-[#0e0a07] overflow-hidden" />
          
          {/* Subtle Grid / Rune lines inside frame */}
          <svg className="absolute inset-[8px] h-[calc(100%-16px)] w-[calc(100%-16px)] opacity-20 text-[#d97706] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="10" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
            <line x1="10" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5" />
            <line x1="90" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 5 5 L 15 15 M 95 5 L 85 15 M 5 95 L 15 85 M 95 95 L 85 85" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Avatar Image Wrapper with Ornate Cutouts */}
          <div className="relative h-[206px] w-[206px] sm:h-[216px] sm:w-[216px] overflow-hidden rounded-lg bg-stone-950 border border-[#b45309]/50 shadow-inner">
            {/* Dark background vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.85)_100%)] z-10" />
            
            {/* The Image */}
            <img 
              src={avatar} 
              alt={displayName} 
              className="relative h-full w-full object-cover grayscale-[15%] contrast-[110%] transition-all duration-500 hover:scale-105 hover:grayscale-0" 
            />
          </div>

          {/* Heavy Ornate Corners (SVG brackets overlaid on corners) */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Top-Left Corner */}
            <svg className="absolute top-[-2px] left-[-2px] w-8 h-8 text-[#f59e0b] drop-shadow-md" viewBox="0 0 32 32">
              <path d="M 4 20 L 4 4 L 20 4 L 16 8 L 8 8 L 8 16 Z" fill="currentColor" stroke="#78350f" strokeWidth="1" />
              <circle cx="6" cy="6" r="1.5" fill="#ef4444" />
            </svg>
            {/* Top-Right Corner */}
            <svg className="absolute top-[-2px] right-[-2px] w-8 h-8 text-[#f59e0b] drop-shadow-md" viewBox="0 0 32 32">
              <path d="M 28 20 L 28 4 L 12 4 L 16 8 L 24 8 L 24 16 Z" fill="currentColor" stroke="#78350f" strokeWidth="1" />
              <circle cx="26" cy="6" r="1.5" fill="#ef4444" />
            </svg>
            {/* Bottom-Left Corner */}
            <svg className="absolute bottom-[-2px] left-[-2px] w-8 h-8 text-[#f59e0b] drop-shadow-md" viewBox="0 0 32 32">
              <path d="M 4 12 L 4 28 L 20 28 L 16 24 L 8 24 L 8 16 Z" fill="currentColor" stroke="#78350f" strokeWidth="1" />
              <circle cx="6" cy="26" r="1.5" fill="#ef4444" />
            </svg>
            {/* Bottom-Right Corner */}
            <svg className="absolute bottom-[-2px] right-[-2px] w-8 h-8 text-[#f59e0b] drop-shadow-md" viewBox="0 0 32 32">
              <path d="M 28 12 L 28 28 L 12 28 L 16 24 L 24 24 L 24 16 Z" fill="currentColor" stroke="#78350f" strokeWidth="1" />
              <circle cx="26" cy="26" r="1.5" fill="#ef4444" />
            </svg>
          </div>

          {/* Runes engraved on left/right frame margins */}
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 text-[0.45rem] font-bold text-amber-600/70 select-none">
            <span>ᚠ</span>
            <span>ᚢ</span>
            <span>ᚦ</span>
          </div>
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 text-[0.45rem] font-bold text-amber-600/70 select-none">
            <span>ᚨ</span>
            <span>ᚱ</span>
            <span>ᚲ</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
