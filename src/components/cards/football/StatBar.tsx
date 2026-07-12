'use client';

import { motion } from 'framer-motion';

interface StatBarProps {
  label: string;
  value: number;
}

export function StatBar({ label, value }: StatBarProps) {
  const normalizedValue = Math.max(0, Math.min(100, value));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.35em] text-slate-400">
        <span>{label}</span>
        <span className="font-semibold text-slate-100">{normalizedValue}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800/80">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${normalizedValue}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
          role="progressbar"
          aria-valuenow={normalizedValue}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
