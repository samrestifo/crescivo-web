import styles from './Services.module.css'

const SERVICES = [
  {
    n: '01', eye: 'Architecture', title: 'ICP, Positioning & Commercial Design',
    body: 'Clarify who you serve, why you win, how you position and where the next stage of growth should come from.',
    tags: ['ICP Clarity','Positioning','GTM Design','Commercial Model'],
  },
  {
    n: '02', eye: 'Leadership', title: 'Sales, GTM Leadership & Founder Autonomy',
    body: 'Install the sales and GTM leadership rhythm, role clarity and commercial discipline required for the team to operate without the founder in every deal or decision.',
    tags: ['Sales Leadership','GTM Leadership','Role Clarity','Founder Autonomy'],
  },
  {
    n: '03', eye: 'Operations', title: 'Revenue Rhythm & Forecast Discipline',
    body: 'Install the operating cadence, pipeline governance, dashboards and executive visibility required for predictable growth.',
    tags: ['Operating Cadence','Pipeline Governance','Forecasting','Board Reporting'],
  },
  {
    n: '04', eye: 'Ecosystem', title: 'Partners, Alliances & Strategic Influence',
    body: 'Build leverage through the relationships, channels and co-sell motions that multiply reach without multiplying headcount.',
    tags: ['Partner Motion','Co-sell','Alliance Strategy','Ecosystem Map'],
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="sec-inner" style={{paddingBottom:32}}>
        <div className="eyebrow">Revenue Architecture™</div>
        <h2 className="sec-h2">One operating system.<br /><em>Four growth levers.</em></h2>
        <p className="sec-desc" style={{marginBottom:0}}>
          Everything we build answers one question: what has to exist for this business to scale beyond the founder?
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
