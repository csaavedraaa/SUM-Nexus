import { forwardRef, useRef, useState, useMemo, useCallback, useImperativeHandle } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, Grid, Billboard } from '@react-three/drei'
import * as THREE from 'three'
import './SectorCarousel3D.css'

const RADIUS = 4.6
const DEFAULT_CAM_POS = new THREE.Vector3(0, 1.3, 9.8)
const DEFAULT_TARGET = new THREE.Vector3(0, 0, 0)

function Card({ sector, index, total, onTrigger }) {
  const angle = (index / total) * Math.PI * 2
  const x = Math.sin(angle) * RADIUS
  const z = Math.cos(angle) * RADIUS
  const billboardRef = useRef()
  const downPos = useRef(null)

  // Distingue clic de arrastre: solo disparamos la selección si el puntero
  // casi no se movió entre down/up (evita que OrbitControls "robe" el clic).
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
      <Html transform distanceFactor={4.6} zIndexRange={[50, 0]} occlude={false}>
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

// Gira el carrusel completo lentamente; se detiene mientras el usuario arrastra o durante el zoom
function AutoSpin({ groupRef, paused }) {
  useFrame((_, delta) => {
    if (paused || !groupRef.current) return
    groupRef.current.rotation.y += delta * 0.18
  })
  return null
}

// Anima la cámara suavemente hacia camPos/lookPos hasta "llegar", luego avisa
function ZoomRig({ zoomRef, controlsRef, onArrive }) {
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

const SectorCarousel3D = forwardRef(function SectorCarousel3D({ sectors, onSelect }, ref) {
  const groupRef = useRef()
  const controlsRef = useRef()
  const [dragging, setDragging] = useState(false)
  const [zooming, setZooming] = useState(false)
  const pendingIndexRef = useRef(null)
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

  return (
    <div className="s3d-wrap">
      <Canvas camera={{ position: DEFAULT_CAM_POS.toArray(), fov: 40 }} dpr={[1, 1.75]}>
        <color attach="background" args={['#050f28']} />
        <fog attach="fog" args={['#050f28', 9, 19]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 8, 4]} intensity={0.55} />

        <Grid
          position={[0, -2.15, 0]}
          args={[40, 40]}
          cellColor="#12234f"
          sectionColor="#009bdb"
          cellThickness={0.4}
          sectionThickness={0.9}
          fadeDistance={18}
          fadeStrength={1.2}
          infiniteGrid
        />

        <group ref={groupRef}>
          {sectors.map((s, i) => (
            <Card key={s.num} sector={s} index={i} total={sectors.length} onTrigger={handleTrigger} />
          ))}
        </group>

        <AutoSpin groupRef={groupRef} paused={dragging || zooming || reducedMotion} />
        <ZoomRig zoomRef={zoomRef} controlsRef={controlsRef} />

        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2.05}
          rotateSpeed={0.5}
          enableDamping
          dampingFactor={0.1}
          onStart={() => setDragging(true)}
          onEnd={() => setTimeout(() => setDragging(false), 2500)}
        />
      </Canvas>
      <div className="s3d-hint">Arrastra para girar · clic en un sector para explorar</div>
    </div>
  )
})

export default SectorCarousel3D
