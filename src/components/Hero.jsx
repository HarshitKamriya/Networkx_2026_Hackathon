import Countdown from "./Countdown";
import { EVENT, REGISTER_HREF } from "../data/eventInfo";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dark text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(56,189,248,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-130 w-130 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-105 w-105 rounded-full bg-primary/25 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative w-full px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-12 lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {EVENT.edition} · {EVENT.institute} · {EVENT.year}
              </p>
            </div>

            <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="text-logoblue">Network</span>
              <span className="relative inline-block text-logored">
                <span className="hero-x">X</span>
                <span
                  className="hero-x-underline absolute -bottom-1 left-0 h-1 w-full overflow-hidden rounded-full bg-logored/60"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              {EVENT.theme}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={REGISTER_HREF}
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_-8px_rgba(29,78,216,0.7)] transition-colors hover:bg-accent hover:text-dark"
              >
                Register now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#schedule"
                className="rounded-md border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                View schedule
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm sm:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Status
            </p>
            <Countdown target={EVENT.countdownTarget} />
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[...EVENT.days, { label: "Venue", title: EVENT.venue.name, date: EVENT.venue.address }].map((d) => (
            <div key={d.label} className="bg-dark p-6 transition-colors hover:bg-white/3 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {d.label}
              </p>
              <p className="mt-2 text-xl font-bold">{d.title}</p>
              <p className="mt-1 text-sm text-white/60">{d.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}