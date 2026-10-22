import styles from './About.module.css'

const CREDS = [
  'Deep B2B scaleup, enterprise sales and GTM experience across AU/NZ and APAC',
  'Commercial architecture across sales, partnerships, ecosystem and operating cadence',
  'Operator led execution, embedded with your leadership team',
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
          Crescivo is led by Sam Restifo, Guy Pozniak and Jason Serda, three co-founders and operators who have built and sold significant businesses, led enterprise sales and GTM functions, activated partner ecosystems across Australia, APAC and international markets, and bring extensive executive network access.
        </p>
        <p className={styles.body}>
          We work with B2B scaleups that have proven product market fit but are still too dependent on founder led growth. We apply the Crescivo Scale System across architecture, leadership, operations and ecosystem to help the business scale beyond the founder.
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
          <p>"One cadence. One set of comms. One point of contact, and a team that only wins when you do."</p>
          <cite>Sam Restifo, Guy Pozniak & Jason Serda · Crescivo</cite>
        </div>
      </div>
    </div>
  )
}
