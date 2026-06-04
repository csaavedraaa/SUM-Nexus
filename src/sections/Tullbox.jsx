import { useState } from 'react'
import DetailPage from '../components/DetailPage'
import './Tullbox.css'

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

        <div className="tullbox-grid reveal d1">
          {/* Left: info */}
          <div className="tullbox-info">
            <div className="tullbox-info-bg" style={{background:`linear-gradient(135deg,${YELLOW}0d,transparent 60%)`}} />
            <div className="tullbox-brand">
              <span style={{color:'#fff'}}>TULL</span><span style={{color: YELLOW}}>BOX</span>
            </div>
            <div className="tullbox-tagline">Programa In Situ de renta de herramientas</div>
            <p className="tullbox-desc">
              SUMIMSA diseñó el programa <strong style={{color: YELLOW}}>Tullbox</strong>, que consiste en un conjunto de <strong style={{color:'#fff'}}>servicios integrales</strong> basado en una <strong style={{color:'#fff'}}>metodología sistemática</strong> de diagnóstico <em>« In situ »</em> para ofrecer servicios de: Suministro, Mantenimiento, Calibración, Capacitación y Asesoría e innovación tecnológica de equipos y herramientas.
            </p>
            <div className="tullbox-feats">
              {feats.map(([ic,txt]) => (
                <div key={txt} className="tullbox-feat">
                  <span style={{fontSize:'.95rem',flexShrink:0}}>{ic}</span>
                  <p>{txt}</p>
                </div>
              ))}
            </div>
            <div className="tullbox-btns">
              <button className="btn-main"
                style={{background: YELLOW, border:'none', cursor:'pointer', color:'var(--navy)', fontWeight:700}}
                onClick={() => { const el=document.querySelector('#contacto'); if(el) window.scrollTo({top:el.offsetTop-68,behavior:'smooth'}) }}>
                Solicitar Tullbox
              </button>
              <button className="btn-ver-mas white" onClick={() => setOpenTullbox(true)}>
                Ver más
              </button>
            </div>
          </div>

          {/* Right: photo */}
          <div className="tullbox-photo">
            <img src="/Contenedor_Tullbox.jpg" alt="Centro de Servicio Tullbox In Situ" />
            <div className="tullbox-photo-overlay" />
            <div className="tullbox-photo-caption">
              <div className="tullbox-photo-tag" style={{color: YELLOW}}>// Operando In Situ</div>
              <div className="tullbox-photo-title">Centro de Servicio<br />en tus instalaciones</div>
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
        <p>Las Gerencias de Perforación y Mantenimiento de pozos solicitaron en el 2005 efectuar un diagnóstico, debido a que año con año se adquirían herramientas y a pesar de esto el personal manifestaba la falta de herramientas o malas condiciones de las mismas.</p>
        <p>SUMIMSA identificó las siguientes áreas de oportunidad: deficiencia en el control de inventarios, deterioro acelerado de herramientas, improvisación en el uso de herramientas, retrasos en los trabajos de mantenimiento, obsolescencia y uso inadecuado de las herramientas, alto índice de accidentes personales y pérdida de herramientas.</p>
        <h3>Servicio Integral</h3>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Diagnóstico</h4><p>Diagnóstico en sitio para determinar la herramienta, equipos, refacciones y consumibles para cada proceso, con el fin de ofrecer una solución a la medida.</p></div>
          <div className="dp-feature"><h4>Consumibles y Refacciones</h4><p>Venta de consumibles y refacciones. Se entrega y administra en sitio. Se paga únicamente lo que se consume.</p></div>
          <div className="dp-feature"><h4>Herramientas</h4><p>Mantenimiento, reposición y calibración de las herramientas a cargo del proveedor.</p></div>
          <div className="dp-feature"><h4>Capacitación</h4><p>Capacitación constante al personal usuario en el manejo de herramientas y consumibles.</p></div>
          <div className="dp-feature"><h4>Indicadores</h4><p>Entrega mensual de indicadores de capacitación, uso de la herramienta y venta de consumibles.</p></div>
          <div className="dp-feature"><h4>Inspección PND</h4><p>Servicio de inspección de cables de acero y accesorios de izaje.</p></div>
        </div>
        <h3>Beneficios del Servicio Integral</h3>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Control y Seguridad</h4><p>Control y prevención de accidentes e incidentes. Herramientas en perfecto estado de uso, calibración y limpieza.</p></div>
          <div className="dp-feature"><h4>Eficiencia Operativa</h4><p>Eficiencia en la secuencia operativa, atención en sitio y simplificación de contratos.</p></div>
          <div className="dp-feature"><h4>Sin Mermas</h4><p>Disminución de mermas y pérdida de herramientas. Inventario a cargo del proveedor.</p></div>
          <div className="dp-feature"><h4>Capacitación Constante</h4><p>Programa TullXpert de Operación Segura: capacitaciones presenciales y audiovisuales de adiestramiento permanente.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}
