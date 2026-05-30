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

export default function Contacto() {
  const submit = () => alert('¡Mensaje enviado!\n\nGracias por contactar a SUMIMSA. Un asesor se comunicará contigo a la brevedad.\n\nEscríbenos directamente: ventas@sumimsa.com.mx')
  return (
    <section id="contacto" style={{padding:0,position:'relative',zIndex:5}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',background:'var(--navy)'}}>
        {/* Left */}
        <div style={{padding:'60px 48px',borderRight:'1px solid rgba(255,255,255,.07)'}}>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text" style={{color:'rgba(255,255,255,.35)'}}>Contacto</span></div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'2.7rem',fontWeight:700,textTransform:'uppercase',letterSpacing:-1,color:'#fff',lineHeight:.9,marginBottom:8}}>
            Hablemos<br />de tu <em style={{color:'var(--cyan)',fontStyle:'normal'}}>proyecto</em>
          </h2>
          <p style={{fontSize:'.84rem',color:'rgba(255,255,255,.45)',margin:'14px 0 36px',lineHeight:1.8}}>Listos para ser tu único proveedor de herramientas, equipos y servicios industriales.</p>
          {CARDS.map(c=>(
            <div key={c.title} style={{display:'flex',gap:12,padding:'14px 0',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
              <div style={{width:34,height:34,border:'1px solid rgba(255,255,255,.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.85rem',flexShrink:0}}>{c.icon}</div>
              <div>
                <h5 style={{fontFamily:'var(--font-mono)',fontSize:'.58rem',color:'rgba(255,255,255,.3)',letterSpacing:2,textTransform:'uppercase',marginBottom:3}}>{c.title}</h5>
                {c.href
                  ? <a href={c.href} style={{fontSize:'.83rem',color:'rgba(255,255,255,.55)',transition:'color .2s'}} onMouseEnter={e=>e.currentTarget.style.color='var(--cyan)'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,.55)'}>{c.text}</a>
                  : <p style={{fontSize:'.83rem',color:'rgba(255,255,255,.55)',margin:0}}>{c.text}</p>}
              </div>
            </div>
          ))}
          <div style={{display:'flex',gap:1,background:'rgba(255,255,255,.06)',marginTop:28}}>
            {SOCIALS.map(s=>(
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{flex:1,height:42,background:'rgba(255,255,255,.04)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.8rem',color:'rgba(255,255,255,.3)',transition:'all .2s'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,155,219,.15)';e.currentTarget.style.color='var(--cyan)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.04)';e.currentTarget.style.color='rgba(255,255,255,.3)'}}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        {/* Right: form */}
        <div style={{padding:'60px 48px'}}>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.45rem',fontWeight:700,textTransform:'uppercase',color:'#fff',marginBottom:26}}>Envíanos un mensaje</h3>
          <div className="fgrid dark">
            <div className="fg"><label>Nombre</label><input type="text" placeholder="Tu nombre completo" /></div>
            <div className="fg"><label>Empresa</label><input type="text" placeholder="Nombre de empresa" /></div>
            <div className="fg"><label>Correo</label><input type="email" placeholder="tu@empresa.com" /></div>
            <div className="fg"><label>Teléfono</label><input type="tel" placeholder="+52 (000) 000 0000" /></div>
            <div className="fg"><label>Sector</label>
              <select style={{background:'transparent',border:'none',color:'#fff',fontFamily:'var(--font-body)',fontSize:'.87rem',padding:'5px 18px 12px',width:'100%',outline:'none'}}>
                <option value="" style={{background:'#0d1e4a'}}>Selecciona...</option>
                {['Petrolero','Naval','Metal-Mecánico','Energético','Otro'].map(o=><option key={o} style={{background:'#0d1e4a'}}>{o}</option>)}
              </select>
            </div>
            <div className="fg"><label>Asunto</label><input type="text" placeholder="¿En qué te ayudamos?" /></div>
            <div className="fg full"><label>Mensaje</label><textarea rows={5} placeholder="Describe tus necesidades..." /></div>
            <div className="form-footer-bar">
              <p>Al enviar aceptas nuestro aviso de privacidad.</p>
              <button className="btn-submit" onClick={submit}>Enviar →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
