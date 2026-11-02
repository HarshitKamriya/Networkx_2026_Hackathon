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

// Tentative Day 2 (Talks) timeline. kind: "break" or "highlight" styles a row; default is a talk.
export const TALKS_SCHEDULE = [
  { time: "11:00–11:15 AM", duration: "15 min", title: "Speaker Session 1" },
  { time: "11:15–11:30 AM", duration: "15 min", title: "Speaker Session 2" },
  { time: "11:30–11:45 AM", duration: "15 min", title: "Speaker Session 3" },
  { time: "11:45 AM–12:05 PM", duration: "20 min", title: "Cultural Performance 1", kind: "highlight" },
  { time: "12:05–12:20 PM", duration: "15 min", title: "Speaker Session 4" },
  { time: "12:20–12:35 PM", duration: "15 min", title: "Speaker Session 5" },
  { time: "12:35–12:55 PM", duration: "20 min", title: "Cultural Performance 2", kind: "highlight" },
  { time: "12:55–1:10 PM", duration: "15 min", title: "Speaker Session 6" },
  { time: "1:10–1:25 PM", duration: "15 min", title: "Speaker Session 7" },
  { time: "1:25–2:10 PM", duration: "45 min", title: "Lunch Break & Networking", kind: "break" },
  { time: "2:10–2:25 PM", duration: "15 min", title: "Speaker Session 8" },
  { time: "2:25–2:40 PM", duration: "15 min", title: "Speaker Session 9" },
  { time: "2:40–3:00 PM", duration: "20 min", title: "Cultural Performance 3", kind: "highlight" },
  { time: "3:00–3:15 PM", duration: "15 min", title: "Special Speaker Session", kind: "highlight" },
  { time: "3:15–3:30 PM", duration: "15 min", title: "Speaker Session 10" },
  { time: "3:30–3:50 PM", duration: "20 min", title: "Special Singing Performance", kind: "highlight" },
  { time: "3:50–4:05 PM", duration: "15 min", title: "Hackathon Results Announcement", kind: "highlight" },
  { time: "4:05–4:50 PM", duration: "45 min", title: "Prize Distribution & Felicitation", kind: "highlight" },
  { time: "4:50–5:00 PM", duration: "10 min", title: "Vote of Thanks & Group Photograph" },
];

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