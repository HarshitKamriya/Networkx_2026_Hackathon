import { useState } from 'react'
import { EVENT } from '../data/eventInfo'
import { talksData, TICKET_URL, TICKETS_CLOSED } from '../data/talksData.js'
import { Icon, PaymentDialog } from './Hackathon'
import './Hackathon.css'

const TALKS_DAY = EVENT.days.find((d) => d.title.includes('Talks')) ?? EVENT.days[1]

// Tickets are sold through Google Forms only, laid out like the hackathon registration.
export default function Tickets() {
  const labels = talksData.ticketLabels
  const isOpen = TICKET_URL && TICKET_URL !== '#'
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [triedClosed, setTriedClosed] = useState(false)
  const buy = () => (TICKETS_CLOSED ? setTriedClosed(true) : setPaymentOpen(true))

  return (
    <div className="hackathon">
      <section className="hackathon-registration" id="tickets" aria-labelledby="tickets-title">
        <div className="hackathon-container hackathon-registration-layout">
          <div className="hackathon-registration-intro">
            <p className="hackathon-eyebrow">{talksData.ticketIntroEyebrow}</p>
            <h2 id="tickets-title">{talksData.ticketIntroHeading[0]}<br />{talksData.ticketIntroHeading[1]}</h2>
            <p>{talksData.ticketIntroCopy}</p>
            <p className="hackathon-organizer">{talksData.organizerPrefix} {talksData.organizer}.</p>
          </div>
          <div className="hackathon-form">
            <div className="hackathon-form-heading"><h3>{labels.title}</h3><p>{TALKS_DAY.label} · {TALKS_DAY.date}</p></div>
            <div className="hackathon-form-section">
              <h4>{labels.checklistHeading}</h4>
              <ul className="hackathon-checklist">
                {labels.checklist.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
              </ul>
            </div>
            {triedClosed ? (
              <p className="hackathon-submit is-closed" role="status">{labels.formsClosed}</p>
            ) : isOpen ? (
              <button type="button" className="hackathon-submit" onClick={buy}>{labels.open}<Icon name="arrow" /></button>
            ) : (
              <p className="hackathon-submit is-closed" role="status">{labels.closed}</p>
            )}
          </div>
        </div>
        {isOpen && !TICKETS_CLOSED && <PaymentDialog open={paymentOpen} onClose={() => setPaymentOpen(false)} payment={talksData.payment} url={TICKET_URL} />}
      </section>
    </div>
  )
}
