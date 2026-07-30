import { useState, useEffect, useRef } from 'react'
import DetailPage from '../components/DetailPage'
import ReporteHSEModal from './ReporteHSE'
import './HSE.css'

/* ─── Datos ────────────────────────────────────────────────── */

const HSE_AREAS = [
  {
    num: '01',
    label: 'Seguridad Industrial',
    color: '#f5c400',
    desc: 'Prevención de accidentes, controles operacionales, permisos de trabajo y cultura de cero incidentes en cada actividad.',
  },
  {
    num: '02',
    label: 'Salud Ocupacional',
    color: 'var(--cyan)',
    desc: 'Vigilancia de la salud del colaborador, control de exposiciones a agentes físicos, químicos, ergonómicos y psicosociales.',
  },
  {
    num: '03',
    label: 'Protección Ambiental',
    color: 'var(--green)',
    desc: 'Manejo responsable de residuos, prevención de derrames, control de emisiones y uso eficiente de agua, energía y recursos.',
  },
]

const PILARES = [
  ['01', 'Liderazgo y responsabilidad',
   'La seguridad comienza en la dirección y se ejerce en cada nivel mediante responsabilidades definidas, supervisión y rendición de cuentas.'],
  ['02', 'Gestión preventiva de riesgos',
   'Evaluamos los riesgos antes de ejecutar los trabajos mediante análisis de seguridad, permisos de trabajo, inspecciones y controles críticos.'],
  ['03', 'Salud y bienestar ocupacional',
   'Prevenimos enfermedades laborales y controlamos la exposición a ruido, sustancias químicas, factores ergonómicos y riesgos psicosociales.'],
  ['04', 'Seguridad operacional',
   'Aplicamos controles para trabajos en altura, espacios confinados, maniobras de izaje, soldadura y corte, y actividades eléctricas.'],
  ['05', 'Protección ambiental',
   'Impulsamos el manejo responsable de residuos, la prevención de derrames y el uso eficiente de agua, energía y recursos naturales.'],
  ['06', 'Preparación y respuesta ante emergencias',
   'Contamos con planes de atención, brigadas, simulacros y equipos de respuesta para proteger personas, instalaciones y entorno.'],
  ['07', 'Aprendizaje y mejora continua',
   'Investigamos incidentes y desviaciones, determinamos causas raíz y damos seguimiento al cierre de acciones correctivas y preventivas.'],
]

const NOM_ROWS = [
  { ambito: 'Instalaciones y emergencias',       normas: ['NOM-001-STPS-2008', 'NOM-002-STPS-2010', 'NOM-019-STPS-2011', 'NOM-026-STPS-2008', 'NOM-030-STPS-2009'] },
  { ambito: 'Maquinaria y manejo de materiales', normas: ['NOM-004-STPS-1999', 'NOM-006-STPS-2023', 'NOM-020-STPS-2011'] },
  { ambito: 'Trabajos de alto riesgo',           normas: ['NOM-009-STPS-2011', 'NOM-027-STPS-2008', 'NOM-029-STPS-2011', 'NOM-033-STPS-2015'] },
  { ambito: 'Sustancias químicas y EPP',         normas: ['NOM-005-STPS-1998', 'NOM-010-STPS-2014', 'NOM-017-STPS-2024', 'NOM-018-STPS-2015', 'NOM-022-STPS-2015'] },
  { ambito: 'Salud ocupacional',                 normas: ['NOM-011-STPS-2001', 'NOM-015-STPS-2001', 'NOM-025-STPS-2008', 'NOM-035-STPS-2018', 'NOM-036-1-STPS-2018'] },
  { ambito: 'Medio ambiente',                    normas: ['NOM-052-SEMARNAT-2005', 'NOM-054-SEMARNAT-1993', 'NOM-161-SEMARNAT-2011', 'NOM-001-SEMARNAT-2021', 'NOM-081-SEMARNAT-1994'] },
  { ambito: 'Requisitos específicos',            normas: ['NOM-028-STPS-2012', 'NOM-031-STPS-2011'], nota: 'cuando resulten aplicables' },
]

const HSE_DOCS = [
  { title: 'Política del Sistema HSE', desc: 'Nuestros compromisos de seguridad, salud y protección ambiental.', pending: true },
  { title: 'Contacto directo',         desc: 'Tel. +52 (833) 369 0070 · ventas@sumimsa.com.mx',                   email: 'ventas@sumimsa.com.mx', cta: 'Escribir correo' },
]

const HSE_CERTS = [
  {
    img:   '/img/iso-9001.webp',
    pdf:   '/cert-iso-9001.pdf',
    label: 'ISO 9001:2015',
    name:  'Sistema de Gestión de la Calidad',
    color: '#1d4ed8',
    desc:  'Garantiza que nuestros procesos, productos y servicios cumplen de manera consistente los requisitos del cliente. Aplica ciclos de mejora continua en operaciones, logística, fabricación y servicio posventa.',
  },
  {
    img:   '/img/iso-14001.webp',
    pdf:   '/cert-iso-14001.pdf',
    label: 'ISO 14001:2015',
    name:  'Sistema de Gestión Ambiental',
    color: '#15803d',
    desc:  'Establece controles para minimizar el impacto ambiental de nuestras actividades: manejo responsable de residuos, prevención de derrames, reducción de emisiones y uso eficiente de agua y energía.',
  },
  {
    img:   '/img/iso-45001.webp',
    pdf:   '/cert-iso-45001.pdf',
    label: 'ISO 45001:2018',
    name:  'Seguridad y Salud en el Trabajo',
    color: '#b45309',
    desc:  'El estándar internacional más exigente para prevenir lesiones y enfermedades laborales. Integra identificación de peligros, controles operacionales, participación de los trabajadores y gestión activa de riesgos en cada actividad.',
  },
]

const EMAIL_CLIENTS = [
  { label: 'Gmail',          url: (e) => `https://mail.google.com/mail/?view=cm&to=${e}` },
  { label: 'Outlook',        url: (e) => `https://outlook.live.com/mail/0/deeplink/compose?to=${e}` },
  { label: 'Yahoo Mail',     url: (e) => `https://compose.mail.yahoo.com/?to=${e}` },
  { label: 'Predeterminado', url: (e) => `mailto:${e}` },
]

/* ─── Contenido del DetailPage ─────────────────────────────── */

function HSEDetail() {
  const [nomOpen,         setNomOpen]         = useState(false)
  const [emailPickerOpen, setEmailPickerOpen] = useState(false)
  const [reporteOpen,     setReporteOpen]     = useState(false)
  const pickerRef = useRef(null)

  useEffect(() => {
    if (!emailPickerOpen) return
    const handler = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) setEmailPickerOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [emailPickerOpen])

  return (
    <div className="hse-dp-content">

      {/* Barra de métricas */}
      <div className="hse-dp-metrics">
        <div className="hse-dp-metric">
          <span className="hse-dp-metric-num">03</span>
          <span className="hse-dp-metric-label">Áreas HSE</span>
        </div>
        <div className="hse-dp-metric-sep" />
        <div className="hse-dp-metric">
          <span className="hse-dp-metric-num">07</span>
          <span className="hse-dp-metric-label">Pilares del sistema</span>
        </div>
        <div className="hse-dp-metric-sep" />
        <div className="hse-dp-metric">
          <span className="hse-dp-metric-num" style={{ fontSize: '1.3rem' }}>ISO<br/>45001</span>
          <span className="hse-dp-metric-label">Certificación SST</span>
        </div>
      </div>

      <p className="hse-dp-intro">
        Nuestro Sistema de Gestión HSE integra la identificación de peligros, evaluación de riesgos,
        controles operacionales, capacitación, supervisión y mejora continua en las actividades
        realizadas por nuestro personal, contratistas y proveedores.
      </p>

      <div className="hse-dp-callout">
        Promovemos una cultura en la que cada persona tiene la autoridad y la responsabilidad de
        prevenir actos y condiciones inseguras, <strong>detener una actividad cuando exista un riesgo
        no controlado</strong> y reportar oportunamente incidentes y oportunidades de mejora.
      </div>

      {/* ── Certificaciones ── */}
      <div className="hse-dp-section-header">
        <div className="hse-dp-section-badge hse-badge-blue">Certificaciones</div>
        <div className="hse-dp-section-title">Certificaciones vigentes</div>
        <div className="hse-dp-section-sub">03 normas ISO</div>
      </div>
      <div className="hse-dp-certs">
        {HSE_CERTS.map(c => (
          <div key={c.label} className="hse-dp-cert-card" style={{ '--cert-color': c.color }}>
            <div className="hse-dp-cert-img-wrap">
              <img src={c.img} alt={c.label} className="hse-dp-cert-img" />
            </div>
            <div className="hse-dp-cert-body">
              <div className="hse-dp-cert-label">{c.label}</div>
              <div className="hse-dp-cert-name">{c.name}</div>
              <p className="hse-dp-cert-desc">{c.desc}</p>
              <a className="hse-dp-cert-dl" href={c.pdf} download>
                Descargar certificado →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Pilares ── */}
      <div className="hse-dp-section-header">
        <div className="hse-dp-section-badge hse-badge-yellow">Sistema</div>
        <div className="hse-dp-section-title">Pilares del Sistema HSE</div>
        <div className="hse-dp-section-sub">07 pilares</div>
      </div>

      <div className="hse-dp-pilares">
        {PILARES.map(([n, title, desc]) => (
          <div key={n} className="hse-dp-pilar">
            <div className="hse-dp-pilar-num">{n}</div>
            <div className="hse-dp-pilar-title">{title}</div>
            <p className="hse-dp-pilar-desc">{desc}</p>
          </div>
        ))}
      </div>

      {/* ── NOM ── */}
      <div className="hse-dp-section-header">
        <div className="hse-dp-section-badge hse-badge-gray">Legal</div>
        <div className="hse-dp-section-title">Normas Oficiales Mexicanas</div>
        <div className="hse-dp-section-sub">NOM aplicables</div>
      </div>

      <p>
        Identificamos y damos seguimiento a los requisitos legales aplicables a cada centro de
        trabajo. Las normas listadas corresponden a las <strong>NOM aplicables</strong> a nuestras
        operaciones — no se afirma que todas apliquen a la totalidad de actividades de SUMIMSA.
      </p>
      <button className="hse-dp-nom-toggle" onClick={() => setNomOpen(o => !o)}>
        {nomOpen ? '− Cerrar tabla de normas' : '+ Ver normas por ámbito'}
      </button>
      {nomOpen && (
        <div className="hse-dp-nom-list">
          {NOM_ROWS.map(row => (
            <div key={row.ambito} className="hse-dp-nom-row">
              <div className="hse-dp-nom-ambito">{row.ambito}</div>
              <div className="hse-dp-nom-chips">
                {row.normas.map(n => (
                  <span key={n} className="hse-dp-nom-chip">{n}</span>
                ))}
                {row.nota && (
                  <span className="hse-dp-nom-nota">{row.nota}</span>
                )}
              </div>
            </div>
          ))}
          <p className="hse-dp-nom-footer">
            Gestionamos los riesgos mediante controles, evidencias y mejora continua.
          </p>
        </div>
      )}

      {/* ── Documentos ── */}
      <div className="hse-dp-section-header">
        <div className="hse-dp-section-badge hse-badge-gray">Acceso</div>
        <div className="hse-dp-section-title">Documentos y canales</div>
      </div>

      <div className="hse-dp-docs-grid">
        {HSE_DOCS.map(item => (
          <div key={item.title} className="hse-dp-doc-card">
            <div className="hse-dp-doc-title">{item.title}</div>
            <p className="hse-dp-doc-desc">{item.desc}</p>
            {item.pending && (
              <span className="hse-dp-doc-cta pending">Próximamente</span>
            )}
            {item.email && (
              <div ref={pickerRef} style={{ position: 'relative' }}>
                <button className="hse-dp-doc-cta" onClick={() => setEmailPickerOpen(o => !o)}>
                  {item.cta} →
                </button>
                {emailPickerOpen && (
                  <div style={{
                    position: 'absolute', bottom: '100%', left: 0, marginBottom: 6,
                    background: '#0d1e4a', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 8, overflow: 'hidden', minWidth: 190, zIndex: 10,
                    boxShadow: '0 8px 24px rgba(0,0,0,.4)',
                  }}>
                    {EMAIL_CLIENTS.map(client => (
                      <a key={client.label} href={client.url(item.email)} target="_blank"
                        rel="noopener noreferrer" onClick={() => setEmailPickerOpen(false)}
                        style={{ display: 'block', padding: '10px 14px', textDecoration: 'none',
                          color: 'rgba(255,255,255,.7)', fontSize: '.82rem', fontFamily: 'var(--font-body)',
                          transition: 'background .15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                        onMouseLeave={e => e.currentTarget.style.background = ''}>
                        {client.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {reporteOpen && (
        <ReporteHSEModal onClose={() => setReporteOpen(false)} />
      )}

      <div className="hse-dp-reporte">
        <div className="hse-dp-reporte-text">
          <span className="hse-dp-reporte-label">Reporta una Condición Insegura</span>
          <span className="hse-dp-reporte-sub">Canal confidencial para reportar actos o condiciones de riesgo</span>
        </div>
        <button className="hse-dp-reporte-btn"
          onClick={() => setReporteOpen(true)}>
          Ir al formulario →
        </button>
      </div>

    </div>
  )
}

/* ─── Sección landing (general) ────────────────────────────── */

export default function HSE() {
  const [open, setOpen] = useState(false)

  return (
    <section id="hse" className="section">
      <div className="container">
        <div className="hse-landing-stack">

          {/* Texto — fila superior */}
          <div className="reveal hse-landing-top">
            <div className="hse-landing-top-left">
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">HSE — Seguridad, Salud y Medio Ambiente</span>
              </div>
              <h2 className="s-h2">
                Protegemos a las personas.<br />
                <em style={{ color: '#ca8a04' }}>Cuidamos el entorno.</em>
              </h2>
            </div>
            <div className="hse-landing-top-right">
              <p className="s-lead" style={{ marginBottom: 28 }}>
                En SUMIMSA la seguridad, la salud ocupacional y la protección ambiental forman
                parte de nuestra manera de trabajar — no como requisito regulatorio, sino como
                valor fundamental de nuestra cultura operativa.
              </p>
              <button className="hse-landing-cta" onClick={() => setOpen(true)}>
                Ver sistema HSE completo
              </button>
            </div>
          </div>

          {/* 3 tarjetas — fila inferior horizontal */}
          <div className="reveal d1 hse-areas-row">
            {HSE_AREAS.map(area => (
              <div key={area.num} className="hse-area-card" style={{ '--area-color': area.color }}>
                <div className="hse-area-num-large">{area.num}</div>
                <div className="hse-area-label">{area.label}</div>
                <p className="hse-area-desc">{area.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="HSE — Sistema de Gestión"
        title="Seguridad, Salud<br/><em>y Medio Ambiente</em>"
        lead="Protegemos a las personas, cuidamos el entorno y aseguramos la continuidad de nuestras operaciones mediante un sistema integrado de gestión HSE."
        className="dp-light"
      >
        <HSEDetail />
      </DetailPage>
    </section>
  )
}
