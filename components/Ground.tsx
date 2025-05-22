'use client';
import { MeshReflectorMaterial, useTexture } from '@react-three/drei';

export default function Ground() {
  const texture = useTexture('/ground.png');

  return (
    <mesh position={[0, -4.2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
      <cylinderGeometry args={[2, 2, 0.3, 64]} />
      <MeshReflectorMaterial
        blur={[100, 20]}
        resolution={1024}
        mixBlur={0.8}
        mixStrength={30}
        roughness={0.5}
        depthScale={1.0}
        minDepthThreshold={0.2}
        maxDepthThreshold={1.0}
        map={texture}
        metalness={0.5}
        color="#ffffff"
      />
    </mesh>
  );
}
