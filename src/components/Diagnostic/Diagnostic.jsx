import styles from './Diagnostic.module.css'

const DELIVERABLES = [
  'ICP Analysis & Scoring','Competitive Position Map','GTM Motion Audit',
  'Sales Process Review','Channel Gap Analysis','Pipeline Health Score',
  'Messaging Effectiveness','Revenue Architecture','Pricing Model Audit',
  'Partner Ecosystem Map','Team Capability Review','KPI Framework Design',
  '90-Day Action Roadmap',
]

export default function Diagnostic() {
  return (
    <section className="sec-alt" id="diagnostic">
      <div className="sec-inner">
        <div className={styles.wrap}>
          <div className="reveal">
            <div className="eyebrow">The Entry Point</div>
            <h2 className="sec-h2">The Growth<br /><em>Diagnostic</em></h2>
            <div className={styles.feeLabel}>Fixed fee · 3 weeks</div>
            <p className="sec-desc" style={{marginBottom:32}}>
              We don't commit to KPIs before we understand the business. The diagnostic is the structured entry point — 13 deliverables, four tracks, full commercial picture. KPI commitments come after, not before.
            </p>
            <a href="#contact" className="btn-primary">Book a Strategy Session</a>
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
