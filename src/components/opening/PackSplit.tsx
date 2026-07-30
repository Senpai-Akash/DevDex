'use client';

import { motion } from 'framer-motion';

export default function PackSplit() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">

      {/* LEFT HALF */}

      <motion.div
        initial={{
          x: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: -220,
          y: -40,
          rotate: -28,
          scale: 0.96,
          opacity: 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="
          absolute
          h-[370px]
          w-[128px]
          overflow-hidden
          rounded-l-[26px]
          border-l
          border-t
          border-b
          border-cyan-300/40
          bg-gradient-to-b
          from-[#091120]
          via-[#13253b]
          to-[#05080f]
          shadow-[0_0_40px_rgba(34,211,238,.35)]
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent" />
      </motion.div>

      {/* RIGHT HALF */}

      <motion.div
        initial={{
          x: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 220,
          y: -40,
          rotate: 28,
          scale: 0.96,
          opacity: 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="
          absolute
          left-1/2
          h-[370px]
          w-[128px]
          overflow-hidden
          rounded-r-[26px]
          border-r
          border-t
          border-b
          border-cyan-300/40
          bg-gradient-to-b
          from-[#091120]
          via-[#13253b]
          to-[#05080f]
          shadow-[0_0_40px_rgba(34,211,238,.35)]
        "
      >
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-400/10 to-transparent" />
      </motion.div>

      {/* CENTER ENERGY CUT */}

      <motion.div
        initial={{
          scaleY: 0,
          opacity: 0,
        }}
        animate={{
          scaleY: 1.4,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          absolute
          h-[430px]
          w-[10px]
          rounded-full
          bg-gradient-to-b
          from-white
          via-cyan-300
          to-white
          shadow-[0_0_70px_#67e8f9]
        "
      />

      {/* SPARK BURST */}

      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: (Math.random() - 0.5) * 500,
            y: (Math.random() - 0.5) * 500,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            delay: Math.random() * 0.08,
          }}
          className="
            absolute
            h-2
            w-2
            rounded-full
            bg-cyan-200
            shadow-[0_0_15px_white]
          "
        />
      ))}

      {/* ENERGY RING */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 0.8,
        }}
        animate={{
          scale: 3,
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          absolute
          h-[240px]
          w-[240px]
          rounded-full
          border-2
          border-cyan-300
          shadow-[0_0_70px_#67e8f9]
        "
      />
    </div>
  );
}