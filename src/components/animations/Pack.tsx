'use client';

import { motion } from 'framer-motion';

export default function Pack() {
  return (
    <motion.div
      initial={{
        scale: 0.4,
        opacity: 0,
        rotate: -8,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute -inset-12 rounded-full bg-cyan-400/20 blur-[90px]" />

      {/* Pack */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          relative
          h-[360px]
          w-[250px]
          overflow-hidden
          rounded-[22px]
          border
          border-cyan-400/40
          bg-gradient-to-b
          from-slate-900
          via-slate-800
          to-black
          shadow-[0_0_50px_rgba(0,255,255,.25)]
        "
      >
        {/* Metallic Foil */}
        <motion.div
          animate={{
            x: ['-120%', '140%'],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            inset-y-0
            w-24
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
            skew-x-[-20deg]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-20
            bg-[linear-gradient(rgba(0,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,.18)_1px,transparent_1px)]
            bg-[size:30px_30px]
          "
        />

        {/* Logo */}
        <div className="relative flex h-full flex-col items-center justify-center">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: 'linear',
            }}
            className="
              absolute
              h-44
              w-44
              rounded-full
              border
              border-cyan-500/20
            "
          />

          <div className="text-7xl mb-6">
            🎴
          </div>

          <h1
            className="
              text-4xl
              font-black
              tracking-[0.45em]
              text-cyan-300
            "
          >
            DEVDEX
          </h1>

          <p
            className="
              mt-4
              text-sm
              tracking-[0.35em]
              text-cyan-500
            "
          >
            PREMIUM PACK
          </p>

          <div
            className="
              mt-10
              rounded-full
              border
              border-cyan-400/40
              px-6
              py-2
              text-xs
              uppercase
              tracking-[0.3em]
              text-cyan-300
            "
          >
            Tap To Open
          </div>
        </div>

        {/* Bottom foil */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-6
            bg-gradient-to-t
            from-cyan-500/20
            to-transparent
          "
        />
      </motion.div>
    </motion.div>
  );
}