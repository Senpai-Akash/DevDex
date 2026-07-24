'use client';

import { motion } from 'framer-motion';

interface PokemonBackgroundProps {
  isRare: boolean;
  typeColor: string;
}

export function PokemonBackground({
  isRare,
  typeColor,
}: PokemonBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[1rem]">

      {/* Base Cream */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom,#fff8dc 0%,#fff7d8 40%,#fdf3c0 100%)",
        }}
      />

      {/* Type Tint */}

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          background: `
          radial-gradient(circle at 20% 20%, ${typeColor} 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, ${typeColor} 0%, transparent 45%)
          `,
        }}
      />

      {/* Classic Paper Texture */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Light Rays */}

      <div
        className="
        absolute
        -top-52
        left-1/2
        h-[520px]
        w-[520px]
        -translate-x-1/2
        rounded-full
        opacity-20
        blur-2xl
        "
        style={{
          background: typeColor,
        }}
      />

      {/* Rare Foil */}

      {isRare && (
        <motion.div
          className="absolute inset-0 opacity-35"
          style={{
            background:
              "linear-gradient(120deg,transparent 0%,rgba(255,255,255,.5) 30%,transparent 45%,rgba(255,0,255,.15) 60%,rgba(0,255,255,.15) 75%,transparent 100%)",
            backgroundSize: "250% 250%",
          }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 100%",
              "0% 0%",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Border vignette */}

      <div
        className="
        absolute
        inset-0
        shadow-[inset_0_0_60px_rgba(0,0,0,.10)]
        "
      />

    </div>
  );
}