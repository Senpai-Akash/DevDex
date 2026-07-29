'use client';

import { motion } from 'framer-motion';

export default function EnergyEffects() {
  return (
    <>
      {/* Rotating Aura */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg,#38bdf8,#60a5fa,#8b5cf6,#ec4899,#38bdf8)',
          filter: 'blur(90px)',
          opacity: 0.22,
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.12, 1],
        }}
        transition={{
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 3,
            repeat: Infinity,
          },
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-cyan-300"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 1, 0],
            scale: [0.2, 1.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Lightning Rays */}

      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 origin-bottom"
          style={{
            width: 2,
            height: 320,
            rotate: `${i * 15}deg`,
            background:
              'linear-gradient(to top, transparent, white, cyan)',
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            scaleY: [0.2, 1.1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: i * 0.05,
          }}
        />
      ))}
    </>
  );
}