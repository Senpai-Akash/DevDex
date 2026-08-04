import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-400">
        Error 404
      </p>
      <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
        Card Not Found
      </h1>
      <p className="mt-6 max-w-md text-lg text-slate-400">
        The page you are looking for doesn't exist or has been moved. Try generating a new developer card.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        ← Back to Home
      </Link>
    </div>
  );
}