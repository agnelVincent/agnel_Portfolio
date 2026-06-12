import { useEffect, useRef } from 'react'
import { socials } from '../data/Socials'
import '../styles/Projects.css'

const projects = [
  {
    index: '01',
    name: 'MotoReach',
    tagline: 'Vehicle Service & Workshop Management Platform',
    description: 'A platform that connects vehicle owners, workshops, mechanics, and admins — each with their own dashboard. The idea was simple: when your vehicle needs service, you should be able to find a nearby workshop, see a mechanic get assigned, and watch the whole job progress in real time, instead of just waiting and hoping.',
    stack: ['Django REST Framework', 'React.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Stripe'],
    features: [
      'Four separate dashboards — user, workshop, mechanic, and admin',
      'Live status updates as a job moves from request to completion',
      'Find the nearest workshop based on your location',
      'Payments split automatically between the platform and the mechanic',
    ],
    github: socials.github,
    live: '#',
    accent: 'indigo',
  },
  {
    index: '02',
    name: 'EvoTime',
    tagline: 'E-Commerce Watch Ordering Platform',
    description: 'A straightforward online store for watches — browse the catalogue, add to cart or wishlist, check out, and track your order. The focus here was getting all the small details of a shopping experience right, from a clean product flow to a payment process that just works.',
    stack: ['Django', 'PostgreSQL', 'Tailwind CSS', 'Razorpay'],
    features: [
      'Browse, wishlist, and add items to cart',
      'Smooth checkout with order tracking',
      'Secure payments through Razorpay',
      'A clean, well-organized product catalogue',
    ],
    github: socials.github,
    live: '#',
    accent: 'cyan',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects__inner">
        <div className="reveal">
          <p className="projects__eyebrow mono">Selected Work</p>
          <h2 className="projects__heading">
            Two builds,<br />
            <span className="projects__heading-accent">end to end</span>
          </h2>
          <p className="projects__intro">
            A couple of things I've built from scratch — start to finish, including the
            parts that aren't very glamorous but make a project actually work.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <article
              className={`project project--${project.accent} reveal`}
              key={project.name}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="project__header">
                <span className="project__index mono">{project.index}</span>
                <div className="project__titles">
                  <h3 className="project__name">{project.name}</h3>
                  <p className="project__tagline">{project.tagline}</p>
                </div>
                <div className="project__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__link" aria-label="GitHub repository">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project__link project__link--live" aria-label="Live demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project__body">
                <p className="project__description">{project.description}</p>

                <div className="project__features">
                  {project.features.map(feature => (
                    <div className="project__feature" key={feature}>
                      <span className="project__feature-mark">▸</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="project__stack">
                {project.stack.map(tech => (
                  <span className="project__chip" key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project__bg-text">{project.name}</div>
            </article>
          ))}
        </div>

        <div className="projects__more reveal">
          <p>More experiments and contributions live on my GitHub.</p>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="projects__more-link">
            Explore GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}