'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  rarity: string;
}

const rarityColors: Record<
  string,
  {
    color: string;
    glow: string;
  }
> = {
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
}: Props) {
  const config =
    rarityColors[rarity] ??
    rarityColors.Legendary;

  return (
    <AnimatePresence>

      <motion.div
        className="
          absolute
          inset-0
          z-[70]
          flex
          items-center
          justify-center
          pointer-events-none
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >

        {/* Background Flash */}

        <motion.div
          className="
            absolute
            inset-0
          "
          style={{
            background: `radial-gradient(circle,
            ${config.glow}22 0%,
            transparent 70%)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.6, 1.2, 1.8],
          }}
          transition={{
            duration: 0.9,
          }}
        />

        {/* Giant Glow */}

        <motion.div
          className="
            absolute
            w-[700px]
            h-[700px]
            rounded-full
            blur-[140px]
          "
          style={{
            background: config.glow,
          }}
          animate={{
            opacity: [0.15, 0.45, 0.15],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 1.2,
          }}
        />

        {/* Horizontal Beam */}

        <motion.div
          className="
            absolute
            h-[5px]
            w-full
          "
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${config.color},
              transparent
            )`,
          }}
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Vertical Beam */}

        <motion.div
          className="
            absolute
            w-[5px]
            h-full
          "
          style={{
            background: `linear-gradient(
              transparent,
              ${config.color},
              transparent
            )`,
          }}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Main Text */}

        <motion.h1
          initial={{
            scale: 0.15,
            rotateX: -90,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            rotateX: 0,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
          }}
          className="
            text-7xl
            md:text-8xl
            font-black
            uppercase
            tracking-[0.45em]
          "
          style={{
            color: config.color,
            textShadow: `
              0 0 15px ${config.glow},
              0 0 35px ${config.glow},
              0 0 70px ${config.glow},
              0 0 120px ${config.glow}
            `,
          }}
        >
          {rarity}
        </motion.h1>

        {/* Energy Particles */}

        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              rounded-full
            "
            style={{
              width: 5 + Math.random() * 7,
              height: 5 + Math.random() * 7,
              background: config.color,
              boxShadow: `0 0 12px ${config.glow}`,
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x:
                (Math.random() - 0.5) * 900,
              y:
                (Math.random() - 0.5) * 600,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 1,
              delay: Math.random() * 0.15,
            }}
          />
        ))}

      </motion.div>

    </AnimatePresence>
  );
}