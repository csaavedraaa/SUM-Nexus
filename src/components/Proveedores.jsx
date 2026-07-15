import './Proveedores.css'

const MARCAS = [
  'american-block', 'derrick', 'gd', 'katch-kan', 'hmh', 'southwest', 'samson', 'wom',
  'snap-on', 'crosby', 'camesa', 'fluke', 'keystone', 'klein-tools', 'milwaukee', 'gearench',
  'jet-lube', 'unitec', 'austromex', 'urrea', 'williams', 'ridgid', 'alkota', 'simplex',
  'enerpac', 'ingersoll-rand', 'midwest-hose', 'gates', 'harrington', 'devilbiss', 'tsubaki', 'starrett',
  'van-houte', 'dunlop', 'oteco', 'acr', 'sherwin-williams', 'dewalt', 'gall-thomson', 'ma-oil',
]

export default function Proveedores({ label }) {
  const doubled = [...MARCAS, ...MARCAS]
  return (
    <div className="prov-wrap">
      {label && <div className="prov-label">{label}</div>}
      <div className="prov-strip">
        <div className="prov-track">
          {doubled.map((slug, i) => (
            <div key={i} className="prov-item">
              <img
                className="prov-logo"
                src={`/logos/marcas/${slug}.png`}
                alt={slug.replace(/-/g, ' ')}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
