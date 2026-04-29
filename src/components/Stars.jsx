import { useEffect, useRef } from 'react'

export default function Stars() {
  const cvRef = useRef(null)

  useEffect(() => {
    const cv  = cvRef.current
    const ctx = cv.getContext('2d')
    let stars = []
    let animId

    const resize = () => {
      cv.width  = window.innerWidth
      cv.height = window.innerHeight
      stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.4 + 0.08,
        s: Math.random() * 0.25 + 0.04,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, cv.width, cv.height)
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,155,219,${s.a})`
        ctx.fill()
        s.y += s.s
        if (s.y > cv.height) { s.y = 0; s.x = Math.random() * cv.width }
      })
      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={cvRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none', opacity: 0.4,
      }}
    />
  )
}
