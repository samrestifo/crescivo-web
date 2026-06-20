import styles from './Results.module.css'

export default function Results() {
  return (
    <section id="results">
      <div className={`${styles.band} reveal`}>
        <div className={styles.main}>
          <div>
            <div className={styles.badge}>◈ B2B Scale-up · Enterprise Growth Motion</div>
            <div className={styles.result}><em>$0 to $4M ARR</em><br />in 24 months.</div>
            <p className={styles.desc}>A founder-led B2B technology company had proven product-market fit, strong enterprise demand and a founder-dependent pipeline. We rebuilt the commercial foundation, activated the partner ecosystem and installed the operating cadence required to scale without the founders in every deal.</p>
          </div>
          <div className={styles.ref}>Reference available on request</div>
        </div>
        {[
          { n:'$4M',   l:'ARR · 24 months',    d:'From zero commercial revenue at engagement start.' },
          { n:'12',    l:'Strategic Partners',  d:'Activated across channel, alliance and enterprise routes.' },
          { n:'−22%',  l:'Time to Close',       d:'Cycle compression through stage-gate discipline and executive alignment.' },
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
