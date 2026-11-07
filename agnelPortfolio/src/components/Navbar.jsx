import { useEffect, useState } from 'react'
import { socials } from '../data/Socials'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="inner nav-inner">
        <div className="nav-brand">
          <span className="nav-name mono">Tony</span>
        </div>

        <div className="nav-anchors mono">
          <a href="#story">Journey</a>
          <a href="#systems">Systems</a>
        </div>

        <nav className="nav-links">
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${socials.email}`}>Email ↗</a>
        </nav>
      </div>
    </header>
  )
}
