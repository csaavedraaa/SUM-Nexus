import { useEffect } from 'react'
import './DetailPage.css'

export default function DetailPage({ isOpen, onClose, eyebrow, title, lead, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Navegar a sección dentro del DetailPage: cierra el overlay y scrollea
  const handleNavClick = (e) => {
    const href = e.target.closest('a[href^="#"]')?.getAttribute('href')
    if (!href) return
    e.preventDefault()
    onClose()
    // Espera a que termine la animación de cierre (~450ms) luego scrollea
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
    }, 460)
  }

  return (
    <div
      className={`dp-overlay${isOpen ? ' dp-open' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={handleNavClick}
    >
      <div className="dp-scroll-area">
        {/* Header */}
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

        {/* Mini footer dentro del overlay */}
        <div className="dp-footer">
          <button className="dp-back dp-footer-back" onClick={onClose}>
            <span className="dp-back-arrow">←</span>
            Volver al inicio
          </button>
          <div className="dp-footer-nav">
            {['#servicios','#nosotros','#tullbox','#proyectos','#sspa','#catalogs','#bolsa','#contacto'].map(href => (
              <a key={href} href={href} className="dp-footer-link">
                {href.replace('#','').replace('catalogs','catálogo')}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
