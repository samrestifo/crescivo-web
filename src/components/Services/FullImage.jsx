import styles from './FullImage.module.css'

const ECOSYSTEMS = [
  { name: 'Microsoft',  file: 'microsoft.svg'  },
  { name: 'AWS',        file: 'aws.svg'        },
  { name: 'Google',     file: 'google.svg'     },
  { name: 'Cisco',      file: 'cisco.svg'      },
  { name: 'Salesforce', file: 'salesforce.svg' },
  { name: 'ServiceNow', file: 'servicenow.svg' },
]

export default function FullImage() {
  return (
    <div className={`${styles.wrap} reveal`}>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&fit=crop&crop=center"
        alt=""
        className={styles.bg}
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
          {ECOSYSTEMS.map(({ name, file }) => (
            <li key={name} className={styles.item}>
              <img src={`/images/ecosystems/${file}`} alt={name} loading="lazy" className={styles.logo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
