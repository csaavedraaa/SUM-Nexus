import { useState } from 'react'
import './Esquemas.css'
import DetailPage from '../components/DetailPage'

const ITEMS = [
  { num:'01', icon:'🤝', title:'Venta Directa',        desc:'Atención personalizada con nuestros representantes especializados por sector.',        img:'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&fit=crop' },
  { num:'02', icon:'🔒', title:'Consignación',          desc:'Inventario en tus instalaciones sin costo inicial, pago únicamente al consumo.',        img:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80&fit=crop' },
  { num:'03', icon:'📄', title:'Contrato Abierto',      desc:'Contratos marco con precios y condiciones preestablecidas para tus operaciones.',        img:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&fit=crop' },
  { num:'04', icon:'📦', title:'Inventarios Dedicados', desc:'Desarrollo de inventarios específicos adaptados a tus necesidades operativas.',          img:'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80&fit=crop' },
  { num:'05', icon:'🚚', title:'Órdenes Abiertas',      desc:'Suministro mediante órdenes de compra abiertas para mayor flexibilidad.',               img:'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80&fit=crop' },
  { num:'06', icon:'🏭', title:'On Site',               desc:'Despacho de material directamente en tus instalaciones cuando lo necesitas.',           img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&fit=crop' },
]

export default function Esquemas() {
  const [openEsq, setOpenEsq] = useState(false)

  return (
    <section className="section section-navy">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Esquemas de Comercialización</span>
          </div>
          <h2 className="s-h2">Flexibles.<br /><em>Competitivos.</em></h2>
          <p className="s-lead" style={{color:'rgba(255,255,255,.5)'}}>
            Alta calidad, precios competitivos y excelente servicio personalizado. Así trabaja SUMIMSA.
          </p>
        </div>
        <div className="esq-grid reveal d1">
          {ITEMS.map(item => (
            <div key={item.num} className="esq-card">
              <div className="esq-img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="esq-img-overlay" />
                <span className="esq-img-num">{item.num} —</span>
                <div className="esq-img-icon">{item.icon}</div>
              </div>
              <div className="esq-body">
                <div className="esq-title">{item.title}</div>
                <p className="esq-desc">{item.desc}</p>
              </div>
              <div className="esq-bar" />
            </div>
          ))}
        </div>

        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas white" onClick={() => setOpenEsq(true)}>
            Ver todos los esquemas
          </button>
        </div>
      </div>

      <DetailPage
        isOpen={openEsq}
        onClose={() => setOpenEsq(false)}
        eyebrow="Esquemas de Comercialización"
        title="Flexibles. <em>Competitivos.</em>"
        lead="SUMIMSA se adapta a la forma en que tú operas. Desde venta directa hasta programas On Site, tenemos el esquema comercial que mejor se ajusta a tu empresa."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&fit=crop" alt="Comercialización" />

        <h3>01 — Venta Directa</h3>
        <p>Atención personalizada con representantes comerciales especializados por sector. Visitas a instalaciones, cotizaciones en sitio y seguimiento postventa. Ideal para compras puntuales o proyectos específicos donde valoras el trato directo con un experto.</p>

        <h3>02 — Consignación</h3>
        <p>SUMIMSA coloca inventario en tus instalaciones sin costo inicial. Solo pagas lo que consumes. Es el modelo ideal para mantener disponibilidad inmediata de herramienta y consumibles críticos sin comprometer tu capital de trabajo.</p>

        <h3>03 — Contrato Abierto</h3>
        <p>Negociamos condiciones comerciales (precios, plazos, niveles de servicio) una sola vez y las dejamos en un contrato marco. A partir de ahí, tus órdenes de compra se atienden automáticamente sin renegociar cada vez. Elimina burocracia y reduce tiempos de ciclo de compra.</p>

        <h3>04 — Inventarios Dedicados</h3>
        <p>Desarrollamos un plan de inventario específico para tu operación: identificamos los SKUs críticos, definimos mínimos y máximos, y SUMIMSA garantiza la disponibilidad. Tú nunca te quedas sin los materiales que necesitas para operar.</p>

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>05 — Órdenes Abiertas</h4>
            <p>Una orden de compra por el monto o período acordado. Vas consumiendo contra ella según necesidad sin generar nuevas órdenes.</p>
          </div>
          <div className="dp-feature">
            <h4>06 — On Site</h4>
            <p>Un representante SUMIMSA en tus instalaciones. Gestiona el inventario, identifica necesidades y coordina el suministro directamente en tu planta.</p>
          </div>
          <div className="dp-feature">
            <h4>¿Cuál es el mejor para ti?</h4>
            <p>Nuestro equipo comercial te ayuda a identificar el esquema que más se adapta a tu operación, sector y necesidades financieras.</p>
          </div>
          <div className="dp-feature">
            <h4>Combinaciones</h4>
            <p>Muchos clientes combinan esquemas: Tullbox On Site + Contrato Abierto para maximizar eficiencia y control presupuestal.</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
