import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/images/crescivo-logo.png" alt="Crescivo" width={26} height={26} loading="lazy" />
        <div>
          <div className={styles.wm}><span className={styles.c}>C</span>RESCIVO</div>
          <div className={styles.sub}>Ecosystem Growth Advisory</div>
        </div>
      </div>
      <ul className={styles.links}>
        {['Services','Diagnostic','Results','Contact'].map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
      <div className={styles.legal}>
        © 2026 Crescivo.&ensp;·&ensp;crescivo.partners&ensp;·&ensp;Illustrative figures based on real engagements.
      </div>
    </footer>
  )
}
