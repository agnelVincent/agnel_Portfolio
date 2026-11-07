import './Narrative.css'
import { useReveal } from '../hooks/useReveal'

export default function Narrative() {
  const ref = useReveal()

  return (
    <section className="narrative" ref={ref}>
      <div className="inner narrative-inner">
        <div className="section-eyebrow mono reveal">The path</div>

        <div className="narrative-grid">
          <div className="narrative-prose reveal">
            <p>
              For a long time I had no direction at all. I tried different things,
              failed at most of them, and spent three years studying plant cells at university
              with no real conviction. I didn't know what I wanted to do or where I was going.
            </p>
            <p>
              Growing up I never owned a computer and was genuinely afraid of them. Convinced that
              if I pressed the wrong key I'd break something irreparably. When people around me
              used computers easily, I felt exposed by not knowing anything. I'd invent headaches
              to avoid being near one.
            </p>
            <p>
              After cycling through enough failures, I made a decision that made no logical sense:
              I went straight toward the thing that scared me the most. I picked software engineering
              without knowing what that actually meant, without any background, without a plan.
            </p>
            <p>
              Once I started, it held my attention in a way nothing else had. I stayed with it,
              worked through the basics, and kept going. The machine I used to be terrified of
              became the thing I spend every day inside.
            </p>
          </div>

          <div className="narrative-aside reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="narrative-img-frame">
              <img
                src="/agnelyellow.jpg"
                alt=""
                className="narrative-img"
                onError={e => { e.target.src = '/leetcode_dp.jpg' }}
              />
            </div>
            <blockquote className="narrative-quote">
              I went straight toward the thing that scared me the most.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
