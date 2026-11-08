import { useEffect, useState } from 'react'
import { socials } from '../data/Socials'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / total)))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
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
    </>
  )
}
