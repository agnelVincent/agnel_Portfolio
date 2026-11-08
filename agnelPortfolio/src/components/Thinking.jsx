import './Thinking.css'
import { useReveal } from '../hooks/useReveal'

export default function Thinking() {
  const ref = useReveal()

  return (
    <section className="thinking" ref={ref}>
      <div className="inner">
        <div className="section-meta-head reveal">
          <div className="section-eyebrow mono">ON DEBUGGING</div>
          <span className="section-tag mono">PERSPECTIVE</span>
        </div>

        <div className="thinking-card reveal" style={{ transitionDelay: '0.08s' }}>
          <p className="thinking-primary">
            The part of this work that most people find frustrating is exactly what I find
            interesting. When a migration corrupts silently halfway through, when two transactions
            lock each other and neither side knows it, or when a system behaves in unexpected ways under real load.
          </p>
          <p className="thinking-secondary">
            Sitting with the problem, being patient, and stripping out assumptions layer by layer
            until what is actually broken becomes clear. That process is the core of what the job is.
          </p>
        </div>
      </div>
    </section>
  )
}
