import "./Nosotros.css"
import DetailPage from '../components/DetailPage'
export default function Nosotros() {
  const [open, setOpen] = useState(false)
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
        <div className="nosotros-grid">
          {/* LEFT: Visual */}
          <div className="reveal nos-vis">
            {/* Real image */}
            <div className="nos-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&fit=crop"
                alt="SUMIMSA oficinas"
                className="nos-img"
                loading="lazy"
              />
              <div className="nos-img-overlay" />
              {/* Terminal card on top of image */}
              <div className="nos-terminal">
                <div className="nos-term-header">
                  {["#ff5f57","#febc2e","#28c840"].map(c=>(
                    <span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"inline-block"}} />
                  ))}
                  <span className="nos-term-title">sumimsa — profile.json</span>
                </div>
                <div className="nos-term-body">
                  {rows.map(([k,v])=>(
                    <div key={k} className="nos-term-row">
                      <span className="nos-term-key">{k}</span>
                      <span className="nos-term-val" style={k==="Estatus"?{color:"#00c46a"}:{}}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Badge */}
            <div className="nos-badge">
              <strong>+15</strong>
              <span>Años de<br/>experiencia</span>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="reveal d2 nos-text">
            <div className="eyebrow"><div className="eyebrow-line"/><span className="eyebrow-text">Acerca de SUMIMSA</span></div>
            <h2 className="s-h2" style={{marginBottom:18}}>Empresa de<br/><em>clase mundial</em></h2>
            <div className="nos-quote">
              "Comprometidos a ser el único proveedor que necesitas para operar con excelencia."
            </div>
            <p className="nos-p">
              Es en Tampico, Tamaulipas donde <strong>SUMIMSA</strong> inicia operaciones con el compromiso
              de llegar a ser una empresa de clase mundial, atendiendo las necesidades en los sectores
              metal-mecánico, petrolero, naval, automotriz y energético de la República Mexicana.
            </p>
            <p className="nos-p">
              Somos una empresa 100% mexicana, distribuidora directa de herramientas, equipos y accesorios
              de las marcas más reconocidas, con servicios integrales de calidad, trabajando en forma
              efectiva y segura.
            </p>
            <div className="chips">
              {chips.map(c=><div key={c} className="chip">{c}</div>)}
            </div>
          </div>
        </div>
      </div>
    
      <div className="ver-mas-wrap reveal d2"><button className="btn-ver-mas" onClick={() => setOpen(true)}>Conocer más sobre SUMIMSA</button></div>

      <DetailPage isOpen={open} onClose={() => setOpen(false)}
  eyebrow="Acerca de SUMIMSA" title="Empresa de <em>Clase Mundial</em>"
  lead="Una empresa 100% mexicana que nació en Tampico con el compromiso de ser el único proveedor que la industria nacional necesita.">
  <img className="dp-img" src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=80&fit=crop" alt="SUMIMSA" />
  <h3>Nuestra Historia</h3>
  <p>Es en Tampico, Tamaulipas donde SUMIMSA inicia operaciones con el compromiso de llegar a ser una empresa de clase mundial, atendiendo las necesidades en los sectores metal-mecánico, petrolero, naval, automotriz y energético de la República Mexicana.</p>
  <h3>Misión</h3>
  <p>Suministrar soluciones integrales de herramienta, equipo y servicios a los sectores energéticos e industriales de México, con los más altos estándares de calidad, seguridad y sustentabilidad, contribuyendo al éxito de nuestros clientes y al desarrollo del país.</p>
  <h3>Visión</h3>
  <p>Ser la empresa de suministro industrial de clase mundial con mayor presencia en México, reconocida por nuestra confiabilidad, innovación y compromiso con el cliente.</p>
  <h3>Valores</h3>
  <div className="dp-grid">
    <div className="dp-feature"><h4>Calidad</h4><p>Productos y servicios que superan las expectativas del cliente, siempre.</p></div>
    <div className="dp-feature"><h4>Confianza</h4><p>Relaciones comerciales basadas en transparencia, cumplimiento y resultados.</p></div>
    <div className="dp-feature"><h4>Seguridad</h4><p>SSPA como valor fundamental. Cero accidentes es nuestro estándar.</p></div>
    <div className="dp-feature"><h4>Innovación</h4><p>Adopción continua de tecnología para ofrecer mejores soluciones.</p></div>
  </div>
</DetailPage>
    </section>
  )
}