import styles from './Diagnostic.module.css'

const STEPS = [
  {
    n: '01', title: 'Whiteboard Session',
    body: 'Align the outcome, current reality, founder dependency and guardrails so the work is visible before scope is agreed.',
  },
  {
    n: '02', title: 'Growth Diagnostic', tag: 'Primary engagement',
    body: 'Validate the constraints across the Crescivo Scale System and convert them into a board-ready 90-Day Scale Blueprint.',
  },
  {
    n: '03', title: 'Embedded Execution',
    body: 'Install the leadership rhythm, operating cadence and commercial system required for repeatable enterprise growth.',
  },
]

const DELIVERABLES = [
  'Founder Dependency Score','Crescivo Scale System Review','ICP Clarity Assessment',
  'Positioning & Messaging Audit','GTM Motion Review','Sales Process Review',
  'Pipeline Health Score','Forecast Confidence Review','Partner Ecosystem Map',
  'Leadership Cadence Review','Team Capability Assessment','KPI Framework Design',
  '90-Day Scale Blueprint',
]

export default function Diagnostic() {
  return (
    <section className="sec-alt" id="diagnostic">
      <div className="sec-inner">
        <div className={`${styles.intro} reveal`}>
          <div className="eyebrow">The Engagement Framework</div>
          <h2 className={`sec-h2 ${styles.head}`}>Before we prescribe the work,<br /><em>we map the system.</em></h2>
          <p className="sec-desc" style={{marginBottom:0}}>
            Every founder-led scale-up has a different constraint. The first step is a focused whiteboard conversation to align the outcome, current reality, founder dependency and guardrails. From there, the Growth Diagnostic validates the system and turns it into a board-ready blueprint.
          </p>
        </div>

        <div className={`${styles.steps} reveal reveal-d1`}>
          {STEPS.map(({ n, title, body, tag }) => (
            <div key={n} className={`${styles.step} ${tag ? styles.stepActive : ''}`}>
              {tag && <div className={styles.stepTag}>{tag}</div>}
              <div className={styles.stepNum}>{n}</div>
              <div className={styles.stepTitle}>{title}</div>
              <div className={styles.stepBody}>{body}</div>
            </div>
          ))}
        </div>

        <div className={styles.wrap}>
          <div className="reveal">
            <div className="eyebrow">The Entry Point</div>
            <h3 className={styles.dHead}>The Growth <em>Diagnostic™</em></h3>
            <div className={styles.feeLabel}>Fixed fee · 3 weeks</div>
            <a href="#contact" className="btn-primary">Book a Growth Diagnostic</a>
            <p className={styles.ctaNote}>
              We start with a focused whiteboard conversation to understand where growth still depends on the founder.
            </p>
          </div>
          <div className={`${styles.deliverables} reveal reveal-d1`}>
            <div className={styles.delLabel}>Inside the Diagnostic</div>
            {DELIVERABLES.map(d => (
              <div key={d} className={styles.d}>{d}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
