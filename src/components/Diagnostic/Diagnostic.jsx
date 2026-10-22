import styles from './Diagnostic.module.css'

const STEPS = [
  {
    n: '01', title: 'Whiteboard Session',
    body: 'Ninety minutes with the three of us. We align on the outcome, the commercial picture and where growth still depends on the founder.',
  },
  {
    n: '02', title: 'Crescivo Scale Brief',
    body: 'One page. What we heard, what we would do and what it costs, so the scope is agreed before the work starts.',
  },
  {
    n: '03', title: 'Growth Diagnostic', tag: 'Primary engagement',
    body: 'Six weeks of evidence across the Crescivo Scale System, ending in a Commercial Blueprint and a board ready ninety day plan.',
  },
  {
    n: '04', title: 'Embedded Execution',
    body: 'We run the plan with your team, with a weekly leadership rhythm and an owner for every number.',
  },
  {
    n: '05', title: 'Scale Review',
    body: 'A monthly review against the scorecard, and a formal review at the end of each stage.',
  },
  {
    n: '06', title: 'Extend or exit',
    body: 'We decide together whether to extend or hand over. The aim is a system your team runs without us.',
  },
]

const DELIVERABLES = [
  'Founder Dependency Score','Crescivo Scale System Review','ICP Clarity Assessment',
  'Positioning & Messaging Audit','GTM Motion Review','Sales Process Review',
  'Pipeline Health Score','Forecast Confidence Review','Partner Ecosystem Map',
  'Leadership Cadence Review','Team Capability Assessment','KPI Framework Design',
  'Commercial Blueprint and 90 day plan',
]

export default function Diagnostic() {
  return (
    <section className="sec-alt" id="diagnostic">
      <div className="sec-inner">
        <div className={`${styles.intro} reveal`}>
          <div className="eyebrow">How we work</div>
          <h2 className={`sec-h2 ${styles.head}`}>Every engagement runs<br /><em>in the same order.</em></h2>
          <p className="sec-desc" style={{marginBottom:0}}>
            It starts with ninety minutes at a whiteboard and a one page Scale Brief. The Growth Diagnostic follows the brief, and embedded execution follows the blueprint. A Scale Review at each stage decides what happens next.
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
            <div className="eyebrow">The primary engagement</div>
            <h3 className={styles.dHead}>The Growth <em>Diagnostic</em></h3>
            <div className={styles.feeLabel}>Fixed fee · Six weeks</div>
            <a href="#contact" className="btn-primary">Book a Whiteboard Session</a>
            <p className={styles.ctaNote}>
              Every Diagnostic starts with a Whiteboard Session and a Scale Brief, so you see the scope and the cost before it begins.
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
