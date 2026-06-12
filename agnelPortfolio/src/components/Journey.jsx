import { useEffect, useRef } from 'react'
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

const achievements = [
  {
    num: '300+',
    label: 'LeetCode Problems',
    desc: 'Covering core Data Structures & Algorithms patterns',
  },
  {
    num: '02',
    label: 'Production Deployments',
    desc: 'End-to-end ownership — architecture to AWS hosting',
  },
  {
    num: '∞',
    label: 'Real-time Systems',
    desc: 'WebSockets, Django Channels & Redis in live products',
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
          <p className="journey__eyebrow mono">By the numbers</p>
          <h2 className="journey__heading">Proof of work</h2>
          <div className="journey__achievements">
            {achievements.map(item => (
              <div className="journey__achievement" key={item.label}>
                <span className="journey__achievement-num">{item.num}</span>
                <div>
                  <h4 className="journey__achievement-label">{item.label}</h4>
                  <p className="journey__achievement-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="journey__quote">
            <svg className="journey__quote-mark" width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path d="M0 24V12.5C0 5.6 4.8 0.8 12 0L13.2 3.2C8.4 4.4 6 7.6 6 12H12V24H0ZM18 24V12.5C18 5.6 22.8 0.8 30 0L31.2 3.2C26.4 4.4 24 7.6 24 12H30V24H18Z" fill="currentColor"/>
            </svg>
            <p>
              If it's not deployed, it's not done. I'd rather ship something small and real
              than perfect something that never leaves my laptop.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}