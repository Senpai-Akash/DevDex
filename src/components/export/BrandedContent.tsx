'use client';

import type { CSSProperties, ReactNode } from 'react';

/**
 * Shared decorative background used by every branded export surface
 * (LinkedIn banner, Twitter header, wallpapers…). Producing a single
 * consistent look across all formats while letting callers tweak
 * intensity / layout via className style props.
 */
export function BrandedBackground({
  style,
  variant = 'aurora',
}: {
  style?: CSSProperties;
  variant?: 'aurora' | 'mesh' | 'sunset' | 'cyber';
}) {
  if (variant === 'mesh') {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={style}
      >
        <div
          className="absolute -left-32 -top-32 h-[60%] w-[60%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)' }}
        />
        <div
          className="absolute -right-32 -bottom-32 h-[60%] w-[60%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 60%)' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 bg-slate-950" />
      </div>
    );
  }

  if (variant === 'sunset') {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={style}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 35%, #be185d 70%, #f97316 100%)',
          }}
        />
        <div
          className="absolute right-[-10%] top-[-10%] h-[70%] w-[70%] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 60%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(2,6,23,0) 60%, rgba(2,6,23,0.85) 100%)',
          }}
        />
      </div>
    );
  }

  if (variant === 'cyber') {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={style}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #020617 0%, #0c4a6e 50%, #1e1b4b 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className="absolute -left-20 top-1/3 h-[50%] w-[50%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 60%)' }}
        />
        <div
          className="absolute -right-20 bottom-0 h-[50%] w-[50%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 60%)' }}
        />
      </div>
    );
  }

  // aurora (default)
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={style}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)',
        }}
      />
      <div
        className="absolute -left-32 -top-32 h-[80%] w-[60%] rounded-full blur-3xl opacity-70"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)' }}
      />
      <div
        className="absolute -right-32 bottom-[-10%] h-[80%] w-[60%] rounded-full blur-3xl opacity-70"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 60%)' }}
      />
      <div
        className="absolute left-1/2 top-1/4 h-[40%] w-[40%] -translate-x-1/2 rounded-full blur-3xl opacity-60"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
      />
    </div>
  );
}

/**
 * Profile identification block used in every banner / wallpaper.
 * Shows name, role, tech stack and GitHub username in a brand-consistent way.
 */
export function BrandedProfile({
  data,
  orientation = 'horizontal',
  className = '',
  showLabel = true,
}: {
  data: import('@/types/card').CardData;
  orientation?: 'horizontal' | 'vertical' | 'compact';
  className?: string;
  showLabel?: boolean;
}) {
  const techStack = data.technology?.split(/[,\s|/]+/).filter(Boolean).slice(0, 6) ?? [];

  if (orientation === 'vertical') {
    return (
      <div className={`flex w-full flex-col items-center gap-6 text-center ${className}`}>
        <div className="flex items-center gap-5">
          {data.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={data.avatar}
              alt={data.displayName}
              className="h-28 w-28 rounded-full border-4 border-white/10 object-cover shadow-2xl"
              crossOrigin="anonymous"
            />
          ) : (
            <div className="h-28 w-28 rounded-full bg-slate-700" />
          )}
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">
              DEVDEX PROFILE
            </p>
            <h2 className="text-4xl font-black leading-tight text-white">
              {data.displayName}
            </h2>
            <p className="text-lg font-semibold text-indigo-200">{data.role}</p>
            <p className="mt-1 text-sm text-slate-400">@{data.username}</p>
          </div>
        </div>
        {techStack.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (orientation === 'compact') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {data.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.avatar}
            alt={data.displayName}
            className="h-16 w-16 rounded-full border-2 border-white/10 object-cover shadow-xl"
            crossOrigin="anonymous"
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-slate-700" />
        )}
        <div>
          {showLabel && (
            <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-300">
              DEVDEX
            </p>
          )}
          <p className="text-lg font-black text-white">{data.displayName}</p>
          <p className="text-xs text-indigo-200">{data.role}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {showLabel && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-cyan-300">
          DEVDEX DEVELOPER PROFILE
        </p>
      )}
      <div className="flex items-center gap-4">
        {data.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.avatar}
            alt={data.displayName}
            className="h-20 w-20 flex-shrink-0 rounded-full border-4 border-white/10 object-cover shadow-2xl"
            crossOrigin="anonymous"
          />
        ) : (
          <div className="h-20 w-20 flex-shrink-0 rounded-full bg-slate-700" />
        )}
        <div>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            {data.displayName}
          </h2>
          <p className="text-base font-semibold text-indigo-200">{data.role}</p>
          <p className="mt-1 text-sm text-slate-300">@{data.username}</p>
        </div>
      </div>
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Branded watermark shown at the bottom of every export.
 */
export function BrandedWatermark({
  className = '',
  position = 'bottom-left',
}: {
  className?: string;
  position?: 'bottom-left' | 'bottom-right' | 'bottom-center';
}) {
  const justify =
    position === 'bottom-right'
      ? 'justify-end'
      : position === 'bottom-center'
      ? 'justify-center'
      : 'justify-start';

  return (
    <div
      className={`absolute bottom-4 left-0 right-0 flex ${justify} px-6 ${className}`}
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
        devdex.app
      </div>
    </div>
  );
}

export function BrandedLayoutShell({
  children,
  className = '',
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden text-white ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
