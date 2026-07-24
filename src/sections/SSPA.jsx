import { useState, useEffect } from 'react'
import '../components/SectorShowroom.css'
import '../components/ServicioShowroom.css'
import './SSPA.css'

const PTS = [
  ['01','Todos los incidentes se pueden prevenir','Garantizamos que todas las operaciones se ejecuten con la máxima seguridad, salud y protección ambiental dentro y fuera de la empresa.'],
  ['02','La SSPA es responsabilidad de todos','Integramos en cada tarea todos los aspectos de seguridad, salud y protección ambiental en los procesos continuos de todos los trabajadores.'],
  ['03','Mejores prácticas y tecnología ambiental','Aplicamos las mejores prácticas de seguridad y tecnología ambiental disponible para beneficio de los trabajadores y la comunidad.'],
  ['04','Cumplimiento legal garantizado','Cumplimos con los requisitos legales y normas complementarias aplicables a nuestra organización y partes interesadas.'],
  ['05','Cero contaminación','Prevenimos la contaminación y contribuimos al desarrollo sostenible buscando el equilibrio con el medio ambiente en cada operación.'],
]
const METRICS = [['Seguridad Industrial','100%'],['Salud Ocupacional','100%'],['Protección Ambiental','100%']]
const ICONS   = ['Seguridad Industrial','Salud en el Trabajo','Protección Ambiental','Mejora Continua']

// Sistema de Gestión Integral — documentos y canales requeridos por dirección
const SGI_ITEMS = [
  {
    icon: '',
    title: 'Política del Sistema de Gestión Integral',
    desc: 'Nuestros compromisos de calidad, seguridad, salud y protección ambiental.',
    href: '/sspa/politica-sgi.pdf',
    cta: 'Descargar PDF',
    pending: true,
  },
  {
    icon: '',
    title: 'Certificaciones',
    desc: 'Certificaciones y reconocimientos vigentes de nuestro sistema de gestión.',
    href: '/sspa/certificaciones.pdf',
    cta: 'Ver certificaciones',
    pending: true,
  },
  {
    icon: '',
    title: 'Código de Ética',
    desc: 'Principios de conducta que rigen nuestra relación con clientes, proveedores y colaboradores.',
    href: '/sspa/codigo-de-etica.pdf',
    cta: 'Descargar PDF',
    pending: true,
  },
  {
    icon: '',
    title: 'Buzón de Dudas y Sugerencias',
    desc: 'Un canal confidencial para reportar dudas, quejas o sugerencias sobre nuestras operaciones.',
    href: '#contacto',
    cta: 'Enviar mensaje',
    scrollTarget: '#contacto',
  },
  {
    icon: '',
    title: 'Canales de Recepción',
    desc: 'Tel. +52 (833) 369 0070 · ventas@sumimsa.com.mx',
    href: 'mailto:ventas@sumimsa.com.mx',
    cta: 'Escribir correo',
  },
]

const BENEFICIOS = [
  ['Seguridad Industrial',   'Todos los incidentes se pueden y deben prevenir. EPP certificado NOM-017-STPS y ANSI/ISEA.'],
  ['Salud Ocupacional',      'Capacitaciones periódicas sobre riesgos industriales, ergonomía y primeros auxilios.'],
  ['Protección Ambiental',   'Operaciones diseñadas para minimizar el impacto ambiental con proveedores sostenibles.'],
  ['Mejora Continua',        'Política SSPA revisada periódicamente para incorporar las mejores prácticas de la industria.'],
  ['Responsabilidad Compartida', 'Cada colaborador, sin importar su nivel, es responsable de las condiciones seguras de trabajo.'],
  ['Cero Incidentes',        'No es una meta: es nuestro estándar. Prevenimos la contaminación y promovemos el desarrollo sostenible.'],
]

const SPECS = [
  ['NOM-017-STPS',       'Todo nuestro EPP cumple con la norma oficial mexicana vigente para equipos de protección personal.'],
  ['ANSI/ISEA',          'Herramientas y equipos certificados bajo estándares internacionales ANSI e ISEA.'],
  ['Capacitación Gratuita', 'Programa de capacitación en seguridad industrial para clientes, sin costo adicional.'],
  ['Auditorías en Sitio','Auditorías de seguridad en las instalaciones del cliente, disponibles para contratos corporativos.'],
]

function SSPAShowroom({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const scrollContacto = () => {
    onClose()
    setTimeout(() => {
      const el = document.querySelector('#contacto')
      if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
    }, 460)
  }

  return (
    <div className={`showroom-overlay${isOpen ? ' open' : ''}`}>
      <button className="showroom-close" onClick={onClose} aria-label="Cerrar">✕</button>
      <div className="showroom-scroll">
        <div className="showroom-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80&fit=crop)` }}>
          <div className="showroom-hero-overlay" />
          <div className="showroom-hero-content">
            <div className="showroom-eyebrow">
              <span className="showroom-eyebrow-num">SSPA</span> — Política de Seguridad
            </div>
            <h2 className="showroom-title">Seguridad como Valor Fundamental</h2>
            <p className="showroom-lead">En SUMIMSA, la seguridad no es un requisito regulatorio — es un valor que forma parte del ADN de nuestra empresa. Cero incidentes no es una meta: es nuestro estándar.</p>
          </div>
        </div>

        <div className="showroom-body">
          <div className="showroom-subhead">Nuestros compromisos</div>
          <div className="sw-benefits">
            {BENEFICIOS.map(([titulo, desc]) => (
              <div key={titulo} className="sw-benefit" style={{'--sw-accent': '#f5c400'}}>
                <span className="sw-benefit-check" style={{background:'#f5c400', color:'var(--navy)'}}>✓</span>
                <span><strong style={{display:'block', marginBottom:2, color:'var(--navy)'}}>{titulo}</strong>{desc}</span>
              </div>
            ))}
          </div>

          <div className="showroom-subhead">Estándares y programas</div>
          <div className="showroom-specs">
            {SPECS.map(([titulo, desc]) => (
              <div key={titulo} className="showroom-spec">
                <div className="showroom-spec-dot" style={{background:'#f5c400'}} />
                <div>
                  <h5>{titulo}</h5>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="showroom-cta-wrap">
            <p style={{color:'var(--muted)', fontSize:'.82rem', margin:'0 auto 16px', maxWidth:520}}>
              ¿Tienes dudas sobre nuestras políticas de seguridad? Nuestro equipo técnico te asesora sin costo.
            </p>
            <button className="showroom-cta" onClick={scrollContacto}>
              Contactar un especialista →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SSPA() {
  const [openSSPA, setOpenSSPA] = useState(false)

  return (
    <section id="sspa" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{background:'#f5c400'}} />
            <span className="eyebrow-text" style={{color:'#f5c400'}}>Política SSPA</span>
          </div>
          <h2 className="s-h2">Seguridad.<br /><em style={{color:'#f5c400'}}>Sin excepciones.</em></h2>
        </div>

        <div className="sspa-layout reveal d1">
          {/* Sidebar */}
          <div className="sspa-sidebar">
            <div className="sspa-sidebar-title">Nivel de cumplimiento</div>
            {METRICS.map(([label,pct]) => (
              <div key={label} style={{marginBottom:14}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
                  <span style={{fontSize:'.78rem',color:'var(--muted)'}}>{label}</span>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'.62rem',color:'var(--cyan)'}}>{pct}</span>
                </div>
                <div style={{height:3,background:'var(--border)',borderRadius:2}}>
                  <div style={{height:'100%',background:'var(--cyan)',borderRadius:2,width:'100%',animation:'fillw 2s ease forwards'}} />
                </div>
              </div>
            ))}
            <div className="sspa-icons-grid">
              {ICONS.map((lbl) => (
                <div key={lbl} className="sspa-icon-item">
                  <span style={{fontSize:'.7rem',color:'var(--muted)',lineHeight:1.3}}>{lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Points list */}
          <div className="sspa-points">
            {PTS.map(([n,title,desc]) => (
              <div key={n} className="sspa-point"
                onMouseEnter={e=>e.currentTarget.style.background='var(--off)'}
                onMouseLeave={e=>e.currentTarget.style.background='#fff'}>
                <div className="sspa-point-num">{n}</div>
                <div>
                  <h5 className="sspa-point-title">{title}</h5>
                  <p className="sspa-point-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sistema de Gestión Integral */}
        <div className="reveal d2" style={{marginTop:52}}>
          <h3 className="sgi-title">Sistema de Gestión Integral</h3>
          <div className="sgi-grid">
            {SGI_ITEMS.map(item => (
              <div key={item.title} className="sgi-card">
                <div className="sgi-card-icon">{item.icon}</div>
                <h5 className="sgi-card-title">{item.title}</h5>
                <p className="sgi-card-desc">{item.desc}</p>
                {item.pending ? (
                  <span className="sgi-card-cta pending">Próximamente</span>
                ) : item.scrollTarget ? (
                  <a
                    href={item.href}
                    className="sgi-card-cta"
                    onClick={e => {
                      e.preventDefault()
                      const el = document.querySelector(item.scrollTarget)
                      if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
                    }}
                  >
                    {item.cta} →
                  </a>
                ) : (
                  <a href={item.href} className="sgi-card-cta">{item.cta} →</a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas" onClick={() => setOpenSSPA(true)}>
            Ver política SSPA completa
          </button>
        </div>
      </div>

      <style>{`@keyframes fillw{from{width:0}}`}</style>

      <SSPAShowroom isOpen={openSSPA} onClose={() => setOpenSSPA(false)} />
    </section>
  )
}
