import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const SLIDES = [
  {
    img: '/img/Landing/POZO.webp',
    badge: 'Sector Petrolero',
    h1: ['Un Solo', 'PROVEEDOR', 'Para Todo'],
    sub: 'Soluciones integrales para exploración, producción y refinación de petróleo y gas en México.',
    accentColor: 'var(--cyan2)',
  },
  {
    img: '/img/Landing/INDUSTRIA.webp',
    badge: 'Sector Naval',
    h1: ['7 Puertos', 'ESTRATÉGICOS', 'en México'],
    sub: 'Cubrimos la red de puertos mexicanos: desde transporte de contenedores hasta tráfico de hidrocarburos.',
    accentColor: '#00c4f0',
  },
  {
    img: '/img/Landing/EOLICA.webp',
    badge: 'Sector Energético',
    h1: ['Energía', 'RENOVABLE', 'Sostenible'],
    sub: 'Solar, eólica, hidroeléctrica y geotérmica. Expertos en inspección para la modernización energética.',
    accentColor: '#00e87a',
  },
  {
    img: '/img/Landing/IZAJE.webp',
    badge: 'Metal-Mecánico',
    h1: ['Ingeniería', 'INDUSTRIAL', 'Clase Mundial'],
    sub: 'Fabricación, ingeniería, diseño, mantenimiento y logística. Marcas líderes a tu disposición.',
    accentColor: 'var(--amber2)',
  },
]

const STATS = [
  { num: '7', sup: '+', label: 'Ubicaciones estratégicas' },
  { num: '100', sup: '%', label: 'Empresa mexicana' },
  { num: '4', sup: '',  label: 'Sectores industriales' },
  { num: '24', sup: '/7', label: 'Soporte operativo', amber: true },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
}

export default function Hero() {
  const [cur, setCur] = useState(0)
  const timerRef = useRef(null)
  const total = SLIDES.length

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

  const s = SLIDES[cur]

  return (
    <section id="hero" className="hero">
      {/* Slides */}
      {SLIDES.map((sl, i) => (
        <div key={i} className={`hero-slide${i === cur ? ' active' : ''}`}>
          <img className="hero-bg" src={sl.img} alt={sl.badge} />
        </div>
      ))}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge" style={{ color: s.accentColor }}>
          <span className="hero-badge-line" style={{ background: s.accentColor }} />
          {s.badge}
        </div>
        <h1 className="hero-h1">
          <span>{s.h1[0]}</span>
          <em style={{ WebkitTextStrokeColor: s.accentColor }}>{s.h1[1]}</em>
          <span>{s.h1[2]}</span>
        </h1>
        <p className="hero-sub">{s.sub}</p>
        <div className="hero-btns">
          <button className="btn-main" onClick={() => scrollTo('#contacto')}>Solicitar cotización</button>
          <button className="btn-sec white" onClick={() => scrollTo('#sectores')}>Explorar sectores →</button>
        </div>
      </div>

      {/* Arrows */}
      <button className="car-prev" onClick={() => go(cur - 1)}>‹</button>
      <button className="car-next" onClick={() => go(cur + 1)}>›</button>

      {/* Dots */}
      <div className="car-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`car-dot${i === cur ? ' active' : ''}`} onClick={() => go(i)} />
        ))}
      </div>

      {/* Progress bar */}
      <div key={cur} className="car-prog" />

      {/* Stats bar */}
      <div className="stats-bar">
        {STATS.map((st, i) => (
          <div key={i} className="st">
            <div className="st-num" style={st.amber ? { color: 'var(--amber)' } : {}}>
              {st.num}<span>{st.sup}</span>
            </div>
            <div className="st-lbl">{st.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
