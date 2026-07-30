import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './SectorShowroom.css'

export default function SectorShowroom({ sector, isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  if (!sector) return null
  const { detail } = sector

  return createPortal(
    <div className={`showroom-overlay${isOpen ? ' open' : ''}`}>
      <button className="showroom-close" onClick={onClose} aria-label="Cerrar">✕</button>

      <div className="showroom-scroll">
        <div className="showroom-hero" style={{ backgroundImage: `url(${detail.img})` }}>
          <div className="showroom-hero-overlay" />
          <div className="showroom-hero-content">
            <div className="showroom-eyebrow">
              <span className="showroom-eyebrow-num">{sector.num}</span> — Sector
            </div>
            <h2 className="showroom-title">{sector.title}</h2>
            <p className="showroom-lead">{detail.lead}</p>
          </div>
        </div>

        <div className="showroom-body">
          <div className="showroom-subhead">Recorre el sector</div>
          <div className="showroom-tiles">
            {detail.content.map(({ icon, h, tag, p }) => (
              <div key={h} className="showroom-tile">
                <span className="showroom-tile-icon">{icon}</span>
                <h4 className="showroom-tile-title">{h}</h4>
                <span className="showroom-tile-tag">{tag}</span>
                <p className="showroom-tile-p">{p}</p>
              </div>
            ))}
          </div>

          <div className="showroom-subhead">Especificaciones y cobertura</div>
          <div className="showroom-specs">
            {detail.features.map(({ h, p }) => (
              <div key={h} className="showroom-spec">
                <span className="showroom-spec-dot" />
                <div>
                  <h5>{h}</h5>
                  <p>{p}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="showroom-cta-wrap">
            <a
              href="#contacto"
              className="showroom-cta"
              onClick={(e) => {
                e.preventDefault()
                onClose()
                setTimeout(() => {
                  const el = document.querySelector('#contacto')
                  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
                }, 400)
              }}
            >
              Cotizar para este sector →
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
