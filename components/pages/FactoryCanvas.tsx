"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import CanvasLoader from './Loading';
import { Factory } from "./Factory";

const FactoryCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [0, 1.5, 15],
        fov: 20,
        near: 0.1,
        far: 1000,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <group scale={0.2} position={[0, -1.3, 0]}>
          <Factory />
        </group>
      </Suspense>
      <OrbitControls enableDamping maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

export default FactoryCanvas;
