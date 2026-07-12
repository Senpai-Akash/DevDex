import { PropsWithChildren } from 'react';

export function CardFrame({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_35px_120px_rgba(15,23,42,0.55)]">
      {children}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400/60 via-transparent to-fuchsia-400/20" />
    </div>
  );
}
