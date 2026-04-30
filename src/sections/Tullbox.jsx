export default function Tullbox() {
  const feats = [
    ['📦','Contenedor instalado en tu planta u operación'],
    ['🔧','Herramienta especializada disponible 24/7'],
    ['💰','Sin inversión de capital — pago por consumo real'],
    ['📊','Control y trazabilidad completa de consumos'],
  ]
  return (
    <section id="tullbox" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{background:'var(--amber)'}} />
            <span className="eyebrow-text" style={{color:'var(--amber)'}}>Marca Complementaria</span>
          </div>
          <h2 className="s-h2">Conoce <em style={{color:'var(--amber)'}}>Tullbox</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0,border:'1px solid var(--border)',marginTop:52,overflow:'hidden'}}>
          {/* Left: info */}
          <div style={{padding:52,background:'var(--navy)',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(244,121,32,.05),transparent 60%)'}} />
            <div style={{fontFamily:'var(--font-display)',fontSize:'4.2rem',fontWeight:700,textTransform:'uppercase',letterSpacing:-2,lineHeight:1,marginBottom:6,position:'relative',zIndex:1}}>
              <span style={{color:'#fff'}}>TULL</span><span style={{color:'var(--amber)'}}>BOX</span>
            </div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'rgba(255,255,255,.3)',letterSpacing:3,textTransform:'uppercase',marginBottom:26,position:'relative',zIndex:1}}>
              Programa In Situ de renta de herramientas
            </div>
            <p style={{fontSize:'.88rem',color:'rgba(255,255,255,.6)',lineHeight:1.8,marginBottom:26,position:'relative',zIndex:1}}>
              Tullbox instala un contenedor de herramientas especializado directamente en tus instalaciones. Disponibilidad inmediata 24/7, control total de consumos y sin inversión de capital.
            </p>
            <div style={{display:'flex',flexDirection:'column',border:'1px solid rgba(255,255,255,.08)',marginBottom:28,position:'relative',zIndex:1}}>
              {feats.map(([ic,txt])=>(
                <div key={txt} style={{display:'flex',alignItems:'center',gap:12,padding:'13px 16px',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
                  <span style={{fontSize:'.95rem',flexShrink:0}}>{ic}</span>
                  <p style={{fontSize:'.8rem',color:'rgba(255,255,255,.5)',margin:0}}>{txt}</p>
                </div>
              ))}
            </div>
            <button className="btn-main" style={{background:'var(--amber)',display:'inline-block',border:'none',cursor:'pointer'}}
              onClick={()=>{const el=document.querySelector('#contacto');if(el)window.scrollTo({top:el.offsetTop-68,behavior:'smooth'})}}>
              Solicitar Tullbox
            </button>
          </div>
          {/* Right: real photo */}
          <div style={{position:'relative',minHeight:480,overflow:'hidden',background:'#0a1428'}}>
            <img src="/Contenedor_Tullbox.jpg" alt="Contenedor Tullbox In Situ"
              style={{width:'100%',height:'100%',minHeight:480,objectFit:'cover',objectPosition:'center',display:'block'}} />
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(13,30,74,.75) 0%,transparent 60%)'}} />
            <div style={{position:'absolute',bottom:28,left:28,zIndex:2}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--amber)',letterSpacing:3,textTransform:'uppercase',marginBottom:6,display:'flex',alignItems:'center',gap:8}}>
                <span style={{display:'block',width:16,height:1,background:'var(--amber)'}} />In Situ — Programa activo
              </div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'1.2rem',fontWeight:700,color:'#fff',textTransform:'uppercase',letterSpacing:.5}}>
                Contenedor Tullbox instalado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}// CSS is inline — add Tullbox.css for responsive
