"use client";

import { motion } from "framer-motion";

interface FootballAvatarProps {
  avatar: string;
  displayName: string;
}

export function FootballAvatar({
  avatar,
  displayName,
}: FootballAvatarProps) {
  return (
    <motion.section
      whileHover={{
        scale: 1.03,
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="relative -mt-2 mb-4 flex justify-center"
    >
      <div className="relative h-[340px] w-[340px]">

        {/* Stadium Glow */}

        <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-300/20 blur-[110px]" />

        <div className="absolute left-1/2 top-16 h-52 w-52 -translate-x-1/2 rounded-full bg-yellow-200/15 blur-[70px]" />

        {/* Metallic Ring */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[285px]
            w-[285px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-[3px]
            border-amber-300/40
            shadow-[0_0_30px_rgba(251,191,36,.25)]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/10
          "
        />

        {/* Portrait */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[305px]
            w-[305px]
            -translate-x-1/2
            -translate-y-[47%]
            overflow-hidden
            rounded-full
          "
        >
          <img
            src={avatar}
            alt={displayName}
            className="
              h-full
              w-full
              object-cover
              object-top
              scale-[1.18]
            "
          />

          {/* Top Light */}

          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />

          {/* Bottom Fade */}

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Foil Reflection */}

          <div
            className="
              absolute
              -left-20
              top-0
              h-full
              w-20
              rotate-12
              bg-white/10
              blur-xl
            "
          />
        </div>

        {/* Bottom Shadow */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            h-10
            w-44
            -translate-x-1/2
            rounded-full
            bg-black/45
            blur-xl
          "
        />

        {/* Small Premium Accents */}

        <div className="absolute left-1/2 top-5 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,.8)]" />

        <div className="absolute left-8 top-1/2 h-1.5 w-1.5 rounded-full bg-white/70" />

        <div className="absolute right-8 top-1/2 h-1.5 w-1.5 rounded-full bg-white/70" />
      </div>
    </motion.section>
  );
}