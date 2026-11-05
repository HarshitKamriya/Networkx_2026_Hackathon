import { useEffect, useState } from "react";
import { NAV_LINKS, REGISTER_HREF, TICKETS_HREF } from "../data/eventInfo";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-dark/90 text-white backdrop-blur-md transition-shadow ${
        scrolled ? "border-white/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]" : "border-transparent"
      }`}
    >
      <nav
        className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-2.5 sm:px-8 lg:px-12"
        aria-label="Main"
      >
        <Logo onClick={close} />

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative whitespace-nowrap text-sm text-white/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-white hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={TICKETS_HREF}
              className="whitespace-nowrap rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Event Is Over
            </a>
          </li>
          {/* Hackathon registration is closed.
          <li>
            <a
              href={REGISTER_HREF}
              className="whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_16px_-4px_rgba(29,78,216,0.8)] transition-colors hover:bg-accent hover:text-dark"
            >
              Register
            </a>
          </li>
          */}
        </ul>
        <button
          type="button"
          className="shrink-0 rounded-md p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>


      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-dark lg:hidden">
          <ul className="flex flex-col px-5 py-3 sm:px-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close} className="block py-3 text-white/85 hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={TICKETS_HREF}
                onClick={close}
                className="block rounded-md border border-white/25 px-4 py-3 text-center font-semibold text-white hover:border-accent hover:text-accent"
              >
                Event Is Over
              </a>
            </li>
            {/* Hackathon registration is closed.
            <li className="py-3">
              <a
                href={REGISTER_HREF}
                onClick={close}
                className="block rounded-md bg-primary px-4 py-3 text-center font-semibold text-white hover:bg-accent hover:text-dark"
              >
                Register
              </a>
            </li>
            */}
          </ul>
        </div>
      )}
    </header>
  );
}