'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';
import { YugiohBackground } from './YugiohBackground';
import { YugiohHeader } from './YugiohHeader';
import { YugiohAvatar } from './YugiohAvatar';
import { YugiohInfo } from './YugiohInfo';
import { YugiohAbilities } from './YugiohAbilities';
import { YugiohFooter } from './YugiohFooter';

interface YugiohCardProps {
  data: CardData;
}

export function YugiohCard({ data }: YugiohCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6, scale: 1.008 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex w-full max-w-[580px] cursor-pointer flex-col select-none"
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* Ambient foil shimmer */}
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-b from-[#ab8552]/8 via-[#855f30]/4 to-transparent blur-3xl pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
      
      {/* Card outer frame */}
      <div className="relative z-10 p-[10px] rounded-[2rem] bg-gradient-to-b from-[#3a2510] via-[#1e140a] to-[#0a0502] border border-[#ab8552]/30 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
        {/* Inner gold border */}
        <div className="absolute inset-[6px] rounded-[1.85rem] border border-[#fcd34d]/30 pointer-events-none" />
        
        {/* Main Content */}
        <div className="relative z-10 overflow-hidden rounded-[1.7rem] bg-[#0a0502]/99 px-5 py-4 border border-[#3a2510]/30 sm:px-7 sm:py-5">
          <YugiohBackground />
          <div className="relative z-20 flex flex-col">
            <YugiohHeader data={data} />
            <YugiohAvatar avatar={data.avatar} displayName={data.displayName} />
            <YugiohInfo data={data} />
            <YugiohAbilities data={data} />
            <YugiohFooter edition={data.edition} branding={data.branding} cardNumber={data.cardNumber} displayName={data.displayName} />
          </div>
        </div>
        {/* Minimal decorative corner ticks */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 w-4 h-4 text-[#fcd34d]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current"><path d="M0 0 L10 0 L10 4 L4 4 L4 10 L0 10 Z"/></svg>
          </div>
          <div className="absolute top-2 right-2 w-4 h-4 text-[#fcd34d]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform rotate-90"><path d="M0 0 L10 0 L10 4 L4 4 L4 10 L0 10 Z"/></svg>
          </div>
          <div className="absolute bottom-2 left-2 w-4 h-4 text-[#fcd34d]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform -rotate-90"><path d="M0 0 L10 0 L10 4 L4 4 L4 10 L0 10 Z"/></svg>
          </div>
          <div className="absolute bottom-2 right-2 w-4 h-4 text-[#fcd34d]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform rotate-180"><path d="M0 0 L10 0 L10 4 L4 4 L4 10 L0 10 Z"/></svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
