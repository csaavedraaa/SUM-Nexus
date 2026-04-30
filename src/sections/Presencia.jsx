import './Presencia.css'

const LOCATIONS = [
  { id: 'tampico',   name: 'Tampico',        state: 'Tamps.',  role: 'Matriz',    cx: 252, cy: 195, main: true,  detail: 'Calzada Blanca 1091-B · +52 (833) 369 0070' },
  { id: 'reynosa',   name: 'Reynosa',         state: 'Tamps.',  role: 'Sucursal',  cx: 218, cy: 112, main: false, detail: 'Col. Longoria Prolongación · Frontera norte' },
  { id: 'pozarica',  name: 'Poza Rica',       state: 'Ver.',    role: 'Sucursal',  cx: 238, cy: 218, main: false, detail: 'Zona petrolera norte de Veracruz' },
  { id: 'veracruz',  name: 'Veracruz',        state: 'Ver.',    role: 'Sucursal',  cx: 255, cy: 242, main: false, detail: 'Puerto más activo del Golfo de México' },
  { id: 'paraiso',   name: 'Paraíso',         state: 'Tab.',    role: 'Sucursal',  cx: 288, cy: 256, main: false, detail: 'Hub PEMEX Tabasco · Plataformas offshore' },
  { id: 'carmen',    name: 'Cd. del Carmen',  state: 'Camp.',   role: 'Sucursal',  cx: 308, cy: 248, main: false, detail: 'Sur del Golfo · Plataformas offshore' },
]

const STATS = [
  { num: '580', sup: '+', label: 'Colaboradores' },
  { num: '6',   sup: '',  label: 'Ubicaciones'   },
  { num: '15',  sup: '+', label: 'Años operando' },
  { num: '4',   sup: '',  label: 'Sectores'      },
]

import { useState } from 'react'
import DetailPage from '../components/DetailPage'

export default function Presencia() {
  const [openDetail, setOpenDetail] = useState(false)
  const [active, setActive] = useState(null)
  const loc = active ? LOCATIONS.find(l => l.id === active) : null

  return (
    <section id="presencia" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Presencia Nacional</span>
          </div>
          <h2 className="s-h2">México,<br /><em>nuestro territorio</em></h2>
          <p className="s-lead">
            Más de 580 colaboradores en 6 ubicaciones estratégicas cubriendo
            las zonas industriales y portuarias más importantes del Golfo de México.
          </p>
        </div>

        <div className="pres-layout reveal d1">
          {/* LEFT — stats + badges */}
          <div className="pres-left">
            <div className="pres-stats-grid">
              {STATS.map(s => (
                <div key={s.label} className="pres-stat">
                  <div className="pres-stat-num">{s.num}<em>{s.sup}</em></div>
                  <div className="pres-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="pres-loc-list">
              {LOCATIONS.map(l => (
                <button
                  key={l.id}
                  className={`pres-loc-btn${active === l.id ? ' active' : ''}${l.main ? ' main' : ''}`}
                  onClick={() => setActive(active === l.id ? null : l.id)}
                >
                  <span className="pres-loc-dot" />
                  <div className="pres-loc-text">
                    <span className="pres-loc-name">{l.name}, {l.state}</span>
                    <span className="pres-loc-role">{l.role}</span>
                  </div>
                  <span className="pres-loc-chevron">›</span>
                </button>
              ))}
            </div>

            {loc && (
              <div className="pres-detail-box">
                <div className="pres-detail-label">{loc.role} — {loc.name}</div>
                <p className="pres-detail-text">{loc.detail}</p>
              </div>
            )}

            <div className="pres-note">
              <p>Evaluando nuevas plazas en Coatzacoalcos y Villahermosa para 2025–2026.</p>
            </div>
          </div>

          {/* RIGHT — Real Mexico map SVG */}
          <div className="pres-map-wrap">
            <div className="pres-map-header">
              <span className="pres-map-dot" />
              Red de operaciones — República Mexicana
            </div>

            <svg
              className="mexico-map"
              viewBox="0 0 500 400"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Mapa de México con ubicaciones SUMIMSA"
            >
              {/* ── Mexico mainland (accurate simplified path) ── */}
              <g fill="#eef2f8" stroke="#c8d4e8" strokeWidth="1">
                {/* Main body */}
                <path d="
                  M 68,62  L 88,58  L 110,52 L 135,48 L 162,44 L 190,42
                  L 218,40 L 245,39 L 270,40 L 293,43 L 314,48 L 332,54
                  L 348,62 L 360,72 L 368,84 L 372,96 L 370,108 L 364,118
                  L 374,124 L 384,132 L 392,142 L 396,154 L 394,166
                  L 388,176 L 378,184 L 370,192 L 364,202 L 360,214
                  L 356,226 L 354,238 L 354,250 L 356,260 L 360,270
                  L 364,278 L 366,286 L 362,294 L 354,300 L 344,306
                  L 332,312 L 318,318 L 304,322 L 290,326 L 276,330
                  L 262,332 L 248,332 L 234,330 L 220,326 L 208,320
                  L 198,312 L 190,302 L 184,292 L 180,282 L 178,270
                  L 178,258 L 180,246 L 182,236 L 180,228 L 174,222
                  L 166,218 L 156,216 L 146,216 L 136,220 L 126,226
                  L 116,232 L 106,238 L 96,242  L 86,244  L 76,242
                  L 68,236  L 62,228  L 58,218  L 56,206  L 56,194
                  L 58,182  L 62,170  L 64,158  L 62,146  L 58,136
                  L 54,124  L 52,112  L 52,100  L 54,88   L 60,76
                  Z
                "/>
                {/* Yucatan Peninsula */}
                <path d="
                  M 356,260 L 362,264 L 370,268 L 378,272 L 386,278
                  L 392,286 L 396,296 L 396,308 L 392,318 L 384,326
                  L 376,332 L 366,336 L 356,336 L 348,330 L 342,322
                  L 340,312 L 342,302 L 348,294 L 352,284 L 354,272
                  L 356,260 Z
                "/>
                {/* Baja California */}
                <path d="
                  M 52,100 L 48,108 L 42,120 L 36,134 L 30,148
                  L 26,162 L 22,176 L 20,188 L 22,198 L 26,206
                  L 30,210 L 34,208 L 38,202 L 40,194 L 42,184
                  L 44,172 L 48,160 L 52,150 L 54,140 L 54,130
                  L 54,120 L 52,110 Z
                "/>
              </g>

              {/* Gulf of Mexico label */}
              <text x="390" y="190" fontFamily="Space Mono, monospace" fontSize="7"
                fill="rgba(0,155,219,.3)" letterSpacing="0.5" textAnchor="middle">GOLFO</text>
              <text x="390" y="200" fontFamily="Space Mono, monospace" fontSize="7"
                fill="rgba(0,155,219,.3)" letterSpacing="0.5" textAnchor="middle">DE</text>
              <text x="390" y="210" fontFamily="Space Mono, monospace" fontSize="7"
                fill="rgba(0,155,219,.3)" letterSpacing="0.5" textAnchor="middle">MÉXICO</text>

              {/* Pacific Ocean */}
              <text x="85" y="300" fontFamily="Space Mono, monospace" fontSize="7"
                fill="rgba(0,155,219,.2)" letterSpacing="0.5" textAnchor="middle">OCÉANO</text>
              <text x="85" y="310" fontFamily="Space Mono, monospace" fontSize="7"
                fill="rgba(0,155,219,.2)" letterSpacing="0.5" textAnchor="middle">PACÍFICO</text>

              {/* Connection route line between locations */}
              <polyline
                points={LOCATIONS.map(l => `${l.cx},${l.cy}`).join(' ')}
                fill="none"
                stroke="rgba(0,155,219,.2)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />

              {/* Location dots */}
              {LOCATIONS.map(l => (
                <g key={l.id} className={`map-pin${active === l.id ? ' map-pin-active' : ''}`}
                  onClick={() => setActive(active === l.id ? null : l.id)}
                  style={{ cursor: 'pointer' }}>
                  {/* Pulse ring */}
                  <circle cx={l.cx} cy={l.cy} r="14" fill="none"
                    stroke={l.main ? 'rgba(244,121,32,.3)' : 'rgba(0,155,219,.25)'}
                    strokeWidth="1.5" className="pin-ring" />
                  {/* Outer circle */}
                  <circle cx={l.cx} cy={l.cy} r={l.main ? 9 : 7}
                    fill={active === l.id ? 'var(--amber)' : l.main ? 'var(--amber)' : 'var(--cyan)'}
                    stroke="#fff" strokeWidth="2"
                    className="pin-circle" />
                  {/* Star for main */}
                  {l.main && (
                    <text x={l.cx} y={l.cy + 4} textAnchor="middle"
                      fontFamily="sans-serif" fontSize="8" fill="#fff">★</text>
                  )}
                  {/* Label chip */}
                  <rect x={l.cx + 12} y={l.cy - 10} width={l.name.length * 5.5 + 8} height="18"
                    fill="rgba(13,30,74,.85)" rx="2" />
                  <text x={l.cx + 16} y={l.cy + 3}
                    fontFamily="Oswald, sans-serif" fontSize="9" fill="#fff"
                    fontWeight="600" letterSpacing="0.5">
                    {l.name}
                  </text>
                </g>
              ))}
            </svg>

            <div className="pres-map-legend">
              <span className="legend-item"><span className="legend-dot main" />Matriz</span>
              <span className="legend-item"><span className="legend-dot" />Sucursal</span>
              <span className="legend-item legend-click">Haz clic en un punto para ver detalles</span>
            </div>
          </div>
        </div>
      </div>
    
      <div className="ver-mas-wrap reveal d3"><button className="btn-ver-mas" onClick={() => setOpenDetail(true)}>Ver presencia completa</button></div>

      <DetailPage isOpen={openDetail} onClose={() => setOpenDetail(false)}
  eyebrow="Presencia Nacional" title="México, <em>nuestro territorio</em>"
  lead="580+ colaboradores en 6 ubicaciones estratégicas cubriendo las zonas industriales y portuarias más importantes del Golfo de México.">
  <img className="dp-img" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80&fit=crop" alt="México mapa" />
  <h3>Matriz — Tampico, Tamaulipas</h3>
  <p>Calzada Blanca 1091-B, Col. Morelos, Tampico, Tam. C.P. 89290. Desde Tampico coordinamos todas las operaciones nacionales. Teléfono: +52 (833) 369 0070.</p>
  <div className="dp-grid">
    <div className="dp-feature"><h4>Reynosa, Tamps.</h4><p>Atendemos la industria maquiladora y automotriz del norte y la frontera con EUA.</p></div>
    <div className="dp-feature"><h4>Poza Rica, Ver.</h4><p>Cobertura de la Cuenca de Burgos y zona de producción petrolera norte de Veracruz.</p></div>
    <div className="dp-feature"><h4>Veracruz, Ver.</h4><p>Puerto industrial más importante del Golfo. Terminal de contenedores y plantas petroquímicas.</p></div>
    <div className="dp-feature"><h4>Paraíso, Tab.</h4><p>Zona de refinación y producción PEMEX Tabasco. Soporte para plataformas offshore.</p></div>
    <div className="dp-feature"><h4>Cd. del Carmen, Camp.</h4><p>Hub del sur del Golfo. Plataformas, buques de apoyo y servicio submarino.</p></div>
    <div className="dp-feature"><h4>Expansión 2025-26</h4><p>Evaluando Coatzacoalcos y Villahermosa para fortalecer la cobertura del sureste.</p></div>
  </div>
</DetailPage>
    </section>
  )
}
