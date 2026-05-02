import { useState } from 'react'
import './Sectores.css'
import DetailPage from '../components/DetailPage'

const SECTORS = [
  {
    num: '01', icon: '🛢️',
    title: 'Sector Petrolero',
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&q=80&fit=crop',
    text: 'La industria petrolera es un pilar de la economía mexicana. SUMIMSA suministra soluciones integrales a empresas de exploración, producción y refinación de petróleo y gas.',
    detail: {
      lead: 'Soluciones integrales para exploración, producción y refinación de petróleo y gas en México. Atendemos plataformas offshore, refinerías y plantas de proceso.',
      img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=1200&q=80&fit=crop',
      content: [
        { h: 'Herramienta Especializada', p: 'Suministramos herramienta y equipos certificados para ambientes ATEX y zonas clasificadas. Cumplimos con normas NOM-STPS y estándares internacionales API para la industria del petróleo y gas.' },
        { h: 'Suministro Offshore', p: 'Logística especializada para plataformas marinas en el Golfo de México. Coordinamos entregas desde nuestras bases en Tampico, Ciudad del Carmen y Paraíso con tiempos de respuesta menores a 24 horas.' },
        { h: 'EPP Certificado', p: 'Equipo de Protección Personal homologado para ambientes de alto riesgo en upstream, midstream y downstream. Marcas líderes como MSA, Honeywell, 3M y DuPont.' },
      ],
      features: [
        { h: 'Plataformas Offshore', p: 'Suministro a plataformas en el Golfo desde 3 bases logísticas.' },
        { h: 'Refinerías PEMEX', p: 'Proveedor calificado para las principales refinerías del país.' },
        { h: 'Exploración & Producción', p: 'Herramienta y consumibles para perforación y completación.' },
        { h: 'Mantenimiento Industrial', p: 'Programas de suministro continuo para mantenimiento preventivo.' },
      ],
    },
  },
  {
    num: '02', icon: '⚓',
    title: 'Sector Naval',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    text: 'Con 7 ubicaciones estratégicas cubrimos la red de puertos mexicanos. Desde transporte de contenedores hasta tráfico de hidrocarburos y productos químicos.',
    detail: {
      lead: 'Cubrimos los principales puertos del Golfo de México con soluciones de suministro para buques, remolcadores, plataformas y terminales portuarias.',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop',
      content: [
        { h: 'Suministro Portuario', p: 'Atendemos las operaciones de buques mercantes, tanqueros y barcos de servicio en los principales puertos del Golfo: Tampico, Veracruz, Ciudad del Carmen y Paraíso.' },
        { h: 'Herramienta de Cubierta', p: 'Equipamiento especializado para operaciones en cubierta: cabrestantes, polipastos, estrobos, grilletes certificados DNV y herramienta de izaje para ambiente marino.' },
        { h: 'Safety & Rescue', p: 'Equipos de salvamento, chalecos SOLAS, trajes de inmersión y balsas salvavidas certificados por las autoridades marítimas mexicanas (SEMAR, SCT).' },
      ],
      features: [
        { h: 'Tampico & Altamira', p: 'Puerto del Golfo Norte: comercio exterior y petroquímica.' },
        { h: 'Veracruz', p: 'Puerto más activo del Golfo, atención a buques y terminales.' },
        { h: 'Cd. del Carmen & Paraíso', p: 'Hub offshore sur del Golfo. Plataformas y buques de apoyo.' },
        { h: 'Certificaciones SOLAS', p: 'EPP y equipos de rescate con certificaciones internacionales.' },
      ],
    },
  },
  {
    num: '03', icon: '⚙️',
    title: 'Metal-Mecánico',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80&fit=crop',
    text: 'Servicio completo en fabricación, ingeniería, diseño, mantenimiento y logística industrial. Priorizamos condiciones de trabajo seguras y saludables.',
    detail: {
      lead: 'Soluciones completas para la industria de manufactura y transformación: herramienta, maquinaria, consumibles y EPP para líneas de producción, talleres y mantenimiento.',
      img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80&fit=crop',
      content: [
        { h: 'Herramienta de Precisión', p: 'Distribuidores directos de Stanley, DeWalt, Snap-on, Starrett y otras marcas líderes. Herramienta de corte, medición, torque y fijación para procesos de manufactura de alta exigencia.' },
        { h: 'Consumibles Industriales', p: 'Abrasivos, lubricantes, soldaduras, químicos industriales y materiales de sellado. Programa de suministro continuo con entregas JIT (Just-in-Time) a línea de producción.' },
        { h: 'Programa Tullbox In Situ', p: 'Contenedor de herramienta instalado en tu planta con inventario administrado por SUMIMSA. Control digital de consumos, calibración garantizada y sin inversión inicial.' },
      ],
      features: [
        { h: 'Automotriz', p: 'Suministro a plantas de estampado, ensamble y pintura.' },
        { h: 'Fabricación Metálica', p: 'Talleres de corte, doblez, soldadura y acabados.' },
        { h: 'Mantenimiento', p: 'Programas MRO (Maintenance, Repair & Operations).' },
        { h: 'Calibración', p: 'Herramienta entregada dentro de especificaciones garantizadas.' },
      ],
    },
  },
  {
    num: '04', icon: '⚡',
    title: 'Sector Energético',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&fit=crop',
    text: 'Solar, eólica, hidroeléctrica y geotérmica. Expertos en inspección y pruebas especiales para la eficiencia operativa y modernización energética.',
    detail: {
      lead: 'SUMIMSA acompaña la transición energética de México con herramientas, equipos y EPP especializados para proyectos de energía renovable y convencional.',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&fit=crop',
      content: [
        { h: 'Energía Eólica', p: 'Herramienta especializada para instalación, operación y mantenimiento de aerogeneradores: llaves de torque certificadas, herramienta de izaje, EPP para trabajos en altura y equipos de rescate.' },
        { h: 'Energía Solar', p: 'Equipamiento para instalación de paneles fotovoltaicos, sistemas de almacenamiento y subestaciones. Herramienta eléctrica certificada y EPP para sistemas de alta tensión.' },
        { h: 'Hidroeléctrica & Geotérmica', p: 'Suministro de herramienta industrial, consumibles y EPP para plantas de generación hidroeléctrica y geotérmica en las zonas de mayor potencial de México.' },
      ],
      features: [
        { h: 'Parques Eólicos', p: 'Norte y sureste de México: Tamaulipas, Oaxaca, Yucatán.' },
        { h: 'Plantas Solares', p: 'Desierto de Sonora, Chihuahua y Baja California.' },
        { h: 'CFE & Privados', p: 'Atendemos generadores privados y proyectos de la CFE.' },
        { h: 'Trabajo en Altura', p: 'EPP certificado EN 361 para técnicos de aerogeneradores.' },
      ],
    },
  },
]

export default function Sectores() {
  const [openSector, setOpenSector] = useState(null)
  const sector = openSector !== null ? SECTORS[openSector] : null

  return (
    <section id="sectores" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Sectores que atendemos</span></div>
          <h2 className="s-h2">Líderes en<br /><em>cuatro industrias</em></h2>
          <p className="s-lead">Personal altamente calificado y el respaldo de fabricantes líderes para ofrecer servicio completo en cada sector industrial de México.</p>
        </div>
        <div className="sec-grid reveal d1">
          {SECTORS.map((s, i) => (
            <div key={s.num} className="sec-card" onClick={() => setOpenSector(i)} style={{ cursor: 'pointer' }}>
              <div className="sec-top-bar" />
              <img className="sec-img" src={s.img} alt={s.title} loading="lazy" />
              <div className="sec-img-overlay" />
              <div className="sec-body">
                <div className="sec-num">{s.num} —</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="sec-ver-mas">Ver más →</span>
              </div>
              <span className="sec-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail overlay — one per sector */}
      {sector && (
        <DetailPage
          isOpen={openSector !== null}
          onClose={() => setOpenSector(null)}
          eyebrow={`Sector — ${sector.title}`}
          title={`<em>${sector.title}</em>`}
          lead={sector.detail.lead}
        >
          <img className="dp-img" src={sector.detail.img} alt={sector.title} />
          {sector.detail.content.map(({ h, p }) => (
            <div key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
          <div className="dp-grid">
            {sector.detail.features.map(({ h, p }) => (
              <div key={h} className="dp-feature">
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </DetailPage>
      )}
    </section>
  )
}
