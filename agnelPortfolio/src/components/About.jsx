import { useEffect, useRef } from 'react'
import SocialIcons from './SocialIcons'
import { socials } from '../data/Socials'
import '../styles/About.css'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__inner">
        <div className="about__photo-col reveal">
          <div className="about__photo-wrap">
            <img
              src="/agnelyellow.jpg"
              alt="Agnel Vincent"
              className="about__photo"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="about__photo-fallback" style={{ display: 'none' }}>AV</div>
            <div className="about__photo-accent" />
          </div>
          <div className="about__location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            <span>Thrissur, Kerala, India</span>
          </div>
        </div>

        <div className="about__content">
          <div className="reveal">
            <p className="about__eyebrow mono">— on the record</p>
            <h2 className="about__heading">
              Mostly a developer,<br />
              <span className="about__heading-accent">everything else, after hours</span>
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="about__text">
              Studied Botany. Got curious about how software worked - not in theory,
              but in practice. Pulled things apart until they made sense, then started
              building with the pieces. That's still the process.
            </p>
            <p className="about__text">
              These days it's web applications, built carefully, until they're
              something a person can actually use. No fixed allegiances to any stack
              or pattern. When something better shows up, I move toward it.
              When a project ships, I move on.
            </p>
          </div>

          <div className="about__cards reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="about__card">
              <div className="about__card-top">
                <span className="about__card-num">01</span>
                <i className="ti ti-bulb about__card-icon" aria-hidden="true" />
              </div>
              <div className="about__card-title">Why before How</div>
              <div className="about__card-desc">
                If the reason isn't clear, the solution doesn't matter. That's where everything starts.
              </div>
            </div>

            <div className="about__card">
              <div className="about__card-top">
                <span className="about__card-num">02</span>
                <i className="ti ti-robot about__card-icon" aria-hidden="true" />
              </div>
              <div className="about__card-title">AI-first curious</div>
              <div className="about__card-desc">
                Always poking at new AI tools. Not to follow the hype, but to know what's actually useful.
              </div>
            </div>

            <div className="about__card">
              <div className="about__card-top">
                <span className="about__card-num">03</span>
                <i className="ti ti-flame about__card-icon" aria-hidden="true" />
              </div>
              <div className="about__card-title">Run toward the hard thing</div>
              <div className="about__card-desc">
                Discomfort usually means it's worth doing. That's the whole filter.
              </div>
            </div>
          </div>
          <div className="about__links reveal" style={{ transitionDelay: '0.3s' }}>
            <SocialIcons variant="labeled" />
            <a href={`mailto:${socials.email}`} className="social-icons__link about__email-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}