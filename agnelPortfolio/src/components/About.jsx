import { useEffect, useRef } from 'react'
import SocialIcons from './SocialIcons'
import { socials } from '../data/Socials'
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
            <p className="about__eyebrow mono">A bit about me</p>
            <h2 className="about__heading">
              Mostly a developer,<br />
              <span className="about__heading-accent">also just a person</span>
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="about__text">
              I came to programming from a fairly unusual place — a Bachelor's degree in Botany.
              Somewhere along the way I got curious about how the apps I was using every day
              actually worked, started learning, and never really stopped. These days I spend
              most of my time building web applications, piece by piece, until they turn into
              something people can actually use.
            </p>
            <p className="about__text">
              Outside of that, I'm probably reading up on something completely unrelated,
              watching a video about a topic I'll forget about in a week, or just poking
              around with a new idea to see where it goes. A few more of those things
              are tucked away further down the page.
            </p>
          </div>

          <div className="about__cards reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="about__card">
              <div className="about__card-icon">🌱</div>
              <div>
                <div className="about__card-title">An unconventional start</div>
                <div className="about__card-desc">From studying plants to building platforms — curiosity took the wheel</div>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card-icon">🧩</div>
              <div>
                <div className="about__card-title">I like figuring things out</div>
                <div className="about__card-desc">Most of what I know, I picked up by building and breaking things</div>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card-icon">💬</div>
              <div>
                <div className="about__card-title">Always up for a chat</div>
                <div className="about__card-desc">About a project, an idea, or honestly anything — say hi below</div>
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