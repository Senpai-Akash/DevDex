'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { CardData } from '@/types/card';
import { PokemonFrame } from './PokemonFrame';
import { PokemonBackground } from './PokemonBackground';
import { PokemonHeader } from './PokemonHeader';
import { PokemonArtwork } from './PokemonArtwork';
import { PokemonAbility } from './PokemonAbility';
import { PokemonAttacks } from './PokemonAttacks';
import { PokemonFooter } from './PokemonFooter';
import { getPokemonType, TYPE_META } from './pokemonTypeUtils';

interface PokemonCardProps {
  data: CardData;
}

export function PokemonCard({ data }: PokemonCardProps) {
  const isRare = /legendary|mythic|ultra|rare|holo/i.test(data.rarity);
  const pkType = getPokemonType(data.technology);
  const meta = TYPE_META[pkType];

  // ── 3-D tilt on hover ───────────────────────────────────────────────────────
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), {
    stiffness: 180,
    damping: 22,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // ── Foil shine position tracks mouse ────────────────────────────────────────
  const shineX = useTransform(mouseX, [-1, 1], ['0%', '100%']);
  const shineY = useTransform(mouseY, [-1, 1], ['0%', '100%']);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative mx-auto w-[380px] cursor-pointer select-none"
      aria-label={`Pokémon card for ${data.displayName}`}
    >
      <PokemonFrame isRare={isRare} typeColor={meta.color}>
        {/* ── Card surface ─────────────────────────────────── */}
        <PokemonBackground isRare={isRare} typeColor={meta.color} />

        {/* ── Mouse-tracking foil shine overlay ────────────── */}
        {isRare && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 rounded-[0.95rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useTransform(
                [shineX, shineY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.35) 0%, rgba(255,180,255,0.1) 30%, transparent 60%)`
              ),
            }}
          />
        )}

        {/* ── Card content (z-10 keeps it above backgrounds) ── */}
        <div className="relative z-10 flex h-full flex-col">
          <PokemonHeader data={data} isRare={isRare} />

          <PokemonArtwork
            avatar={data.avatar}
            name={data.displayName}
            isRare={isRare}
            technology={data.technology}
          />

          <PokemonAbility
            developerClass={data.developerClass}
            trait={data.trait}
            typeColor={meta.color}
          />

          <PokemonAttacks
            achievements={data.achievements}
            powerScore={data.powerScore}
            stats={data.stats}
            pkType={pkType}
          />

          <PokemonFooter data={data} />
        </div>
      </PokemonFrame>
    </motion.article>
  );
}
