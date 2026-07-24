import { useState, useEffect } from 'react'
import './Esquemas.css'
import ServicioShowroom from '../components/ServicioShowroom'

/* ── Animated SVG hub ───────────────────────────────────────────── */
const NODES = [
  { id: '01', cx: 51,  cy: 90  },   // left  top
  { id: '02', cx: 30,  cy: 160 },   // left  mid
  { id: '03', cx: 51,  cy: 230 },   // left  bot
  { id: '04', cx: 269, cy: 90  },   // right top
  { id: '05', cx: 290, cy: 160 },   // right mid
  { id: '06', cx: 269, cy: 230 },   // right bot
]
const INNER = [
  { id: '01', x: 93,  y: 117 },
  { id: '02', x: 80,  y: 160 },
  { id: '03', x: 93,  y: 203 },
  { id: '04', x: 227, y: 117 },
  { id: '05', x: 240, y: 160 },
  { id: '06', x: 227, y: 203 },
]

function HubSVG({ hoverId, items }) {
  const map = Object.fromEntries(items.map(i => [i.id, i]))
  return (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="esq-hub-svg">
      <defs>
        <radialGradient id="esq-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#0d2550" />
          <stop offset="100%" stopColor="#080f20" />
        </radialGradient>
        <radialGradient id="esq-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#009bdb" stopOpacity="0.32" />
          <stop offset="65%"  stopColor="#009bdb" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#009bdb" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="esq-hex-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#00c4f0" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00c4f0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <circle cx="160" cy="160" r="130" fill="url(#esq-bg)" />

      {/* Rotating elements — local origin = hub center */}
      <g transform="translate(160,160)">

        {/* Outer ring CW slow */}
        <g className="esq-svg-ring esq-svg-ring-outer">
          <circle r="128" fill="none" stroke="rgba(0,155,219,0.18)" strokeWidth="1" strokeDasharray="3 9" />
          <circle cx="0" cy="-128" r="2.5" fill="rgba(0,155,219,0.7)" />
        </g>

        {/* Mid ring CCW */}
        <g className="esq-svg-ring esq-svg-ring-mid">
          <circle r="100" fill="none" stroke="rgba(0,196,240,0.22)" strokeWidth="1.5" strokeDasharray="18 12" />
          <circle cx="-100" cy="0" r="3" fill="#00c4f0" opacity="0.8" />
        </g>

        {/* Inner ring CW fast */}
        <g className="esq-svg-ring esq-svg-ring-inner">
          <circle r="72" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5 15" />
        </g>

        {/* Radar sweep */}
        <g className="esq-svg-ring esq-svg-radar">
          <line x1="0" y1="0" x2="0" y2="-128"
            stroke="rgba(0,196,240,0.55)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="0" cy="-128" r="3" fill="#00c4f0" opacity="0.95" />
        </g>
      </g>

      {/* Glow core */}
      <circle cx="160" cy="160" r="88" fill="url(#esq-glow)" className="esq-svg-pulse" />

      {/* Connection lines: outer node → inner circle */}
      {NODES.map((n, i) => {
        const inn = INNER[i]
        const item = map[n.id]
        const active = hoverId === n.id
        return (
          <line key={n.id}
            x1={n.cx} y1={n.cy} x2={inn.x} y2={inn.y}
            stroke={active ? item.accent : 'rgba(255,255,255,0.06)'}
            strokeWidth={active ? 1.5 : 0.8}
            strokeDasharray="4 4"
            style={{ transition: 'stroke .3s, stroke-width .3s' }}
          />
        )
      })}

      {/* Center hex */}
      <circle cx="160" cy="160" r="60" fill="url(#esq-hex-glow)" />
      <polygon
        points="160,108 205,134 205,186 160,212 115,186 115,134"
        fill="rgba(0,155,219,0.09)"
        stroke="rgba(0,196,240,0.38)"
        strokeWidth="1.5"
        className="esq-svg-hex"
      />

      {/* Mascot — centered, floats gently */}
      <image
        href="/mascota.png"
        x="110" y="90"
        width="100" height="140"
        preserveAspectRatio="xMidYMid meet"
        className="esq-svg-mascot"
      />

      {/* Nodes */}
      {NODES.map(n => {
        const item = map[n.id]
        const active = hoverId === n.id
        return (
          <g key={n.id}>
            <circle cx={n.cx} cy={n.cy} r="3.5"
              fill={active ? item.accent : 'rgba(255,255,255,0.35)'}
              style={{
                transform: active ? 'scale(1.55)' : 'scale(1)',
                transformBox: 'fill-box',
                transformOrigin: 'center',
                transition: 'fill .3s, transform .3s',
                filter: active ? `drop-shadow(0 0 7px ${item.accent})` : 'none',
              }}
            />
          </g>
        )
      })}
    </svg>
  )
}

const ITEMS = [
  {
    id: '01', titulo: 'Venta Directa', accent: '#009bdb',
    resumen: 'Atención personalizada con nuestros representantes especializados por sector.',
    detalle: {
      intro: 'Atención personalizada con representantes comerciales especializados por sector. Visitas a instalaciones, cotizaciones en sitio y seguimiento postventa. Ideal para compras puntuales o proyectos específicos donde valoras el trato directo con un experto.',
      beneficios: [
        'Representantes especializados por sector industrial',
        'Cotizaciones y visitas en sitio',
        'Seguimiento postventa personalizado',
        'Ideal para compras puntuales o proyectos específicos',
      ],
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&fit=crop',
    },
  },
  {
    id: '02', titulo: 'Consignación', accent: '#00c4f0',
    resumen: 'Inventario en tus instalaciones sin costo inicial, pago únicamente al consumo.',
    detalle: {
      intro: 'SUMIMSA coloca inventario en tus instalaciones sin costo inicial. Solo pagas lo que consumes. Es el modelo ideal para mantener disponibilidad inmediata de herramienta y consumibles críticos sin comprometer tu capital de trabajo.',
      beneficios: [
        'Sin costo inicial de inventario',
        'Pago únicamente al consumo',
        'Disponibilidad inmediata de herramienta crítica',
        'No compromete tu capital de trabajo',
      ],
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&fit=crop',
    },
  },
  {
    id: '03', titulo: 'Contrato Abierto', accent: '#f47920',
    resumen: 'Contratos marco con precios y condiciones preestablecidas para tus operaciones.',
    detalle: {
      intro: 'Negociamos condiciones comerciales (precios, plazos, niveles de servicio) una sola vez y las dejamos en un contrato marco. A partir de ahí, tus órdenes de compra se atienden automáticamente sin renegociar cada vez. Elimina burocracia y reduce tiempos de ciclo de compra.',
      beneficios: [
        'Precios y condiciones preestablecidas',
        'Órdenes de compra atendidas sin renegociar',
        'Elimina burocracia en cada compra',
        'Reduce tiempos de ciclo de compra',
      ],
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&fit=crop',
    },
  },
  {
    id: '04', titulo: 'Inventarios Dedicados', accent: '#2dd4bf',
    resumen: 'Desarrollo de inventarios específicos adaptados a tus necesidades operativas.',
    detalle: {
      intro: 'Desarrollamos un plan de inventario específico para tu operación: identificamos los SKUs críticos, definimos mínimos y máximos, y SUMIMSA garantiza la disponibilidad. Tú nunca te quedas sin los materiales que necesitas para operar.',
      beneficios: [
        'Identificación de SKUs críticos',
        'Definición de mínimos y máximos',
        'Disponibilidad garantizada',
        'Inventario adaptado a tu operación',
      ],
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&fit=crop&sat=-30',
    },
  },
  {
    id: '05', titulo: 'Órdenes Abiertas', accent: '#009bdb',
    resumen: 'Suministro mediante órdenes de compra abiertas para mayor flexibilidad.',
    detalle: {
      intro: 'Una orden de compra por el monto o período acordado. Vas consumiendo contra ella según necesidad sin generar nuevas órdenes, lo que te da mayor flexibilidad operativa y administrativa.',
      beneficios: [
        'Una sola orden por monto o período acordado',
        'Consumo contra la orden según necesidad',
        'Sin generar nuevas órdenes por cada compra',
        'Mayor flexibilidad operativa',
      ],
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80&fit=crop',
    },
  },
  {
    id: '06', titulo: 'On Site', accent: '#ffb347',
    resumen: 'Despacho de material directamente en tus instalaciones cuando lo necesitas.',
    detalle: {
      intro: 'Un representante SUMIMSA en tus instalaciones. Gestiona el inventario, identifica necesidades y coordina el suministro directamente en tu planta, con despacho de material cuando lo necesitas.',
      beneficios: [
        'Representante SUMIMSA en tus instalaciones',
        'Gestión de inventario en sitio',
        'Identificación proactiva de necesidades',
        'Despacho de material directo en planta',
      ],
      img: '/img/servicios/on-site.png',
    },
  },
]

export default function Esquemas() {
  const [activo, setActivo] = useState(null)
  const [displayActivo, setDisplayActivo] = useState(null)
  const [hoverId, setHoverId] = useState(null)
  const left = ITEMS.slice(0, 3)
  const right = ITEMS.slice(3, 6)

  // Conserva el último esquema mostrado mientras cierra, para que la
  // transición de salida anime sobre contenido real en vez de desaparecer de golpe.
  useEffect(() => {
    if (activo) setDisplayActivo(activo)
  }, [activo])

  const scrollContacto = () => {
    setActivo(null)
    const el = document.querySelector('#contacto')
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
  }

  const renderItem = (item, side) => {
    const card = (
      <button
        className="esq-item"
        onClick={() => setActivo(item)}
      >
        <span className="esq-item-num">{item.id}</span>
        <span className="esq-item-body">
          <span className="esq-item-title">{item.titulo}</span>
          <span className="esq-item-desc">{item.resumen}</span>
        </span>
      </button>
    )
    const connector = <span className="esq-connector" />
    const badge = <span className="esq-badge" />

    return (
      <div
        key={item.id}
        className={`esq-row esq-row-${side}${hoverId === item.id ? ' active' : ''}`}
        style={{ '--esq-accent': item.accent }}
        onMouseEnter={() => setHoverId(item.id)}
        onMouseLeave={() => setHoverId(null)}
      >
        {side === 'left'
          ? <>{card}{connector}{badge}</>
          : <>{badge}{connector}{card}</>}
      </div>
    )
  }

  return (
    <section id="esquemas" className="section esq-section">
      <div className="container">
        <div className="esq-header esq-header-left reveal">
          <div className="eyebrow esq-header-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Esquemas de Comercialización</span>
          </div>
          <h2 className="s-h2">Flexibles.<br /><em>Competitivos.</em></h2>
          <p className="s-lead" style={{ color: 'rgba(255,255,255,.5)' }}>
            Alta calidad, precios competitivos y excelente servicio personalizado. Así trabaja SUMIMSA.
          </p>
        </div>

        <div className="esq-orbit reveal d1">
          <div className="esq-col esq-col-left">{left.map(item => renderItem(item, 'left'))}</div>

          <div className="esq-hub">
            <HubSVG hoverId={hoverId} items={ITEMS} />
          </div>

          <div className="esq-col esq-col-right">{right.map(item => renderItem(item, 'right'))}</div>
        </div>
      </div>

      {/* Showroom del esquema */}
      <ServicioShowroom
        servicio={activo || displayActivo}
        isOpen={!!activo}
        onClose={() => setActivo(null)}
        onCotizar={scrollContacto}
      />
    </section>
  )
}
