import './Thinking.css'
import { useReveal } from '../hooks/useReveal'

export default function Thinking() {
  const ref = useReveal()

  return (
    <section className="thinking" ref={ref}>
      <div className="inner">
        <div className="section-eyebrow mono reveal">On debugging</div>
        <div className="thinking-body">
          <p className="reveal">
            The part of this work that most people find frustrating is exactly what I find
            interesting. When a migration corrupts silently halfway through, when two transactions
            lock each other and neither side knows it, when a system behaves perfectly in staging
            and fails under real load for no apparent reason.
          </p>
          <p className="reveal" style={{ transitionDelay: '0.1s' }}>
            Sitting with the problem, being patient, stripping out assumptions layer by layer
            until what is actually broken becomes visible. That process does not feel like a
            cost to me. It is just what the job is.
          </p>
        </div>
      </div>
    </section>
  )
}
