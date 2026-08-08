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
    // LinkedIn layout – Professional Personal Branding
    return (
      <div
        ref={ref}
        className={'relative isolate overflow-hidden text-white ' + className}
        style={{ width, height }}
      >
        {/* Layered Background for depth */}
        <BrandedBackground variant="aurora" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="relative h-full w-full px-16 py-12 flex items-center justify-end gap-12">
          {/* Information Block - Right Aligned to balance the profile pic on left */}
          <div className="flex flex-col text-right max-w-[50%] z-10">
            <div className="flex items-center justify-end gap-3 mb-2">
              <span className="text-xs font-mono tracking-widest uppercase text-indigo-300 opacity-70">Verified Developer</span>
              <div className="h-px w-8 bg-indigo-500/50" />
            </div>
            <h1 className="text-6xl font-black tracking-tight text-white leading-none">
              {data.displayName}
            </h1>
            <p className="mt-3 text-2xl font-medium text-indigo-100/80 italic">
              {data.role}
            </p>
            <div className="flex flex-wrap justify-end gap-2 mt-6">
              {data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 5).map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-white/90">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Integrated Card Composition */}
          <div className="relative group">
            {/* Atmospheric Glow behind card */}
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
            
            <div
              className="relative transition-transform duration-500"
              style={{
                width: cardWidth,
                height: cardHeight,
                transform: `scale(${scale}) rotate(3deg)`,
                transformOrigin: 'center',
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
              }}
            >
              {createElement(CardComponent, { data })}
            </div>
          </div>
        </div>

        {/* Branding & Watermark - adjusted for profile pic overlap */}
        <div className="absolute bottom-8 right-12 flex items-center gap-2 opacity-60">
          <span className="text-xs font-mono text-white/50 tracking-tighter">DEV DEX // EXPORT STUDIO</span>
          <div className="h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
        </div>
        
        <BrandedWatermark position="bottom-left" />
      </div>
    );
  }

  // Twitter / X layout – bold and dynamic
  return (
    <div
      ref={ref}
      className={'relative isolate overflow-hidden text-white ' + className}
      style={{ width, height }}
    >
      {/* High-energy background */}
      <BrandedBackground variant="sunset" />
      
      {/* Technical Grid Overlay for structure and "builder" aesthetic */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} 
      />
      
      {/* Dynamic Light Leaks */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/30 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-500/30 blur-[120px] rounded-full" />

      <div className="relative h-full w-full px-16 flex items-center justify-between overflow-hidden">
        {/* Identity Block - Bold and Aggressive */}
        <div className="relative z-10 flex flex-col max-w-[50%]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-indigo-500" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-indigo-300 font-bold">Technical Identity</span>
          </div>
          
          <h1 className="text-7xl font-black tracking-tighter text-white leading-none italic uppercase">
            {data.displayName}
          </h1>
          
          <div className="mt-4 flex items-baseline gap-4">
            <p className="text-3xl font-bold text-indigo-100/90">
              {data.role}
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent max-w-[200px]" />
          </div>
          
          <div className="mt-8">
            {renderTech()}
          </div>
        </div>

        {/* Card Composition - Integrated & Cinematic */}
        <div className="relative flex items-center justify-center">
          {/* Extreme Glow / Lighting Effect */}
          <div className="absolute -inset-12 bg-indigo-600/40 blur-[60px] rounded-full animate-pulse" />
          
          <div
            className="relative transition-transform duration-700 hover:scale-105"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform: `scale(${scale}) rotate(-6deg)`,
              transformOrigin: 'center',
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))',
            }}
          >
            {createElement(CardComponent, { data })}
            
            {/* Overlay accent light on the card edge */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-2xl" />
          </div>
        </div>
      </div>

      <BrandedWatermark position="bottom-right" />
      
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
    </div>
  );
});

export default BannerPreview;