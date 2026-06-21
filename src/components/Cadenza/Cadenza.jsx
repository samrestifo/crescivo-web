import { useState } from 'react'
import styles from './Cadenza.module.css'

const EXECUTION_ITEMS = [
  {
    title: 'Embedded execution, not advisory deliverables',
    body: 'We work inside the operating rhythm of the business — turning commercial priorities into weekly action, not static recommendations.',
  },
  {
    title: 'Weekly cadence with your leadership team',
    body: 'We create the leadership rhythm for pipeline, priorities, decisions and accountability so growth becomes managed, not improvised.',
  },
  {
    title: 'Board-ready revenue visibility',
    body: 'We translate commercial activity into clear executive reporting across pipeline, forecast confidence, partner leverage and growth constraints.',
  },
  {
    title: 'Pipeline, partner and leadership governance',
    body: 'We install the governance required to scale sales, GTM leadership and ecosystem execution without everything reverting to the founder.',
  },
  {
    title: 'Designed to create founder autonomy',
    body: 'The goal is not long-term dependency on Crescivo. The goal is a commercial system that lets the company scale beyond the founder.',
  },
]

export default function Cadenza() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="img-split" id="cadenza">
      <div className={`txt-panel txt-panel-dark ${styles.panel}`}>
        <div className="eyebrow">Embedded Execution</div>
        <blockquote className={styles.quote}>
          The founder built the business.<br />
          <em>Now the business needs to scale beyond the founder.</em>
        </blockquote>
        <p className={styles.body}>
          Crescivo embeds alongside the leadership team to turn Revenue Architecture™ into operating rhythm. We work inside the business — building the cadence, systems and capability required for repeatable growth.
        </p>

        <div className={styles.accordion}>
          {EXECUTION_ITEMS.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.title} className={`${styles.row} ${open ? styles.rowOpen : ''}`}>
                <button
                  type="button"
                  id={`exec-header-${i}`}
                  className={styles.rowHeader}
                  aria-expanded={open}
                  aria-controls={`exec-panel-${i}`}
                  onClick={() => setOpenIndex(i)}
                >
                  <span className={styles.rowTitle}>{item.title}</span>
                  <span className={styles.rowIcon} aria-hidden="true" />
                </button>
                <div
                  id={`exec-panel-${i}`}
                  role="region"
                  aria-labelledby={`exec-header-${i}`}
                  className={styles.rowPanel}
                >
                  <div className={styles.rowPanelInner}>
                    <p className={styles.rowBody}>{item.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <a href="#contact" className="btn-primary">Discuss Embedded Execution</a>
      </div>
      <div className="img-panel">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&fit=crop"
          alt="Strategy session"
          loading="lazy"
          width={900}
          height={600}
        />
        <div className="img-tint-champ" />
      </div>
    </div>
  )
}
