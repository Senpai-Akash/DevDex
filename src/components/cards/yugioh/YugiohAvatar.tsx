'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface YugiohAvatarProps {
  avatar: string;
  displayName: string;
}

export function YugiohAvatar({
  avatar,
  displayName,
}: YugiohAvatarProps) {
  return (
    <section className="mx-auto mb-4 flex w-full justify-center select-none">

      <motion.div
        whileHover={{
          scale: 1.015,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        relative
        w-full
        max-w-[420px]
      "
      >
        {/* Outer Gold Frame */}

        <div
          className="
          relative
          rounded-[0.65rem]
          bg-gradient-to-br
          from-[#f6d47c]
          via-[#9b6a2f]
          to-[#4d3110]
          p-[8px]
          shadow-[0_10px_30px_rgba(0,0,0,.75)]
        "
        >
          {/* Engraved Border */}

          <div
            className="
            absolute
            inset-[4px]
            rounded-[0.5rem]
            border
            border-[#f8df8d]/45
          "
          />

          <div
            className="
            absolute
            inset-[8px]
            rounded-[0.4rem]
            border
            border-[#6d4418]/60
          "
          />

          {/* Artwork */}

          <div
            className="
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-[0.25rem]
            border
            border-black
            bg-[#120903]
          "
          >
            {/* Foil */}

            <motion.div
              className="absolute inset-0 z-20 pointer-events-none"
              animate={{
                x: ['-120%', '120%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background:
                  'linear-gradient(110deg,transparent 35%,rgba(255,255,255,.18) 50%,transparent 65%)',
              }}
            />

            {/* Gold Glow */}

            <div
              className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,215,120,.18),transparent_70%)]
              z-10
            "
            />

            {/* Image */}

            <img
              src={avatar}
              alt={displayName}
              className="
              relative
              z-0
              h-full
              w-full
              object-cover
              saturate-[95%]
              contrast-[105%]
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
            />

            {/* Vignette */}

            <div
              className="
              absolute
              inset-0
              z-20
              bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,.72)_100%)]
            "
            />

            {/* Corner Decorations */}

            <div className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-[#f7d978]/80 z-30" />
            <div className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-[#f7d978]/80 z-30" />
            <div className="absolute left-2 bottom-2 h-4 w-4 border-l-2 border-b-2 border-[#f7d978]/80 z-30" />
            <div className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-[#f7d978]/80 z-30" />

            {/* Bottom Artwork Plate */}

            <div
              className="
              absolute
              bottom-2
              right-2
              z-30
              rounded-sm
              border
              border-[#e7c76b]
              bg-[#140a03]/90
              px-2
              py-[2px]
              text-[0.45rem]
              font-bold
              tracking-[0.18em]
              text-[#f7d978]
            "
            >
              ARTWORK
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}