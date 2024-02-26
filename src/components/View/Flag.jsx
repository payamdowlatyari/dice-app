import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei'

export default function Flag() {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
  })
  return (
    <mesh onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={[4, 4, 4]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial ref={ref} speed={5}>
        
        <GradientTexture stops={[0, 0.8, 1]} colors={['#222', '#f1faee', '#222']} size={100} />
      </MeshDistortMaterial>
    </mesh>
  )
}