import { useState } from 'react'
import styles from './Contact.module.css'

const FIELDS = [
  { id:'name',      label:'Your Name',          ph:'Sam Smith',                              type:'text' },
  { id:'company',   label:'Company',            ph:'Acme Scaleup',                          type:'text' },
  { id:'arr',       label:'Revenue Stage',      ph:'$2M to $20M ARR',                         type:'text' },
  { id:'challenge', label:'Primary Constraint', ph:'Founder still in every enterprise deal', type:'text' },
]

const TRUST = [
  'Starts with a ninety minute Whiteboard Session',
  'No obligation',
  'Built for B2B scaleups with proven product market fit',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', company:'', arr:'', challenge:'' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Until the Resend integration is live, hand the enquiry to the visitor's
    // own mail app so nothing is lost. TODO: wire to Resend via VITE_RESEND_API_KEY.
    const subject = `Whiteboard Session enquiry: ${form.company || form.name || 'new enquiry'}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Revenue stage: ${form.arr}`,
      `Primary constraint: ${form.challenge}`,
    ].join('\n')
    window.location.href = `mailto:sam@crescivo.partners?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
              Thanks. Your email app should open with your enquiry ready to send. If it doesn't, write to us at sam@crescivo.partners.
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
