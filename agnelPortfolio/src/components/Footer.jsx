import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo mono">AGNEL VINCENT</span>
        <span className="footer__text">
          Designed &amp; built by Agnel · {new Date().getFullYear()}
        </span>
        <a href="#" className="footer__top">
          Back to top
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}