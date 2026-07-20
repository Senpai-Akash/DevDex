'use client';

import React from 'react';

export function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      {/* Stylesheet for custom animations and font imports */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;600;700;900&display=swap');
        
        @keyframes cyber-scanline {
          0% {
            top: -10%;
          }
          100% {
            top: 110%;
          }
        }
        
        @keyframes cyber-grid-pulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.28; }
        }
        
        @keyframes cyber-hex-shimmer {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.12; }
        }

        @keyframes cyber-rain-flow {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(240px);
            opacity: 0;
          }
        }

        .cyber-rain-col {
          writing-mode: vertical-rl;
          text-orientation: mongolian;
          font-family: monospace;
          font-size: 8px;
          line-height: 1;
          letter-spacing: 2px;
          position: absolute;
          top: -20px;
          color: rgba(34, 211, 238, 0.45);
          text-shadow: 0 0 4px rgba(34, 211, 238, 0.8);
          pointer-events: none;
        }
      `}} />

      {/* Cyberpunk Deep Navy/Black Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18)_0%,_rgba(10,12,22,1)_70%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12)_0%,_rgba(6,7,12,1)_90%)]" />

      {/* Futuristic Grid Pattern with shimmer */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.06)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(6,182,212,0.06)_1px,_transparent_1px)] bg-[size:24px_24px]" 
        style={{
          animation: 'cyber-grid-pulse 8s ease-in-out infinite',
        }}
      />

      {/* Digital Scanline Overlay (Scanning Line) */}
      <div 
        className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.9),_0_0_24px_rgba(34,211,238,0.6)] z-20 pointer-events-none"
        style={{
          animation: 'cyber-scanline 7s linear infinite',
        }}
      />

      {/* Tech HUD decorative circles and angled lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08] text-cyan-400" viewBox="0 0 600 800" preserveAspectRatio="none">
        <path d="M 0 50 L 80 50 L 100 70 L 500 70 L 520 50 L 600 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 0 750 L 100 750 L 120 730 L 480 730 L 500 750 L 600 750" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="180" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="500" cy="620" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 9" />
        <line x1="50" y1="280" x2="180" y2="410" stroke="currentColor" strokeWidth="0.5" />
        <line x1="550" y1="520" x2="450" y2="420" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Hexagonal mesh pattern overlay */}
      <svg className="absolute inset-0 h-full w-full" style={{ animation: 'cyber-hex-shimmer 12s ease-in-out infinite' }} viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="cyberHexPattern" width="40" height="69.282" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 20 11.547 L 0 0 L 0 23.094 L 20 34.641 L 40 23.094 Z M 0 34.641 L 20 46.188 L 0 57.735 L 0 80.829 L 20 92.376 L 40 80.829 L 40 57.735 L 20 46.188 Z" fill="none" stroke="rgba(236,72,153,0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="600" fill="url(#cyberHexPattern)" />
      </svg>

      {/* Subtle Binary Code / Data Rain Columns */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div 
          className="cyber-rain-col" 
          style={{ 
            left: '8%', 
            animation: 'cyber-rain-flow 11s linear infinite', 
            animationDelay: '0s' 
          }}
        >
          0110100101110100
        </div>
        <div 
          className="cyber-rain-col" 
          style={{ 
            left: '28%', 
            animation: 'cyber-rain-flow 14s linear infinite', 
            animationDelay: '3s' 
          }}
        >
          1001011001101001
        </div>
        <div 
          className="cyber-rain-col" 
          style={{ 
            left: '68%', 
            animation: 'cyber-rain-flow 9s linear infinite', 
            animationDelay: '1s' 
          }}
        >
          1101010010110110
        </div>
        <div 
          className="cyber-rain-col" 
          style={{ 
            left: '88%', 
            animation: 'cyber-rain-flow 13s linear infinite', 
            animationDelay: '4s' 
          }}
        >
          0100110101100101
        </div>
      </div>

      {/* Ambient glowing vignette corners */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_60%,_rgba(10,12,22,0.9)_100%)] opacity-80" />
    </div>
  );
}
