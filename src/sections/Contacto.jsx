import { useState } from 'react'
import { sendMail, templateContacto } from '../utils/mailService'
import './Contacto.css'

const MAIL_TO  = 'fsantos@sumimsa.com.mx'
const MAIL_BCC = 'fchavez@sumimsa.com.mx'

const SECTORES = ['Petrolero', 'Naval', 'Metal-Mecánico', 'Energético', 'Otro']

const CARDS = [
  {
    title: 'Matriz',
    text: 'Av. Hidalgo #3309, Centro Esmeralda. Col. Guadalupe, Tampico, Tams. C.P. 89120',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Teléfono',
    text: '+52 (833) 369 0070',
    href: 'tel:+528333690070',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.07 6.07l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    title: 'Ventas',
    text: 'ventas@sumimsa.com.mx',
    href: 'mailto:ventas@sumimsa.com.mx',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    title: 'Web',
    text: 'www.sumimsa.com.mx',
    href: 'https://www.sumimsa.com.mx',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

const SOCIALS = [
  {
    label: 'Facebook', short: 'FB',
    href: 'https://www.facebook.com/people/Sumimsa/61558016180136/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram', short: 'IG',
    href: 'https://www.instagram.com/sumimsaoficial',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn', short: 'IN',
    href: 'https://www.linkedin.com/company/sumimsa/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube', short: 'YT',
    href: 'https://www.youtube.com/@SUMIMSAOFICIAL',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
]

export default function Contacto() {
  const [form,   setForm]   = useState({ nombre: '', empresa: '', correo: '', telefono: '', sector: '', asunto: '', mensaje: '' })
  const [estado, setEstado] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.nombre.trim() || !form.correo.trim()) {
      setErrMsg('Por favor completa al menos nombre y correo.')
      setEstado('error')
      return
    }
    setEstado('sending')
    setErrMsg('')
    const result = await sendMail({
      to:      MAIL_TO,
      bcc:     MAIL_BCC,
      asunto:  `Contacto web — ${form.nombre}${form.empresa ? ` — ${form.empresa}` : ''}`,
      htmlBody: templateContacto(form),
    })
    if (result.ok) {
      setEstado('ok')
      setForm({ nombre: '', empresa: '', correo: '', telefono: '', sector: '', asunto: '', mensaje: '' })
    } else {
      setEstado('error')
      setErrMsg(result.error || 'No se pudo enviar. Intenta de nuevo o escríbenos directamente.')
    }
  }

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-grid">

        {/* ── Columna izquierda: datos ── */}
        <div className="contacto-datos">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{ background: 'rgba(255,255,255,.2)' }} />
            <span className="eyebrow-text" style={{ color: 'rgba(255,255,255,.35)' }}>Contacto</span>
          </div>
          <h2 className="contacto-h2">
            Hablemos<br />de tu <em>proyecto</em>
          </h2>
          <p className="contacto-lead">
            Listos para ser tu único proveedor de herramientas, equipos y servicios industriales.
          </p>

          <div className="contacto-cards">
            {CARDS.map(c => (
              <div key={c.title} className="contacto-card">
                <div className="contacto-card-icon">{c.icon}</div>
                <div className="contacto-card-body">
                  <span className="contacto-card-label">{c.title}</span>
                  {c.href
                    ? <a href={c.href} className="contacto-card-val link">{c.text}</a>
                    : <p className="contacto-card-val">{c.text}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="contacto-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="contacto-social" title={s.label}>
                {s.icon}
                <span className="contacto-social-label">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Columna derecha: formulario ── */}
        <div className="contacto-form-wrap">
          <div className="contacto-form-header">
            <p className="contacto-form-eyebrow">// Envíanos un mensaje</p>
            <h3 className="contacto-form-title">¿En qué podemos<br /><em>ayudarte?</em></h3>
          </div>

          {estado === 'ok' ? (
            <div className="contacto-ok">
              <div className="contacto-ok-check">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <h4 className="contacto-ok-title">¡Mensaje enviado!</h4>
                <p className="contacto-ok-msg">Gracias por contactar a SUMIMSA. Un asesor se comunicará contigo a la brevedad.</p>
                <button className="contacto-ok-btn" onClick={() => setEstado('idle')}>Enviar otro mensaje</button>
              </div>
            </div>
          ) : (
            <div className="fgrid dark">
              <div className="fg"><label>Nombre *</label>
                <input type="text" placeholder="Tu nombre completo" value={form.nombre} onChange={e => set('nombre', e.target.value)} />
              </div>
              <div className="fg"><label>Empresa</label>
                <input type="text" placeholder="Nombre de empresa" value={form.empresa} onChange={e => set('empresa', e.target.value)} />
              </div>
              <div className="fg"><label>Correo *</label>
                <input type="email" placeholder="tu@empresa.com" value={form.correo} onChange={e => set('correo', e.target.value)} />
              </div>
              <div className="fg"><label>Teléfono</label>
                <input type="tel" placeholder="+52 (000) 000 0000" value={form.telefono} onChange={e => set('telefono', e.target.value)} />
              </div>
              <div className="fg"><label>Sector</label>
                <select value={form.sector} onChange={e => set('sector', e.target.value)}
                  style={{ background: 'transparent', border: 'none', color: form.sector ? '#fff' : 'rgba(255,255,255,.3)', fontFamily: 'var(--font-body)', fontSize: '.87rem', padding: '5px 18px 12px', width: '100%', outline: 'none' }}>
                  <option value="" style={{ background: '#0d1e4a' }}>Selecciona...</option>
                  {SECTORES.map(o => <option key={o} value={o} style={{ background: '#0d1e4a' }}>{o}</option>)}
                </select>
              </div>
              <div className="fg"><label>Asunto</label>
                <input type="text" placeholder="¿En qué te ayudamos?" value={form.asunto} onChange={e => set('asunto', e.target.value)} />
              </div>
              <div className="fg full"><label>Mensaje</label>
                <textarea rows={5} placeholder="Describe tus necesidades..." value={form.mensaje} onChange={e => set('mensaje', e.target.value)} />
              </div>

              {estado === 'error' && (
                <div className="fg full contacto-error">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p>{errMsg}</p>
                </div>
              )}

              <div className="form-footer-bar">
                <p>Al enviar aceptas nuestro aviso de privacidad.</p>
                <button className="btn-submit" onClick={handleSubmit}
                  disabled={estado === 'sending'}
                  style={{ opacity: estado === 'sending' ? .6 : 1, cursor: estado === 'sending' ? 'wait' : 'pointer' }}>
                  {estado === 'sending' ? 'Enviando…' : 'Enviar →'}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
