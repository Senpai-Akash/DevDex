import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-indigo-500/20 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
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
            <p className="max-w-xs text-sm leading-relaxed">
              Transform your GitHub profile into high-quality, collectible developer cards. 
              The ultimate way to showcase your technical expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#generate" className="transition hover:text-indigo-400">
                  Generate Card
                </a>
              </li>
              <li>
                <a href="#themes" className="transition hover:text-indigo-400">
                  Themes
                </a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-indigo-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Connect
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="https://github.com/Senpai-Akash/DevDex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-indigo-400"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-1.455.148-1.448.148-1.448 1.598.24 1.548 1.547 1.548 1.547 1.089-1.455.282-1.433.282-1.433-1.089-1.455-1.089-1.455 0-1.448.148-1.448 1.547 1.547 1.547 1.547 1.547 1.547 0 1.448.148 1.448.148 1.448 1.089 1.455.282 1.433.282 1.433 1.089 1.455 1.089 1.455 0 1.448-.148 1.448-1.547 1.547-1.547-1.547-1.547-1.547 0-1.448-.148-1.448-.148-1.448 1.089-1.455-.282-1.433-.282-1.433-1.089-1.455-1.089-1.455 0-1.448.148-1.448 1.547 1.547-1.547-1.547-1.547-1.547 0 1.448.148 1.448.148 1.448-3.338.726-4.033-1.416-4.033-1.416-0.546-1.387-1.333-1.757-1.333-1.757-1.089-1.455.148-1.448.148-1.448 1.598.24 1.548 1.547 1.548 1.547 1.089-1.455.282-1.433.282-1.433-1.089-1.455-1.089-1.455 0-1.448.148-1.448 1.547 1.547-1.547-1.547-1.547-1.547 0 1.448.148 1.448.148 1.448" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-xs">
            &copy; {currentYear} DevDex. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}