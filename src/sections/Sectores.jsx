// ─────────────────────────────────────────────────────────────
// src/sections/Sectores.jsx
// ─────────────────────────────────────────────────────────────
import './Sectores.css'

const SECTORS = [
  {
    num: '01', icon: '🛢️',
    title: 'Sector Petrolero',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&q=80&fit=crop',
    text: 'La industria petrolera es un pilar de la economía mexicana. SUMIMSA suministra soluciones integrales a empresas de exploración, producción y refinación de petróleo y gas.',
  },
  {
    num: '02', icon: '⚓',
    title: 'Sector Naval',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    text: 'Con 7 ubicaciones estratégicas cubrimos la red de puertos mexicanos. Desde transporte de contenedores hasta tráfico de hidrocarburos y productos químicos.',
  },
  {
    num: '03', icon: '⚙️',
    title: 'Metal-Mecánico',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80&fit=crop',
    text: 'Servicio completo en fabricación, ingeniería, diseño, mantenimiento y logística industrial. Priorizamos condiciones de trabajo seguras y saludables.',
  },
  {
    num: '04', icon: '⚡',
    title: 'Sector Energético',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&fit=crop',
    text: 'Solar, eólica, hidroeléctrica y geotérmica. Expertos en inspección y pruebas especiales para la eficiencia operativa y modernización energética.',
  },
]

export default function Sectores() {
  return (
    <section id="sectores" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Sectores que atendemos</span></div>
          <h2 className="s-h2">Líderes en<br /><em>cuatro industrias</em></h2>
          <p className="s-lead">Personal altamente calificado y el respaldo de fabricantes líderes para ofrecer servicio completo en cada sector industrial de México.</p>
        </div>
        <div className="sec-grid reveal d1">
          {SECTORS.map(s => (
            <div key={s.num} className="sec-card">
              <div className="sec-top-bar" />
              <img className="sec-img" src={s.img} alt={s.title} loading="lazy" />
              <div className="sec-img-overlay" />
              <div className="sec-body">
                <div className="sec-num">{s.num} —</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <span className="sec-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
