'use client';

import { motion } from 'framer-motion';

export default function PackSplit() {
  return (
    <>
      {/* LEFT HALF */}

      <motion.div
        initial={{
          x: 0,
          rotate: 0,
          opacity: 1,
        }}
        animate={{
          x: -170,
          rotate: -24,
          opacity: 0,
        }}
        transition={{
          duration: 0.65,
          ease: 'easeOut',
        }}
        className="
        absolute
        z-30
        w-[130px]
        h-[360px]
        overflow-hidden
        rounded-l-3xl
        border-l
        border-t
        border-b
        border-yellow-500/40
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-black
        shadow-[0_0_30px_rgba(255,215,0,.2)]
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent" />
      </motion.div>

      {/* RIGHT HALF */}

      <motion.div
        initial={{
          x: 0,
          rotate: 0,
          opacity: 1,
        }}
        animate={{
          x: 170,
          rotate: 24,
          opacity: 0,
        }}
        transition={{
          duration: 0.65,
          ease: 'easeOut',
        }}
        className="
        absolute
        z-30
        w-[130px]
        h-[360px]
        overflow-hidden
        rounded-r-3xl
        border-r
        border-t
        border-b
        border-yellow-500/40
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-black
        shadow-[0_0_30px_rgba(255,215,0,.2)]
        "
        style={{
          left: '50%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-400/10 to-transparent" />
      </motion.div>

      {/* CENTER ENERGY */}

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
          duration: 0.55,
        }}
        className="
        absolute
        z-40
        w-[12px]
        h-[380px]
        rounded-full
        bg-gradient-to-b
        from-white
        via-cyan-300
        to-white
        shadow-[0_0_70px_#7dd3fc]
        "
      />

      {/* SHOCKWAVE */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 0.8,
        }}
        animate={{
          scale: 2.6,
          opacity: 0,
        }}
        transition={{
          duration: 0.55,
        }}
        className="
        absolute
        z-20
        w-[260px]
        h-[260px]
        rounded-full
        border-2
        border-cyan-300
        shadow-[0_0_60px_#7dd3fc]
        "
      />
    </>
  );
}