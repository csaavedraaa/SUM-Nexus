import { useState } from 'react'
import DetailPage from '../components/DetailPage'

export default function Nosotros() {
  const [openNosotros, setOpenNosotros] = useState(false)

  const rows = [
    ['Fundada en',    'Tampico, Tamps.'],
    ['Tipo',          '100% Mexicana'],
    ['Ubicaciones',   '7 Plazas activas'],
    ['Sectores',      'Petro · Naval · MM · Energía'],
    ['Clasificación', 'Clase Mundial'],
    ['Estatus',       '● Activo'],
  ]
  const chips = ['Calidad','Confianza','Innovación','Seguridad','Liderazgo','México']

  return (
    <section id="nosotros" className="section section-alt">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
          {/* Terminal visual */}
          <div className="reveal" style={{position:'relative',paddingRight:24}}>
            <div style={{background:'var(--navy)',border:'1px solid var(--border)',overflow:'hidden'}}>
              <div style={{background:'rgba(0,0,0,.2)',padding:'10px 16px',display:'flex',alignItems:'center',gap:6,borderBottom:'1px solid rgba(255,255,255,.07)'}}>
                {['#ff5f57','#febc2e','#28c840'].map(c=><div key={c} style={{width:10,height:10,borderRadius:'50%',background:c}} />)}
                <span style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'rgba(255,255,255,.3)',letterSpacing:2,marginLeft:8}}>sumimsa — company-profile.json</span>
              </div>
              <div style={{padding:'24px 22px'}}>
                {rows.map(([k,v])=>(
                  <div key={k} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'rgba(255,255,255,.3)',letterSpacing:2,textTransform:'uppercase'}}>{k}</span>
                    <span style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:600,color:k==='Estatus'?'#00c46a':'var(--cyan)',letterSpacing:.5}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:'absolute',bottom:-18,right:-18,background:'var(--amber)',padding:'18px 20px',clipPath:'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)'}}>
              <strong style={{fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:700,color:'#fff',display:'block',lineHeight:1}}>+15</strong>
              <span style={{fontSize:'.6rem',color:'rgba(255,255,255,.75)',textTransform:'uppercase',letterSpacing:1.5}}>Años de experiencia</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal d2">
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Acerca de SUMIMSA</span></div>
            <h2 className="s-h2" style={{marginBottom:18}}>Empresa de<br /><em>clase mundial</em></h2>
            <div style={{fontFamily:'var(--font-display)',fontSize:'1.35rem',fontWeight:300,color:'var(--navy)',lineHeight:1.45,marginBottom:18,borderLeft:'3px solid var(--cyan)',paddingLeft:18}}>
              "Comprometidos a ser el único proveedor que necesitas para operar con excelencia."
            </div>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.8,marginBottom:12}}>
              Es en Tampico, Tamaulipas donde <strong style={{color:'var(--navy)'}}>SUMIMSA</strong> inicia operaciones con el compromiso de llegar a ser una empresa de clase mundial, atendiendo las necesidades de nuestros clientes en los sectores metal-mecánico, petrolero, naval, automotriz y energético.
            </p>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.8,marginBottom:12}}>
              Somos una empresa 100% mexicana, distribuidora directa de herramientas, equipos y accesorios de las marcas más reconocidas en el mercado, con servicios integrales de calidad, trabajando en forma efectiva y segura.
            </p>
            <div className="chips">
              {chips.map(c=><div key={c} className="chip">{c}</div>)}
            </div>

            <div style={{marginTop: 32}}>
              <button className="btn-ver-mas" onClick={() => setOpenNosotros(true)}>
                Conocer más sobre SUMIMSA
              </button>
            </div>
          </div>
        </div>
      </div>

      <DetailPage
        isOpen={openNosotros}
        onClose={() => setOpenNosotros(false)}
        eyebrow="Acerca de SUMIMSA"
        title="Empresa de <em>clase mundial</em>"
        lead="SUMIMSA nació en Tampico con un compromiso: ser el único proveedor que la industria mexicana necesita. Más de 15 años después, ese compromiso nos define."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&fit=crop" alt="SUMIMSA operaciones" />

        <h3>Nuestra Historia</h3>
        <p>SUMIMSA inicia operaciones en Tampico, Tamaulipas, con la visión de convertirse en la empresa de suministro industrial más confiable de México. Desde el primer día, apostamos por la calidad, la confianza y el servicio personalizado como pilares de nuestra identidad.</p>
        <p>Con más de 15 años en el mercado, hemos crecido de una plaza en Tampico a una red de 7 ubicaciones estratégicas en el Golfo de México, con más de 580 colaboradores comprometidos con la excelencia.</p>

        <h3>Misión</h3>
        <p>Ser el proveedor integral de herramientas, equipos y servicios industriales que la industria mexicana necesita para operar con excelencia, seguridad y eficiencia. Nos comprometemos a ofrecer calidad, confiabilidad y servicio excepcional en cada interacción.</p>

        <h3>Visión</h3>
        <p>Consolidarnos como la empresa de suministro industrial de clase mundial número uno en México, reconocida por nuestros clientes, proveedores y colaboradores como el socio estratégico que transforma la cadena de suministro industrial del país.</p>

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>+15 Años</h4>
            <p>Más de quince años operando con excelencia en los sectores industriales más exigentes de México.</p>
          </div>
          <div className="dp-feature">
            <h4>580+ Colaboradores</h4>
            <p>Equipo altamente calificado distribuido en 7 plazas a lo largo del Golfo de México.</p>
          </div>
          <div className="dp-feature">
            <h4>100% Mexicana</h4>
            <p>Empresa con capital 100% mexicano, comprometida con el desarrollo industrial del país.</p>
          </div>
          <div className="dp-feature">
            <h4>Clase Mundial</h4>
            <p>Estándares internacionales de calidad, certificaciones y procesos que nos distinguen del resto.</p>
          </div>
          <div className="dp-feature">
            <h4>4 Sectores</h4>
            <p>Petrolero, Naval, Metal-Mecánico y Energético. Expertos en cada industria que atendemos.</p>
          </div>
          <div className="dp-feature">
            <h4>Proveedores Líderes</h4>
            <p>Distribuidores directos de las marcas más reconocidas: Stanley, DeWalt, MSA, Honeywell y más.</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
