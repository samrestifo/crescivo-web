import styles from './About.module.css'

const CREDS = [
  'Deep B2B scale-up, enterprise sales and GTM experience across AU/NZ and APAC',
  'Revenue architecture across sales, partnerships, ecosystem and operating cadence',
  'Operator-led execution — embedded with leadership, not advising from a distance',
  'Commercial alignment through retained, success-based and selective equity structures',
]

export default function About() {
  return (
    <div className="img-split" id="about-team">
      <div className="img-panel">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&fit=crop&crop=top"
          alt="Collaborative workspace"
          loading="lazy"
          width={900}
          height={600}
        />
        <div className="img-tint" />
      </div>
      <div className={`txt-panel reveal ${styles.panel}`}>
        <div className="eyebrow">Who We Are</div>
        <div className={styles.manifesto}>
          Operators who've built it,<br />broken it and <em>scaled it</em>.
        </div>
        <p className={styles.body}>
          Crescivo is led by Sam Restifo, Guy Pozniak and Jason Serda — three co-founder/operators who have built and sold significant businesses, led enterprise sales and GTM functions, activated partner ecosystems across Australia, APAC and international markets, and bring extensive executive network access.
        </p>
        <p className={styles.body}>
          We work with B2B scale-ups that have proven product-market fit but are still too dependent on founder-led growth. Our role is to build the commercial architecture, rhythm and leverage that lets the business scale beyond the founder.
        </p>
        <div className={styles.creds}>
          {CREDS.map(c => (
            <div key={c} className={styles.cred}>
              <div className={styles.dot} />
              {c}
            </div>
          ))}
        </div>
        <div className={styles.pullQuote}>
          <p>"We don't replace founders. We multiply them."</p>
          <cite>Sam Restifo, Guy Pozniak & Jason Serda · Crescivo</cite>
        </div>
      </div>
    </div>
  )
}
