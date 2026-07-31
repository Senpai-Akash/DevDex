'use client';

import { motion } from 'framer-motion';

export default function Pack() {
  return (
    <motion.div
      initial={{
        y: -500,
        scale: 0.55,
        rotate: -18,
        opacity: 0,
      }}
      animate={{
        y: [0, -6, 0],
        rotate: [-1, 1, -1],
        scale: [1, 1.015, 1],
        opacity: 1,
      }}
      transition={{
        y: {
          duration: 1.35,
          times: [0, 0.88, 1],
          ease: 'easeOut',
        },
        rotate: {
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        scale: {
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      className="relative"
    >
      {/* Main Aura */}

      <motion.div
        className="
          absolute
          -inset-24
          rounded-full
          blur-[120px]
        "
        style={{
          background:
            'radial-gradient(circle,#22d3ee55 0%,#3b82f622 45%,transparent 80%)',
        }}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
      />

      {/* Ground Shadow */}

      <motion.div
        className="
          absolute
          top-full
          left-1/2
          h-10
          w-56
          -translate-x-1/2
          rounded-full
          bg-black/80
          blur-2xl
        "
        animate={{
          scaleX: [0.9, 1.08, 0.9],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
      />

      {/* PACK */}

      <div
        className="
          relative
          h-[395px]
          w-[265px]
          overflow-hidden
          rounded-[22px]
          border
          border-cyan-300/35
        "
        style={{
          background:
            'linear-gradient(145deg,#020617,#08111f,#10203a,#050914)',
          boxShadow:
            '0 0 80px rgba(34,211,238,.18)',
        }}
      >
        {/* Rainbow Foil */}

        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'linear-gradient(120deg,#06b6d4,#38bdf8,#8b5cf6,#ec4899,#06b6d4)',
            backgroundSize: '350% 350%',
            mixBlendMode: 'screen',
          }}
          animate={{
            backgroundPosition: [
              '0% 50%',
              '100% 50%',
              '0% 50%',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Metallic Shine */}

        <motion.div
          className="
            absolute
            inset-y-[-20%]
            w-24
            rotate-[22deg]
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            blur-sm
          "
          animate={{
            x: ['-180%', '260%'],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: 'easeInOut',
          }}
        />

        {/* Top Crimp */}

        <div className="absolute top-0 left-0 right-0 h-9 bg-gradient-to-b from-white/20 via-cyan-300/10 to-transparent" />

        <div className="absolute top-5 left-0 right-0 h-[2px] bg-cyan-200/35" />

        {/* Bottom Crimp */}

        <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-white/15 via-cyan-300/10 to-transparent" />

        <div className="absolute bottom-5 left-0 right-0 h-[2px] bg-cyan-200/25" />

        {/* Hex Pattern */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            bg-[linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]
            bg-[size:26px_26px]
          "
        />

        {/* Decorative Circle */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-44
            w-44
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300/20
          "
        />

        {/* Logo */}

        <div className="relative flex h-full flex-col items-center justify-center">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-7xl"
          >
          </motion.div>

          <h1
            className="
              mt-7
              text-[42px]
              font-black
              tracking-[0.32em]
              text-cyan-300
            "
          >
            DEVDEX
          </h1>

          <p
            className="
              mt-5
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-cyan-300/80
            "
          >
            PREMIUM DEVELOPER PACK
          </p>

          {/* Click Button */}

          <motion.div
            animate={{
              opacity: [0.45, 1, 0.45],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              mt-12
              rounded-full
              border
              border-cyan-300/40
              bg-cyan-400/10
              px-8
              py-3
              text-[11px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-cyan-200
              shadow-[0_0_25px_rgba(34,211,238,.2)]
            "
          >
            CLICK TO OPEN
          </motion.div>

        </div>

        {/* Corner Glow */}

        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      </div>
    </motion.div>
  );
}