import { useState, useRef } from 'react'
import CatalogoViewer from '../components/CatalogoViewer'
import SectorCarousel3D from '../components/SectorCarousel3D'
import './Catalogos.css'

const CATALOGOS = [
  {
    id: '01',
    titulo: 'Cables y Accesorios de Izaje',
    descripcion: 'Cables de acero, fibra y accesorios para izaje y amarre certificados.',
    accent: '#009bdb',

    paginas: 132,
    pdf: '/catalogos/01_CABLES_Y_ACCESORIOS.pdf',
    portada: '/catalogos/covers/01_CABLES_Y_ACCESORIOS.png',
  },
  {
    id: '02',
    titulo: 'Cabos y Accesorios Marinos',
    descripcion: 'Cabos sintéticos y naturales para aplicaciones navales y marítimas.',
    accent: '#00c4f0',
    paginas: null,
    pdf: '/catalogos/02_CABOS_Y_ACCESORIOS_MARINOS.pdf',
    portada: '/catalogos/covers/02_CABOS_Y_ACCESORIOS_MARINOS.png',

  },
  {
    id: '03',
    titulo: 'Herramienta Manual',
    descripcion: 'Herramientas de mano para mantenimiento e industria en general.',
    accent: '#f47920',
    paginas: null,
    pdf: '/catalogos/03_HERRAMIENTA_MANUAL.pdf',
    portada: '/catalogos/covers/03_HERRAMIENTA_MANUAL.png',

  },
  {
    id: '04',
    titulo: 'Herramienta Eléctrica',
    descripcion: 'Equipos eléctricos para corte, perforación y acabado industrial.',
    accent: '#ffb347',
    paginas: null,
    pdf: '/catalogos/04_HERRAMIENTA_ELECTRICA.pdf',
    portada: '/catalogos/covers/04_HERRAMIENTA_ELECTRICA.png',

  },
  {
    id: '05',
    titulo: 'Herramienta Hidráulica',
    descripcion: 'Sistemas hidráulicos de alta presión para aplicaciones industriales.',
    accent: '#009bdb',
    paginas: null,
    pdf: '/catalogos/05_HERRAMIENTA_HIDRAULICA.pdf',
    portada: '/catalogos/covers/05_HERRAMIENTA_HIDRAULICA.png',

  },
  {
    id: '06',
    titulo: 'Herramienta Neumática',
    descripcion: 'Herramientas de aire comprimido para líneas de producción.',
    accent: '#00c4f0',
    paginas: null,
    pdf: '/catalogos/06_HERRAMIENTA_NEUMATICA.pdf',
    portada: '/catalogos/covers/06_HERRAMIENTA_NEUMATICA.png',

  },
  {
    id: '07',
    titulo: 'Herramienta de Corte y Desbaste',
    descripcion: 'Discos, brocas y abrasivos para metalurgia y construcción.',
    accent: '#f47920',
    paginas: null,
    pdf: '/catalogos/07_CORTE_Y_DESBASTE.pdf',
    portada: '/catalogos/covers/07_CORTE_Y_DESBASTE.png',

  },
  {
    id: '08',
    titulo: 'Industria Petrolera',
    descripcion: 'Equipamiento especializado para exploración y producción.',
    accent: '#f47920',
    paginas: null,
    pdf: '/catalogos/08_INDUSTRIA_PETROLERA.pdf',
    portada: '/catalogos/covers/08_INDUSTRIA_PETROLERA.png',

  },
  {
    id: '09',
    titulo: 'Herramientas de Medición',
    descripcion: 'Instrumentos de precisión para control de calidad y metrología.',
    accent: '#009bdb',
    paginas: null,
    pdf: '/catalogos/09_HERRAMIENTA_DE_MEDICION.pdf',
    portada: '/catalogos/covers/09_HERRAMIENTA_DE_MEDICION.png',

  },
  {
    id: '10',
    titulo: 'Contraderrames y Tapetes',
    descripcion: 'Sistemas de contención y materiales absorbentes para derrames.',
    accent: '#00c4f0',
    paginas: null,
    pdf: '/catalogos/10_CONTRADERRAMES_Y_TAPATES.pdf',
    portada: '/catalogos/covers/10_CONTRADERRAMES_Y_TAPATES.png',

  },
  {
    id: '11',
    titulo: 'Equipo para Pintar',
    descripcion: 'Equipos de aplicación, atomización y acabados industriales.',
    accent: '#ffb347',
    paginas: null,
    pdf: '/catalogos/11_EQUIPO_PARA_PINTAR.pdf',
    portada: '/catalogos/covers/11_EQUIPO_PARA_PINTAR.png',

  },
  {
    id: '12',
    titulo: 'Sistema de Limpieza',
    descripcion: 'Equipos y productos para limpieza industrial y mantenimiento.',
    accent: '#009bdb',
    paginas: null,
    pdf: '/catalogos/12_SISTEMAS_DE_LIMPIEZA.pdf',
    portada: '/catalogos/covers/12_SISTEMAS_DE_LIMPIEZA.png',

  },
]

export default function Catalogos() {
  const [catalogo, setCatalogo] = useState(null)
  const carouselRef = useRef(null)

  // Mismo shape que espera SectorCarousel3D (num/title/text/img).
  const CAROUSEL_ITEMS = CATALOGOS.map(cat => ({
    num: cat.id,
    title: cat.titulo,
    text: cat.descripcion,
    img: cat.portada,
  }))

  const handleClose = () => {
    setCatalogo(null)
    carouselRef.current?.resetCamera()
  }

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
      </div>

      <div className="reveal d1">
        <SectorCarousel3D
          ref={carouselRef}
          sectors={CAROUSEL_ITEMS}
          onSelect={(i) => setCatalogo(CATALOGOS[i])}
          camDistance={15}
          lineSpacing={6}
          cardDistanceFactor={5.8}
          bgImage="/img/fondo-catalogo.png"
          bgColor="#0f1216"
          gridColor="#1c2530"
          gridSectionColor="#a8b8c8"
        />
      </div>

      {catalogo && (
        <CatalogoViewer
          catalogo={catalogo}
          onClose={handleClose}
        />
      )}
    </section>
  )
}
