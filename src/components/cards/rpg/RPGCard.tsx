"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardData } from "../../../types/card";
import { RPGBackground } from "./RPGBackground";
import { RPGHeader } from "./RPGHeader";
import { RPGAvatar } from "./RPGAvatar";
import { RPGStats } from "./RPGStats";
import { RPGPower } from "./RPGPower";
import { RPGSkills } from "./RPGSkills";
import { RPGFooter } from "./RPGFooter";

interface RPGCardProps {
  data: CardData;
}

export function RPGCard({ data }: RPGCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -10,
        rotateX: 2,
        rotateY: 2,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
className="
          group
          relative
          mx-auto
          w-full
          max-w-full md:max-w-[700px]
          cursor-pointer
          select-none
        "
      style={{
        transformStyle: "preserve-3d",
        perspective: 1400,
      }}
    >
      {/* Ambient glow */}
      <div
        className="
          absolute
          -inset-10
          rounded-[3rem]
          bg-gradient-to-b
          from-purple-800/10
          via-red-800/5
          to-transparent
          blur-3xl
          pointer-events-none
          transition-opacity
          duration-500
          opacity-70
          group-hover:opacity-100
        "
      />

      {/* Main Frame */}
      <div
        className="
          relative
          z-10
          rounded-[34px]
          border
          border-[#d97706]/40
          bg-gradient-to-b
          from-[#3d2614]
          via-[#24160b]
          to-[#140c06]
          p-[10px]
          shadow-[0_35px_80px_rgba(0,0,0,.88)]
        "
      >
        {/* Inner border */}
        <div
          className="
            pointer-events-none
            absolute
            inset-[6px]
            rounded-[28px]
            border
            border-[#d97706]/20
          "
        />

        {/* Content */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border
            border-[#5c3e21]/40
            bg-[#0c0806]
            px-5
            py-3
            sm:px-8
            sm:py-6
          "
        >
          <RPGBackground />

          <div className="relative z-20 flex flex-col gap-2">
            <RPGHeader data={data} />

            <RPGAvatar
              avatar={data.avatar}
              displayName={data.displayName}
              rarity={data.rarity}
            />

            <RPGPower data={data} />

            <RPGStats stats={data.stats} />


            <RPGSkills data={data} />

            <RPGFooter
              edition={data.edition}
              branding={data.branding}
              cardNumber={data.cardNumber}
            />
          </div>
        </div>

        {/* Corners */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-2 top-2 h-8 w-8 text-[#92400e]">
            <svg viewBox="0 0 100 100" className="h-full w-full fill-current">
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>

          <div className="absolute right-2 top-2 h-8 w-8 text-[#92400e]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full rotate-90 fill-current"
            >
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>

          <div className="absolute bottom-2 left-2 h-8 w-8 text-[#92400e]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full -rotate-90 fill-current"
            >
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>

          <div className="absolute bottom-2 right-2 h-8 w-8 text-[#92400e]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full rotate-180 fill-current"
            >
              <rect x="0" y="0" width="16" height="16" />
              <circle cx="8" cy="8" r="4" fill="#140c06" />
              <circle cx="8" cy="8" r="2" fill="#d97706" />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}