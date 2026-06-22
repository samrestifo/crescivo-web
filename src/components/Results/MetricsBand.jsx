import styles from './MetricsBand.module.css'
const METRICS = [
  { n:'$4M',  l:'ARR built · 24 months',           c:'var(--champ-l)' },
  { n:'+38%', l:'Pipeline velocity increase',       c:'var(--teal-l)'  },
  { n:'3×',   l:'Ecosystem leverage created',       c:'var(--champ-l)' },
]
export default function MetricsBand() {
  return (
    <div className={styles.wrap}>
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&fit=crop" alt="Mountain ridgeline at dawn" loading="lazy" width={1600} height={320}/>
      <div className={styles.overlay}/>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {METRICS.map(({n,l,c}) => (
            <div key={l} className={styles.metric}>
              <div className={styles.metricN} style={{color:c}}>{n}</div>
              <div className={styles.metricL}>{l}</div>
            </div>
          ))}
        </div>
        <div className={styles.note}>Illustrative · Modelled composites based on real engagement patterns</div>
      </div>
    </div>
  )
}
