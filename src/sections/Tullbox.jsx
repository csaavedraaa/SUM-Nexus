import { useState, useEffect } from 'react'
import '../components/SectorShowroom.css'
import '../components/ServicioShowroom.css'
import './Tullbox.css'

const YELLOW = '#f5c400'

const TB_SERVICIOS = [
  ['Diagnóstico',          'Diagnóstico en sitio para determinar la herramienta, equipos, refacciones y consumibles para cada proceso.'],
  ['Consumibles',          'Venta de consumibles y refacciones administrados en sitio. Pago únicamente al consumo real.'],
  ['Herramientas',         'Mantenimiento, reposición y calibración de herramientas a cargo del proveedor.'],
  ['Capacitación',         'Programa TullXpert de Operación Segura: capacitaciones presenciales y audiovisuales permanentes.'],
  ['Indicadores',          'Entrega mensual de indicadores de capacitación, uso de herramienta y venta de consumibles.'],
  ['Inspección PND',       'Servicio de inspección de cables de acero y accesorios de izaje con certificación.'],
]

const TB_BENEFICIOS = [
  ['Control y Seguridad',    'Herramientas en perfecto estado de uso, calibración y limpieza. Prevención de accidentes e incidentes.'],
  ['Eficiencia Operativa',   'Atención en sitio, simplificación de contratos y eficiencia en la secuencia operativa.'],
  ['Sin Mermas',             'Disminución de mermas y pérdida de herramientas. Inventario a cargo del proveedor.'],
  ['Sin Inversión de Capital','Pago únicamente por consumo real — sin compra de inventario inicial.'],
]

function TullboxShowroom({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const scrollContacto = () => {
    onClose()
    setTimeout(() => {
      const el = document.querySelector('#contacto')
      if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
    }, 460)
  }

  return (
    <div className={`showroom-overlay${isOpen ? ' open' : ''}`}>
      <button className="showroom-close" onClick={onClose} aria-label="Cerrar">✕</button>
      <div className="showroom-scroll">

        {/* HERO */}
        <div className="showroom-hero" style={{ backgroundImage: `url(/Contenedor_Tullbox.jpg)`, backgroundPosition: 'center 40%' }}>
          <div className="showroom-hero-overlay" />
          <div className="showroom-hero-content">
            <div className="showroom-eyebrow">
              <span className="showroom-eyebrow-num">TULLBOX</span> — Programa In Situ
            </div>
            <h2 className="showroom-title" style={{ color: '#fff' }}>
              Centro de Servicio<br />
              <em style={{ color: YELLOW, fontStyle: 'normal' }}>en tus instalaciones</em>
            </h2>
            <p className="showroom-lead">Un conjunto de servicios integrales basado en metodología sistemática de diagnóstico <em>« In situ »</em> — sin inversión de capital, pago por consumo real.</p>
          </div>
        </div>

        <div className="showroom-body">

          {/* STATS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', marginBottom: 40 }}>
            {[['2005','Año de origen'],['24/7','Herramienta disponible'],['100%','Pago por consumo real'],['+20','Años de experiencia']].map(([n, l]) => (
              <div key={n} style={{ background: 'var(--off)', padding: '20px 18px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: YELLOW, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* TOUR 360 */}
          <div style={{
            background: 'var(--navy)', padding: '28px 32px', marginBottom: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
            flexWrap: 'wrap',
            clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.55rem', color: YELLOW, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 8 }}>
                // Experiencia Inmersiva
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 6 }}>
                Tour Virtual 360°
              </div>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)', maxWidth: 380, lineHeight: 1.7 }}>
                Explora el interior de nuestras unidades TULLBOX en una experiencia inmersiva. Descubre cada herramienta, cajón y estación disponible.
              </p>
            </div>
            <a
              href="/tullbox.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: 'var(--font-display)', fontSize: '.82rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '1px',
                background: YELLOW, color: 'var(--navy)', border: 'none',
                padding: '14px 24px', textDecoration: 'none',
                flexShrink: 0,
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              }}
            >
              Entrar al tour →
            </a>
          </div>

          {/* SERVICIOS */}
          <div className="showroom-subhead">Servicio Integral</div>
          <div className="showroom-specs" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {TB_SERVICIOS.map(([titulo, desc]) => (
              <div key={titulo} className="showroom-spec">
                <div className="showroom-spec-dot" style={{ background: YELLOW }} />
                <div><h5>{titulo}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>

          {/* BENEFICIOS */}
          <div className="showroom-subhead">Beneficios del Programa</div>
          <div className="sw-benefits">
            {TB_BENEFICIOS.map(([titulo, desc]) => (
              <div key={titulo} className="sw-benefit" style={{ '--sw-accent': YELLOW }}>
                <span className="sw-benefit-check" style={{ background: YELLOW, color: 'var(--navy)' }}>✓</span>
                <span><strong style={{ display: 'block', marginBottom: 2, color: 'var(--navy)' }}>{titulo}</strong>{desc}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="showroom-cta-wrap">
            <p style={{ color: 'var(--muted)', fontSize: '.82rem', margin: '0 auto 16px', maxWidth: 520 }}>
              ¿Quieres implementar TULLBOX en tu operación? Nuestro equipo te asesora sin costo.
            </p>
            <button className="showroom-cta" onClick={scrollContacto}>
              Solicitar información →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Tullbox() {
  const [openTullbox, setOpenTullbox] = useState(false)

  const feats = [
    ['01','Centro de servicio instalado en tu planta u operación'],
    ['02','Herramienta especializada disponible 24/7'],
    ['03','Sin inversión de capital — pago por consumo real'],
    ['04','Control y trazabilidad completa de consumos'],
  ]

  return (
    <section id="tullbox" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{background: YELLOW}} />
            <span className="eyebrow-text" style={{color: YELLOW}}>Marca Complementaria</span>
          </div>
          <h2 className="s-h2">Conoce el <em style={{color: YELLOW}}>Proyecto Tullbox</em></h2>
        </div>

        <div className="tullbox-grid reveal d1">
          {/* Left: info */}
          <div className="tullbox-info">
            <div className="tullbox-info-bg" style={{background:`linear-gradient(135deg,${YELLOW}0d,transparent 60%)`}} />
            <div className="tullbox-brand">
              <span style={{color:'#fff'}}>TULL</span><span style={{color: YELLOW}}>BOX</span>
            </div>
            <div className="tullbox-tagline">Programa In Situ de renta de herramientas</div>
            <p className="tullbox-desc">
              SUMIMSA diseñó el programa <strong style={{color: YELLOW}}>Tullbox</strong>, que consiste en un conjunto de <strong style={{color:'#fff'}}>servicios integrales</strong> basado en una <strong style={{color:'#fff'}}>metodología sistemática</strong> de diagnóstico <em>« In situ »</em> para ofrecer servicios de: Suministro, Mantenimiento, Calibración, Capacitación y Asesoría e innovación tecnológica de equipos y herramientas.
            </p>
            <div className="tullbox-feats">
              {feats.map(([ic,txt]) => (
                <div key={txt} className="tullbox-feat">
                  <span className="tullbox-feat-num">{ic}</span>
                  <p>{txt}</p>
                </div>
              ))}
            </div>
            <div className="tullbox-btns">
              <button className="btn-main"
                style={{background: YELLOW, border:'none', cursor:'pointer', color:'var(--navy)', fontWeight:700}}
                onClick={() => { const el=document.querySelector('#contacto'); if(el) window.scrollTo({top:el.offsetTop-68,behavior:'smooth'}) }}>
                Solicitar Tullbox
              </button>
              <button className="btn-ver-mas white" onClick={() => setOpenTullbox(true)}>
                Ver más
              </button>
            </div>
          </div>

          {/* Right: photo */}
          <div className="tullbox-photo">
            <img src="/Contenedor_Tullbox.jpg" alt="Centro de Servicio Tullbox In Situ" />
            <div className="tullbox-photo-overlay" />
            <div className="tullbox-photo-caption">
              <div className="tullbox-photo-tag" style={{color: YELLOW}}>// Operando In Situ</div>
              <div className="tullbox-photo-title">Centro de Servicio<br />en tus instalaciones</div>
            </div>
          </div>
        </div>
      </div>

      <TullboxShowroom isOpen={openTullbox} onClose={() => setOpenTullbox(false)} />
    </section>
  )
}
