'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RPGAvatarProps {
  avatar: string;
  displayName: string;
  rarity: string;
}

export function RPGAvatar({
  avatar,
  displayName,
  rarity,
}: RPGAvatarProps) {

  const getGlowColor = (r: string) => {
    const low = r.toLowerCase();

    if (low.includes('legend') || low.includes('myth')) {
      return 'rgba(245,158,11,.55)';
    }

    if (low.includes('epic')) {
      return 'rgba(147,51,234,.45)';
    }

    if (low.includes('rare')) {
      return 'rgba(59,130,246,.40)';
    }

    if (low.includes('uncommon')) {
      return 'rgba(16,185,129,.35)';
    }

    return 'rgba(220,38,38,.28)';
  };

  const glowColor = getGlowColor(rarity);

  return (
    <motion.section
      whileHover={{
        scale: 1.015,
        y: -6,
      }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 18,
      }}
      className="relative mb-1 flex justify-center"
    >

      {/* Ambient magical glow */}

      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="h-[340px] w-[340px] rounded-full blur-[110px]"
          style={{
            background: glowColor,
          }}
        />
      </div>

      {/* Floating particles */}

      <div className="absolute left-12 top-10 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,.9)]" />
      <div className="absolute right-10 top-20 h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_14px_rgba(251,191,36,.8)]" />
      <div className="absolute left-16 bottom-16 h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_16px_rgba(249,115,22,.8)]" />
      <div className="absolute right-14 bottom-10 h-1.5 w-1.5 rounded-full bg-yellow-100 shadow-[0_0_14px_rgba(255,255,255,.8)]" />

      {/* Main portrait frame */}

      <div className="relative h-[270px] w-[270px]">

        {/* Outer bronze frame */}

        <div
          className="
          absolute inset-0
          rounded-[28px]
          bg-gradient-to-br
          from-[#f6d99a]
          via-[#b97725]
          to-[#47240f]
          p-[8px]
          shadow-[0_0_45px_rgba(0,0,0,.7)]
        "
        >

          {/* Inner dark frame */}

          <div
            className="
            relative
            h-full
            w-full
            rounded-[24px]
            bg-gradient-to-br
            from-[#2f1c10]
            via-[#17110d]
            to-[#080605]
            p-[7px]
          "
          >

            {/* Gold engraved line */}

            <div
              className="
              absolute
              inset-[5px]
              rounded-[20px]
              border
              border-[#d4a24b]/60
            "
            />

            {/* Corner ornaments */}

            <div className="absolute left-3 top-3 h-5 w-5 rotate-45 rounded-sm border border-amber-400/70 bg-[#2c190b]" />
            <div className="absolute right-3 top-3 h-5 w-5 rotate-45 rounded-sm border border-amber-400/70 bg-[#2c190b]" />
            <div className="absolute left-3 bottom-3 h-5 w-5 rotate-45 rounded-sm border border-amber-400/70 bg-[#2c190b]" />
            <div className="absolute right-3 bottom-3 h-5 w-5 rotate-45 rounded-sm border border-amber-400/70 bg-[#2c190b]" />

            {/* Side gold bars */}

            <div className="absolute left-3 top-1/2 h-20 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-amber-400/70 to-transparent" />

            <div className="absolute right-3 top-1/2 h-20 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-amber-400/70 to-transparent" />

            {/* Portrait area */}

            <div
              className="
              absolute
              inset-[14px]
              overflow-hidden
              rounded-[16px]
              border
              border-amber-500/40
              bg-black
              shadow-[0_0_25px_rgba(251,191,36,.15)]
            "
            >

              {/* Avatar */}

              <motion.img
                src={avatar}
                alt={displayName}
                whileHover={{
                  scale: 1.05,
                  rotate: -1,
                }}
                transition={{
                  duration: .35,
                }}
                className="
                h-full
                w-full
                object-cover
                object-top
                brightness-105
                contrast-110
                saturate-110
                "
              />

              {/* Vignette */}

              <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.55)_100%)]
                "
              />

              {/* Reflection */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/20
                via-transparent
                to-transparent
                "
              />
                            {/* Bottom shadow */}

              <div
                className="
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-black/65
                to-transparent
                "
              />

              {/* Animated magical shine */}

              <motion.div
                className="
                absolute
                inset-0
                opacity-40
                mix-blend-screen
                "
                animate={{
                  x: [-260, 280],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  background:
                    'linear-gradient(110deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%)',
                }}
              />

              {/* Dust particles */}

              <div className="absolute left-6 top-10 h-1 w-1 rounded-full bg-yellow-200 shadow-[0_0_8px_rgba(255,255,255,.8)]" />
              <div className="absolute right-10 top-20 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,.8)]" />
              <div className="absolute left-12 bottom-16 h-1.5 w-1.5 rounded-full bg-orange-300 shadow-[0_0_8px_rgba(249,115,22,.8)]" />
              <div className="absolute right-8 bottom-8 h-1 w-1 rounded-full bg-yellow-100 shadow-[0_0_8px_rgba(255,255,255,.8)]" />

            </div>

            {/* Top Ornament */}

            <div
              className="
              absolute
              left-1/2
              top-1
              -translate-x-1/2
              text-lg
              text-amber-300
              "
            >
              ⚜
            </div>

            {/* Bottom Ornament */}

            <div
              className="
              absolute
              left-1/2
              bottom-1
              -translate-x-1/2
              text-lg
              text-amber-300
              "
            >
              ⚜
            </div>

            {/* Side runes */}

            <div
              className="
              absolute
              left-[7px]
              top-1/2
              flex
              -translate-y-1/2
              flex-col
              gap-2
              text-[9px]
              text-amber-400/70
              "
            >
              <span>ᚠ</span>
              <span>ᚢ</span>
              <span>ᚦ</span>
            </div>

            <div
              className="
              absolute
              right-[7px]
              top-1/2
              flex
              -translate-y-1/2
              flex-col
              gap-2
              text-[9px]
              text-amber-400/70
              "
            >
              <span>ᚨ</span>
              <span>ᚱ</span>
              <span>ᚲ</span>
            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}