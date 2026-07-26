import { useState } from 'react'
import DiagramaInteractivo from '../components/DiagramaInteractivo'
import './Proyectos.css'

const HUB_DIAGRAMA = {
  diagrama: {
    eyebrow: 'Vista 360°',
    title: 'Torre Petrolera',
    model3d: '/models/top-drive.glb',
    hotspots: [
      { x: 45, y: 23, fz: 0.71, label: 'Hotspot prueba', desc: 'Descripción de prueba del componente.' },
    ],
  },
}

const LINEAS = [
  {
    id: '01', titulo: 'Top Drive', accent: '#003a70',
    detalle: {
      beneficios: [
        'Adquisición de Top Drives con polea viajera y unidad de potencia',
        'Servicios de instalación, mantenimiento y soporte técnico para su operación',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
    },
  },
  {
    id: '02', titulo: 'Contención de Derrames', accent: '#0062a3',
    detalle: {
      beneficios: [
        'Adquisición de Sistemas Cero Derrames',
        'Servicios de inspección, instalación y mantenimiento',
        'Rehabilitación de los sistemas propiedad de PEP',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
    },
  },
  {
    id: '03', titulo: 'Preventores', accent: '#0089c4',
    detalle: {
      beneficios: [
        'Adquisición de equipos BOP',
        'Adquisición de componentes y accesorios',
        'Servicios de mantenimiento y certificación de BOPs',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
    },
  },
  {
    id: '04', titulo: 'Bombas de Lodo', accent: '#00b2e3',
    detalle: {
      beneficios: [
        'Adquisición de bombas de lodo',
        'Mantenimiento a las diferentes marcas de bombas de lodo propiedad de PEP',
        'Conversión de 5,000 a 7,500 psi de bombas de lodo y sistemas de circulación',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
    },
  },
  {
    id: '05', titulo: 'Control de Sólidos', accent: '#00d4f0', interactive: true,
    detalle: {
      beneficios: [
        'Adquisición de sets de equipos de control de sólidos',
        'Adquisición de componentes de control de sólidos',
        'Servicios de instalación, mantenimiento y operación de los equipos',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
    },
    diagrama: {
      eyebrow: 'Esquema Técnico',
      title: 'Equipos de Control de Sólidos',
      img: '/img/proyectos/control-solidos-esquema.png',
      hotspots: [
        { x: 29, y: 39, label: 'Agitador de Lodo', desc: 'Mezcla el lodo en las presas para mantener sus propiedades homogéneas antes de reingresar al pozo.', img: '/img/proyectos/equipos/agitador-de-lodo.png' },
        { x: 42, y: 37, label: 'Centrífuga Decantadora', desc: 'Separa sólidos finos del lodo por fuerza centrífuga, recuperando fluido reutilizable.', img: '/img/proyectos/equipos/centrifuga-decantadora.png' },
        { x: 50, y: 33, label: 'Mud Cleaner', desc: 'Combina hidrociclones y zaranda fina para recuperar barita y reducir descarte de lodo.', img: '/img/proyectos/equipos/mud-cleaner.png' },
        { x: 57, y: 37, label: 'Desarcillador', desc: 'Remueve partículas de arcilla de tamaño medio mediante hidrociclones.', img: '/img/proyectos/equipos/desarcillador.png' },
        { x: 64, y: 37, label: 'Desarenador', desc: 'Elimina partículas de arena del lodo de perforación mediante hidrociclones de mayor diámetro.', img: '/img/proyectos/equipos/desarenador.png' },
        { x: 76, y: 37, label: 'Desgasificador', desc: 'Extrae el gas atrapado en el lodo antes de que continúe circulando, previniendo riesgos de kick.', img: '/img/proyectos/equipos/desgasificador.png' },
        { x: 85, y: 37, label: 'Zaranda', desc: 'Primer punto de control: retira los recortes de perforación más grandes mediante mallas vibratorias.', img: '/img/proyectos/equipos/zaranda.png' },
        { x: 95, y: 22, label: 'Separador Líquido-Gas', desc: 'Separa la fase líquida de la gaseosa antes del venteo, protegiendo el resto del sistema.', img: '/img/proyectos/equipos/separador-liquido-gas.png' },
        { x: 23, y: 76, label: 'Bomba de Lodo', desc: 'Impulsa el lodo tratado de regreso hacia la sarta de perforación para continuar el ciclo.', img: '/img/proyectos/equipos/bomba-de-lodo.png' },
      ],
    },
  },
]

const ClickIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3.5 19 13l-5.2.7 2.8 5-2.6 1.4-2.8-5-3.6 3.8z" />
  </svg>
)

const Icon360 = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 2C6.5 2 2 6.5 2 12" />
    <ellipse cx="12" cy="12" rx="4" ry="10" />
    <path d="M2 12h20M12 2v20" />
    <path d="M19 5l3 3-3 3" />
  </svg>
)

export default function Proyectos() {
  const [activeId, setActiveId] = useState(null)
  const [immersivoId, setImmersivoId] = useState(null)
  const [activeHotspot, setActiveHotspot] = useState(null)

  const handleSelect = (linea) => {
    if (linea.interactive) {
      setImmersivoId(id => id === linea.id ? null : linea.id)
      setActiveId(null)
      setActiveHotspot(null)
    } else {
      setActiveId(id => id === linea.id ? null : linea.id)
    }
  }

  const linaInmersiva = immersivoId === 'hub'
    ? HUB_DIAGRAMA
    : LINEAS.find(l => l.id === immersivoId)

  return (
    <section id="proyectos" className="section proy-section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Proyectos Estratégicos</span></div>
          <h2 className="s-h2">Servicio a<br /><em>la medida</em></h2>
        </div>

        <div className="proy-objetivo reveal">
          <span className="proy-objetivo-pill">Objetivo</span>
          <p className="proy-objetivo-text">
            Proporcionar a PEP el suministro y los servicios de mantenimiento (incluido el refaccionamiento) de los componentes críticos a los Equipos de Perforación propiedad de PEMEX, que permita la continuidad operativa, evitando tiempos de espera no productivos y el cumplimiento de las metas en la incorporación de reservas conforme a los programas Operativos vigentes.
          </p>
        </div>

        <div className="proy-layout reveal d1">
          <div className="proy-panel">
            {LINEAS.map(l => (
              <div
                key={l.id}
                className={`proy-line${(activeId === l.id || immersivoId === l.id) ? ' active' : ''}`}
                style={{ '--proy-accent': l.accent }}
              >
                <button className="proy-line-head" onClick={() => handleSelect(l)}>
                  <span className="proy-line-title">{l.titulo}</span>
                  <span className="proy-line-click"><ClickIcon /></span>
                </button>
                {!l.interactive && (
                  <ul className="proy-line-list">
                    {l.detalle.beneficios.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="proy-hub-wrap">
            <div className="proy-hub-stage">
              <svg className="proy-hub-rings" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Arco interior — ~80° sólido */}
                <circle cx="250" cy="250" r="226" fill="none" stroke="rgba(0,212,240,0.9)" strokeWidth="3" strokeDasharray="315 1105" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="5s" repeatCount="indefinite" />
                </circle>
                {/* Arco exterior — ~50° sólido, reversa */}
                <circle cx="250" cy="250" r="243" fill="none" stroke="rgba(0,155,219,0.55)" strokeWidth="2" strokeDasharray="212 1315" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="9s" repeatCount="indefinite" />
                </circle>
              </svg>
              <button
                className={`proy-hub-circle--btn${immersivoId === 'hub' ? ' active' : ''}`}
                onClick={() => { setImmersivoId(id => id === 'hub' ? null : 'hub'); setActiveId(null); setActiveHotspot(null) }}
                aria-label="Ver esquema técnico de Top Drive"
              >
                <img src="/img/servicios/hub-plataforma.jpg" alt="Equipo de perforación SUMIMSA" />
                <div className="proy-hub-overlay">
                  <Icon360 />
                  <span>Vista 360°</span>
                  <small>Esquema técnico</small>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {linaInmersiva && (
        <DiagramaInteractivo
          isOpen={!!immersivoId}
          onClose={() => { setImmersivoId(null); setActiveHotspot(null) }}
          eyebrow={linaInmersiva.diagrama.eyebrow}
          title={linaInmersiva.diagrama.title}
          img={linaInmersiva.diagrama.img}
          model3d={linaInmersiva.diagrama.model3d}
          hotspots={linaInmersiva.diagrama.hotspots}
          activeHotspot={activeHotspot}
          onHotspotSelect={setActiveHotspot}
        />
      )}
    </section>
  )
}
