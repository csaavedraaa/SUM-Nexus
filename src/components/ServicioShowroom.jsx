import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './SectorShowroom.css'
import './ServicioShowroom.css'

export default function ServicioShowroom({ servicio, isOpen, onClose, onCotizar }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  if (!servicio) return null
  const { detalle } = servicio

  return createPortal(
    <div className={`showroom-overlay${isOpen ? ' open' : ''}`}>
      <button className="showroom-close" onClick={onClose} aria-label="Cerrar">✕</button>

      <div className="showroom-scroll">
        <div className="showroom-hero" style={{ backgroundImage: `url(${detalle.img})` }}>
          <div className="showroom-hero-overlay" />
          <div className="showroom-hero-content">
            <div className="showroom-eyebrow">
              <span className="showroom-eyebrow-num">{servicio.id}</span> — Servicio
            </div>
            <h2 className="showroom-title">{servicio.titulo}</h2>
            <p className="showroom-lead">{servicio.resumen}</p>
          </div>
        </div>

        <div className="showroom-body">
          <div className="showroom-subhead">Sobre este servicio</div>
          <p className="sw-intro">{detalle.intro}</p>

          <div className="showroom-subhead">Beneficios</div>
          <div className="sw-benefits">
            {detalle.beneficios.map((b, i) => (
              <div key={i} className="sw-benefit" style={{ '--sw-accent': servicio.accent }}>
                <span className="sw-benefit-check">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="showroom-cta-wrap">
            <p style={{ color: 'var(--muted)', fontSize: '.82rem', margin: '0 auto 16px', maxWidth: 520 }}>
              Todos los servicios incluyen reporte técnico con condiciones del producto, conclusiones, recomendaciones y referencias técnicas.
            </p>
            <button className="showroom-cta" onClick={onCotizar}>
              Cotizar este servicio →
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
