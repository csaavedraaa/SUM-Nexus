import { useRef, useLayoutEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import './RigShowroom.css'

// Cilindro delgado orientado entre dos puntos — construye la retícula de la torre
// sin depender de ningún modelo 3D externo (evita el mismo problema de servicios
// de terceros que fallan que ya vimos con los logos).
function Beam({ from, to, radius = 0.035, color = '#c7d2e0' }) {
  const ref = useRef()
  useLayoutEffect(() => {
    const start = new THREE.Vector3(...from)
    const end = new THREE.Vector3(...to)
    const dir = new THREE.Vector3().subVectors(end, start)
    const length = dir.length()
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
    ref.current.position.copy(mid)
    ref.current.scale.set(1, length, 1)
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
    ref.current.quaternion.copy(quat)
  }, [from, to])

  return (
    <mesh ref={ref} castShadow>
      <cylinderGeometry args={[radius, radius, 1, 6]} />
      <meshStandardMaterial color={color} metalness={0.75} roughness={0.35} />
    </mesh>
  )
}

// Torre de perforación tipo retícula (derrick), generada por niveles: 4 patas que
// se van cerrando hacia arriba, con diagonales y anillos horizontales por nivel.
function DerrickTower() {
  const levels = 4
  const baseHalf = 1.05
  const topHalf = 0.22
  const height = 3.1

  const corners = (level) => {
    const t = level / levels
    const hw = baseHalf + (topHalf - baseHalf) * t
    const y = height * t
    return [
      [hw, y, hw], [hw, y, -hw], [-hw, y, -hw], [-hw, y, hw],
    ]
  }

  const beams = []
  for (let l = 0; l < levels; l++) {
    const lower = corners(l)
    const upper = corners(l + 1)
    for (let c = 0; c < 4; c++) beams.push([lower[c], upper[c]])
    for (let c = 0; c < 4; c++) beams.push([lower[c], upper[(c + 1) % 4]])
    for (let c = 0; c < 4; c++) beams.push([lower[c], lower[(c + 1) % 4]])
  }
  const top = corners(levels)
  for (let c = 0; c < 4; c++) beams.push([top[c], top[(c + 1) % 4]])

  return (
    <group position={[0, -height / 2, 0]}>
      {beams.map((b, i) => <Beam key={i} from={b[0]} to={b[1]} />)}
      {/* Corona en la punta */}
      <mesh position={[0, height, 0]} castShadow>
        <boxGeometry args={[0.5, 0.22, 0.5]} />
        <meshStandardMaterial color="#0d1e4a" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

// Bloque viajero: sube y baja lentamente por el centro de la torre, simulando la operación de perforación.
function TravelingBlock({ height }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = (Math.sin(clock.elapsedTime * 0.5) + 1) / 2
    ref.current.position.y = -height * 0.35 + t * height * 0.55
  })
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[0.3, 0.22, 0.3]} />
      <meshStandardMaterial color="#009bdb" metalness={0.6} roughness={0.3} emissive="#009bdb" emissiveIntensity={0.15} />
    </mesh>
  )
}

function Rig({ spinSpeed }) {
  const groupRef = useRef()
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * spinSpeed
  })
  return (
    <group ref={groupRef}>
      <DerrickTower />
      <TravelingBlock height={3.1} />
    </group>
  )
}

export default function RigShowroom() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="rig-showroom"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [3.3, 1.7, 3.3], fov: 42 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#5bbdd6']} />
        <fog attach="fog" args={['#5bbdd6', 5, 10]} />

        <ambientLight intensity={0.55} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />
        <pointLight position={[-3, 2, -3]} intensity={0.5} color="#009bdb" />

        <Rig spinSpeed={hovered ? 0.08 : 0.22} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.62, 0]} receiveShadow>
          <circleGeometry args={[2.6, 32]} />
          <meshStandardMaterial color="#001e2e" metalness={0.25} roughness={0.85} />
        </mesh>

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={2.6}
          maxDistance={5.2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate
          autoRotateSpeed={hovered ? 0 : 1.1}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  )
}
