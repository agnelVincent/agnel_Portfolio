import './Footer.css'
import { socials } from '../data/Socials'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-tag mono">Tony · Thrissur</span>
        <div className="footer-links mono">
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={socials.chess} target="_blank" rel="noreferrer">Chess ↗</a>
          <a href={`mailto:${socials.email}`}>Email ↗</a>
        </div>
      </div>
    </footer>
  )
}
