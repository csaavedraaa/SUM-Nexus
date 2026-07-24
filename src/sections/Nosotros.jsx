import { useState, useEffect } from 'react'
import SSPA from './SSPA'
import '../components/SectorShowroom.css'
import '../components/ServicioShowroom.css'
import './Nosotros.css'

const NOS_VALORES = [
  ['Integridad',          'Actuamos con honestidad y transparencia en cada operación y relación comercial.'],
  ['Eficiencia',          'Optimizamos recursos y procesos para entregar el máximo valor a nuestros clientes.'],
  ['Trabajo Colaborativo','Un equipo de 580+ personas comprometidas con un objetivo común: la excelencia.'],
  ['Responsabilidad',     'Asumimos el compromiso con nuestros clientes, proveedores y la comunidad.'],
  ['Enfoque al Cliente',  'Diseñamos soluciones a la medida de cada industria y operación.'],
]

const NOS_SECTORES = [
  ['Sector Petrolero',    'Soluciones integrales para exploración, producción y refinación de petróleo y gas.'],
  ['Sector Naviero',      '7 ubicaciones estratégicas cubriendo los principales puertos del Golfo de México.'],
  ['Sector Metal Mecánico','Personal calificado y marcas líderes para fabricación, ingeniería y mantenimiento.'],
  ['Sector Energético',   'Apoyo a proyectos de energías renovables: solar, eólica, hidroeléctrica y geotérmica.'],
]

function NosotrosShowroom({ isOpen, onClose }) {
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
        <div className="showroom-hero" style={{ backgroundImage: `url(/img/nosotros-hero.png)`, backgroundPosition: 'center 30%' }}>
          <div className="showroom-hero-overlay" />
          <div className="showroom-hero-content">
            <div className="showroom-eyebrow">
              <span className="showroom-eyebrow-num">SUMIMSA</span> — Acerca de nosotros
            </div>
            <h2 className="showroom-title">Empresa de clase mundial</h2>
            <p className="showroom-lead">SUMIMSA nació en Tampico con un compromiso: ser el único proveedor que la industria mexicana necesita. Más de 15 años después, ese compromiso nos define.</p>
          </div>
        </div>

        <div className="showroom-body">
          <div className="nos-mv-grid">
            <div className="nos-mv-text">
              <div className="showroom-subhead">Misión y Visión</div>
              <div className="sw-intro" style={{marginBottom: 8}}>
                <strong style={{color:'var(--navy)'}}>Misión —</strong> Ser el proveedor integral de herramientas, equipos y servicios industriales que la industria mexicana necesita para operar con excelencia, seguridad y eficiencia.
              </div>
              <div className="sw-intro">
                <strong style={{color:'var(--navy)'}}>Visión —</strong> Consolidarnos como la empresa de suministro industrial de clase mundial número uno en México, reconocida como el socio estratégico que transforma la cadena de suministro industrial del país.
              </div>
            </div>
            <div className="nos-mv-certs">
              <div className="showroom-subhead">Certificaciones</div>
              <div className="nos-certs">
                {[
                  { img: '/img/iso-9001.png',  pdf: '/cert-iso-9001.pdf',  name: 'ISO 9001:2015', desc: 'Sistemas de Calidad' },
                  { img: '/img/iso-14001.png', pdf: '/cert-iso-14001.pdf', name: 'ISO 14001:2015', desc: 'Gestión Ambiental' },
                  { img: '/img/iso-45001.png', pdf: '/cert-iso-45001.pdf', name: 'ISO 45001:2018', desc: 'Seguridad y Salud' },
                ].map(c => (
                  <a key={c.name} href={c.pdf} download className="nos-cert-badge">
                    <img src={c.img} alt={c.name} />
                    <span className="nos-cert-name">{c.name}</span>
                    <span className="nos-cert-desc">{c.desc}</span>
                    <span className="nos-cert-dl">Descargar ↓</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="showroom-subhead">Valores Institucionales</div>
          <div className="sw-benefits">
            {NOS_VALORES.map(([titulo, desc]) => (
              <div key={titulo} className="sw-benefit" style={{'--sw-accent': 'var(--cyan)'}}>
                <span className="sw-benefit-check">✓</span>
                <span><strong style={{display:'block', marginBottom:2, color:'var(--navy)'}}>{titulo}</strong>{desc}</span>
              </div>
            ))}
          </div>

          <div className="showroom-subhead">Nuestros Sectores</div>
          <div className="showroom-specs">
            {NOS_SECTORES.map(([titulo, desc]) => (
              <div key={titulo} className="showroom-spec">
                <div className="showroom-spec-dot" />
                <div><h5>{titulo}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <div className="showroom-subhead">En números</div>
          <div className="showroom-specs">
            {[
              ['+15 Años','Operando con excelencia en los sectores industriales más exigentes de México.'],
              ['580+ Colaboradores','Equipo altamente calificado distribuido en 7 plazas a lo largo del Golfo de México.'],
              ['100% Mexicana','Empresa con capital 100% mexicano, comprometida con el desarrollo industrial del país.'],
              ['Proveedores Líderes','Distribuidores directos de Stanley, DeWalt, MSA, Honeywell y más marcas reconocidas.'],
            ].map(([titulo, desc]) => (
              <div key={titulo} className="showroom-spec">
                <div className="showroom-spec-dot" />
                <div><h5>{titulo}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <div className="showroom-cta-wrap">
            <p style={{color:'var(--muted)', fontSize:'.82rem', margin:'0 auto 16px', maxWidth:520}}>
              ¿Quieres conocer más sobre nuestras soluciones para tu industria? Nuestro equipo te asesora sin costo.
            </p>
            <button className="showroom-cta" onClick={scrollContacto}>
              Contactar a SUMIMSA →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Nosotros() {
  const [openNosotros, setOpenNosotros] = useState(false)

  const rows = [
    ['Fundada en',    'Tampico, Tamps.'],
    ['Tipo',          '100% Mexicana'],
    ['Ubicaciones',   '7 Plazas activas'],
    ['Sectores',      'Petro · Naval · MM · Energía'],
    ['Clasificación', 'Clase Mundial'],
    ['Estatus',       '● Activo'],
  ]
  const timeline = [
    ['Fundación',  'Tampico, Tamps.',    'Inicio de operaciones con la visión de ser el proveedor industrial más confiable de México.'],
    ['Expansión',  '7 plazas',           'Crecimos de una plaza en Tampico a una red de ubicaciones estratégicas en todo el Golfo de México.'],
    ['Equipo',     '580+ colaboradores', 'Un equipo comprometido con la excelencia en cada operación.'],
    ['Hoy',        '+15 años',           'Empresa de clase mundial en los sectores Petrolero, Naval, Metal-Mecánico y Energético.'],
  ]

  const valores = [
    'Integridad',
    'Eficiencia',
    'Trabajo Colaborativo',
    'Responsabilidad',
    'Enfoque al Cliente',
  ]

  return (
    <section id="nosotros" className="section section-alt">
      <div className="container">
        <div className="nos-grid">
          {/* Terminal visual */}
          <div className="reveal nos-terminal-wrap">
            <div className="nos-terminal">
              <div className="nos-terminal-bar">
                {['#ff5f57','#febc2e','#28c840'].map(c =>
                  <div key={c} style={{width:10,height:10,borderRadius:'50%',background:c}} />
                )}
                <span className="nos-terminal-title">sumimsa — company-profile.json</span>
              </div>
              <div className="nos-terminal-body">
                {rows.map(([k,v]) => (
                  <div key={k} className="nos-terminal-row">
                    <span className="nos-terminal-key">{k}</span>
                    <span className="nos-terminal-val" style={{color: k==='Estatus' ? '#00c46a' : 'var(--cyan)'}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="nos-badge">
              <strong>+15</strong>
              <span>Años de experiencia</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal d2">
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Acerca de SUMIMSA</span>
            </div>
            <h2 className="s-h2" style={{marginBottom:18}}>Empresa de<br /><em>clase mundial</em></h2>
            <div className="nos-quote">
              "Comprometidos a ser el único proveedor que necesitas para operar con excelencia."
            </div>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.8,marginBottom:12}}>
              Es en Tampico, Tamaulipas donde <strong style={{color:'var(--navy)'}}>SUMIMSA</strong> inicia operaciones con el compromiso de llegar a ser una empresa de clase mundial, atendiendo las necesidades de nuestros clientes en los sectores metal-mecánico, petrolero, naval, automotriz y energético.
            </p>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.8,marginBottom:12}}>
              Somos una empresa 100% mexicana, distribuidora directa de herramientas, equipos y accesorios de las marcas más reconocidas en el mercado, con servicios integrales de calidad, trabajando en forma efectiva y segura.
            </p>
            <div className="nos-btns">
              <button className="nos-btn-primary" onClick={() => setOpenNosotros(true)}>
                Conocer más sobre SUMIMSA
              </button>
              <button className="nos-btn-sec"
                onClick={() => {const el=document.querySelector('#sectores');if(el)window.scrollTo({top:el.offsetTop-68,behavior:'smooth'})}}>
                Ver Sectores →
              </button>
            </div>
          </div>
        </div>

        {/* Línea del tiempo ejecutiva */}
        <div className="reveal d2 nos-timeline-wrap">
          <div className="nos-subhead">Nuestra trayectoria</div>
          <div className="nos-timeline">
            {timeline.map(([stage, tag, desc]) => (
              <div key={stage} className="nos-timeline-item">
                <div className="nos-timeline-dot" />
                <div className="nos-timeline-stage">{stage}</div>
                <div className="nos-timeline-tag">{tag}</div>
                <p className="nos-timeline-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <SSPA />

      <NosotrosShowroom isOpen={openNosotros} onClose={() => setOpenNosotros(false)} />
    </section>
  )
}
