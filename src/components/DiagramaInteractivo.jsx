import { useEffect, useMemo, useState } from 'react'
import ModelViewer from './ModelViewer'
import './DiagramaInteractivo.css'

export default function DiagramaInteractivo({ isOpen, onClose, eyebrow, title, img, model3d, hotspots = [], activeHotspot, onHotspotSelect }) {
  const [showHotspots, setShowHotspots] = useState(true)
  const [coordMode, setCoordMode] = useState(false)
  const [coordInfo, setCoordInfo] = useState(null)

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
  const mappedHotspots = useMemo(
    () => showHotspots && !coordMode ? hotspots.map(h => ({ fx: h.x / 100, fy: 1 - h.y / 100, label: h.label })) : [],
    [hotspots, showHotspots, coordMode]
  )

  return (
    <div className={`di-overlay${isOpen ? ' open' : ''}`}>
      <button className="di-close" onClick={onClose} aria-label="Cerrar">✕</button>

      <div className="di-scroll">
        <div className="di-header">
          <div className="di-eyebrow">{eyebrow}</div>
          <h2 className="di-title">{title}</h2>
        </div>

        <div className={`di-body${activo ? '' : ' di-body--full'}`}>
          <div className={`di-stage${model3d ? ' di-stage-3d' : ''}`}>
            {model3d ? (
              <>
                <ModelViewer
                  src={model3d}
                  hotspots={mappedHotspots}
                  activeHotspot={activeHotspot}
                  onHotspotSelect={onHotspotSelect}
                  coordMode={coordMode}
                  onCoordMove={setCoordInfo}
                />
                <div className="di-toolbar">
                  <button type="button" className="di-toggle-hotspots" onClick={() => setShowHotspots(v => !v)}>
                    {showHotspots ? 'Ocultar etiquetas' : 'Mostrar etiquetas'}
                  </button>
                  {import.meta.env.DEV && (
                    <button
                      type="button"
                      className={`di-toggle-hotspots${coordMode ? ' active' : ''}`}
                      onClick={() => { setCoordMode(v => !v); setCoordInfo(null) }}
                    >
                      {coordMode ? 'Salir coords' : '⊕ Coordenadas'}
                    </button>
                  )}
                </div>
                {import.meta.env.DEV && coordMode && (
                  <div className="di-coord-hud">
                    {coordInfo
                      ? <>x: <strong>{coordInfo.x}</strong> &nbsp; y: <strong>{coordInfo.y}</strong> &nbsp; fz: <strong>{coordInfo.fz}</strong></>
                      : 'Mueve el cursor sobre el modelo'}
                  </div>
                )}
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

          {activo && (
            <div className="di-spec filled">
              {activo.img && (
                <div className="di-spec-photo">
                  <img src={activo.img} alt={activo.label} />
                </div>
              )}
              <span className="di-spec-num">{String(activeHotspot + 1).padStart(2, '0')}</span>
              <h3 className="di-spec-title">{activo.label}</h3>
              <p className="di-spec-desc">{activo.desc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
