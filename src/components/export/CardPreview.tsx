'use client';

import { forwardRef } from 'react';
import { createElement } from 'react';
import { motion } from 'framer-motion';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import { getThemeComponent } from '@/lib/themes';

interface CardPreviewProps {
  data: CardData;
  theme: CardTheme;
  className?: string;
}

/**
 * CardPreview renders the developer card at full resolution.
 * Includes a subtle dark gradient background and soft shadow.
 */
const CardPreview = forwardRef<HTMLDivElement, CardPreviewProps>(function CardPreview(
  { data, theme, className = '' },
  ref,
) {
  const CardComponent = getThemeComponent(theme);

  return (
    <div
      ref={ref}
      className={'relative flex items-center justify-center ' + className + ' bg-[#050508] overflow-hidden'}
      style={{ width: 760, height: 1040 }}
    >
      {/* --- Environmental Background --- */}
      {/* Deep obsidian base with subtle center light */}
      <div className="absolute inset-0 bg-[#030305]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(30,20,60,0.3),transparent_70%)]" />
      
      {/* Studio Lighting: Soft top-down spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl" />
      
      {/* Subtle ambient accent lights */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full" />

      {/* Reflective Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />

      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- Card Stage --- */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-15, 15, -15] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 perspective-1000"
        style={{ 
          transform: 'rotateX(8deg) rotateY(-8deg) rotateZ(1deg)',
          filter: 'drop-shadow(0 60px 40px rgba(0,0,0,0.9))'
        }}
      >
        {/* Atmospheric glow behind the card - more focused and deep */}
        <div className="absolute inset-0 blur-[60px] opacity-30 bg-gradient-to-tr from-purple-900 via-blue-900 to-indigo-900 rounded-3xl scale-110 translate-y-10" />

        {/* The Card itself */}
        <div className="relative group">
          {/* Lighting Sweep Effect - refined for a more professional look */}
          <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-12 animate-[sweep_10s_infinite_linear]" />
          </div>
          
          {createElement(CardComponent, { data })}
        </div>
      </motion.div>

      {/* Floating Particles - organic variety */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() > 0.8 ? 'w-1.5 h-1.5' : 'w-1 h-1';
          const opacity = Math.random() > 0.5 ? 'bg-white/20' : 'bg-white/10';
          return (
            <div 
              key={i}
              className={`absolute ${size} ${opacity} rounded-full animate-pulse`}
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            />
          );
        })}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes sweep {
          0% { left: -100%; }
          20% { left: 150%; }
          100% { left: 150%; }
        }
      `}</style>
    </div>
  );
});

export default CardPreview;