import React, {useState, Suspense } from 'react'
import './welcome.css'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import RolledCarpet from '../../../public/RolledCarpet'

const Welcome = ({carpetRoll}) => {
    return (
      <>
        <Canvas className='rolled-carpet-canvas' style={{ height: '100vh' }}>
          <ambientLight />
          <OrbitControls enableZoom={false}/>
          <Suspense fallback={null}></Suspense>
            <RolledCarpet position={[0, 0, 0]} rotation={[Math.PI / 2, Math.PI / 4, 0]}/>
        </Canvas>
        <div className='welcome-banner'>
      <div className='welcome-btn-label'>welcome screen</div>
            <button onClick={carpetRoll}>Click to roll btn</button>
        </div>
        </>
  )
}

export default Welcome