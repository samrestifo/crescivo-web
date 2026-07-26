import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import logo from '../../assets/crescivo-logo-reversed.png'

const LINKS = [
  { href: '/#services',   label: 'Crescivo Scale System' },
  { href: '/#diagnostic', label: 'Diagnostic'           },
  { href: '/#results',    label: 'Outcomes'             },
  { href: '/#about-team', label: 'Operators'            },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="/#top" className={styles.logo} aria-label="Crescivo home">
          <img
            src={logo}
            alt="Crescivo — Scale Beyond the Founder"
            className={styles.logoImg}
            loading="eager"
          />
        </a>

        <ul className={styles.links}>
          {LINKS.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.burger}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <button
          type="button"
          className={styles.drawerClose}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <ul className={styles.drawerLinks}>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
