'use client';

import { motion } from 'framer-motion';

export default function Pack() {
  return (
    <motion.div
      initial={{
        y: -300,
        scale: 0.6,
        rotate: -12,
        opacity: 0,
      }}
      animate={{
        y: [0, -10, 0],
        scale: 1,
        rotate: [-2, 2, -2],
        opacity: 1,
      }}
      transition={{
        y: {
          duration: 1.8,
          times: [0, 0.85, 1],
        },
        rotate: {
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        scale: {
          duration: 0.8,
        },
      }}
      className="relative"
    >
      {/* Main Glow */}

      <motion.div
        className="
          absolute
          -inset-16
          rounded-full
          blur-[90px]
          bg-cyan-400/25
        "
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      {/* Shadow */}

      <motion.div
        className="
          absolute
          left-1/2
          top-full
          h-8
          w-52
          -translate-x-1/2
          rounded-full
          bg-black/70
          blur-xl
        "
        animate={{
          scaleX: [0.9, 1.15, 0.9],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Pack */}

      <div
        className="
          relative
          h-[370px]
          w-[255px]
          overflow-hidden
          rounded-[26px]
          border
          border-cyan-300/40
          bg-gradient-to-b
          from-[#091120]
          via-[#13253b]
          to-[#05080f]
          shadow-[0_0_50px_rgba(0,255,255,.25)]
        "
      >
        {/* Holographic Layer */}

        <motion.div
          animate={{
            backgroundPosition: [
              '0% 0%',
              '100% 100%',
              '0% 0%',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            inset-0
            opacity-30
          "
          style={{
            background:
              'linear-gradient(135deg,#06b6d4,#3b82f6,#9333ea,#06b6d4)',
            backgroundSize: '250% 250%',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Metallic Shine */}

        <motion.div
          animate={{
            x: ['-150%', '220%'],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            inset-y-0
            w-24
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/35
            to-transparent
          "
        />

        {/* Top Seal */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-7
            bg-gradient-to-b
            from-cyan-300/20
            to-transparent
          "
        />

        {/* Grid Pattern */}

        <div
          className="
            absolute
            inset-0
            opacity-15
            bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
            bg-[size:28px_28px]
          "
        />

        {/* Logo */}

        <div className="relative flex h-full flex-col items-center justify-center">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              h-44
              w-44
              rounded-full
              border
              border-cyan-400/20
            "
          />

          <div className="text-7xl">
            💠
          </div>

          <h1
            className="
              mt-7
              text-4xl
              font-black
              tracking-[0.35em]
              text-cyan-300
            "
          >
            DEVDEX
          </h1>

          <p
            className="
              mt-5
              text-xs
              uppercase
              tracking-[0.45em]
              text-cyan-400
            "
          >
            Premium Developer Pack
          </p>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              mt-12
              rounded-full
              border
              border-cyan-400/40
              px-7
              py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-200
            "
          >
            Click To Open
          </motion.div>

        </div>

        {/* Bottom Foil */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-10
            bg-gradient-to-t
            from-cyan-500/20
            to-transparent
          "
        />

      </div>
    </motion.div>
  );
}