import './Footer.css'
import { socials } from '../data/Socials'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner footer-inner">
        <span className="footer-id mono">Tony · Thrissur</span>
        <div className="footer-links">
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={socials.chess} target="_blank" rel="noreferrer">Chess.com ↗</a>
          <a href={`mailto:${socials.email}`}>Email ↗</a>
        </div>
      </div>
    </footer>
  )
}
