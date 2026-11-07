import { useEffect, useState } from 'react'
import './Navbar.css'
import { socials } from '../data/Socials'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="inner nav-inner">
        <a href="#" className="nav-name">Tony</a>
        <nav className="nav-links">
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={socials.chess} target="_blank" rel="noreferrer">Chess ↗</a>
          <a href={`mailto:${socials.email}`}>Email ↗</a>
        </nav>
      </div>
    </header>
  )
}
