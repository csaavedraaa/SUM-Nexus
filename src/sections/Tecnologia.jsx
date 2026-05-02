import { useState } from 'react'
import './Tecnologia.css'
import DetailPage from '../components/DetailPage'

const TECH_CARDS = [
  {
    icon: '📊',
    title: 'KPI Dashboard',
    desc: 'Métricas de entrega, fill rate y OTIF en tiempo real para todas las plazas.',
    tag: 'En operación',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
  },
  {
    icon: '🛰️',
    title: 'Rastreo de Activos',
    desc: 'Geolocalización de flota y herramienta On Site con alertas automáticas.',
    tag: 'Activo',
    img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80&fit=crop',
  },
  {
    icon: '🛒',
    title: 'Compras Digitales',
    desc: 'Portal de órdenes, aprobaciones, trazabilidad y factura electrónica CFDI 4.0.',
    tag: 'Disponible',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&fit=crop',
  },
  {
    icon: '🤖',
    title: 'S&OP Automatizado',
    desc: 'Pronósticos inteligentes y planeación integrada con histórico y señales de mercado.',
    tag: 'En desarrollo',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80&fit=crop',
  },
  {
    icon: '📱',
    title: 'App Tullbox',
    desc: 'Solicitud de herramienta, registro de consumo y consulta de inventario en campo.',
    tag: 'Beta',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
  },
  {
    icon: '🔗',
    title: 'Integración EDI/API',
    desc: 'Conectamos con ERP del cliente: SAP, Oracle, Microsoft Dynamics. Órdenes automáticas.',
    tag: 'Disponible',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&fit=crop',
  },
]

const KPIS = [
  { num: '98.2%',  label: 'OTIF Rate',     color: 'var(--cyan)'  },
  { num: '▲ 12%', label: 'Fill Rate',      color: 'var(--green)' },
  { num: '3.2d',   label: 'Lead Time Avg', color: 'var(--amber)' },
  { num: '580',    label: 'Colaboradores', color: 'var(--cyan)'  },
]
const BARS = [45,60,40,75,55,80,90]

export default function Tecnologia() {
  const [openTech, setOpenTech] = useState(false)
  return (
    <section id="tecnologia" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Transformación Digital</span>
          </div>
          <h2 className="s-h2">Inteligencia<br /><em>Industrial</em></h2>
          <p className="s-lead">
            Tableros de control en tiempo real, rastreo de activos, compras digitales
            y analítica avanzada para tomar mejores decisiones.
          </p>
        </div>

        {/* Hero split */}
        <div className="tech-hero reveal d1">
          {/* Left: feature list */}
          <div className="tech-hero-left">
            <span className="tech-terminal-label">// Digital Operations Center</span>
            <h3 className="tech-hero-h3">
              Tableros de<br />
              <span style={{ color: 'var(--cyan)' }}>Control Digital</span>
            </h3>
            <p className="tech-hero-p">
              SUMIMSA ha desarrollado dashboards ejecutivos para monitorear KPIs de
              suministro, inventarios, órdenes de compra y entrega en tiempo real —
              accesibles desde cualquier dispositivo.
            </p>
            <div className="tech-feat-list">
              {[
                ['📊','KPI Dashboard','Métricas de entrega, fill rate, OTIF en tiempo real'],
                ['🛰️','Rastreo de Activos','Geolocalización de flota y herramienta On Site'],
                ['🛒','Compras Digitales','Portal de órdenes, aprobaciones y trazabilidad'],
                ['🤖','Automatización S&OP','Pronósticos inteligentes y planeación integrada'],
              ].map(([ic,title,desc]) => (
                <div key={title} className="tech-feat-row">
                  <span className="tech-feat-ic">{ic}</span>
                  <div>
                    <div className="tech-feat-title">{title}</div>
                    <div className="tech-feat-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="tech-hero-right">
            <div className="tech-terminal-label" style={{ marginBottom: 12 }}>// Live Dashboard Preview</div>
            <div className="dash-mockup">
              <div className="dash-top-bar">
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <span key={c} style={{ width:10, height:10, borderRadius:'50%', background:c, display:'inline-block' }} />
                ))}
                <span className="dash-title">SUMIMSA — Operations Dashboard</span>
              </div>
              <div className="dash-body">
                {KPIS.map(k => (
                  <div key={k.label} className="dash-kpi">
                    <div className="dash-kpi-num" style={{ color: k.color }}>{k.num}</div>
                    <div className="dash-kpi-label">{k.label}</div>
                  </div>
                ))}
                <div className="dash-chart">
                  {BARS.map((h, i) => (
                    <div key={i} className="dash-bar"
                      style={{ '--bar-h': `${h}%`, animationDelay: `${i * 0.1}s`,
                        background: i === 5 ? 'var(--amber)' : i === 6 ? 'var(--green)' : undefined }} />
                  ))}
                </div>
                <div className="dash-status-row">
                  <span style={{ fontFamily:'var(--font-mono)',fontSize:'.55rem',color:'var(--muted)' }}>Últimas órdenes:</span>
                  <span style={{ fontFamily:'var(--font-mono)',fontSize:'.55rem',color:'var(--green)' }}>● Tampico — Entregado</span>
                  <span style={{ fontFamily:'var(--font-mono)',fontSize:'.55rem',color:'var(--cyan)' }}>● Carmen — En tránsito</span>
                </div>
              </div>
            </div>
            <div className="tech-coming-soon">
              <strong>Próximamente:</strong> Portal de clientes con KPIs, historial de órdenes y reportes de consumo Tullbox.
            </div>
          </div>
        </div>

        {/* Tech cards with images */}
        <div className="tech-grid reveal d2">
          {TECH_CARDS.map(card => (
            <div key={card.title} className="tech-card">
              <div className="tech-card-img-wrap">
                <img src={card.img} alt={card.title} loading="lazy" className="tech-card-img" />
                <div className="tech-card-img-overlay" />
                <span className="tech-card-tag">{card.tag}</span>
              </div>
              <div className="tech-card-body">
                <span className="tech-card-icon">{card.icon}</span>
                <h4 className="tech-card-title">{card.title}</h4>
                <p className="tech-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ver-mas-wrap reveal d3">
        <button className="btn-ver-mas" onClick={() => setOpenTech(true)}>
          Explorar capacidades tecnológicas
        </button>
      </div>

      <DetailPage isOpen={openTech} onClose={() => setOpenTech(false)}
        eyebrow="Transformación Digital" title="Inteligencia <em>Industrial</em>"
        lead="SUMIMSA ha invertido en tecnología para ofrecer visibilidad, control y eficiencia en tiempo real a sus clientes y operaciones.">
        <img className="dp-img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop" alt="Dashboard" />
        <h3>KPI Dashboard</h3>
        <p>Tableros ejecutivos que integran datos de todas las plazas en tiempo real: órdenes de compra, inventarios, fill rate, OTIF, alertas de reabastecimiento y rentabilidad por cliente. Accesibles desde PC, tablet y móvil.</p>
        <h3>Rastreo de Activos</h3>
        <p>Sistema de geolocalización para nuestra flota y para herramienta de alto valor en programas Tullbox. Los clientes pueden ver en tiempo real el estatus de su entrega.</p>
        <h3>Portal de Compras Digitales</h3>
        <p>Plataforma web donde nuestros clientes colocan órdenes, consultan disponibilidad, aprueban cotizaciones y descargan facturas. Integración con SAP, Oracle y Microsoft Dynamics.</p>
        <div className="dp-grid">
          <div className="dp-feature"><h4>S&OP Automatizado</h4><p>Pronósticos con histórico y señales de mercado para recomendaciones de compra automáticas.</p></div>
          <div className="dp-feature"><h4>Integración EDI/API</h4><p>Conexión directa con ERP del cliente para órdenes automáticas sin intervención manual.</p></div>
          <div className="dp-feature"><h4>CFDI 4.0</h4><p>Facturación electrónica automática al momento de la entrega confirmada.</p></div>
          <div className="dp-feature"><h4>App Tullbox</h4><p>Solicitud de herramienta, registro de consumo y consulta de inventario desde el celular.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}
