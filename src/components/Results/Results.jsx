import styles from './Results.module.css'

const CLIENTS = [
  { name: 'TrueState',      file: 'truestate.svg',      line: 'Agentic analytics on Google Cloud' },
  { name: 'Zaptz',          file: 'zaptz.svg',          line: 'Legacy application modernisation' },
  { name: 'Gryphn',         file: 'gryphn.svg',         line: 'Cybersecurity partnerships, APAC' },
  { name: 'GuardWare',      file: 'guardware.svg',      line: 'Data security' },
  { name: 'Lorgan',         file: 'lorgan.svg',         line: 'AI and IoT implementation' },
  { name: '8Seats',         file: '8seats.svg',         line: 'Messaging for frontline teams' },
  { name: '1KE',            file: '1ke.svg',            line: 'Presales autopilot for the channel' },
  { name: 'Support Fusion', file: 'support-fusion.png', line: 'Connected service delivery across providers' },
]

export default function Results() {
  return (
    <section id="results" className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.head} reveal`}>
          <div className="eyebrow">Who we work with</div>
          <h2 className="sec-h2">Founder led technology companies<br /><em>ready for their next stage.</em></h2>
          <p className={styles.desc}>
            We work two ways. One to one, embedded with a single leadership team. One to many, in forums such as the executive session we hosted with AWS and Stripe in August 2026, where 15 partner CxOs worked through co-selling with partner incentives.
          </p>
        </div>
        <div className={`${styles.grid} reveal reveal-d1`}>
          {CLIENTS.map(({ name, file, line }) => (
            <div key={name} className={styles.cell}>
              <div className={styles.logoBox}>
                <img src={`/images/clients/${file}`} alt={name} loading="lazy" className={styles.logo} />
              </div>
              <div className={styles.line}>{line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
