import { useState } from 'react'
import DetailPage from '../components/DetailPage'

// Amarillo SUMIMSA — más cálido que el amber anterior
const YELLOW = '#f5c400'

export default function Tullbox() {
  const [openTullbox, setOpenTullbox] = useState(false)

  const feats = [
    ['🏭','Centro de servicio instalado en tu planta u operación'],
    ['🔧','Herramienta especializada disponible 24/7'],
    ['💰','Sin inversión de capital — pago por consumo real'],
    ['📊','Control y trazabilidad completa de consumos'],
  ]

  return (
    <section id="tullbox" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{background: YELLOW}} />
            <span className="eyebrow-text" style={{color: YELLOW}}>Marca Complementaria</span>
          </div>
          <h2 className="s-h2">Conoce <em style={{color: YELLOW}}>Tullbox</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0,border:'1px solid var(--border)',marginTop:52,overflow:'hidden'}}>
          {/* Left: info */}
          <div style={{padding:52,background:'var(--navy)',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg,${YELLOW}0d,transparent 60%)`}} />
            <div style={{fontFamily:'var(--font-display)',fontSize:'4.2rem',fontWeight:700,textTransform:'uppercase',letterSpacing:-2,lineHeight:1,marginBottom:6,position:'relative',zIndex:1}}>
              <span style={{color:'#fff'}}>TULL</span><span style={{color: YELLOW}}>BOX</span>
            </div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'rgba(255,255,255,.3)',letterSpacing:3,textTransform:'uppercase',marginBottom:26,position:'relative',zIndex:1}}>
              Programa In Situ de renta de herramientas
            </div>
            <p style={{fontSize:'.88rem',color:'rgba(255,255,255,.7)',lineHeight:1.85,marginBottom:26,position:'relative',zIndex:1}}>
              SUMIMSA diseñó el programa <strong style={{color: YELLOW}}>Tullbox</strong>, que consiste en un conjunto de <strong style={{color:'#fff'}}>servicios integrales</strong> basado en una <strong style={{color:'#fff'}}>metodología sistemática</strong> de diagnóstico <em>« In situ »</em> para ofrecer servicios de: Suministro, Mantenimiento, Calibración, Capacitación y Asesoría e innovación tecnológica de equipos y herramientas.
            </p>
            <div style={{display:'flex',flexDirection:'column',border:'1px solid rgba(255,255,255,.08)',marginBottom:28,position:'relative',zIndex:1}}>
              {feats.map(([ic,txt])=>(
                <div key={txt} style={{display:'flex',alignItems:'center',gap:12,padding:'13px 16px',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
                  <span style={{fontSize:'.95rem',flexShrink:0}}>{ic}</span>
                  <p style={{fontSize:'.8rem',color:'rgba(255,255,255,.5)',margin:0}}>{txt}</p>
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',position:'relative',zIndex:1}}>
              <button className="btn-main" style={{background: YELLOW, border:'none', cursor:'pointer', color:'var(--navy)', fontWeight:700}}
                onClick={()=>{const el=document.querySelector('#contacto');if(el)window.scrollTo({top:el.offsetTop-68,behavior:'smooth'})}}>
                Solicitar Tullbox
              </button>
              <button className="btn-ver-mas white" onClick={() => setOpenTullbox(true)}>
                Ver más
              </button>
            </div>
          </div>
          {/* Right: photo */}
          <div style={{position:'relative',minHeight:480,overflow:'hidden',background:'#0a1428'}}>
            <img src="/Contenedor_Tullbox.jpg" alt="Centro de Servicio Tullbox In Situ"
              style={{width:'100%',height:'100%',minHeight:480,objectFit:'cover',objectPosition:'center',display:'block'}} />
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(13,30,74,.75) 0%,transparent 60%)'}} />
            <div style={{position:'absolute',bottom:28,left:28,zIndex:2}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'.55rem',color: YELLOW,letterSpacing:3,textTransform:'uppercase',marginBottom:6}}>
                // Operando In Situ
              </div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'1.25rem',fontWeight:700,textTransform:'uppercase',color:'#fff',lineHeight:1.2}}>
                Centro de Servicio<br />en tus instalaciones
              </div>
            </div>
          </div>
        </div>
      </div>

      <DetailPage
        isOpen={openTullbox}
        onClose={() => setOpenTullbox(false)}
        eyebrow="Tullbox"
        title="Programa <em>In Situ</em>"
        lead="SUMIMSA diseñó el programa Tullbox, que consiste en un conjunto de servicios integrales basado en una metodología sistemática de diagnóstico « In situ » para ofrecer servicios de: Suministro, Mantenimiento, Calibración, Capacitación y Asesoría e innovación tecnológica de equipos y herramientas."
      >
        <img className="dp-img" src="/Contenedor_Tullbox.jpg" alt="Centro de Servicio Tullbox" />

        <h3>Origen y Antecedentes</h3>
        <p>Las Gerencias de Perforación y Mantenimiento de pozos División Norte y Sur solicitaron en el 2005 efectuar un diagnóstico, debido a que año con año se adquirían herramientas tanto para los equipos de perforación y mantenimiento de pozos, como para los talleres de mantenimiento, y a pesar de esto el personal manifestaba la falta de herramientas o malas condiciones de las mismas.</p>
        <p>SUMIMSA identificó las siguientes áreas de oportunidad: deficiencia en el control de inventarios, deterioro acelerado de herramientas, improvisación en el uso de herramientas, retrasos en los trabajos de mantenimiento, obsolescencia y uso inadecuado de las herramientas, alto índice de accidentes personales y pérdida de herramientas.</p>

        <h3>Servicio Integral</h3>
        <div className="dp-grid">
          <div className="dp-feature">
            <h4>Diagnóstico</h4>
            <p>Diagnóstico en sitio para determinar la herramienta, equipos, refacciones y consumibles para cada proceso, con el fin de ofrecer una solución a la medida.</p>
          </div>
          <div className="dp-feature">
            <h4>Consumibles y Refacciones</h4>
            <p>Venta de consumibles y refacciones en el cual, una vez solicitado y autorizado, se entrega y administra en sitio. Se paga únicamente lo que se consume.</p>
          </div>
          <div className="dp-feature">
            <h4>Herramientas</h4>
            <p>Mantenimiento, reposición y calibración de las herramientas a cargo del proveedor.</p>
          </div>
          <div className="dp-feature">
            <h4>Capacitación</h4>
            <p>Capacitación constante al personal usuario en el manejo de herramientas y consumibles.</p>
          </div>
          <div className="dp-feature">
            <h4>Indicadores</h4>
            <p>Entrega mensual de indicadores de capacitación, uso de la herramienta y venta de consumibles.</p>
          </div>
          <div className="dp-feature">
            <h4>Inspección PND</h4>
            <p>Servicio de inspección de cables de acero y accesorios de izaje.</p>
          </div>
        </div>

        <h3>Alcance del Servicio</h3>
        <p>En el centro de servicio se cuenta con un total de 847 partidas que conforman el paquete de herramientas disponibles para préstamo a los trabajadores: Manual, Eléctrica, Mecánica, Neumática, Corte y Soldadura, Hidráulica, Medición y Control. Adicionalmente, el contrato cuenta con 4,311 partidas de consumibles divididas en 47 familias.</p>

        <h3>Beneficios del Servicio Integral</h3>
        <div className="dp-grid">
          <div className="dp-feature">
            <h4>Control y Seguridad</h4>
            <p>Control y prevención de accidentes e incidentes. Herramientas en perfecto estado de uso, calibración y limpieza.</p>
          </div>
          <div className="dp-feature">
            <h4>Eficiencia Operativa</h4>
            <p>Eficiencia en la secuencia operativa, atención en sitio y simplificación de contratos.</p>
          </div>
          <div className="dp-feature">
            <h4>Sin Mermas</h4>
            <p>Disminución de mermas y pérdida de herramientas. Inventario a cargo del proveedor.</p>
          </div>
          <div className="dp-feature">
            <h4>Capacitación Constante</h4>
            <p>Programa TullXpert de Operación Segura: capacitaciones presenciales y audiovisuales de adiestramiento permanente.</p>
          </div>
        </div>

        <h3>Clasificación de Centros de Servicio</h3>
        <p>Los centros de servicio se clasifican y tipifican por partida de acuerdo al proyecto. Contamos con equipos especializados auxiliares como hidrolavadoras de alta presión, compresores de aire, equipos de Sand-Blast, máquinas de soldar, plantas generadoras y torres de iluminación.</p>
      </DetailPage>
    </section>
  )
}
