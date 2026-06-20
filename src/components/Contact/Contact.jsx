import { useState } from 'react'
import styles from './Contact.module.css'

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
    <section id="contact">
      <div className={styles.split}>
        <div className={styles.left}>
          <div className="eyebrow">Let's Talk</div>
          <div className={styles.title}>
            Ready to grow<br /><em>beyond the founder?</em>
          </div>
          <p className={styles.sub}>
            Tell us where growth has stalled. If we're the right fit, we'll design a Growth Strategy Session that maps the path from where you are to where you're going.
          </p>
          <div className={styles.detail}><strong>Email</strong> hello@crescivo.partners</div>
          <div className={styles.detail}><strong>LinkedIn</strong> /company/crescivo</div>
          <div className={styles.detail}><strong>Based</strong> Sydney, AU — operating across APAC</div>
        </div>
        <div className={styles.right}>
          <div className={styles.formTitle}>Book a Growth<br />Strategy Session</div>
          {sent ? (
            <div className={styles.success}>
              Sent — we'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {[
                { id:'name',      label:'Your Name',         ph:'Sam Smith',                type:'text'  },
                { id:'company',   label:'Company',           ph:'Acme SaaS Co',             type:'text'  },
                { id:'arr',       label:'ARR Range',         ph:'$1M – $5M',                type:'text'  },
                { id:'challenge', label:'Primary Challenge', ph:'Post-Series A GTM build',  type:'text'  },
              ].map(({ id, label, ph, type }) => (
                <div key={id} className={styles.group}>
                  <label className={styles.label} htmlFor={id}>{label}</label>
                  <input
                    id={id}
                    type={type}
                    placeholder={ph}
                    className={styles.input}
                    value={form[id]}
                    onChange={e => setForm(f => ({...f, [id]: e.target.value}))}
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
