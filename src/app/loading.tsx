export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-indigo-500"
          aria-hidden="true"
        />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          Loading DevDex
        </p>
      </div>
    </div>
  );
}