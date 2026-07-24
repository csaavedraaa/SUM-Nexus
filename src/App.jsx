import { useEffect } from 'react'
import Header       from './components/Header'
import Hero         from './sections/Hero'
import Ticker       from './components/Ticker'
import Nosotros     from './sections/Nosotros'
import Servicios    from './sections/Servicios'
import Sectores     from './sections/Sectores'
import Proveedores  from './components/Proveedores'
import CasosExito   from './components/CasosExito'
import Proyectos    from './sections/Proyectos'
import Tullbox      from './sections/Tullbox'
import Noticias     from './sections/Noticias'
import Blog         from './sections/Blog'
import Catalogos    from './sections/Catalogos'
import Bolsa        from './sections/Bolsa'
import Privacidad   from './sections/Privacidad'
import Contacto     from './sections/Contacto'
import Footer       from './components/Footer'
import BackToTop    from './components/BackToTop'
import Cursor       from './components/Cursor'
import Stars        from './components/Stars'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Stars />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Nosotros />
        <Proveedores label="Marcas que representamos" />
        <CasosExito />
        <Servicios />
        <Sectores />
        <Proyectos />
        <Tullbox />
        <Noticias />
        <Blog />
        <Catalogos />
        <Bolsa />
        <Privacidad />
        <Contacto />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
