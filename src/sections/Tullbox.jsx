import { useState } from 'react'
import DetailPage from '../components/DetailPage'

export default function Tullbox() {
  const [openTullbox, setOpenTullbox] = useState(false)

  const feats = [
    ['📦','Contenedor instalado en tu planta u operación'],
    ['🔧','Herramienta especializada disponible 24/7'],
    ['💰','Sin inversión de capital — pago por consumo real'],
    ['📊','Control y trazabilidad completa de consumos'],
  ]

  return (
    <section id="tullbox" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{background:'var(--amber)'}} />
            <span className="eyebrow-text" style={{color:'var(--amber)'}}>Marca Complementaria</span>
          </div>
          <h2 className="s-h2">Conoce <em style={{color:'var(--amber)'}}>Tullbox</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0,border:'1px solid var(--border)',marginTop:52,overflow:'hidden'}}>
          {/* Left: info */}
          <div style={{padding:52,background:'var(--navy)',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(244,121,32,.05),transparent 60%)'}} />
            <div style={{fontFamily:'var(--font-display)',fontSize:'4.2rem',fontWeight:700,textTransform:'uppercase',letterSpacing:-2,lineHeight:1,marginBottom:6,position:'relative',zIndex:1}}>
              <span style={{color:'#fff'}}>TULL</span><span style={{color:'var(--amber)'}}>BOX</span>
            </div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'rgba(255,255,255,.3)',letterSpacing:3,textTransform:'uppercase',marginBottom:26,position:'relative',zIndex:1}}>
              Programa In Situ de renta de herramientas
            </div>
            <p style={{fontSize:'.88rem',color:'rgba(255,255,255,.6)',lineHeight:1.8,marginBottom:26,position:'relative',zIndex:1}}>
              Tullbox instala un contenedor de herramientas especializado directamente en tus instalaciones. Disponibilidad inmediata 24/7, control total de consumos y sin inversión de capital.
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
              <button className="btn-main" style={{background:'var(--amber)',border:'none',cursor:'pointer'}}
                onClick={()=>{const el=document.querySelector('#contacto');if(el)window.scrollTo({top:el.offsetTop-68,behavior:'smooth'})}}>
                Solicitar Tullbox
              </button>
              <button className="btn-ver-mas white" onClick={() => setOpenTullbox(true)}>
                Ver más
              </button>
            </div>
          </div>
          {/* Right: real photo */}
          <div style={{position:'relative',minHeight:480,overflow:'hidden',background:'#0a1428'}}>
            <img src="/Contenedor_Tullbox.jpg" alt="Contenedor Tullbox In Situ"
              style={{width:'100%',height:'100%',minHeight:480,objectFit:'cover',objectPosition:'center',display:'block'}} />
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(13,30,74,.75) 0%,transparent 60%)'}} />
            <div style={{position:'absolute',bottom:28,left:28,zIndex:2}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'var(--amber)',letterSpacing:3,textTransform:'uppercase',marginBottom:6,display:'flex',alignItems:'center',gap:8}}>
                <span style={{display:'block',width:16,height:1,background:'var(--amber)'}} />In Situ — Programa activo
              </div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'1.2rem',fontWeight:700,color:'#fff',textTransform:'uppercase',letterSpacing:.5}}>
                Contenedor Tullbox instalado
              </div>
            </div>
          </div>
        </div>
      </div>

      <DetailPage
        isOpen={openTullbox}
        onClose={() => setOpenTullbox(false)}
        eyebrow="Tullbox In Situ"
        title="El Almacén <em>en tu Planta</em>"
        lead="SUMIMSA instala, gestiona y repone el inventario de herramienta directamente en tus instalaciones. Tu operación no para. Tu capital de trabajo queda libre para lo que importa."
      >
        <img className="dp-img" src="/Contenedor_Tullbox.jpg" alt="Tullbox In Situ" />

        <h3>¿Cómo funciona Tullbox?</h3>
        <p>SUMIMSA instala un contenedor-almacén personalizado en tus instalaciones. El contenedor está equipado con el inventario de herramientas y equipos que tu operación requiere, organizado, etiquetado y calibrado. Nuestro equipo monitorea en tiempo real los consumos a través de un sistema digital y reponemos el inventario antes de que se agote, de forma automática y sin que tengas que gestionar ninguna orden de compra.</p>

        <h3>Beneficios Comprobados</h3>
        <p>Nuestros clientes que han implementado Tullbox reportan resultados medibles desde el primer mes: reducción del 85% en el tiempo de búsqueda y solicitud de herramienta, eliminación del 100% de extravíos de herramienta de alto valor, y una reducción promedio del 30% en el capital de trabajo inmovilizado en inventario de herramienta.</p>

        <h3>Control Digital Total</h3>
        <p>El programa Tullbox incluye un dashboard en tiempo real donde puedes consultar consumos por área, empleado, turno y tipo de herramienta. También recibes reportes automáticos mensuales con análisis de uso y recomendaciones de optimización. La app Tullbox (disponible para iOS y Android) permite solicitar herramienta y registrar devoluciones directamente desde el celular.</p>

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>Sin Inversión Inicial</h4>
            <p>El contenedor, la instalación, la herramienta inicial y el software son parte del servicio. Cero CAPEX.</p>
          </div>
          <div className="dp-feature">
            <h4>Solo Pagas lo que Usas</h4>
            <p>Modelo de pago por consumo real. Sin inventario obsoleto, sin capital inmovilizado innecesario.</p>
          </div>
          <div className="dp-feature">
            <h4>Siempre Calibrado</h4>
            <p>SUMIMSA garantiza que toda la herramienta esté dentro de especificaciones. Certificados disponibles.</p>
          </div>
          <div className="dp-feature">
            <h4>Disponibilidad 24/7</h4>
            <p>El contenedor está en tu planta. Sin esperas, sin pedidos urgentes, sin paros de línea por falta de herramienta.</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
