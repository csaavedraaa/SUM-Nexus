import { useState } from 'react'

export default function Privacidad() {
  const [tab, setTab] = useState('mx')
  return (
    <section className="section section-navy">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Privacidad y Legal</span></div>
          <h2 className="s-h2">Aviso de<br /><em>privacidad</em></h2>
        </div>
        <div className="reveal d1" style={{marginTop:52}}>
          <div style={{display:'flex',gap:0,background:'var(--border)'}}>
            {[['mx','🇲🇽 México — LFPDPPP'],['eu','🇪🇺 GDPR Unión Europea']].map(([id,label])=>(
              <button key={id} onClick={()=>setTab(id)}
                style={{padding:'13px 26px',background:tab===id?'var(--navy)':'#fff',border:'none',cursor:'pointer',fontFamily:'var(--font-display)',fontSize:'.83rem',fontWeight:600,textTransform:'uppercase',letterSpacing:.5,color:tab===id?'var(--cyan)':'var(--muted)',transition:'all .2s',borderRight:'1px solid var(--border)'}}>
                {label}
              </button>
            ))}
          </div>
          <div style={{border:'1px solid var(--border)',borderTop:'none',padding:32,background:'#fff'}}>
            {tab==='mx' ? (
              <>
                <h4 style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',marginBottom:8}}>Responsable</h4>
                <p style={{fontSize:'.82rem',color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>SUMINISTROS MARINOS E INDUSTRIALES DE MÉXICO, S.A. DE C.V. (SUMIMSA). Domicilio: Rio Mante #2420 int. 4, Col. Longoria Prolongación, Reynosa, Tamaulipas, C.P. 88699. Conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares.</p>
                <h4 style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',marginBottom:8}}>Fines del tratamiento</h4>
                <p style={{fontSize:'.82rem',color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>Sus datos se utilizan para: información sobre productos y servicios, identificación como cliente o proveedor, contratación de servicios, atención a quejas, facturación, contacto comercial, gestiones internas y envíos de comunicaciones e invitaciones a eventos.</p>
                <h4 style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',marginBottom:8}}>Derechos ARCO</h4>
                <p style={{fontSize:'.82rem',color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>Acceso, Rectificación, Cancelación y Oposición. Envíe solicitud con identificación oficial a: <strong style={{color:'var(--navy)'}}>contactodpd@sumimsa.com.mx</strong>. Tiempo de respuesta: 20 días hábiles.</p>
                <a href="/sumimsa-aviso-privacidad.pdf" download className="pdf-dl">📄 Descargar Aviso completo — PDF</a>
              </>
            ) : (
              <>
                <h4 style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',marginBottom:8}}>¿A quién se aplica el RGPD?</h4>
                <p style={{fontSize:'.82rem',color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>El RGPD se aplica cuando su empresa trata datos personales como parte de las actividades de una sucursal en la UE, o cuando está establecida fuera de la UE y ofrece productos o servicios a personas en la UE.</p>
                <h4 style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',marginBottom:8}}>Sus derechos bajo el RGPD</h4>
                <p style={{fontSize:'.82rem',color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>Acceso, rectificación, supresión ("derecho al olvido"), portabilidad, limitación y oposición. Contacte: <strong style={{color:'var(--navy)'}}>contactodpd@sumimsa.com.mx</strong></p>
                <h4 style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',marginBottom:8}}>Obligaciones de SUMIMSA</h4>
                <p style={{fontSize:'.82rem',color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>SUMIMSA se compromete a: obtener consentimiento explícito, respetar el derecho de acceso y portabilidad, implementar protección desde el diseño y por defecto, y notificar violaciones de seguridad en máximo 72 horas.</p>
                <a href="/sumimsa-gdpr-rgpd.pdf" download className="pdf-dl">📄 Descargar RGPD completo — PDF</a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}