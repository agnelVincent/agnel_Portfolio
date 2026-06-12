import { useEffect, useRef, useState } from 'react'
import SocialIcons from './SocialIcons'
import '../styles/Hero.css'

const roles = ['Full-Stack Developer', 'Problem Solver', 'Curious Builder', 'Lifelong Learner']

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
              Hey there, welcome
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
            I like figuring out how things work, then building my own version of them.
            Most days that means writing code - websites, apps, little tools - but really
            it's just me enjoying the process of turning an idea into something real.
            This is a small corner of the internet where I share that.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              See what I've made
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              Say hi
            </a>
          </div>

          <div className="hero__socials">
            <span className="hero__socials-label mono">Find me elsewhere</span>
            <SocialIcons />
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-ring">
            <div className="hero__photo-ring-inner">
              <div className="hero__photo-wrap">
                <img
                  src="/leetcode_dp.jpg"
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
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text mono">scroll</span>
      </div>
    </section>
  )
}