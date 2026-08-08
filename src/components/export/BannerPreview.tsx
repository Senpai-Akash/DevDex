'use client';

import { forwardRef } from 'react';
import { createElement } from 'react';
import type { CardData } from '@/types/card';
import type { CardTheme } from '@/types/theme';
import { getThemeComponent } from '@/lib/themes';
import {
  BrandedBackground,
  BrandedWatermark,
} from '@/components/export/BrandedContent';

interface BannerPreviewProps {
  data: CardData;
  theme: CardTheme;
  /** LinkedIn or Twitter/X */
  variant: 'linkedin' | 'twitter';
  className?: string;
}

/**
 * BannerPreview renders a platform‑specific banner.
 * LinkedIn – clean professional layout.
 * Twitter/X – bold expressive layout.
 */
const BannerPreview = forwardRef<HTMLDivElement, BannerPreviewProps>(function BannerPreview(
  { data, theme, variant, className = '' },
  ref,
) {
  const CardComponent = getThemeComponent(theme);
  const { width, height } = variant === 'linkedin'
    ? { width: 1584, height: 396 }
    : { width: 1500, height: 500 };

  // Card sizing based on banner height
  const cardWidth = Math.round(height * 0.7);
  const cardHeight = Math.round(height * 1.05);
  const scale = cardWidth / 760;

  // Render tech badges (up to 6)
  const renderTech = () => {
    const techStack = data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 6) ?? [];
    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white"
          >
            {t}
          </span>
        ))}
      </div>
    );
  };

  if (variant === 'linkedin') {
    // LinkedIn layout – High-End Professional Branding
    return (
      <div
        ref={ref}
        className={'relative isolate overflow-hidden text-white ' + className}
        style={{ width, height }}
      >
        {/* Sophisticated Dark Slate Foundation */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-transparent to-blue-900/20" />
        
        {/* Technical Blueprint Overlay */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, #4f46e5 1px, transparent 1px), 
                 linear-gradient(to bottom, #4f46e5 1px, transparent 1px),
                 radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)
               `, 
               backgroundSize: '120px 120px, 120px 120px, 20px 20px' 
             }} 
        />

        {/* Atmospheric Light Flow (Left to Right) */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent" />

        <div className="relative h-full w-full px-20 flex items-center justify-end gap-16">
          {/* Brand Identity Block */}
          <div className="flex flex-col text-right z-10 max-w-[50%]">
            <div className="flex items-center justify-end gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-l from-indigo-500 to-transparent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-indigo-400 font-bold opacity-80">
                Professional Portfolio
              </span>
            </div>
            
            <h1 className="text-7xl font-extrabold tracking-tighter text-white leading-[0.9] mb-4">
              {data.displayName}
            </h1>
            
            <div className="relative inline-flex items-center justify-end gap-3 mb-8">
              <span className="text-2xl font-light tracking-wide text-indigo-200/70 italic">
                {data.role}
              </span>
              <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" />
            </div>

            {/* Tech Spec Sequence */}
            <div className="flex flex-wrap justify-end gap-3">
              {data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 5).map((t, i) => (
                <div key={t} className="group flex items-center gap-2">
                  {i > 0 && <span className="text-indigo-500/30 text-xs">/</span>}
                  <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-sm bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 text-indigo-100/90 transition-colors hover:bg-indigo-500/20">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cinematic Card Integration */}
          <div className="relative">
            {/* Depth Layers: Ambient Glow & Core Shadow */}
            <div className="absolute -inset-8 bg-indigo-600/20 blur-[80px] rounded-full opacity-50" />
            <div className="absolute inset-0 bg-black/20 blur-2xl translate-y-8 scale-90" />
            
            <div
              className="relative transition-all duration-700 ease-out"
              style={{
                width: cardWidth,
                height: cardHeight,
                transform: `scale(${scale}) rotate(2deg) perspective(1000px) rotateY(-5deg)`,
                transformOrigin: 'center',
                filter: 'drop-shadow(20px 30px 60px rgba(0,0,0,0.8))',
              }}
            >
              {createElement(CardComponent, { data })}
              
              {/* Subtle Edge Lighting Overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
              <div className="absolute -left-1 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Global Branding Footer */}
        <div className="absolute bottom-10 right-16 flex items-center gap-4 opacity-40">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
          <span className="text-[10px] font-mono text-white tracking-[0.2em] uppercase">
            DevDex // Technical Identity
          </span>
        </div>
        
        <BrandedWatermark position="bottom-left" />
      </div>
    );
  }

  // Twitter / X layout – Bold, High-Energy Social Identity
  return (
    <div
      ref={ref}
      className={'relative isolate overflow-hidden text-white ' + className}
      style={{ width, height }}
    >
      {/* High-Contrast Cyber Foundation */}
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-transparent to-fuchsia-950/30" />
      
      {/* Dynamic Data-Stream Overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px), 
            linear-gradient(to bottom, #d946ef 1px, transparent 1px),
            radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)
          `, 
          backgroundSize: '80px 80px, 80px 80px, 30px 30px' 
        }} 
      />

      {/* Energetic Light Leaks & Neon Glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-fuchsia-600/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-black/60" />

      <div className="relative h-full w-full px-20 flex items-center justify-between overflow-hidden">
        {/* Social Identity Block - Bold, Expressive, Builder-focused */}
        <div className="relative z-10 flex flex-col max-w-[50%]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-10 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-indigo-300 font-black italic">
              Builder Identity
            </span>
          </div>
          
          <h1 className="text-8xl font-black tracking-tighter text-white leading-[0.85] italic uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            {data.displayName}
          </h1>
          
          <div className="mt-6 relative inline-flex items-center gap-4">
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-fuchsia-300 italic">
              {data.role}
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
          </div>
          
          <div className="mt-10 flex flex-wrap gap-3">
            {data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 6).map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all hover:bg-indigo-500/20 hover:border-indigo-500/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Integrated Cinematic Card Composition */}
        <div className="relative flex items-center justify-center">
          {/* High-Energy Backlighting (Rim Light) */}
          <div className="absolute -inset-12 bg-indigo-500/30 blur-[80px] rounded-full animate-pulse" />
          <div className="absolute -inset-12 bg-fuchsia-500/20 blur-[100px] rounded-full opacity-60" />
          
          <div
            className="relative transition-transform duration-500 ease-out"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform: `scale(${scale}) rotate(-4deg) perspective(1000px) rotateY(10deg)`,
              transformOrigin: 'center',
              filter: 'drop-shadow(30px 40px 70px rgba(0,0,0,0.8))',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = `scale(${scale * 1.05}) rotate(-2deg) perspective(1000px) rotateY(5deg)`}
            onMouseLeave={(e) => e.currentTarget.style.transform = `scale(${scale}) rotate(-4deg) perspective(1000px) rotateY(10deg)`}
          >
            {createElement(CardComponent, { data })}
            
            {/* Neon Edge Glow Overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-indigo-500/30" />
            <div className="absolute -right-1 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fuchsia-400/50 to-transparent" />
          </div>
        </div>
      </div>

      <BrandedWatermark position="bottom-right" />
      
      {/* Dynamic Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-indigo-600 opacity-60" />
    </div>
  );
});

export default BannerPreview;