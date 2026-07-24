import RigShowroom from './RigShowroom'
import './ServiciosDiagram.css'

// Conectores en ángulo recto (estilo organigrama): fila central va directo,
// filas de arriba/abajo bajan/suben por una "columna" antes de entrar al hub.
// Coordenadas calculadas para viewBox 0 0 1100 520, igual a las dimensiones reales
// del diagrama (grid-template-columns: 1fr 220px 1fr, 3 filas iguales) para que
// coincidan exactamente con el borde de cada tarjeta sin importar el ancho de pantalla.
const PATHS_LEFT = [
  'M400,87 H430 V260 H455',
  'M400,260 H455',
  'M400,433 H430 V260 H455',
]
const PATHS_RIGHT = [
  'M700,87 H670 V260 H645',
  'M700,260 H645',
  'M700,433 H670 V260 H645',
]
const DOTS = [87, 260, 433]

export default function ServiciosDiagram({ items, onSelect }) {
  const left = items.filter((_, i) => i % 2 === 0)
  const right = items.filter((_, i) => i % 2 === 1)

  const renderNode = (n) => (
    <button key={n.id} className="sd-node" style={{ '--sd-accent': n.accent }} onClick={() => onSelect(n)}>
      <img className="sd-node-img" src={n.detalle?.img} alt="" />
      <span className="sd-node-body">
        <span className="sd-node-title">{n.titulo}</span>
        <span className="sd-node-desc">{n.resumen}</span>
      </span>
    </button>
  )

  return (
    <div className="sd-wrap reveal">
      <div className="sd-diagram">
        <svg className="sd-svg" viewBox="0 0 1100 520" preserveAspectRatio="none" aria-hidden="true">
          {PATHS_LEFT.map((d, i) => <path key={`l${i}`} d={d} className="sd-svg-path" />)}
          {PATHS_RIGHT.map((d, i) => <path key={`r${i}`} d={d} className="sd-svg-path" />)}
          {DOTS.map((y, i) => <circle key={`ld${i}`} cx={400} cy={y} r={5} className="sd-svg-dot" />)}
          {DOTS.map((y, i) => <circle key={`rd${i}`} cx={700} cy={y} r={5} className="sd-svg-dot" />)}
        </svg>

        <div className="sd-col sd-col-left">{left.map(renderNode)}</div>

        <div className="sd-hub-col">
          <div className="sd-hub">
            <RigShowroom />
            <div className="sd-hub-ring" />
            <div className="sd-hub-ring sd-hub-ring2" />
          </div>
        </div>

        <div className="sd-col sd-col-right">{right.map(renderNode)}</div>
      </div>
    </div>
  )
}
