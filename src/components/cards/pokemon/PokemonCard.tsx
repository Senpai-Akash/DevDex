'use client';

import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';

interface PokemonCardProps {
  data: CardData;
}

export function PokemonCard({ data }: PokemonCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex max-w-[488px] cursor-pointer flex-col"
    >
      <div className="relative overflow-hidden rounded-3xl border-4 border-yellow-400 bg-gradient-to-b from-yellow-50 to-blue-100 px-6 py-8 shadow-[0_0_40px_rgba(250,204,21,0.3)] sm:px-8 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="relative flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-lg">
            <div className="rounded-full bg-blue-50 p-2">
              <span className="text-3xl">⚡</span>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-yellow-400 bg-blue-100 shadow-lg">
              <img src={data.avatar} alt={data.displayName} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col items-start gap-1 rounded-lg bg-yellow-200/40 px-3 py-2 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-900">Rating</p>
              <p className="text-2xl font-black text-yellow-600">{data.rating}</p>
            </div>
          </div>

          <h2 className="mb-2 text-2xl font-black uppercase tracking-wider text-blue-900">{data.displayName}</h2>
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-blue-700">{data.role}</p>

          <div className="flex gap-4">
            <div className="rounded-full bg-blue-400 px-4 py-2 text-xs font-bold uppercase text-white shadow-lg">
              {data.technology}
            </div>
            <div className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase text-blue-900 shadow-lg">
              {data.rarity}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl bg-white/60 p-4 backdrop-blur">
          <div className="text-center">
            <p className="text-xs font-bold uppercase text-blue-600">Attack</p>
            <p className="text-lg font-black text-yellow-600">{data.stats.attack}</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase text-blue-600">Defense</p>
            <p className="text-lg font-black text-blue-600">{data.stats.defense}</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase text-blue-600">Speed</p>
            <p className="text-lg font-black text-yellow-600">{data.stats.speed}</p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-blue-700">{data.cardNumber}</p>
      </div>
    </motion.article>
  );
}
