import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const CAPS = [
  {
    label: 'Architecture',
    desc: 'Clarify where you win, why you win and how growth should repeat.',
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
  {
    label: 'Leadership',
    desc: 'Install the sales and GTM leadership rhythm required for founder autonomy.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="var(--champ)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="14,2 16.5,5 14,8 11.5,5" fill="var(--champ)" stroke="none"/>
        <circle cx="9"  cy="14" r="3"/>
        <circle cx="19" cy="14" r="3"/>
        <path d="M4 25 Q4 19 9 19 Q14 19 14 25"/>
        <path d="M14 25 Q14 19 19 19 Q24 19 24 25"/>
      </svg>
    ),
  },
  {
    label: 'Operations',
    desc: 'Build the cadence, governance and visibility required for predictable growth.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="var(--champ)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="3"  cy="9" r="1.6" fill="var(--champ)" stroke="none"/>
        <circle cx="25" cy="9" r="1.6" fill="var(--champ)" stroke="none"/>
        <path d="M3 9 L11 14"/>
        <path d="M25 9 L17 14"/>
        <polygon points="11,14 14,12 17,14 14,16" fill="none"/>
        <path d="M11 14 L8 19"/>
        <path d="M17 14 L20 19"/>
        <circle cx="8"  cy="21" r="1.6" fill="var(--champ)" stroke="none"/>
        <circle cx="20" cy="21" r="1.6" fill="var(--champ)" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Ecosystem',
    desc: 'Create leverage through partners, alliances and strategic influence.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="var(--champ)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="24" x2="24" y2="24"/>
        <rect x="5"  y="17" width="3.5" height="7"  stroke="var(--champ)"/>
        <rect x="11" y="13" width="3.5" height="11" stroke="var(--champ)"/>
        <rect x="17" y="9"  width="3.5" height="15" stroke="var(--champ)"/>
        <path d="M4 18 L10 13 L15 15 L23 6"/>
        <polyline points="18,6 23,6 23,11"/>
      </svg>
    ),
  },
]

export default function Hero() {
  const bgRef = useRef(null)

  // Parallax — desktop only. Attach the scroll listener solely when the
  // viewport is desktop-width, so mobile keeps the static framed crop.
  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return
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
      {/* Background — WebP, desktop/mobile swap handled in CSS */}
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
          <span className={styles.h1Line1}>Scale Beyond</span>
          <br />
          <em className={styles.h1Em}>the Founder.</em>
        </h1>
        <div className={styles.divider} />
        <p className={styles.sub}>
          The Crescivo Scale System for B2B scale-ups with proven product-market fit.
        </p>
        <p className={styles.sub}>
          Every founder-led scale-up hits the same ceiling: growth still depends on the founder. Crescivo builds the architecture, leadership, operations and ecosystem to turn founder-led momentum into repeatable enterprise growth.
        </p>
      </div>

      {/* Bottom strip */}
      <div className={styles.bottom}>
        {/* Desktop: icon + label only */}
        <div className={styles.capsDesktop}>
          {CAPS.map(({ label, icon }) => (
            <div key={label} className={styles.cap}>
              <div className={styles.capIcon}>{icon}</div>
              <div className={styles.capLabel}>{label}</div>
            </div>
          ))}
        </div>

        {/* Mobile: 2×2 rich tiles */}
        <div className={styles.capsMobile}>
          {CAPS.map(({ label, desc, icon }) => (
            <div key={label} className={styles.capRich}>
              <div className={styles.capRichIcon}>{icon}</div>
              <div className={styles.capRichTitle}>{label}</div>
              <div className={styles.capRichDivider} />
              <div className={styles.capRichDesc}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Desktop footer bar */}
        <div className={styles.footerBar}>
          <div className={styles.tagline}>
            <span>Architecture</span>
            <span className={styles.sep} />
            <span>Leadership</span>
            <span className={styles.sep} />
            <span>Operations</span>
            <span className={styles.sep} />
            <span className={styles.accent}>Ecosystem</span>
          </div>
          <div className={styles.actions}>
            <a href="#diagnostic" className="btn-primary">
              Book a Growth Diagnostic
            </a>
            <a href="#services" className="btn-ghost">
              Explore the Method
            </a>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className={styles.mobileCta}>
          <div className={styles.mobileTagline}>
            <span>Architecture</span>
            <span className={styles.sep} />
            <span>Leadership</span>
            <span className={styles.sep} />
            <span>Operations</span>
            <span className={styles.sep} />
            <span className={styles.accent}>Ecosystem</span>
          </div>
          <a href="#contact" className={styles.mobileCtaBtn}>
            Book a Growth Diagnostic →
          </a>
          <p className={styles.mobileCtaMicro}>
            30-minute executive discussion. No obligation.
          </p>
        </div>
      </div>
    </section>
  )
}
