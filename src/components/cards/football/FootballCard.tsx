'use client';

import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';
import { CardBackground } from './CardBackground';
import { CardFrame } from './CardFrame';
import { FootballAvatar } from './FootballAvatar';
import { FootballFooter } from './FootballFooter';
import { FootballHeader } from './FootballHeader';
import { FootballStats } from './FootballStats';

interface FootballCardProps {
  data: CardData;
}

export function FootballCard({ data }: FootballCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        rotateY: 5,
        rotateX: 3,
        scale: 1.02,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 18,
      }}
      className="mx-auto w-full max-w-[760px]"
      style={{
        perspective: 1500,
      }}
    >
      <CardFrame>
        <CardBackground />

        <div className="relative z-10 px-10 pt-7 pb-6">

          {/* Header */}
          <FootballHeader
            rating={data.rating}
            rarity={data.rarity}
          />

          {/* Portrait */}
          <div className="-mt-3">
            <FootballAvatar
              avatar={data.avatar}
              displayName={data.displayName}
            />
          </div>

          {/* Player Name */}
          <div className="-mt-4 text-center">

            <h2 className="
              text-[2.45rem]
              font-black
              uppercase
              tracking-[0.12em]
              text-white
              drop-shadow-[0_3px_10px_rgba(0,0,0,.7)]
            ">
              {data.displayName}
            </h2>

            <p className="
              mt-1
              text-[11px]
              uppercase
              tracking-[0.55em]
              text-amber-300
            ">
              {data.role}
            </p>

          </div>

          {/* Stats */}
          <div className="mt-5">
            <FootballStats stats={data.stats} />
          </div>

          {/* Footer */}
          <div className="mt-6">
            <FootballFooter
              edition={data.edition}
              branding={data.branding}
              cardNumber={data.cardNumber}
            />
          </div>

        </div>

      </CardFrame>
    </motion.article>
  );
}