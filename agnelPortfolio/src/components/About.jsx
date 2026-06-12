import { useEffect, useRef } from 'react'
import './About.css'

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
              src="/profile-portrait.jpg"
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
            <p className="about__eyebrow mono">About me</p>
            <h2 className="about__heading">
              Building things that<br />
              <span className="about__heading-accent">actually ship</span>
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="about__text">
              I'm a Python Full-Stack Developer with a non-traditional path — from a B.Sc. in Botany to
              building containerized, multi-role web platforms with real-time features. That background
              taught me to approach problems systematically and not assume things work until I see them growing.
            </p>
            <p className="about__text">
              My work lives at the intersection of elegant backend architecture and intuitive frontend experience.
              I care deeply about production quality: if it's not deployed, it's not done.
            </p>
          </div>

          <div className="about__cards reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="about__card">
              <div className="about__card-icon">🏗️</div>
              <div>
                <div className="about__card-title">Architecture First</div>
                <div className="about__card-desc">Design the data model before writing a line of code</div>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card-icon">🚀</div>
              <div>
                <div className="about__card-title">Ship to Production</div>
                <div className="about__card-desc">Docker, EC2, Nginx — end-to-end ownership</div>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card-icon">⚡</div>
              <div>
                <div className="about__card-title">Real-time by Default</div>
                <div className="about__card-desc">WebSockets & Redis for live collaborative systems</div>
              </div>
            </div>
          </div>

          <div className="about__links reveal" style={{ transitionDelay: '0.3s' }}>
            <a href="https://github.com/agnelvincent" target="_blank" rel="noopener noreferrer" className="about__link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:agnelvincent779@gmail.com" className="about__link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
            <a href="tel:+917034654422" className="about__link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.5a19.79 19.79 0 01-3-8.57A2 2 0 012.48 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              +91 70346 54422
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}