import LogoTicker from './LogoTicker'
import './CasosExito.css'

const CLIENTES = [
  'pemex', 'halliburton', 'baker-hughes', 'saipem', 'slb', 'cosl', 'grupo-mexico',
  'nabors', 'mexoil', 'semar', 'borr-drilling', 'gsm', 'carso', 'latina', 'cfe',
  'ihsa', 'fontis-energy', 'parker-drilling', 'diavaz', 'opex',
]

const CASOS = [
  {
    stat: '>97%',
    label: 'OTIF en plataformas offshore',
    text: 'Entregas completas y a tiempo, mes tras mes, a operaciones críticas en el Golfo de México.',
  },
  {
    stat: '45 min → 2 min',
    label: 'Digitalización del inventario Tullbox',
    text: 'Sensores IoT y dashboard en tiempo real redujeron el tiempo de solicitud de herramienta y lograron ROI en menos de 3 meses.',
    link: '#blog',
  },
  {
    stat: '7 plazas',
    label: 'Más de 15 años de crecimiento',
    text: 'De una sola operación en Tampico a una red que cubre todo el Golfo de México, con más de 580 colaboradores.',
  },
]

export default function CasosExito() {
  const goTo = (href) => (e) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
  }

  return (
    <div className="casos-wrap">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Casos de Éxito</span></div>
          <h2 className="s-h2">Resultados que<br /><em>hablan por sí solos</em></h2>
        </div>

        <div className="casos-grid reveal d1">
          {CASOS.map(c => (
            <div key={c.label} className="caso-card">
              <div className="caso-stat">{c.stat}</div>
              <h4 className="caso-label">{c.label}</h4>
              <p className="caso-text">{c.text}</p>
              {c.link && (
                <a href={c.link} className="caso-link" onClick={goTo(c.link)}>
                  Leer el caso completo →
                </a>
              )}
            </div>
          ))}
        </div>

      </div>

      <div className="reveal d2 casos-clientes">
        <LogoTicker items={CLIENTES} basePath="/logos/clientes" label="Algunas empresas con las que hemos colaborado" speed={38} />
      </div>
    </div>
  )
}
