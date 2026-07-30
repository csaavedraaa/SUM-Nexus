import { useState, useEffect } from 'react'
import './ReporteHSE.css'

const TIPOS = [
  'Condición insegura (instalaciones, equipo, orden y limpieza)',
  'Acto inseguro / incumplimiento de procedimiento',
  'Casi accidente (near miss)',
  'Incidente o accidente de trabajo',
  'Derrame, fuga o daño ambiental',
  'Falta o daño de equipo de protección personal (EPP)',
  'Otro',
]

const AREAS = [
  'Planta / Taller',
  'Almacén',
  'Oficinas',
  'Obra / Sitio del cliente',
  'Transporte / Logística',
  'Otra / No sé',
]

export default function ReporteHSEModal({ onClose }) {
  const [form, setForm] = useState({
    tipo: '', area: '', descripcion: '', fecha: '',
    nombre: '', correo: '', anonimo: false,
  })
  const [estado, setEstado] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.tipo || !form.descripcion.trim()) {
      setErrMsg('Por favor selecciona el tipo de reporte y describe la condición o el hecho.')
      setEstado('error')
      return
    }
    setEstado('sending')
    setErrMsg('')
    /* TODO: conectar con base de datos / endpoint de HSE */
    await new Promise(r => setTimeout(r, 900))
    setEstado('ok')
  }

  return (
    <div className="rep-overlay" onClick={onClose}>
      <div className="rep-modal" onClick={e => e.stopPropagation()}>

        {/* ── Header ── */}
        <div className="rep-modal-header">
          <div className="rep-modal-title-wrap">
            <span className="rep-modal-badge">Reporte HSE</span>
            <span className="rep-modal-subtitle">Canal confidencial de seguridad — SUMIMSA</span>
          </div>
          <button className="rep-modal-close" onClick={onClose} aria-label="Cerrar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="rep-modal-body">

          {estado === 'ok' ? (
            <div className="rep-ok">
              <div className="rep-ok-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h2 className="rep-ok-title">Reporte recibido</h2>
              <p className="rep-ok-msg">
                Tu reporte ha sido enviado al área de HSE de SUMIMSA. Será atendido conforme a
                nuestros protocolos de seguridad. Gracias por ayudarnos a proteger a las personas
                y el entorno.
              </p>
              <button className="rep-ok-btn" onClick={() => {
                setEstado('idle')
                setForm({ tipo:'', area:'', descripcion:'', fecha:'', nombre:'', correo:'', anonimo:false })
              }}>
                Enviar otro reporte
              </button>
            </div>
          ) : (
            <div className="rep-layout">

              {/* Columna izquierda — garantías */}
              <div className="rep-guarantees-col">
                <p className="rep-intro-text">
                  Puedes reportar cualquier condición o acto que represente un riesgo para la
                  seguridad, la salud o el medio ambiente. Tu reporte es tratado con total
                  confidencialidad.
                </p>
                <div className="rep-guarantees">
                  <div className="rep-guarantee">
                    <div className="rep-guarantee-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="rep-guarantee-title">Confidencialidad</span>
                      <span className="rep-guarantee-desc">Tu identidad está protegida. Puedes reportar de forma anónima.</span>
                    </div>
                  </div>
                  <div className="rep-guarantee">
                    <div className="rep-guarantee-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <span className="rep-guarantee-title">Atención prioritaria</span>
                      <span className="rep-guarantee-desc">Las condiciones de riesgo se atienden y dan seguimiento de forma oportuna.</span>
                    </div>
                  </div>
                  <div className="rep-guarantee">
                    <div className="rep-guarantee-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div>
                      <span className="rep-guarantee-title">Sin represalias</span>
                      <span className="rep-guarantee-desc">Prohibimos cualquier acto de represalia contra quien reporte de buena fe.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha — formulario */}
              <div className="rep-form-col">
                <div className="rep-fgrid">

                  <div className="rep-fg rep-fg--full">
                    <label>Tipo de reporte *</label>
                    <div className="rep-select-wrap">
                      <select value={form.tipo} onChange={e => set('tipo', e.target.value)}>
                        <option value="">Selecciona una categoría...</option>
                        {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="rep-fg rep-fg--full">
                    <label>Área o ubicación</label>
                    <div className="rep-select-wrap">
                      <select value={form.area} onChange={e => set('area', e.target.value)}>
                        <option value="">Selecciona si lo sabes...</option>
                        {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="rep-fg rep-fg--full">
                    <label>Fecha aproximada</label>
                    <input type="date" value={form.fecha} onChange={e => set('fecha', e.target.value)}
                      max={new Date().toISOString().split('T')[0]} />
                  </div>

                  <div className="rep-fg rep-fg--full">
                    <label>Descripción de la condición o el hecho *</label>
                    <textarea rows={5}
                      placeholder="Describe con detalle qué observaste u ocurrió, cuándo, dónde y quiénes estuvieron involucrados..."
                      value={form.descripcion}
                      onChange={e => set('descripcion', e.target.value)}
                    />
                  </div>

                  <div className="rep-fg rep-fg--full">
                    <label className="rep-anon-label">
                      <input type="checkbox" checked={form.anonimo} onChange={e => set('anonimo', e.target.checked)} />
                      <span className="rep-anon-check" />
                      Quiero reportar de forma <strong>anónima</strong>
                    </label>
                  </div>

                  {!form.anonimo && (
                    <>
                      <div className="rep-fg">
                        <label>Tu nombre (opcional)</label>
                        <input type="text" placeholder="Nombre completo" value={form.nombre} onChange={e => set('nombre', e.target.value)} />
                      </div>
                      <div className="rep-fg">
                        <label>Correo de contacto (opcional)</label>
                        <input type="email" placeholder="Para seguimiento de tu reporte" value={form.correo} onChange={e => set('correo', e.target.value)} />
                      </div>
                    </>
                  )}

                  {estado === 'error' && (
                    <div className="rep-fg rep-fg--full rep-error">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <p>{errMsg}</p>
                    </div>
                  )}

                  <div className="rep-fg rep-fg--full rep-form-footer">
                    <p className="rep-privacy-note">
                      La información es estrictamente confidencial y se usará únicamente para
                      la atención y seguimiento del reporte.
                    </p>
                    <button className="rep-submit" onClick={handleSubmit}
                      disabled={estado === 'sending'}
                      style={{ opacity: estado === 'sending' ? .6 : 1, cursor: estado === 'sending' ? 'wait' : 'pointer' }}>
                      {estado === 'sending' ? 'Enviando…' : 'Enviar reporte →'}
                    </button>
                  </div>

                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}
