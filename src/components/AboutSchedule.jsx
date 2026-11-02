import { EVENT, TALKS_SCHEDULE } from "../data/eventInfo";

export default function AboutSchedule() {
  return (
    <div className="bg-dark text-white">
      {/* ABOUT */}
      <section id="about" className="bg-light px-6 py-20 text-text sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              About NetworkX
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              The beginning of something bigger.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              The 1st Edition of NetworkX brings together a community of
              curious minds, creators and technology enthusiasts. The event is
              designed around learning, collaboration, networking and
              hands-on problem solving.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From engaging sessions to an intensive hackathon, NetworkX
              provides participants with an opportunity to learn new ideas,
              meet like-minded people and build meaningful solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-dark p-6 text-white shadow-xl">
              <p className="text-4xl font-extrabold text-accent">01</p>
              <p className="mt-3 font-semibold">1st Edition</p>
              <p className="mt-2 text-sm text-slate-300">
                The beginning of the NetworkX journey.
              </p>
            </div>

            <div className="rounded-3xl bg-primary p-6 text-white shadow-xl">
              <p className="text-4xl font-extrabold">08</p>
              <p className="mt-3 font-semibold">Hours</p>
              <p className="mt-2 text-sm text-blue-100">
                Of hands-on hackathon activity.
              </p>
            </div>

            <div className="col-span-2 rounded-3xl border border-primary/20 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                What to expect
              </p>
              <p className="mt-3 text-lg font-semibold">
                Ideas • Collaboration • Technology • Innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Event Schedule
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Two days. One experience.
            </h2>

            <p className="mt-4 text-slate-300">
              The Day 2 timeline below is tentative and may change as the
              event plans are finalized.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* DAY 1 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-accent/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">
                    {EVENT.days[0].label} · {EVENT.days[0].date}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    8-Hour Hackathon
                  </h3>
                </div>

                <div className="rounded-2xl bg-primary/20 px-4 py-2 text-sm font-semibold text-accent">
                  11:00 AM
                </div>
              </div>

              <div className="mt-8 border-l-2 border-accent/40 pl-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent" />

                  <p className="text-sm font-semibold text-accent">
                    11:00 AM
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Hackathon Begins
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Participants begin an intensive 8-hour hackathon focused on
                    creativity, collaboration and problem solving.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-accent">
                    7:00 PM
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Hackathon Ends
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Eight hours of building, testing and refining come to an
                    end.
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">
                    {EVENT.days[1].label} · {EVENT.days[1].date}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    {EVENT.days[1].title}
                  </h3>
                </div>

                <div className="shrink-0 rounded-2xl border border-accent/40 px-4 py-2 text-sm font-semibold text-accent">
                  Tentative
                </div>
              </div>

              <ol className="mt-6 divide-y divide-white/10">
                {TALKS_SCHEDULE.map((item) => (
                  <li
                    key={item.time}
                    className="grid grid-cols-[8.5rem_1fr] items-baseline gap-3 py-2.5 sm:grid-cols-[9.5rem_1fr_auto]"
                  >
                    <span className="text-sm font-semibold text-accent">
                      {item.time}
                    </span>
                    <span
                      className={
                        item.kind === "highlight"
                          ? "font-semibold text-white"
                          : item.kind === "break"
                            ? "font-medium italic text-slate-300"
                            : "text-slate-200"
                      }
                    >
                      {item.title}
                    </span>
                    <span className="hidden text-xs text-slate-500 sm:block">
                      {item.duration}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-4 text-xs text-slate-500">
                Timings are tentative and may change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Venue details, rendered further down the page (after Sponsors).
export function Venue() {
  return (
    <section id="venue" className="bg-light px-6 py-20 text-text sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Venue
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Where it happens
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {EVENT.venues.map((v) => (
            <div key={v.name} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
                  📍
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {v.day}
                </p>

                <h3 className="mt-2 text-2xl font-bold">{v.name}</h3>

                <p className="mt-1 font-semibold text-slate-700">{v.fullName}</p>

                <p className="mt-3 leading-7 text-slate-600">{v.address}</p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-dark"
                >
                  Open in Google Maps
                </a>
              </div>

              <iframe
                title={`Map of ${v.fullName}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(v.mapQuery)}&output=embed`}
                className="mt-auto h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
