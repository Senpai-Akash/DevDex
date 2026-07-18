import { PropsWithChildren } from 'react';

export function CardFrame({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="relative overflow-visible w-full">
      {/* Outer glow layer - Premium ambient light */}
      <div className="absolute -inset-12 rounded-[3rem] bg-gradient-to-b from-amber-400/25 via-amber-300/5 to-amber-400/0 blur-3xl pointer-events-none z-0" />
      
      {/* Main frame container */}
      <div className="relative z-10 overflow-visible">
        {/* Outermost golden border - Primary metallic edge */}
        <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-b from-amber-200 via-amber-300 to-amber-600 opacity-90 shadow-2xl shadow-amber-600/40" />
        
        {/* Secondary border - Inner gold accent */}
        <div className="absolute inset-1 rounded-[2.1rem] bg-gradient-to-b from-amber-100/60 to-amber-400/40 opacity-70" />
        
        {/* Bevel layer - Creates depth */}
        <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-br from-amber-700/40 to-amber-900/30 border border-amber-400/20" />
        
        {/* Inner frame border */}
        <div className="absolute inset-3 rounded-[1.9rem] bg-gradient-to-b from-amber-800/50 to-slate-900/60 border border-amber-500/30 shadow-inner shadow-amber-900/40" />

        {/* Content wrapper in normal flow */}
        <div className="relative z-10 m-3 overflow-hidden rounded-[1.7rem] border-2 border-amber-600/30 bg-slate-950/98 shadow-[0_34px_90px_rgba(15,23,42,0.82)] backdrop-blur-xl">
          {children}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400/60 via-transparent to-fuchsia-400/20" />
        </div>
        
        {/* Top-left corner bracket - decorative L-shape */}
        <div className="absolute top-3 left-3 pointer-events-none z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" className="drop-shadow-lg opacity-90">
            <g stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M 4 4 L 4 16 M 4 4 L 16 4" />
            </g>
          </svg>
          {/* Diamond at corner */}
          <div className="absolute -top-2 -left-2 w-5 h-5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 transform rotate-45 rounded-[1px] shadow-lg shadow-amber-400/70" />
            <div className="absolute inset-0.5 bg-gradient-to-br from-amber-200 to-amber-400 transform rotate-45 rounded-[1px]" />
          </div>
        </div>
        
        {/* Top-right corner bracket - decorative ⌐ shape */}
        <div className="absolute top-3 right-3 pointer-events-none z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" className="drop-shadow-lg opacity-90">
            <g stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M 20 4 L 20 16 M 20 4 L 8 4" />
            </g>
          </svg>
          {/* Diamond at corner */}
          <div className="absolute -top-2 -right-2 w-5 h-5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 transform rotate-45 rounded-[1px] shadow-lg shadow-amber-400/70" />
            <div className="absolute inset-0.5 bg-gradient-to-br from-amber-200 to-amber-400 transform rotate-45 rounded-[1px]" />
          </div>
        </div>
        
        {/* Bottom-left corner bracket */}
        <div className="absolute bottom-3 left-3 pointer-events-none z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" className="drop-shadow-lg opacity-90">
            <g stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M 4 20 L 4 8 M 4 20 L 16 20" />
            </g>
          </svg>
          {/* Diamond at corner */}
          <div className="absolute -bottom-2 -left-2 w-5 h-5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 transform rotate-45 rounded-[1px] shadow-lg shadow-amber-400/70" />
            <div className="absolute inset-0.5 bg-gradient-to-br from-amber-200 to-amber-400 transform rotate-45 rounded-[1px]" />
          </div>
        </div>
        
        {/* Bottom-right corner bracket */}
        <div className="absolute bottom-3 right-3 pointer-events-none z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" className="drop-shadow-lg opacity-90">
            <g stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M 20 20 L 20 8 M 20 20 L 8 20" />
            </g>
          </svg>
          {/* Diamond at corner */}
          <div className="absolute -bottom-2 -right-2 w-5 h-5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 transform rotate-45 rounded-[1px] shadow-lg shadow-amber-400/70" />
            <div className="absolute inset-0.5 bg-gradient-to-br from-amber-200 to-amber-400 transform rotate-45 rounded-[1px]" />
          </div>
        </div>
        
        {/* Bottom center ornament - Large diamond */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-none z-20">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-300 to-amber-600 transform rotate-45 rounded-[2px] shadow-2xl shadow-amber-400/80" />
            <div className="absolute inset-1 bg-gradient-to-br from-amber-200 to-amber-500 transform rotate-45 rounded-[1px]" />
            <div className="absolute inset-2 bg-gradient-to-br from-amber-300 to-amber-400 transform rotate-45 rounded-[1px]" />
          </div>
        </div>
        
        {/* Mid-frame side ornaments - Left */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none z-20">
          <div className="w-5 h-5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 transform rotate-45 rounded-[1px] shadow-lg shadow-amber-400/60" />
            <div className="absolute inset-0.5 bg-gradient-to-br from-amber-200 to-amber-400 transform rotate-45 rounded-[1px]" />
          </div>
        </div>
        
        {/* Mid-frame side ornaments - Right */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 pointer-events-none z-20">
          <div className="w-5 h-5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 transform rotate-45 rounded-[1px] shadow-lg shadow-amber-400/60" />
            <div className="absolute inset-0.5 bg-gradient-to-br from-amber-200 to-amber-400 transform rotate-45 rounded-[1px]" />
          </div>
        </div>
        
        {/* Inner premium glow */}
        <div className="absolute inset-4 rounded-[1.8rem] bg-gradient-to-t from-amber-400/0 via-amber-300/8 to-amber-400/12 blur-2xl pointer-events-none opacity-60 z-0" />
      </div>
    </div>
  );
}
