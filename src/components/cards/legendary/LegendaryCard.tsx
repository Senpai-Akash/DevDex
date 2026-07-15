'use client';

import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';

interface LegendaryCardProps {
  data: CardData;
}

export function LegendaryCard({ data }: LegendaryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex max-w-[520px] cursor-pointer flex-col"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative overflow-hidden rounded-2xl border-4 border-yellow-300 bg-gradient-to-b from-amber-900 via-slate-900 to-amber-950 px-8 py-10 shadow-2xl sm:px-10 sm:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(217,119,6,0.15),transparent)]" />

        <div className="relative flex flex-col items-center text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="mb-4 inline-block text-5xl"
          >
            👑
          </motion.div>

          <div className="mb-8 space-y-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 blur-2xl opacity-50" />
              <motion.div
                animate={{ boxShadow: ['0_0_30px_rgba(217,119,6,0.6)', '0_0_60px_rgba(217,119,6,1)', '0_0_30px_rgba(217,119,6,0.6)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-yellow-300 bg-slate-900 shadow-2xl"
              >
                <img src={data.avatar} alt={data.displayName} className="h-full w-full object-cover" />
              </motion.div>
              <div className="absolute -right-2 bottom-2 rounded-full border-2 border-yellow-300 bg-gradient-to-br from-yellow-300 to-orange-500 p-2">
                <p className="text-xl font-black text-slate-900">{data.rating}</p>
              </div>
            </div>
          </div>

          <h2 className="mb-2 text-4xl font-black uppercase tracking-wider text-yellow-200">{data.displayName}</h2>
          <p className="mb-2 border-b-4 border-yellow-500 pb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-100">
            {data.role}
          </p>

          <div className="mt-6 w-full space-y-4 rounded-xl border-4 border-yellow-400 bg-gradient-to-br from-amber-900/60 to-slate-900/60 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded border-2 border-yellow-400 bg-slate-900/80 px-3 py-2 text-center">
                <p className="text-xs font-bold uppercase text-yellow-300">Overall</p>
                <p className="text-2xl font-black text-yellow-200">{data.stats.overall}</p>
              </div>
              <div className="rounded border-2 border-orange-400 bg-slate-900/80 px-3 py-2 text-center">
                <p className="text-xs font-bold uppercase text-orange-300">Rarity</p>
                <p className="text-lg font-black text-orange-200">{data.rarity}</p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { label: 'Power', value: data.stats.attack, color: 'from-red-500' },
                { label: 'Defense', value: data.stats.defense, color: 'from-blue-500' },
                { label: 'Wisdom', value: data.stats.intelligence, color: 'from-purple-500' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase text-yellow-200">{stat.label}</span>
                    <span className="font-bold text-yellow-100">{stat.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 border border-yellow-400/30">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${stat.color} to-yellow-400 shadow-lg`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <div className="rounded-full border-2 border-yellow-400 bg-yellow-900/40 px-4 py-2 text-xs font-bold uppercase text-yellow-200">
              {data.technology}
            </div>
            <div className="rounded-full border-2 border-orange-400 bg-orange-900/40 px-4 py-2 text-xs font-bold uppercase text-orange-200">
              Legendary
            </div>
          </div>

          <motion.p
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-6 text-xs uppercase tracking-[0.35em] text-yellow-300"
          >
            ✦ {data.cardNumber} ✦
          </motion.p>
        </div>
      </div>
    </motion.article>
  );
}
