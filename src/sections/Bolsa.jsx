import { useState, useRef } from 'react'

const CITIES = [
  { name: 'Tampico',          state: 'Tamaulipas' },
  { name: 'Poza Rica',        state: 'Veracruz' },
  { name: 'Ciudad del Carmen',state: 'Campeche' },
  { name: 'Veracruz',         state: 'Veracruz' },
  { name: 'Paraíso',          state: 'Tabasco' },
  { name: 'Villahermosa',     state: 'Tabasco' },
]

const STEPS = [
  { n: '01', label: 'Recepción',  desc: 'Recibimos tu CV y datos de contacto.' },
  { n: '02', label: 'Revisión',   desc: 'Analizamos tu perfil contra las vacantes.' },
  { n: '03', label: 'Filtro',     desc: 'Entrevista inicial con Reclutamiento.' },
  { n: '04', label: 'Contacto',   desc: 'Te notificamos el resultado en 10–15 días.' },
]

const STATS = [
  { value: '5',    label: 'Plazas activas' },
  { value: '35+',  label: 'Años de trayectoria' },
  { value: '100%', label: 'Empresa mexicana' },
]

export default function Bolsa() {
  const [city, setCity] = useState(0)
  const [file, setFile] = useState(null)
  const [drag, setDrag] = useState(false)
  const fileRef = useRef()

  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(false)
    const f = e.dataTransfer.files[0]
    if (f) setFile(f)
  }

  const submit = (e) => {
    e.preventDefault()
    alert('¡Gracias por tu interés en SUMIMSA!\n\nHemos recibido tu solicitud. Nuestro equipo de Reclutamiento la revisará y se pondrá en contacto en 10–15 días hábiles.\n\nNuestros procesos de selección son completamente gratuitos.')
  }

  return (
    <section id="bolsa" style={{ scrollMarginTop: 68 }}>

      {/* ── HERO BANNER ── */}
      <div style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden', padding: '90px 0 80px' }}>
        {/* geometric overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(0,155,219,.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', borderLeft: '1px solid rgba(255,255,255,.04)', background: 'linear-gradient(135deg, transparent 40%, rgba(0,155,219,.04) 100%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal">
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text" style={{ color: 'var(--cyan)' }}>Únete al equipo</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: .88, color: '#fff', marginBottom: 28 }}>
              Estamos<br /><em style={{ color: 'var(--cyan)', fontStyle: 'normal' }}>contratando</em>
            </h2>
            <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.8, maxWidth: 520 }}>
              <strong style={{ color: '#fff' }}>SUMIMSA</strong> tiene vacantes disponibles para ti. Forma parte de nuestro equipo y contribuye al crecimiento de una empresa 100% mexicana.
            </p>
          </div>

          {/* STATS STRIP */}
          <div className="reveal d1" style={{ display: 'flex', gap: 0, marginTop: 52, borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 36 }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ flex: 1, paddingRight: 32, borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--cyan)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'rgba(255,255,255,.4)', letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESO TIMELINE ── */}
      <div style={{ background: 'var(--off)', borderBottom: '1px solid var(--border)', padding: '56px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 28 }}>Proceso de selección</p>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
            {/* connecting line */}
            <div style={{ position: 'absolute', top: 22, left: '12.5%', right: '12.5%', height: 1, background: 'var(--border)', zIndex: 0 }} />
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: i === 0 ? 'var(--cyan)' : '#fff', border: `2px solid ${i === 0 ? 'var(--cyan)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', fontWeight: 700, color: i === 0 ? '#fff' : 'var(--muted)' }}>{s.n}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--navy)', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: '.75rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="reveal d1" style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <div style={{ borderLeft: '2px solid var(--cyan)', padding: '10px 16px', background: 'rgba(0,155,219,.04)', fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Tiempo estimado: <strong style={{ color: 'var(--navy)' }}>10 a 15 días hábiles</strong>
            </div>
            <div style={{ borderLeft: '2px solid var(--amber)', padding: '10px 16px', background: 'rgba(244,121,32,.04)', fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Tu información permanece en nuestra base de datos por <strong style={{ color: 'var(--navy)' }}>6 meses</strong>
            </div>
          </div>
        </div>
      </div>

      {/* ── CITY + FORM ── */}
      <div style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 18 }}>Selecciona tu plaza</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {CITIES.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setCity(i)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                    padding: '20px 24px', minWidth: 120,
                    background: city === i ? 'var(--navy)' : '#fff',
                    border: `1.5px solid ${city === i ? 'var(--navy)' : 'var(--border)'}`,
                    cursor: 'pointer', transition: 'all .2s',
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={city === i ? 'var(--cyan)' : 'var(--muted)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: city === i ? '#fff' : 'var(--muted)' }}>{c.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.55rem', color: city === i ? 'rgba(255,255,255,.45)' : 'var(--border)', letterSpacing: 1 }}>{c.state}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FORM CARD */}
          <div className="reveal d1" style={{ border: '1px solid var(--border)', borderRadius: 2 }}>

            {/* form header */}
            <div style={{ background: 'var(--navy)', padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, textTransform: 'uppercase', color: '#fff', letterSpacing: 1, marginBottom: 4 }}>
                  Aplicar a vacante
                </h3>
                <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', margin: 0 }}>
                  Plaza: <strong style={{ color: 'var(--cyan)' }}>{CITIES[city].name}</strong>, {CITIES[city].state} — Envíanos tu información curricular.
                </p>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'rgba(255,255,255,.22)', letterSpacing: 2, textTransform: 'uppercase' }}>
                Proceso 100% gratuito
              </div>
            </div>

            <form onSubmit={submit} style={{ padding: '36px' }}>

              {/* Section label */}
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--muted)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>// Datos personales</p>

              <div className="fgrid" style={{ marginBottom: 1 }}>
                <div className="fg"><label>Nombre completo</label><input type="text" placeholder="Tu nombre" required /></div>
                <div className="fg"><label>Correo electrónico</label><input type="email" placeholder="tu@email.com" required /></div>
                <div className="fg"><label>Teléfono</label><input type="tel" placeholder="+52 (000) 000 0000" required /></div>
                <div className="fg"><label>Ciudad / Estado</label><input type="text" placeholder="Ciudad, Estado" required /></div>
              </div>

              {/* Section label */}
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--muted)', letterSpacing: 3, textTransform: 'uppercase', margin: '28px 0 20px' }}>// Acerca de ti</p>

              <div className="fgrid" style={{ marginBottom: 1 }}>
                <div className="fg full">
                  <label>Cuéntanos acerca de ti</label>
                  <textarea rows={4} placeholder="Describe tu experiencia y el puesto al que aplicas..." />
                </div>
              </div>

              {/* Section label */}
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--muted)', letterSpacing: 3, textTransform: 'uppercase', margin: '28px 0 20px' }}>// Curriculum vitae</p>

              {/* Drop zone */}
              <div
                onClick={() => fileRef.current.click()}
                onDragOver={e => { e.preventDefault(); setDrag(true) }}
                onDragLeave={() => setDrag(false)}
                onDrop={handleDrop}
                style={{
                  border: `2px dashed ${drag ? 'var(--cyan)' : file ? 'var(--green)' : 'var(--border)'}`,
                  borderRadius: 2,
                  padding: '32px 24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: drag ? 'rgba(0,155,219,.04)' : file ? 'rgba(0,166,81,.03)' : 'var(--off)',
                  transition: 'all .2s',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={file ? 'var(--green)' : drag ? 'var(--cyan)' : 'var(--muted)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {file
                    ? <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 12 12 15 15"/><line x1="12" y1="12" x2="12" y2="19"/></>
                    : <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>
                  }
                </svg>
                {file ? (
                  <>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '.82rem', fontWeight: 600, color: 'var(--green)', letterSpacing: 1, textTransform: 'uppercase' }}>Archivo listo</p>
                    <p style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{file.name}</p>
                    <p style={{ fontSize: '.7rem', color: 'var(--muted)', cursor: 'default' }}>Clic para cambiar</p>
                  </>
                ) : (
                  <>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '.82rem', fontWeight: 600, color: 'var(--cyan)', letterSpacing: 1, textTransform: 'uppercase' }}>
                      {drag ? 'Suelta aquí' : 'Arrastra tu CV o haz clic'}
                    </p>
                    <p style={{ fontSize: '.73rem', color: 'var(--muted)' }}>PDF, DOC, DOCX — máx. 5 MB</p>
                  </>
                )}
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => e.target.files[0] && setFile(e.target.files[0])} />
              </div>

              {/* footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '.72rem', color: 'var(--muted)', lineHeight: 1.5, maxWidth: 340 }}>
                  Al enviar aceptas nuestro <a href="#privacidad" style={{ color: 'var(--cyan)', textDecoration: 'underline' }}>aviso de privacidad</a>. Tu información se tratará de forma confidencial.
                </p>
                <button type="submit" className="btn-submit" style={{ padding: '14px 36px', fontSize: '.88rem' }}>
                  Enviar solicitud →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── CÓDIGO DE CONDUCTA ── */}
      <div style={{ background: '#dde4ed', padding: '52px 0' }}>
        <div className="container reveal">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '32px 48px', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--cyan)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>// Código de conducta</p>
              <div style={{ width: 36, height: 2, background: 'var(--cyan)' }} />
            </div>
            <p style={{ fontSize: '.87rem', color: 'var(--muted)', lineHeight: 1.9 }}>
              "Seleccionaremos y asignaremos empleados con base en sus calificaciones, sin distinción de raza, religión, origen nacional, color, género, identidad de género, orientación sexual, edad o discapacidad.{' '}
              <strong style={{ color: 'var(--amber)' }}>No se solicitan pruebas de embarazo ni de VIH</strong>{' '}
              como requisitos de ingreso, permanencia o promoción laboral."
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
