import { useState } from 'react'
import DetailPage from '../components/DetailPage'

const NEWS = [
  { cat:'Sector Petrolero', title:'SUMIMSA amplía servicios en plataformas offshore del Golfo', exc:'Nuevas alianzas estratégicas refuerzan nuestra presencia en exploración y producción de hidrocarburos.', date:'ENE 2025', img:'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&q=80&fit=crop', catColor:'var(--cyan)' },
  { cat:'Energía Renovable', title:'SUMIMSA entra al sector de energías renovables', exc:'Sumamos esfuerzos para apoyar proyectos eólicos y solares en el norte del país.', date:'OCT 2024', img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&fit=crop', catColor:'var(--green)' },
  { cat:'Naval', title:'Nueva sucursal en Ciudad del Carmen', exc:'Séptima ubicación consolida nuestra cobertura en el sureste mexicano y el Golfo.', date:'NOV 2024', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop', catColor:'var(--cyan)' },
]

export default function Noticias() {
  const [openNoticias, setOpenNoticias] = useState(false)

  return (
    <section id="noticias" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Noticias</span></div>
          <h2 className="s-h2">Últimas<br /><em>novedades</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20,marginTop:52}}>
          {NEWS.map(n=>(
            <div key={n.title} style={{background:'#fff',border:'1px solid var(--border)',overflow:'hidden',transition:'all .3s',cursor:'pointer'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 10px 32px rgba(13,30,74,.1)';e.currentTarget.style.borderColor='var(--cyan)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='';e.currentTarget.style.borderColor='var(--border)'}}>
              <div style={{height:180,overflow:'hidden',position:'relative'}}>
                <img src={n.img} alt={n.cat} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s',filter:'brightness(.85)'}} />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 40%,rgba(13,30,74,.4) 100%)'}} />
              </div>
              <div style={{padding:20}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'.58rem',color:n.catColor,letterSpacing:3,textTransform:'uppercase',marginBottom:7}}>{n.cat}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:700,textTransform:'uppercase',letterSpacing:.5,color:'var(--navy)',lineHeight:1.25,marginBottom:7}}>{n.title}</div>
                <p style={{fontSize:'.8rem',color:'var(--muted)',lineHeight:1.6,margin:0}}>{n.exc}</p>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'.58rem',color:'var(--border)',marginTop:10,letterSpacing:1}}>{n.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas" onClick={() => setOpenNoticias(true)}>
            Ver todas las noticias
          </button>
        </div>
      </div>

      <DetailPage
        isOpen={openNoticias}
        onClose={() => setOpenNoticias(false)}
        eyebrow="Sala de Prensa"
        title="Noticias <em>SUMIMSA</em>"
        lead="Las últimas novedades de nuestra empresa: expansiones, alianzas estratégicas, certificaciones y logros del equipo SUMIMSA."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=1200&q=80&fit=crop" alt="Noticias SUMIMSA" />

        <h3>ENE 2025 — Plataformas Offshore del Golfo</h3>
        <p>SUMIMSA amplía su cartera de servicios en plataformas offshore del Golfo de México con nuevas alianzas estratégicas con operadores de exploración y producción. Las nuevas capacidades incluyen suministro de herramienta certificada para zonas ATEX, EPP especializado y programas de consignación en plataforma.</p>

        <h3>NOV 2024 — Nueva Sucursal Ciudad del Carmen</h3>
        <p>Con la apertura de nuestra séptima ubicación en Ciudad del Carmen, Campeche, SUMIMSA consolida su red de suministro en el sur del Golfo de México. Esta plaza estratégica nos permite atender con mayor agilidad las operaciones offshore del área de Cantarell y el Complejo Integral de Producción Abkatún-Pol-Chuc.</p>

        <h3>OCT 2024 — Entrada al Sector Energías Renovables</h3>
        <p>SUMIMSA da un paso estratégico hacia la transición energética sumando el sector de energías renovables a su portafolio de atención. Comenzamos con proyectos eólicos en Tamaulipas y Nuevo León, ofreciendo herramienta especializada, EPP para trabajo en altura y consumibles para mantenimiento de aerogeneradores.</p>

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>ABR 2025 — Expansión Offline</h4>
            <p>Evaluamos nuevas plazas en Coatzacoalcos y Villahermosa para fortalecer la cobertura del sureste.</p>
          </div>
          <div className="dp-feature">
            <h4>MAR 2025 — Tullbox Digital</h4>
            <p>Lanzamiento de la app Tullbox para solicitud de herramienta y control de consumos desde móvil.</p>
          </div>
          <div className="dp-feature">
            <h4>FEB 2025 — Portal de Clientes</h4>
            <p>Nueva plataforma digital para colocación de órdenes, seguimiento y consulta de catálogo 24/7.</p>
          </div>
          <div className="dp-feature">
            <h4>ENE 2025 — Stanley SBD</h4>
            <p>Renovación del acuerdo de distribución exclusiva con Stanley Black & Decker Professional para la región noreste.</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
