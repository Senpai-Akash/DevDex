'use client';

import { motion } from 'framer-motion';

export default function Shockwave() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">

      {/* Main Shockwave Ring */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 1,
        }}
        animate={{
          scale: 5,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="
          absolute
          h-40
          w-40
          rounded-full
          border-[4px]
          border-cyan-300
          shadow-[0_0_80px_#67e8f9]
        "
      />

      {/* Inner Blast */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 1,
        }}
        animate={{
          scale: 3,
          opacity: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          absolute
          h-24
          w-24
          rounded-full
          bg-cyan-300
          blur-3xl
        "
      />

      {/* Explosion Rays */}

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            scaleY: 0,
            opacity: 1,
          }}
          animate={{
            scaleY: 1,
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            absolute
            origin-bottom
            h-[260px]
            w-[4px]
            rounded-full
            bg-gradient-to-t
            from-white
            via-cyan-300
            to-transparent
          "
          style={{
            rotate: `${i * 20}deg`,
          }}
        />
      ))}

      {/* Small Energy Orbs */}

      {Array.from({ length: 35 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: (Math.random() - 0.5) * 600,
            y: (Math.random() - 0.5) * 600,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            h-3
            w-3
            rounded-full
            bg-cyan-200
            shadow-[0_0_18px_white]
          "
        />
      ))}

      {/* White Flash */}

      <motion.div
        initial={{
          opacity: 0.9,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          inset-0
          bg-white
        "
      />

    </div>
  );
}