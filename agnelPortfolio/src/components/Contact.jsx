import { useEffect, useRef } from 'react'
import SocialIcons from './SocialIcons'
import { socials } from '../data/socials'
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
        <p className="contact__eyebrow mono reveal">Open to freelance work</p>
        <h2 className="contact__heading reveal" style={{ transitionDelay: '0.05s' }}>
          Got an idea?<br />
          <span className="contact__heading-accent">Let's talk about it.</span>
        </h2>
        <p className="contact__text reveal" style={{ transitionDelay: '0.1s' }}>
          I'm currently open to freelance work and new projects. But even if you don't
          have a project in mind — if you've got an idea, a question, or just want to
          connect, feel free to reach out. I'm always happy to chat.
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