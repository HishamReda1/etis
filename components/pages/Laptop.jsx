"use client"
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import HeroPage from './HeroPage'
import CanvasLoader from './Loading'
import * as THREE from 'three'

function Model({ hinge, open }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./models/mac-draco.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    )

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    )

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    )

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t / 2)) / 3,
      0.1
    )
  })

  return (
    <group ref={group} dispose={null}>
      <a.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            {open && (
              <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
                <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                  <HeroPage />
                </div>
              </Html>
            )}
          </mesh>
        </group>
      </a.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function Laptop() {
  const [open, setOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const { hinge } = useSpring({
    hinge: open ? -0.425 : 1.575,
    config: { mass: 5, tension: 400, friction: 70 }
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Canvas camera={{ position: isMobile ? [-5, 0, -20] : [-5, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={<CanvasLoader />}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]} onClick={() => setOpen(!open)}>
          <Model hinge={hinge} open={open} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -2, 0]} scale={15} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  )
}
