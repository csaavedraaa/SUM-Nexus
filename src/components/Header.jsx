import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

export const NAV_LINKS = [
  { href: '#nosotros',  label: 'Nosotros', children: [
      { href: '#nosotros',   label: 'Resumen' },
      { href: '#gobernanza', label: 'Gobernanza' },
      { href: '#hse',              label: 'HSE' },
      { href: '#sustentabilidad', label: 'Sustentabilidad' },
    ] },
  { href: '#servicios', label: 'Servicios', children: [
      { href: '#servicios', label: 'Soluciones' },
      { href: '#esquemas',  label: 'Esquemas'   },
      { href: '#sectores',  label: 'Sectores'   },
    ] },
  { href: '#proyectos', label: 'Proyectos'        },
  { href: '#tullbox',   label: 'Proyecto Tullbox' },
  { href: '#catalogs',  label: 'Catálogo'         },
  { href: '#bolsa',     label: 'Talento'          },
  { href: '/noticias',  label: 'Noticias'         },
  { href: '/blog',      label: 'Blog'             },
]

const OVERLAY_DELAY = 480

function closeOverlayThen(fn) {
  const backBtn = document.querySelector('.dp-overlay.dp-open .dp-back')
  if (backBtn) { backBtn.click(); setTimeout(fn, OVERLAY_DELAY) }
  else fn()
}

function scrollToHash(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let rafPending = false
    const handler = () => {
      if (rafPending) return
      rafPending = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10)
        rafPending = false
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    e.currentTarget.blur()
    setOpen(false)
    if (href.startsWith('/')) {
      navigate(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } })
    } else {
      closeOverlayThen(() => scrollToHash(href))
    }
  }

  const handleLogo = (e) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      closeOverlayThen(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
    }
  }

  return (
    <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
      <div className="hdr-inner">
        <a href="/" className="hdr-logo" onClick={handleLogo}>
          <img
            src="/logo-sumimsa_completo.webp"
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
