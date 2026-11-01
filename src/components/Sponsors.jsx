import { CONTACT } from "../data/eventInfo";

// Add sponsors here as they are confirmed, e.g. { name: "Company", logo: "/sponsors/company.svg", href: "https://..." }
const SPONSORS = [
  { name: "Omada by TP-Link", logo: "/sponsors/omada-tp-link.svg", href: "https://www.omadanetworks.com/" },
  
  { name: "Rising Kashmir", logo: "/sponsors/rising-kashmir.png", href: "https://risingkashmir.com/" },
  { name: "J&K Bank", logo: "/sponsors/jk-bank.png", href: "https://www.jkbank.com/" },
  { name: "FIL Industries", logo: "/sponsors/fil-industries.png", href: "https://www.filindustries.com/" },
  { name: "Fortinet", logo: "/sponsors/fortinet.svg", href: "https://www.fortinet.com/" },
  { name: "Intec Infonet", logo: "/sponsors/intec-infonet.png", href: "https://www.intecinfonet.com/" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-white px-6 py-20 text-text sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Sponsors & Partners
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Powering NetworkX
        </h2>

        {SPONSORS.length > 0 ? (
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:flex lg:flex-wrap lg:items-center lg:justify-center">
            {SPONSORS.map((s) => (
              <li key={s.name} className="lg:w-72">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition sm:h-40 sm:p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <img src={s.logo} alt={s.name} className="h-full w-full object-contain" />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-dashed border-primary/30 bg-light/60 p-10">
            <p className="text-lg font-semibold">Sponsors will be announced soon.</p>
            <p className="mt-3 text-slate-600">
              Interested in supporting the 1st Edition of NetworkX? We would love to hear from you.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Email us at
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=Sponsoring%20NetworkX%202026`}
              className="mt-1 inline-block select-all break-all text-xl font-bold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-dark sm:text-2xl"
            >
              {CONTACT.email}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
