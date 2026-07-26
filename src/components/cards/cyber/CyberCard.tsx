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
  const rarity = data.rarity.toLowerCase();

const rarityTheme = (() => {
  if (rarity.includes('myth')) {
    return {
      aura: 'from-red-500/20 via-orange-500/10 to-transparent',
      border: 'border-red-400/60',
      inner: 'border-orange-400/30',
      shadow: '0 0 40px rgba(239,68,68,.35)',
    };
  }

  if (rarity.includes('legend')) {
    return {
      aura: 'from-yellow-400/20 via-cyan-500/10 to-transparent',
      border: 'border-yellow-400/60',
      inner: 'border-yellow-300/25',
      shadow: '0 0 40px rgba(250,204,21,.35)',
    };
  }

  if (rarity.includes('epic')) {
    return {
      aura: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
      border: 'border-fuchsia-400/60',
      inner: 'border-purple-400/30',
      shadow: '0 0 35px rgba(217,70,239,.30)',
    };
  }

  if (rarity.includes('rare')) {
    return {
      aura: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      border: 'border-cyan-400/60',
      inner: 'border-cyan-300/25',
      shadow: '0 0 35px rgba(34,211,238,.28)',
    };
  }

  return {
    aura: 'from-emerald-500/15 via-cyan-500/5 to-transparent',
    border: 'border-emerald-400/45',
    inner: 'border-emerald-300/20',
    shadow: '0 0 28px rgba(16,185,129,.22)',
  };
})();
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
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-b ${rarityTheme.aura} blur-3xl pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
      
      {/* Sci-Fi HUD Panel Wrapper */}
      <motion.div
    className={`relative z-10 p-[8px] rounded-[2rem]
    bg-gradient-to-b
    from-[#0f172a]
    via-[#090d16]
    to-[#04060b]
    ${rarityTheme.border}`}
    style={{
        boxShadow: `
            0 30px 70px rgba(0,0,0,.9),
            ${rarityTheme.shadow},
            inset 0 0 18px rgba(255,255,255,.03)
        `,
    }}
    animate={{
        opacity: [
            1,
            1,
            1,
            0.97,
            1,
            1,
            0.985,
            1,
        ],
        filter: [
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(.95)',
            'brightness(1.04)',
            'brightness(1)',
            'brightness(.98)',
            'brightness(1)',
        ],
    }}
    transition={{
        duration: 14,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.55, 0.75, 0.76, 0.77, 0.90, 0.91, 1],
    }}
>
        {/* Inner Tech Border Lines */}
        <div className="absolute inset-[6px] rounded-[1.85rem] border border-cyan-500/15 pointer-events-none" />
        <div className="absolute inset-[8px] rounded-[1.8rem] border border-magenta-500/10 pointer-events-none" />
        
        {/* Main Content Box */}
        <div className="relative z-10 overflow-hidden rounded-[1.7rem] bg-[#05070f]/98 px-5 py-3 border border-cyan-500/30 sm:px-6 sm:py-4">
          {/* Cyber HUD Animated Background */}
          <CyberBackground />

          {/* Foreground content */}
          <div className="relative z-20 flex flex-col gap-2">
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
      </motion.div>
    </motion.article>
  );
}
