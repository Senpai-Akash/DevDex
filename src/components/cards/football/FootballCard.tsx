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
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-transparent px-4 py-3.5 shadow-[0_30px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:px-5 sm:py-4">
          <FootballHeader rating={data.rating} rarity={data.rarity} />
          <FootballAvatar avatar={data.avatar} displayName={data.displayName} role={data.role} />
          <div className="mb-2">
            <FootballStats stats={data.stats} />
          </div>
          <div className="rounded-2xl border border-amber-400/15 bg-slate-950/55 p-3 shadow-inner shadow-black/20">
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              <div className="min-w-0">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-slate-500">Primary Tech</p>
                <p className="truncate text-[0.72rem] font-black uppercase tracking-[0.12em] text-amber-100">{data.technology}</p>
              </div>
              <div className="min-w-0 text-right">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-slate-500">Trait</p>
                <p className="truncate text-[0.72rem] font-black uppercase tracking-[0.12em] text-amber-100">{data.trait}</p>
              </div>
              <div className="min-w-0">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-slate-500">Class</p>
                <p className="truncate text-[0.72rem] font-black uppercase tracking-[0.12em] text-white">{developerClass}</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-end gap-3 text-right">
                <div>
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-slate-500">Rank</p>
                  <p className="text-lg font-black uppercase leading-none text-emerald-300">{rank}</p>
                </div>
                <div className="min-w-0">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-slate-500">Power</p>
                  <p className="truncate text-[0.72rem] font-black uppercase tracking-[0.1em] text-white">{powerScore}</p>
                </div>
              </div>
            </div>
            {topAchievements.length > 0 ? (
              <div className="mt-2 grid gap-1.5">
                {topAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex min-h-[32px] items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1.5"
                  >
                    <span className="text-xs" aria-hidden="true">{achievement.icon}</span>
                    <div className="min-w-0">
                      <p className="truncate text-[0.62rem] font-black uppercase tracking-[0.1em] text-white">
                        {achievement.title}
                      </p>
                      <p className="truncate text-[0.58rem] font-medium text-emerald-100/70">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <FootballFooter edition={data.edition} branding={data.branding} cardNumber={data.cardNumber} />
        </div>
      </CardFrame>
    </motion.article>
  );
}
