'use client';

import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';
import { CardBackground } from './CardBackground';
import { CardFrame } from './CardFrame';
import { FootballAvatar } from './FootballAvatar';
import { FootballFooter } from './FootballFooter';
import { FootballHeader } from './FootballHeader';
import { FootballStats } from './FootballStats';
import { FootballTechnology } from './FootballTechnology';
import { FootballTrait } from './FootballTrait';

interface FootballCardProps {
  data: CardData;
}

export function FootballCard({ data }: FootballCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, rotateX: 0.9, rotateY: 1.2, scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex max-w-[488px] cursor-pointer flex-col"
    >
      <CardFrame>
        <CardBackground />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 px-4 py-5 shadow-[0_40px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:px-6 sm:py-6">
          <FootballHeader rating={data.rating} rarity={data.rarity} />
          <FootballAvatar avatar={data.avatar} displayName={data.displayName} role={data.role} />
          <div className="mb-4">
            <FootballStats stats={data.stats} />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <FootballTechnology technology={data.technology} />
            <FootballTrait trait={data.trait} />
          </div>
          <FootballFooter edition={data.edition} branding={data.branding} cardNumber={data.cardNumber} />
        </div>
      </CardFrame>
    </motion.article>
  );
}
