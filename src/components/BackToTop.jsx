import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      style={{
        position:'fixed',bottom:26,right:26,zIndex:500,
        width:40,height:40,background:'var(--navy)',
        border:'1px solid var(--border)',color:'var(--cyan)',
        fontSize:'1rem',display:'flex',alignItems:'center',justifyContent:'center',
        clipPath:'polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,0 100%)',
        transition:'all .3s',cursor:'pointer',
      }}
      onMouseEnter={e=>{e.currentTarget.style.background='var(--cyan)';e.currentTarget.style.color='#fff'}}
      onMouseLeave={e=>{e.currentTarget.style.background='var(--navy)';e.currentTarget.style.color='var(--cyan)'}}
    >↑</button>
  )
}
