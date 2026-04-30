import { useEffect } from 'react'
import './DetailPage.css'

/**
 * DetailPage — Overlay que carga contenido de detalle sobre la landing.
 * El header SIEMPRE está visible porque el overlay comienza DESPUÉS del header (top: 68px).
 * Props:
 *   isOpen   — boolean
 *   onClose  — fn
 *   title    — string con <em> permitido
 *   eyebrow  — string
 *   lead     — string
 *   children — JSX content
 */
export default function DetailPage({ isOpen, onClose, eyebrow, title, lead, children }) {
  // Lock scroll en body cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ESC para cerrar
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  return (
    <div className={`dp-overlay${isOpen ? ' dp-open' : ''}`} role="dialog" aria-modal="true">
      <div className="dp-scroll-area">
        {/* Header de la página de detalle */}
        <div className="dp-header">
          <button className="dp-back" onClick={onClose} aria-label="Volver">
            <span className="dp-back-arrow">←</span>
            Volver al inicio
          </button>
          <div className="dp-header-text">
            {eyebrow && (
              <div className="dp-eyebrow">
                <span className="dp-eyebrow-line" />
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="dp-title" dangerouslySetInnerHTML={{ __html: title }} />
            {lead && <p className="dp-lead">{lead}</p>}
          </div>
        </div>

        {/* Contenido */}
        <div className="dp-body">
          {children}
        </div>
      </div>
    </div>
  )
}
