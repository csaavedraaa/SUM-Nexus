import './Catalogos.css'

const CATS = [
  {
    title: 'Petrolero',
    desc: 'Herramientas y equipos para exploración y producción',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&q=80&fit=crop',
  },
  {
    title: 'Naval',
    desc: 'Suministros y equipamiento para operaciones marítimas',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
  },
  {
    title: 'Metal-Mecánico',
    desc: 'Herramienta industrial y equipos de manufactura',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&q=80&fit=crop',
  },
]

const FLIP_URL = 'https://online.fliphtml5.com/Sumimsa/wiem/#p=8'

export default function Catalogos() {
  return (
    <section id="catalogs" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Catálogos</span></div>
          <h2 className="s-h2">Nuestros<br /><em>productos</em></h2>
        </div>

        <div className="cat-layout reveal d1">
          {/* Main CTA card */}
          <div className="cat-main-card">
            <div>
              <h3 className="cat-main-title">📚 Catálogo Digital Interactivo</h3>
              <p className="cat-main-sub">Nuestro catálogo completo en formato de revista digital.</p>
              <a href={FLIP_URL} target="_blank" rel="noopener noreferrer" className="btn-main"
                style={{ marginTop: 18, display: 'inline-block', fontSize: '.82rem', padding: '11px 26px' }}>
                Ver catálogo completo ↗
              </a>
            </div>
          </div>

          {/* Sector cards */}
          {CATS.map(c => (
            <a key={c.title} href={FLIP_URL} target="_blank" rel="noopener noreferrer" className="cat-card">
              <div className="cat-img-wrap">
                <img src={c.img} alt={c.title} loading="lazy" className="cat-img" />
                <div className="cat-img-overlay" />
              </div>
              <div className="cat-body">
                <div className="cat-title">{c.title}</div>
                <p className="cat-desc">{c.desc}</p>
                <span className="cat-link">Ver catálogo →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="cat-rec reveal d2">
          <span className="cat-rec-icon">💡</span>
          <div>
            <h5>Recomendación de plataforma</h5>
            <p>Para una experiencia más moderna te recomendamos <strong>Issuu</strong> (issuu.com) o <strong>Publuu</strong> (publuu.com) — ambos gratuitos, con visualización tipo revista y mejor rendimiento en móvil.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
