import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import HSE              from './sections/HSE'
import Gobernanza       from './sections/Gobernanza'
import Sustentabilidad  from './sections/Sustentabilidad'
import Privacidad   from './sections/Privacidad'
import Contacto     from './sections/Contacto'
import Footer       from './components/Footer'
import BackToTop    from './components/BackToTop'
import Cursor       from './components/Cursor'
import Stars        from './components/Stars'

function LandingPage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Nosotros />
      <Gobernanza />
      <HSE />
      <Sustentabilidad />
      <Proveedores label="Marcas que representamos" />
      <CasosExito />
      <Servicios />
      <Sectores />
      <Proyectos />
      <Tullbox />
      <Catalogos />
      <Bolsa />
      <Privacidad />
      <Contacto />
    </>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal:not(.in)').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (!location.state?.scrollTo) return
    const el = document.querySelector(location.state.scrollTo)
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' })
  }, [location.state])

  return (
    <>
      <Stars />
      <Cursor />
      <Header />
      <main>
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/"         element={<LandingPage />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/blog"     element={<Blog />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
