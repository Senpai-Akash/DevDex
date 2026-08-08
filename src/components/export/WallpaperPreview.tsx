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
        {/* Atmospheric background with deep depth */}
        <BrandedBackground variant="sunset" />
        
        {/* Lighting layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute top-1/4 -left-24 w-80 h-80 bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-fuchsia-600/20 blur-[120px] rounded-full" />

        <div className="relative h-full w-full flex flex-col px-8">
          {/* Top Section: Respecting Clock/Notification Area (leaving ~30% empty) */}
          <div className="h-[30%] w-full pointer-events-none" />

          {/* Middle Section: Focal Point */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-12">
            {/* Floating Card with premium lighting */}
            <div className="relative group">
              {/* Atmospheric glow behind card */}
              <div className="absolute -inset-10 bg-indigo-500/30 blur-[60px] rounded-full animate-pulse" />
              
              <div
                className="relative transition-transform duration-1000"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: `scale(${scale}) rotate(-1deg)`,
                  transformOrigin: 'center',
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.8))',
                }}
              >
                {createElement(CardComponent, { data })}
                {/* Glass edge highlight */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
            </div>

            {/* Branding and Identity below the card */}
            <div className="text-center space-y-4 max-w-md">
              <div className="space-y-1">
                <h1 className="text-6xl font-black tracking-tighter text-white">
                  {data.displayName}
                </h1>
                <p className="text-2xl font-medium text-indigo-200/80 tracking-wide">
                  {data.role}
                </p>
              </div>
              <div className="flex justify-center">
                {renderTech()}
              </div>
            </div>
          </div>

          {/* Bottom Section: Respecting Gesture/Navigation Area */}
          <div className="h-[15%] flex items-end justify-center pb-12">
            <BrandedWatermark position="bottom-center" />
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
      {/* Base atmospheric background */}
      <BrandedBackground variant="aurora" />
      
      {/* Technical Grid Overlay for "Builder" aesthetic */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }} 
      />
      
      {/* Cinematic Lighting: Focal point spotlight and peripheral light leaks */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-500/10 blur-[120px] rounded-full" />

      <div className="relative h-full w-full flex items-center justify-between px-32">
        {/* Left side – Restrained typography (leaving space for desktop icons) */}
        <div className="flex max-w-[40%] flex-col justify-center space-y-6 z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-indigo-500/50" />
              <span className="text-xs font-mono tracking-[0.4em] uppercase text-indigo-300/60 font-medium">Developer Profile</span>
            </div>
            <h1 className="text-7xl font-black tracking-tight text-white leading-none">
              {data.displayName}
            </h1>
            <p className="text-3xl font-medium text-indigo-100/60 italic">
              {data.role}
            </p>
          </div>
          <div className="opacity-80">
            {renderTech()}
          </div>
        </div>

        {/* Right side – Cinematic Card Integration */}
        <div className="relative flex items-center justify-center">
          {/* Atmospheric Glow behind the card to create depth */}
          <div className="absolute -inset-16 bg-indigo-500/20 blur-[100px] rounded-full animate-pulse" />
          
          <div
            className="relative transition-transform duration-700"
            style={{
              width: cardWidth,
              height: cardHeight,
              transform: `scale(${scale}) rotate(2deg)`,
              transformOrigin: 'center',
              filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.6))',
            }}
          >
            {createElement(CardComponent, { data })}
            
            {/* Subtle glass-like edge highlight */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />
          </div>
        </div>
      </div>

      <BrandedWatermark position="bottom-right" />
      
      {/* Bottom atmospheric bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </div>
  );
});

export default WallpaperPreview;
