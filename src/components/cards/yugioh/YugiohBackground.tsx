'use client';

import React from 'react';

export function YugiohBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800;900&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,600&display=swap');
        
        @keyframes yugioh-foil {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .yugioh-foil-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(255, 0, 128, 0.04) 0%,
            rgba(0, 255, 255, 0.04) 25%,
            rgba(255, 255, 0, 0.04) 50%,
            rgba(0, 255, 128, 0.04) 75%,
            rgba(128, 0, 255, 0.04) 100%
          );
          background-size: 400% 400%;
          mix-blend-mode: color-dodge;
          pointer-events: none;
        }

        .group:hover .yugioh-foil-overlay {
          animation: yugioh-foil 8s ease infinite;
        }

        @keyframes yugioh-magic-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />

      {/* Ancient Parchment/Bronze Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ab8552] via-[#855f30] to-[#3a2510] border border-[#fcd34d]/20" />

      {/* Dark vignette border */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(20,10,5,0.85)_100%)]" />

      {/* Ancient Magic Circle in center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg 
          className="w-[340px] h-[340px] text-[#fcd34d]" 
          style={{ animation: 'yugioh-magic-spin 40s linear infinite' }}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <polygon points="50,12 83,69 17,69" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="50,88 83,31 17,31" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Inner ring ticks */}
          <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 5" />
        </svg>
      </div>

      {/* Holographic foil overlay */}
      <div className="yugioh-foil-overlay" />

      {/* Subtle ancient parchment texturing */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 200 200">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
