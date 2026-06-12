import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const roles = ['Full-Stack Developer', 'Django Architect', 'React Engineer', 'AWS Deployer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex]
    let timer
    if (typing) {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timer = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timer)
  }, [displayed, typing, roleIndex])

  // Animated grid canvas (signature element)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width, height, points = [], mouse = { x: -9999, y: -9999 }

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initPoints()
    }

    function initPoints() {
      points = []
      const cols = Math.floor(width / 60)
      const rows = Math.floor(height / 60)
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          points.push({
            x: (i / cols) * width,
            y: (j / rows) * height,
            ox: (i / cols) * width,
            oy: (j / rows) * height,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    function animate(t) {
      ctx.clearRect(0, 0, width, height)
      const cols = Math.floor(width / 60) + 1

      points.forEach((p, idx) => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const force = Math.max(0, 1 - dist / 180) * 12

        p.vx += (p.ox - p.x) * 0.04 - dx * force * 0.004 + Math.sin(t * 0.001 + idx * 0.3) * 0.15
        p.vy += (p.oy - p.y) * 0.04 - dy * force * 0.004 + Math.cos(t * 0.0013 + idx * 0.3) * 0.15
        p.vx *= 0.88
        p.vy *= 0.88
        p.x += p.vx
        p.y += p.vy

        // Draw connections
        const row = Math.floor(idx / cols)
        const col = idx % cols

        if (col < cols - 1) {
          const neighbor = points[idx + 1]
          if (neighbor) drawLine(p, neighbor)
        }
        if (row < Math.floor(height / 60)) {
          const neighbor = points[idx + cols]
          if (neighbor) drawLine(p, neighbor)
        }
      })

      animRef.current = requestAnimationFrame(animate)
    }

    function drawLine(a, b) {
      const dx = a.x - mouse.x
      const dy = a.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const proximity = Math.max(0, 1 - dist / 250)
      const alpha = 0.04 + proximity * 0.25

      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)

      if (proximity > 0.1) {
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
        grad.addColorStop(0, `rgba(108,99,255,${alpha})`)
        grad.addColorStop(1, `rgba(0,245,212,${alpha * 0.5})`)
        ctx.strokeStyle = grad
      } else {
        ctx.strokeStyle = `rgba(108,99,255,${alpha})`
      }
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouse = { x: -9999, y: -9999 }
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            <span className="mono" style={{ fontSize: '13px', color: 'var(--cyan)', letterSpacing: '0.12em' }}>
              Available for freelance
            </span>
          </div>

          <h1 className="hero__name">
            <span className="hero__name-line hero__name-line--1">Agnel</span>
            <span className="hero__name-line hero__name-line--2">Vincent</span>
          </h1>

          <div className="hero__role-wrap">
            <span className="hero__role">
              {displayed}
              <span className="hero__cursor" />
            </span>
          </div>

          <p className="hero__desc">
            I build production-grade full-stack platforms — real-time WebSocket systems,
            containerized microservices, and polished React interfaces. From API design to
            AWS deployment, I own the full stack.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="https://github.com/agnelvincent"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--ghost"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">2</span>
              <span className="hero__stat-label">Live Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">300+</span>
              <span className="hero__stat-label">LeetCode Solved</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">4</span>
              <span className="hero__stat-label">Tech Stacks</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-ring">
            <div className="hero__photo-ring-inner">
              <div className="hero__photo-wrap">
                <img
                  src="/profile-square.jpg"
                  alt="Agnel Vincent"
                  className="hero__photo"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hero__photo-fallback" style={{ display: 'none' }}>
                  <span>AV</span>
                </div>
              </div>
            </div>
            <div className="hero__ring-1" />
            <div className="hero__ring-2" />
          </div>

          <div className="hero__badge hero__badge--tl">
            <span className="mono" style={{ color: 'var(--cyan)', fontSize: '11px' }}>$ docker run</span>
            <span style={{ color: 'var(--white-60)', fontSize: '11px' }}>production</span>
          </div>
          <div className="hero__badge hero__badge--br">
            <span style={{ color: 'var(--indigo)', fontSize: '18px' }}>⚡</span>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>Real-time</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text mono">scroll</span>
      </div>
    </section>
  )
}