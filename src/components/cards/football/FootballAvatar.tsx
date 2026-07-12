interface FootballAvatarProps {
  avatar: string;
  displayName: string;
  role: string;
}

export function FootballAvatar({ avatar, displayName, role }: FootballAvatarProps) {
  return (
    <section className="mx-auto mb-6 flex w-full max-w-[220px] flex-col items-center text-center">
      <div className="relative h-32 w-32 rounded-full border border-amber-300/15 bg-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.22)]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/25 via-transparent to-fuchsia-500/15 blur-2xl" />
        <img
          src={avatar}
          alt={`${displayName} avatar`}
          className="relative h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="mt-5">
        <p className="text-lg font-semibold uppercase tracking-[0.18em] text-amber-100">{displayName}</p>
        <p className="mt-1 text-[0.68rem] uppercase tracking-[0.35em] text-slate-400">{role}</p>
      </div>
    </section>
  );
}
