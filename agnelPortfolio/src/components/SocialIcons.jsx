import { socials } from '../data/Socials'
import '../styles/SocialIcons.css'

const icons = {
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.555V9h3.564v11.452z"/>
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
    </svg>
  ),
  chess: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-1.1 0-2 .9-2 2 0 .74.4 1.39 1 1.73V7H9.5C8.67 7 8 7.67 8 8.5c0 .6.35 1.12.85 1.37L7 14h10l-1.85-4.13c.5-.25.85-.77.85-1.37 0-.83-.67-1.5-1.5-1.5H13V5.73c.6-.34 1-.99 1-1.73 0-1.1-.9-2-2-2zM6 16l-1 4h14l-1-4H6zm-1.5 5a1 1 0 100 2h15a1 1 0 100-2h-15z"/>
    </svg>
  ),
}

const labels = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  chess: 'Chess.com',
}

export default function SocialIcons({ items = ['github', 'linkedin', 'instagram', 'chess'], variant = 'default' }) {
  return (
    <div className={`social-icons social-icons--${variant}`}>
      {items.map(key => (
        <a
          key={key}
          href={socials[key]}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons__link"
          aria-label={labels[key]}
          title={labels[key]}
        >
          {icons[key]}
          {variant === 'labeled' && <span>{labels[key]}</span>}
        </a>
      ))}
    </div>
  )
}