const CATS = [
  { icon:'🛢️', title:'Petrolero',      desc:'Herramientas y equipos para exploración y producción de hidrocarburos',  img:'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&q=70&fit=crop' },
  { icon:'⚓',  title:'Naval',          desc:'Suministros y equipamiento para operaciones marítimas',                  img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70&fit=crop' },
  { icon:'⚙️', title:'Metal-Mecánico', desc:'Herramienta industrial y equipos de manufactura',                       img:'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=70&fit=crop' },
]
const URL = 'https://online.fliphtml5.com/Sumimsa/wiem/#p=8'

export default function Catalogos() {
  return (
    <section id="catalogs" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Catálogos</span></div>
          <h2 className="s-h2">Nuestros<br /><em>productos</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:1,background:'var(--border)',marginTop:52}}>
          {/* Main card */}
          <div style={{gridColumn:'1/-1',background:'var(--navy)',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:32,padding:'32px 40px'}}>
            <div>
              <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:700,textTransform:'uppercase',color:'#fff',marginBottom:6}}>📚 Catálogo Digital Interactivo</h3>
              <p style={{color:'rgba(255,255,255,.5)',fontSize:'.83rem'}}>Nuestro catálogo completo en formato de revista digital.</p>
              <a href={URL} target="_blank" rel="noopener noreferrer" className="btn-main" style={{marginTop:16,display:'inline-block',fontSize:'.82rem',padding:'11px 26px'}}>
                Ver catálogo completo ↗
              </a>
            </div>
          </div>
          {/* Sector cards */}
          {CATS.map(c=>(
            <a key={c.title} href={URL} target="_blank" rel="noopener noreferrer"
              style={{background:'#fff',padding:'26px 22px',display:'flex',flexDirection:'column',gap:12,position:'relative',transition:'background .2s',textDecoration:'none'}}
              onMouseEnter={e=>e.currentTarget.style.background='var(--off)'}
              onMouseLeave={e=>e.currentTarget.style.background='#fff'}>
              <img src={c.img} alt={c.title} loading="lazy" style={{width:'100%',height:110,objectFit:'cover',borderRadius:2}} />
              <div style={{fontFamily:'var(--font-display)',fontSize:'.95rem',fontWeight:700,textTransform:'uppercase',letterSpacing:.5,color:'var(--navy)'}}>{c.title}</div>
              <p style={{fontSize:'.77rem',color:'var(--muted)',lineHeight:1.6,flex:1,margin:0}}>{c.desc}</p>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--cyan)',letterSpacing:2,textTransform:'uppercase'}}>Ver catálogo →</span>
            </a>
          ))}
        </div>
        <div style={{background:'var(--off)',border:'1px solid var(--border)',borderLeft:'3px solid var(--amber)',padding:'18px 22px',marginTop:18,display:'flex',gap:12,alignItems:'flex-start'}}>
          <span style={{fontSize:'1.1rem',flexShrink:0,marginTop:2}}>💡</span>
          <div>
            <h5 style={{fontFamily:'var(--font-display)',fontSize:'.83rem',fontWeight:700,textTransform:'uppercase',letterSpacing:1,color:'var(--amber)',marginBottom:3}}>Recomendación de plataforma</h5>
            <p style={{fontSize:'.77rem',color:'var(--muted)',lineHeight:1.7,margin:0}}>Para una experiencia más moderna te recomendamos <strong>Issuu</strong> (issuu.com) o <strong>Publuu</strong> (publuu.com) — ambos gratuitos, visualización tipo revista y mejor rendimiento en móvil.</p>
          </div>
        </div>
      </div>
    </section>
  )
}