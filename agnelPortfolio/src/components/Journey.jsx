import { useEffect, useRef } from 'react'
import { socials } from '../data/Socials'
import './Journey.css'

const timeline = [
  {
    period: 'Sept 2024 — Present',
    title: 'Full-Stack Development Program',
    org: 'Brocamp (Brototype), Kochi',
    desc: 'Intensive production-focused training — built and deployed real platforms with Django, React, and AWS.',
    current: true,
  },
  {
    period: 'Jan 2024 — Jul 2024',
    title: 'Diploma in Computer Application',
    org: 'CDIT | Christ Computer Academy, Thrissur',
    desc: 'Foundations in computer applications and programming logic.',
  },
  {
    period: 'Jun 2020 — Mar 2023',
    title: 'B.Sc. Botany',
    org: 'University of Calicut | St. Thomas Autonomous College, Thrissur',
    desc: 'A science background that shaped a methodical, hypothesis-driven approach to engineering problems.',
  },
]

export default function Journey() {
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
    <section id="journey" className="journey" ref={sectionRef}>
      <div className="journey__inner">
        <div className="journey__col reveal">
          <p className="journey__eyebrow mono">Background</p>
          <h2 className="journey__heading">From botany<br />to backend</h2>
          <div className="journey__timeline">
            {timeline.map((item, i) => (
              <div className="journey__item" key={item.title}>
                <div className="journey__item-marker">
                  <span className={`journey__item-dot ${item.current ? 'journey__item-dot--active' : ''}`} />
                  {i < timeline.length - 1 && <span className="journey__item-line" />}
                </div>
                <div className="journey__item-content">
                  <span className="journey__item-period mono">{item.period}</span>
                  <h3 className="journey__item-title">{item.title}</h3>
                  <p className="journey__item-org">{item.org}</p>
                  <p className="journey__item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="journey__col reveal" style={{ transitionDelay: '0.15s' }}>
          <p className="journey__eyebrow mono">Off the clock</p>
          <h2 className="journey__heading">What I'm into<br />besides this</h2>

          <div className="journey__interests">
            <a
              href={socials.chess}
              target="_blank"
              rel="noopener noreferrer"
              className="journey__interest journey__interest--link"
            >
              <span className="journey__interest-icon">♟️</span>
              <div>
                <h4 className="journey__interest-label">A casual chess habit</h4>
                <p className="journey__interest-desc">
                  Mostly slow games and the occasional questionable opening.
                  Feel free to challenge me on chess.com — link in the icon above.
                </p>
              </div>
            </a>

            <div className="journey__interest">
              <span className="journey__interest-icon">📚</span>
              <div>
                <h4 className="journey__interest-label">Going down rabbit holes</h4>
                <p className="journey__interest-desc">
                  If something catches my interest, I'll happily spend an entire evening
                  reading or watching about it — even if it has nothing to do with code.
                </p>
              </div>
            </div>

            <div className="journey__interest">
              <span className="journey__interest-icon">🧠</span>
              <div>
                <h4 className="journey__interest-label">Learning for its own sake</h4>
                <p className="journey__interest-desc">
                  The botany-to-code jump taught me that it's never too late to pick up
                  something completely new — so I try to keep doing that.
                </p>
              </div>
            </div>
          </div>

          <div className="journey__quote">
            <svg className="journey__quote-mark" width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path d="M0 24V12.5C0 5.6 4.8 0.8 12 0L13.2 3.2C8.4 4.4 6 7.6 6 12H12V24H0ZM18 24V12.5C18 5.6 22.8 0.8 30 0L31.2 3.2C26.4 4.4 24 7.6 24 12H30V24H18Z" fill="currentColor"/>
            </svg>
            <p>
              I'm happiest when I'm in the middle of building something —
              the messier the process, the more interesting the result.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}