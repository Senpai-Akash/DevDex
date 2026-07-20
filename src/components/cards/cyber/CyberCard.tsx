'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';
import { CyberBackground } from './CyberBackground';
import { CyberHeader } from './CyberHeader';
import { CyberAvatar } from './CyberAvatar';
import { CyberStats } from './CyberStats';
import { CyberAnalysis } from './CyberAnalysis';
import { CyberModules } from './CyberModules';
import { CyberFooter } from './CyberFooter';

interface CyberCardProps {
  data: CardData;
}

export function CyberCard({ data }: CyberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96, rotateY: -1 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      whileHover={{ 
        y: -6, 
        rotateX: -0.6, 
        rotateY: 0.8,
        scale: 1.008,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex w-full max-w-[580px] cursor-pointer flex-col select-none"
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* Outer Neon Cyan Ambient Aura */}
      <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
      
      {/* Sci-Fi HUD Panel Wrapper */}
      <div className="relative z-10 p-[10px] rounded-[2rem] bg-gradient-to-b from-[#0f172a] via-[#090d16] to-[#04060b] border border-cyan-500/35 shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
        
        {/* Inner Tech Border Lines */}
        <div className="absolute inset-[6px] rounded-[1.85rem] border border-cyan-500/15 pointer-events-none" />
        <div className="absolute inset-[8px] rounded-[1.8rem] border border-magenta-500/10 pointer-events-none" />
        
        {/* Main Content Box */}
        <div className="relative z-10 overflow-hidden rounded-[1.7rem] bg-[#05070f]/98 px-5 py-4 border border-cyan-500/30 sm:px-7 sm:py-5">
          {/* Cyber HUD Animated Background */}
          <CyberBackground />

          {/* Foreground content */}
          <div className="relative z-20 flex flex-col">
            <CyberHeader data={data} />
            
            <CyberAvatar avatar={data.avatar} displayName={data.displayName} />
            
            <CyberStats stats={data.stats} />
            
            <CyberAnalysis data={data} />
            
            <CyberModules data={data} />
            
            <CyberFooter 
              edition={data.edition} 
              branding={data.branding} 
              cardNumber={data.cardNumber} 
            />
          </div>
        </div>
        
        {/* Technical Corner/Bevel brackets overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Bracket */}
          <div className="absolute top-2 left-2 w-8 h-8 text-cyan-400">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <rect x="0" y="0" width="16" height="4" />
              <rect x="0" y="0" width="4" height="16" />
              <circle cx="2" cy="2" r="2.5" fill="#ec4899" />
            </svg>
          </div>
          {/* Top Right Bracket */}
          <div className="absolute top-2 right-2 w-8 h-8 text-cyan-400">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform rotate-90">
              <rect x="0" y="0" width="16" height="4" />
              <rect x="0" y="0" width="4" height="16" />
              <circle cx="2" cy="2" r="2.5" fill="#ec4899" />
            </svg>
          </div>
          {/* Bottom Left Bracket */}
          <div className="absolute bottom-2 left-2 w-8 h-8 text-cyan-400">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform -rotate-90">
              <rect x="0" y="0" width="16" height="4" />
              <rect x="0" y="0" width="4" height="16" />
              <circle cx="2" cy="2" r="2.5" fill="#ec4899" />
            </svg>
          </div>
          {/* Bottom Right Bracket */}
          <div className="absolute bottom-2 right-2 w-8 h-8 text-cyan-400">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform rotate-180">
              <rect x="0" y="0" width="16" height="4" />
              <rect x="0" y="0" width="4" height="16" />
              <circle cx="2" cy="2" r="2.5" fill="#ec4899" />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
