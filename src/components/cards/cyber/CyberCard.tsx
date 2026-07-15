'use client';

import { motion } from 'framer-motion';
import { CardData } from '../../../types/card';

interface CyberCardProps {
  data: CardData;
}

export function CyberCard({ data }: CyberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96, rotateZ: -1 }}
      animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
      whileHover={{ y: -8, scale: 1.02, rotateZ: 0.5 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative mx-auto flex max-w-[488px] cursor-pointer flex-col"
    >
      <div className="relative overflow-hidden rounded border-2 border-cyan-500 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 px-6 py-8 shadow-[0_0_40px_rgba(34,211,238,0.2),inset_0_0_0_1px_rgba(34,211,238,0.1)] sm:px-8 sm:py-10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(34,211,238,0.05)_25%,_rgba(34,211,238,0.05)_50%,_transparent_50%,_transparent_75%,_rgba(34,211,238,0.05)_75%,_rgba(34,211,238,0.05))] bg-[length:40px_40px]" />
        </div>

        <div className="relative flex flex-col items-center text-center">
          <div className="mb-4 inline-block">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="text-4xl"
            >
              🤖
            </motion.span>
          </div>

          <div className="relative mb-6 inline-block">
            <motion.div
              animate={{ boxShadow: ['0_0_20px_rgba(34,211,238,0.3)', '0_0_40px_rgba(34,211,238,0.6)', '0_0_20px_rgba(34,211,238,0.3)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded border-2 border-cyan-500"
            >
              <div className="h-24 w-24 overflow-hidden border-2 border-magenta-500 bg-slate-900">
                <img src={data.avatar} alt={data.displayName} className="h-full w-full object-cover" />
              </div>
            </motion.div>
            <div className="absolute -bottom-2 -right-2 rounded border border-cyan-500 bg-slate-950 px-2 py-1">
              <p className="text-xs font-mono font-bold text-cyan-400">LVL {Math.floor(data.rating / 10)}</p>
            </div>
          </div>

          <h2 className="mb-2 font-mono text-2xl font-black uppercase tracking-widest text-cyan-300">{data.displayName}</h2>
          <p className="mb-6 border-l-2 border-r-2 border-magenta-500 px-3 text-xs font-mono uppercase tracking-[0.2em] text-magenta-300">
            {data.role}
          </p>

          <div className="w-full space-y-2 rounded border-2 border-cyan-500 bg-slate-900/60 p-4 font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-cyan-400">SYS.CPU</span>
              <span className="text-cyan-300">{data.stats.attack}%</span>
            </div>
            <div className="h-1 rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${data.stats.attack}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-magenta-500"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-magenta-400">SYS.MEM</span>
              <span className="text-magenta-300">{data.stats.defense}%</span>
            </div>
            <div className="h-1 rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${data.stats.defense}%` }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-full rounded-full bg-gradient-to-r from-magenta-500 to-cyan-500"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-2 font-mono text-xs">
            <div className="rounded border border-cyan-500 bg-cyan-950/50 px-2 py-1 text-cyan-300">{data.technology}</div>
            <div className="rounded border border-magenta-500 bg-magenta-950/50 px-2 py-1 text-magenta-300">{data.rarity}</div>
          </div>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan-500"
          >
            {data.cardNumber}
          </motion.p>
        </div>
      </div>
    </motion.article>
  );
}
