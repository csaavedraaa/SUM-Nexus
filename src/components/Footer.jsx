import './Footer.css'

const SECTORS   = ['Petrolero','Naval','Metal-Mecánico','Energético']
const COMPANY   = [
  { label: 'Acerca de SUMIMSA', href: '#nosotros'  },
  { label: 'Tullbox',           href: '#tullbox'   },
  { label: 'Política SSPA',     href: '#sspa'      },
  { label: 'Noticias',          href: '#noticias'  },
  { label: 'Catálogos',         href: '#catalogs'  },
  { label: 'Bolsa de trabajo',  href: '#bolsa'     },
]
const SOCIALS = [
  { label: 'f',  href: 'https://www.facebook.com/people/Sumimsa/61558016180136/', title: 'Facebook'  },
  { label: 'ig', href: 'https://www.instagram.com/sumimsaoficial',                title: 'Instagram' },
  { label: 'in', href: 'https://www.linkedin.com/company/sumimsa/',               title: 'LinkedIn'  },
  { label: 'yt', href: 'https://www.youtube.com/@SUMIMSAOFICIAL',                 title: 'YouTube'   },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <img src="/logo-sumimsa_completo.png" alt="SUMIMSA" className="footer-logo" />
            <p className="footer-about">
              Suministros Marinos e Industriales de México S.A. de C.V. —
              Empresa 100% mexicana al servicio de la industria nacional.
            </p>
            <div className="footer-socials">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} title={s.title}
                   target="_blank" rel="noopener noreferrer" className="fsb">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Sectores */}
          <div className="footer-col">
            <h5>Sectores</h5>
            {SECTORS.map(s => <a key={s} href="#sectores">{s}</a>)}
          </div>

          {/* Empresa */}
          <div className="footer-col">
            <h5>Empresa</h5>
            {COMPANY.map(c => <a key={c.href} href={c.href}>{c.label}</a>)}
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h5>Contacto</h5>
            <a href="tel:+528333690070">+52 (833) 369 0070</a>
            <a href="mailto:ventas@sumimsa.com.mx">ventas@sumimsa.com.mx</a>
            <a href="mailto:contactodpd@sumimsa.com.mx">contactodpd@sumimsa.com.mx</a>
            <a href="https://www.sumimsa.com.mx" target="_blank" rel="noopener noreferrer">
              www.sumimsa.com.mx
            </a>
            <a href="/sumimsa-aviso-privacidad.pdf" download>📄 Aviso de Privacidad</a>
            <a href="/sumimsa-gdpr-rgpd.pdf" download>📄 RGPD / GDPR</a>
          </div>

        </div>

        <div className="footer-bar">
          <p>© 2025 SUMIMSA — Suministros Marinos e Industriales de México S.A. de C.V.</p>
          <p>🇲🇽 Hecho en México</p>
        </div>
      </div>
    </footer>
  )
}
