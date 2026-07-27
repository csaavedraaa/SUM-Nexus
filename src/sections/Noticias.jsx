import { useState, useEffect, useRef } from 'react'
import DetailPage from '../components/DetailPage'
import './Noticias.css'

const NEWS = [
  {
    cat: 'Sector Petrolero',
    catColor: 'var(--cyan)',
    title: 'SUMIMSA amplía servicios en plataformas offshore del Golfo',
    exc: 'Nuevas alianzas estratégicas refuerzan nuestra presencia en exploración y producción de hidrocarburos.',
    date: 'ENE 2025',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=1400&q=80&fit=crop',
    detalle: {
      lead: 'SUMIMSA amplía su cartera de servicios en plataformas offshore del Golfo de México con nuevas alianzas estratégicas.',
      body: (
        <>
          <p>Las nuevas capacidades incluyen suministro de herramienta certificada para zonas ATEX, EPP especializado y programas de consignación en plataforma. Con esta expansión, SUMIMSA refuerza su posición como el proveedor integral número uno para la industria petrolera offshore en el Golfo de México.</p>
          <h3>Nuevas capacidades disponibles</h3>
          <p>El portafolio ampliado cubre herramienta certificada ATEX, equipos de izaje para ambiente marino, EPP especializado para trabajo en plataforma y programas de inventario consignado sin costo inicial para el cliente.</p>
          <div className="dp-grid">
            <div className="dp-feature"><h4>Herramienta ATEX</h4><p>Certificada para zonas clasificadas en exploración y producción offshore.</p></div>
            <div className="dp-feature"><h4>Consignación en Plataforma</h4><p>Inventario administrado directamente en la plataforma, sin costo inicial.</p></div>
            <div className="dp-feature"><h4>Respuesta &lt;24 h</h4><p>Logística especializada desde Tampico, Ciudad del Carmen y Paraíso.</p></div>
            <div className="dp-feature"><h4>EPP Offshore</h4><p>Marcas MSA, Honeywell y 3M para ambientes de alto riesgo.</p></div>
          </div>
        </>
      ),
    },
  },
  {
    cat: 'Energía Renovable',
    catColor: 'var(--green)',
    title: 'SUMIMSA entra al sector de energías renovables',
    exc: 'Sumamos esfuerzos para apoyar proyectos eólicos y solares en el norte del país.',
    date: 'OCT 2024',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80&fit=crop',
    detalle: {
      lead: 'SUMIMSA da un paso estratégico hacia la transición energética sumando el sector de energías renovables a su portafolio.',
      body: (
        <>
          <p>Proyectos eólicos en Tamaulipas y Nuevo León con herramienta especializada y EPP para trabajo en altura. Este movimiento estratégico posiciona a SUMIMSA como un aliado clave en la modernización energética de México.</p>
          <h3>Proyectos en marcha</h3>
          <p>Actualmente atendemos parques eólicos en el corredor eólico de Tamaulipas y proyectos solares en Sonora y Chihuahua. Nuestro portafolio incluye herramienta de torque certificada, sistemas de izaje para aerogeneradores y EPP EN 361 para trabajos en altura.</p>
          <div className="dp-grid">
            <div className="dp-feature"><h4>Parques Eólicos</h4><p>Tamaulipas, Nuevo León y Oaxaca. EPP y herramienta para mantenimiento de aerogeneradores.</p></div>
            <div className="dp-feature"><h4>Plantas Solares</h4><p>Sonora, Chihuahua y Baja California. Herramienta para instalación y mantenimiento fotovoltaico.</p></div>
          </div>
        </>
      ),
    },
  },
  {
    cat: 'Naval',
    catColor: 'var(--cyan)',
    title: 'Nueva sucursal en Ciudad del Carmen',
    exc: 'Séptima ubicación consolida nuestra cobertura en el sureste mexicano y el Golfo.',
    date: 'NOV 2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&fit=crop',
    detalle: {
      lead: 'Con la apertura de nuestra séptima ubicación en Ciudad del Carmen, Campeche, SUMIMSA consolida su red de suministro en el sur del Golfo de México.',
      body: (
        <>
          <p>La nueva sucursal atiende con mayor agilidad el área de Cantarell, la zona de mayor actividad de plataformas offshore en el sureste del Golfo. Con esta apertura, completamos la red de cobertura desde Tampico hasta Paraíso, cubriendo todos los puertos clave del Golfo.</p>
          <h3>Ubicación estratégica</h3>
          <p>Ciudad del Carmen es el principal hub logístico para las operaciones offshore del sur del Golfo. Nuestra nueva sucursal permite entregas en menos de 4 horas a los muelles de embarque y coordinación directa con las plataformas del Complejo Cantarell.</p>
          <div className="dp-grid">
            <div className="dp-feature"><h4>7 Plazas activas</h4><p>Red completa desde Tampico hasta Paraíso cubriendo el Golfo de México.</p></div>
            <div className="dp-feature"><h4>Entrega &lt;4 h</h4><p>Despacho directo a muelles de embarque en Ciudad del Carmen.</p></div>
          </div>
        </>
      ),
    },
  },
]

export default function Noticias() {
  const [cur, setCur] = useState(0)
  const [openNoticia, setOpenNoticia] = useState(null)
  const timerRef = useRef(null)
  const total = NEWS.length

  useEffect(() => {
    document.title = 'Noticias — SUMIMSA'
    return () => { document.title = 'SUMIMSA — Un Solo Proveedor' }
  }, [])

  const go = (n) => {
    setCur(((n % total) + total) % total)
    resetTimer()
  }
  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCur(c => (c + 1) % total), 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const n = NEWS[cur]

  return (
    <section id="noticias" className="noticias-section">

      {/* Slides */}
      {NEWS.map((item, i) => (
        <div key={i} className={`not-slide${i === cur ? ' active' : ''}`}>
          <img className="not-bg" src={item.img} alt={item.cat} loading="lazy" />
        </div>
      ))}

      {/* Overlay */}
      <div className="not-overlay" />

      {/* Content */}
      <div className="not-content">
        <div className="not-eyebrow">
          <div className="eyebrow-line" style={{ background: 'rgba(255,255,255,.5)' }} />
          <span className="not-eyebrow-text">Noticias</span>
        </div>
        <h2 className="not-h2">Últimas<br /><em>novedades</em></h2>
        <div className="not-meta">
          <span className="not-cat" style={{ color: n.catColor }}>
            <span className="not-cat-line" style={{ background: n.catColor }} />
            {n.cat}
          </span>
          <span className="not-date">{n.date}</span>
        </div>
        <div className="not-title">{n.title}</div>
        <p className="not-exc">{n.exc}</p>
        <button className="not-link" onClick={() => setOpenNoticia(n)}>
          Leer más <em>→</em>
        </button>
      </div>

      {/* Arrows */}
      <button className="car-prev" onClick={() => go(cur - 1)}>‹</button>
      <button className="car-next" onClick={() => go(cur + 1)}>›</button>

      {/* Dots */}
      <div className="not-dots">
        {NEWS.map((_, i) => (
          <button key={i} className={`car-dot${i === cur ? ' active' : ''}`} onClick={() => go(i)} />
        ))}
      </div>

      {/* Progress bar */}
      <div key={cur} className="car-prog" />

      {openNoticia && (
        <DetailPage
          isOpen={!!openNoticia}
          onClose={() => setOpenNoticia(null)}
          eyebrow={openNoticia.cat}
          title={openNoticia.title}
          lead={openNoticia.detalle.lead}
        >
          <img className="dp-img" src={openNoticia.img} alt={openNoticia.title} />
          <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: 32 }}>
            {openNoticia.date}
          </p>
          {openNoticia.detalle.body}
        </DetailPage>
      )}
    </section>
  )
}
