import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NAV_LINKS } from './Header'
import './DetailPage.css'

export default function DetailPage({ isOpen, onClose, eyebrow, title, lead, heroImg, children, className }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen && scrollRef.current) scrollRef.current.scrollTop = 0
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

  return createPortal(
    <div
      className={`dp-overlay${isOpen ? ' dp-open' : ''}${className ? ` ${className}` : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={handleNavClick}
    >
      {/* X fija — siempre visible al hacer scroll */}
      <button className="dp-close-x" onClick={onClose} aria-label="Cerrar">
        <span>✕</span>
      </button>

      <div className="dp-scroll-area" ref={scrollRef}>
        {/* Header — con foto de fondo cuando se pasa heroImg */}
        <div className={`dp-header${heroImg ? ' has-photo' : ''}`}>
          {heroImg && <img className="dp-header-photo" src={heroImg} alt="" />}
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
            {[...NAV_LINKS, { href: '#contacto', label: 'Contacto' }].map(({ href, label }) => (
              <a key={href} href={href} className="dp-footer-link">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
