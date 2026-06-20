import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const CAPS = [
  {
    label: 'Growth\nAdvisory',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="var(--champ)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10"/>
        <circle cx="14" cy="14" r="1.5" fill="var(--champ)" stroke="none"/>
        <polygon points="14,4 16,13 14,11 12,13" fill="var(--champ)" stroke="none"/>
        <polygon points="14,24 16,15 14,17 12,15" fill="none" stroke="var(--champ)" strokeWidth="1"/>
        <polygon points="4,14 13,12 11,14 13,16" fill="none" stroke="var(--champ)" strokeWidth="1"/>
        <polygon points="24,14 15,12 17,14 15,16" fill="none" stroke="var(--champ)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    label: 'Executive\nAccess',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="var(--champ)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="11" r="4"/>
        <path d="M5 24 Q5 17 14 17 Q23 17 23 24"/>
        <polygon points="14,2 16.5,5 14,8 11.5,5" fill="var(--champ)" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Strategic\nPartnerships',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="var(--champ)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16 L9 10 L13 13 L18 8 L25 12"/>
        <path d="M9 10 L9 7"/>
        <path d="M13 13 L13 17 Q13 20 10 20 L7 20"/>
        <path d="M18 8 L18 5"/>
        <circle cx="9" cy="6" r="1.5" fill="var(--champ)" stroke="none"/>
        <circle cx="18" cy="4" r="1.5" fill="var(--champ)" stroke="none"/>
        <circle cx="25" cy="12" r="1.5" fill="var(--champ)" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Ecosystem\nStrategy',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="var(--champ)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="2.5" fill="var(--champ)" stroke="none"/>
        <circle cx="4"  cy="18" r="2"/>
        <circle cx="24" cy="18" r="2"/>
        <circle cx="8"  cy="6"  r="2"/>
        <circle cx="20" cy="6"  r="2"/>
        <circle cx="14" cy="24" r="2"/>
        <line x1="14" y1="11.5" x2="9"  y2="7.5"/>
        <line x1="14" y1="11.5" x2="19" y2="7.5"/>
        <line x1="14" y1="16.5" x2="5.5" y2="17"/>
        <line x1="14" y1="16.5" x2="22.5" y2="17"/>
        <line x1="14" y1="16.5" x2="14" y2="22"/>
      </svg>
    ),
  },
]

export default function Hero() {
  const bgRef = useRef(null)

  // Parallax — subtle, passive listener for performance
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const y = window.scrollY
      if (y < window.innerHeight * 1.2) {
        bgRef.current.style.transform = `translateY(${y * 0.28}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background — WebP, preloaded in <head> */}
      <div
        ref={bgRef}
        className={styles.bg}
        role="img"
        aria-label="Figure standing on a mountain summit surveying an interconnected landscape at sunrise"
      />

      {/* Overlays */}
      <div className={styles.overlayLeft} aria-hidden="true" />
      <div className={styles.overlayMid}  aria-hidden="true" />
      <div className={styles.overlayTop}  aria-hidden="true" />

      {/* Nav height spacer */}
      <div className={styles.navSpacer} />

      {/* Headline block */}
      <div className={styles.main}>
        <h1 className={styles.h1}>
          <span className={styles.h1Line1}>Growth Beyond</span>
          <br />
          <em className={styles.h1Em}>the Founder.</em>
        </h1>
        <div className={styles.divider} />
        <p className={styles.sub}>
          Helping founder-led technology companies build scalable growth
          through partnerships, ecosystems and executive influence.
        </p>
      </div>

      {/* Bottom: caps + action bar */}
      <div className={styles.bottom}>
        <div className={styles.caps}>
          {CAPS.map(({ label, icon }) => (
            <div key={label} className={styles.cap}>
              <div className={styles.capIcon}>{icon}</div>
              <div className={styles.capLabel}>
                {label.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerBar}>
          <div className={styles.tagline}>
            <span>Connect</span>
            <span className={styles.sep} />
            <span>Influence</span>
            <span className={styles.sep} />
            <span className={styles.accent}>Scale</span>
          </div>
          <div className={styles.actions}>
            <a href="#diagnostic" className="btn-primary">
              Book a Growth Strategy Session
            </a>
            <a href="#services" className="btn-ghost">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
