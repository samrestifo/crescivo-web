import styles from './Diagnostic.module.css'

const DELIVERABLES = [
  'Founder Dependency Score','Revenue Architecture Review','ICP Clarity Assessment',
  'Positioning & Messaging Audit','GTM Motion Review','Sales Process Review',
  'Pipeline Health Score','Forecast Confidence Review','Partner Ecosystem Map',
  'Leadership Cadence Review','Team Capability Assessment','KPI Framework Design',
  '90-Day Revenue Blueprint',
]

export default function Diagnostic() {
  return (
    <section className="sec-alt" id="diagnostic">
      <div className="sec-inner">
        <div className={styles.wrap}>
          <div className="reveal">
            <div className="eyebrow">The Entry Point</div>
            <h2 className="sec-h2">The Growth<br /><em>Diagnostic™</em></h2>
            <div className={styles.feeLabel}>Fixed fee · 3 weeks</div>
            <p className="sec-desc" style={{marginBottom:32}}>
              We don't prescribe before we understand the system. The Growth Diagnostic™ maps the constraints, dependencies and opportunities inside your current commercial motion — then translates them into a board-ready Revenue Architecture™ blueprint.
            </p>
            <a href="#contact" className="btn-primary">Book a Growth Diagnostic</a>
          </div>
          <div className={`${styles.deliverables} reveal reveal-d1`}>
            {DELIVERABLES.map(d => (
              <div key={d} className={styles.d}>{d}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
