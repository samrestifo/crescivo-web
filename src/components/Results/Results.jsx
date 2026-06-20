import styles from './Results.module.css'

export default function Results() {
  return (
    <section id="results">
      <div className={`${styles.band} reveal`}>
        <div className={styles.main}>
          <div>
            <div className={styles.badge}>◈ Cybersecurity SaaS · AU Market</div>
            <div className={styles.result}><em>$0 to $4M ARR</em><br />in 24 months.</div>
            <p className={styles.desc}>An enterprise cybersecurity platform post-Series A — strong product, founder-dependent pipeline, no structured channel. We rebuilt the commercial foundation, activated the MSSP tier, and installed the sales motion that scaled without the founders in every deal.</p>
          </div>
          <div className={styles.ref}>Reference available on request</div>
        </div>
        {[
          { n:'$4M',   l:'ARR · 24 months',    d:'From zero commercial revenue at engagement start.' },
          { n:'12',    l:'Channel Partners',    d:'Activated from 4 — MSSP and reseller tier.' },
          { n:'−22%',  l:'Time to Close',       d:'Cycle compression through stage gate discipline.' },
        ].map(({ n, l, d }) => (
          <div key={l} className={styles.stat}>
            <div className={styles.statN}>{n}</div>
            <div className={styles.statL}>{l}</div>
            <div className={styles.statD}>{d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
