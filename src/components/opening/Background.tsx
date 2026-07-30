'use client';

import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Animated Aurora */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] rounded-full"
        style={{
          background:
            'radial-gradient(circle,#06b6d433 0%,#3b82f622 35%,transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          rotate: 360,
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />

      {/* Floor Grid */}

      <div
        className="
        absolute
        bottom-[-45%]
        left-1/2
        h-[1200px]
        w-[2200px]
        -translate-x-1/2
        rotate-x-[82deg]
        opacity-30
        "
      >
        <div
          className="
          h-full
          w-full
          bg-[linear-gradient(rgba(34,211,238,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.18)_1px,transparent_1px)]
          bg-[size:70px_70px]
          "
        />
      </div>

      {/* Vertical Light Columns */}

      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full w-[2px]"
          style={{
            left: `${15 + i * 12}%`,
            background:
              'linear-gradient(to bottom,transparent,#22d3ee66,transparent)',
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Fog */}

      <motion.div
        className="
        absolute
        bottom-0
        h-[320px]
        w-full
        bg-gradient-to-t
        from-cyan-500/10
        via-cyan-300/5
        to-transparent
        blur-3xl
        "
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Top Glow */}

      <motion.div
        className="
        absolute
        top-[-220px]
        left-1/2
        h-[520px]
        w-[520px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[120px]
        "
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Vignette */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,.85)_100%)]
        "
      />
    </div>
  );
}