import './Systems.css'
import { useReveal } from '../hooks/useReveal'

const items = [
  {
    num: '01',
    title: 'Data Migration & Oracle Pipelines',
    body: 'Moving mission-critical data out of aging legacy structures without breaking state mid-transfer. Custom ETL tools, transactional rollback checkpoints, schema reconciliation, and row-level verification across Oracle databases.',
    tags: ['Oracle DB', 'ETL Verification', 'Schema Mapping', 'Zero Data Loss'],
  },
  {
    num: '02',
    title: 'Database Architecture & Query Optimization',
    body: 'Relational schemas in Oracle and PostgreSQL designed to hold up under real load. Diagnosing lock contention, eliminating connection pool starvation, and cutting query latency down through indexing and transaction isolation tuning.',
    tags: ['PostgreSQL', 'Oracle', 'Index Tuning', 'ACID Concurrency'],
  },
  {
    num: '03',
    title: 'REST APIs & Full-Stack Applications',
    body: 'Building complete applications from the data layer up: clean API design, centralized gateway routing, authentication, and bidirectional WebSocket pipes for real-time state synchronization.',
    tags: ['RESTful APIs', 'Gateway Routing', 'WebSockets', 'Full-Stack'],
  },
  {
    num: '04',
    title: 'DevOps & Containerized Infrastructure',
    body: 'Getting the runtime environment right so deployments are predictable. Multi-stage Docker containers, hardened Nginx reverse proxies with SSL termination, and automated deployment workflows on Linux.',
    tags: ['Docker', 'Nginx Reverse Proxy', 'Linux', 'CI/CD Automation'],
  },
]

export default function Systems() {
  const ref = useReveal()

  return (
    <section id="systems" className="systems" ref={ref}>
      <div className="inner">
        <div className="section-meta-head reveal">
          <div className="section-eyebrow mono">SYSTEMS &amp; WORK</div>
          <span className="section-tag mono">CORE DOMAINS</span>
        </div>

        <div className="systems-grid">
          {items.map((item, i) => (
            <div
              key={item.num}
              className="sys-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="sys-header">
                <span className="sys-num mono">{item.num}</span>
                <h3 className="sys-title">{item.title}</h3>
              </div>

              <p className="sys-desc">{item.body}</p>

              <div className="sys-tags mono">
                {item.tags.map((tag) => (
                  <span key={tag} className="sys-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
