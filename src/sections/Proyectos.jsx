import './Proyectos.css'

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
    </section>
  )
}
