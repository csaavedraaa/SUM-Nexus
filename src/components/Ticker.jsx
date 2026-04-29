// src/components/Ticker.jsx
export function Ticker() {
  const items = ['Petroleo','Naval','Metal-Mecánico','Energético',
    'Un Solo Proveedor','Tampico','Veracruz','Ciudad del Carmen','Poza Rica','SUMIMSA®']
  const doubled = [...items, ...items]
  return (
    <div style={{background:'var(--navy)',padding:'11px 0',overflow:'hidden',position:'relative',zIndex:10}}>
      <div style={{display:'flex',whiteSpace:'nowrap',animation:'tick 30s linear infinite'}}>
        {doubled.map((t,i) => (
          <span key={i} style={{fontFamily:'var(--font-display)',fontSize:'.8rem',fontWeight:500,
            color:'rgba(255,255,255,.55)',letterSpacing:'2px',textTransform:'uppercase',
            padding:'0 28px',display:'inline-flex',alignItems:'center',gap:'10px'}}>
            {t} <span style={{color:'rgba(0,155,219,.3)'}}>◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  )
}
export default Ticker
