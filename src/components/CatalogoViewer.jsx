import { useEffect, useRef, useState, useCallback } from 'react'
import './CatalogoViewer.css'

const PDFJS_CDN  = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
const WORKER_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

const ZOOM_MIN  = 0.5
const ZOOM_MAX  = 3.0
const ZOOM_STEP = 0.25

let pdfJsReady = false
let PageFlipCls = null

async function cargarLibrerias() {
  if (!pdfJsReady) {
    if (!window.pdfjsLib) {
      await new Promise((res, rej) => {
        const s = document.createElement('script')
        s.src = PDFJS_CDN
        s.onload = res; s.onerror = rej
        document.head.appendChild(s)
      })
    }
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_CDN
    pdfJsReady = true
  }
  if (!PageFlipCls) {
    const mod = await import('page-flip')
    PageFlipCls = mod.PageFlip ?? mod.default?.PageFlip ?? mod.default
  }
}

function toAbsoluteUrl(path) {
  if (path.startsWith('http')) return path
  return window.location.origin + path
}

export default function CatalogoViewer({ catalogo, onClose }) {
  const containerRef = useRef(null)
  const wrapRef      = useRef(null)   // div que recibe el transform de zoom
  const flipRef      = useRef(null)
  const abortRef     = useRef(false)

  // Pinch-to-zoom refs
  const pinchRef      = useRef({ active: false, dist: 0, zoom: 1 })

  const [fase,     setFase]     = useState('cargando')
  const [pagina,   setPagina]   = useState(0)
  const [total,    setTotal]    = useState(0)
  const [progreso, setProgreso] = useState(0)
  const [inputPag, setInputPag] = useState('1')
  const [errorMsg, setErrorMsg] = useState('')
  const [zoom,     setZoom]     = useState(1)

  // Escape
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  // Bloquear scroll body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Aplicar zoom al wrapper del libro
  useEffect(() => {
    if (wrapRef.current) {
      wrapRef.current.style.transform = `scale(${zoom})`
      wrapRef.current.style.transformOrigin = 'center center'
    }
  }, [zoom])

  // Pinch-to-zoom táctil
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const dist = (t) => {
      const dx = t[0].clientX - t[1].clientX
      const dy = t[0].clientY - t[1].clientY
      return Math.hypot(dx, dy)
    }

    const onStart = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        pinchRef.current = { active: true, dist: dist(e.touches), zoom }
      }
    }
    const onMove = (e) => {
      if (!pinchRef.current.active || e.touches.length !== 2) return
      e.preventDefault()
      const ratio    = dist(e.touches) / pinchRef.current.dist
      const newZoom  = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, pinchRef.current.zoom * ratio))
      setZoom(newZoom)
    }
    const onEnd = () => { pinchRef.current.active = false }

    el.addEventListener('touchstart', onStart, { passive: false })
    el.addEventListener('touchmove',  onMove,  { passive: false })
    el.addEventListener('touchend',   onEnd)
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove',  onMove)
      el.removeEventListener('touchend',   onEnd)
    }
  }, [zoom])

  // Zoom con rueda del ratón (Ctrl + scroll)
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const onWheel = (e) => {
      if (!e.ctrlKey && !e.metaKey) return
      e.preventDefault()
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP
      setZoom(z => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, +(z + delta).toFixed(2))))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const zoomIn    = () => setZoom(z => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)))
  const zoomOut   = () => setZoom(z => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)))
  const zoomReset = () => setZoom(1)

  // ── Init PDF + PageFlip ────────────────────────────────────────────
  const init = useCallback(async () => {
    abortRef.current = false
    if (!containerRef.current) return

    try {
      await cargarLibrerias()
      if (abortRef.current) return

      const pdfUrl   = toAbsoluteUrl(catalogo.pdf)
      const loadTask = window.pdfjsLib.getDocument({ url: pdfUrl, withCredentials: false })
      const pdf      = await loadTask.promise
      if (abortRef.current) return

      const numPages = pdf.numPages
      setTotal(numPages)

      const primeraPag = await pdf.getPage(1)
      const vp0        = primeraPag.getViewport({ scale: 1 })

      const isMobile = window.innerWidth <= 640
      const availW   = isMobile
        ? window.innerWidth  * 0.92
        : Math.min(window.innerWidth  * 0.44, 620)
      const availH   = Math.min(window.innerHeight * 0.75, 820)
      const scale    = Math.min(availW / vp0.width, availH / vp0.height, 2.5)

      const pageW = Math.floor(vp0.width  * scale)
      const pageH = Math.floor(vp0.height * scale)

      const inner = containerRef.current
      inner.innerHTML = ''
      inner.style.width  = `${isMobile ? pageW : pageW * 2}px`
      inner.style.height = `${pageH}px`

      const canvases = []
      for (let i = 1; i <= numPages; i++) {
        const wrap = document.createElement('div')
        wrap.className = 'cv-page-wrap'
        wrap.style.cssText = `width:${pageW}px;height:${pageH}px;overflow:hidden;background:#fff;`

        const canvas = document.createElement('canvas')
        canvas.width = pageW; canvas.height = pageH
        canvas.style.display = 'block'
        canvas.setAttribute('data-idx', i)

        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#f4f5f7'
        ctx.fillRect(0, 0, pageW, pageH)
        ctx.fillStyle = '#c8cdd6'
        ctx.font = `bold ${Math.floor(pageH * 0.035)}px sans-serif`
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillText(i === 1 ? catalogo.titulo.toUpperCase() : `${i}`, pageW / 2, pageH / 2)

        wrap.appendChild(canvas)
        inner.appendChild(wrap)
        canvases.push({ canvas, idx: i })
      }

      const flip = new PageFlipCls(inner, {
        width: pageW, height: pageH,
        size: 'fixed',
        minWidth: pageW, maxWidth: pageW,
        minHeight: pageH, maxHeight: pageH,
        showCover: true,
        mobileScrollSupport: false,
        clickEventForward: true,
        usePortrait: isMobile,
        startPage: 0,
        drawShadow: true,
        flippingTime: 550,
        swipeDistance: 30,
        useMouseEvents: true,
      })

      flip.loadFromHTML(inner.querySelectorAll('.cv-page-wrap'))
      flipRef.current = flip

      flip.on('flip', (e) => {
        setPagina(e.data)
        setInputPag(String(e.data + 1))
      })

      setFase('listo')
      setPagina(0)
      setInputPag('1')
      setZoom(1)

      let rendered = 0
      const renderOne = async ({ canvas, idx }) => {
        if (abortRef.current) return
        try {
          const page = await pdf.getPage(idx)
          const vp   = page.getViewport({ scale })
          canvas.width  = Math.floor(vp.width)
          canvas.height = Math.floor(vp.height)
          const ctx = canvas.getContext('2d')
          await page.render({ canvasContext: ctx, viewport: vp }).promise
          rendered++
          setProgreso(Math.round((rendered / numPages) * 100))
        } catch (_) {}
      }

      await Promise.all(canvases.slice(0, 8).map(renderOne))
      for (let i = 8; i < canvases.length; i += 6) {
        if (abortRef.current) break
        await Promise.all(canvases.slice(i, i + 6).map(renderOne))
        await new Promise(r => setTimeout(r, 60))
      }

    } catch (err) {
      if (abortRef.current) return
      setErrorMsg(err?.message || 'Error desconocido')
      setFase('error')
    }
  }, [catalogo.pdf, catalogo.titulo])

  useEffect(() => {
    init()
    return () => {
      abortRef.current = true
      if (flipRef.current) { try { flipRef.current.destroy() } catch (_) {} flipRef.current = null }
    }
  }, [init])

  const anterior  = () => flipRef.current?.flipPrev()
  const siguiente = () => flipRef.current?.flipNext()
  const irAPag    = (n) => flipRef.current?.flip(Math.max(0, Math.min(n - 1, total - 1)))
  const onKeyPag  = (e) => { if (e.key === 'Enter') { const n = parseInt(inputPag, 10); if (!isNaN(n)) irAPag(n) } }

  const zoomPct = Math.round(zoom * 100)

  return (
    <div className="cv-overlay" role="dialog" aria-modal="true">
      <div className="cv-backdrop" onClick={onClose} />

      <div className="cv-panel">

        {/* Header */}
        <div className="cv-header" style={{ '--cv-accent': catalogo.accent }}>
          <div className="cv-header-left">
            <span className="cv-header-num">{catalogo.id}</span>
            <div>
              <h2 className="cv-titulo">{catalogo.titulo}</h2>
              {total > 0 && <span className="cv-pages-info">{total} páginas</span>}
            </div>
          </div>
          <button className="cv-close" onClick={onClose} aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Progress */}
        {fase === 'listo' && progreso < 100 && (
          <div className="cv-progress-bar">
            <div className="cv-progress-fill" style={{ width: `${progreso}%`, background: catalogo.accent }} />
          </div>
        )}

        {/* Cargando */}
        {fase === 'cargando' && (
          <div className="cv-estado">
            <div className="cv-spinner" style={{ borderTopColor: catalogo.accent }} />
            <p>Cargando catálogo…</p>
            <span className="cv-hint">El primer catálogo puede tardar unos segundos</span>
          </div>
        )}

        {/* Error */}
        {fase === 'error' && (
          <div className="cv-estado">
            <span style={{ fontSize: '2.2rem' }}>⚠️</span>
            <p className="cv-error-msg">No se pudo cargar el catálogo.</p>
            {errorMsg && <code className="cv-error-code">{errorMsg}</code>}
            <p className="cv-error-hint">
              Verifica que el archivo esté en <code>public/catalogos/{catalogo.pdf.split('/').pop()}</code>
            </p>
            <div className="cv-error-actions">
              <button className="cv-ctrl-btn" onClick={init}>🔄 Reintentar</button>
              <a href={catalogo.pdf} target="_blank" rel="noopener noreferrer" className="cv-ctrl-btn">Abrir PDF ↗</a>
            </div>
          </div>
        )}

        {/* Libro */}
        <div className={`cv-book-area${fase !== 'listo' ? ' cv-oculto' : ''}`}>
          {/* Hint táctil — solo en móvil */}
          <div className="cv-pinch-hint">
            <span>👌 Pellizca para hacer zoom</span>
          </div>
          <div className="cv-book-scroll">
            <div ref={wrapRef} className="cv-book-wrap">
              <div ref={containerRef} className="cv-flip-root" />
            </div>
          </div>
        </div>

        {/* Controles */}
        {fase === 'listo' && (
          <div className="cv-controls" style={{ '--cv-accent': catalogo.accent }}>

            {/* Navegación */}
            <button className="cv-ctrl-btn" onClick={anterior} disabled={pagina === 0} aria-label="Anterior">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Anterior
            </button>

            <div className="cv-paginador">
              <input type="number" className="cv-pag-input"
                value={inputPag} min={1} max={total}
                onChange={e => setInputPag(e.target.value)}
                onKeyDown={onKeyPag}
                onBlur={() => { const n = parseInt(inputPag, 10); if (!isNaN(n)) irAPag(n); else setInputPag(String(pagina + 1)) }}
              />
              <span className="cv-pag-sep">/</span>
              <span className="cv-pag-total">{total}</span>
            </div>

            <button className="cv-ctrl-btn" onClick={siguiente} disabled={pagina >= total - 1} aria-label="Siguiente">
              Siguiente
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Separador */}
            <div className="cv-ctrl-sep" />

            {/* Zoom */}
            <button className="cv-ctrl-btn cv-zoom-btn" onClick={zoomOut} disabled={zoom <= ZOOM_MIN} aria-label="Alejar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M5 7h4M10.5 10.5l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>

            <button
              className="cv-zoom-pct"
              onClick={zoomReset}
              title="Restablecer zoom"
            >
              {zoomPct}%
            </button>

            <button className="cv-ctrl-btn cv-zoom-btn" onClick={zoomIn} disabled={zoom >= ZOOM_MAX} aria-label="Acercar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M7 5v4M5 7h4M10.5 10.5l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Descarga */}
            <div className="cv-ctrl-sep" />
            <a href={catalogo.pdf} download className="cv-ctrl-btn cv-dl-btn" aria-label="Descargar PDF">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              PDF
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
