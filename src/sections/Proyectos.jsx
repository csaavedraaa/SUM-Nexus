import { useState } from 'react'
import DetailPage from '../components/DetailPage'

const LINEAS = [
  {
    cat: 'Top Drive',
    title: 'Top Drive',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&q=80&fit=crop',
  },
  {
    cat: 'Control de Sólidos',
    title: 'Control de Sólidos',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop',
  },
  {
    cat: 'Preventores',
    title: 'Preventores',
    img: '/Contenedor_Tullbox.jpg',
  },
  {
    cat: 'Bombas de Lodo',
    title: 'Bombas de Lodo y Sistemas de Circulación',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80&fit=crop',
  },
  {
    cat: 'Sistemas de Seguridad',
    title: 'Sistemas de Seguridad y Cero Derrames',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80&fit=crop',
  },
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
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Proyectos Estratégicos</span></div>
          <h2 className="s-h2">Ejecutados<br /><em>con precisión</em></h2>
          <p style={{fontSize:'.92rem',color:'var(--muted)',lineHeight:1.8,maxWidth:740,marginTop:14}}>
            Suministro y servicios de mantenimiento (incluido el refaccionamiento) de los componentes críticos a los Equipos de Perforación, que permita la continuidad operativa, evitando tiempos de espera no productivos y el cumplimiento de las metas en la incorporación de reservas conforme a los programas Operativos.
          </p>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'auto auto',gap:1,background:'var(--border)',marginTop:52}}>
          {LINEAS.map((p,i)=>(
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
        eyebrow="Proyectos Estratégicos"
        title="Ejecutados con <em>Precisión</em>"
        lead="Suministro y servicios de mantenimiento de los componentes críticos a los Equipos de Perforación, garantizando continuidad operativa y cumplimiento de metas conforme a los programas Operativos."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=1200&q=80&fit=crop" alt="Proyectos SUMIMSA" />

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>Top Drive</h4>
            <p>Suministro de refacciones, consumibles y servicios de mantenimiento para sistemas Top Drive en operaciones de perforación terrestres y marítimas.</p>
          </div>
          <div className="dp-feature">
            <h4>Control de Sólidos</h4>
            <p>Inspección, venta, refacciones y mantenimiento para equipos de control de sólidos. Incluye medición de Fuerza G y fabricación de estructuras para instalación de equipos.</p>
          </div>
          <div className="dp-feature">
            <h4>Preventores</h4>
            <p>Reparación, mantenimiento e inspección de preventores de reventones (BOP). Cumplimiento de normas API y estándares PEMEX para operaciones de perforación.</p>
          </div>
          <div className="dp-feature">
            <h4>Bombas de Lodo y Sistemas de Circulación</h4>
            <p>Suministro de refacciones críticas, reparación y mantenimiento de bombas de lodo y sistemas de circulación para equipos de perforación y mantenimiento de pozos.</p>
          </div>
          <div className="dp-feature">
            <h4>Sistemas de Seguridad y Cero Derrames</h4>
            <p>Instalación, desinstalación y mantenimiento a Sistemas de Seguridad RSS y Cero Derrames ZSS. Contraderrames y equipamiento para protección ambiental.</p>
          </div>
          <div className="dp-feature">
            <h4>Programa Tullbox In Situ</h4>
            <p>Centro de servicio integral instalado en planta, con 847 partidas de herramientas y 4,311 partidas de consumibles para atención continua 24/7.</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
