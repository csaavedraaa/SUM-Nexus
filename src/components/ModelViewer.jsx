import { Suspense, useRef, useEffect, useState, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html, Stage } from '@react-three/drei'
import * as THREE from 'three'
import './ModelViewer.css'

function Model({ src, hotspots, activeHotspot, onHotspotSelect, coordMode, onCoordMove, onLoaded }) {
  const { scene } = useGLTF(src)
  const ref = useRef()
  const [box, setBox] = useState(null)
  const [size, setSize] = useState(null)

  useEffect(() => {
    const b = new THREE.Box3().setFromObject(scene)
    setBox(b)
    setSize(b.getSize(new THREE.Vector3()))
    onLoaded?.()
  }, [scene, onLoaded])

  useFrame((_, delta) => {
    if (ref.current && activeHotspot == null && !coordMode) ref.current.rotation.y += delta * 0.35
  })

  const handlePointerMove = (e) => {
    if (!coordMode || !box || !ref.current) return
    e.stopPropagation()
    const localPt = e.point.clone()
    ref.current.worldToLocal(localPt)
    const x = Math.round(((localPt.x - box.min.x) / size.x) * 100)
    const y = Math.round((1 - (localPt.y - box.min.y) / size.y) * 100)
    const fz = Math.round(((localPt.z - box.min.z) / size.z) * 100) / 100
    onCoordMove?.({ x, y, fz })
  }

  return (
    <group ref={ref} onPointerMove={coordMode ? handlePointerMove : undefined} onPointerLeave={() => coordMode && onCoordMove?.(null)}>
      <primitive object={scene} />
      {box && hotspots?.map((h, i) => (
        <Html
          key={i}
          position={[
            box.min.x + h.fx * size.x,
            box.min.y + h.fy * size.y,
            box.min.z + (h.fz ?? 0.5) * size.z,
          ]}
          center
          distanceFactor={6}
          style={{ pointerEvents: 'auto' }}
        >
          <button
            type="button"
            className={`mv-hotspot${activeHotspot === i ? ' active' : ''}`}
            onClick={(e) => { e.stopPropagation(); onHotspotSelect?.(activeHotspot === i ? null : i) }}
            title={h.label}
          >
            {i + 1}
          </button>
        </Html>
      ))}
    </group>
  )
}

export default function ModelViewer({ src, interactive = true, hotspots, activeHotspot, onHotspotSelect, coordMode, onCoordMove }) {
  const containerRef = useRef()
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleLoaded = useCallback(() => setLoaded(true), [])

  return (
    <div className="model-viewer" ref={containerRef}>
      {inView ? (
        <>
          {!loaded && (
            <div className="mv-loader">
              <span className="mv-spinner" />
              <p>Cargando modelo…</p>
            </div>
          )}
          <Canvas
            dpr={[1, 1.75]}
            camera={{ position: [2.2, 1.6, 2.6], fov: 40 }}
            gl={{ antialias: true, preserveDrawingBuffer: true }}
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s' }}
          >
            <color attach="background" args={['#eef1f5']} />
            <ambientLight intensity={0.7} />
            <directionalLight position={[4, 6, 4]} intensity={1.4} />
            <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#8fb8ff" />

            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.4} adjustCamera={1.3}>
                <Model
                  src={src}
                  hotspots={hotspots}
                  activeHotspot={activeHotspot}
                  onHotspotSelect={onHotspotSelect}
                  coordMode={coordMode}
                  onCoordMove={onCoordMove}
                  onLoaded={handleLoaded}
                />
              </Stage>
            </Suspense>

            {interactive && (
              <OrbitControls
                enablePan
                screenSpacePanning
                panSpeed={0.8}
                enableZoom
                zoomToCursor
                minDistance={0.8}
                maxDistance={8}
                enableDamping
                dampingFactor={0.08}
              />
            )}
          </Canvas>
        </>
      ) : (
        <div className="mv-placeholder" />
      )}
    </div>
  )
}
