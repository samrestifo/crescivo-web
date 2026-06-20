import styles from './Problem.module.css'

const PROBLEMS = [
  { n:'01', head:"The founder can't be in every deal forever.", body:"Early growth is founder-led by necessity. But when every major opportunity still needs the founder, growth becomes constrained by capacity rather than market demand." },
  { n:'02', head:"More people won't fix a missing system.", body:"Hiring sales, marketing or partnerships too early only adds motion without architecture. We build the operating system before scaling the headcount." },
  { n:'03', head:"ICP drift kills momentum.", body:"Scale-ups often expand too broadly after early success. We sharpen where you win, why you win and how to repeat it." },
  { n:'04', head:"Leverage sits untapped in the ecosystem.", body:"Partners, alliances and strategic relationships can multiply reach — but only when there is a clear motion, governance and commercial reason to engage." },
]

export default function Problem() {
  return (
    <section className={`sec-alt ${styles.section}`} id="problem">
      <div className="sec-inner">
        <div className="eyebrow">The Founder Ceiling</div>
        <h2 className="sec-h2">
          Product-market fit is proven.<br />
          <em>Founder-led growth is the ceiling.</em>
        </h2>
        <p className="sec-desc">
          Most scale-ups don't stall because the product stops working. They stall because the commercial system still depends on the founder — their relationships, their instinct, their approvals and their presence in every important deal.
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
