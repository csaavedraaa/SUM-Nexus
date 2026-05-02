import { useState } from 'react'
import DetailPage from '../components/DetailPage'

const PTS = [
  ['01','Todos los incidentes se pueden prevenir','Garantizamos que todas las operaciones se ejecuten con la máxima seguridad, salud y protección ambiental dentro y fuera de la empresa.'],
  ['02','La SSPA es responsabilidad de todos','Integramos en cada tarea todos los aspectos de seguridad, salud y protección ambiental en los procesos continuos de todos los trabajadores.'],
  ['03','Mejores prácticas y tecnología ambiental','Aplicamos las mejores prácticas de seguridad y tecnología ambiental disponible para beneficio de los trabajadores y la comunidad.'],
  ['04','Cumplimiento legal garantizado','Cumplimos con los requisitos legales y normas complementarias aplicables a nuestra organización y partes interesadas.'],
  ['05','Cero contaminación','Prevenimos la contaminación y contribuimos al desarrollo sostenible buscando el equilibrio con el medio ambiente en cada operación.'],
]
const METRICS = [['Seguridad Industrial','100%'],['Salud Ocupacional','100%'],['Protección Ambiental','100%']]
const ICONS = [['🦺','Seguridad Industrial'],['🏥','Salud en el Trabajo'],['🌿','Protección Ambiental'],['📋','Mejora Continua']]

export default function SSPA() {
  const [openSSPA, setOpenSSPA] = useState(false)

  return (
    <section id="sspa" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" style={{background:'var(--green)'}} /><span className="eyebrow-text" style={{color:'var(--green)'}}>Política SSPA</span></div>
          <h2 className="s-h2">Seguridad.<br /><em style={{color:'var(--green)'}}>Sin excepciones.</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'320px 1fr',gap:48,alignItems:'start',marginTop:52}}>
          {/* Sidebar */}
          <div style={{background:'#fff',border:'1px solid var(--border)',padding:32,position:'sticky',top:88}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:700,textTransform:'uppercase',color:'var(--navy)',marginBottom:20,paddingBottom:14,borderBottom:'1px solid var(--border)'}}>
              Nivel de cumplimiento
            </div>
            {METRICS.map(([label,pct])=>(
              <div key={label} style={{marginBottom:14}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
                  <span style={{fontSize:'.78rem',color:'var(--muted)'}}>{label}</span>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'.62rem',color:'var(--cyan)'}}>{pct}</span>
                </div>
                <div style={{height:3,background:'var(--border)',borderRadius:2}}>
                  <div style={{height:'100%',background:'var(--cyan)',borderRadius:2,width:'100%',animation:'fillw 2s ease forwards'}} />
                </div>
              </div>
            ))}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7,marginTop:20}}>
              {ICONS.map(([ic,lbl])=>(
                <div key={lbl} style={{border:'1px solid var(--border)',padding:10,display:'flex',alignItems:'center',gap:8}}>
                  <span style={{fontSize:'.95rem',flexShrink:0}}>{ic}</span>
                  <span style={{fontSize:'.7rem',color:'var(--muted)',lineHeight:1.3}}>{lbl}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Points */}
          <div style={{display:'flex',flexDirection:'column',gap:1,background:'var(--border)'}}>
            {PTS.map(([n,title,desc])=>(
              <div key={n} style={{background:'#fff',padding:'26px 30px',display:'flex',gap:18,alignItems:'flex-start',transition:'background .2s'}}
                onMouseEnter={e=>e.currentTarget.style.background='var(--off)'}
                onMouseLeave={e=>e.currentTarget.style.background='#fff'}>
                <div style={{fontFamily:'var(--font-display)',fontSize:'2rem',fontWeight:700,color:'var(--border)',lineHeight:1,flexShrink:0,minWidth:40,transition:'color .2s'}}>{n}</div>
                <div>
                  <h5 style={{fontFamily:'var(--font-display)',fontSize:'.92rem',fontWeight:700,textTransform:'uppercase',letterSpacing:.5,color:'var(--navy)',marginBottom:5}}>{title}</h5>
                  <p style={{fontSize:'.81rem',color:'var(--muted)',lineHeight:1.7,margin:0}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas" onClick={() => setOpenSSPA(true)}>
            Ver política SSPA completa
          </button>
        </div>
      </div>

      <style>{`@keyframes fillw{from{width:0}}`}</style>

      <DetailPage
        isOpen={openSSPA}
        onClose={() => setOpenSSPA(false)}
        eyebrow="Política SSPA"
        title="Seguridad como <em>Valor Fundamental</em>"
        lead="En SUMIMSA, la seguridad no es un requisito regulatorio — es un valor que forma parte del ADN de nuestra empresa. Cero incidentes no es una meta: es nuestro estándar."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&fit=crop" alt="Seguridad Industrial SUMIMSA" />

        <h3>Seguridad Industrial</h3>
        <p>Todos nuestros productos de EPP cumplen con las normas NOM-017-STPS y estándares ANSI/ISEA. Nuestro equipo técnico está certificado para asesorar en la selección del equipo de protección adecuado para cada aplicación y riesgo específico en los sectores petrolero, naval, metalmecánico y energético.</p>
        <p>La Política SSPA de SUMIMSA establece que todos los incidentes se pueden y se deben prevenir. Cada colaborador, sin importar su nivel jerárquico, es responsable de mantener y promover las condiciones seguras de trabajo.</p>

        <h3>Salud Ocupacional</h3>
        <p>Promovemos activamente la cultura de salud ocupacional entre nuestros clientes y colaboradores, con capacitaciones periódicas sobre riesgos industriales, ergonomía y primeros auxilios. Seleccionamos productos ergonómicos que reducen el riesgo de lesiones por trabajo repetitivo en nuestros programas de suministro.</p>

        <h3>Protección Ambiental</h3>
        <p>Nuestras operaciones están diseñadas para minimizar el impacto ambiental. Trabajamos con proveedores comprometidos con prácticas sostenibles, fomentamos la economía circular en el manejo de herramientas y equipos, y contribuimos al desarrollo sostenible en las comunidades donde operamos.</p>

        <h3>Mejora Continua</h3>
        <p>Revisamos y actualizamos nuestra política SSPA de forma periódica para incorporar las mejores prácticas de la industria, nuevas regulaciones nacionales e internacionales, y las lecciones aprendidas de nuestras operaciones.</p>

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>NOM-017-STPS</h4>
            <p>Todo nuestro EPP cumple con la norma oficial mexicana vigente para equipos de protección personal.</p>
          </div>
          <div className="dp-feature">
            <h4>ANSI/ISEA</h4>
            <p>Herramienta y equipos certificados bajo estándares internacionales ANSI e ISEA.</p>
          </div>
          <div className="dp-feature">
            <h4>Capacitación Gratuita</h4>
            <p>Programa de capacitación en seguridad industrial para clientes, sin costo adicional.</p>
          </div>
          <div className="dp-feature">
            <h4>Auditorías en Sitio</h4>
            <p>Auditorías de seguridad en las instalaciones del cliente disponibles para contratos corporativos.</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
