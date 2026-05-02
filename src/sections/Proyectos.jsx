import { useState } from 'react'
import DetailPage from '../components/DetailPage'

const PROJS = [
  { cat:'Petrolero',    title:'Suministro integral en plataformas offshore del Golfo de México',    img:'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&q=80&fit=crop' },
  { cat:'Naval',        title:'Equipamiento de buques en puertos Tampico – Veracruz',               img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop' },
  { cat:'Tullbox',      title:'Programa Tullbox In Situ — Planta industrial Tamaulipas',            img:'/Contenedor_Tullbox.jpg' },
  { cat:'Energético',   title:'Herramienta para parque eólico norte de México',                     img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80&fit=crop' },
  { cat:'Metal-Mecán.', title:'Equipamiento integral de taller — planta automotriz',                img:'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80&fit=crop' },
]

const cardStyle = (large=false) => ({
  position:'relative',overflow:'hidden',cursor:'pointer',
  aspectRatio: large ? undefined : '4/3',
  display:'flex',flexDirection:'column',justifyContent:'flex-end',
  gridRow: large ? '1/3' : undefined,
})

export default function Proyectos() {
  const [openProj, setOpenProj] = useState(false)

  return (
    <section id="proyectos" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Proyectos</span></div>
          <h2 className="s-h2">Ejecutados<br /><em>con precisión</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'auto auto',gap:1,background:'var(--border)',marginTop:52}}>
          {PROJS.map((p,i)=>(
            <div key={i} style={cardStyle(i===0)}>
              <img src={p.img} alt={p.cat} loading="lazy"
                style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',transition:'transform .6s,filter .4s',filter:'brightness(.7)'}} />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(13,30,74,.9) 0%,rgba(13,30,74,.15) 65%,transparent 100%)'}} />
              <div style={{position:'relative',zIndex:2,padding:22}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'.58rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',display:'flex',alignItems:'center',gap:8,marginBottom:5}}>
                  <span style={{display:'inline-block',width:14,height:1,background:'var(--cyan)'}} />{p.cat}
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:700,textTransform:'uppercase',letterSpacing:.5,color:'#fff',lineHeight:1.2}}>{p.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas" onClick={() => setOpenProj(true)}>
            Ver todos los proyectos
          </button>
        </div>
      </div>

      <DetailPage
        isOpen={openProj}
        onClose={() => setOpenProj(false)}
        eyebrow="Proyectos"
        title="Ejecutados con <em>Precisión</em>"
        lead="Soluciones industriales entregadas con excelencia operativa en los sectores más exigentes de México. Cada proyecto refleja nuestra capacidad, experiencia y compromiso."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=1200&q=80&fit=crop" alt="Proyectos SUMIMSA" />

        <h3>Suministro Offshore — Golfo de México</h3>
        <p>Suministro integral a plataformas petroleras offshore en el Golfo de México: herramienta de precisión, EPP certificado, consumibles industriales y equipos especializados. Entregas coordinadas desde nuestras bases en Tampico, Ciudad del Carmen y Paraíso con tiempos de respuesta garantizados menores a 24 horas.</p>

        <h3>Programa Tullbox — Planta Industrial Tamaulipas</h3>
        <p>Instalación y operación de contenedor Tullbox In Situ en planta de manufactura de la zona industrial de Tamaulipas. Resultado: reducción del 85% en tiempo de búsqueda de herramienta, eliminación del 100% de extravíos de herramienta de alto valor y ahorro significativo en capital de trabajo inmovilizado en inventario.</p>

        <h3>Equipamiento Naval — Tampico / Veracruz</h3>
        <p>Equipamiento de embarcaciones de cabotaje y líneas de navegación interior con herramienta de cubierta, EPP certificado SOLAS y equipos de seguridad marítima. Atención directa en terminales portuarias de Tampico y Veracruz con entrega a bordo.</p>

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>Parque Eólico — Norte MX</h4>
            <p>Herramienta especializada y EPP para altura para instalación de aerogeneradores en Tamaulipas y Nuevo León.</p>
          </div>
          <div className="dp-feature">
            <h4>Planta Automotriz</h4>
            <p>Equipamiento integral de taller con programa MRO (Mantenimiento, Reparación y Operación) bajo contrato abierto.</p>
          </div>
          <div className="dp-feature">
            <h4>Inspección — Refinería</h4>
            <p>Servicios de inspección especializada con equipos certificados PEMEX en refinería del norte de Veracruz.</p>
          </div>
          <div className="dp-feature">
            <h4>Buques de Servicio — Carmen</h4>
            <p>Suministro continuo a flota de buques de apoyo offshore desde nuestra base en Cd. del Carmen, Campeche.</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
