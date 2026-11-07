import './Chess.css'
import { socials } from '../data/Socials'
import { useReveal } from '../hooks/useReveal'

export default function Chess() {
  const ref = useReveal()

  return (
    <section className="chess" ref={ref}>
      <div className="inner">
        <div className="section-eyebrow mono reveal">Off the clock</div>

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
              Most evenings when I step away from the terminal, I play chess.
              Slow games, mostly. The calculation is a good way to unwind from
              debugging with more debugging.
            </p>
            <a
              href={socials.chess}
              target="_blank"
              rel="noreferrer"
              className="chess-link mono"
            >
              @agnelVincent on Chess.com ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
