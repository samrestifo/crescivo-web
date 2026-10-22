import styles from './FullImage.module.css'

const ECOSYSTEMS = ['Microsoft', 'AWS', 'Google Cloud', 'Cisco', 'Salesforce', 'ServiceNow']

export default function FullImage() {
  return (
    <div className={`${styles.wrap} reveal`}>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&fit=crop&crop=center"
        alt=""
        loading="lazy"
        width={1600}
        height={440}
      />
      <div className={styles.overlay} />
      <div className={styles.text}>
        <div className={styles.eyebrow}>Ecosystems</div>
        <p className={styles.quote}>
          We work across the ecosystems <em>our clients sell into.</em>
        </p>
        <ul className={styles.list}>
          {ECOSYSTEMS.map(e => <li key={e} className={styles.item}>{e}</li>)}
        </ul>
      </div>
    </div>
  )
}
