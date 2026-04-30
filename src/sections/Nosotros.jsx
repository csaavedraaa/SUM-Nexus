export default function Nosotros() {
  const rows = [
    ['Fundada en',    'Tampico, Tamps.'],
    ['Tipo',          '100% Mexicana'],
    ['Ubicaciones',   '7 Plazas activas'],
    ['Sectores',      'Petro · Naval · MM · Energía'],
    ['Clasificación', 'Clase Mundial'],
    ['Estatus',       '● Activo'],
  ]
  const chips = ['Calidad','Confianza','Innovación','Seguridad','Liderazgo','México']
  return (
    <section id="nosotros" className="section section-alt">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
          {/* Terminal visual */}
          <div className="reveal" style={{position:'relative',paddingRight:24}}>
            <div style={{background:'var(--navy)',border:'1px solid var(--border)',overflow:'hidden'}}>
              <div style={{background:'rgba(0,0,0,.2)',padding:'10px 16px',display:'flex',alignItems:'center',gap:6,borderBottom:'1px solid rgba(255,255,255,.07)'}}>
                {['#ff5f57','#febc2e','#28c840'].map(c=><div key={c} style={{width:10,height:10,borderRadius:'50%',background:c}} />)}
                <span style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'rgba(255,255,255,.3)',letterSpacing:2,marginLeft:8}}>sumimsa — company-profile.json</span>
              </div>
              <div style={{padding:'24px 22px'}}>
                {rows.map(([k,v])=>(
                  <div key={k} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'rgba(255,255,255,.3)',letterSpacing:2,textTransform:'uppercase'}}>{k}</span>
                    <span style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:600,color:k==='Estatus'?'#00c46a':'var(--cyan)',letterSpacing:.5}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:'absolute',bottom:-18,right:-18,background:'var(--amber)',padding:'18px 20px',clipPath:'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)'}}>
              <strong style={{fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:700,color:'#fff',display:'block',lineHeight:1}}>+15</strong>
              <span style={{fontSize:'.6rem',color:'rgba(255,255,255,.75)',textTransform:'uppercase',letterSpacing:1.5}}>Años de experiencia</span>
            </div>
          </div>
          {/* Text */}
          <div className="reveal d2">
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Acerca de SUMIMSA</span></div>
            <h2 className="s-h2" style={{marginBottom:18}}>Empresa de<br /><em>clase mundial</em></h2>
            <div style={{fontFamily:'var(--font-display)',fontSize:'1.35rem',fontWeight:300,color:'var(--navy)',lineHeight:1.45,marginBottom:18,borderLeft:'3px solid var(--cyan)',paddingLeft:18}}>
              "Comprometidos a ser el único proveedor que necesitas para operar con excelencia."
            </div>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.8,marginBottom:12}}>
              Es en Tampico, Tamaulipas donde <strong style={{color:'var(--navy)'}}>SUMIMSA</strong> inicia operaciones con el compromiso de llegar a ser una empresa de clase mundial, atendiendo las necesidades de nuestros clientes en los sectores metal-mecánico, petrolero, naval, automotriz y energético.
            </p>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.8,marginBottom:12}}>
              Somos una empresa 100% mexicana, distribuidora directa de herramientas, equipos y accesorios de las marcas más reconocidas en el mercado, con servicios integrales de calidad, trabajando en forma efectiva y segura.
            </p>
            <div className="chips">
              {chips.map(c=><div key={c} className="chip">{c}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}