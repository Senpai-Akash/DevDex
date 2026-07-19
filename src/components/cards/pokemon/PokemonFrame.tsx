'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PokemonFrameProps {
  children: ReactNode;
  isRare: boolean;
  typeColor: string;
}

/**
 * Outer frame — mimics the layered border of a Pokémon TCG card.
 * Rare cards: gold prismatic multi-layer border.
 * Common cards: clean single-tone border.
 */
export function PokemonFrame({ children, isRare, typeColor }: PokemonFrameProps) {
  return (
    <div className="relative mx-auto w-[380px] overflow-visible">
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] blur-2xl opacity-40"
        style={{
          background: isRare
            ? 'linear-gradient(135deg, #fde68a 0%, #c084fc 40%, #67e8f9 100%)'
            : `radial-gradient(circle, ${typeColor}88, transparent 70%)`,
        }}
      />

      {/* Outermost border — gold for rare, type-colour for common */}
      <div
        className="relative z-10 rounded-[1.35rem] p-[4px]"
        style={{
          background: isRare
            ? 'linear-gradient(135deg, #fde68a 0%, #fbbf24 25%, #c084fc 50%, #67e8f9 75%, #fde68a 100%)'
            : `linear-gradient(135deg, ${typeColor}cc, ${typeColor}88)`,
          backgroundSize: isRare ? '300% 300%' : '100% 100%',
        }}
      >
        {/* Second inset border */}
        <motion.div
          className="rounded-[1.1rem] p-[2px]"
          style={{
            background: isRare
              ? 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fffbeb 100%)'
              : 'rgba(255,255,255,0.4)',
          }}
          animate={
            isRare
              ? { backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          {/* Inner card surface */}
          <div className="relative overflow-hidden rounded-[0.95rem] h-[540px]">
            {children}
          </div>
        </motion.div>
      </div>

      {/* Corner Poké-ball accent marks */}
      {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map((pos) => {
        const posClasses: Record<string, string> = {
          'top-left': '-top-1 -left-1',
          'top-right': '-top-1 -right-1',
          'bottom-left': '-bottom-1 -left-1',
          'bottom-right': '-bottom-1 -right-1',
        };
        return (
          <div key={pos} className={`absolute ${posClasses[pos]} z-20 pointer-events-none`}>
            <div
              className="h-3 w-3 rounded-full border-[1.5px] border-white/60 shadow-sm"
              style={{ background: typeColor }}
            />
          </div>
        );
      })}
    </div>
  );
}
