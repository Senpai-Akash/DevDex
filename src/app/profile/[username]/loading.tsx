'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const ANALYSIS_MESSAGES = [
  'Connecting to GitHub API',
  'Downloading repositories',
  'Reading contribution history',
  'Detecting programming languages',
  'Calculating developer attributes',
  'Assigning rarity',
  'Building Football Card',
  'Rendering premium effects',
] as const;

export default function LoadingProfile() {
  const messages = useMemo(() => ANALYSIS_MESSAGES, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % messages.length);
    }, 700);

    const progressInterval = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 4;
        return next >= 100 ? 0 : next;
      });
    }, 120);

    return () => {
      window.clearInterval(messageInterval);
      window.clearInterval(progressInterval);
    };
  }, [messages.length]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-10 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute h-80 w-80 rounded-full border border-amber-400/20"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute h-64 w-64 rounded-full border border-amber-300/10 bg-gradient-to-br from-amber-500/10 to-transparent blur-xl"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute h-64 w-64 rounded-full bg-amber-300/10"
          />
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-amber-400/20 bg-slate-950/95 shadow-[0_0_80px_rgba(245,158,11,0.22)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/15 to-slate-950/60" />
            <div className="relative flex flex-col items-center justify-center text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-amber-200/90">DEVDEX</p>
              <p className="mt-2 text-5xl font-black uppercase tracking-[0.25em] text-slate-100 sm:text-6xl">DDX</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-3xl rounded-[2rem] border border-amber-400/10 bg-slate-950/95 p-8 backdrop-blur-xl shadow-2xl shadow-amber-500/10"
        >
          <div className="space-y-6">
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-300/80">Analyzing GitHub Profile...</p>
              <h1 className="text-4xl font-black uppercase tracking-[-0.03em] text-slate-50 sm:text-5xl">
                Generating your legendary developer card.
              </h1>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-full border border-amber-400/20 bg-slate-900/80">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"
                />
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {messages.map((message, index) => {
                const completed = index < activeIndex;
                const active = index === activeIndex;
                return (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex items-center gap-3 rounded-3xl border px-4 py-3 transition ${
                      completed
                        ? 'border-emerald-400/25 bg-emerald-500/10 text-emerald-200'
                        : active
                        ? 'border-amber-400/30 bg-amber-400/10 text-amber-100'
                        : 'border-slate-800 bg-slate-900 text-slate-400'
                    }`}
                  >
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                      completed ? 'border-emerald-400 bg-emerald-500/15 text-emerald-300' : active ? 'border-amber-300 bg-amber-300/15 text-amber-100' : 'border-slate-700 bg-slate-900 text-slate-500'
                    }`}>
                      {completed ? '✓' : index + 1}
                    </span>
                    <p className={`text-sm font-medium ${active ? 'text-slate-100' : 'text-slate-400'}`}>
                      {message}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
