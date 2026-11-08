import './Systems.css'
import { useReveal } from '../hooks/useReveal'

const items = [
  {
    num: '01',
    title: 'Data Migration',
    body: 'Executing IFS Cloud data migrations between environments and handling Oracle DB transfers. Working directly with internal system tables and core entity tables, authoring custom PL/SQL scripts, procedures, and data verification routines to ensure complete integrity.',
    tags: ['IFS Cloud', 'Oracle DB', 'PL/SQL', 'Data Migration', 'Schema Mapping'],
  },
  {
    num: '02',
    title: 'REST APIs & Full-Stack Systems',
    body: 'Primarily a Python developer working with FastAPI and Django on the backend, alongside React and Next.js on the client, backed by PostgreSQL and MongoDB. Built full-stack web applications, standalone Windows applications, and designed scalable REST API architectures.',
    tags: ['Python', 'FastAPI', 'Django', 'React', 'Next.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    num: '03',
    title: 'Data Structures & Algorithms',
    body: 'Approaching problems with language-independent core computational principles. Choosing the right data structures, analyzing time and space complexity, and writing clean, optimal logic to solve algorithmic problems efficiently.',
    tags: ['Data Structures', 'Algorithms', 'Problem Solving', 'Optimization'],
  },
  {
    num: '04',
    title: 'DevOps and IFS Build Flows',
    body: 'Configuring and managing automated build flow pipelines in Azure DevOps specifically for IFS Cloud environments, ensuring predictable compilation, packaging, and smooth environment deliveries.',
    tags: ['IFS Cloud', 'Azure DevOps', 'CI/CD Pipelines', 'Build Flows'],
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

        {/* Full-Width Editorial Index replacing card grid */}
        <div className="systems-index">
          {items.map((item, i) => (
            <div
              key={item.num}
              className="sys-row reveal"
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <div className="sys-row-indicator" aria-hidden="true" />
              <div className="sys-num-col">
                <span className="sys-num mono">{item.num}</span>
              </div>

              <div className="sys-content-col">
                <div className="sys-header">
                  <h3 className="sys-title display-font">{item.title}</h3>
                </div>

                <p className="sys-desc">{item.body}</p>

                <div className="sys-footer">
                  <div className="sys-tags mono">
                    {item.tags.map((tag) => (
                      <span key={tag} className="sys-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
