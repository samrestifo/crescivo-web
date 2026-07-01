import styles from './MetricsBand.module.css'

/* Atmospheric image band only — metrics live in the Results proof block above.
   Kept as a calm full-width visual breather (hidden on mobile). */
export default function MetricsBand() {
  return (
    <div className={styles.wrap}>
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&fit=crop" alt="Mountain ridgeline at dawn" loading="lazy" width={1600} height={240}/>
      <div className={styles.overlay}/>
    </div>
  )
}
