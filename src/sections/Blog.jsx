import './Blog.css'

const ARTICLES = [
  {
    tag: 'Supply Chain',
    tagColor: 'var(--cyan)',
    title: 'S&OP en la Industria Petrolera: Cómo planear el suministro cuando la demanda es impredecible',
    exc: 'La planificación de ventas y operaciones en sectores críticos enfrenta retos únicos: ventanas de tiempo estrechas, materiales con largos lead times y cero tolerancia al desabasto.',
    author: 'Equipo SUMIMSA',
    date: 'Mar 2025',
    readTime: '7 min',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&fit=crop',
    featured: true,
  },
  {
    tag: 'Digitalización',
    tagColor: 'var(--amber)',
    title: '5 indicadores clave para medir la eficiencia de tu cadena de suministro industrial',
    exc: 'OTIF, Fill Rate, DIO, Cash-to-Cash Cycle y Perfect Order Rate. Los KPIs que todo director de Supply Chain debe tener en su dashboard.',
    author: 'SUMIMSA Analytics',
    date: 'Feb 2025',
    readTime: '5 min',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
    featured: false,
  },
  {
    tag: 'Industria 4.0',
    tagColor: 'var(--green)',
    title: 'De la bodega al tablero: cómo digitalizamos el inventario Tullbox con IoT',
    exc: 'El caso real de cómo SUMIMSA implementó sensores, códigos QR y un dashboard en tiempo real para gestionar herramienta industrial en campo.',
    author: 'Equipo Tullbox',
    date: 'Ene 2025',
    readTime: '8 min',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&fit=crop',
    featured: false,
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Conocimiento Industrial</span>
          </div>
          <h2 className="s-h2">Blog &amp;<br /><em>Contenido</em></h2>
          <p className="s-lead">
            Insights sobre Supply Chain, S&OP, digitalización industrial
            y buenas prácticas en los sectores que atendemos.
          </p>
        </div>

        <div className="blog-grid reveal d1">
          {ARTICLES.map((a, i) => (
            <div key={i} className={`blog-card${a.featured ? ' blog-featured' : ''}`}>
              <div className={`blog-img-wrap${a.featured ? ' featured' : ''}`}>
                <img src={a.img} alt={a.title} loading="lazy" className="blog-img" />
                <div className="blog-img-overlay" />
                <span className="blog-tag-float" style={{ background: a.tagColor }}>
                  {a.tag}
                </span>
              </div>
              <div className="blog-body">
                <div className={`blog-title${a.featured ? ' lg' : ''}`}>{a.title}</div>
                <p className="blog-exc">{a.exc}</p>
                <div className="blog-meta">
                  <span className="blog-author">
                    <span className="blog-avatar">👤</span>
                    {a.author}
                  </span>
                  <div className="blog-meta-right">
                    <span className="blog-read">{a.readTime}</span>
                    <span className="blog-date">{a.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
