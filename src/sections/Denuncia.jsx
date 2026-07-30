import { useState, useEffect } from 'react'
import './Denuncia.css'

const TIPOS = [
  'Soborno o corrupción',
  'Fraude o malversación',
  'Conflicto de interés',
  'Acoso o discriminación',
  'Incumplimiento normativo / legal',
  'Seguridad e higiene',
  'Medio ambiente',
  'Otro',
]

const AREAS = [
  'Dirección General',
  'Administración y Finanzas',
  'Compras / Proveeduría',
  'Ventas / Comercial',
  'Operaciones',
  'Recursos Humanos',
  'Otra / No sé',
]

export default function DenunciaModal({ onClose }) {
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
      setErrMsg('Por favor selecciona el tipo de irregularidad y describe los hechos.')
      setEstado('error')
      return
    }
    setEstado('sending')
    setErrMsg('')
    /* TODO: conectar con base de datos / endpoint de cumplimiento */
    await new Promise(r => setTimeout(r, 900))
    setEstado('ok')
  }

  return (
    <div className="den-overlay" onClick={onClose}>
      <div className="den-modal" onClick={e => e.stopPropagation()}>

        {/* ── Header ── */}
        <div className="den-modal-header">
          <div className="den-modal-title-wrap">
            <span className="den-modal-badge">Línea de Denuncia</span>
            <span className="den-modal-subtitle">Canal confidencial de reporte — SUMIMSA</span>
          </div>
          <button className="den-modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="den-modal-body">

          {estado === 'ok' ? (
            <div className="den-ok">
              <div className="den-ok-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h2 className="den-ok-title">Reporte recibido</h2>
              <p className="den-ok-msg">
                Tu denuncia ha sido enviada al área de Cumplimiento e Integridad de SUMIMSA.
                Será investigada conforme a nuestros protocolos internos. Gracias por contribuir
                a una cultura de integridad.
              </p>
              <button className="den-ok-btn" onClick={() => {
                setEstado('idle')
                setForm({ tipo:'', area:'', descripcion:'', fecha:'', nombre:'', correo:'', anonimo:false })
              }}>
                Enviar otro reporte
              </button>
            </div>
          ) : (
            <div className="den-layout">

              {/* Columna izquierda — garantías */}
              <div className="den-guarantees-col">
                <p className="den-intro-text">
                  Puedes reportar conductas contrarias a nuestro Código de Ética, políticas
                  internas o disposiciones legales. Tu reporte es tratado con total
                  confidencialidad.
                </p>
                <div className="den-guarantees">
                  <div className="den-guarantee">
                    <div className="den-guarantee-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="den-guarantee-title">Confidencialidad</span>
                      <span className="den-guarantee-desc">Tu identidad está protegida. Puedes reportar de forma anónima.</span>
                    </div>
                  </div>
                  <div className="den-guarantee">
                    <div className="den-guarantee-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <span className="den-guarantee-title">Seguimiento oportuno</span>
                      <span className="den-guarantee-desc">Cada denuncia es investigada conforme a nuestros protocolos.</span>
                    </div>
                  </div>
                  <div className="den-guarantee">
                    <div className="den-guarantee-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div>
                      <span className="den-guarantee-title">Sin represalias</span>
                      <span className="den-guarantee-desc">Prohibimos cualquier acto de represalia contra quien reporte de buena fe.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha — formulario */}
              <div className="den-form-col">
                <div className="den-fgrid">

                  <div className="den-fg den-fg--full">
                    <label>Tipo de irregularidad *</label>
                    <div className="den-select-wrap">
                      <select value={form.tipo} onChange={e => set('tipo', e.target.value)}>
                        <option value="">Selecciona una categoría...</option>
                        {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="den-fg den-fg--full">
                    <label>Área o persona involucrada</label>
                    <div className="den-select-wrap">
                      <select value={form.area} onChange={e => set('area', e.target.value)}>
                        <option value="">Selecciona si lo sabes...</option>
                        {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="den-fg den-fg--full">
                    <label>Fecha aproximada de los hechos</label>
                    <input type="date" value={form.fecha} onChange={e => set('fecha', e.target.value)}
                      max={new Date().toISOString().split('T')[0]} />
                  </div>

                  <div className="den-fg den-fg--full">
                    <label>Descripción de los hechos *</label>
                    <textarea rows={5}
                      placeholder="Describe con detalle qué ocurrió, cuándo, dónde y quiénes estuvieron involucrados..."
                      value={form.descripcion}
                      onChange={e => set('descripcion', e.target.value)}
                    />
                  </div>

                  <div className="den-fg den-fg--full">
                    <label className="den-anon-label">
                      <input type="checkbox" checked={form.anonimo} onChange={e => set('anonimo', e.target.checked)} />
                      <span className="den-anon-check" />
                      Quiero reportar de forma <strong>anónima</strong>
                    </label>
                  </div>

                  {!form.anonimo && (
                    <>
                      <div className="den-fg">
                        <label>Tu nombre (opcional)</label>
                        <input type="text" placeholder="Nombre completo" value={form.nombre} onChange={e => set('nombre', e.target.value)} />
                      </div>
                      <div className="den-fg">
                        <label>Correo de contacto (opcional)</label>
                        <input type="email" placeholder="Para seguimiento de tu reporte" value={form.correo} onChange={e => set('correo', e.target.value)} />
                      </div>
                    </>
                  )}

                  {estado === 'error' && (
                    <div className="den-fg den-fg--full den-error">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <p>{errMsg}</p>
                    </div>
                  )}

                  <div className="den-fg den-fg--full den-form-footer">
                    <p className="den-privacy-note">
                      La información es estrictamente confidencial y se usará únicamente para
                      la investigación interna.
                    </p>
                    <button className="den-submit" onClick={handleSubmit}
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
