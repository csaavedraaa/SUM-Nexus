import { useState } from 'react'
import CatalogoViewer from '../components/CatalogoViewer'
import './Catalogos.css'

const CATALOGOS = [
  {
    id: '01',
    titulo: 'Cables y Accesorios de Izaje',
    descripcion: 'Cables de acero, fibra y accesorios para izaje y amarre certificados.',
    accent: '#009bdb',
    icono: '🔗',
    paginas: 132,
    pdf: '/catalogos/01_CABLES_Y_ACCESORIOS.pdf',
  },
  {
    id: '02',
    titulo: 'Cabos y Accesorios Marinos',
    descripcion: 'Cabos sintéticos y naturales para aplicaciones navales y marítimas.',
    accent: '#00c4f0',
    icono: '⚓',
    paginas: null,
    pdf: '/catalogos/02_CABOS_Y_ACCESORIOS_MARINOS.pdf',
  },
  {
    id: '03',
    titulo: 'Herramienta Manual',
    descripcion: 'Herramientas de mano para mantenimiento e industria en general.',
    accent: '#f47920',
    icono: '🔧',
    paginas: null,
    pdf: '/catalogos/03_HERRAMIENTA_MANUAL.pdf',
  },
  {
    id: '04',
    titulo: 'Herramienta Eléctrica',
    descripcion: 'Equipos eléctricos para corte, perforación y acabado industrial.',
    accent: '#ffb347',
    icono: '⚡',
    paginas: null,
    pdf: '/catalogos/04_HERRAMIENTA_ELECTRICA.pdf',
  },
  {
    id: '05',
    titulo: 'Herramienta Hidráulica',
    descripcion: 'Sistemas hidráulicos de alta presión para aplicaciones industriales.',
    accent: '#009bdb',
    icono: '💧',
    paginas: null,
    pdf: '/catalogos/05_HERRAMIENTA_HIDRAULICA.pdf',
  },
  {
    id: '06',
    titulo: 'Herramienta Neumática',
    descripcion: 'Herramientas de aire comprimido para líneas de producción.',
    accent: '#00c4f0',
    icono: '🌬️',
    paginas: null,
    pdf: '/catalogos/06_HERRAMIENTA_NEUMATICA.pdf',
  },
  {
    id: '07',
    titulo: 'Herramienta de Corte y Desbaste',
    descripcion: 'Discos, brocas y abrasivos para metalurgia y construcción.',
    accent: '#f47920',
    icono: '⚙️',
    paginas: null,
    pdf: '/catalogos/07_CORTE_Y_DESBASTE.pdf',
  },
  {
    id: '08',
    titulo: 'Industria Petrolera',
    descripcion: 'Equipamiento especializado para exploración y producción.',
    accent: '#f47920',
    icono: '🛢️',
    paginas: null,
    pdf: '/catalogos/08_INDUSTRIA_PETROLERA.pdf',
  },
  {
    id: '09',
    titulo: 'Herramientas de Medición',
    descripcion: 'Instrumentos de precisión para control de calidad y metrología.',
    accent: '#009bdb',
    icono: '📐',
    paginas: null,
    pdf: '/catalogos/09_HERRAMIENTA_DE_MEDICION.pdf',
  },
  {
    id: '10',
    titulo: 'Contraderrames y Tapetes',
    descripcion: 'Sistemas de contención y materiales absorbentes para derrames.',
    accent: '#00c4f0',
    icono: '🟢',
    paginas: null,
    pdf: '/catalogos/10_CONTRADERRAMES_Y_TAPATES.pdf',
  },
  {
    id: '11',
    titulo: 'Equipo para Pintar',
    descripcion: 'Equipos de aplicación, atomización y acabados industriales.',
    accent: '#ffb347',
    icono: '🎨',
    paginas: null,
    pdf: '/catalogos/11_EQUIPO_PARA_PINTAR.pdf',
  },
  {
    id: '12',
    titulo: 'Sistema de Limpieza',
    descripcion: 'Equipos y productos para limpieza industrial y mantenimiento.',
    accent: '#009bdb',
    icono: '🧹',
    paginas: null,
    pdf: '/catalogos/12_SISTEMAS_DE_LIMPIEZA.pdf',
  },
]

export default function Catalogos() {
  const [catalogo, setCatalogo] = useState(null)

  return (
    <section id="catalogs" className="section catalogos-section">
      <div className="container">

        <div className="reveal catalogos-header">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Biblioteca Digital</span>
          </div>
          <h2 className="s-h2">Nuestro<br /><em>Catálogo</em></h2>
          <p className="catalogos-subtitle">
            Explora nuestra línea completa de productos por familia. Selecciona cualquier
            catálogo para visualizarlo en formato interactivo.
          </p>
        </div>

        <div className="catalogos-grid reveal d1">
          {CATALOGOS.map((cat, i) => (
            <button
              key={cat.id}
              className="libro-card"
              onClick={() => setCatalogo(cat)}
              style={{ '--card-accent': cat.accent, animationDelay: `${i * 0.05}s` }}
              aria-label={`Abrir catálogo ${cat.titulo}`}
            >
              <div className="libro-lomo">
                <span className="libro-lomo-num">{cat.id}</span>
                <span className="libro-lomo-title">{cat.titulo}</span>
              </div>

              <div className="libro-portada">
                <div className="libro-portada-top">
                  <span className="libro-num-badge">{cat.id}</span>
                  {cat.paginas && (
                    <span className="libro-paginas">{cat.paginas} págs.</span>
                  )}
                </div>
                <div className="libro-icono">{cat.icono}</div>
                <div className="libro-info">
                  <h3 className="libro-titulo">{cat.titulo}</h3>
                  <p className="libro-desc">{cat.descripcion}</p>
                </div>
                <div className="libro-cta">
                  <span>Ver catálogo</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="catalogos-footer reveal d2">
          <div className="catalogos-footer-item">
            <span className="catalogos-footer-icon">📁</span>
            <span>{CATALOGOS.length} familias de productos</span>
          </div>
          <div className="catalogos-footer-sep" />
          <div className="catalogos-footer-item">
            <span className="catalogos-footer-icon">🔄</span>
            <span>Actualización continua</span>
          </div>
          <div className="catalogos-footer-sep" />
          <div className="catalogos-footer-item">
            <span className="catalogos-footer-icon">📱</span>
            <span>Compatible con móvil y escritorio</span>
          </div>
        </div>

      </div>

      {catalogo && (
        <CatalogoViewer
          catalogo={catalogo}
          onClose={() => setCatalogo(null)}
        />
      )}
    </section>
  )
}
