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
  const topAchievements = data.achievements.slice(0, 3);
  const developerClass = data.developerClass ?? data.role;
  const rank = data.rank ?? data.rarity;
  const powerScore = data.powerScore?.toLocaleString() ?? String(data.rating);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, rotateX: 0.9, rotateY: 1.2, scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex w-full max-w-[580px] cursor-pointer flex-col"
    >
      <CardFrame>
        <CardBackground />
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-transparent px-5 py-4 shadow-[0_30px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:px-7 sm:py-5">
          <FootballHeader rating={data.rating} rarity={data.rarity} />
          <FootballAvatar avatar={data.avatar} displayName={data.displayName} />

          <section className="mb-4 text-center">
            <p className="text-[1.75rem] font-black uppercase leading-tight tracking-[0.08em] text-amber-100 sm:text-[2.15rem]">
              {data.displayName}
            </p>
            <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
              {developerClass}
            </p>
            <div className="mx-auto mt-2 flex max-w-[420px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-amber-200/80">
              <span>{data.technology}</span>
              <span className="h-1 w-1 rounded-full bg-amber-300/40" />
              <span>{data.trait}</span>
              <span className="h-1 w-1 rounded-full bg-amber-300/40" />
              <span>{rank} Rank</span>
              <span className="h-1 w-1 rounded-full bg-amber-300/40" />
              <span>{powerScore} Power</span>
            </div>
          </section>

          <div className="mb-4">
            <FootballStats stats={data.stats} />
          </div>

          <section className="space-y-2">
            <p className="text-center text-[0.58rem] font-bold uppercase tracking-[0.34em] text-slate-500">
              Achievements
            </p>
            {topAchievements.length > 0 ? (
              <div className="mx-auto grid max-w-[440px] gap-2">
                {topAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3"
                  >
                    <span className="text-sm" aria-hidden="true">{achievement.icon}</span>
                    <div className="min-w-0">
                      <p className="truncate text-[0.68rem] font-black uppercase tracking-[0.12em] text-white">
                        {achievement.title}
                      </p>
                      <p className="truncate text-[0.6rem] font-medium text-emerald-100/65">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
          <FootballFooter edition={data.edition} branding={data.branding} cardNumber={data.cardNumber} />
        </div>
      </CardFrame>
    </motion.article>
  );
}
