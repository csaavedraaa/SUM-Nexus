import { useState } from 'react'
const CITIES = ['Tampico','Poza Rica','Cd. del Carmen','Veracruz','Paraíso']

export default function Bolsa() {
  const [city, setCity] = useState('Tampico')
  const [file, setFile] = useState(null)

  const submit = () => alert('¡Gracias por tu interés en SUMIMSA!\n\nHemos recibido tu solicitud. Nuestro equipo de Reclutamiento la revisará y se pondrá en contacto en 10-15 días hábiles.\n\nNuestros procesos de selección son completamente gratuitos.')

  return (
    <section id="bolsa" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Únete al equipo</span></div>
          <h2 className="s-h2">Estamos<br /><em>contratando</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start',marginBottom:44}}>
          <div>
            <p style={{fontSize:'.88rem',color:'var(--muted)',lineHeight:1.8,marginTop:12}}><strong style={{color:'var(--navy)'}}>SUMIMSA</strong> tiene vacantes disponibles para ti. Forma parte de nuestro excelente equipo y contribuye al crecimiento de una empresa 100% mexicana.</p>
            <p style={{fontSize:'.88rem',color:'var(--muted)',lineHeight:1.8,marginTop:8}}>Puedes enviarnos tu información curricular. La evaluaremos de acuerdo a los perfiles definidos. Si cumples con los requerimientos, nos pondremos en contacto contigo.</p>
            <div style={{borderLeft:'3px solid var(--cyan)',padding:'14px 18px',background:'rgba(0,155,219,.04)',border:'1px solid var(--border)',marginTop:14,borderLeftColor:'var(--cyan)'}}>
              <p style={{fontSize:'.79rem',color:'var(--muted)',lineHeight:1.7,margin:0}}>⏱️ <strong style={{color:'var(--navy)'}}>Proceso:</strong> Recepción → Revisión → Filtro → Contacto. Tiempo estimado: <strong style={{color:'var(--navy)'}}>10 a 15 días hábiles.</strong></p>
            </div>
            <div style={{borderLeft:'3px solid var(--amber)',padding:'14px 18px',background:'rgba(244,121,32,.03)',border:'1px solid var(--border)',marginTop:12,borderLeftColor:'var(--amber)'}}>
              <p style={{fontSize:'.79rem',color:'var(--muted)',lineHeight:1.7,margin:0}}>📁 Tu información permanece en nuestra base de datos por <strong style={{color:'var(--navy)'}}>6 meses.</strong></p>
            </div>
          </div>
          <div style={{background:'var(--navy)',padding:'26px 28px'}}>
            <h5 style={{fontFamily:'var(--font-mono)',fontSize:'.58rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',marginBottom:12}}>// Código de conducta</h5>
            <p style={{fontSize:'.8rem',color:'rgba(255,255,255,.5)',lineHeight:1.7,margin:0}}>"Seleccionaremos y asignaremos empleados con base en sus calificaciones, sin distinción de raza, religión, origen nacional, color, género, identidad de género, orientación sexual, edad o discapacidad. <strong style={{color:'var(--amber)'}}>No se solicitan pruebas de embarazo ni de VIH</strong> como requisitos de ingreso, permanencia o promoción laboral."</p>
          </div>
        </div>

        <div className="reveal d2">
          <p style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--muted)',letterSpacing:2,textTransform:'uppercase',marginBottom:10}}>Selecciona tu plaza</p>
          <div style={{display:'flex',gap:1,background:'var(--border)',marginBottom:1}}>
            {CITIES.map(c=>(
              <button key={c} onClick={()=>setCity(c)} style={{flex:1,background:city===c?'var(--off)':'#fff',border:'none',padding:'16px 10px',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:6,transition:'background .2s'}}>
                <span style={{fontSize:'1.5rem'}}>🗺️</span>
                <span style={{fontFamily:'var(--font-display)',fontSize:'.7rem',fontWeight:600,textTransform:'uppercase',letterSpacing:1,color:city===c?'var(--cyan)':'var(--muted)'}}>{c}</span>
                {city===c && <span style={{display:'block',width:18,height:2,background:'var(--cyan)'}} />}
              </button>
            ))}
          </div>

          <div style={{background:'var(--off)',border:'1px solid var(--border)'}}>
            <div style={{background:'var(--navy)',padding:'26px 30px',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
              <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.35rem',fontWeight:700,textTransform:'uppercase',color:'#fff',marginBottom:3}}>Aplicar a vacante</h3>
              <p style={{fontSize:'.8rem',color:'rgba(255,255,255,.4)',margin:0}}>Plaza: <strong style={{color:'var(--cyan)'}}>{city}</strong> — Envíanos tu información curricular.</p>
            </div>
            <div className="fgrid">
              <div className="fg"><label>Nombre completo</label><input type="text" placeholder="Tu nombre" /></div>
              <div className="fg"><label>Correo electrónico</label><input type="email" placeholder="tu@email.com" /></div>
              <div className="fg"><label>Teléfono</label><input type="tel" placeholder="+52 (000) 000 0000" /></div>
              <div className="fg"><label>Ciudad / Estado</label><input type="text" placeholder="Ciudad, Estado" /></div>
              <div className="fg full"><label>Cuéntanos acerca de ti</label><textarea rows={4} placeholder="Describe tu experiencia y el puesto al que aplicas..." /></div>
              <div className="fg full" style={{borderTop:'1px solid var(--border)',padding:26,textAlign:'center',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:7}}
                onClick={()=>document.getElementById('file-cv').click()}>
                <span style={{fontSize:'1.6rem'}}>📎</span>
                <p style={{fontSize:'.78rem',color:'var(--muted)',margin:0}}><strong style={{color:'var(--cyan)'}}>Subir CV</strong> — Arrastra aquí o haz clic</p>
                <p style={{fontSize:'.75rem',color:'var(--muted)',margin:0}}>{file ? file.name : 'PDF, DOC, DOCX — máx. 5MB'}</p>
                <input id="file-cv" type="file" accept=".pdf,.doc,.docx" style={{display:'none'}} onChange={e=>setFile(e.target.files[0])} />
              </div>
              <div className="form-footer-bar">
                <p>Al enviar aceptas nuestro aviso de privacidad.</p>
                <button className="btn-submit" onClick={submit}>Enviar solicitud →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}