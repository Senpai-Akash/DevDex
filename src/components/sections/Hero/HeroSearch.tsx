"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSearch() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      return;
    }

    router.push(`/profile/${encodeURIComponent(trimmedUsername)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full gap-2"
      aria-label="Generate card"
    >
      <label htmlFor="github-username" className="sr-only">
        GitHub username
      </label>
      <input
        id="github-username"
        name="github-username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username (e.g. LinusTorvalds)"
        className="w-full rounded-md border border-indigo-500/40 bg-slate-900/60 backdrop-blur-sm px-4 py-3 text-sm placeholder-slate-500 text-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition"
      />
      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-500/40 transition"
      >
        Generate Card
      </button>
    </form>
  );
}
