"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex items-center gap-6 w-full">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-semibold tracking-tight">
                <span className="text-indigo-600">Dev</span>Dex
              </Link>
            </div>

            <div className="hidden md:flex md:flex-1 md:justify-center">
              <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
                <li>
                  <a href="#features" className="hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#themes" className="hover:text-gray-900">
                    Themes
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gray-900">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-auto flex items-center md:ml-0">
              <div className="hidden md:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Generate Card
                </button>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Toggle menu"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
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
          <div className="md:hidden mt-2 border-t border-gray-100">
            <ul className="flex flex-col gap-2 py-3">
              <li>
                <a
                  href="#features"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#themes"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  FAQ
                </a>
              </li>
              <li className="px-3 py-3">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
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
