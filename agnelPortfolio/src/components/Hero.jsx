import './Hero.css'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="hero" ref={ref}>
      <div className="inner hero-inner">
        <div className="hero-grid">
          {/* Typographic Hero Header */}
          <div className="hero-header-block">
            <h1 className="hero-name display-font">
              <span className="hero-name-mask">
                <span className="first-name">Agnel</span>
              </span>
              <span className="hero-name-mask">
                <span className="last-name">Vincent</span>
              </span>
            </h1>
          </div>

          {/* Primary Photo Plate: Clean rectangular portrait with natural framing */}
          <div className="hero-photo-block reveal" style={{ transitionDelay: '0.12s' }}>
            <div className="hero-photo-frame">
              <img
                src="/leetcode_dp.jpg"
                alt="Agnel Vincent"
                width="857"
                height="832"
                className="hero-photo-img"
                onError={e => { e.target.src = '/agnelyellow.jpg' }}
              />
            </div>
          </div>

          {/* Architectural Metadata Badge */}
          <div className="hero-meta-block reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="hero-meta-badge mono">
              <span>Software Engineer</span>
              <span className="meta-sep">·</span>
              <span>Thrissur, India</span>
            </div>
          </div>

          {/* Intro Prose Column */}
          <div className="hero-prose-block reveal" style={{ transitionDelay: '0.16s' }}>
            <p className="hero-lead">
              I'm a software engineer working on backend systems, data pipelines, and infrastructure.
            </p>
            <p className="hero-body">
              I like figuring out how things work, then building my own version of them. Most days that means writing code: websites, apps, little tools, but really it's just me enjoying the process of turning an idea into something real.
            </p>
            <p className="hero-body">
              I like when things get into a messy state. Untangling that state is what keeps this interesting..
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
