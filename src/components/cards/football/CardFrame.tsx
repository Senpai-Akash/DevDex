import { PropsWithChildren } from "react";

export function CardFrame({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="relative w-full overflow-visible">

      {/* Ambient Glow */}

      <div
        className="
        absolute
        -inset-8
        rounded-[3rem]
        bg-amber-300/20
        blur-[90px]
        pointer-events-none
      "
      />

      <div className="relative overflow-visible">

        {/* Outer Gold Frame */}

        <div
          className="
          absolute
          inset-0
          rounded-[2.2rem]
          bg-gradient-to-br
          from-[#fff6d6]
          via-[#f7d05f]
          to-[#9a6b13]
          shadow-[0_0_60px_rgba(255,208,95,.25)]
          "
        />

        {/* Metallic Highlight */}

        <div
          className="
          absolute
          inset-[4px]
          rounded-[2rem]
          bg-gradient-to-br
          from-white/35
          via-amber-100/10
          to-black/20
          "
        />

        {/* Inner Gold Border */}

        <div
          className="
          absolute
          inset-[8px]
          rounded-[1.9rem]
          border
          border-amber-300/35
          bg-gradient-to-b
          from-amber-700/10
          to-black/20
          "
        />

        {/* Content */}

        <div
          className="
          relative
          z-10
          m-3
          overflow-hidden
          rounded-[1.65rem]
          border
          border-white/10
          bg-[#101010]
          shadow-[0_30px_80px_rgba(0,0,0,.65)]
          "
        >
          {children}

          {/* Top Shine */}

          <div
            className="
            absolute
            top-0
            left-0
            right-0
            h-16
            bg-gradient-to-b
            from-white/12
            to-transparent
            pointer-events-none
            "
          />

          {/* Left Metallic Reflection */}

          <div
            className="
            absolute
            left-0
            top-0
            bottom-0
            w-10
            bg-gradient-to-r
            from-white/6
            to-transparent
            pointer-events-none
            "
          />

          {/* Right Reflection */}

          <div
            className="
            absolute
            right-0
            top-0
            bottom-0
            w-10
            bg-gradient-to-l
            from-white/5
            to-transparent
            pointer-events-none
            "
          />

          {/* Bottom Vignette */}

          <div
            className="
            absolute
            bottom-0
            left-0
            right-0
            h-24
            bg-gradient-to-t
            from-black/35
            to-transparent
            pointer-events-none
            "
          />
        </div>

        {/* Soft Inner Glow */}

        <div
          className="
          absolute
          inset-5
          rounded-[1.7rem]
          bg-gradient-to-t
          from-transparent
          via-amber-300/5
          to-amber-200/10
          blur-xl
          pointer-events-none
          "
        />

      </div>
    </div>
  );
}