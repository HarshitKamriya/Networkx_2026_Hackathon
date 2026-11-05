# NetworkX 2026

A responsive event landing page for the NetworkX hackathon hosted by NIT Srinagar. The site showcases the event theme, schedule, hackathon details, speakers, sponsors, venue information, FAQs, and registration CTA for the 2026 edition.

## Overview

NetworkX is the first edition of a technology-focused hackathon and speaker event at NIT Srinagar, bringing together students to explore networking, cybersecurity, cloud infrastructure, and automation through a hands-on competition.

animation effect in nextworkx x is added.

This project is built as a modern React + Vite frontend and is designed as a polished single-page marketing site for the event.

## Features

- Hero section with event branding and countdown
- About and schedule sections
- Hackathon details, rules, and prizes
- Speaker and team highlight sections
- Sponsor showcase
- Venue and contact information
- FAQ block for common attendee questions
- Responsive layout for desktop and mobile screens

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS
- JavaScript (JSX)

## Project Structure

```bash
networkx26/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── icons/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json      
├── vite.config.js
└── README.md
```

## Getting Started

1. Install dependencies:   




```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build the production version:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Useful Files

- `src/data/eventInfo.js` – core event metadata such as name, dates, venue, and links
- `src/data/hackathonData.js` – hackathon rules, prizes, eligibility, and registration details
- `src/components/` – reusable page sections and UI blocks

## Customization

To update the event content, edit the data files in `src/data/` and adjust styling in `src/index.css` or component-specific CSS files.

The registration button and event links can be updated through the data configuration files so the landing page remains easy to maintain.

## Notes

This is a static frontend project intended for event promotion and registration awareness. It does not include a backend or database.





