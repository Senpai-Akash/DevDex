'use client';

import { motion } from 'framer-motion';

export default function Particles() {
  return (
    <>
      {/* Large Floating Orbs */}

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl"
          style={{
            width: 18 + Math.random() * 40,
            height: 18 + Math.random() * 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 2 === 0
                ? 'rgba(34,211,238,.18)'
                : 'rgba(59,130,246,.16)',
          }}
          animate={{
            x: [
              0,
              Math.random() * 80 - 40,
              0,
            ],
            y: [
              0,
              Math.random() * 80 - 40,
              0,
            ],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Tiny Energy Particles */}

      {Array.from({ length: 90 }).map((_, i) => (
        <motion.span
          key={`particle-${i}`}
          className="absolute rounded-full bg-cyan-300"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 8px #67e8f9',
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 1, 0],
            scale: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Shooting Sparks */}

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute h-[2px] w-[90px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              'linear-gradient(to right,transparent,#67e8f9,transparent)',
            rotate: `${Math.random() * 360}deg`,
            opacity: 0,
          }}
          animate={{
            x: [0, 120],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 5,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  );
}