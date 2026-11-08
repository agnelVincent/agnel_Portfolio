import './Chess.css'
import { socials } from '../data/Socials'
import { useReveal } from '../hooks/useReveal'

export default function Chess() {
  const ref = useReveal()

  return (
    <section id="chess" className="chess" ref={ref}>
      <div className="inner">
        <div className="section-meta-head reveal">
          <div className="section-eyebrow mono">OFF THE CLOCK</div>
          <span className="section-tag mono">CHESS.COM</span>
        </div>

        <div className="chess-card reveal" style={{ transitionDelay: '0.07s' }}>
          <div className="chess-board-wrap" aria-hidden="true">
            {Array.from({ length: 64 }).map((_, i) => {
              const r = Math.floor(i / 8), c = i % 8
              return (
                <div
                  key={i}
                  className={`cb-sq ${(r + c) % 2 === 0 ? 'cb-light' : 'cb-dark'}`}
                />
              )
            })}
          </div>

          <div className="chess-text">
            <h3 className="chess-title">Chess</h3>
            <p className="chess-desc">
              When I step away from terminals and code, I play chess.
              Mostly rapid games. Calculating moves and finding tactical order 
              is a good way to unwind.
            </p>
            <a
              href={socials.chess}
              target="_blank"
              rel="noreferrer"
              className="chess-link mono"
            >
              <span>@agnelVincent on Chess.com</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
