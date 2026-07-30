import { useState, useEffect, useRef } from 'react'
import DetailPage from '../components/DetailPage'
import DenunciaModal from './Denuncia'
import './Gobernanza.css'

/* ─── PDF Preview Modal ─────────────────────────────────────── */
function PdfPreviewModal({ doc, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!doc) return null

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal" onClick={e => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <div className="pdf-modal-title-wrap">
            <span className="pdf-modal-doc-name">{doc.name}</span>
            <span className="pdf-modal-doc-code">{doc.code} — SUMIMSA</span>
          </div>
          <div className="pdf-modal-actions">
            <a className="pdf-modal-dl-btn" href={doc.pdf} download={doc.dl}>
              Descargar PDF
            </a>
            <button className="pdf-modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
          </div>
        </div>
        <div className="pdf-modal-viewer">
          <iframe
            src={doc.pdf + '#toolbar=0&navpanes=0&scrollbar=1'}
            title={doc.name}
            className="pdf-modal-iframe"
          />
        </div>
      </div>
    </div>
  )
}

/* ─── Datos ────────────────────────────────────────────────── */

const PILARES_LANDING = [
  {
    num:   '01',
    label: 'Sistema Integrado de Gestión',
    sub:   'ISO 9001 · ISO 14001 · ISO 45001',
    desc:  'Políticas, procesos, controles e indicadores que aseguran operaciones confiables, seguras y responsables.',
  },
  {
    num:   '02',
    label: 'Integridad y Cumplimiento',
    sub:   'Artículo 25 LGRA — 7 elementos',
    desc:  'Programa que orienta la conducta de consejeros, directivos, colaboradores, proveedores y socios comerciales.',
  },
]

const SIG_BENEFITS = [
  'La calidad de nuestros productos y servicios.',
  'La satisfacción y confianza de nuestros clientes.',
  'La protección del medio ambiente y el uso responsable de los recursos.',
  'La prevención de riesgos laborales.',
  'La seguridad y salud de nuestros colaboradores.',
  'El cumplimiento de requisitos legales, contractuales y regulatorios.',
  'La evaluación permanente del desempeño y la mejora continua.',
]


const ELEMENTOS = [
  ['01', 'Organización y responsabilidades claras',
   'Estructura organizacional, procedimientos y cadenas de mando que delimitan las facultades de cada área.'],
  ['02', 'Código de Ética y Conducta',
   'Principios de actuación formalmente establecidos, comunicados y respaldados por mecanismos de aplicación.'],
  ['03', 'Control, vigilancia y auditoría',
   'Controles, evaluaciones, monitoreo y auditorías periódicas para verificar el cumplimiento de estándares.'],
  ['04', 'Línea de denuncia y sistema de consecuencias',
   'Canales confidenciales para reportar irregularidades, con protocolos de investigación y protección al denunciante.'],
  ['05', 'Capacitación en integridad',
   'Programas de sensibilización y capacitación para fortalecer cultura de legalidad y prevención de la corrupción.'],
  ['06', 'Políticas de recursos humanos basadas en integridad',
   'Criterios de selección y desarrollo orientados a prevenir riesgos, con respeto a la dignidad y no discriminación.'],
  ['07', 'Transparencia y prevención de conflictos de interés',
   'Declaración, identificación y gestión oportuna de intereses que pudieran afectar la objetividad de decisiones.'],
]

const LEGAL_DOCS = [
  {
    pdf:    '/legal/anticorrupcion.pdf',
    cover:  '/legal/cover-anticorrupcion-1.webp',
    name:   'Política de Anticorrupción y Antilavado',
    code:   'SMS-SGI-PO-04',
    dl:     'Anticorrupcion-Antilavado-SUMIMSA.pdf',
  },
  {
    pdf:    '/legal/debida-diligencia.pdf',
    cover:  '/legal/cover-debida-diligencia-1.webp',
    name:   'Debida Diligencia de Terceros',
    code:   'SMS-CMP-PO-01',
    dl:     'Debida-Diligencia-Terceros-SUMIMSA.pdf',
  },
  {
    pdf:    '/legal/linea-etica.pdf',
    cover:  '/legal/cover-linea-etica-1.webp',
    name:   'Política de la Línea Ética',
    code:   'SMS-SGI-PO-05',
    dl:     'Linea-Etica-SUMIMSA.pdf',
  },
]

/* ─── DetailPage content ────────────────────────────────────── */

function GobernanzaDetail({ onClose, isOpen }) {
  const [previewDoc, setPreviewDoc] = useState(null)
  const [denunciaOpen, setDenunciaOpen] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  return (
    <div className="gob-dp-content">

      {/* Barra de métricas */}
      <div className="gob-dp-metrics">
        <div className="gob-dp-metric">
          <span className="gob-dp-metric-num">02</span>
          <span className="gob-dp-metric-label">Pilares de gobernanza</span>
        </div>
        <div className="gob-dp-metric-sep" />
        <div className="gob-dp-metric">
          <span className="gob-dp-metric-num">03</span>
          <span className="gob-dp-metric-label">Certificaciones ISO vigentes</span>
        </div>
        <div className="gob-dp-metric-sep" />
        <div className="gob-dp-metric">
          <span className="gob-dp-metric-num">07</span>
          <span className="gob-dp-metric-label">Elementos Art. 25 LGRA</span>
        </div>
      </div>

      <p className="gob-dp-intro">
        Nuestro modelo de gobernanza se sustenta en dos pilares: un <strong>Sistema Integrado de
        Gestión</strong> certificado en calidad, ambiente y seguridad, y un <strong>Programa de
        Integridad y Cumplimiento</strong> que orienta la conducta de toda la organización.
      </p>

      {/* ── Código de Ética — siempre visible, en alto ── */}
      <div className="gob-dp-section-header">
        <div className="gob-dp-section-badge gob-badge-amber">Ética</div>
        <div className="gob-dp-section-title">Código de Ética y Conducta</div>
      </div>
      <p>
        Nuestro Código de Ética establece los principios de conducta que rigen la actuación de
        consejeros, directivos, colaboradores, proveedores y socios comerciales de SUMIMSA.
      </p>
      <div className="gob-etica-layout">
        <div className="gob-etica-video-wrap">
          <p className="gob-etica-label">Presentación</p>
          <video ref={videoRef} className="gob-etica-video" src="/sspa/codigo-etica.mp4"
            controls controlsList="nodownload" preload="metadata" playsInline />
        </div>
        <div className="gob-etica-pdf-side">
          <p className="gob-etica-label">Documento oficial</p>
          <div className="gob-etica-pdf-card gob-legal-card"
            onClick={() => setPreviewDoc({
              pdf:  '/sspa/codigo-de-etica.pdf',
              name: 'Código de Ética y Conducta',
              code: 'SMS-SGI',
              dl:   'Codigo-de-Etica-SUMIMSA.pdf',
            })}
            role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setPreviewDoc({
              pdf:  '/sspa/codigo-de-etica.pdf',
              name: 'Código de Ética y Conducta',
              code: 'SMS-SGI',
              dl:   'Codigo-de-Etica-SUMIMSA.pdf',
            })}>
            <div className="gob-etica-pdf-cover">
              <img src="/sspa/codigo-etica-portada.webp" alt="Portada Código de Ética" />
              <div className="gob-legal-card-overlay">
                <span className="gob-legal-card-preview-icon">&#128065;</span>
                <span className="gob-legal-card-preview-label">Ver documento</span>
              </div>
            </div>
            <div className="gob-etica-pdf-info">
              <span className="gob-etica-pdf-title">Código de Ética y Conducta</span>
              <span className="gob-etica-pdf-sub">SUMIMSA — Descargar documento</span>
              <span className="gob-etica-pdf-btn">Descargar</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Pilar 01 ── */}
      <div className="gob-dp-section-header">
        <div className="gob-dp-section-badge">Pilar 01</div>
        <div className="gob-dp-section-title">Sistema Integrado de Gestión</div>
        <div className="gob-dp-section-sub">ISO 9001 · ISO 14001 · ISO 45001</div>
      </div>
      <p>
        Articula políticas, procesos, responsabilidades, controles, indicadores, auditorías y
        acciones de mejora continua para asegurar operaciones confiables, seguras y responsables.
      </p>
      <div className="gob-dp-benefits-full">
        <div className="gob-dp-sublabel">Este sistema fortalece:</div>
        <div className="gob-dp-benefits gob-dp-benefits-2col">
          {SIG_BENEFITS.map((b, i) => (
            <div key={i} className="gob-dp-benefit">
              <div className="gob-dp-benefit-dot" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pilar 02 ── */}
      <div className="gob-dp-section-header">
        <div className="gob-dp-section-badge gob-badge-indigo">Pilar 02</div>
        <div className="gob-dp-section-title">Integridad y Cumplimiento</div>
        <div className="gob-dp-section-sub">7 elementos — Art. 25 LGRA</div>
      </div>
      <p>
        Nuestra Política de Integridad está <strong>estructurada y alineada</strong> con los
        elementos del <strong>artículo 25 de la Ley General de Responsabilidades
        Administrativas</strong>. No afirmamos cumplimiento como certificación.
      </p>
      <div className="gob-dp-elementos">
        {ELEMENTOS.map(([num, title, desc]) => (
          <div key={num} className="gob-dp-elemento">
            <div className="gob-dp-elemento-num">{num}</div>
            <div className="gob-dp-elemento-title">{title}</div>
            <p className="gob-dp-elemento-desc">{desc}</p>
          </div>
        ))}
      </div>

      {/* ── Documentos ── */}
      <div className="gob-dp-section-header">
        <div className="gob-dp-section-badge gob-badge-gray">Acceso</div>
        <div className="gob-dp-section-title">Documentos y canales</div>
      </div>

      <div className="gob-dp-legal-grid">
        {LEGAL_DOCS.map(doc => (
          <div key={doc.name} className="gob-etica-pdf-card gob-legal-card"
            onClick={() => setPreviewDoc(doc)} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setPreviewDoc(doc)}>
            <div className="gob-etica-pdf-cover">
              <img src={doc.cover} alt={`Portada ${doc.name}`} />
              <div className="gob-legal-card-overlay">
                <span className="gob-legal-card-preview-label">Ver documento</span>
              </div>
            </div>
            <div className="gob-etica-pdf-info">
              <span className="gob-etica-pdf-title">{doc.name}</span>
              <span className="gob-etica-pdf-sub">{doc.code} — SUMIMSA</span>
              <span className="gob-etica-pdf-btn">Ver · Descargar</span>
            </div>
          </div>
        ))}
      </div>

      {previewDoc && (
        <PdfPreviewModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />
      )}

      {denunciaOpen && (
        <DenunciaModal onClose={() => setDenunciaOpen(false)} />
      )}

      <div className="gob-dp-denuncia">
        <div className="gob-dp-denuncia-text">
          <span className="gob-dp-denuncia-label">Línea de Denuncia</span>
          <span className="gob-dp-denuncia-sub">Canal confidencial para reportar irregularidades</span>
        </div>
        <button className="gob-dp-denuncia-btn"
          onClick={() => setDenunciaOpen(true)}>
          Ir al formulario →
        </button>
      </div>

      {/* Compromiso */}
      <div className="gob-dp-commitment">
        <div className="gob-dp-commitment-label">Nuestro compromiso</div>
        <p>
          En SUMIMSA rechazamos cualquier forma de corrupción, soborno, fraude, conflicto de
          interés o conducta contraria a la ley y a nuestros principios. La integridad se
          demuestra mediante responsabilidades claras, controles efectivos, evidencia
          documentada, capacitación, vigilancia y rendición de cuentas.
        </p>
      </div>

    </div>
  )
}

/* ─── Sección landing (general) ────────────────────────────── */

export default function Gobernanza() {
  const [open, setOpen] = useState(false)

  return (
    <section id="gobernanza" className="section">
      <div className="container">
        <div className="gob-landing-grid">

          <div className="reveal gob-landing-text">
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Gobernanza, Gestión e Integridad</span>
            </div>
            <h2 className="s-h2" style={{ color: '#fff' }}>
              Principios que se<br /><em>convierten en acciones</em>
            </h2>
            <p className="s-lead" style={{ marginBottom: 28 }}>
              Dirigimos nuestras operaciones con responsabilidades definidas, controles efectivos,
              gestión de riesgos, transparencia y rendición de cuentas — sustentados en dos pilares
              complementarios.
            </p>
            <button className="gob-landing-cta" onClick={() => setOpen(true)}>
              Conocer nuestro modelo de gobernanza
            </button>
          </div>

          <div className="reveal d1 gob-pilares-landing">
            {PILARES_LANDING.map(p => (
              <div key={p.num} className="gob-pilar-card">
                <div className="gob-pilar-card-num">{p.num}</div>
                <div className="gob-pilar-card-body">
                  <div className="gob-pilar-card-label">{p.label}</div>
                  <span className="gob-pilar-card-sub">{p.sub}</span>
                  <p className="gob-pilar-card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Gobernanza, Gestión e Integridad"
        title="Principios que se<br/><em>convierten en acciones</em>"
        lead="Nuestro modelo integra un Sistema de Gestión certificado y un Programa de Integridad estructurado conforme al artículo 25 de la LGRA."
        className="dp-light"
      >
        <GobernanzaDetail onClose={() => setOpen(false)} isOpen={open} />
      </DetailPage>
    </section>
  )
}
