'use client';

import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';

interface RPGCardProps {
  data: CardData;
}

export function RPGCard({ data }: RPGCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, rotateX: 0.5, rotateY: 0.8, scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex max-w-[488px] cursor-pointer flex-col"
    >
      <div className="relative overflow-hidden rounded-lg border-4 border-purple-700 bg-gradient-to-b from-purple-950 via-slate-900 to-purple-950 px-6 py-8 shadow-[0_0_60px_rgba(168,85,247,0.25)] sm:px-8 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="relative flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center justify-center">
            <span className="text-4xl">⚔️</span>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 blur-xl opacity-70" />
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-purple-400 bg-slate-800 shadow-lg">
              <img src={data.avatar} alt={data.displayName} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-400 bg-yellow-500 shadow-lg">
              <p className="text-lg font-black text-purple-900">{Math.floor(data.rating / 20)}</p>
            </div>
          </div>

          <h2 className="mb-2 font-serif text-3xl font-black uppercase tracking-wider text-purple-200">{data.displayName}</h2>
          <p className="mb-6 border-b-2 border-purple-600 pb-4 text-sm font-semibold uppercase tracking-widest text-purple-300">{data.role}</p>

          <div className="w-full space-y-3 rounded-lg border-2 border-purple-600 bg-purple-900/40 p-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-purple-300">Strength</span>
              <div className="h-2 w-24 rounded-full bg-purple-700/50">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-600"
                  style={{ width: `${data.stats.attack}%` }}
                />
              </div>
              <span className="text-xs font-bold text-purple-200">{data.stats.attack}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-purple-300">Resilience</span>
              <div className="h-2 w-24 rounded-full bg-purple-700/50">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                  style={{ width: `${data.stats.defense}%` }}
                />
              </div>
              <span className="text-xs font-bold text-purple-200">{data.stats.defense}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-purple-300">Intellect</span>
              <div className="h-2 w-24 rounded-full bg-purple-700/50">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-600"
                  style={{ width: `${data.stats.intelligence}%` }}
                />
              </div>
              <span className="text-xs font-bold text-purple-200">{data.stats.intelligence}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <div className="rounded border-2 border-purple-500 bg-purple-900/60 px-3 py-1 text-xs font-bold uppercase text-purple-200">
              {data.technology}
            </div>
            <div className="rounded border-2 border-yellow-500 bg-yellow-900/40 px-3 py-1 text-xs font-bold uppercase text-yellow-300">
              {data.rarity}
            </div>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-400">{data.cardNumber}</p>
        </div>
      </div>
    </motion.article>
  );
}
