import { useState } from 'react'
import DetailPage from '../components/DetailPage'

export function Tullbox() {
  const [open, setOpen] = useState(false)
  return (
    <section id="tullbox" className="tullbox-section" style={{ padding: '100px 80px' }}>
      <div className="tullbox-wrap">
        <div>
          <div className="section-eyebrow reveal">Innovación Industrial</div>
          <h2 className="section-title reveal d1">Tullbox <em>In Situ</em></h2>
          <p style={{ fontSize:'1rem', color:'#444', lineHeight:1.8 }}>
            Llevamos el almacén a tu planta. Un contenedor inteligente instalado en tus instalaciones
            con todo el inventario que necesitas, gestionado y repuesto por SUMIMSA.
          </p>
          <div className="tullbox-features">
            {[
              ['📦','Inventario Administrado','Nosotros gestionamos el stock. Tú solo produces.'],
              ['📊','Control Digital','Dashboard con consumos por área, empleado y turno.'],
              ['🔧','Siempre Calibrado','Herramienta dentro de especificaciones garantizada.'],
              ['⏰','Disponibilidad 24/7','El contenedor está en tu planta, sin esperas.'],
            ].map(([icon,title,desc]) => (
              <div className="tb-feature" key={title}>
                <div className="tb-icon">{icon}</div>
                <div><h4>{title}</h4><p className="tb-feature p">{desc}</p></div>
              </div>
            ))}
          </div>
          <div className="ver-mas-wrap reveal d2" style={{ textAlign:'left', marginTop:32 }}>
            <button className="btn-ver-mas" onClick={() => setOpen(true)}>Conocer Tullbox</button>
          </div>
        </div>
        <img
          className="tullbox-img reveal"
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&fit=crop"
          alt="Tullbox container"
        />
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Tullbox In Situ"
        title="El Almacén <em>en tu Planta</em>"
        lead="Tu flujo de caja libre para lo que importa. SUMIMSA instala, gestiona y repone el inventario de herramienta directamente en tus instalaciones."
        imgUrl="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&fit=crop"
      >
        <h3>¿Cómo funciona Tullbox?</h3>
        <p>SUMIMSA instala un contenedor-almacén personalizado en tus instalaciones. El contenedor está equipado con el inventario de herramientas y equipos que tu operación requiere. Nuestro equipo monitorea en tiempo real los consumos a través de un sistema digital, y reponemos el inventario de forma automática antes de que se agote.</p>
        <h3>Beneficios Comprobados</h3>
        <p>Nuestros clientes que han implementado Tullbox reportan una reducción del 85% en el tiempo de búsqueda de herramienta, eliminación del 100% de extravíos de herramienta de alto valor, y una reducción significativa en el capital de trabajo inmovilizado en inventarios.</p>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Sin Inversión Inicial</h4><p>El contenedor y el setup son parte de nuestro servicio.</p></div>
          <div className="dp-feature"><h4>Flujo de Caja</h4><p>Solo pagas lo que consumes, sin inmovilizar capital en inventario.</p></div>
          <div className="dp-feature"><h4>Control Total</h4><p>Dashboard con consumos por empleado, turno, área y herramienta.</p></div>
          <div className="dp-feature"><h4>Siempre Calibrado</h4><p>SUMIMSA garantiza que la herramienta esté dentro de especificaciones.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}

export function Proyectos() {
  const [open, setOpen] = useState(false)
  const projects = [
    { img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title:'Plataformas Offshore', sub:'Golfo de México' },
    { img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', title:'Refinería PEMEX', sub:'Tamaulipas' },
    { img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', title:'Planta Automotriz', sub:'Noreste MX' },
    { img:'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&q=80', title:'Puerto Veracruz', sub:'Sector Naval' },
  ]
  return (
    <section id="proyectos" style={{ padding: '100px 80px' }}>
      <div className="section-eyebrow reveal">Portafolio</div>
      <h2 className="section-title reveal d1">Proyectos <em>Ejecutados</em></h2>
      <p className="section-lead reveal d2">Soluciones entregadas con excelencia operativa en los sectores más exigentes de México.</p>
      <div className="proyectos-grid">
        {projects.map(p => (
          <div className="proyecto-card reveal" key={p.title}>
            <img src={p.img} alt={p.title} />
            <div className="proyecto-card-info"><h3>{p.title}</h3><p>{p.sub}</p></div>
          </div>
        ))}
      </div>
      <div className="ver-mas-wrap reveal d2">
        <button className="btn-ver-mas" onClick={() => setOpen(true)}>Ver todos los proyectos</button>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Proyectos"
        title="Ejecutados con <em>Precisión</em>"
        lead="Soluciones industriales entregadas con excelencia operativa en los sectores más exigentes de México."
        imgUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop"
      >
        <h3>Suministro Offshore — Golfo de México</h3>
        <p>Suministro integral a plataformas petroleras offshore incluyendo herramienta de precisión, EPP certificado y consumibles industriales con entregas programadas desde Tampico, Ciudad del Carmen y Paraíso.</p>
        <h3>Programa Tullbox — Planta Industrial Tamaulipas</h3>
        <p>Instalación y operación de contenedor Tullbox In Situ en planta de manufactura. Resultado: reducción del 85% en tiempo de búsqueda de herramienta y eliminación del 100% de extravíos.</p>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Naval — Tampico/Veracruz</h4><p>Equipamiento de buques con herramienta de cubierta y seguridad marítima.</p></div>
          <div className="dp-feature"><h4>Energético — Norte MX</h4><p>Herramienta especializada para instalación de aerogeneradores.</p></div>
          <div className="dp-feature"><h4>Metal-Mecánico — Automotriz</h4><p>Equipamiento integral de taller para planta de estampado.</p></div>
          <div className="dp-feature"><h4>Inspección — Refinería</h4><p>Servicios de inspección especializada con equipos certificados PEMEX.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}

export function SSPA() {
  const [open, setOpen] = useState(false)
  const items = [
    { t:'Seguridad', d:'Protocolos SSPA certificados y EPP de las mejores marcas.' },
    { t:'Salud', d:'Programas de salud ocupacional para ambientes industriales.' },
    { t:'Protección', d:'Equipamiento de protección personal homologado internacionalmente.' },
    { t:'Ambiente', d:'Comprometidos con la operación sustentable y el cuidado ambiental.' },
  ]
  return (
    <section id="sspa" className="sspa-section" style={{ padding: '100px 80px' }}>
      <div className="section-eyebrow" style={{ color:'var(--cyan)' }}>Política Corporativa</div>
      <h2 className="section-title" style={{ color:'#fff' }}>SSPA — <em>Nuestro Compromiso</em></h2>
      <p className="section-lead">Seguridad, Salud, Protección y Ambiente: los cuatro pilares que guían cada operación de SUMIMSA.</p>
      <div className="sspa-grid">
        {items.map(it => (
          <div className="sspa-card reveal" key={it.t}><h4>{it.t}</h4><p>{it.d}</p></div>
        ))}
      </div>
      <div className="ver-mas-wrap reveal d2">
        <button className="btn-ver-mas white" onClick={() => setOpen(true)}>Ver política SSPA completa</button>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Política SSPA"
        title="Seguridad como <em>Valor Fundamental</em>"
        lead="En SUMIMSA, la seguridad no es una opción ni un requisito regulatorio — es un valor que forma parte del ADN de nuestra empresa."
        imgUrl="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=1200&q=80&fit=crop"
      >
        <h3>Seguridad Industrial</h3>
        <p>Todos nuestros productos de EPP cumplen con las normas NOM-017-STPS y estándares ANSI/ISEA. Nuestro equipo técnico está certificado para asesorar en la selección del equipo de protección adecuado para cada aplicación y riesgo específico.</p>
        <h3>Salud Ocupacional</h3>
        <p>Promovemos activamente la cultura de salud ocupacional entre nuestros clientes y colaboradores, con capacitaciones periódicas y productos ergonómicos que reducen el riesgo de lesiones por trabajo repetitivo.</p>
        <h3>Sustentabilidad Ambiental</h3>
        <p>Nuestras operaciones están diseñadas para minimizar el impacto ambiental. Trabajamos con proveedores comprometidos con prácticas sostenibles y fomentamos la economía circular en el manejo de herramientas y equipos.</p>
        <div className="dp-grid">
          <div className="dp-feature"><h4>NOM-017-STPS</h4><p>Todo nuestro EPP cumple con la norma oficial mexicana vigente.</p></div>
          <div className="dp-feature"><h4>ANSI/ISEA</h4><p>Herramienta y equipo certificados bajo estándares internacionales.</p></div>
          <div className="dp-feature"><h4>Capacitación</h4><p>Programa de capacitación en seguridad para clientes sin costo.</p></div>
          <div className="dp-feature"><h4>Auditorías</h4><p>Auditorías de seguridad en sitio disponibles para clientes corporativos.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}

export function Tecnologia() {
  const [open, setOpen] = useState(false)
  return (
    <section id="tecnología" className="tec-section" style={{ padding: '100px 80px' }}>
      <div className="section-eyebrow reveal">Transformación Digital</div>
      <h2 className="section-title reveal d1">Industria <em>4.0</em></h2>
      <p className="section-lead reveal d2">Tableros de control digitales, rastreo de activos en tiempo real y plataformas de compra inteligente para la industria mexicana.</p>
      <div className="tec-dashboard">
        {[['1,247','Órdenes Activas'],['$4.2M','Compras del Mes'],['98.5%','SLA Cumplido']].map(([n,l]) => (
          <div className="tec-kpi" key={l}><div className="tec-kpi-num">{n}</div><div className="tec-kpi-label">{l}</div></div>
        ))}
      </div>
      <div className="tec-features">
        {[
          ['Dashboard Ejecutivo','Toma de decisiones en tiempo real con KPIs de suministro, inventario y logística visualizados en un solo panel.'],
          ['Rastreo de Activos','Tecnología RFID y QR para rastrear herramienta, equipos y activos dentro de tus instalaciones con precisión.'],
          ['Plataforma de Compras','Portal digital para gestionar órdenes de compra, aprobar requisiciones y consultar catálogos actualizados 24/7.'],
          ['S&OP Digital','Planificación de ventas y operaciones integrada para alinear demanda, inventario y capacidad de entrega.'],
        ].map(([t,d]) => (
          <div className="tec-feat reveal" key={t}><h4>{t}</h4><p>{d}</p></div>
        ))}
      </div>
      <div className="ver-mas-wrap reveal d2">
        <button className="btn-ver-mas" onClick={() => setOpen(true)}>Ver capacidades digitales</button>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Tecnología"
        title="SUMIMSA <em>Digital</em>"
        lead="Más que un distribuidor: somos un socio tecnológico que digitaliza la cadena de suministro industrial de nuestros clientes."
        imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop"
      >
        <h3>Dashboard Ejecutivo</h3>
        <p>Nuestros tableros de control digitales integran datos de inventario, pedidos, entregas y consumos en una sola interfaz. Los gerentes de planta y directores de compras tienen visibilidad en tiempo real del desempeño del suministro.</p>
        <h3>Rastreo de Activos con RFID</h3>
        <p>Implementamos soluciones de rastreo de herramienta y activos industriales usando tecnología RFID y códigos QR. Cada pieza de herramienta tiene su identidad digital: ubicación, historial de uso, calibración y responsable.</p>
        <h3>Plataforma de Compras Inteligente</h3>
        <p>Portal web y app móvil para que los equipos de compras gestionen todo el ciclo: solicitud, aprobación, orden de compra, seguimiento y recepción. Integración con los principales ERPs del mercado (SAP, Oracle, Dynamics).</p>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Integración ERP</h4><p>Conectamos con SAP, Oracle, Dynamics y más plataformas empresariales.</p></div>
          <div className="dp-feature"><h4>App Móvil</h4><p>Gestiona pedidos y consulta inventario desde cualquier dispositivo.</p></div>
          <div className="dp-feature"><h4>API Abierta</h4><p>Integración directa con los sistemas de tu empresa sin intermediarios.</p></div>
          <div className="dp-feature"><h4>Reportes Automatizados</h4><p>Reportes de consumo, gasto y ahorro generados y enviados automáticamente.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}

export function Blog() {
  const [open, setOpen] = useState(false)
  const posts = [
    { tag:'Supply Chain', title:'5 Errores Críticos en Supply Chain Industrial', desc:'Los errores más comunes que cuestan millones a las empresas industriales y cómo evitarlos con tecnología y procesos bien definidos.', date:'Mar 2025', img:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
    { tag:'S&OP', title:'S&OP en la Industria Petrolera Mexicana', desc:'Cómo la planificación de ventas y operaciones está transformando la cadena de suministro del sector energético en México.', date:'Feb 2025', img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80' },
    { tag:'Digitalización', title:'Industria 4.0: Digitalización Industrial en México', desc:'El estado actual de la transformación digital en la industria manufacturera mexicana y los retos que aún quedan por resolver.', date:'Ene 2025', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  ]
  return (
    <section id="blog" style={{ padding: '100px 80px', background: '#f5f7fa' }}>
      <div className="section-eyebrow reveal">Contenido & Conocimiento</div>
      <h2 className="section-title reveal d1">Blog <em>Industrial</em></h2>
      <p className="section-lead reveal d2">Análisis, tendencias y mejores prácticas en supply chain, S&OP y digitalización industrial.</p>
      <div className="blog-grid">
        {posts.map(p => (
          <div className="blog-card reveal" key={p.title}>
            <img className="blog-img" src={p.img} alt={p.title} />
            <div className="blog-body">
              <div className="blog-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="blog-date">{p.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="ver-mas-wrap reveal d2">
        <button className="btn-ver-mas" onClick={() => setOpen(true)}>Ver todos los artículos</button>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Blog Industrial"
        title="Conocimiento para la <em>Industria</em>"
        lead="En SUMIMSA compartimos nuestra experiencia con la comunidad industrial mexicana a través de análisis, guías y tendencias del sector."
      >
        {posts.map(p => (
          <div key={p.title} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid #eee' }}>
            <img src={p.img} alt={p.title} style={{ width:'100%', aspectRatio:'16/7', objectFit:'cover', marginBottom:24 }} />
            <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'var(--orange)', marginBottom:8 }}>{p.tag}</div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', color:'var(--navy)', marginBottom:12 }}>{p.title}</h3>
            <p style={{ color:'#444', lineHeight:1.8 }}>{p.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam velit beatae consequatur facere possimus porro explicabo natus aperiam labore.</p>
            <p style={{ fontSize:'.75rem', color:'#888', marginTop:16 }}>{p.date} · SUMIMSA</p>
          </div>
        ))}
      </DetailPage>
    </section>
  )
}

export function Noticias() {
  const [open, setOpen] = useState(false)
  const noticias = [
    { day:'15', month:'ABR', year:'2025', title:'SUMIMSA expande operaciones en el Golfo Sur', desc:'Apertura de nueva sucursal en Cd. del Carmen, Campeche, fortaleciendo nuestra cobertura offshore.' },
    { day:'08', month:'MAR', year:'2025', title:'Certificación ISO 9001:2015 renovada', desc:'SUMIMSA renueva su certificación de calidad por quinta ocasión consecutiva con cero no conformidades.' },
    { day:'22', month:'FEB', year:'2025', title:'Lanzamiento del Portal de Compras Digital', desc:'Nueva plataforma digital disponible para todos nuestros clientes corporativos con integración SAP.' },
    { day:'10', month:'ENE', year:'2025', title:'Alianza con Stanley Black & Decker Professional', desc:'Nuevo acuerdo de distribución exclusiva para herramienta profesional SBD en la región noreste.' },
  ]
  return (
    <section id="noticias" style={{ padding: '100px 80px' }}>
      <div className="section-eyebrow reveal">Sala de Prensa</div>
      <h2 className="section-title reveal d1">Noticias <em>SUMIMSA</em></h2>
      <p className="section-lead reveal d2">Las últimas novedades de nuestra empresa, nuevos productos y alianzas estratégicas.</p>
      <div className="noticias-list">
        {noticias.map(n => (
          <div className="noticia-item reveal" key={n.title}>
            <div className="noticia-date">{n.day}<span>{n.month} {n.year}</span></div>
            <div className="noticia-info"><h4>{n.title}</h4><p>{n.desc}</p></div>
          </div>
        ))}
      </div>
      <div className="ver-mas-wrap reveal d2">
        <button className="btn-ver-mas" onClick={() => setOpen(true)}>Ver todas las noticias</button>
      </div>

      <DetailPage
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Noticias"
        title="Sala de <em>Prensa</em>"
        lead="Mantente al tanto de los últimos avances, alianzas y logros de SUMIMSA."
      >
        {noticias.map(n => (
          <div key={n.title} style={{ marginBottom:36, paddingBottom:36, borderBottom:'1px solid #eee' }}>
            <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'var(--cyan)', marginBottom:8 }}>{n.day} {n.month} {n.year}</div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', color:'var(--navy)', marginBottom:10 }}>{n.title}</h3>
            <p style={{ color:'#444', lineHeight:1.8 }}>{n.desc} Detalles completos próximamente disponibles en nuestro portal corporativo.</p>
          </div>
        ))}
      </DetailPage>
    </section>
  )
}

export function Contacto() {
  return (
    <section id="contacto" className="contacto-section" style={{ padding: '100px 80px' }}>
      <div className="section-eyebrow" style={{ color:'var(--cyan)' }}>CMP — Contacto</div>
      <h2 className="section-title" style={{ color:'#fff' }}>Hablemos de tu <em>Proyecto</em></h2>
      <p className="section-lead">Cuéntanos qué necesitas. Nuestro equipo te contactará en menos de 24 horas.</p>
      <div className="contacto-wrap">
        <div className="contact-form">
          {[['Nombre completo','text'],['Empresa','text'],['Email','email'],['Teléfono','tel']].map(([ph,tp]) => (
            <div className="form-group" key={ph}>
              <label>{ph}</label>
              <input type={tp} placeholder={ph} />
            </div>
          ))}
          <div className="form-group">
            <label>Sector</label>
            <select>
              <option value="">Selecciona tu sector</option>
              <option>Petrolero</option><option>Naval</option><option>Metal-Mecánico</option>
              <option>Automotriz</option><option>Energético</option>
            </select>
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Describe tu necesidad o proyecto..."></textarea>
          </div>
          <button className="btn-primary" style={{ marginTop:8 }}>Enviar Solicitud →</button>
        </div>
        <div className="contacto-info">
          {[
            ['Sede Principal','Tampico, Tamaulipas, México\nZona Industrial'],
            ['Teléfono','+52 (833) 000-0000\nLunes a Viernes 8am – 6pm'],
            ['Email','contacto@sumimsa.com\nventas@sumimsa.com'],
            ['Redes Sociales','LinkedIn · Facebook · YouTube\n@SUMIMSA'],
          ].map(([t,c]) => (
            <div className="contact-item" key={t}><h4>{t}</h4><p style={{ whiteSpace:'pre-line' }}>{c}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
