import { useState } from 'react'
import DetailPage from '../components/DetailPage'
import './Noticias.css'

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

        <div className="noticias-grid reveal d1">
          {NEWS.map(n => (
            <div key={n.title} className="noticia-card">
              <div className="noticia-img-wrap">
                <img src={n.img} alt={n.cat} loading="lazy" />
                <div className="noticia-img-overlay" />
              </div>
              <div className="noticia-body">
                <div className="noticia-cat" style={{color: n.catColor}}>{n.cat}</div>
                <div className="noticia-titulo">{n.title}</div>
                <p className="noticia-exc">{n.exc}</p>
                <div className="noticia-date">{n.date}</div>
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
        <p>SUMIMSA amplía su cartera de servicios en plataformas offshore del Golfo de México con nuevas alianzas estratégicas. Las nuevas capacidades incluyen suministro de herramienta certificada para zonas ATEX, EPP especializado y programas de consignación en plataforma.</p>
        <h3>NOV 2024 — Nueva Sucursal Ciudad del Carmen</h3>
        <p>Con la apertura de nuestra séptima ubicación en Ciudad del Carmen, Campeche, SUMIMSA consolida su red de suministro en el sur del Golfo de México, atendiendo con mayor agilidad el área de Cantarell.</p>
        <h3>OCT 2024 — Entrada al Sector Energías Renovables</h3>
        <p>SUMIMSA da un paso estratégico hacia la transición energética sumando el sector de energías renovables a su portafolio. Proyectos eólicos en Tamaulipas y Nuevo León con herramienta especializada y EPP para trabajo en altura.</p>
        <div className="dp-grid">
          <div className="dp-feature"><h4>ABR 2025 — Expansión Offline</h4><p>Evaluamos nuevas plazas en Coatzacoalcos y Villahermosa.</p></div>
          <div className="dp-feature"><h4>MAR 2025 — Tullbox Digital</h4><p>Lanzamiento de la app Tullbox para control de consumos desde móvil.</p></div>
          <div className="dp-feature"><h4>FEB 2025 — Portal de Clientes</h4><p>Nueva plataforma digital para colocación de órdenes y consulta de catálogo 24/7.</p></div>
          <div className="dp-feature"><h4>ENE 2025 — Stanley SBD</h4><p>Renovación del acuerdo de distribución exclusiva con Stanley Black & Decker Professional.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}
