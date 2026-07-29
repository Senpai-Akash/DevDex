'use client';

import { motion } from 'framer-motion';

export default function TearEffect() {
  return (
    <>
      {/* Main Energy Slash */}
      <motion.div
        initial={{
          scaleY: 0,
          opacity: 0,
        }}
        animate={{
          scaleY: 1,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 0.55,
          ease: 'easeOut',
        }}
        className="
        absolute
        z-40
        h-[420px]
        w-[7px]
        rounded-full
        bg-gradient-to-b
        from-cyan-200
        via-white
        to-cyan-300
        shadow-[0_0_60px_#7dd3fc]
        "
      />

      {/* Outer Glow */}
      <motion.div
        initial={{
          scaleY: 0,
          opacity: 0,
        }}
        animate={{
          scaleY: 1.2,
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 0.6,
        }}
        className="
        absolute
        z-30
        h-[440px]
        w-[30px]
        rounded-full
        bg-cyan-300/30
        blur-xl
        "
      />

      {/* Sparks */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x:
              (Math.random() - 0.5) * 260,

            y:
              (Math.random() - 0.5) * 320,

            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.05,
          }}
          className="
          absolute
          z-50
          h-2
          w-2
          rounded-full
          bg-cyan-200
          shadow-[0_0_14px_white]
          "
        />
      ))}
    </>
  );
}