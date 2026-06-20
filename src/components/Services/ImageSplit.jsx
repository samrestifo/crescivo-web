import styles from './ImageSplit.module.css'

export default function ImageSplit() {
  return (
    <div className={`img-split reveal ${styles.root}`}>
      <div className="img-panel">
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80&fit=crop"
          alt="Modern office building exterior"
          loading="lazy"
          width={900}
          height={600}
        />
        <div className="img-tint" />
      </div>
      <div className="txt-panel txt-panel-slate">
        <div className="eyebrow" style={{color:'var(--teal-l)'}}>What We Build</div>
        <h2 className="sec-h2" style={{fontSize:'clamp(22px,2.8vw,38px)',marginBottom:18}}>
          The commercial architecture your scale-up is missing.
        </h2>
        <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.85,marginBottom:24}}>
          Crescivo sits between the founder and the market. We design the revenue architecture, activate the operating cadence and build the ecosystem required for repeatable enterprise growth.
        </p>
        <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.85,marginBottom:36}}>
          We don't replace founders. We multiply them — then build the system that lets the company grow without depending on them.
        </p>
        <a href="#services" className="btn-primary">Explore Revenue Architecture</a>
      </div>
    </div>
  )
}
