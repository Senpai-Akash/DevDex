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
      {/* Deep ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(40,30,70,0.4),transparent_70%)]" />
      
      {/* Subtle corner lights */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />

      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- Card Stage --- */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 perspective-1000"
        style={{ 
          transform: 'rotateX(5deg) rotateY(-5deg) rotateZ(1deg)',
          filter: 'drop-shadow(0 50px 50px rgba(0,0,0,0.8))'
        }}
      >
        {/* Atmospheric glow behind the card */}
        <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-tr from-purple-600 via-blue-500 to-indigo-400 rounded-3xl scale-90 translate-y-4" />

        {/* The Card itself */}
        <div className="relative group">
          {/* Lighting Sweep Effect */}
          <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[sweep_8s_infinite_linear]" />
          </div>
          
          {createElement(CardComponent, { data })}
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
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