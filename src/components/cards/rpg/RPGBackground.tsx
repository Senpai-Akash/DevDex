'use client';

import React from 'react';

export function RPGBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      {/* Stylesheet for custom animations and font imports */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Marcellus&display=swap');
        
        @keyframes rpg-float-particle {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.45;
          }
          90% {
            opacity: 0.35;
          }
          100% {
            transform: translateY(-160px) translateX(var(--x-drift, 20px)) scale(0.4);
            opacity: 0;
          }
        }
        
        @keyframes rpg-rune-pulse {
          0%, 100% {
            opacity: 0.08;
            transform: translate(-50%, -50%) rotate(0deg) scale(0.96);
            filter: drop-shadow(0 0 4px rgba(220, 38, 38, 0.15));
          }
          50% {
            opacity: 0.18;
            transform: translate(-50%, -50%) rotate(180deg) scale(1.04);
            filter: drop-shadow(0 0 16px rgba(124, 58, 237, 0.4));
          }
        }

        .rpg-particle {
          position: absolute;
          background: radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(220,38,38,0.3) 60%, transparent 100%);
          border-radius: 50%;
          pointer-events: none;
        }
      `}} />

      {/* Deep Dark Fantasy Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,28,135,0.22)_0%,_rgba(15,23,42,1)_70%),_radial-gradient(circle_at_bottom,_rgba(127,29,29,0.18)_0%,_rgba(10,10,12,1)_80%)]" />
      
      {/* Stone / Parchment Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_transparent_50%,_#000_100%),_repeating-linear-gradient(45deg,_#fff_0px,_#fff_1px,_transparent_1px,_transparent_10px)]" />

      {/* Ancient Rune Circle (Centered in background, pulses and rotates slowly) */}
      <div 
        className="absolute left-1/2 top-[40%] h-[360px] w-[360px]"
        style={{
          animation: 'rpg-rune-pulse 16s ease-in-out infinite',
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-purple-500/30">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="76" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" />
          {/* Inner runes */}
          <path d="M 100 10 L 100 190 M 10 100 L 190 100 M 36.4 36.4 L 163.6 163.6 M 36.4 163.6 L 163.6 36.4" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <text x="100" y="32" fontSize="9" fontFamily="serif" fill="currentColor" textAnchor="middle" letterSpacing="2">ᛉ ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ</text>
          <text x="100" y="176" fontSize="9" fontFamily="serif" fill="currentColor" textAnchor="middle" letterSpacing="2">ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ</text>
          <text x="32" y="104" fontSize="9" fontFamily="serif" fill="currentColor" textAnchor="middle" letterSpacing="2" transform="rotate(-90 32 100)">ᛗ ᛚ ᛜ ᛞ ᛟ</text>
          <text x="168" y="104" fontSize="9" fontFamily="serif" fill="currentColor" textAnchor="middle" letterSpacing="2" transform="rotate(90 168 100)">ᛃ ᛇ ᛈ ᛉ ᛋ</text>
        </svg>
      </div>

      {/* Corner Filigrees / Ornate Gothic Elements */}
      <div className="absolute top-6 left-6 w-16 h-16 opacity-15 text-amber-500/40">
        <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-0">
          <path d="M0 0 L100 0 L100 4 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M20 20 L80 20 L80 24 L24 24 L24 80 L20 80 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 w-16 h-16 opacity-15 text-amber-500/40">
        <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-90">
          <path d="M0 0 L100 0 L100 4 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M20 20 L80 20 L80 24 L24 24 L24 80 L20 80 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 w-16 h-16 opacity-15 text-amber-500/40">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          <path d="M0 0 L100 0 L100 4 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M20 20 L80 20 L80 24 L24 24 L24 80 L20 80 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 w-16 h-16 opacity-15 text-amber-500/40">
        <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-180">
          <path d="M0 0 L100 0 L100 4 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M20 20 L80 20 L80 24 L24 24 L24 80 L20 80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Particle 1 */}
        <div 
          className="rpg-particle w-1.5 h-1.5" 
          style={{
            left: '15%',
            bottom: '10%',
            '--x-drift': '30px',
            animation: 'rpg-float-particle 8s linear infinite',
            animationDelay: '0s',
          } as React.CSSProperties}
        />
        {/* Particle 2 */}
        <div 
          className="rpg-particle w-1 h-1" 
          style={{
            left: '35%',
            bottom: '12%',
            '--x-drift': '-25px',
            animation: 'rpg-float-particle 10s linear infinite',
            animationDelay: '2s',
          } as React.CSSProperties}
        />
        {/* Particle 3 */}
        <div 
          className="rpg-particle w-2.5 h-2.5" 
          style={{
            left: '50%',
            bottom: '8%',
            '--x-drift': '15px',
            animation: 'rpg-float-particle 7s linear infinite',
            animationDelay: '4s',
          } as React.CSSProperties}
        />
        {/* Particle 4 */}
        <div 
          className="rpg-particle w-1 h-1" 
          style={{
            left: '75%',
            bottom: '15%',
            '--x-drift': '-40px',
            animation: 'rpg-float-particle 12s linear infinite',
            animationDelay: '1s',
          } as React.CSSProperties}
        />
        {/* Particle 5 */}
        <div 
          className="rpg-particle w-2 h-2" 
          style={{
            left: '85%',
            bottom: '5%',
            '--x-drift': '10px',
            animation: 'rpg-float-particle 9s linear infinite',
            animationDelay: '6s',
          } as React.CSSProperties}
        />
      </div>

      {/* Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_55%,_rgba(0,0,0,0.85)_100%)] opacity-70" />
    </div>
  );
}
