import { motion } from 'framer-motion';

interface FootballAvatarProps {
  avatar: string;
  displayName: string;
  role: string;
}

export function FootballAvatar({ avatar, displayName, role }: FootballAvatarProps) {
  return (
    <motion.section
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="mx-auto mb-6 flex w-full max-w-[220px] flex-col items-center text-center"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.14),transparent_55%)] blur-2xl opacity-90" />

        <div className="relative flex h-[190px] w-[190px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-200 shadow-[0_0_32px_rgba(251,191,36,0.3)]" />

          <div className="absolute inset-4 rounded-full border border-amber-200/35 bg-slate-950/95 shadow-[inset_0_0_18px_rgba(255,255,255,0.08)]" />

          <div className="absolute inset-8 rounded-full border border-slate-500/30 bg-slate-950/70" />
          <div className="absolute left-1/2 top-0 h-3 w-1 -translate-x-1/2 rounded-full bg-slate-200/25" />
          <div className="absolute right-0 top-1/2 h-1 w-3 -translate-y-1/2 rounded-full bg-slate-200/25" />
          <div className="absolute left-0 top-1/2 h-1 w-3 -translate-y-1/2 rounded-full bg-slate-200/25" />
          <div className="absolute left-1/2 bottom-0 h-3 w-1 -translate-x-1/2 rounded-full bg-slate-200/25" />
          <div className="absolute left-1/2 top-10 h-0.5 w-8 -translate-x-1/2 rounded-full bg-slate-200/20" />
          <div className="absolute left-1/2 bottom-10 h-0.5 w-8 -translate-x-1/2 rounded-full bg-slate-200/20" />

          <div className="absolute inset-12 rounded-full bg-amber-400/10 shadow-[0_0_28px_rgba(251,191,36,0.18)]" />

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <span className="block h-4 w-4 rotate-45 rounded-sm bg-gradient-to-br from-slate-200 via-amber-300 to-slate-400 shadow-[0_0_12px_rgba(251,191,36,0.22)] ring-1 ring-white/10" />
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
            <span className="block h-4 w-4 rotate-45 rounded-sm bg-gradient-to-br from-slate-200 via-amber-300 to-slate-400 shadow-[0_0_12px_rgba(251,191,36,0.22)] ring-1 ring-white/10" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="block h-4 w-4 rotate-45 rounded-sm bg-gradient-to-br from-slate-200 via-amber-300 to-slate-400 shadow-[0_0_12px_rgba(251,191,36,0.22)] ring-1 ring-white/10" />
          </div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
            <span className="block h-4 w-4 rotate-45 rounded-sm bg-gradient-to-br from-slate-200 via-amber-300 to-slate-400 shadow-[0_0_12px_rgba(251,191,36,0.22)] ring-1 ring-white/10" />
          </div>

          <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.16)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/20 via-transparent to-slate-950/40" />
            <img src={avatar} alt={`${displayName} avatar`} className="relative h-full w-full rounded-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-lg font-semibold uppercase tracking-[0.15em] text-amber-100">{displayName}</p>
        <p className="text-[0.69rem] uppercase tracking-[0.32em] text-slate-400">{role}</p>
      </div>
    </motion.section>
  );
}
