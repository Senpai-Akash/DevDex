'use client';

import { useEffect, useState } from 'react';

export type PackPhase =
  | 'drop'
  | 'land'
  | 'charge'
  | 'ready'
  | 'opening'
  | 'rarity'
  | 'reveal'
  | 'finished';

export function usePackSequence() {
  const [phase, setPhase] = useState<PackPhase>('drop');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase('land');
    }, 800);

    const t2 = setTimeout(() => {
      setPhase('charge');
    }, 1400);

    const t3 = setTimeout(() => {
      setPhase('ready');
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const openPack = () => {
    if (phase !== 'ready') return;

    setPhase('opening');

    setTimeout(() => {
      setPhase('rarity');
    }, 700);

    setTimeout(() => {
      setPhase('reveal');
    }, 1700);

    setTimeout(() => {
      setPhase('finished');
    }, 2500);
  };

  return {
    phase,
    openPack,
  };
}