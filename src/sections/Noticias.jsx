import './Noticias.css'
import DetailPage from '../components/DetailPage'

const NEWS = [
  {
    cat: 'Sector Petrolero',
    title: 'SUMIMSA amplía servicios en plataformas offshore del Golfo',
    exc: 'Nuevas alianzas estratégicas refuerzan nuestra presencia en exploración y producción de hidrocarburos.',
    date: 'ENE 2025',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&q=80&fit=crop',
    catColor: 'var(--cyan)',
  },
  {
    cat: 'Energía Renovable',
    title: 'SUMIMSA entra al sector de energías renovables',
    exc: 'Sumamos esfuerzos para apoyar proyectos eólicos y solares en el norte del país.',
    date: 'OCT 2024',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&fit=crop',
    catColor: 'var(--green)',
  },
  {
    cat: 'Naval',
    title: 'Nueva sucursal en Ciudad del Carmen',
    exc: 'Séptima ubicación consolida nuestra cobertura en el sureste mexicano y el Golfo.',
    date: 'NOV 2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    catColor: 'var(--cyan)',
  },
]

export default function Noticias() {
  const [openNews, setOpenNews] = useState(false)
  return (
    <section id="noticias" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Noticias</span></div>
          <h2 className="s-h2">Últimas<br /><em>novedades</em></h2>
        </div>
        <div className="news-grid-wrap reveal d1">
          {NEWS.map(n => (
            <div key={n.title} className="news-card">
              <div className="news-img-wrap">
                <img src={n.img} alt={n.cat} loading="lazy" />
              </div>
              <div className="news-body">
                <div className="news-cat" style={{ color: n.catColor }}>{n.cat}</div>
                <div className="news-title">{n.title}</div>
                <p className="news-exc">{n.exc}</p>
                <div className="news-date">{n.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <a href="https://www.youtube.com/@SUMIMSAOFICIAL" target="_blank" rel="noopener noreferrer"
            className="btn-sec">
            Ver canal YouTube →
          </a>
        </div>
      </div>
    
      <div className="ver-mas-wrap reveal d2" style={{marginTop:28}}><button className="btn-ver-mas" onClick={() => setOpenNews(true)}>Ver todas las noticias</button></div>

      <DetailPage isOpen={openNews} onClose={() => setOpenNews(false)}
  eyebrow="Noticias" title="Últimas <em>Novedades</em>"
  lead="Mantente informado sobre los últimos proyectos, expansiones y logros de SUMIMSA.">
  <h3>SUMIMSA amplía servicios en plataformas offshore del Golfo</h3>
  <p>ENE 2025 — Nuevas alianzas estratégicas con operadores del Golfo de México refuerzan nuestra presencia en el sector de exploración y producción de hidrocarburos, ampliando el catálogo de herramienta especializada disponible para plataformas.</p>
  <h3>Entrada al sector de energías renovables</h3>
  <p>OCT 2024 — SUMIMSA suma esfuerzos para apoyar proyectos eólicos y solares en el norte del país. Herramienta especializada para instalación y mantenimiento de aerogeneradores y paneles fotovoltaicos ya disponible en catálogo.</p>
  <h3>Nueva sucursal en Ciudad del Carmen</h3>
  <p>NOV 2024 — La apertura de nuestra séptima ubicación en Cd. del Carmen, Campeche consolida nuestra cobertura en el sur del Golfo de México, atendiendo la intensa actividad de plataformas offshore y buques de apoyo en la zona.</p>
  <div className="dp-grid">
    <div className="dp-feature"><h4>Canal YouTube</h4><p>Síguenos en YouTube para ver videos de nuestras operaciones, instalaciones Tullbox y eventos corporativos.</p></div>
    <div className="dp-feature"><h4>LinkedIn</h4><p>Actualizaciones, empleos y noticias del sector industrial en nuestro perfil de LinkedIn.</p></div>
  </div>
</DetailPage>
    </section>
  )
}
