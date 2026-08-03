"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-500/20 bg-slate-950/70 backdrop-blur-xl overflow-x-hidden">
      <nav className="mx-auto w-full flex h-16 max-w-7xl items-center justify-between px-6 flex-wrap">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
          aria-label="DevDex Home"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Dev
          </span>
          <span className="text-white">
            Dex
          </span>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-10 text-sm font-semibold md:flex">

          <li>
            <a
              href="#generate"
              className="mt-3 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Generate Card
            </a>
          </li>

          <li>
            <a
              href="#themes"
              className="relative text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              Themes
            </a>
          </li>

          <li>
            <a
              href="#faq"
              className="relative text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
            >
              FAQ
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Senpai-Akash/DevDex"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
            >
              GitHub
            </a>
          </li>

        </ul>

        {/* Right Buttons */}

        <div className="hidden items-center gap-4 md:flex">

          <a
            href="#generate"
            className="rounded-xl border border-indigo-500/30 bg-slate-900 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Generate
          </a>

          <a
            href="https://github.com/Senpai-Akash/DevDex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star DevDex on GitHub"
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 hover:from-indigo-500 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            ⭐ Star
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
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

      </nav>

      {/* Mobile Menu */}

       {open && (
          <nav 
            className="border-t border-slate-800 bg-slate-950 w-full md:hidden" 
            aria-label="Mobile navigation"
          >
  
            <ul className="flex flex-col gap-2 p-6">

              <li>
                <a
                  href="#home"
                  onClick={() => setOpen(false)}
                  className="rounded-lg block w-full px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#themes"
                  onClick={() => setOpen(false)}
                  className="rounded-lg block w-full px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Themes
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  onClick={() => setOpen(false)}
                  className="rounded-lg block w-full px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Senpai-Akash/DevDex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg block w-full px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="#generate"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl block w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Generate Card
                </a>
              </li>

            </ul>

          </nav>
       )}
    </header>
  );
}