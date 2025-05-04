import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, MeshReflectorMaterial, OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from './Loading'
import { Factory } from "./Factory"; // استيراد Factory.jsx

const FactoryCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
    
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
    camera={{
      position: [0, 1.5, 15], // الكاميرا بعيدة عن المصنع
      fov: 50,             // فتحة عدسة مش واسعة قوي ولا ديقة
      near: 0.1,
      far: 1000,

    }}
    // style={{ 
    //   width: '90vw', 
    //   height: '100vh',
    //   overflow: 'hidden'
    // }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 10]} intensity={1} />
    <Suspense fallback={<CanvasLoader />}>
    <group scale={0.2} >
    <Factory />
    </group></Suspense>
    <OrbitControls enableDamping maxPolarAngle={Math.PI / 2} autoRotate={true} />
   
    <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />

  </Canvas>
  );
};

export default FactoryCanvas;
