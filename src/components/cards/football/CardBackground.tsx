export function CardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[1.7rem]">

      {/* Base */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1905] via-[#17120b] to-[#090909]" />

      {/* Gold Ambient */}

      <div className="absolute -left-24 -top-20 h-[420px] w-[420px] rounded-full bg-amber-300/15 blur-[140px]" />

      <div className="absolute -right-24 bottom-10 h-[340px] w-[340px] rounded-full bg-yellow-300/12 blur-[120px]" />

      {/* Large Diagonal Energy */}

      <div className="absolute -left-40 -top-20 h-[1000px] w-[120px] rotate-[26deg] bg-gradient-to-b from-transparent via-white/8 to-transparent" />

      <div className="absolute right-8 -top-24 h-[900px] w-[70px] rotate-[18deg] bg-gradient-to-b from-transparent via-amber-200/10 to-transparent" />

      {/* Metallic Foil Lines */}

      <div className="absolute inset-0 opacity-[0.08]">

        <svg
          viewBox="0 0 600 800"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120 L600 320"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M-100 320 L500 760"
            stroke="#FFD54A"
            strokeWidth="2"
          />

          <path
            d="M120 0 L600 460"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          <path
            d="M0 640 L600 220"
            stroke="#FFD54A"
            strokeWidth="1.5"
          />
        </svg>

      </div>

      {/* Hex Pattern */}

      <div
        className="
        absolute inset-0
        opacity-[0.05]
        bg-[radial-gradient(circle,transparent_70%,rgba(255,255,255,.12)_72%,transparent_74%)]
        [background-size:42px_42px]
      "
      />

      {/* Gold Rings */}

      <div className="absolute left-1/2 top-[29%] h-[350px] w-[350px] -translate-x-1/2 rounded-full border border-amber-300/10" />

      <div className="absolute left-1/2 top-[29%] h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-white/5" />

      {/* Tech Lines */}

      <div className="absolute left-8 top-10 h-24 w-px bg-gradient-to-b from-transparent via-amber-300/40 to-transparent" />

      <div className="absolute right-10 top-24 h-20 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />

      <div className="absolute left-14 bottom-24 h-20 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="absolute right-14 bottom-12 h-24 w-px bg-gradient-to-b from-transparent via-amber-300/35 to-transparent" />

      {/* Floating Particles */}

      <div className="absolute left-12 top-20 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,.9)]" />

      <div className="absolute right-14 top-32 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,.8)]" />

      <div className="absolute left-24 bottom-32 h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_15px_rgba(251,191,36,.8)]" />

      <div className="absolute right-20 bottom-18 h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.7)]" />

      {/* Top Glow */}

      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-amber-300/10 to-transparent" />

      {/* Bottom Shadow */}

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/65 to-transparent" />

      {/* Edge Vignette */}

      <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,.72)]" />

    </div>
  );
}