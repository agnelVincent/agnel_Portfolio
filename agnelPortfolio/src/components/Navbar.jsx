import { useEffect, useState } from 'react'
import '../components/Navbar.css'
import { socials } from '../data/Socials'

export default function NavbarScrollAware() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="inner nav-inner">
        <span className="nav-name">Tony</span>
        <nav className="nav-links">
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${socials.email}`}>Email</a>
        </nav>
      </div>
    </header>
  )
}
