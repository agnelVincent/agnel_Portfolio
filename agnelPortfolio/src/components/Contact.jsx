import { useEffect, useRef } from 'react'
import SocialIcons from './SocialIcons'
import { socials } from '../data/Socials'
import './Contact.css'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__glow" />
      <div className="contact__inner">
        <p className="contact__eyebrow mono reveal">Let's build something</p>
        <h2 className="contact__heading reveal" style={{ transitionDelay: '0.05s' }}>
          Got an idea?<br />
          <span className="contact__heading-accent">Let's ship it.</span>
        </h2>
        <p className="contact__text reveal" style={{ transitionDelay: '0.1s' }}>
          Open to freelance work, collaborations, and full-time roles.
          If you've got a project that needs a full-stack hand — from
          database to deployment — I'd love to hear about it.
        </p>

        <div className="contact__actions reveal" style={{ transitionDelay: '0.15s' }}>
          <a href={`mailto:${socials.email}`} className="contact__btn contact__btn--primary">
            agnelvincent779@gmail.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <SocialIcons variant="labeled" />
        </div>
      </div>
    </section>
  )
}