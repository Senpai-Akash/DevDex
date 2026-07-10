"use client";

import { useState } from "react";

export default function HeroSearch() {
  const [username, setUsername] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
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
        className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
      >
        Generate Card
      </button>
    </form>
  );
}
