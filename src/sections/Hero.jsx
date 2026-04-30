import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const SLIDES = [
  {
    img: '/hero-oil.jpg',
    badge: 'Sector Petrolero',
    h1: ['Un Solo', 'PROVEEDOR', 'Para Todo'],
    sub: 'Soluciones integrales para exploración, producción y refinación de petróleo y gas en México.',
    accentColor: 'var(--cyan2)',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop',
    badge: 'Sector Naval',
    h1: ['7 Puertos', 'ESTRATÉGICOS', 'en México'],
    sub: 'Cubrimos la red de puertos mexicanos: desde contenedores hasta hidrocarburos y productos químicos.',
    accentColor: '#00c4f0',
  },
  {
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80&fit=crop',
    badge: 'Sector Energético',
    h1: ['Energía', 'RENOVABLE', 'Sostenible'],
    sub: 'Solar, eólica, hidroeléctrica y geotérmica. Expertos en modernización energética de México.',
    accentColor: '#00e87a',
  },
  {
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80&fit=crop',
    badge: 'Metal-Mecánico',
    h1: ['Ingeniería', 'INDUSTRIAL', 'Clase Mundial'],
    sub: 'Fabricación, ingeniería, diseño, mantenimiento y logística. Marcas líderes a tu disposición.',
    accentColor: 'var(--amber2)',
  },
]

const STATS = [
  { num: '7',   sup: '+',  label: 'Ubicaciones' },
  { num: '100', sup: '%',  label: 'Mexicana'    },
  { num: '4',   sup: '',   label: 'Sectores'    },
  { num: '24',  sup: '/7', label: 'Soporte', amber: true },
]

function scrollToId(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
}

/* ─────────────────────────────────────────────────────────────
   BLOB  — capa absoluta independiente, sobre la imagen,
   bajo el texto. Sin textos ni puntos conectados.
───────────────────────────────────────────────────────────── */
function HeroBlob() {
  return (
    <div className="hero-blob-layer" aria-hidden="true">
      <svg
        className="hero-blob-svg"
        viewBox="0 0 520 420"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Blob 1 — naranja sólido-semiopaco, tamaño generoso */}
        <path fill="rgba(244,121,32,0.55)">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            values="
              M260,60 C340,30 450,80 470,170 C492,265 430,360 330,390 C225,420 110,380 70,290 C28,196 60,100 150,65 C188,50 222,78 260,60Z;
              M255,50 C345,22 460,85 475,180 C492,278 425,368 318,395 C208,422 98,378 62,282 C24,184 65,90 162,58 C198,46 218,72 255,50Z;
              M265,68 C348,38 455,88 472,178 C490,270 428,362 322,390 C212,418 100,374 66,284 C30,192 68,98 160,64 C195,50 232,82 265,68Z;
              M258,55 C342,26 458,82 473,175 C490,270 427,365 320,392 C210,420 100,377 64,285 C26,190 62,94 158,62 C194,48 226,76 258,55Z;
              M260,60 C340,30 450,80 470,170 C492,265 430,360 330,390 C225,420 110,380 70,290 C28,196 60,100 150,65 C188,50 222,78 260,60Z"
          />
        </path>

        {/* Blob 2 — cyan, ligeramente desplazado, más opaco */}
        <path fill="rgba(0,155,219,0.45)">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            values="
              M240,90 C310,62 410,105 428,195 C446,285 390,368 298,388 C202,410 108,368 78,282 C46,192 85,112 172,86 C204,74 218,106 240,90Z;
              M248,78 C322,52 418,100 434,192 C450,284 392,370 296,390 C196,412 100,372 72,284 C42,194 84,108 175,80 C208,68 226,94 248,78Z;
              M236,96 C308,68 415,108 430,198 C446,290 388,372 294,392 C198,414 104,372 76,284 C46,196 88,114 174,88 C206,76 216,108 236,96Z;
              M240,90 C310,62 410,105 428,195 C446,285 390,368 298,388 C202,410 108,368 78,282 C46,192 85,112 172,86 C204,74 218,106 240,90Z"
          />
        </path>

        {/* Blob 3 — naranja más oscuro, borde del compositing */}
        <path fill="rgba(244,121,32,0.30)">
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            values="
              M270,100 C335,75 418,118 432,202 C446,288 392,358 305,375 C215,392 128,352 100,272 C70,190 108,118 192,96 C222,86 244,118 270,100Z;
              M262,92 C330,66 420,112 436,198 C452,286 396,358 308,376 C218,394 128,356 100,272 C70,188 110,116 194,92 C225,80 240,112 262,92Z;
              M270,100 C335,75 418,118 432,202 C446,288 392,358 305,375 C215,392 128,352 100,272 C70,190 108,118 192,96 C222,86 244,118 270,100Z"
          />
        </path>
      </svg>
    </div>
  )
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

      {/* CAPA 1 — Imagen de fondo */}
      {SLIDES.map((sl, i) => (
        <div key={i} className={`hero-slide${i === cur ? ' active' : ''}`}>
          <img className="hero-bg" src={sl.img} alt={sl.badge} />
        </div>
      ))}

      {/* CAPA 2 — Overlay oscuro izquierda */}
      <div className="hero-overlay" />

      {/* CAPA 3 — Blob animado (sobre imagen, bajo texto) */}
      <HeroBlob />

      {/* CAPA 4 — Texto sobre el blob */}
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
          <button className="btn-main" onClick={() => scrollToId('#contacto')}>
            Solicitar cotización
          </button>
          <button className="btn-sec white" onClick={() => scrollToId('#sectores')}>
            Explorar →
          </button>
        </div>
      </div>

      {/* Controles del carrusel */}
      <button className="car-prev" onClick={() => go(cur - 1)} aria-label="Anterior">‹</button>
      <button className="car-next" onClick={() => go(cur + 1)} aria-label="Siguiente">›</button>

      <div className="car-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`car-dot${i === cur ? ' active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

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
