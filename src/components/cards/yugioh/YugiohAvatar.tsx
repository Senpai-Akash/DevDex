'use client';

import React from 'react';

interface YugiohAvatarProps {
  avatar: string;
  displayName: string;
}

export function YugiohAvatar({ avatar, displayName }: YugiohAvatarProps) {
  return (
    <section className="mx-auto mb-4 flex w-full justify-center select-none">
      {/* Monster Card Frame Border */}
      <div className="relative p-2.5 bg-gradient-to-br from-[#cda26f] via-[#7d5628] to-[#513514] border-2 border-[#513514] shadow-[0_8px_20px_rgba(0,0,0,0.7)] rounded-[0.5rem] w-full max-w-[420px]">
        {/* Inner Gold Bezel */}
        <div className="absolute inset-1 border border-[#fcd34d]/40 rounded-[0.35rem]" />
        
        {/* Image Box */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-[#1a0e05] to-[#0a0502] rounded-sm border border-black shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)]">
          {/* Studio lighting gradient back layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(171,133,82,0.15)_0%,_transparent_70%)] pointer-events-none" />
          
          <img
            src={avatar}
            alt={displayName}
            className="relative h-full w-full object-cover filter saturate-[92%] contrast-[102%] hover:scale-102 transition duration-500"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.75)_100%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
