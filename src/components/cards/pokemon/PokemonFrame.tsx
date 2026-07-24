'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PokemonFrameProps {
  children: ReactNode;
  isRare: boolean;
  typeColor: string;
}

export function PokemonFrame({
  children,
  isRare,
  typeColor,
}: PokemonFrameProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: 3,
        rotateY: -3,
        scale: 1.02,
      }}
      transition={{
        type: 'spring',
        stiffness: 170,
        damping: 20,
      }}
      className="relative mx-auto w-[395px]"
    >
      {/* Soft Shadow */}
      <div className="absolute inset-0 translate-y-4 rounded-[22px] bg-black/40 blur-2xl" />

      {/* Pokémon Yellow Border */}
      <div
        className="relative rounded-[22px] p-[10px]"
        style={{
          background:
            'linear-gradient(180deg,#FFE66A 0%,#FFD83A 35%,#E8B820 100%)',
          boxShadow:
            '0 12px 30px rgba(0,0,0,.45), inset 0 2px 2px rgba(255,255,255,.45)',
        }}
      >
        {/* Dark inner outline */}
        <div className="rounded-[16px] border-[2px] border-[#2b2b2b] overflow-hidden bg-[#f7e4a5]">

          {/* Holo only on rares */}
          {isRare && (
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-30"
              animate={{
                backgroundPosition: [
                  '0% 0%',
                  '100% 100%',
                  '0% 0%',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage:
                  'linear-gradient(120deg, transparent 15%, rgba(255,255,255,.25) 25%, rgba(255,0,255,.15) 45%, rgba(0,255,255,.15) 65%, transparent 80%)',
                backgroundSize: '250% 250%',
              }}
            />

          )}

          {children}
        </div>
      </div>
    </motion.div>
  );
}