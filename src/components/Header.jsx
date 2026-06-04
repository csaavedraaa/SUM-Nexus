import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios'  },
  { href: '#nosotros',  label: 'Nosotros'   },
  { href: '#tullbox',   label: 'Tullbox'    },
  { href: '#proyectos', label: 'Proyectos'  },
  { href: '#sspa',      label: 'SSPA'       },
  { href: '#catalogs',  label: 'Catálogo'   },
  { href: '#bolsa',     label: 'Empleo'     },
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
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={e => handleNav(e, href)}>
              {label}
            </a>
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
