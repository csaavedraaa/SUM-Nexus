import { useEffect, useState } from 'react'
import ModelViewer from './ModelViewer'
import './DiagramaInteractivo.css'

export default function DiagramaInteractivo({ isOpen, onClose, eyebrow, title, img, model3d, hotspots = [], activeHotspot, onHotspotSelect }) {
  const [showHotspots, setShowHotspots] = useState(true)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const activo = activeHotspot != null ? hotspots[activeHotspot] : null

  return (
    <div className={`di-overlay${isOpen ? ' open' : ''}`}>
      <button className="di-close" onClick={onClose} aria-label="Cerrar">✕</button>

      <div className="di-scroll">
        <div className="di-header">
          <div className="di-eyebrow">{eyebrow}</div>
          <h2 className="di-title">{title}</h2>
        </div>

        <div className="di-body">
          <div className={`di-stage${model3d ? ' di-stage-3d' : ''}`}>
            {model3d ? (
              <>
                <ModelViewer
                  src={model3d}
                  hotspots={showHotspots ? hotspots.map(h => ({ fx: h.x / 100, fy: 1 - h.y / 100, label: h.label })) : []}
                  activeHotspot={activeHotspot}
                  onHotspotSelect={onHotspotSelect}
                />
                <button
                  type="button"
                  className="di-toggle-hotspots"
                  onClick={() => setShowHotspots(v => !v)}
                >
                  {showHotspots ? 'Ocultar etiquetas' : 'Mostrar etiquetas'}
                </button>
              </>
            ) : (
              <>
                <img className="di-img" src={img} alt={title} />
                {hotspots.map((h, i) => (
                  <button
                    key={i}
                    className={`di-hotspot${activeHotspot === i ? ' active' : ''}`}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    onClick={() => onHotspotSelect(activeHotspot === i ? null : i)}
                    aria-label={h.label}
                  >
                    <span className="di-hotspot-dot" />
                  </button>
                ))}
              </>
            )}
          </div>

          <div className={`di-spec${activo ? ' filled' : ''}`}>
            {activo ? (
              <>
                {activo.img && (
                  <div className="di-spec-photo">
                    <img src={activo.img} alt={activo.label} />
                  </div>
                )}
                <span className="di-spec-num">{String(activeHotspot + 1).padStart(2, '0')}</span>
                <h3 className="di-spec-title">{activo.label}</h3>
                <p className="di-spec-desc">{activo.desc}</p>
              </>
            ) : (
              <p className="di-spec-empty">Selecciona un equipo del esquema o de la lista para ver su ficha técnica.</p>
            )}
          </div>
        </div>

        <ul className="di-legend">
          {hotspots.map((h, i) => (
            <li
              key={i}
              className={activeHotspot === i ? 'active' : ''}
              onClick={() => onHotspotSelect(activeHotspot === i ? null : i)}
            >
              <span className="di-legend-num">{String(i + 1).padStart(2, '0')}</span>
              {h.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
