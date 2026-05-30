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

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
      <div className="hdr-inner">
        <a href="#hero" className="hdr-logo" onClick={e => scrollTo(e, '#hero')}>
          <img
            src="/logo-sumimsa_completo.png"
            alt="SUMIMSA — Un Solo Proveedor"
            className="hdr-logo-img"
          />
        </a>

        <nav className={`hdr-nav${open ? ' open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={e => scrollTo(e, href)}>
              {label}
            </a>
          ))}
          <a href="#contacto" className="nav-cta" onClick={e => scrollTo(e, '#contacto')}>
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
