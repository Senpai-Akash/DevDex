"use client";

import { useEffect, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import OpeningPack from "./OpeningPack";
import Pack from "./Pack";
import EnergyEffects from "./EnergyEffects";
import TearEffect from "./TearEffect";
import PackSplit from "./PackSplit";
import RaritySplash from "./RaritySplash";

interface CardRevealProps {
  children: ReactNode;
  rarity?: string;
}

type RevealPhase =
  | "intro"
  | "pack"
  | "charge"
  | "tear"
  | "split"
  | "flash"
  | "rarity"
  | "card";

export default function CardReveal({
  children,
  rarity = "Legendary",
}: CardRevealProps) {
  const [phase, setPhase] = useState<RevealPhase>("intro");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("pack"), 300),
      setTimeout(() => setPhase("charge"), 1200),
      setTimeout(() => setPhase("tear"), 2600),
      setTimeout(() => setPhase("split"), 3200),
      setTimeout(() => setPhase("flash"), 3700),
      setTimeout(() => setPhase("rarity"), 4050),
      setTimeout(() => setPhase("card"), 4700),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex min-h-[700px] items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{
          opacity: phase === "card" ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
      />
      {/* ENERGY */}
      <AnimatePresence>
        {phase !== "card" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "charge" ? 1 : 0.5,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <EnergyEffects />
          </motion.div>
        )}
      </AnimatePresence>
      {/* PACK */}
      <AnimatePresence>
        {(phase === "intro" || phase === "pack" || phase === "charge") && (
          <motion.div
            className="relative z-30"
            initial={{
              opacity: 0,
              y: -300,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.2,
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
            }}
          >
            <OpeningPack />

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: phase === "charge" ? [1, 1.04, 1.1, 1.18] : 1,

                rotate: phase === "charge" ? [0, -2, 2, -2, 2, 0] : 0,
              }}
              transition={{
                duration: 1.2,
                repeat: phase === "charge" ? Infinity : 0,
              }}
            >
              <Pack />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>{" "}
      {/* TEAR */}
      <AnimatePresence>
        {phase === "tear" && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <TearEffect />
          </motion.div>
        )}
      </AnimatePresence>
      {/* SPLIT */}
      <AnimatePresence>
        {phase === "split" && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center"
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <PackSplit />
          </motion.div>
        )}
      </AnimatePresence>
      {/* FLASH */}
      <AnimatePresence>
        {phase === "flash" && (
          <motion.div
            className="
            absolute
            inset-0
            z-[70]
            bg-white
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 0.55,
            }}
          />
        )}
      </AnimatePresence>
      {/* RARITY */}
      <AnimatePresence>
        {phase === "rarity" && (
          <motion.div
            className="
            absolute
            inset-0
            z-[80]
            flex
            items-center
            justify-center
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <RaritySplash rarity={rarity} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* CARD */}
      <AnimatePresence>
        {phase === "card" && (
          <motion.div
            className="
            relative
            z-[100]
            "
            initial={{
              opacity: 0,
              scale: 0.4,
              rotateY: 180,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              filter: "blur(0px)",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          >
            {" "}
            <motion.div
              initial={{
                rotateY: -10,
                scale: 0.96,
              }}
              animate={{
                rotateY: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              {children}
            </motion.div>
            {/* Landing Glow */}
            <motion.div
              className="
              absolute
              -inset-16
              -z-10
              rounded-full
              bg-cyan-400/20
              blur-[90px]
              "
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 0.6, 0.25],
                scale: [0.5, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
              }}
            />
            {/* Landing Shockwave */}
            <motion.div
              className="
              absolute
              left-1/2
              top-1/2
              -z-20
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-cyan-300/40
              "
              initial={{
                scale: 0,
                opacity: 0.9,
              }}
              animate={{
                scale: 1.6,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
