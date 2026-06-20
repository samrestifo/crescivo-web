import styles from './Services.module.css'

const SERVICES = [
  {
    n: '01', eye: 'Growth', title: 'Market, ICP & Positioning',
    body: 'Sharpen who you sell to, why you win, and how you articulate it. Build commercial architecture before scaling spend.',
    tags: ['ICP Rationalisation','Positioning','TAM Analysis','GTM Blueprint'],
  },
  {
    n: '02', eye: 'Sales Execution', title: 'Pipeline, Process & People',
    body: 'Replace founder instinct with structured, repeatable sales motion. Stage gates, coaching cadences, quota architecture, and forecast discipline.',
    tags: ['Pipeline Architecture','Stage Gates','Sales Coaching','Quota Design'],
  },
  {
    n: '03', eye: 'Channel Excellence', title: 'Ecosystem, Enablement & Co-sell',
    body: 'Activate the partners who multiply your reach without multiplying headcount. Incentive structures, co-sell motions, and enablement that actually gets used.',
    tags: ['Partner Activation','Co-sell Motion','Enablement','Incentive Design'],
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="sec-inner" style={{paddingBottom:32}}>
        <div className="eyebrow">What We Do</div>
        <h2 className="sec-h2">Three service pillars.<br /><em>One growth engine.</em></h2>
        <p className="sec-desc" style={{marginBottom:0}}>
          Each pillar is a standalone engagement or part of The Cadenza — our embedded retainer. We scope to where the constraint is.
        </p>
      </div>
      <div className={styles.grid}>
        {SERVICES.map(({ n, eye, title, body, tags }, i) => (
          <div key={n} className={`${styles.card} reveal reveal-d${i+1}`}>
            <div className={styles.topBar} />
            <div className={styles.num}>{n}</div>
            <div className={styles.eye}>{eye}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{body}</div>
            <div className={styles.tags}>
              {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
