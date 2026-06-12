import { useEffect, useRef } from 'react'
import '../styles/Skills.css'

const skillGroups = [
  {
    label: '01',
    title: 'Languages',
    items: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    label: '02',
    title: 'Backend',
    items: ['Django', 'Django REST Framework', 'Django Channels', 'WebSockets', 'RESTful APIs'],
  },
  {
    label: '03',
    title: 'Frontend',
    items: ['React.js', 'Redux Toolkit', 'Redux Thunk', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: '04',
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: '05',
    title: 'DevOps & Tools',
    items: ['Docker', 'AWS EC2', 'Nginx', 'Git', 'Postman', 'Figma'],
  },
  {
    label: '06',
    title: 'Integrations',
    items: ['JWT', 'Google OAuth', 'OTP Auth', 'Stripe', 'Razorpay', 'Email Services'],
  },
]

const marqueeItems = [
  'Python', 'Django REST Framework', 'React.js', 'PostgreSQL', 'Docker', 'AWS EC2',
  'WebSockets', 'Redis', 'Stripe', 'Tailwind CSS', 'Nginx', 'MongoDB',
]

export default function Skills() {
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
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__marquee">
        <div className="skills__marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="skills__marquee-item">
              {item}
              <span className="skills__marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="skills__inner">
        <div className="reveal">
          <p className="skills__eyebrow mono">Toolbox</p>
          <h2 className="skills__heading">
            The stack behind<br />every build
          </h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div className="skills__group reveal" key={group.title} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="skills__group-header">
                <span className="skills__group-label mono">{group.label}</span>
                <h3 className="skills__group-title">{group.title}</h3>
              </div>
              <div className="skills__tags">
                {group.items.map(item => (
                  <span className="skills__tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}