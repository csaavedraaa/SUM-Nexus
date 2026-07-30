import { useState } from 'react'
import DetailPage from '../components/DetailPage'
import './Sustentabilidad.css'

/* ─── Datos ────────────────────────────────────────────────── */

const DIMENSIONES_LANDING = [
  {
    num:   'A',
    label: 'Ambiental',
    color: '#10b981',
    desc:  'Energía, agua, residuos, emisiones y controles operacionales que protegen el entorno natural.',
  },
  {
    num:   'S',
    label: 'Social',
    color: 'var(--cyan)',
    desc:  'Seguridad y salud, accidentabilidad, capacitación, talento y cumplimiento laboral.',
  },
  {
    num:   'G',
    label: 'Gobierno Corporativo',
    color: '#818cf8',
    desc:  'Riesgos, auditoría, integridad, cumplimiento normativo y gestión de información.',
  },
]

const INDICADORES = [
  {
    dim:   'Ambiental',
    color: '#10b981',
    items: [
      'Consumo de energía eléctrica y combustibles',
      'Uso de agua',
      'Generación y manejo de residuos',
      'Control de residuos peligrosos',
      'Cumplimiento de obligaciones ambientales',
      'Seguimiento de controles operacionales',
    ],
  },
  {
    dim:   'Social',
    color: 'var(--cyan)',
    items: [
      'Seguridad y salud en el trabajo',
      'Accidentabilidad e incapacidades',
      'Capacitación',
      'Evaluaciones de desempeño',
      'Cumplimiento laboral y REPSE',
      'Desarrollo del talento y condiciones de trabajo',
    ],
  },
  {
    dim:   'Gobierno Corporativo',
    color: '#818cf8',
    items: [
      'Administración de riesgos',
      'Control interno y auditoría interna',
      'Ética e integridad',
      'Cumplimiento normativo',
      'Debida diligencia de terceros',
      'Seguimiento contractual',
      'Seguridad de la información y privacidad de datos',
      'Gestión documental',
    ],
  },
]

const EQUIPOS = [
  'QHSE', 'Auditoría y Riesgos', 'Cumplimiento',
  'Gobierno de Datos', 'Cuarto de Control', 'Operaciones',
]

/* ─── DetailPage content ────────────────────────────────────── */

function SustentabilidadDetail() {
  return (
    <div className="sus-dp-content">

      {/* Métricas */}
      <div className="sus-dp-metrics">
        {DIMENSIONES_LANDING.map(d => (
          <div key={d.num} className="sus-dp-metric" style={{ '--dim-color': d.color }}>
            <span className="sus-dp-metric-num">{d.num}</span>
            <span className="sus-dp-metric-label">{d.label}</span>
          </div>
        ))}
      </div>

      <p className="sus-dp-intro">
        En SUMIMSA entendemos que la sustentabilidad debe traducirse en información medible,
        trazable y útil para la toma de decisiones. Por ello, gestionamos y fortalecemos
        progresivamente indicadores Ambientales, Sociales y de Gobierno Corporativo.
      </p>

      <div className="sus-dp-banner">
        <img src="/sustentabilidad-dp-banner.webp" alt="Indicadores ASG integrados a la operación" loading="lazy" />
      </div>

      {/* Marco de referencia */}
      <div className="sus-dp-section-header">
        <div className="sus-dp-section-badge">Marco</div>
        <div className="sus-dp-section-title">Referencia normativa</div>
        <div className="sus-dp-section-sub">CINIF — NIS A-1 · NIS B-1</div>
      </div>

      <div className="sus-dp-framework">
        <div className="sus-dp-framework-card">
          <div className="sus-dp-framework-code">NIS A-1</div>
          <div className="sus-dp-framework-name">Marco Conceptual de las Normas de Información de Sostenibilidad</div>
          <div className="sus-dp-framework-org">CINIF</div>
        </div>
        <div className="sus-dp-framework-card">
          <div className="sus-dp-framework-code">NIS B-1</div>
          <div className="sus-dp-framework-name">Indicadores Básicos de Sostenibilidad</div>
          <div className="sus-dp-framework-org">CINIF</div>
        </div>
        <div className="sus-dp-framework-note">
          <p>
            La alineación con las Normas de Información de Sostenibilidad del CINIF se desarrolla
            bajo un criterio de <strong>proporcionalidad y mejora continua</strong>, considerando
            la naturaleza, tamaño, operaciones y disponibilidad de información de la Compañía.
          </p>
          <p>
            Nuestro modelo de medición se sustenta en el Sistema de Gestión Integrado, alineado
            con las normas <strong>ISO 9001, ISO 14001 e ISO 45001</strong>.
          </p>
        </div>
      </div>

      {/* Indicadores */}
      <div className="sus-dp-section-header">
        <div className="sus-dp-section-badge">ASG</div>
        <div className="sus-dp-section-title">Indicadores y variables que gestionamos</div>
      </div>

      <div className="sus-dp-indicadores">
        {INDICADORES.map(grupo => (
          <div key={grupo.dim} className="sus-dp-dim-card" style={{ '--dim-color': grupo.color }}>
            <div className="sus-dp-dim-header">
              <div className="sus-dp-dim-dot" />
              <div className="sus-dp-dim-name">{grupo.dim}</div>
            </div>
            <ul className="sus-dp-dim-list">
              {grupo.items.map(item => (
                <li key={item} className="sus-dp-dim-item">
                  <div className="sus-dp-dim-item-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Metodología */}
      <div className="sus-dp-section-header">
        <div className="sus-dp-section-badge">Método</div>
        <div className="sus-dp-section-title">Integración de la información</div>
      </div>

      <p>
        La información se integra mediante <strong>registros operativos, controles documentales,
        indicadores institucionales, auditorías internas, evaluaciones de cumplimiento y tableros
        de seguimiento</strong>, con participación de:
      </p>
      <div className="sus-dp-equipos">
        {EQUIPOS.map(e => (
          <div key={e} className="sus-dp-equipo">{e}</div>
        ))}
      </div>

      {/* Cierre */}
      <div className="sus-dp-closing">
        <div className="sus-dp-commitment">
          <div className="sus-dp-commitment-label">Nuestro propósito</div>
          <p>
            Consolidar métricas consistentes, comparables y verificables que permitan evaluar el
            desempeño, anticipar riesgos, identificar oportunidades y fortalecer la continuidad
            operativa y la generación sostenible de valor.
          </p>
          <p style={{ marginTop: 12, fontStyle: 'italic' }}>
            En SUMIMSA, la sustentabilidad se gestiona con políticas, se demuestra con evidencia
            y se fortalece con métricas.
          </p>
        </div>
        <div className="sus-dp-closing-img">
          <img src="/sustentabilidad-dp-solar.webp" alt="Energía solar — sustentabilidad en operación" loading="lazy" />
        </div>
      </div>

    </div>
  )
}

/* ─── Sección landing ───────────────────────────────────────── */

export default function Sustentabilidad() {
  const [open, setOpen] = useState(false)

  return (
    <section id="sustentabilidad" className="section">
      <div className="container">
        <div className="sus-landing-grid">

          <div className="reveal sus-dims-grid">
            {DIMENSIONES_LANDING.map(d => (
              <div key={d.num} className="sus-dim-card" style={{ '--dim-color': d.color }}>
                <div className="sus-dim-badge">{d.num}</div>
                <div className="sus-dim-body">
                  <div className="sus-dim-label">{d.label}</div>
                  <p className="sus-dim-desc">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal d1 sus-landing-text">
            <div className="eyebrow">
              <div className="eyebrow-line" style={{ background: '#10b981' }} />
              <span className="eyebrow-text" style={{ color: '#10b981' }}>Sustentabilidad ASG</span>
            </div>
            <h2 className="s-h2" style={{ color: '#fff' }}>
              Métricas que<br /><em style={{ color: '#10b981' }}>respaldan decisiones</em>
            </h2>
            <p className="s-lead sus-landing-lead">
              Gestionamos indicadores Ambientales, Sociales y de Gobierno Corporativo con
              referencia en las Normas de Información de Sostenibilidad del CINIF — información
              medible, trazable y orientada a la continuidad operativa.
            </p>
            <button className="sus-landing-cta" onClick={() => setOpen(true)}>
              Ver métricas ASG
            </button>
          </div>

        </div>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Sustentabilidad ASG"
        title="Métricas que<br/><em>respaldan decisiones</em>"
        lead="Indicadores Ambientales, Sociales y de Gobierno Corporativo alineados con las Normas de Información de Sostenibilidad del CINIF."
        className="dp-light"
      >
        <SustentabilidadDetail />
      </DetailPage>
    </section>
  )
}
