import './Proveedores.css'

const LOGOS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stanley_Black_%26_Decker_logo.svg/320px-Stanley_Black_%26_Decker_logo.svg.png', alt: 'Stanley' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/3M_wordmark.svg/320px-3M_wordmark.svg.png', alt: '3M' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/DeWalt_Logo.svg/320px-DeWalt_Logo.svg.png', alt: 'DeWalt' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Honeywell_Logo.svg/320px-Honeywell_Logo.svg.png', alt: 'Honeywell' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Makita_Logo.svg/320px-Makita_Logo.svg.png', alt: 'Makita' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ingersoll_Rand_logo.svg/320px-Ingersoll_Rand_logo.svg.png', alt: 'Ingersoll Rand' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pemex.svg/200px-Pemex.svg.png', alt: 'PEMEX' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/CFE_logo.svg/200px-CFE_logo.svg.png', alt: 'CFE' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Graco_logo.svg/320px-Graco_logo.svg.png', alt: 'Graco' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snap-on_logo.svg/320px-Snap-on_logo.svg.png', alt: 'Snap-on' },
]

export default function Proveedores() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div className="prov-strip">
      <div className="prov-inner">
        {doubled.map((l, i) => (
          <div key={i} className="prov-item">
            <img className="prov-logo" src={l.src} alt={l.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
