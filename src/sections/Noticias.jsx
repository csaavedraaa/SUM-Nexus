import './Noticias.css'

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
    </section>
  )
}
