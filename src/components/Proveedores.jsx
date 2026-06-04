import './Proveedores.css'

// Logos via CDN confiable — SVG inline para máxima compatibilidad
// Usamos logo.clearbit.com que devuelve logos de dominio oficial
const MARCAS = [
  { nombre: 'Stanley Black & Decker', dominio: 'stanleyblackanddecker.com' },
  { nombre: '3M',                     dominio: '3m.com'                    },
  { nombre: 'DeWalt',                 dominio: 'dewalt.com'                },
  { nombre: 'Honeywell',              dominio: 'honeywell.com'             },
  { nombre: 'Makita',                 dominio: 'makita.com'                },
  { nombre: 'Ingersoll Rand',         dominio: 'irco.com'                  },
  { nombre: 'Snap-on',                dominio: 'snapon.com'                },
  { nombre: 'Graco',                  dominio: 'graco.com'                 },
  { nombre: 'MSA Safety',             dominio: 'msasafety.com'             },
  { nombre: 'Bosch',                  dominio: 'bosch.com'                 },
  { nombre: 'Fluke',                  dominio: 'fluke.com'                 },
  { nombre: 'Hilti',                  dominio: 'hilti.com'                 },
]

// Texto fallback cuando la imagen no carga
function LogoItem({ nombre, dominio }) {
  const src = `https://logo.clearbit.com/${dominio}?size=120`

  return (
    <div className="prov-item" title={nombre}>
      <img
        className="prov-logo"
        src={src}
        alt={nombre}
        loading="lazy"
        onError={e => {
          // Si falla la imagen, mostrar texto con el nombre
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'block'
        }}
      />
      <span className="prov-fallback">{nombre}</span>
    </div>
  )
}

export default function Proveedores() {
  const doubled = [...MARCAS, ...MARCAS]
  return (
    <div className="prov-strip">
      <div className="prov-track">
        {doubled.map((m, i) => (
          <LogoItem key={i} nombre={m.nombre} dominio={m.dominio} />
        ))}
      </div>
    </div>
  )
}
