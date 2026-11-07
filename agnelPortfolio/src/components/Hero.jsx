import './Hero.css'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="hero" ref={ref}>
      <div className="inner">

        {/* Typographic anchor */}
        <div className="hero-name-block reveal">
          <span className="hero-name-first">Agnel</span>
          <span className="hero-name-last">Vincent</span>
        </div>

        {/* Split grid: portrait and conversational opener */}
        <div className="hero-split">
          <div className="hero-img-col reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="hero-img-frame">
              <img
                src="/leetcode_dp.jpg"
                alt="Agnel Vincent"
                className="hero-img"
                onError={e => { e.target.src = '/agnelyellow.jpg' }}
              />
              <div className="hero-img-shine" />
            </div>
            <span className="hero-img-label mono">Thrissur, India</span>
          </div>

          <div className="hero-text-col reveal" style={{ transitionDelay: '0.16s' }}>
            <p className="hero-intro">
              I'm Agnel. Most days you'll find me trying to figure out why something broke.
            </p>
            <p className="hero-secondary">
              When things get into a tangled, messed-up state and fail in unexpected ways, 
              that's the problem I enjoy the most. Sitting with the pieces, stripping away 
              assumptions, and putting things back together properly.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
