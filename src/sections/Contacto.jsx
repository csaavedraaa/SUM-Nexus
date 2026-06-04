import { useState } from 'react'
import { sendMail, templateContacto } from '../utils/mailService'
import './Contacto.css'

const MAIL_TO  = 'fsantos@sumimsa.com.mx'
const MAIL_BCC = 'fchavez@sumimsa.com.mx'

const SOCIALS = [
  {label:'f',  href:'https://www.facebook.com/people/Sumimsa/61558016180136/'},
  {label:'ig', href:'https://www.instagram.com/sumimsaoficial'},
  {label:'in', href:'https://www.linkedin.com/company/sumimsa/'},
  {label:'yt', href:'https://www.youtube.com/@SUMIMSAOFICIAL'},
]
const CARDS = [
  {icon:'📍',title:'Matriz',   text:'Av. Hidalgo #3309, Centro Esmeralda. Col. Guadalupe, Tampico, Tams. C.P. 89120'},
  {icon:'📞',title:'Teléfono', text:'+52 (833) 369 0070'},
  {icon:'✉️',title:'Ventas',   text:'ventas@sumimsa.com.mx', href:'mailto:ventas@sumimsa.com.mx'},
  {icon:'🌐',title:'Web',      text:'www.sumimsa.com.mx',    href:'https://www.sumimsa.com.mx'},
]
const SECTORES = ['Petrolero','Naval','Metal-Mecánico','Energético','Otro']

export default function Contacto() {
  const [form,   setForm]   = useState({ nombre:'', empresa:'', correo:'', telefono:'', sector:'', asunto:'', mensaje:'' })
  const [estado, setEstado] = useState('idle')   // idle | sending | ok | error
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
      setForm({ nombre:'', empresa:'', correo:'', telefono:'', sector:'', asunto:'', mensaje:'' })
    } else {
      setEstado('error')
      setErrMsg(result.error || 'No se pudo enviar. Intenta de nuevo o escríbenos directamente.')
    }
  }

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-grid">

        {/* ── Datos de contacto ───────────── */}
        <div className="contacto-datos">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{background:'rgba(255,255,255,.2)'}} />
            <span className="eyebrow-text" style={{color:'rgba(255,255,255,.35)'}}>Contacto</span>
          </div>
          <h2 className="contacto-h2">
            Hablemos<br />de tu <em>proyecto</em>
          </h2>
          <p className="contacto-lead">Listos para ser tu único proveedor de herramientas, equipos y servicios industriales.</p>

          <div className="contacto-cards">
            {CARDS.map(c => (
              <div key={c.title} className="contacto-card">
                <div className="contacto-card-icon">{c.icon}</div>
                <div>
                  <h5 className="contacto-card-label">{c.title}</h5>
                  {c.href
                    ? <a href={c.href} className="contacto-card-val link">{c.text}</a>
                    : <p className="contacto-card-val">{c.text}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="contacto-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="contacto-social">{s.label}</a>
            ))}
          </div>
        </div>

        {/* ── Formulario ──────────────────── */}
        <div className="contacto-form-wrap">
          <h3 className="contacto-form-title">Envíanos un mensaje</h3>

          {/* Estado OK */}
          {estado === 'ok' ? (
            <div className="contacto-ok">
              <span className="contacto-ok-icon">✅</span>
              <div>
                <h4 className="contacto-ok-title">¡Mensaje enviado!</h4>
                <p className="contacto-ok-msg">Gracias por contactar a SUMIMSA. Un asesor se comunicará contigo a la brevedad.</p>
                <button className="contacto-ok-btn" onClick={() => setEstado('idle')}>
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            <div className="fgrid dark">
              <div className="fg"><label>Nombre *</label>
                <input type="text" placeholder="Tu nombre completo"
                  value={form.nombre} onChange={e => set('nombre', e.target.value)} />
              </div>
              <div className="fg"><label>Empresa</label>
                <input type="text" placeholder="Nombre de empresa"
                  value={form.empresa} onChange={e => set('empresa', e.target.value)} />
              </div>
              <div className="fg"><label>Correo *</label>
                <input type="email" placeholder="tu@empresa.com"
                  value={form.correo} onChange={e => set('correo', e.target.value)} />
              </div>
              <div className="fg"><label>Teléfono</label>
                <input type="tel" placeholder="+52 (000) 000 0000"
                  value={form.telefono} onChange={e => set('telefono', e.target.value)} />
              </div>
              <div className="fg"><label>Sector</label>
                <select value={form.sector} onChange={e => set('sector', e.target.value)}
                  style={{background:'transparent',border:'none',color: form.sector ? '#fff' : 'rgba(255,255,255,.4)',fontFamily:'var(--font-body)',fontSize:'.87rem',padding:'5px 18px 12px',width:'100%',outline:'none'}}>
                  <option value="" style={{background:'#0d1e4a'}}>Selecciona...</option>
                  {SECTORES.map(o => <option key={o} value={o} style={{background:'#0d1e4a'}}>{o}</option>)}
                </select>
              </div>
              <div className="fg"><label>Asunto</label>
                <input type="text" placeholder="¿En qué te ayudamos?"
                  value={form.asunto} onChange={e => set('asunto', e.target.value)} />
              </div>
              <div className="fg full"><label>Mensaje</label>
                <textarea rows={5} placeholder="Describe tus necesidades..."
                  value={form.mensaje} onChange={e => set('mensaje', e.target.value)} />
              </div>

              {/* Error inline */}
              {estado === 'error' && (
                <div className="fg full" style={{padding:'12px 20px',background:'rgba(220,38,38,.1)',border:'1px solid rgba(220,38,38,.3)'}}>
                  <p style={{fontSize:'.82rem',color:'#fca5a5',margin:0}}>⚠️ {errMsg}</p>
                </div>
              )}

              <div className="form-footer-bar">
                <p>Al enviar aceptas nuestro aviso de privacidad.</p>
                <button
                  className="btn-submit"
                  onClick={handleSubmit}
                  disabled={estado === 'sending'}
                  style={{opacity: estado === 'sending' ? .6 : 1, cursor: estado === 'sending' ? 'wait' : 'pointer'}}
                >
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
