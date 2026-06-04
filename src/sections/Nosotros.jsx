import { useState } from 'react'
import DetailPage from '../components/DetailPage'
import './Nosotros.css'

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
  const chips = ['Calidad','Confianza','Innovación','Seguridad','Liderazgo','México']

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
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Acerca de SUMIMSA</span></div>
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
            <div className="chips">
              {chips.map(c => <div key={c} className="chip">{c}</div>)}
            </div>
            <div className="nos-btns">
              <button className="btn-ver-mas" onClick={() => setOpenNosotros(true)}>
                Conocer más sobre SUMIMSA
              </button>
              <a href="#sectores" className="btn-ver-mas" style={{textDecoration:'none'}}
                onClick={e=>{e.preventDefault();const el=document.querySelector('#sectores');if(el)window.scrollTo({top:el.offsetTop-68,behavior:'smooth'})}}>
                Ver Sectores →
              </a>
            </div>
          </div>
        </div>
      </div>

      <DetailPage
        isOpen={openNosotros}
        onClose={() => setOpenNosotros(false)}
        eyebrow="Acerca de SUMIMSA"
        title="Empresa de <em>clase mundial</em>"
        lead="SUMIMSA nació en Tampico con un compromiso: ser el único proveedor que la industria mexicana necesita. Más de 15 años después, ese compromiso nos define."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&fit=crop" alt="SUMIMSA operaciones" />
        <h3>Nuestra Historia</h3>
        <p>SUMIMSA inicia operaciones en Tampico, Tamaulipas, con la visión de convertirse en la empresa de suministro industrial más confiable de México. Con más de 15 años en el mercado, hemos crecido de una plaza en Tampico a una red de 7 ubicaciones estratégicas en el Golfo de México, con más de 580 colaboradores comprometidos con la excelencia.</p>
        <h3>Misión</h3>
        <p>Ser el proveedor integral de herramientas, equipos y servicios industriales que la industria mexicana necesita para operar con excelencia, seguridad y eficiencia.</p>
        <h3>Visión</h3>
        <p>Consolidarnos como la empresa de suministro industrial de clase mundial número uno en México, reconocida por nuestros clientes, proveedores y colaboradores como el socio estratégico que transforma la cadena de suministro industrial del país.</p>
        <h3>Nuestros Sectores</h3>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Sector Petrolero</h4><p>SUMIMSA suministra soluciones integrales a empresas de exploración, producción y refinación de petróleo y gas, con respaldo de marcas de prestigio y precios competitivos.</p></div>
          <div className="dp-feature"><h4>Sector Naviero</h4><p>Con 7 ubicaciones estratégicas cubrimos la extensa red de puertos mexicanos para transporte de contenedores, carga a granel, hidrocarburos y productos químicos.</p></div>
          <div className="dp-feature"><h4>Sector Metal Mecánico</h4><p>Personal altamente calificado y el respaldo de fabricantes líderes para ofrecer servicio completo en fabricación, ingeniería, diseño, mantenimiento y logística.</p></div>
          <div className="dp-feature"><h4>Sector Energético</h4><p>Trabajamos con clientes que promueven el desarrollo de energías renovables: solar, eólica, hidroeléctrica y geotérmica.</p></div>
        </div>
        <div className="dp-grid">
          <div className="dp-feature"><h4>+15 Años</h4><p>Más de quince años operando con excelencia en los sectores industriales más exigentes de México.</p></div>
          <div className="dp-feature"><h4>580+ Colaboradores</h4><p>Equipo altamente calificado distribuido en 7 plazas a lo largo del Golfo de México.</p></div>
          <div className="dp-feature"><h4>100% Mexicana</h4><p>Empresa con capital 100% mexicano, comprometida con el desarrollo industrial del país.</p></div>
          <div className="dp-feature"><h4>Proveedores Líderes</h4><p>Distribuidores directos de las marcas más reconocidas: Stanley, DeWalt, MSA, Honeywell y más.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}
