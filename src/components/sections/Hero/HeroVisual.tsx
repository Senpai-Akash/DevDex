"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center py-10">
      {/* Background Glow */}

      <motion.div
        className="absolute h-[620px] w-[620px] rounded-full bg-indigo-500/20 blur-[140px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan Glow */}

      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-indigo-500/20
        "
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* Floating Particles */}

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -80],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          rotateX: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        animate={{
          y: [0, -10, 0],
          rotateY: [-5, 5, -5],
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          h-[560px]
          w-[340px]
          overflow-hidden
          rounded-[34px]
          border
          border-yellow-500/40
          bg-gradient-to-b
          from-[#2c2207]
          via-[#16130c]
          to-[#050505]
          shadow-[0_0_70px_rgba(255,215,0,.22)]
        "
      >
        {" "}
        {/* Metallic Shine */}
        <motion.div
          animate={{
            x: ["-160%", "220%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0
            w-24
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
          "
        />
        {/* Top Accent */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-yellow-400/20 to-transparent" />
        {/* Rating */}
        <div className="absolute left-7 top-7 z-20">
          <h1 className="text-6xl font-black leading-none text-yellow-400">
            96
          </h1>

          <p className="mt-1 text-xs uppercase tracking-[0.45em] text-yellow-300">
            DEV
          </p>
        </div>
        {/* Legendary Badge */}
        <div className="absolute right-6 top-7 z-20 rounded-full border border-purple-400/30 bg-purple-500/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white backdrop-blur">
          Legendary
        </div>
        {/* Avatar */}
        <div className="absolute left-1/2 top-[120px] z-20 -translate-x-1/2">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-3 rounded-full border border-yellow-400/30"
          />

          <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-yellow-400 shadow-[0_0_40px_rgba(255,215,0,.35)]">
            <img
              src="https://avatars.githubusercontent.com/u/1024025?v=4"
              alt="Developer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* Name */}
        <div className="absolute bottom-[150px] w-full text-center z-20">
          <h2 className="text-4xl font-black tracking-wide text-white">
            Linus Torvalds
          </h2>

          <p className="mt-2 text-xs uppercase tracking-[0.45em] text-yellow-300">
            Software Engineer
          </p>
        </div>{" "}
        {/* Stats */}
        <div
          className="
            absolute
            bottom-10
            left-0
            right-0
            z-20
            grid
            grid-cols-2
            gap-y-4
            px-10
            text-sm
            font-bold
            text-yellow-100
          "
        >
          <div>95 PAC</div>
          <div>97 DRI</div>

          <div>99 SHO</div>
          <div>94 DEF</div>

          <div>98 PAS</div>
          <div>96 PHY</div>
        </div>
        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-16
            bg-gradient-to-t
            from-yellow-500/20
            to-transparent
          "
        />
      </motion.div>

      {/* Floating Cards */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          left-0
          top-28
          rounded-2xl
          border
          border-indigo-500/30
          bg-slate-900/70
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Repositories
        </p>

        <h3 className="mt-1 text-2xl font-black text-white">980+</h3>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-52
          rounded-2xl
          border
          border-cyan-500/30
          bg-slate-900/70
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Stars
        </p>

        <h3 className="mt-1 text-2xl font-black text-cyan-300">350K</h3>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-24
          left-4
          rounded-2xl
          border
          border-yellow-500/30
          bg-slate-900/70
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Followers
        </p>

        <h3 className="mt-1 text-2xl font-black text-yellow-300">2.5M</h3>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          right-4
          rounded-2xl
          border
          border-emerald-500/30
          bg-slate-900/70
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Commits
        </p>

        <h3 className="mt-1 text-2xl font-black text-emerald-300">1M+</h3>
      </motion.div>
    </div>
  );
}
