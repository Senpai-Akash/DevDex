'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';
import { RPGBackground } from './RPGBackground';
import { RPGHeader } from './RPGHeader';
import { RPGAvatar } from './RPGAvatar';
import { RPGStats } from './RPGStats';
import { RPGPower } from './RPGPower';
import { RPGSkills } from './RPGSkills';
import { RPGFooter } from './RPGFooter';

interface RPGCardProps {
  data: CardData;
}

export function RPGCard({ data }: RPGCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        y: -6, 
        rotateX: 0.6, 
        rotateY: 0.8, 
        scale: 1.008,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex w-full max-w-[580px] cursor-pointer flex-col select-none"
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* Outer ambient magical shadow glow */}
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-b from-purple-800/10 via-red-800/5 to-transparent blur-3xl pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
      
      {/* Heavy Bronze / Stone Frame Wrapper */}
      <div className="relative z-10 p-[10px] rounded-[2rem] bg-gradient-to-b from-[#3a2312] via-[#24160b] to-[#140c06] border border-[#d97706]/35 shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
        
        {/* Inner gold frame line */}
        <div className="absolute inset-[6px] rounded-[1.85rem] border border-[#d97706]/20 pointer-events-none" />
        
        {/* Main Content Box */}
        <div className="relative z-10 overflow-hidden rounded-[1.7rem] bg-[#0c0806]/98 px-5 py-4 border border-[#5c3e21]/40 sm:px-7 sm:py-5">
          {/* Card background with runes and particles */}
          <RPGBackground />

          {/* Foreground content inside container */}
          <div className="relative z-20 flex flex-col">
            <RPGHeader data={data} />
            
            <RPGAvatar 
              avatar={data.avatar} 
              displayName={data.displayName} 
              rarity={data.rarity} 
            />
            
            <RPGStats stats={data.stats} />
            
            <RPGPower data={data} />
            
            <RPGSkills data={data} />
            
            <RPGFooter 
              edition={data.edition} 
              branding={data.branding} 
              cardNumber={data.cardNumber} 
            />
          </div>
        </div>
        
        {/* Ornate corner embellishments for frame */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left */}
          <div className="absolute top-2 left-2 w-8 h-8 text-[#92400e]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>
          {/* Top Right */}
          <div className="absolute top-2 right-2 w-8 h-8 text-[#92400e]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform rotate-90">
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>
          {/* Bottom Left */}
          <div className="absolute bottom-2 left-2 w-8 h-8 text-[#92400e]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform -rotate-90">
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-2 right-2 w-8 h-8 text-[#92400e]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform rotate-180">
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
