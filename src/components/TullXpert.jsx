import './TullXpert.css'

// Mismas 5 fotos reales que ya usamos en el diagrama de Proyectos —
// reordenadas en pétalos alrededor del centro, estilo tullXpert.
const PETALS = [
  { id: 'p1', pos: 'p0',   img: '/img/proyectos/top-drive.webp',          label: 'Top Drive' },
  { id: 'p2', pos: 'p72',  img: '/img/proyectos/contencion-derrames.webp', label: 'Contención de Derrames' },
  { id: 'p3', pos: 'p144', img: '/img/proyectos/preventores.webp',         label: 'Preventores' },
  { id: 'p4', pos: 'p216', img: '/img/proyectos/bombas-de-lodo.webp',      label: 'Bombas de Lodo' },
  { id: 'p5', pos: 'p288', img: '/img/proyectos/control-de-solidos.webp',  label: 'Control de Sólidos' },
]

export default function TullXpert({ hub, hubClassName = '', petals = PETALS, onSelect, activeId }) {
  return (
    <div className="tx-wrap">
      <div className="tx-radial">
        <div className={`tx-hub ${hubClassName}`.trim()}>
          {hub || (
            <>
              <span className="tx-hub-badge">
                tull<em>Xpert</em>
              </span>
              <p className="tx-hub-tagline">Formación inteligente para<br />operaciones seguras y eficientes</p>
            </>
          )}
        </div>

        {petals.map((p, i) => (
          <div key={p.id} className={`tx-petal tx-petal-${p.pos}`} style={{ '--tx-delay': `${i * 0.6}s` }}>
            <div
              className={`tx-petal-blob${activeId && p.lineaId === activeId ? ' active' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => onSelect && onSelect(p)}
              aria-label={p.label}
            >
              <img src={p.img} alt={p.label} />
            </div>
            <span className="tx-petal-label">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
