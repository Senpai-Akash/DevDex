export default function LoadingProfile() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-indigo-500/20 bg-slate-900/80 p-10 shadow-2xl shadow-indigo-500/10">
        <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Loading profile</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-50">
          Fetching developer profile...
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-300">
          Hang tight while we retrieve the GitHub user information.
        </p>
      </div>
    </main>
  );
}
