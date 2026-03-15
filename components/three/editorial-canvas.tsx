'use client';

import { Float } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Orb() {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.45, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
}

export function EditorialCanvas() {
  return (
    <div className="editorial-canvas">
      <Canvas camera={{ position: [0, 0, 4], fov: 34 }} dpr={[1, 1.5]}>
        <Orb />
      </Canvas>
    </div>
  );
}
