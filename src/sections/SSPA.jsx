import { useState } from 'react'
import DetailPage from '../components/DetailPage'

const PTS = [
  ['01', 'Todos los incidentes se pueden prevenir', 'Garantizamos que todas las operaciones se ejecuten con la máxima seguridad, salud y protección ambiental dentro y fuera de la empresa.'],
  ['02', 'La SSPA es responsabilidad de todos', 'Integramos en cada tarea todos los aspectos de seguridad, salud y protección ambiental en los procesos continuos de todos los trabajadores.'],
  ['03', 'Mejores prácticas y tecnología ambiental', 'Aplicamos las mejores prácticas de seguridad y tecnología ambiental disponible para beneficio de los trabajadores y la comunidad.'],
  ['04', 'Cumplimiento legal garantizado', 'Cumplimos con los requisitos legales y normas complementarias aplicables a nuestra organización y partes interesadas.'],
  ['05', 'Cero contaminación', 'Prevenimos la contaminación y contribuimos al desarrollo sostenible buscando el equilibrio con el medio ambiente en cada operación.'],
]
const METRICS = [['Seguridad Industrial', '100%'], ['Salud Ocupacional', '100%'], ['Protección Ambiental', '100%']]
const ICONS = [['🦺', 'Seguridad Industrial'], ['🏥', 'Salud en el Trabajo'], ['🌿', 'Protección Ambiental'], ['📋', 'Mejora Continua']]

export default function SSPA() {
  const [openSSPA, setOpenSSPA] = useState(false)

  return (
    <section id="sspa" className="section">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">
            <div className="eyebrow-line" style={{ background: 'var(--green)' }} />
            <span className="eyebrow-text" style={{ color: 'var(--green)' }}>Política SSPA</span>
          </div>
          <h2 className="s-h2">Seguridad.<br /><em style={{ color: 'var(--green)' }}>Sin excepciones.</em></h2>
        </div>
        <div className="reveal d1" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48, alignItems: 'start', marginTop: 52 }}>
          {/* Sidebar */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', padding: 32, position: 'sticky', top: 88 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid var(--border)' }}>
              Nivel de cumplimiento
            </div>
            {METRICS.map(([label, pct]) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: '.78rem', color: 'var(--muted)' }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--cyan)' }}>{pct}</span>
                </div>
                <div style={{ height: 3, background: 'var(--border)', borderRadius: 2 }}>
                  <div style={{ height: '100%', background: 'var(--cyan)', borderRadius: 2, width: '100%' }} />
                </div>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginTop: 20 }}>
              {ICONS.map(([ic, lbl]) => (
                <div key={lbl} style={{ border: '1px solid var(--border)', padding: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '.95rem', flexShrink: 0 }}>{ic}</span>
                  <span style={{ fontSize: '.7rem', color: 'var(--muted)', lineHeight: 1.3 }}>{lbl}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)' }}>
            {PTS.map(([n, title, desc]) => (
              <div key={n} style={{ background: '#fff', padding: '26px 30px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--border)', lineHeight: 1, flexShrink: 0, minWidth: 40 }}>{n}</div>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: .5, color: 'var(--navy)', marginBottom: 5 }}>{title}</h5>
                  <p style={{ fontSize: '.81rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ver-mas-wrap reveal d2">
          <button className="btn-ver-mas" onClick={() => setOpenSSPA(true)}>Ver política SSPA completa</button>
        </div>
      </div>

      <DetailPage isOpen={openSSPA} onClose={() => setOpenSSPA(false)}
        eyebrow="Política SSPA" title="Seguridad. <em>Sin Excepciones.</em>"
        lead="SUMIMSA está comprometida con la seguridad industrial, salud en el trabajo y protección ambiental en todas sus operaciones.">
        <h3>Política General</h3>
        <p>SUMIMSA es una empresa dedicada al suministro de herramienta especializada y servicios integrales, comprometida con la seguridad industrial, salud en el trabajo y protección ambiental, la cual se distingue por el esfuerzo y responsabilidad de todos sus trabajadores en el cumplimiento de los principios estipulados para la administración de riesgos y la mejora continua en el servicio.</p>
        <h3>Compromisos</h3>
        <div className="dp-grid">
          <div className="dp-feature"><h4>Prevención total</h4><p>Todos los incidentes y lesiones se pueden prevenir. Cero accidentes es nuestro estándar operativo.</p></div>
          <div className="dp-feature"><h4>Responsabilidad compartida</h4><p>La SSPA es responsabilidad de todos los colaboradores, sin excepción de nivel o área.</p></div>
          <div className="dp-feature"><h4>Mejores prácticas</h4><p>Aplicamos las mejores prácticas de seguridad y la mejor tecnología ambiental disponible.</p></div>
          <div className="dp-feature"><h4>Cumplimiento legal</h4><p>Cumplimos con todos los requisitos legales y normas complementarias aplicables.</p></div>
          <div className="dp-feature"><h4>Cero contaminación</h4><p>Prevenimos la contaminación y contribuimos al desarrollo sostenible en cada operación.</p></div>
          <div className="dp-feature"><h4>Mejora continua</h4><p>Revisamos y mejoramos continuamente nuestros procesos SSPA para mantenernos en la vanguardia.</p></div>
        </div>
      </DetailPage>
    </section>
  )
}