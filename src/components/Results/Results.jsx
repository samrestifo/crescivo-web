import styles from './Results.module.css'

const METRICS = [
  { n:'12',  l:'Strategic partners activated' },
  { n:'22%', l:'Reduction in time to close' },
  { n:'3×',  l:'Ecosystem leverage created' },
]

export default function Results() {
  return (
    <section id="results">
      <div className={`${styles.band} reveal`}>
        <div className={styles.story}>
          <div className="eyebrow">Proof Pattern</div>
          <h2 className={styles.headline}>From founder-led pipeline to <em>repeatable enterprise growth.</em></h2>
          <p className={styles.desc}>A founder-led B2B technology company had product-market fit, strong enterprise demand and a pipeline still dependent on founder involvement. Crescivo rebuilt the commercial architecture, activated partner leverage and installed the operating cadence required to scale without the founder in every deal.</p>
          <div className={styles.ref}>Illustrative composite based on real engagement patterns · References available on request</div>
        </div>
        <div className={styles.proof}>
          <div className={styles.primary}>
            <div className={styles.primaryN}>$0 → $4M ARR</div>
            <div className={styles.primaryL}>in 24 months</div>
          </div>
          <div className={styles.metrics}>
            {METRICS.map(({ n, l }) => (
              <div key={l} className={styles.metric}>
                <div className={styles.metricN}>{n}</div>
                <div className={styles.metricL}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
