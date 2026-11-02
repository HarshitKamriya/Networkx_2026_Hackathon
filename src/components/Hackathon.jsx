import { useEffect, useId, useRef, useState } from 'react'
import { hackathonData, REGISTRATION_URL, REGISTRATION_CLOSED } from '../data/hackathonData.js'
import './Hackathon.css'

const iconPaths = {
  network: <><circle cx="5" cy="7" r="2" /><circle cx="19" cy="7" r="2" /><circle cx="12" cy="18" r="2" /><path d="m7 8 3.5 7m6.5-7-3.5 7M7 7h10" /></>,
  shield: <><path d="M12 3 20 6v5.5c0 4.8-3.4 8-8 9.5-4.6-1.5-8-4.7-8-9.5V6l8-3Z" /><path d="m8.5 12 2.3 2.3 4.8-5" /></>,
  cloud: <><path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 8.8 4.6 4.6 0 0 0 7 18Z" /><path d="M12 12v7m-3-3 3 3 3-3" /></>,
  automation: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><path d="M10 7h3a2 2 0 0 1 2 2v5m-5 3H7a2 2 0 0 1-2-2v-5" /></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4m-5-9 3-3 3 3 4-5" /></>,
  trophy: <><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4" /></>,
  arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  terminal: <><path d="m4 7 5 5-5 5m8 0h8" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7a4 4 0 0 1 0 7m2 4a4 4 0 0 1 3 4v2" /></>,
  laptop: <><rect x="4" y="4" width="16" height="12" rx="1.5" /><path d="M2 20h20l-2-4H4l-2 4Z" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
}

export function Icon({ name, className = '' }) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>
}

function Intro() {
  return (
    <section className="hackathon-intro" aria-labelledby="hackathon-title">
      <div className="hackathon-hero-glow" aria-hidden="true" />
      <div className="hackathon-hero-grid" aria-hidden="true" />
      <div className="hackathon-network-art" aria-hidden="true">
        <div className="hackathon-network-edges">
          <i className="edge-1" /><i className="edge-2" /><i className="edge-3" /><i className="edge-4" />
          <i className="edge-5" /><i className="edge-6" /><i className="edge-7" /><i className="edge-8" />
          <i className="edge-9" /><i className="edge-10" /><i className="edge-11" /><i className="edge-12" />
        </div>
        <div className="hackathon-network-nodes">
          <i className="node-1" /><i className="node-2" /><i className="node-3" /><i className="node-4" />
          <i className="node-5" /><i className="node-6" /><i className="node-7" /><i className="node-8" />
          <i className="node-9" /><i className="node-10" /><i className="node-11" /><i className="node-12" />
          <b>NX</b>
        </div>
      </div>
      <div className="hackathon-container hackathon-intro-layout">
        <div className="hackathon-intro-copy hackathon-reveal">
          <p className="hackathon-day">{hackathonData.day}</p>
          <h2 id="hackathon-title">{hackathonData.eventName}</h2>
          <p className="hackathon-theme">{hackathonData.theme}</p>
          <p className="hackathon-description">{hackathonData.description}</p>
          <p className="hackathon-static-command">{hackathonData.terminalDescription}</p>
          <div className="hackathon-intro-actions">
            <a className="hackathon-button" href="#register">{hackathonData.registerButtonLabel}<Icon name="arrow" /></a>
            <a className="hackathon-button-ghost" href="#prizes">{hackathonData.prizesLinkLabel}<Icon name="arrow" /></a>
          </div>
        </div>
        <ul className="hackathon-facts hackathon-reveal" aria-label={hackathonData.factsLabel}>
          {hackathonData.facts.map((fact) => <li key={fact.label}><i aria-hidden="true" /><span>{fact.label}</span><strong>{fact.value}</strong></li>)}
        </ul>
      </div>
    </section>
  )
}

function Domains() {
  return (
    <section className="hackathon-domains" aria-labelledby="domains-title">
      <div className="hackathon-container">
        <h2 className="hackathon-reveal" id="domains-title">{hackathonData.domainsHeading}</h2>
        <ul className="hackathon-domain-grid">
          {hackathonData.domains.map((domain) => (
            <li className="hackathon-domain-card hackathon-reveal" key={domain.title}>
              <Icon name={domain.icon} className="hackathon-domain-icon" />
              <h3>{domain.title}</h3><p>{domain.description}</p>
              <span className="hackathon-domain-detail">{hackathonData.domainPrompt}</span>
            </li>
          ))}
        </ul>
        <p className="hackathon-domains-note hackathon-reveal">{hackathonData.domainsNote}</p>
      </div>
    </section>
  )
}

function Rules() {
  const configRules = hackathonData.rules.filter((rule) => rule.config)
  const policyRules = hackathonData.rules.filter((rule) => !rule.config)

  return (
    <section className="hackathon-rules" aria-labelledby="rules-title">
      <div className="hackathon-container hackathon-rules-layout">
        <div className="hackathon-rules-intro hackathon-reveal">
          <h2 id="rules-title">{hackathonData.rulesHeading}</h2>
          <div className="hackathon-duration-mark" aria-label={`Duration: ${hackathonData.duration}`}><strong>{hackathonData.durationNumber}</strong><span>hours</span></div>
          <p className="hackathon-organizer">{hackathonData.organizerPrefix} {hackathonData.organizer}.</p>
        </div>
        <div className="hackathon-rules-content">
          <div className="hackathon-config-panel hackathon-reveal">
            <div className="hackathon-config-head"><span /><span /><span /><b>{hackathonData.configTitle}</b></div>
            <dl className="hackathon-rule-list">
              {configRules.map((rule) => <div className="hackathon-rule" key={rule.label}><dt>{rule.configKey}</dt><dd>{rule.value}</dd></div>)}
            </dl>
          </div>
          <div className="hackathon-policy-grid">
            {policyRules.map((rule) => <article className="hackathon-policy-card hackathon-reveal" key={rule.label}><Icon name={rule.icon} /><div><h3>{rule.label}</h3><p>{rule.value}</p></div></article>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function PrizeCounter() {
  const sectionRef = useRef(null)
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const target = hackathonData.prizePoolAmount
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setCount(target)
      setIsVisible(true)
      return undefined
    }

    let observer
    let countTimer
    let initialCheckFrame
    let started = false
    const startCount = () => {
      if (started) return
      started = true
      setIsVisible(true)
      observer?.disconnect()
      const startTime = performance.now()
      countTimer = window.setInterval(() => {
        const progress = Math.min((performance.now() - startTime) / 1800, 1)
        setCount(Math.round(target * (1 - (1 - progress) ** 3)))
        if (progress >= 1) {
          window.clearInterval(countTimer)
          setCount(target)
        }
      }, 16)
    }
    const checkViewport = () => {
      const bounds = section.getBoundingClientRect()
      if (bounds.top < window.innerHeight && bounds.bottom > 0) startCount()
    }

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startCount()
    }, { threshold: 0.1 })

    observer.observe(section)
    initialCheckFrame = requestAnimationFrame(checkViewport)
    window.addEventListener('scroll', checkViewport, { passive: true })
    window.addEventListener('resize', checkViewport)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkViewport)
      window.removeEventListener('resize', checkViewport)
      if (initialCheckFrame) cancelAnimationFrame(initialCheckFrame)
      if (countTimer) window.clearInterval(countTimer)
    }
  }, [])

  return (
    <section ref={sectionRef} className={`hackathon-prizes${isVisible ? ' is-visible' : ''}`} id="prizes" aria-labelledby="prizes-title">
      <div className="hackathon-prize-atmosphere" aria-hidden="true">
        {[8, 19, 30, 42, 54, 66, 78, 90].map((position, index) => <i key={position} style={{ '--particle-x': `${position}%`, '--particle-delay': `${index * -0.72}s` }} />)}
      </div>
      <div className="hackathon-container">
        <h2 id="prizes-title">{hackathonData.prizeHeading}<span aria-hidden="true">₹{count.toLocaleString('en-IN')}</span><span className="hackathon-sr-only">{hackathonData.prizePool}</span></h2>
        <div className="hackathon-podium" aria-label={hackathonData.prizePodiumLabel}>
          <article className="hackathon-prize-card hackathon-prize-second"><h3>{hackathonData.secondPrize.label}</h3><p>{hackathonData.secondPrize.amount}</p></article>
          <article className="hackathon-prize-card hackathon-prize-first"><Icon name="trophy" className="hackathon-trophy-icon" /><h3>{hackathonData.firstPrize.label}</h3><p>{hackathonData.firstPrize.amount}</p></article>
          <article className="hackathon-prize-card hackathon-prize-third"><h3>{hackathonData.thirdPrize.label}</h3><p>{hackathonData.thirdPrize.amount}</p></article>
        </div>
        <ul className="hackathon-additional-prizes" aria-label={hackathonData.otherPrizesLabel}>
          {hackathonData.otherPrizes.map((prize) => <li className="hackathon-additional-prize" key={prize.label}><h3>{prize.label}</h3><p>{prize.amount}</p></li>)}
        </ul>
      </div>
    </section>
  )
}

function CopyButton({ value, payment }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    }).catch(() => {})
  }
  return <button type="button" className={`hackathon-copy${copied ? ' is-copied' : ''}`} onClick={copy} aria-label={`${payment.copy} ${value}`}>{copied ? payment.copied : payment.copy}</button>
}

// Bank details shown before the Google Form. A native <dialog> gives Escape to close,
// focus trapping and the backdrop for free.
export function PaymentDialog({ open, onClose, payment = hackathonData.payment, url = REGISTRATION_URL }) {
  const ref = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return undefined
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <dialog ref={ref} className="hackathon-payment" aria-labelledby={titleId} onClose={onClose} onClick={(e) => { if (e.target === ref.current) onClose() }}>
      <div className="hackathon-payment-panel">
        <div className="hackathon-payment-head">
          <div>
            <p className="hackathon-eyebrow">{payment.eyebrow}</p>
            <h3 id={titleId}>{payment.title}</h3>
          </div>
          <button type="button" className="hackathon-payment-close" onClick={onClose} aria-label={payment.close}>&times;</button>
        </div>
        <p className="hackathon-payment-intro">{payment.intro}</p>
        <p className="hackathon-payment-fee"><span>{payment.feeLabel}</span><strong>{payment.fee} <small>{payment.feeNote}</small></strong></p>
        <ol className="hackathon-payment-steps">
          {payment.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <dl className="hackathon-payment-bank">
          {payment.bank.map(({ label, value, mono }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd className={mono ? 'is-mono' : undefined}><span>{value}</span>{mono && <CopyButton value={value} payment={payment} />}</dd>
            </div>
          ))}
        </dl>
        <a className="hackathon-submit" href={url} target="_blank" rel="noopener noreferrer" onClick={onClose}>{payment.continue}<Icon name="arrow" /></a>
      </div>
    </dialog>
  )
}

// Registration happens on Google Forms only: the site itself does not collect data,
// so nothing is collected here. ID cards are uploaded inside the Google Form.
function Registration() {
  const labels = hackathonData.registrationLabels
  const isOpen = REGISTRATION_URL && REGISTRATION_URL !== '#'
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [triedClosed, setTriedClosed] = useState(false)
  const register = () => (REGISTRATION_CLOSED ? setTriedClosed(true) : setPaymentOpen(true))

  return (
    <section className="hackathon-registration" id="register" aria-labelledby="registration-title">
      <div className="hackathon-container hackathon-registration-layout">
        <div className="hackathon-registration-intro hackathon-reveal">
          <p className="hackathon-eyebrow">{hackathonData.registrationIntroEyebrow}</p>
          <h2 id="registration-title">{hackathonData.registrationIntroHeading[0]}<br />{hackathonData.registrationIntroHeading[1]}</h2>
          <p>{hackathonData.registrationIntroCopy}</p>
          <p className="hackathon-organizer">{hackathonData.organizerPrefix} {hackathonData.organizer}.</p>
        </div>
        <div className="hackathon-form hackathon-reveal">
          <div className="hackathon-form-heading"><h3>{labels.title}</h3><p>{hackathonData.teamSize}</p></div>
          <div className="hackathon-form-section">
            <h4>{labels.checklistHeading}</h4>
            <ul className="hackathon-checklist">
              {labels.checklist.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
            </ul>
          </div>
          {triedClosed ? (
            <p className="hackathon-submit is-closed" role="status">{labels.formsClosed}</p>
          ) : isOpen ? (
            <button type="button" className="hackathon-submit" onClick={register}>{labels.open}<Icon name="arrow" /></button>
          ) : (
            <p className="hackathon-submit is-closed" role="status">{labels.closed}</p>
          )}        </div>
      </div>
      {isOpen && !REGISTRATION_CLOSED && <PaymentDialog open={paymentOpen} onClose={() => setPaymentOpen(false)} />}
    </section>
  )
}

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.hackathon .hackathon-reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }), { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

export default function Hackathon() {
  useScrollReveal()
  return <div className="hackathon" id="hackathon"><Intro /><Domains /><Rules /><PrizeCounter /><Registration /></div>
}