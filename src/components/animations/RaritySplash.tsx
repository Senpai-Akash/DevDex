'use client';

import { motion } from 'framer-motion';

interface RaritySplashProps {
  rarity: string;
}

const rarityConfig = {
  Common: {
    color: '#d1d5db',
    glow: '#ffffff',
  },
  Rare: {
    color: '#60a5fa',
    glow: '#3b82f6',
  },
  Epic: {
    color: '#c084fc',
    glow: '#9333ea',
  },
  Legendary: {
    color: '#facc15',
    glow: '#f59e0b',
  },
};

export default function RaritySplash({
  rarity,
}: RaritySplashProps) {
  const config =
    rarityConfig[
      rarity as keyof typeof rarityConfig
    ] || rarityConfig.Legendary;

  return (
    <motion.div
      className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none"
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.4,
      }}
      transition={{
        duration: 0.55,
      }}
    >
      {/* Glow */}

      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full blur-3xl"
        style={{
          background: config.glow,
        }}
        animate={{
          opacity: [0.15, 0.45, 0.15],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />

      {/* Horizontal Light */}

      <motion.div
        className="absolute h-[6px] w-full"
        style={{
          background: `linear-gradient(90deg,
          transparent,
          ${config.color},
          transparent)`,
        }}
        animate={{
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 0.7,
        }}
      />

      {/* Main Text */}

      <motion.h1
        initial={{
          scale: 0.3,
          rotateX: -90,
        }}
        animate={{
          scale: 1,
          rotateX: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 12,
        }}
        className="
        text-6xl
        md:text-7xl
        font-black
        tracking-[0.4em]
        uppercase
        "
        style={{
          color: config.color,
          textShadow: `
            0 0 20px ${config.glow},
            0 0 45px ${config.glow},
            0 0 90px ${config.glow}
          `,
        }}
      >
        {rarity}
      </motion.h1>

      {/* Sparkles */}

      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            background: config.color,
            boxShadow: `0 0 12px ${config.glow}`,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          animate={{
            x: (Math.random() - 0.5) * 900,
            y: (Math.random() - 0.5) * 500,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 1,
            delay: Math.random() * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
}