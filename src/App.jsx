import { useEffect } from 'react'
import Header      from './components/Header'
import Hero        from './sections/Hero'
import Ticker      from './components/Ticker'
import Sectores    from './sections/Sectores'
import Esquemas    from './sections/Esquemas'
import Nosotros    from './sections/Nosotros'
import Proveedores from './components/Proveedores'
import Presencia   from './sections/Presencia'
import Tullbox     from './sections/Tullbox'
import Proyectos   from './sections/Proyectos'
import Tecnologia  from './sections/Tecnologia'
import SSPA        from './sections/SSPA'
import Noticias    from './sections/Noticias'
import Blog        from './sections/Blog'
import Catalogos   from './sections/Catalogos'
import Bolsa       from './sections/Bolsa'
import Privacidad  from './sections/Privacidad'
import Contacto    from './sections/Contacto'
import Footer      from './components/Footer'
import BackToTop   from './components/BackToTop'
import Cursor      from './components/Cursor'
import Stars       from './components/Stars'

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
        <Sectores />
        <Esquemas />
        <Nosotros />
        <Proveedores />
        <Presencia />
        <Tullbox />
        <Proyectos />
        <Tecnologia />
        <SSPA />
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
