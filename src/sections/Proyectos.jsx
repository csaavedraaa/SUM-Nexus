const PROJS = [
  { cat:'Petrolero',    title:'Suministro integral en plataformas offshore del Golfo de México',    img:'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&q=80&fit=crop' },
  { cat:'Naval',        title:'Equipamiento de buques en puertos Tampico – Veracruz',               img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop' },
  { cat:'Tullbox',      title:'Programa Tullbox In Situ — Planta industrial Tamaulipas',            img:'/Contenedor_Tullbox.jpg' },
  { cat:'Energético',   title:'Herramienta para parque eólico norte de México',                     img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80&fit=crop' },
  { cat:'Metal-Mecán.', title:'Equipamiento integral de taller — planta automotriz',                img:'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80&fit=crop' },
]

const cardStyle = (large=false) => ({
  position:'relative',overflow:'hidden',cursor:'pointer',
  aspectRatio: large ? undefined : '4/3',
  display:'flex',flexDirection:'column',justifyContent:'flex-end',
  gridRow: large ? '1/3' : undefined,
})

export default function Proyectos() {
  return (
    <section id="proyectos" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Proyectos</span></div>
          <h2 className="s-h2">Ejecutados<br /><em>con precisión</em></h2>
        </div>
        <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'auto auto',gap:1,background:'var(--border)',marginTop:52}}>
          {PROJS.map((p,i)=>(
            <div key={i} style={cardStyle(i===0)}>
              <img src={p.img} alt={p.cat} loading="lazy"
                style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',transition:'transform .6s,filter .4s',filter:'brightness(.7)'}} />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(13,30,74,.9) 0%,rgba(13,30,74,.15) 65%,transparent 100%)'}} />
              <div style={{position:'relative',zIndex:2,padding:22}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'.58rem',color:'var(--cyan)',letterSpacing:3,textTransform:'uppercase',display:'flex',alignItems:'center',gap:8,marginBottom:5}}>
                  <span style={{display:'inline-block',width:14,height:1,background:'var(--cyan)'}} />{p.cat}
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:700,textTransform:'uppercase',letterSpacing:.5,color:'#fff',lineHeight:1.2}}>{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}