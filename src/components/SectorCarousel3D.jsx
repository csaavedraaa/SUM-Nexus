import { forwardRef, useRef, useState, useMemo, useCallback, useImperativeHandle } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, OrbitControls, Grid, Billboard } from '@react-three/drei'
import * as THREE from 'three'
import './SectorCarousel3D.css'

const DEFAULT_TARGET = new THREE.Vector3(0, 0, 0)

function Card({ sector, x, z, cardDistanceFactor, onTrigger, index }) {
  const billboardRef = useRef()
  const downPos = useRef(null)

  // Distingue clic de arrastre: solo disparamos la selección si el puntero
  // casi no se movió entre down/up (evita que el arrastre "robe" el clic).
  const handlePointerDown = (e) => {
    e.stopPropagation()
    downPos.current = [e.clientX, e.clientY]
  }
  const handlePointerUp = (e) => {
    e.stopPropagation()
    if (!downPos.current) return
    const [dx0, dy0] = downPos.current
    const moved = Math.hypot(e.clientX - dx0, e.clientY - dy0)
    downPos.current = null
    if (moved < 6 && billboardRef.current) {
      const worldPos = new THREE.Vector3()
      billboardRef.current.getWorldPosition(worldPos)
      onTrigger(index, worldPos)
    }
  }

  return (
    <Billboard ref={billboardRef} position={[x, 0, z]}>
      <Html transform distanceFactor={cardDistanceFactor} zIndexRange={[50, 0]} occlude={false}>
        <div
          className="s3d-card"
          data-hover
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <img className="s3d-card-img" src={sector.img} alt={sector.title} draggable={false} />
          <div className="s3d-card-overlay" />
          <div className="s3d-card-num">{sector.num}</div>
          <div className="s3d-card-body">
            <h3 className="s3d-card-title">{sector.title}</h3>
            <p className="s3d-card-text">{sector.text}</p>
            <span className="s3d-card-cta">Explorar sector →</span>
          </div>
        </div>
      </Html>
    </Billboard>
  )
}

// ─── Modo círculo / arco (comportamiento original, gira en 3D) ───────────────
function RingCard({ sector, index, total, radius, arcDeg, cardDistanceFactor, onTrigger }) {
  const angle = arcDeg
    ? (-arcDeg / 2 + (total > 1 ? (index / (total - 1)) * arcDeg : 0)) * (Math.PI / 180)
    : (index / total) * Math.PI * 2
  const x = Math.sin(angle) * radius
  const z = Math.cos(angle) * radius
  return <Card sector={sector} index={index} x={x} z={z} cardDistanceFactor={cardDistanceFactor} onTrigger={onTrigger} />
}

function AutoSpin({ groupRef, paused, arcDeg }) {
  const maxRot = arcDeg ? (Math.max(arcDeg / 2 - 25, 10)) * (Math.PI / 180) : null
  useFrame(({ clock }, delta) => {
    if (paused || !groupRef.current) return
    if (maxRot) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.25) * maxRot
    } else {
      groupRef.current.rotation.y += delta * 0.18
    }
  })
  return null
}

// ─── Modo línea (cinta horizontal que se desliza, sin rotar) ────────────────
// Todas las tarjetas quedan siempre de frente a la cámara, a la misma
// distancia — nunca hay una "detrás" de otra ni cambios de tamaño al mover.
// Se duplica la fila para que el ciclo sea infinito y sin cortes.
function ScrollTrack({ sectors, lineSpacing, cardDistanceFactor, onTrigger, scrollRef, paused }) {
  const trackRef = useRef()
  const totalWidth = sectors.length * lineSpacing

  useFrame((_, delta) => {
    if (!trackRef.current) return
    if (!paused) scrollRef.current += delta * 1.4
    let posX = -(scrollRef.current % totalWidth)
    if (posX > 0) posX -= totalWidth
    trackRef.current.position.x = posX
  })

  // Three copies: the first offset to -totalWidth so there are always
  // cards on both sides of the camera when the loop resets.
  const tripled = [...sectors, ...sectors, ...sectors]

  return (
    <group ref={trackRef}>
      {tripled.map((s, i) => (
        <Card
          key={`${s.num}-${i}`}
          sector={s}
          index={i % sectors.length}
          x={(i - sectors.length) * lineSpacing}
          z={0}
          cardDistanceFactor={cardDistanceFactor}
          onTrigger={onTrigger}
        />
      ))}
    </group>
  )
}

// Convierte el arrastre horizontal del mouse/touch en desplazamiento de la cinta.
function DragScroll({ scrollRef, onDragStart, onDragEnd }) {
  const { gl } = useThree()
  const dragging = useRef(false)
  const lastX = useRef(0)

  useMemo(() => {
    const el = gl.domElement
    const down = (e) => {
      dragging.current = true
      lastX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0
      onDragStart()
    }
    const move = (e) => {
      if (!dragging.current) return
      const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0
      const dx = x - lastX.current
      lastX.current = x
      scrollRef.current -= dx * 0.02
    }
    const up = () => {
      if (!dragging.current) return
      dragging.current = false
      onDragEnd()
    }
    el.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    return () => {
      el.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
  }, [gl, scrollRef, onDragStart, onDragEnd])

  return null
}

// Anima la cámara suavemente hacia camPos/lookPos hasta "llegar", luego avisa
function ZoomRig({ zoomRef, controlsRef }) {
  useFrame((state) => {
    const z = zoomRef.current
    if (!z.active) return
    state.camera.position.lerp(z.camPos, 0.09)
    if (controlsRef.current) {
      controlsRef.current.target.lerp(z.lookPos, 0.09)
      controlsRef.current.update()
    }
    z.elapsed += 1
    if (z.elapsed > 34) {
      z.active = false
      if (z.onDone) z.onDone()
    }
  })
  return null
}

const SectorCarousel3D = forwardRef(function SectorCarousel3D({
  sectors, onSelect, radius = 4.6, camDistance = 9.8, cardDistanceFactor = 4.6, arcDeg = null, lineSpacing = null,
  bgColor = '#050f28', gridColor = '#12234f', gridSectionColor = '#009bdb', bgImage = null,
}, ref) {
  const groupRef = useRef()
  const controlsRef = useRef()
  const [dragging, setDragging] = useState(false)
  const [zooming, setZooming] = useState(false)
  const pendingIndexRef = useRef(null)
  const scrollRef = useRef(0)
  const DEFAULT_CAM_POS = useMemo(() => new THREE.Vector3(0, 1.3, camDistance), [camDistance])
  const zoomRef = useRef({ active: false, camPos: DEFAULT_CAM_POS.clone(), lookPos: DEFAULT_TARGET.clone(), elapsed: 0, onDone: null })

  const reducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  const handleTrigger = useCallback((index, worldPos) => {
    pendingIndexRef.current = index
    const dir = worldPos.clone().normalize()
    const camPos = worldPos.clone().add(dir.multiplyScalar(3.2)).add(new THREE.Vector3(0, 0.4, 0))
    zoomRef.current = {
      active: true,
      camPos,
      lookPos: worldPos.clone(),
      elapsed: 0,
      onDone: () => {
        setZooming(false)
        onSelect(pendingIndexRef.current)
        pendingIndexRef.current = null
      },
    }
    setZooming(true)
  }, [onSelect])

  // Expuesto al padre: cuando cierra el panel de detalle, la cámara regresa a su posición original
  useImperativeHandle(ref, () => ({
    resetCamera() {
      zoomRef.current = {
        active: true,
        camPos: DEFAULT_CAM_POS.clone(),
        lookPos: DEFAULT_TARGET.clone(),
        elapsed: 0,
        onDone: null,
      }
    },
  }))

  const wrapStyle = bgImage
    ? { backgroundImage: `url('${bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: bgColor }

  return (
    <div className="s3d-wrap" style={wrapStyle}>
      <Canvas camera={{ position: DEFAULT_CAM_POS.toArray(), fov: 40 }} dpr={[1, 1.75]} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <fog attach="fog" args={['#0a0c10', 9, 19]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 8, 4]} intensity={0.55} />

        <Grid
          position={[0, -2.15, 0]}
          args={[40, 40]}
          cellColor={gridColor}
          sectionColor={gridSectionColor}
          cellThickness={0.4}
          sectionThickness={0.9}
          fadeDistance={18}
          fadeStrength={1.2}
          infiniteGrid
        />

        {lineSpacing ? (
          <>
            <ScrollTrack
              sectors={sectors}
              lineSpacing={lineSpacing}
              cardDistanceFactor={cardDistanceFactor}
              onTrigger={handleTrigger}
              scrollRef={scrollRef}
              paused={dragging || zooming || reducedMotion}
            />
            <DragScroll
              scrollRef={scrollRef}
              onDragStart={() => setDragging(true)}
              onDragEnd={() => setTimeout(() => setDragging(false), 800)}
            />
          </>
        ) : (
          <>
            <group ref={groupRef}>
              {sectors.map((s, i) => (
                <RingCard key={s.num} sector={s} index={i} total={sectors.length} radius={radius} arcDeg={arcDeg} cardDistanceFactor={cardDistanceFactor} onTrigger={handleTrigger} />
              ))}
            </group>
            <AutoSpin groupRef={groupRef} arcDeg={arcDeg} paused={dragging || zooming || reducedMotion} />
            <OrbitControls
              ref={controlsRef}
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.4}
              maxPolarAngle={Math.PI / 2.05}
              {...(arcDeg ? {
                minAzimuthAngle: -(arcDeg / 2 + 20) * (Math.PI / 180),
                maxAzimuthAngle: (arcDeg / 2 + 20) * (Math.PI / 180),
              } : {})}
              rotateSpeed={0.5}
              enableDamping
              dampingFactor={0.1}
              onStart={() => setDragging(true)}
              onEnd={() => setTimeout(() => setDragging(false), 2500)}
            />
          </>
        )}

        <ZoomRig zoomRef={zoomRef} controlsRef={controlsRef} />
      </Canvas>
      <div className="s3d-hint">
        {lineSpacing ? 'Arrastra para deslizar · clic en un catálogo para explorar' : 'Arrastra para girar · clic en un sector para explorar'}
      </div>
    </div>
  )
})

export default SectorCarousel3D
