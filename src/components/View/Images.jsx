import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll, Image as ImageImpl } from '@react-three/drei'

export function Image({ c = new THREE.Color(), ...props }) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    useFrame(() => {
      ref.current.material.color.lerp(c.set(hovered ? '#fff' : '#eee'), hovered ? 0.4 : 0.05)
    })
    return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
  }
  
  export default function Images() {
    const { width, height } = useThree((state) => state.viewport)
    const data = useScroll()
    const group = useRef()
    useFrame(() => {
      group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
      group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
      group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
      group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
      group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
      // group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
      // group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
      // group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
      // group.current.children[7].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  
    })
    return (
      <group ref={group}>
        <Image position={[6, 0, -2]} scale={[3, height, 1]} url="/binary-code.jpeg" />
        <Image position={[1, 0, 2]} scale={2.5} url="/img16.jpeg" />
        <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="/6193145.jpeg" />
        <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="/img21.jpeg" />
        <Image position={[0.75, -height, 3.5]} scale={1.5} url="/quesada.jpeg" />
        {/* <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="/5083491.jpeg" />
        <Image position={[0, -height * 2 - height / 4, 1]} scale={[width, height / 2, 1]} url="/me-camera.jpeg" />
        <Image position={[0, -height * 3 - height, 1]} scale={[width / 2, height / 2, 1]} url="/qaW2m8L.jpeg" /> */}
      </group>
    )
  }