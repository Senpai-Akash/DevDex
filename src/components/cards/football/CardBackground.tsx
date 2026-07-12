export function CardBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.2),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_18%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_16px)] opacity-70" />
    </div>
  );
}
