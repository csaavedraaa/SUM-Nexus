import "./Nosotros.css"
export default function Nosotros() {
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
    </section>
  )
}