import './Chess.css'
import { socials } from '../data/Socials'

export default function Chess() {
  return (
    <section className="chess">
      <div className="section-header">
        <span className="section-label mono">04 / Off The Clock</span>
      </div>

      <div className="chess-card">
        <div className="chess-board-wrap" aria-hidden="true">
          {Array.from({ length: 64 }).map((_, i) => {
            const r = Math.floor(i / 8)
            const c = i % 8
            const isDark = (r + c) % 2 === 1
            return (
              <div
                key={i}
                className={`cb-sq ${isDark ? 'cb-dark' : 'cb-light'}`}
              />
            )
          })}
        </div>

        <div className="chess-text">
          <h3 className="chess-title">Chess</h3>
          <p className="chess-desc">
            Most evenings when I step away from code and databases, I play chess. 
            Slow games mostly, and the occasional blitz. It is a good way to unwind 
            while keeping the brain engaged.
          </p>
          <a
            href={socials.chess}
            target="_blank"
            rel="noreferrer"
            className="chess-link mono"
          >
            Play @agnelVincent on Chess.com ↗
          </a>
        </div>
      </div>
    </section>
  )
}
