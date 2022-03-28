import * as THREE from 'three'
import React, { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? '#dc4c4c' : 'white'),
      0.5,
    )
  })
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  )
}




function Cloud({ count = 4, radius = 20, wordsList = [] }) {
  // Create a count x count random words with spherical distribution
var wordss = wordsList

  const words = useMemo(() => { 
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count

    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
          wordss[Math.floor(Math.random() * wordss.length)],
        ])
    return temp
  }, [count, radius])
  
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ))
}

export default function CanvasWrapper(skillsList) {

    var wordsList = skillsList.skillsList
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 65], fov: 90 }}>
      <Suspense fallback={null}>
        <Cloud count={8} radius={45} wordsList={wordsList} />
        <TrackballControls noZoom={true}/>
      </Suspense>
    </Canvas>
  )
}
