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

/* ── Blob SVG ── */
function HeroBlob({ accentColor }) {
  return (
    <div className="hero-blob-wrap">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="hero-blob-svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        {/* Outer blob — amber */}
        <path className="blob-outer" fill="rgba(244,121,32,0.12)" stroke="rgba(244,121,32,0.4)" strokeWidth="1.5">
          <animate attributeName="d" dur="9s" repeatCount="indefinite"
            values="
              M200,60 C260,40 340,70 360,130 C380,190 340,260 270,280 C200,300 120,270 90,210 C55,145 70,90 130,65 C155,55 175,65 200,60Z;
              M200,50 C270,30 355,75 365,145 C375,210 325,275 255,285 C180,298 105,260 80,195 C52,128 80,75 145,55 C165,48 180,57 200,50Z;
              M200,65 C250,42 335,65 358,125 C382,188 348,265 278,282 C205,300 118,275 88,212 C55,148 68,88 125,66 C150,56 178,72 200,65Z;
              M200,60 C260,40 340,70 360,130 C380,190 340,260 270,280 C200,300 120,270 90,210 C55,145 70,90 130,65 C155,55 175,65 200,60Z"
          />
        </path>

        {/* Inner blob — cyan */}
        <path className="blob-inner" fill="rgba(0,155,219,0.08)" stroke="rgba(0,196,240,0.35)" strokeWidth="1">
          <animate attributeName="d" dur="12s" repeatCount="indefinite"
            values="
              M200,90 C245,72 305,95 320,145 C335,195 305,250 255,262 C200,275 145,252 120,200 C95,148 115,100 160,88 C175,83 188,94 200,90Z;
              M200,82 C250,68 312,98 325,152 C338,205 300,258 248,268 C193,280 138,255 115,202 C90,146 118,96 168,84 C182,79 190,86 200,82Z;
              M200,92 C242,74 308,92 322,143 C338,197 308,252 258,264 C202,278 144,255 118,202 C90,148 112,98 158,87 C172,82 188,96 200,92Z;
              M200,90 C245,72 305,95 320,145 C335,195 305,250 255,262 C200,275 145,252 120,200 C95,148 115,100 160,88 C175,83 188,94 200,90Z"
          />
        </path>

        {/* Pulsing dots */}
        <circle cx="155" cy="120" r="4" fill="rgba(244,121,32,0.8)" className="blob-dot">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="265" cy="105" r="3" fill="rgba(0,196,240,0.8)" className="blob-dot">
          <animate attributeName="r" values="2;5;2" dur="4s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle cx="290" cy="195" r="3.5" fill="rgba(244,121,32,0.6)" className="blob-dot">
          <animate attributeName="r" values="2.5;5.5;2.5" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="140" cy="210" r="3" fill="rgba(0,196,106,0.7)" className="blob-dot">
          <animate attributeName="r" values="2;4.5;2" dur="5s" repeatCount="indefinite" begin="2s"/>
        </circle>

        {/* Connection lines */}
        <line x1="155" y1="120" x2="265" y2="105" stroke="rgba(244,121,32,0.2)" strokeWidth="1" strokeDasharray="4 5">
          <animate attributeName="stroke-dashoffset" values="0;-36" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="265" y1="105" x2="290" y2="195" stroke="rgba(0,155,219,0.2)" strokeWidth="1" strokeDasharray="4 5">
          <animate attributeName="stroke-dashoffset" values="0;-36" dur="4s" repeatCount="indefinite"/>
        </line>

        {/* Labels */}
        <text x="148" y="112" fontFamily="Space Mono, monospace" fontSize="7" fill="rgba(244,121,32,0.7)" letterSpacing="1">MX</text>
        <text x="258" y="98" fontFamily="Space Mono, monospace" fontSize="7" fill="rgba(0,196,240,0.7)" letterSpacing="1">580+</text>
        <text x="282" y="215" fontFamily="Space Mono, monospace" fontSize="7" fill="rgba(244,121,32,0.6)" letterSpacing="1">6 PLAZAS</text>
        <text x="128" y="228" fontFamily="Space Mono, monospace" fontSize="7" fill="rgba(0,196,106,0.6)" letterSpacing="1">ACTIVO</text>
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
      {/* Background slides */}
      {SLIDES.map((sl, i) => (
        <div key={i} className={`hero-slide${i === cur ? ' active' : ''}`}>
          <img className="hero-bg" src={sl.img} alt={sl.badge} />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Left content + blob together */}
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
          <button className="btn-main" onClick={() => scrollToId('#contacto')}>Solicitar cotización</button>
          <button className="btn-sec white" onClick={() => scrollToId('#sectores')}>Explorar →</button>
        </div>

        {/* Blob sits below the text, still inside hero-content */}
        <HeroBlob accentColor={s.accentColor} />
      </div>

      {/* Carousel controls */}
      <button className="car-prev" onClick={() => go(cur - 1)} aria-label="Anterior">‹</button>
      <button className="car-next" onClick={() => go(cur + 1)} aria-label="Siguiente">›</button>

      {/* Dots */}
      <div className="car-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`car-dot${i === cur ? ' active' : ''}`} onClick={() => go(i)} aria-label={`Slide ${i+1}`} />
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
