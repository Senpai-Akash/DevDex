'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

import OpeningPack from './OpeningPack';
import EnergyEffects from './EnergyEffects';
import RaritySplash from './RaritySplash';

interface CardRevealProps {
  children: ReactNode;
  rarity?: string;
}

export default function CardReveal({
  children,
  rarity = 'Legendary',
}: CardRevealProps) {
  const [phase, setPhase] = useState<
    'pack' | 'charge' | 'explode' | 'rarity' | 'reveal'
  >('pack');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('charge'), 1000),
      setTimeout(() => setPhase('explode'), 2200),
      setTimeout(() => setPhase('rarity'), 2900),
      setTimeout(() => setPhase('reveal'), 4200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-[700px]">

      {/* Background */}

      <motion.div
        className="absolute inset-0 bg-black"
        animate={{
          opacity: phase === 'reveal' ? 0 : 1,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Energy */}

      <AnimatePresence>
        {(phase === 'charge' ||
          phase === 'explode' ||
          phase === 'rarity') && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <EnergyEffects />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pack */}

      <AnimatePresence>
        {(phase === 'pack' ||
          phase === 'charge' ||
          phase === 'explode') && (
          <motion.div
            className="absolute z-20"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,

              scale:
                phase === 'explode'
                  ? 1.45
                  : phase === 'charge'
                  ? 1.08
                  : 1,

              rotate:
                phase === 'charge'
                  ? [0, -6, 6, -6, 6, 0]
                  : 0,
            }}
            exit={{
              opacity: 0,
              scale: 3,
              rotate: 18,
              transition: {
                duration: 0.35,
              },
            }}
          >
            <OpeningPack />
          </motion.div>
        )}
      </AnimatePresence>

      {/* White Explosion */}

      <AnimatePresence>
        {phase === 'explode' && (
          <motion.div
            className="absolute inset-0 bg-white z-40"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          />
        )}
      </AnimatePresence>

      {/* Rarity Splash */}

      <AnimatePresence>
        {phase === 'rarity' && (
          <RaritySplash rarity={rarity} />
        )}
      </AnimatePresence>

      {/* Final Card */}

      <AnimatePresence>
        {phase === 'reveal' && (
          <motion.div
            className="relative z-50"
            initial={{
              rotateY: 180,
              rotateX: -40,
              scale: 0.2,
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
              stiffness: 130,
              damping: 13,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}