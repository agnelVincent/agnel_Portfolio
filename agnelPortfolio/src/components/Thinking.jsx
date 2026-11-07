import './Thinking.css'

export default function Thinking() {
  return (
    <section className="thinking">
      <div className="section-header">
        <span className="section-label mono">03 / On Debugging</span>
      </div>

      <div className="thinking-card">
        <p className="thinking-lead">
          The part of this work that most people find frustrating is exactly what I find 
          interesting. When a migration corrupts silently halfway through, when two transactions 
          lock each other and neither side knows it, or when an edge case brings down a service 
          under load.
        </p>
        <p className="thinking-sub">
          Sitting with the problem, being patient, and stripping out assumptions layer by layer 
          until what is actually broken becomes visible. That process does not feel like a chore 
          to me. It is just what engineering is.
        </p>
      </div>
    </section>
  )
}
