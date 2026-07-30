'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

import Background from './Background';
import Particles from './Particles';
import Pack from './Pack';
import Shockwave from './Shockwave';
import PackSplit from './PackSplit';
import RaritySplash from './RaritySplash';
import { usePackSequence } from './usePackSequence';

interface CardRevealProps {
  children: ReactNode;
  rarity?: string;
}

export default function CardReveal({
  children,
  rarity = 'Legendary',
}: CardRevealProps) {
  const { phase, openPack } = usePackSequence();

  const showPack =
    phase === 'drop' ||
    phase === 'land' ||
    phase === 'charge' ||
    phase === 'ready';

  return (
    <div
      className="
        relative
    flex
    w-screen
    items-center
    justify-center
    min-h-[720px]
    overflow-visible
    -mx-[50vw]
    left-1/2
      "
    >
      {/* Background & Particles*/}
      <div className="absolute inset-0 pointer-events-none">
  <Background />
  <Particles />
</div>


      {/* Booster Pack */}

      <AnimatePresence mode="wait">

        {showPack && (
          <motion.div
            key="pack"
            onClick={openPack}
            className=" absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-30
        cursor-pointer"
            exit={{
              scale: 1.2,
              opacity: 0,
              transition: {
                duration: 0.35,
              },
            }}
          >
            <Pack />

            {phase === 'ready' && (
              <motion.div
                className="
                  absolute
                  -bottom-16
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-cyan-400/40
                  bg-cyan-400/10
                  px-6
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-cyan-200
                "
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                Click To Open
              </motion.div>
            )}
          </motion.div>
        )}

      </AnimatePresence>

      {/* Shockwave */}

      <AnimatePresence>
        {phase === 'opening' && (
          <Shockwave />
        )}
      </AnimatePresence>

      {/* Pack Split */}

      <AnimatePresence>
        {phase === 'opening' && (
          <PackSplit />
        )}
      </AnimatePresence>

      {/* Rarity */}

      <AnimatePresence>
        {phase === 'rarity' && (
          <RaritySplash rarity={rarity} />
        )}
      </AnimatePresence>

      {/* Final Card */}

      <AnimatePresence>

        {(phase === 'reveal' ||
          phase === 'finished') && (
          <motion.div
            className="relative z-50"
            initial={{
              rotateY: 180,
              rotateX: -35,
              scale: 0.15,
              opacity: 0,
            }}
            animate={{
              rotateY: 0,
              rotateX: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 140,
              damping: 14,
            }}
          >
            {children}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}