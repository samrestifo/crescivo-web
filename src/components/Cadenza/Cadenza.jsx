const FEATURES = [
  'Embedded execution, not advisory deliverables',
  'Weekly operating cadence with your leadership team',
  'Monthly board-ready reporting and KPI dashboard',
  'Channel partner activation and governance',
  'Equity and success fee structures available',
]

export default function Cadenza() {
  return (
    <div className="img-split" id="cadenza">
      <div className="txt-panel txt-panel-dark" style={{padding:'72px'}}>
        <div className="eyebrow">The Embedded Retainer</div>
        <blockquote style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'clamp(22px,2.8vw,38px)',color:'var(--ivory)',lineHeight:1.4,borderLeft:'3px solid var(--champ)',paddingLeft:32,marginBottom:28}}>
          The cadenza is the part of the performance where the soloist takes over.<br />
          <em style={{color:'var(--champ-l)'}}>That's Crescivo.</em>
        </blockquote>
        <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.85,marginBottom:28}}>
          The Cadenza is our embedded retainer — operating as your fractional GTM, Sales, and Channel leadership across all three service pillars. We're in the business, not beside it.
        </p>
        <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10,marginBottom:36}}>
          {FEATURES.map(f => (
            <li key={f} style={{display:'flex',alignItems:'flex-start',gap:14,fontSize:13,color:'var(--muted)',lineHeight:1.6,padding:'13px 16px',background:'rgba(42,140,122,0.06)',borderLeft:'2px solid var(--teal)'}}>
              <span style={{color:'var(--teal-l)',flexShrink:0}}>—</span>{f}
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary">Discuss the Cadenza</a>
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
