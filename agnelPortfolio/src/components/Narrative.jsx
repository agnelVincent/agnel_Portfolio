import './Narrative.css'

export default function Narrative() {
  return (
    <section className="narrative">
      <div className="section-header">
        <span className="section-label mono">01 / The Journey</span>
      </div>

      <div className="narrative-grid">
        <div className="narrative-prose">
          <p className="prose-highlight">
            In the beginning, I was completely directionless. I didn't know what to do, 
            what to achieve, or where I was headed. I tried different fields, spent three years 
            studying plant cells, and was a complete failure at it.
          </p>
          <p>
            Growing up, the single thing I was most scared of was computers. I didn't own one, 
            and I had this genuine fear that if I touched one, I'd make a mistake and the whole machine 
            would shut down. Everyone around me used computers easily, and I felt so insecure about 
            knowing nothing that I used to lie and say screens gave me a headache just to avoid using them.
          </p>
          <p>
            After failing at multiple things, I decided to do something irrational: I picked the exact field 
            I was most terrified of. I chose software engineering blindly, without knowing what I was getting into.
          </p>
          <p>
            Once I started exploring it, it stuck in my head. I began enjoying it from the absolute basics, 
            spent the hours, and gradually upscaled myself. Now, the very machine that intimidated me as a kid 
            is where I spend my days.
          </p>
        </div>

        <div className="narrative-aside">
          <div className="narrative-photo-card">
            <img
              src="/agnelyellow.jpg"
              alt="Agnel Vincent"
              className="narrative-photo"
              onError={e => { e.target.src = '/leetcode_dp.jpg' }}
            />
          </div>
          <p className="narrative-quote">
            "I went straight toward the thing that scared me the most."
          </p>
        </div>
      </div>
    </section>
  )
}
