'use client';

import React from 'react';

export function YugiohBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">

      <style
        dangerouslySetInnerHTML={{
          __html: `

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800;900&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,600&display=swap');

@keyframes yugiohFoil {

0%{
background-position:0% 50%;
}

50%{
background-position:100% 50%;
}

100%{
background-position:0% 50%;
}

}

@keyframes magicRotate{

0%{
transform:rotate(0deg);
}

100%{
transform:rotate(360deg);
}

}

@keyframes shimmer{

0%{
transform:translateX(-120%);
}

100%{
transform:translateX(120%);
}

}

.yugiohFoil{

position:absolute;
inset:0;

background:
linear-gradient(
125deg,

rgba(255,0,170,.08),

rgba(0,255,255,.08),

rgba(255,255,0,.08),

rgba(0,255,120,.08),

rgba(140,0,255,.08)

);

background-size:400% 400%;

mix-blend-mode:screen;

animation:yugiohFoil 12s linear infinite;

}

.shimmer{

position:absolute;
inset:0;

background:
linear-gradient(
120deg,

transparent 35%,

rgba(255,255,255,.18) 50%,

transparent 65%

);

animation:shimmer 7s linear infinite;

opacity:.35;

mix-blend-mode:screen;

pointer-events:none;

}

`,
        }}
      />

      {/* Main Bronze Background */}

      <div
        className="
absolute
inset-0
bg-gradient-to-b
from-[#ab8552]
via-[#82572d]
to-[#311c0a]
"
      />

      {/* Vignette */}

      <div
        className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.75)_100%)]
"
      />

      {/* First Magic Circle */}

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">

        <svg
          className="h-[340px] w-[340px] text-yellow-300"
          style={{
            animation: "magicRotate 40s linear infinite",
          }}
          viewBox="0 0 100 100"
        >

          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth=".6"
          />

          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="currentColor"
            strokeWidth=".45"
            strokeDasharray="2 3"
          />

          <polygon
            points="50,12 84,69 16,69"
            fill="none"
            stroke="currentColor"
            strokeWidth=".45"
          />

          <polygon
            points="50,88 84,31 16,31"
            fill="none"
            stroke="currentColor"
            strokeWidth=".45"
          />

        </svg>

      </div>

      {/* Second Circle */}

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">

        <svg
          className="h-[260px] w-[260px] text-cyan-300"
          style={{
            animation:
              "magicRotate 65s linear infinite reverse",
          }}
          viewBox="0 0 100 100"
        >

          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth=".4"
          />

          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="currentColor"
            strokeDasharray="1 5"
            strokeWidth=".4"
          />

        </svg>

      </div>

      {/* Foil */}

      <div className="yugiohFoil"/>

      {/* Light Sweep */}

      <div className="shimmer"/>
            {/* Floating sparkles */}

      <div className="absolute inset-0 overflow-hidden">

        <span
          className="
          absolute
          left-[18%]
          top-[22%]
          h-1
          w-1
          rounded-full
          bg-yellow-300
          opacity-70
          animate-pulse
          "
        />

        <span
          className="
          absolute
          left-[74%]
          top-[30%]
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300
          opacity-70
          animate-pulse
          "
        />

        <span
          className="
          absolute
          left-[40%]
          top-[74%]
          h-1
          w-1
          rounded-full
          bg-fuchsia-300
          opacity-70
          animate-pulse
          "
        />

        <span
          className="
          absolute
          left-[82%]
          top-[70%]
          h-1
          w-1
          rounded-full
          bg-white
          opacity-80
          animate-pulse
          "
        />

        <span
          className="
          absolute
          left-[12%]
          top-[60%]
          h-1
          w-1
          rounded-full
          bg-cyan-200
          opacity-70
          animate-pulse
          "
        />

      </div>

      {/* Ancient parchment texture */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 200 200"
      >

        <defs>

          <filter id="noiseFilter">

            <feTurbulence
              type="fractalNoise"
              baseFrequency=".75"
              numOctaves="3"
              stitchTiles="stitch"
            />

          </filter>

        </defs>

        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
        />

      </svg>

      {/* Decorative border glow */}

      <div
        className="
        absolute
        inset-0
        rounded-[2rem]
        border
        border-yellow-300/10
        "
      />

      <div
        className="
        absolute
        inset-[6px]
        rounded-[1.7rem]
        border
        border-yellow-200/5
        "
      />

      {/* Bottom magical glow */}

      <div
        className="
        absolute
        inset-x-0
        bottom-0
        h-40
        bg-gradient-to-t
        from-yellow-500/10
        via-transparent
        to-transparent
        "
      />

    </div>
  );
}