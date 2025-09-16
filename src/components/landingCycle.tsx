'use client';
// LandingCycle.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Component to load and display the model
const Model = () => {
    const gltf = useGLTF('/models/mountain_bike.glb'); // Path relative to public/
    return <primitive object={gltf.scene} scale={5} />;
};

const LandingCycle = () => {
    return (
        <Canvas
            orthographic
            camera={{ zoom: 100, position: [0, 2, 10], near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
};

export default LandingCycle;
