import { useState } from 'react'
import './Sectores.css'
import DetailPage from '../components/DetailPage'

const SECTORS = [
  {
    num: '01', title: 'Sector Petrolero',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&q=80&fit=crop',
    text: 'La industria petrolera es un pilar de la economía mexicana. SUMIMSA suministra soluciones integrales a empresas de exploración, producción y refinación de petróleo y gas.',
  },
  {
    num: '02', title: 'Sector Naval',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    text: 'Con 7 ubicaciones estratégicas cubrimos la red de puertos mexicanos. Desde transporte de contenedores hasta tráfico de hidrocarburos y productos químicos.',
  },
  {
    num: '03', title: 'Metal-Mecánico',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80&fit=crop',
    text: 'Servicio completo en fabricación, ingeniería, diseño, mantenimiento y logística industrial. Priorizamos condiciones de trabajo seguras y saludables.',
  },
  {
    num: '04', title: 'Sector Energético',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&fit=crop',
    text: 'Solar, eólica, hidroeléctrica y geotérmica. Expertos en inspección y pruebas especiales para la eficiencia operativa y modernización energética.',
  },
]

export default function Sectores() {
  const [open, setOpen] = useState(false)
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
        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas" onClick={() => setOpen(true)}>Ver todos los sectores</button>
        </div>
      </div>

      <DetailPage
        isOpen={open} onClose={() => setOpen(false)}
        eyebrow="Sectores que atendemos"
        title="Nuestros <em>Sectores</em>"
        lead="Más de 15 años atendiendo las principales industrias de México con herramientas, equipos y servicios integrales de calidad mundial."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=1200&q=80&fit=crop" alt="Sector Petrolero" />
        <h3>Sector Petrolero</h3>
        <p>La industria petrolera en México es un pilar fundamental de la economía del país. SUMIMSA suministra soluciones integrales a empresas en exploración, producción y refinación de petróleo y gas. Contamos con catálogos especializados, técnicos certificados y acuerdos directos con fabricantes líderes.</p>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Exploración</h4><p>Herramienta especializada para perforación, muestreo y análisis geofísico en campo y plataformas offshore.</p></div>
          <div className="dp-feature"><h4>Producción</h4><p>Equipos de bombeo, válvulas, medición de flujo y seguridad operacional para pozos y plantas de proceso.</p></div>
          <div className="dp-feature"><h4>Refinación</h4><p>Herramienta de mantenimiento predictivo, instrumental de laboratorio y EPP certificado para refinerías.</p></div>
          <div className="dp-feature"><h4>Transporte</h4><p>Accesorios y equipos para pipelines, terminales de almacenamiento y buques tanque.</p></div>
        </div>
        <h3>Sector Naval</h3>
        <p>Con 7 ubicaciones estratégicas en los principales puertos del Golfo de México, SUMIMSA garantiza entregas en tiempo y forma para operaciones marítimas críticas. Atendemos transporte de contenedores, carga a granel e hidrocarburos.</p>
        <h3>Metal-Mecánico</h3>
        <p>Servicio completo en fabricación, ingeniería, diseño, mantenimiento y logística industrial. Personal calificado con respaldo de marcas líderes para cumplir los más exigentes estándares de calidad y seguridad.</p>
        <h3>Sector Energético</h3>
        <p>Nos sumamos a la diversificación energética: solar, eólica, hidroeléctrica y geotérmica. Expertos en inspección y pruebas especiales para la modernización y eficiencia operativa de nuestros clientes en el sector energético.</p>
      </DetailPage>
    </section>
  )
}
