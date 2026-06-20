import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img
          src="/images/crescivo-logo.png"
          alt="Crescivo"
          width={34}
          height={34}
          loading="eager"
        />
        <div className={styles.wordmark}>
          <span className={styles.wordmarkName}>
            <span className={styles.c}>C</span>RESCIVO
          </span>
          <span className={styles.wordmarkSub}>Ecosystem Growth Advisory</span>
        </div>
      </div>

      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href="#diagnostic">Diagnostic</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a href="#contact" className={styles.cta}>
            Book a Strategy Session
          </a>
        </li>
      </ul>
    </nav>
  )
}
