export default function ImageSplit() {
  return (
    <div className="img-split reveal">
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
          The execution layer your business is missing.
        </h2>
        <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.85,marginBottom:24}}>
          Most scale-up GTM problems don't need more strategy. They need someone to make the strategy real — inside the business, accountable for the outcomes.
        </p>
        <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.85,marginBottom:36}}>
          Crescivo sits between the founders and the market. We build the motion, activate the ecosystem, and hand over a team that can run it independently.
        </p>
        <a href="#services" className="btn-primary">See Our Services</a>
      </div>
    </div>
  )
}
