import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/images/crescivo-logo.png" alt="Crescivo" width={26} height={26} loading="lazy" />
        <div>
          <div className={styles.wm}><span className={styles.c}>C</span>RESCIVO</div>
          <div className={styles.sub}>Crescivo Scale System</div>
        </div>
      </div>
      <ul className={styles.links}>
        {[
          { label:'Crescivo Scale System', href:'/#services'   },
          { label:'Diagnostic',           href:'/#diagnostic' },
          { label:'Outcomes',             href:'/#results'    },
          { label:'Contact',              href:'/#contact'    },
        ].map(({ label, href }) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
      <div className={styles.legal}>
        © 2026 Crescivo.&ensp;·&ensp;crescivo.partners&ensp;·&ensp;Scale Beyond the Founder.
        &ensp;·&ensp;<a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
      </div>
    </footer>
  )
}
