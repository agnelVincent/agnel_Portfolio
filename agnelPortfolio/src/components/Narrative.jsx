import { useEffect, useRef, useState } from 'react'
import './Narrative.css'
import { useReveal } from '../hooks/useReveal'

export default function Narrative() {
  const ref = useReveal()
  const proseRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const proseEl = proseRef.current
    if (!proseEl) return

    const paras = proseEl.querySelectorAll('p')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Array.from(paras).indexOf(entry.target)
            if (index !== -1) {
              setActiveIdx(index)
            }
          }
        })
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.2,
      }
    )

    paras.forEach(p => observer.observe(p))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="story" className="narrative" ref={ref}>
      <div className="inner">
        <div className="section-meta-head reveal">
          <div className="section-eyebrow mono">THE PATH</div>
          <span className="section-tag mono">ORIGIN</span>
        </div>

        <div className="narrative-grid">
          {/* Scrolling Prose Column with Dynamic Paragraph Dimming */}
          <div className="narrative-prose reveal" ref={proseRef}>
            <p className={`narrative-opener ${activeIdx === 0 ? 'is-active' : ''}`}>
              For a long time, I had no direction. I tried different things, failed at
              most of them, and never had a roadmap.
            </p>
            <p className={activeIdx === 1 ? 'is-active' : ''}>
              I grew up without a computer of my own, so while everyone around me used
              them effortlessly, I was always a step behind. What I hated most was being
              seen that way. I avoided computers, made excuses, and even claimed screens
              gave me headaches, just so no one would notice how little I knew.
            </p>
            <p className={activeIdx === 2 ? 'is-active' : ''}>
              After enough dead ends, I made a decision that made no practical sense: I
              walked straight toward the thing I feared most. I chose software
              engineering with no background and only a vague idea of what it involved.
            </p>
            <p className={activeIdx === 3 ? 'is-active' : ''}>
              It held my attention like nothing else had. I started from the absolute
              basics, broke things on purpose, and stayed with the confusion until it
              cleared. What I once avoided became the thing I choose every day. That’s
              the motive I carry now: do what you fear the most.
            </p>
          </div>

          {/* Pinned Aside: Secondary Architectural Photo + Quote Card */}
          <div className="narrative-aside reveal" style={{ transitionDelay: '0.12s' }}>
            <div className="narrative-photo-frame">
              <img
                src="/agnelyellow.jpg"
                alt="Agnel Vincent"
                className="narrative-photo-img"
                onError={e => { e.target.src = '/leetcode_dp.jpg' }}
              />
            </div>
            <div className="narrative-quote-card">
              <div className="quote-badge mono">APPROACH</div>
              <blockquote className="quote-text">
                "Why before how. If the reason isn't clear, the solution doesn't matter. That's where everything starts."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
