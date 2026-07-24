'use client';

import { motion } from 'framer-motion';
import { getPokemonType, TYPE_META } from './pokemonTypeUtils';

interface PokemonArtworkProps {
  avatar: string;
  name: string;
  isRare: boolean;
  technology: string;
}

export function PokemonArtwork({
  avatar,
  name,
  isRare,
  technology,
}: PokemonArtworkProps) {
  const pkType = getPokemonType(technology);
  const meta = TYPE_META[pkType];

  return (
    <div className="relative mx-3 mt-2 mb-3">

      <div
        className="
          relative
          h-[220px]
          overflow-hidden
          rounded-[4px]
          border-[4px]
          border-[#d6b86b]
          bg-white
          shadow-[inset_0_0_0_1px_rgba(255,255,255,.7),0_3px_10px_rgba(0,0,0,.18)]
        "
      >
        {/* Base Artwork Background */}

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 25% 20%, ${meta.color}55 0%, transparent 45%),
              radial-gradient(circle at 80% 80%, ${meta.darkColor}35 0%, transparent 55%),
              linear-gradient(180deg,#eefcff 0%,#ffffff 45%,#f8f8f8 100%)
            `,
          }}
        />

        {/* Printed Texture */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,.9) 0px, transparent 2px, transparent 4px)',
          }}
        />

        {/* Type Glow */}

        <div
          className="absolute -left-20 top-4 h-60 w-60 rounded-full blur-3xl"
          style={{
            background: `${meta.color}45`,
          }}
        />

        <div
          className="absolute -right-10 bottom-0 h-52 w-52 rounded-full blur-3xl"
          style={{
            background: `${meta.darkColor}35`,
          }}
        />

        {/* Artwork */}

        <motion.img
          src={avatar}
          alt={name}
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: .35,
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-top
            scale-[1.15]
          "
        />

        {/* Top Gloss */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/28
            via-transparent
            to-transparent
          "
        />

        {/* Rare Holographic Layer */}

        {isRare && (
          <motion.div
            className="absolute inset-0 mix-blend-screen"
            animate={{
              backgroundPosition: [
                '-350px 0px',
                '350px 0px',
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: `
                linear-gradient(
                  115deg,
                  transparent 0%,
                  rgba(255,255,255,.12) 20%,
                  rgba(255,170,255,.22) 35%,
                  rgba(120,220,255,.22) 50%,
                  rgba(255,255,170,.20) 65%,
                  transparent 90%
                )
              `,
              backgroundSize: '350px 100%',
            }}
          />
        )}

        {/* Bottom Fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-16
            bg-gradient-to-t
            from-black/20
            to-transparent
          "
        />

        {/* Inner Frame */}

        <div
          className="
            absolute
            inset-0
            rounded-[2px]
            border
            border-white/45
            pointer-events-none
          "
        />

        {/* Outer Shadow */}

        <div
          className="
            absolute
            inset-0
            shadow-[inset_0_0_25px_rgba(0,0,0,.18)]
            pointer-events-none
          "
        />
      </div>
    </div>
  );
}