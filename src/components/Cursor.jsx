import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ rx: 0, ry: 0, mx: 0, my: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      const { rx, ry, mx, my } = pos.current
      pos.current.rx += (mx - rx) * 0.12
      pos.current.ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px'
        ringRef.current.style.top  = pos.current.ry + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (!ringRef.current) return
      ringRef.current.style.width       = '52px'
      ringRef.current.style.height      = '52px'
      ringRef.current.style.borderColor = 'rgba(0,155,219,.8)'
    }
    const onLeave = () => {
      if (!ringRef.current) return
      ringRef.current.style.width       = '34px'
      ringRef.current.style.height      = '34px'
      ringRef.current.style.borderColor = 'rgba(0,155,219,.5)'
    }

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    // Attach hover effects to interactive elements
    const attach = () => {
      document.querySelectorAll('a,button,[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()
    // re-attach on DOM changes (lazy sections)
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
