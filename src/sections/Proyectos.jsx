import './Proyectos.css'
import DetailPage from '../components/DetailPage'

const PROJS = [
  {
    cat: 'Petrolero',
    title: 'Suministro integral en plataformas offshore del Golfo de México',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=900&q=80&fit=crop',
    large: true,
  },
  {
    cat: 'Naval',
    title: 'Equipamiento de buques en puertos Tampico – Veracruz',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop',
  },
  {
    cat: 'Tullbox',
    title: 'Programa Tullbox In Situ — Planta industrial Tamaulipas',
    img: '/Contenedor_Tullbox.jpg',
  },
  {
    cat: 'Energético',
    title: 'Herramienta para parque eólico norte de México',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80&fit=crop',
  },
  {
    cat: 'Metal-Mecánico',
    title: 'Equipamiento integral de taller — planta automotriz',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80&fit=crop',
  },
]

export default function Proyectos() {
  const [openProy, setOpenProy] = useState(false)
  return (
    <section id="proyectos" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Proyectos</span></div>
          <h2 className="s-h2">Ejecutados<br /><em>con precisión</em></h2>
        </div>
        <div className="proj-grid reveal d1">
          {PROJS.map((p, i) => (
            <div key={i} className={`proj-card${p.large ? ' proj-large' : ''}`}>
              <img className="proj-img" src={p.img} alt={p.cat} loading="lazy" />
              <div className="proj-overlay" />
              <div className="proj-body">
                <div className="proj-cat">
                  <span className="proj-cat-line" />{p.cat}
                </div>
                <div className="proj-title">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <div className="ver-mas-wrap reveal d2"><button className="btn-ver-mas" onClick={() => setOpenProy(true)}>Ver todos los proyectos</button></div>

      <DetailPage isOpen={openProy} onClose={() => setOpenProy(false)}
  eyebrow="Proyectos" title="Ejecutados con <em>Precisión</em>"
  lead="Soluciones industriales entregadas con excelencia operativa en los sectores más exigentes de México.">
  <img className="dp-img" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop" alt="Proyectos" />
  <h3>Suministro offshore — Golfo de México</h3>
  <p>Suministro integral a plataformas petroleras offshore incluyendo herramienta de precisión, EPP certificado y consumibles industriales con entregas programadas desde nuestras plazas de Tampico, Ciudad del Carmen y Paraíso.</p>
  <h3>Programa Tullbox — Planta industrial Tamaulipas</h3>
  <p>Instalación y operación de contenedor Tullbox In Situ en planta de manufactura. Resultado: reducción del 85% en tiempo de búsqueda de herramienta y eliminación del 100% de extravíos de herramienta de alto valor.</p>
  <div className="dp-grid">
    <div className="dp-feature"><h4>Naval — Tampico/Veracruz</h4><p>Equipamiento de buques con herramienta de cubierta, seguridad marítima y mantenimiento a bordo.</p></div>
    <div className="dp-feature"><h4>Energético — Norte MX</h4><p>Suministro de herramienta especializada para instalación de aerogeneradores en parque eólico.</p></div>
    <div className="dp-feature"><h4>Metal-Mecánico — Automotriz</h4><p>Equipamiento integral de taller para planta de estampado y ensamble en el noreste del país.</p></div>
    <div className="dp-feature"><h4>Inspección — Refinería</h4><p>Servicios de inspección especializada con equipos certificados para sector refinación PEMEX.</p></div>
  </div>
</DetailPage>
    </section>
  )
}
