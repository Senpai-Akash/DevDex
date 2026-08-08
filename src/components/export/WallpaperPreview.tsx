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

interface WallpaperPreviewProps {
  data: CardData;
  theme: CardTheme;
  variant: 'desktop' | 'mobile';
  className?: string;
}

/**
 * WallpaperPreview renders a full‑screen branding wallpaper.
 * Desktop – cinematic with atmospheric gradients.
 * Mobile – portrait lock‑screen respecting safe zones.
 */
const WallpaperPreview = forwardRef<HTMLDivElement, WallpaperPreviewProps>(function WallpaperPreview(
  { data, theme, variant, className = '' },
  ref,
) {
  const CardComponent = getThemeComponent(theme);
  const dimensions = {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 1080, height: 1920 },
  };
  const { width, height } = dimensions[variant];
  const isMobile = variant === 'mobile';

  // Card sizing
  const cardWidth = isMobile ? Math.round(width * 0.8) : Math.round(height * 0.42);
  const cardHeight = isMobile ? Math.round(height * 0.42) : Math.round(height * 0.94);
  const scale = cardWidth / 760;

  // Render tech badges (used in both layouts)
  const renderTech = () => {
    const techStack = data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 6) ?? [];
    return (
      <div className="flex flex-wrap gap-2 mt-4">
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

  if (isMobile) {
    // Mobile portrait wallpaper – Premium lock-screen aesthetic
    return (
      <div
        ref={ref}
        className={'relative isolate overflow-hidden text-white ' + className}
        style={{ width, height }}
      >
        {/* Base atmospheric background with grain */}
        <div className="absolute inset-0 z-0">
          <BrandedBackground variant="sunset" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </div>

        {/* Deep Lighting Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none z-10" />
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full z-0" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-fuchsia-600/20 blur-[100px] rounded-full z-0" />

        <div className="relative h-full w-full flex flex-col px-10 z-20">
          {/* Top Section: Respecting Clock/Notification Area (~30%) */}
          <div className="h-[30%] w-full pointer-events-none flex flex-col justify-end pb-8">
            <div className="flex items-center gap-3 opacity-40">
              <div className="h-px w-8 bg-indigo-400" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-indigo-200 font-bold">DevDex.Mobile.Interface</span>
            </div>
          </div>

          {/* Middle Section: Focal Point */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-16">
            {/* Floating Card with Cinematic Presentation */}
            <div className="relative group">
              {/* Immersive core glow */}
              <div className="absolute -inset-16 bg-indigo-500/20 blur-[80px] rounded-full animate-pulse" />
              <div className="absolute -inset-8 bg-fuchsia-500/10 blur-[60px] rounded-full animate-pulse delay-700" />
              
              <div
                className="relative transition-transform duration-1000 ease-out"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: `scale(${scale}) rotate(1deg)`,
                  transformOrigin: 'center',
                  filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))',
                }}
              >
                {createElement(CardComponent, { data })}
                
                {/* Premium Glass overlay for depth */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-2xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 blur-3xl rounded-full pointer-events-none" />
              </div>
            </div>

            {/* Branding and Identity: Sophisticated Vertical Hierarchy */}
            <div className="text-center space-y-6 max-w-md">
              <div className="space-y-2">
                <h1 className="text-6xl font-black tracking-tighter text-white leading-tight">
                  {data.displayName}
                </h1>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-4 bg-indigo-500/50" />
                  <p className="text-xl font-light text-indigo-100/60 tracking-widest uppercase">
                    {data.role}
                  </p>
                  <div className="h-px w-4 bg-indigo-500/50" />
                </div>
              </div>
              <div className="flex justify-center">
                {renderTech()}
              </div>
            </div>
          </div>

          {/* Bottom Section: Respecting Gesture/Navigation Area (~15%) */}
          <div className="h-[15%] flex items-end justify-center pb-16">
            <div className="relative">
               <BrandedWatermark position="bottom-center" />
               {/* Subtle mobile UI accent */}
               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full blur-sm" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop wallpaper – cinematic immersive scene
  return (
    <div
      ref={ref}
      className={'relative isolate overflow-hidden text-white ' + className}
      style={{ width, height }}
    >
      {/* Base atmospheric background with deep grain */}
      <div className="absolute inset-0 z-0">
        <BrandedBackground variant="aurora" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>
      
      {/* Multi-layered technical depth */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', 
            backgroundSize: '120px 120px' 
          }} 
        />
        <div 
          className="absolute inset-0 opacity-50" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>
      
      {/* Cinematic Lighting: Deep focal glow and accent light leaks */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[140px] rounded-full" />

      <div className="relative h-full w-full flex items-center justify-between px-32 z-10">
        {/* Left side – High-end cinematic typography */}
        <div className="flex max-w-[45%] flex-col justify-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-indigo-500 to-transparent" />
              <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-indigo-300/40 font-bold">System.Identity.Profile</span>
            </div>
            <h1 className="text-8xl font-black tracking-tighter text-white leading-[0.9]">
              {data.displayName}
            </h1>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-light text-indigo-100/40 tracking-wide">
                {data.role}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            <div className="opacity-60 scale-90 origin-left">
              {renderTech()}
            </div>
          </div>
        </div>

        {/* Right side – Integrated Interface Composition */}
        <div className="relative flex items-center justify-center group">
          {/* Complex atmospheric glow */}
          <div className="absolute -inset-20 bg-indigo-500/20 blur-[120px] rounded-full animate-pulse opacity-60" />
          <div className="absolute -inset-10 bg-fuchsia-500/10 blur-[80px] rounded-full animate-pulse delay-700 opacity-40" />
          
          {/* HUD elements around the card */}
          <div className="absolute -inset-24 pointer-events-none opacity-30">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-indigo-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-indigo-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-400" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 text-[10px] font-mono text-indigo-300/50 rotate-90">COORD_X_88.21</div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 text-[10px] font-mono text-indigo-300/50 -rotate-90">COORD_Y_12.04</div>
          </div>

          <div
            className="relative transition-all duration-1000 ease-out group-hover:scale-105 group-hover:rotate-0"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform: `scale(${scale}) rotate(3deg)`,
              transformOrigin: 'center',
              filter: 'drop-shadow(0 60px 120px rgba(0,0,0,0.7))',
            }}
          >
            {createElement(CardComponent, { data })}
            
            {/* Premium glass refraction highlight */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 blur-2xl rounded-full pointer-events-none" />
          </div>
        </div>
      </div>

      <BrandedWatermark position="bottom-right" />
      
      {/* Bottom cinematic accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
    </div>
  );
});

export default WallpaperPreview;
