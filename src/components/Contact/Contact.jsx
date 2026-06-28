import { useState } from 'react'
import styles from './Contact.module.css'

const FIELDS = [
  { id:'name',      label:'Your Name',          ph:'Sam Smith',                              type:'text' },
  { id:'company',   label:'Company',            ph:'Acme Scale-up',                          type:'text' },
  { id:'arr',       label:'Revenue Stage',      ph:'$2M – $20M ARR',                         type:'text' },
  { id:'challenge', label:'Primary Constraint', ph:'Founder still in every enterprise deal', type:'text' },
]

const TRUST = [
  '30-minute executive discussion',
  'No obligation',
  'Built for B2B scale-ups with proven product-market fit',
]

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
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className="eyebrow">Let's Talk</div>
          <h2 className={styles.title}>
            Ready to scale <em>beyond the founder?</em>
          </h2>
          <p className={styles.sub}>
            Tell us where growth still depends too heavily on the founder. If there is a fit, we'll map the commercial constraints and define the path toward founder autonomy and repeatable enterprise growth.
          </p>
          <ul className={styles.trustList}>
            {TRUST.map(t => (
              <li key={t} className={styles.trustItem}>{t}</li>
            ))}
          </ul>
        </div>

        <div className={styles.formPanel}>
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
      </div>
    </section>
  )
}
