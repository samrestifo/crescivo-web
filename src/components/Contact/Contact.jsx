import { useState } from 'react'
import styles from './Contact.module.css'

const FIELDS = [
  { id:'name',      label:'Your Name',          ph:'Sam Smith',                        type:'text' },
  { id:'company',   label:'Company',            ph:'Acme Scale-up',                    type:'text' },
  { id:'arr',       label:'Revenue Stage',      ph:'$2M – $20M ARR',                   type:'text' },
  { id:'challenge', label:'Primary Constraint', ph:'Founder still in every enterprise deal', type:'text' },
]

const DETAILS = ['hello@crescivo.partners', '/company/crescivo', 'Sydney, AU']

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', company:'', arr:'', challenge:'' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: wire to Resend API via VITE_RESEND_API_KEY
    // For now, simulate success
    setSent(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.panel}>
        <div className="eyebrow">Let's Talk</div>
        <h2 className={styles.title}>
          Ready to scale <em>beyond the founder?</em>
        </h2>
        <p className={styles.sub}>
          Tell us where growth still depends too heavily on the founder. If we're the right fit, we'll map the constraints and define the path toward repeatable enterprise growth.
        </p>
        <div className={styles.details}>
          {DETAILS.map(d => (
            <span key={d} className={styles.detail}>{d}</span>
          ))}
        </div>

        {sent ? (
          <div className={styles.success}>
            Sent — we'll be in touch shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            {FIELDS.map(({ id, label, ph, type }) => (
              <div key={id} className={styles.group}>
                <label className={styles.label} htmlFor={id}>{label}</label>
                <input
                  id={id}
                  type={type}
                  placeholder={ph}
                  className={styles.input}
                  value={form[id]}
                  onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                />
              </div>
            ))}
            <button type="submit" className={styles.submit}>
              Submit Enquiry →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
