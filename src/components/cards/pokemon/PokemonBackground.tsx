'use client';

import { motion } from 'framer-motion';

interface PokemonBackgroundProps {
  isRare: boolean;
  typeColor: string; // CSS hex or hsl
}

/**
 * Full-bleed card background.
 * - Common: soft linen-cream radial with subtle diamond pattern
 * - Rare/Legendary: animated prismatic holographic foil
 */
export function PokemonBackground({ isRare, typeColor }: PokemonBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.15rem]">
      {/* Base tinted gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: isRare
            ? `radial-gradient(ellipse at 50% 0%, ${typeColor}55 0%, ${typeColor}22 35%, transparent 65%),
               linear-gradient(160deg, #fffef8 0%, #f0f4ff 40%, #fff8f0 70%, #f5fff0 100%)`
            : `radial-gradient(ellipse at 50% 0%, ${typeColor}33 0%, transparent 55%),
               linear-gradient(160deg, #fffef8 0%, #f5f5e8 60%, #fffff0 100%)`,
        }}
      />

      {/* Diamond tile pattern — subtle texture */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pkDiamond" width="14" height="14" patternUnits="userSpaceOnUse">
            <path d="M7 0 L14 7 L7 14 L0 7 Z" fill="none" stroke="#888" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pkDiamond)" />
      </svg>

      {/* Corner type-colour bokeh blobs */}
      <div
        className="absolute -top-10 -left-10 h-36 w-36 rounded-full blur-3xl opacity-30"
        style={{ background: typeColor }}
      />
      <div
        className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full blur-3xl opacity-20"
        style={{ background: typeColor }}
      />

      {/* Holographic foil sweep — only for rare cards */}
      {isRare && (
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.55) 30%, transparent 40%, rgba(180,0,255,0.12) 55%, rgba(0,200,255,0.12) 70%, transparent 80%)',
            backgroundSize: '250% 250%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Floating sparkles — legendary only */}
      {isRare && (
        <>
          {[
            { x: '15%', y: '18%', size: 4, delay: 0 },
            { x: '78%', y: '12%', size: 3, delay: 0.6 },
            { x: '88%', y: '55%', size: 4, delay: 1.1 },
            { x: '10%', y: '70%', size: 3, delay: 0.3 },
            { x: '55%', y: '85%', size: 3, delay: 1.7 },
            { x: '35%', y: '30%', size: 2, delay: 0.9 },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
              transition={{ duration: 2.2, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </>
      )}

      {/* Vignette edge darkening */}
      <div className="absolute inset-0 rounded-[1.15rem] bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.06)_100%)]" />
    </div>
  );
}
