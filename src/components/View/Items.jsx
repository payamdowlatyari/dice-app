
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, Scroll } from '@react-three/drei'

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 1 : 0, 4, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  )
}

export default function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="/coffee-simple.jpeg" scale={[w / 5, w / 5, 1]} position={[w / 40, 0, 0]} />
      <Item url="/qaW2m8L.jpeg" scale={[w / 3, w / 5, 1]} position={[w / 4, -h * 0.05, 0]} />
      <Item url="/34445566.jpeg" scale={[2, w / 3, 1]} position={[w / 6, h * 0.25, 0]} />

      {/* <Item url="/655689898.png" scale={[w / 6, w / 6, 1]} position={[-w / 3, -h * 0.1, 0]} /> */}
      {/* <Item url="/coffee-simple.jpeg" scale={[w / 3, w / 3, 1]} position={[-w / 10, -h * 0.8 , 0]} /> */}

      {/* <Item url="/img16.jpeg" scale={[w / 3, w / 3, 1]} position={[w / 4, -h * 0.8, 0]} /> */}

      {/* <Item url="/wp4294288.webp" scale={[w / 5, w / 5, 1]} position={[w / 6, -h * 2.8, 0]} /> */}
      {/* <Item url="/isolated-background.jpeg" scale={[w / 4, w / 4, 1]} position={[w / 4, -h * 5, 0]} /> */}
      {/* <Item url="/12.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />  */}
    </Scroll>
  )
}