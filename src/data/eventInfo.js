export const EVENT = {
  name: "NetworkX",
  edition: "1st Edition",
  year: "2026",
  institute: "NIT Srinagar",
  theme: "Many Minds. One Network. Endless Possibilities.",
  days: [
    { label: "Day 1", title: "NetworkX Hackathon", date: "3 November 2026" },
    { label: "Day 2", title: "NetworkX Talks", date: "4 November 2026" },
  ],
  venue: {
    name: "NIT Srinagar & SKICC",
    address: "Hackathon at NIT · Talks at SKICC",
  },
  // Per-day venues shown in the Venue section; mapQuery feeds the embedded Google Map
  venues: [
    {
      day: "Day 1 · Hackathon",
      name: "NIT Srinagar",
      fullName: "National Institute of Technology Srinagar",
      address: "Hazratbal, Srinagar, Jammu & Kashmir 190006",
      mapQuery: "National Institute of Technology Srinagar, Hazratbal",
    },
    {
      day: "Day 2 · Talks",
      name: "SKICC",
      fullName: "Sher-i-Kashmir International Conference Centre",
      address: "Boulevard Road, Cheshmashahi, Srinagar, Jammu & Kashmir",
      mapQuery: "Sher-i-Kashmir International Conference Centre, Srinagar",
    },
  ],
  countdownTarget: "2026-11-03T11:00:00+05:30", // Day 1 hackathon start, 11:00 AM IST
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Talks", href: "#talks" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export const REGISTER_HREF = "#register";
export const TICKETS_HREF = "#tickets";

export const CONTACT = {
  email: "networkx@nitsri.ac.in",
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/networkx.nitsri" },
  ],
};