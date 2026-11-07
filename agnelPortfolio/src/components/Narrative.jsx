import './Narrative.css'
import { useReveal } from '../hooks/useReveal'

export default function Narrative() {
  const ref = useReveal()

  return (
    <section id="story" className="narrative" ref={ref}>
      <div className="inner">
        <div className="section-meta-head reveal">
          <div className="section-eyebrow mono">THE PATH</div>
          <span className="section-tag mono">ORIGIN</span>
        </div>

        <div className="narrative-grid">
          <div className="narrative-prose reveal">
            <p className="narrative-opener">
              For a long time I had no direction at all. I tried different things,
              failed at most of them, and spent three years studying plant cells at university
              with zero conviction. I did not know what I wanted to do or where I was going.
            </p>
            <p>
              Growing up in Thrissur, I never owned a computer and was genuinely terrified of them. 
              I had this deep insecurity that if I touched one, I would press the wrong key, break something, 
              and shut the whole machine down. When people around me used computers effortlessly, 
              I felt so exposed by not knowing anything that I would lie and make excuses, pretending 
              that screens gave me a headache just to avoid using them.
            </p>
            <p>
              After cycling through enough dead ends, I made an irrational decision: I went straight 
              toward the thing that scared me the most. I picked software engineering blindly, 
              without any background, without knowing what it actually meant.
            </p>
            <p>
              Once I started exploring it, it held my attention in a way nothing else had. I started 
              from the absolute basics, broke things on purpose, worked through the confusion, and kept going. 
              The machine I used to be terrified of became the craft I enjoy every single day.
            </p>
          </div>

          <div className="narrative-aside reveal" style={{ transitionDelay: '0.12s' }}>
            <div className="narrative-photo-frame">
              <img
                src="/agnelyellow.jpg"
                alt="Agnel Vincent in Thrissur"
                className="narrative-photo-img"
                onError={e => { e.target.src = '/leetcode_dp.jpg' }}
              />
            </div>
            <div className="narrative-quote-card">
              <blockquote className="quote-text">
                "After cycling through enough failures, I made a decision that made no logical sense: 
                I went straight toward the single thing that scared me the most."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
