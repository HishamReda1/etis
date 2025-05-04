import * as THREE from 'three';
import React, { forwardRef, useLayoutEffect, useRef, useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { extend } from '@react-three/fiber';

// Extend Three.js with TextGeometry
extend({ TextGeometry });

interface TextProps extends React.PropsWithChildren {
  vAlign?: 'center' | 'top' | 'bottom';
  hAlign?: 'center' | 'left' | 'right';
  size?: number;
  color?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Text = forwardRef<THREE.Group, TextProps>(
  (
    {
      children,
      vAlign = 'center',
      hAlign = 'center',
      size = 1,
      color = '#000000',
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      ...props
    },
    ref
  ) => {
    const font = new FontLoader().parse(/* Add your font data here */);
    const config = useMemo(
      () => ({
        font,
        size: size,
        height: size * 0.1,
      }),
      [font, size]
    );

    const mesh = useRef<THREE.Mesh>(null);

    useLayoutEffect(() => {
      if (typeof children !== 'string' || !mesh.current) return;

      const size = new THREE.Vector3();
      mesh.current.geometry.computeBoundingBox();
      mesh.current.geometry.boundingBox?.getSize(size);

      if (hAlign === 'center') {
        mesh.current.position.x = -size.x / 2;
      } else if (hAlign === 'right') {
        mesh.current.position.x = 0;
      } else {
        mesh.current.position.x = -size.x;
      }

      if (vAlign === 'center') {
        mesh.current.position.y = -size.y / 2;
      } else if (vAlign === 'top') {
        mesh.current.position.y = 0;
      } else {
        mesh.current.position.y = -size.y;
      }
    }, [children, hAlign, vAlign]);

    return (
      <group ref={ref} {...props} position={position} rotation={rotation} scale={[0.1 * size, 0.1 * size, 0.1]}>
        <mesh ref={mesh}>
          <textGeometry args={[children as string, config]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    );
  }
);

export default Text;