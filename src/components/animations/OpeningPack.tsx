'use client';

import { motion } from 'framer-motion';

export default function OpeningPack() {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="
      relative
      w-[260px]
      h-[360px]
      rounded-3xl
      overflow-hidden
      border
      border-yellow-500/40
      bg-gradient-to-br
      from-slate-900
      via-slate-800
      to-black
      shadow-[0_0_60px_rgba(255,215,0,.2)]
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-yellow-500/10
        via-transparent
        to-cyan-500/10
        "
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="text-7xl"
        >
          🎴
        </motion.div>

        <h2 className="mt-8 text-3xl font-black tracking-[0.35em] text-yellow-300">
          DEVDEX
        </h2>

        <p className="mt-4 text-sm tracking-[0.4em] text-slate-400">
          CARD PACK
        </p>

      </div>
    </motion.div>
  );
}