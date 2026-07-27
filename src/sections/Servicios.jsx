import { useState, useEffect } from 'react'
import ServiciosDiagram from '../components/ServiciosDiagram'
import ServicioShowroom from '../components/ServicioShowroom'
import Esquemas from './Esquemas'
import './Servicios.css'

const SERVICIOS = [
  {
    id: '01',
    titulo: 'Control de Sólidos',
    subtitulo: 'Inspección, venta y refacciones',
    resumen: 'Sistema con alta capacidad de procesamiento. Optimización del proceso de perforación para mayores tasas y reducción de tiempos no productivos (NPT).',
    accent: '#009bdb',
    detalle: {
      intro: 'Inspección, venta y refacciones para control de Sólidos. Todos los servicios están acompañados por un reporte técnico en el cual se determinan las condiciones de los productos, conclusiones, recomendaciones y referencias técnicas.',
      beneficios: [
        'Mayores tasas de perforación',
        'Reducción de los tiempos no productivos (NPT)',
        'Reducción de la pérdida de fluido de perforación',
        'Reducción del volumen de desechos generados',
        'Menos desgaste en las bombas y las herramientas de pozo',
        'Soporte sin precedentes durante todo el día',
        'Optimización de la malla / shaker',
        'Reporte de inspección complementario',
        'Reporte diario del rastreo del fluido de perforación',
        'Técnicos de servicio in situ bien capacitados',
      ],
      img: '/img/servicios/control-de-solidos.webp',
    }
  },
  {
    id: '02',
    titulo: 'Medición de Fuerza G',
    subtitulo: 'Equipos de control de sólidos',
    resumen: 'Medición de eficiencia mecánica en vibradores mediante acelerómetro. Detecta fallas en el factor de vibración y optimiza el rendimiento de los equipos.',
    accent: '#00c4f0',
    detalle: {
      intro: 'La Eficiencia Mecánica en los equipos de control de sólidos (vibradores) se realiza mediante las lecturas de aceleración de los mismos utilizando un acelerómetro como equipo de medición de fuerza "G", con la finalidad de detectar de manera inmediata posibles fallas en el factor de vibración de los vibra motores.',
      beneficios: [
        'Detección inmediata de posibles fallas en vibro motores',
        'Medición en tres o dos direcciones (Triaxial o Biaxial)',
        'Reporte técnico con conclusiones y recomendaciones',
        'Optimización del rendimiento de los equipos',
        'Correcciones preventivas antes de fallas mayores',
      ],
      img: '/img/servicios/fuerza-g.webp',
    }
  },
  {
    id: '03',
    titulo: 'Inspección para Elementos de Izaje',
    subtitulo: 'Visual, electromagnética y lubricación',
    resumen: 'Inspección visual y electromagnética de cables de acero. Servicio de limpieza y lubricación en sitio. Capacidades hasta 3 7/8" (96mm).',
    accent: '#f47920',
    detalle: {
      intro: 'Un cable de acero es un producto con una vida útil limitada. SUMIMSA ofrece inspección completa para determinar la integridad, necesidades de remplazo y detección oportuna de condiciones inseguras.',
      beneficios: [
        'Conocer la integridad mecánica de los productos',
        'Determinar anticipadamente las necesidades de remplazo',
        'Detección de alambres rotos, deformaciones y desgaste',
        'Inspección electromagnética del estado interno del cable',
        'Reporte cuantitativo y cualitativo con software especializado',
        'Medición de pérdida de metal en área transversal (PMAT)',
        'Servicio de limpieza y lubricación en sitio',
        'Capacidades máximas de hasta 3 7/8" (96mm)',
        'Preservar y alargar la vida útil de los productos',
      ],
      img: '/img/servicios/inspeccion-izaje.webp',
    }
  },
  {
    id: '04',
    titulo: 'Grabado Láser y RFID',
    subtitulo: 'Trazabilidad de herramientas',
    resumen: 'Grabado láser YAG de estado sólido para metales y materiales sintéticos. Códigos 2D Datamatrix para trazabilidad "cuna a tumba".',
    accent: '#0d1e4a',
    detalle: {
      intro: 'El servicio de grabado de herramientas e instrumentos de alta precisión se realiza con equipos de última tecnología, predominantemente láser YAG de estado sólido (Itrio o Vanadio), ideal para grandes cantidades de herramientas metálicas, así como de material sintético.',
      beneficios: [
        'Grabado en cualquier tipo de material',
        'Especialmente efectivo en metales y plásticos con láser YAG',
        'Incorporación de códigos 2D Datamatrix',
        'Trazabilidad "cuna a tumba" (cradle to grave)',
        'Resultados de alta calidad y durabilidad',
        'Tecnología de grabado por rayo láser de última generación',
      ],
      img: '/img/servicios/grabado-laser.webp',
    }
  },
  {
    id: '05',
    titulo: 'Chip de Trazabilidad',
    subtitulo: 'NFC / QR para activos industriales',
    resumen: 'Un chip por cada artículo. Consulta certificados, órdenes de compra, inspecciones, fotografías y auditorías desde cualquier dispositivo NFC o lector QR.',
    accent: '#009bdb',
    detalle: {
      intro: 'Se puede asignar un chip por cada artículo y producto en particular: cables de acero, estrobos, eslingas, cadenas, bridas de izaje, llaves manuales, llaves especiales, etc.',
      beneficios: [
        'Consulta de certificados de calidad',
        'Órdenes de compra y de producción',
        'Registros de procesos y movimientos',
        'Fotografías, auditorías y reportes',
        'Inspecciones históricas',
        'Altas y bajas de almacenes',
        'Cambios de ubicación y controles de inventario',
        'Compatible con dispositivos NFC y lectores QR',
        'Información modificable en todo momento',
      ],
      img: '/img/servicios/chip-trazabilidad.webp',
    }
  },
  {
    id: '06',
    titulo: 'Taller de Estrobos y Eslingas',
    subtitulo: 'Fabricación y certificación ASME B30.9',
    resumen: 'Fabricadores de estrobos y eslingas de cable de acero inoxidable hasta 1 3/4". Certificación ASME B30.9-2021. Trazabilidad completa con placa de identificación.',
    accent: '#ffb347',
    detalle: {
      intro: 'Somos fabricantes de estrobos y eslingas de cable de acero inoxidable de hasta 1 3/4 pulgadas de diámetro, con uno o dos lazos o bucles cerrados mediante un casquillo de acero prensado. Certificados bajo norma ASME B30.9-2021.',
      beneficios: [
        'Fabricación estándar de estrobos del 1/4" al 1 3/4"',
        'Certificación ASME B30.9-2021',
        'Trazabilidad completa: orden de compra → producción → pruebas',
        'Placa de identificación en cada estrobo',
        'Rozaderas Heavy Duty en terminaciones con accesorios',
        'Master Link para estrobos de 2, 3 o 4 brazos',
        'Recomendación de certificación anual',
        'Criterios de rechazo documentados',
      ],
      img: '/img/servicios/estrobos-eslingas.webp',
    }
  },
]

export default function Servicios() {
  const [activo, setActivo] = useState(null)
  const [displayActivo, setDisplayActivo] = useState(null)

  // Conserva el último servicio mostrado mientras cierra, para que la
  // transición de salida anime sobre contenido real en vez de desaparecer de golpe.
  useEffect(() => {
    if (activo) setDisplayActivo(activo)
  }, [activo])

  const scrollContacto = () => {
    const el = document.querySelector('#contacto')
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
  }

  return (
    <section id="servicios" className="section servicios-section">
      <div className="container">

        {/* Header */}
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Servicios Especializados</span>
          </div>
          <h2 className="s-h2"><em>Soluciones</em></h2>
          <p className="servicios-lead">
            Todos nuestros servicios están acompañados por un reporte técnico en el cual se
            determinan las condiciones de los productos, conclusiones, recomendaciones y
            referencias técnicas.
          </p>
        </div>

        {/* Diagrama interactivo — cada nodo abre el detalle del servicio real */}
        <ServiciosDiagram items={SERVICIOS} onSelect={setActivo} />
      </div>

      {/* Esquemas de comercialización — cierra Servicios antes del CTA final */}
      <Esquemas />

      {/* CTA global */}
      <div className="servicios-cta-band">
        <div className="container servicios-cta reveal">
          <div className="servicios-cta-text">
            <span>¿Necesitas un servicio a la medida?</span>
            <span className="servicios-cta-sub">Nuestro equipo técnico te asesora sin costo.</span>
          </div>
          <button className="btn-main" onClick={scrollContacto}>
            Contactar un especialista →
          </button>
        </div>
      </div>

      {/* Showroom del servicio */}
      <ServicioShowroom
        servicio={activo || displayActivo}
        isOpen={!!activo}
        onClose={() => setActivo(null)}
        onCotizar={() => { setActivo(null); scrollContacto() }}
      />
    </section>
  )
}
