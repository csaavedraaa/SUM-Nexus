import { useState } from 'react'
import './Blog.css'
import DetailPage from '../components/DetailPage'

const ARTICLES = [
  {
    tag: 'Supply Chain',
    tagColor: 'var(--cyan)',
    title: 'S&OP en la Industria Petrolera: Cómo planear el suministro cuando la demanda es impredecible',
    exc: 'La planificación de ventas y operaciones en sectores críticos enfrenta retos únicos: ventanas de tiempo estrechas, materiales con largos lead times y cero tolerancia al desabasto.',
    author: 'Equipo SUMIMSA',
    date: 'Mar 2025',
    readTime: '7 min',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&fit=crop',
    featured: true,
  },
  {
    tag: 'Digitalización',
    tagColor: 'var(--amber)',
    title: '5 indicadores clave para medir la eficiencia de tu cadena de suministro industrial',
    exc: 'OTIF, Fill Rate, DIO, Cash-to-Cash Cycle y Perfect Order Rate. Los KPIs que todo director de Supply Chain debe tener en su dashboard.',
    author: 'SUMIMSA Analytics',
    date: 'Feb 2025',
    readTime: '5 min',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
    featured: false,
  },
  {
    tag: 'Industria 4.0',
    tagColor: 'var(--green)',
    title: 'De la bodega al tablero: cómo digitalizamos el inventario Tullbox con IoT',
    exc: 'El caso real de cómo SUMIMSA implementó sensores, códigos QR y un dashboard en tiempo real para gestionar herramienta industrial en campo.',
    author: 'Equipo Tullbox',
    date: 'Ene 2025',
    readTime: '8 min',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&fit=crop',
    featured: false,
  },
]

export default function Blog() {
  const [openBlog, setOpenBlog] = useState(false)

  return (
    <section id="blog" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Conocimiento Industrial</span>
          </div>
          <h2 className="s-h2">Blog &amp;<br /><em>Contenido</em></h2>
          <p className="s-lead">
            Insights sobre Supply Chain, S&OP, digitalización industrial
            y buenas prácticas en los sectores que atendemos.
          </p>
        </div>

        <div className="blog-grid reveal d1">
          {ARTICLES.map((a, i) => (
            <div key={i} className={`blog-card${a.featured ? ' blog-featured' : ''}`}>
              <div className={`blog-img-wrap${a.featured ? ' featured' : ''}`}>
                <img src={a.img} alt={a.title} loading="lazy" className="blog-img" />
                <div className="blog-img-overlay" />
                <span className="blog-tag-float" style={{ background: a.tagColor }}>
                  {a.tag}
                </span>
              </div>
              <div className="blog-body">
                <div className={`blog-title${a.featured ? ' lg' : ''}`}>{a.title}</div>
                <p className="blog-exc">{a.exc}</p>
                <div className="blog-meta">
                  <span className="blog-author">
                    <span className="blog-avatar">👤</span>
                    {a.author}
                  </span>
                  <div className="blog-meta-right">
                    <span className="blog-read">{a.readTime}</span>
                    <span className="blog-date">{a.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas" onClick={() => setOpenBlog(true)}>
            Ver todos los artículos
          </button>
        </div>
      </div>

      <DetailPage
        isOpen={openBlog}
        onClose={() => setOpenBlog(false)}
        eyebrow="Conocimiento Industrial"
        title="Blog &amp; <em>Contenido</em>"
        lead="Insights sobre Supply Chain, S&OP, digitalización industrial y buenas prácticas en los sectores que atendemos. Conocimiento real de nuestra operación."
      >
        <img className="dp-img" src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&fit=crop" alt="Supply Chain" />

        <h3>S&OP en la Industria Petrolera</h3>
        <p>La planificación de ventas y operaciones en sectores críticos como el petrolero enfrenta retos únicos que no existen en la manufactura convencional. Las ventanas de tiempo son estrechas, los materiales tienen lead times de semanas o meses, y la tolerancia al desabasto es literalmente cero — una plataforma sin herramienta o EPP puede significar la detención de una operación millonaria.</p>
        <p>En SUMIMSA hemos construido un modelo S&OP adaptado a la realidad del mercado mexicano que integra señales de demanda del cliente, capacidad de entrega, stock de seguridad inteligente y pronósticos basados en histórico de consumo por plataforma y temporada.</p>

        <h3>Los 5 KPIs del Supply Chain Industrial</h3>
        <p><strong>1. OTIF (On Time In Full):</strong> Mide si entregaste completo y a tiempo. SUMIMSA mantiene OTIF mayor al 97% en entregas a plataforma offshore.</p>
        <p><strong>2. Fill Rate:</strong> Porcentaje de líneas de orden entregadas vs solicitadas. Meta: 98%+. Indica qué tan bien anticipas la demanda.</p>
        <p><strong>3. DIO (Days Inventory Outstanding):</strong> Días de inventario antes de convertirse en venta. El equilibrio entre disponibilidad y capital invertido.</p>
        <p><strong>4. Perfect Order Rate:</strong> Órdenes entregadas sin error, a tiempo, completas y bien documentadas. El KPI definitivo de excelencia operativa.</p>
        <p><strong>5. Cash-to-Cash Cycle:</strong> Tiempo entre que pagas a tu proveedor y cobras a tu cliente. Reducirlo mejora el flujo de caja libre.</p>

        <h3>Digitalización Industrial: El caso Tullbox</h3>
        <p>La transición de un sistema de inventario en papel a un modelo digital con sensores IoT y dashboard en tiempo real redujo el tiempo de solicitud de herramienta de 45 minutos a menos de 2 minutos, y eliminó el 100% del extravío de herramienta costosa en campo. El ROI se alcanzó en menos de 3 meses de operación.</p>

        <div className="dp-grid">
          <div className="dp-feature">
            <h4>Próximos artículos</h4>
            <p>Gestión de proveedores estratégicos, negociación en mercados volátiles y resiliencia de la cadena de suministro.</p>
          </div>
          <div className="dp-feature">
            <h4>¿Quieres colaborar?</h4>
            <p>Si eres experto en supply chain industrial y quieres escribir en nuestro blog, contáctanos en ventas@sumimsa.com.mx</p>
          </div>
        </div>
      </DetailPage>
    </section>
  )
}
