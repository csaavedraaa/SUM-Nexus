import './Esquemas.css'

const ITEMS = [
  { num:'01', icon:'🤝', title:'Venta Directa',        desc:'Atención personalizada con nuestros representantes especializados por sector.',        img:'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&fit=crop' },
  { num:'02', icon:'🔒', title:'Consignación',          desc:'Inventario en tus instalaciones sin costo inicial, pago únicamente al consumo.',        img:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80&fit=crop' },
  { num:'03', icon:'📄', title:'Contrato Abierto',      desc:'Contratos marco con precios y condiciones preestablecidas para tus operaciones.',        img:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&fit=crop' },
  { num:'04', icon:'📦', title:'Inventarios Dedicados', desc:'Desarrollo de inventarios específicos adaptados a tus necesidades operativas.',          img:'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80&fit=crop' },
  { num:'05', icon:'🚚', title:'Órdenes Abiertas',      desc:'Suministro mediante órdenes de compra abiertas para mayor flexibilidad.',               img:'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80&fit=crop' },
  { num:'06', icon:'🏭', title:'On Site',               desc:'Despacho de material directamente en tus instalaciones cuando lo necesitas.',           img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&fit=crop' },
]

export default function Esquemas() {
  return (
    <section className="section section-navy">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Esquemas de Comercialización</span>
          </div>
          <h2 className="s-h2">Flexibles.<br /><em>Competitivos.</em></h2>
          <p className="s-lead" style={{color:'rgba(255,255,255,.5)'}}>
            Alta calidad, precios competitivos y excelente servicio personalizado. Así trabaja SUMIMSA.
          </p>
        </div>
        <div className="esq-grid reveal d1">
          {ITEMS.map(item => (
            <div key={item.num} className="esq-card">
              <div className="esq-img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="esq-img-overlay" />
                <span className="esq-img-num">{item.num} —</span>
                <div className="esq-img-icon">{item.icon}</div>
              </div>
              <div className="esq-body">
                <div className="esq-title">{item.title}</div>
                <p className="esq-desc">{item.desc}</p>
              </div>
              <div className="esq-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
