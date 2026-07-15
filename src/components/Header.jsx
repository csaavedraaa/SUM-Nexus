import { useState, useEffect } from 'react'
import './Header.css'

export const NAV_LINKS = [
  { href: '#nosotros',  label: 'Nosotros', children: [
      { href: '#nosotros', label: 'Resumen' },
      { href: '#sspa',     label: 'SSPA' },
    ] },
  { href: '#servicios', label: 'Servicios'        },
  { href: '#proyectos', label: 'Proyectos'        },
  { href: '#tullbox',   label: 'Proyecto Tullbox' },
  { href: '#catalogs',  label: 'Catálogo'         },
  { href: '#bolsa',     label: 'Talento'          },
]

// Cierra cualquier DetailPage abierto y navega a la sección
function navigateTo(href, setOpen) {
  setOpen(false)

  const doScroll = () => {
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' })
    }
  }

  // Si hay un overlay DetailPage abierto, cerrarlo primero
  const overlay = document.querySelector('.dp-overlay.dp-open')
  if (overlay) {
    // Disparar cierre buscando el botón "Volver"
    const backBtn = overlay.querySelector('.dp-back')
    if (backBtn) backBtn.click()
    // Esperar animación de cierre (450ms) luego scrollear
    setTimeout(doScroll, 480)
  } else {
    doScroll()
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    e.currentTarget.blur() // evita que :focus-within deje el dropdown abierto tras el clic
    navigateTo(href, setOpen)
  }

  const handleLogo = (e) => {
    e.preventDefault()
    setOpen(false)
    // Cierra overlay si está abierto
    const overlay = document.querySelector('.dp-overlay.dp-open')
    if (overlay) {
      const backBtn = overlay.querySelector('.dp-back')
      if (backBtn) backBtn.click()
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 480)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
      <div className="hdr-inner">
        <a href="/" className="hdr-logo" onClick={handleLogo}>
          <img
            src="/logo-sumimsa_completo.png"
            alt="SUMIMSA — Un Solo Proveedor"
            className="hdr-logo-img"
          />
        </a>

        <nav className={`hdr-nav${open ? ' open' : ''}`}>
          {NAV_LINKS.map(({ href, label, children }) => (
            <div key={href} className="hdr-nav-item">
              <a href={href} onClick={e => handleNav(e, href)}>
                {label}
                {children && <span className="hdr-caret" aria-hidden="true">▾</span>}
              </a>
              {children && (
                <div className="hdr-dropdown">
                  {children.map((c, i) => (
                    <a key={c.href + c.label} href={c.href} onClick={e => handleNav(e, c.href)}>
                      <span className="hdr-dropdown-num">{String(i + 1).padStart(2, '0')}</span>
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contacto" className="nav-cta" onClick={e => handleNav(e, '#contacto')}>
            Contacto
          </a>
        </nav>

        <button
          className={`menu-btn${open ? ' active' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
