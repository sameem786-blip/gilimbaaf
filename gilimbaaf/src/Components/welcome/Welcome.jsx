import React, { Suspense, useRef, useState } from 'react';
import './welcome.css'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import RolledCarpet from '../../../public/RolledCarpet'

const Welcome = ({ carpetRoll }) => {
  const groupRef = useRef();

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const { top, left, width, height } = event.target.getBoundingClientRect();
    const x = (clientX - left) / width * 2 - 1;
    const y = -(clientY - top) / height * 2 + 1;

    // Adjust rotation based on mouse position
    if (groupRef.current) {
      groupRef.current.rotation.y = x * 0.1; // Adjust the tilt factor as needed
      groupRef.current.rotation.x = y * 0.1; // Adjust the tilt factor as needed
    }
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent default context menu behavior
  };

  return (
    <div className='welcome-container'>
      <Canvas
        style={{ height: '90vh', position: 'absolute', top: 0, left: 0 }}
        onPointerMove={handlePointerMove}
        onContextMenu={handleContextMenu} // Disable context menu
      >
        <ambientLight />
        <Suspense fallback={null}>
          <group ref={groupRef}>
            <RolledCarpet position={[0.15, 0, 0]} rotation={[Math.PI / 2, Math.PI / 4, 0]} />
          </group>
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
      <div className='welcome-banner'>
        <div className='welcome-btn-label'>welcome screen</div>
        <button onClick={carpetRoll} style={{ color: 'white' }}>Click to roll Qaleen</button>
      </div>
    </div>
  );
};

export default Welcome;
