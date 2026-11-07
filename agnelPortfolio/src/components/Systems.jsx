import './Systems.css'

const systems = [
  {
    num: '01',
    title: 'Data Migration & Oracle Pipelines',
    tags: ['Oracle DB', 'Custom ETL', 'Schema Reconciliation'],
    desc: 'Moving mission-critical data out of aging legacy structures into modern databases. Writing migration tools, verifying row-level checksums, and handling transactional rollbacks across complex Oracle schemas with zero data loss.',
  },
  {
    num: '02',
    title: 'Database Architecture & Query Optimization',
    tags: ['PostgreSQL', 'Oracle', 'Index Tuning', 'ACID Locks'],
    desc: 'Designing relational schemas that stay responsive under high concurrency. Diagnosing slow queries, eliminating connection pool exhaustion, and resolving row-level lock contention.',
  },
  {
    num: '03',
    title: 'REST APIs & Gateway Services',
    tags: ['REST APIs', 'Gateways', 'WebSockets', 'Auth'],
    desc: 'Structuring full-stack applications, centralizing request routing and authentication at the gateway layer, and maintaining real-time bidirectional state sync with WebSockets.',
  },
  {
    num: '04',
    title: 'DevOps & Containerized Infrastructure',
    tags: ['Docker', 'Nginx Proxy', 'Linux'],
    desc: 'Containerizing multi-service backends with Docker, configuring Nginx for reverse proxying and SSL termination, and building predictable deployment workflows on Linux.',
  },
]

export default function Systems() {
  return (
    <section className="systems">
      <div className="section-header">
        <span className="section-label mono">02 / Work &amp; Systems</span>
      </div>

      <div className="systems-grid">
        {systems.map((item) => (
          <div key={item.num} className="system-card">
            <div className="card-top">
              <span className="card-num mono">{item.num}</span>
              <div className="card-tags mono">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>

            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
