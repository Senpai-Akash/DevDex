'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

interface CardRevealProps {
  children: ReactNode;
}

export default function CardReveal({ children }: CardRevealProps) {
  const [phase, setPhase] = useState<
    'pack' | 'shake' | 'flash' | 'reveal'
  >('pack');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('shake'), 1200);
    const t2 = setTimeout(() => setPhase('flash'), 2400);
    const t3 = setTimeout(() => setPhase('reveal'), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden">

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{
          opacity: phase === 'reveal' ? 0 : 1,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Energy Rays */}
      <AnimatePresence>
        {phase !== 'reveal' && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === 'flash' ? 1 : 0.35,
            }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-[240px] w-[2px] origin-bottom bg-gradient-to-t from-transparent via-cyan-300 to-white"
                style={{
                  rotate: `${i * 20}deg`,
                }}
                animate={{
                  scaleY: [0.2, 1.1, 0.6],
                  opacity: [0.2, 1, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.03,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Pack */}
      <AnimatePresence>
        {phase !== 'reveal' && (
          <motion.div
            className="relative z-20"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: phase === 'flash' ? 1.15 : 1,
              rotate:
                phase === 'shake'
                  ? [0, -4, 4, -4, 4, 0]
                  : 0,
            }}
            exit={{
              scale: 2.3,
              opacity: 0,
              transition: {
                duration: 0.45,
              },
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <div
              className="
                w-[260px]
                h-[360px]
                rounded-2xl
                border
                border-cyan-400/40
                bg-gradient-to-br
                from-slate-900
                via-slate-800
                to-black
                shadow-[0_0_70px_rgba(0,255,255,.25)]
                flex
                items-center
                justify-center
              "
            >
              <div className="text-center">
                <div className="text-6xl mb-6">
                  
                </div>

                <h2 className="text-cyan-300 font-bold tracking-[0.4em]">
                  Tap To Open
                </h2>

                <p className="mt-4 text-xs text-cyan-500 tracking-[0.25em]">
                  
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flash */}
      <AnimatePresence>
        {phase === 'flash' && (
          <motion.div
            className="absolute inset-0 bg-white z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.45,
            }}
          />
        )}
      </AnimatePresence>

      {/* Card Reveal */}
      <AnimatePresence>
        {phase === 'reveal' && (
          <motion.div
            className="relative z-40"
            initial={{
              scale: 0.4,
              rotateY: 180,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotateY: 0,
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