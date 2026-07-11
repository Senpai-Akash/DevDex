"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-slate-950/50 backdrop-blur-md border-b border-indigo-500/20">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex items-center gap-6 w-full">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Dev</span>
                <span className="text-slate-50">Dex</span>
              </Link>
            </div>

            <div className="hidden md:flex md:flex-1 md:justify-center">
              <ul className="flex items-center gap-8 text-sm font-medium text-slate-300">
                <li>
                  <a href="#features" className="hover:text-indigo-400 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#themes" className="hover:text-purple-400 transition">
                    Themes
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-cyan-400 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-auto flex items-center md:ml-0">
              <div className="hidden md:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Generate Card
                </button>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Toggle menu"
                  className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-slate-50 transition"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {open ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 border-t border-indigo-500/20">
            <ul className="flex flex-col gap-2 py-3">
              <li>
                <a
                  href="#features"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-indigo-500/10 rounded transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#themes"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-purple-400 hover:bg-purple-500/10 rounded transition"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition"
                >
                  FAQ
                </a>
              </li>
              <li className="px-3 py-3">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-500/30"
                >
                  Generate Card
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
