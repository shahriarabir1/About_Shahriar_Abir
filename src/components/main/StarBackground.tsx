"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const StarBackground = () => {
  const ref = useRef<THREE.Group>(null);
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0; // Replace NaNs with a default value
      }
    }
    return positions;
  });

  // Use optional chaining to ensure ref.current is not null
  useFrame((state, delta) => {
    ref.current?.rotation.set(
      ref.current.rotation.x - delta / 10,
      ref.current.rotation.y - delta / 15,
      0
    );
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points
        positions={sphere} // Pass the Float32Array directly here
        stride={3} // stride is 3 for x, y, z coordinates
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} // Corrected typo
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
