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
    detalle: {
      lead: 'La planificación de ventas y operaciones en sectores críticos como el petrolero enfrenta retos únicos que no existen en la manufactura convencional.',
      body: (
        <>
          <p>Las ventanas de tiempo son estrechas, los materiales tienen lead times de semanas o meses, y la tolerancia al desabasto es literalmente cero — una plataforma sin herramienta o EPP puede significar la detención de una operación millonaria.</p>
          <p>En SUMIMSA hemos construido un modelo S&OP adaptado a la realidad del mercado mexicano que integra señales de demanda del cliente, capacidad de entrega, stock de seguridad inteligente y pronósticos basados en histórico de consumo por plataforma y temporada.</p>
          <h3>¿Por qué falla el S&OP tradicional en Oil & Gas?</h3>
          <p>Los modelos S&OP diseñados para manufactura asumen demanda relativamente estable y lead times predecibles. En la industria petrolera, ambos supuestos se rompen: la demanda fluctúa con el precio del crudo, las paradas de mantenimiento no siguen calendario, y los proveedores globales imponen mínimos de compra altos con entregas a 8-12 semanas.</p>
          <h3>Nuestro enfoque: S&OP por horizonte</h3>
          <p>Dividimos el ciclo en tres horizontes: operacional (0-4 semanas), táctico (1-3 meses) y estratégico (3-12 meses). Cada horizonte tiene su propia rutina de revisión, sus KPIs y sus palancas de ajuste. El resultado: un OTIF mayor al 97% en entregas a plataforma offshore.</p>
          <div className="dp-grid">
            <div className="dp-feature"><h4>Stock de Seguridad Dinámico</h4><p>Calculamos el stock mínimo en función de variabilidad de demanda y lead time real, no con fórmulas fijas.</p></div>
            <div className="dp-feature"><h4>Señales Tempranas</h4><p>Integramos órdenes de mantenimiento programado de nuestros clientes como insumo del plan de demanda.</p></div>
            <div className="dp-feature"><h4>Multi-ubicación</h4><p>Balanceamos inventario entre nuestras 7 plazas para minimizar quiebres y reducir transferencias de emergencia.</p></div>
            <div className="dp-feature"><h4>Revisión Semanal</h4><p>Un comité de supply chain revisa excepciones cada lunes. Las decisiones se toman en menos de 48 horas.</p></div>
          </div>
        </>
      ),
    },
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
    detalle: {
      lead: 'OTIF, Fill Rate, DIO, Cash-to-Cash Cycle y Perfect Order Rate. Los KPIs que todo director de Supply Chain debe tener en su dashboard.',
      body: (
        <>
          <p>Medir sin claridad es ruido. Estos cinco indicadores te dan una foto precisa de la salud de tu cadena de suministro y te permiten actuar sobre las causas raíz, no los síntomas.</p>
          <h3>Los 5 KPIs del Supply Chain Industrial</h3>
          <p><strong>1. OTIF (On Time In Full):</strong> Mide si entregaste completo y a tiempo. SUMIMSA mantiene OTIF mayor al 97% en entregas a plataforma offshore.</p>
          <p><strong>2. Fill Rate:</strong> Porcentaje de líneas de orden entregadas vs solicitadas. Meta: 98%+. Indica qué tan bien anticipas la demanda.</p>
          <p><strong>3. DIO (Days Inventory Outstanding):</strong> Días de inventario antes de convertirse en venta. El equilibrio entre disponibilidad y capital invertido.</p>
          <p><strong>4. Perfect Order Rate:</strong> Órdenes entregadas sin error, a tiempo, completas y bien documentadas. El KPI definitivo de excelencia operativa.</p>
          <p><strong>5. Cash-to-Cash Cycle:</strong> Tiempo entre que pagas a tu proveedor y cobras a tu cliente. Reducirlo mejora el flujo de caja libre.</p>
          <h3>¿Cómo medirlos en la práctica?</h3>
          <p>El error más común es calcularlos manualmente en Excel una vez al mes. Para que sean accionables, necesitas datos en tiempo real o al menos semanales, y una definición consensuada de qué cuenta como "a tiempo" o "completo" en tu operación específica.</p>
          <div className="dp-grid">
            <div className="dp-feature"><h4>Frecuencia recomendada</h4><p>OTIF y Fill Rate: semanal. DIO y Cash-to-Cash: mensual. Perfect Order Rate: por ciclo de entrega.</p></div>
            <div className="dp-feature"><h4>Punto de partida</h4><p>Si aún no mides ninguno, empieza por OTIF. Es el más fácil de entender y el que más impacta la relación con el cliente.</p></div>
          </div>
        </>
      ),
    },
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
    detalle: {
      lead: 'Cómo SUMIMSA implementó sensores, códigos QR y un dashboard en tiempo real para eliminar el extravío de herramienta industrial en campo.',
      body: (
        <>
          <p>El problema era claro: en una planta con más de 200 técnicos, el tiempo promedio para localizar una herramienta era de 45 minutos. El extravío anual de herramienta costosa superaba los $180,000 MXN. Y el inventario en papel se actualizaba... cuando alguien se acordaba.</p>
          <h3>La solución: Tullbox con IoT</h3>
          <p>Implementamos un contenedor inteligente (Tullbox) con lectores QR en cada cajón, sensores de presencia en las herramientas de mayor valor, y una app móvil para registro de salida y entrada. El dashboard en tiempo real muestra disponibilidad, ubicación y historial por herramienta.</p>
          <h3>Resultados a los 3 meses</h3>
          <p>El tiempo de solicitud se redujo de 45 minutos a menos de 2 minutos. El extravío de herramienta bajó a cero. El ROI del proyecto se alcanzó en 11 semanas gracias al ahorro en reposición y al aumento de productividad del equipo técnico.</p>
          <div className="dp-grid">
            <div className="dp-feature"><h4>Sin inversión inicial</h4><p>El modelo Tullbox es por suscripción: el cliente paga una cuota mensual que incluye hardware, software y soporte.</p></div>
            <div className="dp-feature"><h4>Integración ERP</h4><p>El sistema puede conectarse al ERP del cliente vía API para sincronizar órdenes de trabajo y consumos automáticamente.</p></div>
            <div className="dp-feature"><h4>Calibración incluida</h4><p>Toda herramienta de medición entregada dentro del Tullbox tiene trazabilidad de calibración incluida.</p></div>
            <div className="dp-feature"><h4>ROI en &lt;3 meses</h4><p>En el caso documentado, el retorno de inversión se alcanzó en 11 semanas de operación.</p></div>
          </div>
        </>
      ),
    },
  },
]

export default function Blog() {
  const [openArticle, setOpenArticle] = useState(null)

  return (
    <section id="blog" className="section blog-section">
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
          {ARTICLES.map((a, i) => a.featured ? (
            <div key={i} className="blog-hero" onClick={() => setOpenArticle(a)}>
              <img src={a.img} alt={a.title} loading="lazy" className="blog-hero-img" />
              <div className="blog-hero-scrim" />
              <span className="blog-tag-float" style={{ background: a.tagColor }}>{a.tag}</span>
              <div className="blog-hero-body">
                <div className="blog-hero-title">{a.title}</div>
                <p className="blog-hero-exc">{a.exc}</p>
                <div className="blog-hero-meta">
                  <span className="blog-avatar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </span>
                  <span><strong>{a.author}</strong> · {a.readTime} de lectura</span>
                  <span className="blog-hero-date">{a.date}</span>
                </div>
                <span className="blog-side-link" style={{ marginTop: 16 }}>Leer más <em>→</em></span>
              </div>
            </div>
          ) : (
            <div key={i} className="blog-side-card" onClick={() => setOpenArticle(a)}>
              <img src={a.img} alt={a.title} loading="lazy" className="blog-side-img" />
              <div className="blog-side-body">
                <span className="blog-side-tag" style={{ color: a.tagColor }}>{a.tag}</span>
                <div className="blog-side-title">{a.title}</div>
                <span className="blog-side-link">Leer más <em>→</em></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openArticle && (
        <DetailPage
          isOpen={!!openArticle}
          onClose={() => setOpenArticle(null)}
          eyebrow={openArticle.tag}
          title={openArticle.title}
          lead={openArticle.detalle.lead}
        >
          <img className="dp-img" src={openArticle.img} alt={openArticle.title} />
          <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: 32 }}>
            Por <strong>{openArticle.author}</strong> · {openArticle.readTime} de lectura · {openArticle.date}
          </p>
          {openArticle.detalle.body}
        </DetailPage>
      )}
    </section>
  )
}
