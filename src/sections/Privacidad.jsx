import { useState } from 'react'

const MX = [
  {
    num: '01',
    label: 'Responsable del tratamiento',
    body: 'SUMINISTROS MARINOS E INDUSTRIALES DE MÉXICO, S.A. DE C.V. (SUMIMSA). Domicilio: Rio Mante #2420 int. 4, Col. Longoria Prolongación, Reynosa, Tamaulipas, C.P. 88699. Conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares.',
  },
  {
    num: '02',
    label: 'Fines del tratamiento',
    body: 'Sus datos se utilizan para: información sobre productos y servicios, identificación como cliente o proveedor, contratación de servicios, atención a quejas, facturación, contacto comercial, gestiones internas y envíos de comunicaciones e invitaciones a eventos.',
  },
  {
    num: '03',
    label: 'Derechos ARCO',
    body: 'Acceso, Rectificación, Cancelación y Oposición. Envíe solicitud con identificación oficial a:',
    contact: 'contactodpd@sumimsa.com.mx',
    footer: 'Tiempo de respuesta: 20 días hábiles.',
  },
]

const EU = [
  {
    num: '01',
    label: '¿A quién aplica el RGPD?',
    body: 'El RGPD se aplica cuando su empresa trata datos personales como parte de las actividades de una sucursal en la UE, o cuando está establecida fuera de la UE y ofrece productos o servicios a personas que se encuentran en ella.',
  },
  {
    num: '02',
    label: 'Sus derechos bajo el RGPD',
    body: 'Acceso, rectificación, supresión ("derecho al olvido"), portabilidad, limitación y oposición. Para ejercer sus derechos, contacte a nuestro delegado de protección de datos:',
    contact: 'contactodpd@sumimsa.com.mx',
  },
  {
    num: '03',
    label: 'Obligaciones de SUMIMSA',
    body: 'SUMIMSA se compromete a: obtener consentimiento explícito, respetar el derecho de acceso y portabilidad, implementar protección desde el diseño y por defecto, y notificar violaciones de seguridad en un máximo de 72 horas a la autoridad competente.',
  },
]

export default function Privacidad() {
  const [tab, setTab] = useState('mx')
  const sections = tab === 'mx' ? MX : EU
  const pdfHref  = tab === 'mx' ? '/sumimsa-aviso-privacidad.pdf' : '/sumimsa-gdpr-rgpd.pdf'
  const pdfLabel = tab === 'mx' ? 'Descargar Aviso completo — PDF' : 'Descargar RGPD completo — PDF'

  return (
    <section id="privacidad" className="section section-navy" style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 32, marginBottom: 48 }}>
          <div>
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Privacidad y Legal</span>
            </div>
            <h2 className="s-h2" style={{ marginBottom: 0 }}>
              Aviso de<br /><em>privacidad</em>
            </h2>
          </div>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: 0 }}>
            {[
              { id: 'mx', label: 'México', sub: 'LFPDPPP' },
              { id: 'eu', label: 'Unión Europea', sub: 'RGPD / GDPR' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: '14px 24px',
                  background: tab === t.id ? 'var(--cyan)' : 'rgba(255,255,255,.04)',
                  border: `1px solid ${tab === t.id ? 'var(--cyan)' : 'rgba(255,255,255,.1)'}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all .2s',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: tab === t.id ? '#fff' : 'rgba(255,255,255,.5)' }}>
                  {t.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.52rem', letterSpacing: 2, color: tab === t.id ? 'rgba(255,255,255,.7)' : 'rgba(255,255,255,.25)', marginTop: 3 }}>
                  {t.sub}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="reveal d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,.06)' }}>
          {sections.map((s) => (
            <div
              key={s.num}
              style={{
                background: 'rgba(255,255,255,.03)',
                padding: '32px 28px',
                borderTop: '2px solid var(--cyan)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.55rem', color: 'var(--cyan)', letterSpacing: 2 }}>{s.num}</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.08)' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: .5, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                {s.label}
              </h4>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.85, margin: 0, flex: 1 }}>
                {s.body}
                {s.contact && (
                  <>
                    {' '}<a href={`mailto:${s.contact}`} style={{ color: 'var(--cyan)', textDecoration: 'none', fontWeight: 600 }}>{s.contact}</a>
                  </>
                )}
                {s.footer && <><br /><span style={{ color: 'rgba(255,255,255,.35)', fontSize: '.76rem' }}>{s.footer}</span></>}
              </p>
            </div>
          ))}
        </div>

        {/* Footer row: download */}
        <div className="reveal d2" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
          <a href={pdfHref} download className="pdf-dl">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {pdfLabel}
          </a>
        </div>

      </div>
    </section>
  )
}
