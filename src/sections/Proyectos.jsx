import { useState } from 'react'
import TullXpert from '../components/TullXpert'
import DiagramaInteractivo from '../components/DiagramaInteractivo'
import './Proyectos.css'

const LINEAS = [
  {
    id: '01', titulo: 'Top Drive', accent: '#003a70', interactive: true,
    resumen: 'Top drives con polea viajera y unidad de potencia, instalación y soporte técnico.',
    detalle: {
      intro: 'Suministro de Top Drives con polea viajera y unidad de potencia, junto con los servicios de instalación, mantenimiento y soporte técnico que garantizan la continuidad operativa del equipo de perforación.',
      beneficios: [
        'Adquisición de Top Drives con polea viajera y unidad de potencia',
        'Servicios de instalación, mantenimiento y soporte técnico para su operación',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
      img: '/img/proyectos/top-drive.png',
    },
    // Esquema técnico del equipo — partes internas, solo ficha de texto (sin foto por pieza).
    diagrama: {
      eyebrow: 'Esquema Técnico',
      title: 'Componentes del Top Drive',
      img: '/img/proyectos/top-drive-esquema.png',
      model3d: '/models/top-drive.glb',
      hotspots: [
        { x: 66, y: 11, label: 'Ventilador', desc: 'Sistema de enfriamiento forzado que disipa el calor generado por el motor principal durante la operación continua.' },
        { x: 65, y: 20, label: 'Freno de Disco', desc: 'Detiene y controla la rotación de la sarta de perforación de forma segura y precisa.' },
        { x: 41, y: 17, label: 'Cilindro de Balanceo', desc: 'Compensa el peso del conjunto rotativo y absorbe cargas dinámicas durante la perforación.' },
        { x: 40, y: 29, label: 'Bail', desc: 'Estructura que soporta el peso total del Top Drive y lo conecta al gancho de la torre.' },
        { x: 56, y: 27, label: 'Tanque', desc: 'Depósito de lubricante para los componentes internos del sistema motriz y de engranes.' },
        { x: 68, y: 34, label: 'Motor Principal', desc: 'Genera el torque necesario para hacer girar la sarta de perforación.' },
        { x: 49, y: 38, label: 'Ensamble de Tubo de Lavado', desc: 'Permite el paso continuo del fluido de perforación mientras la sarta rota.' },
        { x: 42, y: 47, label: 'Caja de Engranes', desc: 'Reduce y transmite la velocidad del motor principal hacia la cabeza rotatoria.' },
        { x: 43, y: 56, label: 'Cabeza Rotatoria', desc: 'Componente que transmite la rotación directamente a la sarta de perforación.' },
        { x: 42, y: 67, label: 'Cilindro de Inclinación', desc: 'Permite inclinar el conjunto para alinear las conexiones durante las maniobras.' },
        { x: 64, y: 68, label: 'Viga Guía', desc: 'Mantiene la alineación vertical del Top Drive a lo largo del mástil durante su desplazamiento.' },
        { x: 46, y: 80, label: 'Llave de Contra', desc: 'Sujeta la tubería para permitir el apriete o aflojado seguro de las conexiones.' },
        { x: 60, y: 81, label: 'Link', desc: 'Conecta el elevador con el cuerpo del Top Drive para el manejo de la tubería.' },
        { x: 54, y: 92, label: 'Elevador', desc: 'Sujeta y eleva la tubería de perforación durante las maniobras de viaje.' },
      ],
    },
  },
  {
    id: '02', titulo: 'Contención de Derrames', accent: '#0062a3',
    resumen: 'Sistemas Cero Derrames: inspección, instalación, mantenimiento y rehabilitación.',
    detalle: {
      intro: 'Adquisición de Sistemas Cero Derrames y servicios de inspección, instalación y mantenimiento para la rehabilitación de los sistemas propiedad de PEP, asegurando el cumplimiento ambiental en cada operación.',
      beneficios: [
        'Adquisición de Sistemas Cero Derrames',
        'Servicios de inspección, instalación y mantenimiento',
        'Rehabilitación de los sistemas propiedad de PEP',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
      img: '/img/proyectos/contencion-derrames.png',
    },
  },
  {
    id: '03', titulo: 'Preventores', accent: '#0089c4',
    resumen: 'Adquisición, mantenimiento y certificación de equipos BOP y sus componentes.',
    detalle: {
      intro: 'Adquisición de equipos BOP (Preventores de Reventones) y sus componentes y accesorios, con servicios de mantenimiento y certificación bajo normas API y estándares PEMEX.',
      beneficios: [
        'Adquisición de equipos BOP',
        'Adquisición de componentes y accesorios',
        'Servicios de mantenimiento y certificación de BOPs',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
      img: '/img/proyectos/preventores.png',
    },
  },
  {
    id: '04', titulo: 'Bombas de Lodo', accent: '#00b2e3',
    resumen: 'Mantenimiento a bombas de lodo y conversión de sistemas de circulación.',
    detalle: {
      intro: 'Adquisición de bombas de lodo y servicios de mantenimiento a las diferentes marcas propiedad de PEP, incluyendo conversión de 5,000 a 7,500 psi de bombas de lodo y sistemas de circulación.',
      beneficios: [
        'Adquisición de bombas de lodo',
        'Mantenimiento a las diferentes marcas de bombas de lodo propiedad de PEP',
        'Conversión de 5,000 a 7,500 psi de bombas de lodo y sistemas de circulación',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
      img: '/img/proyectos/bombas-de-lodo.png',
    },
  },
  {
    id: '05', titulo: 'Control de Sólidos', accent: '#00d4f0', interactive: true,
    resumen: 'Instalación, mantenimiento y operación de equipos y componentes de control de sólidos.',
    detalle: {
      intro: 'Adquisición de sets de equipos y componentes de control de sólidos, con servicios de instalación, mantenimiento y operación que optimizan el proceso de perforación.',
      beneficios: [
        'Adquisición de sets de equipos de control de sólidos',
        'Adquisición de componentes de control de sólidos',
        'Servicios de instalación, mantenimiento y operación de los equipos',
        'Suministro de refacciones para la operación y mantenimiento',
      ],
      img: '/img/proyectos/control-de-solidos.png',
    },
    // Esquema técnico real — se abre en el modo inmersivo con hotspots por equipo.
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

// Pétalos del diagrama orgánico — mismas 5 fotos reales del panel.
// lineaId conecta cada botón con su tarjeta correspondiente en LINEAS.
const PETALS = [
  { id: 'p1', pos: 'p0',   img: '/img/proyectos/top-drive.png',          label: 'Top Drive',               lineaId: '01' },
  { id: 'p2', pos: 'p72',  img: '/img/proyectos/contencion-derrames.png', label: 'Contención de Derrames',  lineaId: '02' },
  { id: 'p3', pos: 'p144', img: '/img/proyectos/preventores.png',         label: 'Preventores',             lineaId: '03' },
  { id: 'p4', pos: 'p216', img: '/img/proyectos/bombas-de-lodo.png',      label: 'Bombas de Lodo',          lineaId: '04' },
  { id: 'p5', pos: 'p288', img: '/img/proyectos/control-de-solidos.png',  label: 'Control de Sólidos',      lineaId: '05' },
]

// Ícono de clic — reemplaza el emoji de la referencia por un SVG lineal.
const ClickIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3.5 19 13l-5.2.7 2.8 5-2.6 1.4-2.8-5-3.6 3.8z" />
  </svg>
)

export default function Proyectos() {
  const [activeId, setActiveId] = useState(null)
  const [immersivoId, setImmersivoId] = useState(null)
  const [activeHotspot, setActiveHotspot] = useState(null)

  // Selección compartida por el panel y el diagrama circular: si la línea
  // trae un esquema técnico (`interactive`), abre el modo inmersivo en vez
  // de solo expandir las viñetas.
  const handleSelect = (linea) => {
    if (linea.interactive) {
      setImmersivoId(id => id === linea.id ? null : linea.id)
    } else {
      setActiveId(id => id === linea.id ? null : linea.id)
    }
  }

  const linaInmersiva = LINEAS.find(l => l.id === immersivoId)

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
          {/* Panel de detalle — bullets de cada línea de negocio */}
          <div className="proy-panel">
            {LINEAS.map(l => (
              <div
                key={l.id}
                className={`proy-line${activeId === l.id ? ' active' : ''}`}
                style={{ '--proy-accent': l.accent }}
              >
                <button className="proy-line-head" onClick={() => handleSelect(l)}>
                  <span className="proy-line-title">{l.titulo}</span>
                  <span className="proy-line-click"><ClickIcon /></span>
                </button>
                <ul className="proy-line-list">
                  {l.detalle.beneficios.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Diagrama orgánico — equipo de perforación al centro, fotos flotando alrededor.
              Cada foto es un botón que abre su tarjeta correspondiente en el panel. */}
          <TullXpert
            petals={PETALS}
            hubClassName="tx-hub-photo"
            hub={<img src="/img/servicios/hub-plataforma.jpg" alt="Equipo de perforación SUMIMSA" />}
            activeId={activeId}
            onSelect={(p) => {
              const linea = LINEAS.find(l => l.id === p.lineaId)
              if (linea) handleSelect(linea)
            }}
          />
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
