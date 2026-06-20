import styles from './About.module.css'

const CREDS = [
  'Deep SaaS GTM and enterprise sales experience across AU/NZ and APAC',
  'Channel and ecosystem depth — MSP, MSSP, reseller, and GSI tiers',
  'Commercial alignment — equity and success fee structures available',
  'Proven in cybersecurity, FinOps, and infrastructure SaaS verticals',
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
          Operators who've built it,<br />broken it, and <em>scaled it</em>.
        </div>
        <p className={styles.body}>
          Crescivo was founded by Sam Restifo and Guy Pozniak — two operators who've built GTM functions, led sales teams, and activated channel ecosystems across enterprise SaaS in Australia and internationally.
        </p>
        <p className={styles.body}>
          We don't advise from a distance. We embed. We hold accountability. We stay until the motion is repeatable and the team can run without us.
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
          <p>"We don't advise. We grow it with you."</p>
          <cite>Sam Restifo & Guy Pozniak · Crescivo</cite>
        </div>
      </div>
    </div>
  )
}
