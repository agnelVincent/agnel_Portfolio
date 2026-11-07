import './Hero.css'
import { socials } from '../data/Socials'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            <span className="mono">Tony · Thrissur, Kerala</span>
          </div>

          <h1 className="hero-title">
            Agnel Vincent
          </h1>

          <p className="hero-lead">
            Software engineer working remotely. Mostly focused on backend systems, 
            data pipelines, and infrastructure that needs to be built right.
          </p>

          <p className="hero-secondary">
            I enjoy when things get into a messed-up state. When a pipeline breaks, 
            data desynchronizes, or a system crashes and nobody knows why, chasing 
            down the root cause and untangling it is the part of engineering that 
            genuinely entertains me.
          </p>

          <div className="hero-quick-links mono">
            <a href={socials.github} target="_blank" rel="noreferrer" className="hero-link">
              GitHub ↗
            </a>
            <span className="link-sep">/</span>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hero-link">
              LinkedIn ↗
            </a>
            <span className="link-sep">/</span>
            <a href={`mailto:${socials.email}`} className="hero-link">
              Email ↗
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-card">
            <img 
              src="/leetcode_dp.jpg" 
              alt="Agnel Vincent" 
              className="photo-img"
              onError={(e) => { e.target.src = '/agnelyellow.jpg' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
