import { useEffect, useRef } from 'react'
import { socials } from '../data/socials'
import './Journey.css'

const timeline = [
  {
    period: 'Sept 2024 - Present',
    title: 'Full-Stack Development Program',
    org: 'Brocamp (Brototype), Kochi',
    desc: 'Intensive production-focused training - built and deployed real platforms with Django, React, and AWS.',
    current: true,
  },
  {
    period: 'Jan 2024 - Jul 2024',
    title: 'Diploma in Computer Application',
    org: 'CDIT | Christ Computer Academy, Thrissur',
    desc: 'Foundations in computer applications and programming logic.',
  },
  {
    period: 'Jun 2020 - Mar 2023',
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

          <a
            href={socials.chess}
            target="_blank"
            rel="noopener noreferrer"
            className="journey__chess"
          >
            <div className="journey__chess-board" aria-hidden="true">
              {Array.from({ length: 64 }).map((_, i) => (
                <span key={i} className="journey__chess-cell" />
              ))}
            </div>
            <div className="journey__chess-glow" />

            <div className="journey__chess-content">
              <div className="journey__chess-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 22H5v-2h14v2zM17.5 11.5c.41-.6.66-1.32.66-2.1 0-1.93-1.57-3.5-3.5-3.5-.36 0-.7.06-1.03.16.34-.5.56-1.1.56-1.76C14.19 2.59 13.1 1.5 11.8 1.5S9.41 2.59 9.41 3.8c0 .79.36 1.49.93 1.97-.97.41-1.65 1.36-1.65 2.48 0 .68.25 1.3.66 1.78C8.32 10.51 7.5 11.85 7.5 13.4c0 .98.36 1.86.95 2.55L7 19h10l-1.45-3.05c.59-.69.95-1.57.95-2.55 0-.94-.38-1.79-1-2.4z"/>
                </svg>
              </div>
              <div className="journey__chess-text">
                <h4 className="journey__chess-title">A casual chess habit</h4>
                <p className="journey__chess-desc">
                  Mostly slow games and the occasional questionable opening - nothing
                  serious, just something to unwind with. If you're up for a game, come find me.
                </p>
                <span className="journey__chess-cta">
                  Challenge me on Chess.com
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          <div className="journey__interests">
            <div className="journey__interest">
              <span className="journey__interest-icon">📚</span>
              <div>
                <h4 className="journey__interest-label">Going down rabbit holes</h4>
                <p className="journey__interest-desc">
                  If something catches my interest, I'll happily spend an entire evening
                  reading or watching about it - even if it has nothing to do with code.
                </p>
              </div>
            </div>

            <div className="journey__interest">
              <span className="journey__interest-icon">🧠</span>
              <div>
                <h4 className="journey__interest-label">Learning for its own sake</h4>
                <p className="journey__interest-desc">
                  The botany-to-code jump taught me that it's never too late to pick up
                  something completely new - so I try to keep doing that.
                </p>
              </div>
            </div>
          </div>

          <div className="journey__quote">
            <svg className="journey__quote-mark" width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path d="M0 24V12.5C0 5.6 4.8 0.8 12 0L13.2 3.2C8.4 4.4 6 7.6 6 12H12V24H0ZM18 24V12.5C18 5.6 22.8 0.8 30 0L31.2 3.2C26.4 4.4 24 7.6 24 12H30V24H18Z" fill="currentColor"/>
            </svg>
            <p>
              I'm happiest when I'm in the middle of building something -
              the messier the process, the more interesting the result.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}