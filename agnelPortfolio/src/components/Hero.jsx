import './Hero.css'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="hero" ref={ref}>
      <div className="inner">
        {/* Typographic Hero Header */}
        <div className="hero-top reveal">
          <div className="hero-name-row">
            <h1 className="hero-name display-font">
              <span className="first-name">Agnel</span>
              <span className="last-name">Vincent</span>
            </h1>
          </div>
          <div className="hero-meta-badge mono">
            <span>Software Engineer</span>
            <span className="meta-sep">·</span>
            <span>Thrissur, India</span>
          </div>
        </div>

        {/* Hero Content Stage with Single Photo */}
        <div className="hero-stage">
          <div className="hero-prose-col reveal" style={{ transitionDelay: '0.08s' }}>
            <p className="hero-lead">
              I'm a software engineer working on backend systems, data pipelines, and infrastructure.
            </p>
            <p className="hero-body">
              I like when things get into a messy state: broken schemas, failing migrations, or deadlock cascades. 
              Digging into that state, figuring out why it happened, and untangling it is what keeps this interesting.
            </p>
          </div>

          <div className="hero-photo-col reveal" style={{ transitionDelay: '0.14s' }}>
            <div className="hero-photo-frame">
              <img
                src="/leetcode_dp.jpg"
                alt="Agnel Vincent"
                className="hero-photo-img"
                onError={e => { e.target.src = '/agnelyellow.jpg' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
