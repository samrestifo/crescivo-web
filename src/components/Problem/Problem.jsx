import styles from './Problem.module.css'

const PROBLEMS = [
  { n:'01', head:"The founder can't close every deal forever.", body:"When the pipeline depends on a single person's relationships and instinct, growth is finite. We build the sales motion that works without you in every call." },
  { n:'02', head:"Strategy without execution is a deck.", body:"We embed — inside the business, alongside your team, accountable for outcomes. Not a 40-page report handed over and forgotten." },
  { n:'03', head:"ICP diffusion kills momentum.", body:"Selling to everyone means winning no-one's category. We sharpen your ICP to the archetype where you already win — then build everything from that anchor." },
  { n:'04', head:"Channel sits untapped on the table.", body:"The partners that could 3× your reach exist right now. No co-sell motion, no enablement, no incentive structure. We fix that." },
]

export default function Problem() {
  return (
    <section className={`sec-alt ${styles.section}`} id="problem">
      <div className="sec-inner">
        <div className="eyebrow">The Problem We Solve</div>
        <h2 className="sec-h2">
          Product-market fit is proven.<br />
          <em>Scaling it is a different game.</em>
        </h2>
        <p className="sec-desc">
          Most founder-led companies hit a ceiling — not because the product stops working, but because the GTM, sales, and channel infrastructure were never built for scale.
        </p>
        <div className={`${styles.grid} reveal`}>
          {PROBLEMS.map(({ n, head, body }) => (
            <div key={n} className={styles.cell}>
              <div className={styles.num}>{n}</div>
              <div className={styles.head}>{head}</div>
              <div className={styles.body}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
