const FEATURES = [
  'Embedded execution, not advisory deliverables',
  'Weekly operating cadence with your leadership team',
  'Monthly board-ready revenue reporting',
  'Pipeline, partner and leadership governance',
  'Designed to create founder autonomy over time',
]

export default function Cadenza() {
  return (
    <div className="img-split" id="cadenza">
      <div className="txt-panel txt-panel-dark" style={{padding:'72px'}}>
        <div className="eyebrow">Embedded Execution</div>
        <blockquote style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'clamp(22px,2.8vw,38px)',color:'var(--ivory)',lineHeight:1.4,borderLeft:'3px solid var(--champ)',paddingLeft:32,marginBottom:28}}>
          The founder built the business.<br />
          <em style={{color:'var(--champ-l)'}}>Now the business needs to scale beyond the founder.</em>
        </blockquote>
        <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.85,marginBottom:28}}>
          Crescivo embeds alongside the leadership team to turn Revenue Architecture™ into operating rhythm. We work inside the business — building the cadence, systems and capability required for repeatable growth.
        </p>
        <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10,marginBottom:36}}>
          {FEATURES.map(f => (
            <li key={f} style={{display:'flex',alignItems:'flex-start',gap:14,fontSize:13,color:'var(--muted)',lineHeight:1.6,padding:'13px 16px',background:'rgba(42,140,122,0.06)',borderLeft:'2px solid var(--teal)'}}>
              <span style={{color:'var(--teal-l)',flexShrink:0}}>—</span>{f}
            </li>
          ))}
        </ul>
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
