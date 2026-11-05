// Day 2 talks tickets are handled by Google Forms only. Paste the form's share link here;
// while it is '#', the site shows "Tickets on sale soon".
import { hackathonData } from './hackathonData.js'

export const TICKET_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScSRaZeIVT5LV8Zk4DHV4OAc0KKLm3wn94PK4KtNrxEkuhd4A/viewform'
// Set to true once the event is over; "Buy ticket" then shows the formsClosed message.
export const TICKETS_CLOSED = true

export const talksData = {
  ticketIntroEyebrow: 'Talks tickets',
  ticketIntroHeading: ['Get your seat.', 'Hear from the experts.'],
  ticketIntroCopy: 'Day 2 brings industry leaders and researchers to SKICC, Srinagar for a full day of talks. Seats are limited, so book your ticket early.',
  organizerPrefix: 'Organised by',
  organizer: 'Department of Training & Placement, NIT Srinagar',
  ticketLabels: {
    title: 'Buy Ticket',
    checklistHeading: 'Keep these ready',
    checklist: [
      'Full name and college / institution',
      'Email address and phone number',
      'Valid college ID card',
    ],
    open: 'Buy ticket',
    closed: 'Tickets on sale soon',
    formsClosed: 'Event is over.',
  },
  // Same bank account as the hackathon; only the fee and wording differ.
  payment: {
    ...hackathonData.payment,
    intro: 'Pay the ticket fee by bank transfer before filling in the ticket form.',
    feeLabel: 'Ticket fee',
    fee: '₹1,000',
    feeNote: 'per person',
    continue: 'I have paid ₹1,000, open ticket form',
  },
}
