"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardData } from "../../../types/card";
import { YugiohBackground } from "./YugiohBackground";
import { YugiohHeader } from "./YugiohHeader";
import { YugiohAvatar } from "./YugiohAvatar";
import { YugiohInfo } from "./YugiohInfo";
import { YugiohAbilities } from "./YugiohAbilities";
import { YugiohFooter } from "./YugiohFooter";

interface YugiohCardProps {
  data: CardData;
}

export function YugiohCard({ data }: YugiohCardProps) {

  const rarity = data.rarity?.toLowerCase() ?? "common";

  const rarityStyle = (() => {

    if (rarity.includes("ghost")) {
      return {
        frame:
          "from-white via-slate-200 to-cyan-100 border-white/70",
        glow:
          "from-cyan-200/25 via-white/15 to-transparent",
        shimmer: "rgba(255,255,255,.35)",
      };
    }

    if (rarity.includes("secret")) {
      return {
        frame:
          "from-fuchsia-700 via-violet-600 to-cyan-500 border-fuchsia-400/70",
        glow:
          "from-fuchsia-500/20 via-cyan-500/15 to-transparent",
        shimmer: "rgba(255,255,255,.32)",
      };
    }

    if (rarity.includes("ultra")) {
      return {
        frame:
          "from-yellow-200 via-amber-400 to-yellow-700 border-yellow-300/70",
        glow:
          "from-yellow-300/20 via-amber-300/12 to-transparent",
        shimmer: "rgba(255,255,255,.28)",
      };
    }

    if (rarity.includes("super")) {
      return {
        frame:
          "from-indigo-700 via-violet-600 to-fuchsia-500 border-violet-400/60",
        glow:
          "from-violet-500/15 via-fuchsia-500/10 to-transparent",
        shimmer: "rgba(255,255,255,.24)",
      };
    }

    if (rarity.includes("rare")) {
      return {
        frame:
          "from-blue-700 via-cyan-500 to-blue-400 border-cyan-300/60",
        glow:
          "from-cyan-500/15 via-blue-500/10 to-transparent",
        shimmer: "rgba(255,255,255,.20)",
      };
    }

    return {
      frame:
        "from-[#6b4423] via-[#2b1809] to-[#090402] border-[#ab8552]/30",
      glow:
        "from-[#ab8552]/8 via-[#855f30]/4 to-transparent",
      shimmer: "rgba(255,255,255,.18)",
    };

  })();

  return (

    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.012,
        rotateX: -1,
        rotateY: 1,
      }}
      transition={{ duration: .35 }}
      className="group relative mx-auto flex w-full max-w-[580px] cursor-pointer flex-col select-none"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >

      {/* rarity glow */}

      <div
        className={`absolute -inset-5 rounded-[2.5rem] bg-gradient-to-b ${rarityStyle.glow} blur-3xl pointer-events-none opacity-70 group-hover:opacity-100 transition-all duration-500`}
      />

      {/* frame */}

      <div
        className={`relative z-10 rounded-[2rem] border bg-gradient-to-br ${rarityStyle.frame} p-[8px] shadow-[0_30px_80px_rgba(0,0,0,.95)]`}
      >

        <div className="absolute inset-[6px] rounded-[1.85rem] border border-white/10" />

        <div className="absolute inset-[9px] rounded-[1.75rem] border border-white/5" />

        <div className="relative overflow-hidden rounded-[1.7rem] border border-[#3a2510]/30 bg-[#0a0502]/98 px-4 py-3 sm:px-5 sm:py-4">

          {/* holographic sweep */}

          <motion.div
            className="absolute inset-0 opacity-25 pointer-events-none"
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: `linear-gradient(
                110deg,
                transparent 30%,
                ${rarityStyle.shimmer} 50%,
                transparent 70%
              )`,
            }}
          />

          {/* subtle rainbow foil */}

          {rarity.includes("secret") && (
            <motion.div
              className="absolute inset-0 mix-blend-screen opacity-20"
              animate={{
                backgroundPosition: [
                  "0% 0%",
                  "100% 100%",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#ff00ff,#00ffff,#ffff00,#ff00ff)",
                backgroundSize: "300% 300%",
              }}
            />
          )}

          <YugiohBackground />

          <div className="relative z-20 flex flex-col">

            <YugiohHeader data={data} />

            <YugiohAvatar
              avatar={data.avatar}
              displayName={data.displayName}
            />

            <YugiohInfo data={data} />

            <YugiohAbilities data={data} />

            <YugiohFooter
              edition={data.edition}
              branding={data.branding}
              cardNumber={data.cardNumber}
              displayName={data.displayName}
            />

          </div>

        </div>
        {/* Minimal decorative corner ticks */}
                {/* Decorative Corners */}

        <div className="absolute inset-0 pointer-events-none">

          {/* Top Left */}

          <div className="absolute left-2 top-2 h-5 w-5 text-[#fcd34d]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full fill-current"
            >
              <path d="M0 0 L18 0 L18 5 L5 5 L5 18 L0 18 Z" />
            </svg>
          </div>

          {/* Top Right */}

          <div className="absolute right-2 top-2 h-5 w-5 text-[#fcd34d]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full rotate-90 fill-current"
            >
              <path d="M0 0 L18 0 L18 5 L5 5 L5 18 L0 18 Z" />
            </svg>
          </div>

          {/* Bottom Left */}

          <div className="absolute bottom-2 left-2 h-5 w-5 text-[#fcd34d]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full -rotate-90 fill-current"
            >
              <path d="M0 0 L18 0 L18 5 L5 5 L5 18 L0 18 Z" />
            </svg>
          </div>

          {/* Bottom Right */}

          <div className="absolute bottom-2 right-2 h-5 w-5 text-[#fcd34d]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full rotate-180 fill-current"
            >
              <path d="M0 0 L18 0 L18 5 L5 5 L5 18 L0 18 Z" />
            </svg>
          </div>

          {/* Secret Rare animated rainbow border */}

          {rarity.includes("secret") && (

            <motion.div
              className="absolute inset-[6px] rounded-[1.85rem]"
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                border: "1px solid rgba(255,255,255,.35)",
                boxShadow:
                  "0 0 20px rgba(255,0,255,.35),0 0 35px rgba(0,255,255,.25)",
              }}
            />

          )}

          {/* Ghost Rare pulse */}

          {rarity.includes("ghost") && (

            <motion.div
              className="absolute inset-[6px] rounded-[1.85rem]"
              animate={{
                opacity: [0.15, 0.45, 0.15],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              style={{
                border: "1px solid rgba(255,255,255,.7)",
                boxShadow:
                  "0 0 30px rgba(255,255,255,.45)",
              }}
            />

          )}

        </div>

      </div>

    </motion.article>

  );

}