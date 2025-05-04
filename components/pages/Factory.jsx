import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useGLTF, Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function Factory(props) {
  const { nodes, materials } = useGLTF('/models/eits-factory-04.glb')
  const { gl } = useThree()
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const timeoutRef = useRef(null)
  const maxRetries = 3
  const [retryCount, setRetryCount] = useState(0)

  const handleContextLost = useCallback((event) => {
    event.preventDefault()
    console.log('WebGL context lost. Attempting to restore...')
    setHasError(true)
    setErrorMessage('Graphics context lost. Attempting to restore...')
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Increment retry count
    setRetryCount(prev => prev + 1)

    if (retryCount < maxRetries) {
      // Attempt to restore after a delay
      timeoutRef.current = setTimeout(() => {
        try {
          gl.forceContextRestore()
        } catch (err) {
          console.error('Error forcing context restore:', err)
          setErrorMessage('Unable to restore graphics context. Please refresh the page.')
        }
      }, 1000)
    } else {
      setErrorMessage('Unable to restore graphics context after multiple attempts. Please refresh the page.')
    }
  }, [gl, retryCount])

  const handleContextRestored = useCallback(() => {
    console.log('WebGL context restored')
    setHasError(false)
    setErrorMessage('')
    setRetryCount(0)
    
    // Reset the renderer
    try {
      gl.setSize(gl.domElement.width, gl.domElement.height)
      gl.resetState()
      gl.clear()
      
      // Force a re-render of all materials
      Object.values(materials).forEach(material => {
        if (material.needsUpdate !== undefined) {
          material.needsUpdate = true
        }
      })
    } catch (err) {
      console.error('Error resetting renderer:', err)
      setErrorMessage('Error resetting graphics. Please refresh the page.')
    }
  }, [gl, materials])

  const handleContextCreationError = useCallback((error) => {
    console.error('WebGL context creation error:', error)
    setHasError(true)
    setErrorMessage('Unable to initialize graphics. Please check if WebGL is supported in your browser.')
  }, [])

  useEffect(() => {
    const canvas = gl.domElement
    
    canvas.addEventListener('webglcontextlost', handleContextLost)
    canvas.addEventListener('webglcontextrestored', handleContextRestored)
    canvas.addEventListener('webglcontextcreationerror', handleContextCreationError)

    return () => {
      // Clean up event listeners and timeout
      canvas.removeEventListener('webglcontextlost', handleContextLost)
      canvas.removeEventListener('webglcontextrestored', handleContextRestored)
      canvas.removeEventListener('webglcontextcreationerror', handleContextCreationError)
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [gl, handleContextLost, handleContextRestored, handleContextCreationError])

  if (hasError) {
    return (
      <group {...props}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {errorMessage}
        </Text>
      </group>
    )
  }

  return (
   
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[9.034, 7.478, 0.937]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_1.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 1.637]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_2.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_3.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 3.037]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_4.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_5.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 2.337]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_6.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_7.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 5.137]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_8.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_9.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 3.737]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_10.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_11.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 4.437]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_12.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_13.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 5.837]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_14.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_15.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 7.937]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_16.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_17.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 9.337]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_18.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_19.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 7.237]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_20.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_21.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 10.737]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_22.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_23.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 8.637]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_24.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_25.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 10.037]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_26.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_27.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 11.437]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_28.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_29.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 6.537]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_30.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_31.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 12.137]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_32.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_33.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 14.237]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_34.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_35.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 12.837]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_36.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_37.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 13.537]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_38.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_39.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[1.834, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_40.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_41.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-0.966, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_42.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_43.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[7.434, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_44.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_45.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[4.634, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_46.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_47.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[8.134, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_48.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_49.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[3.934, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_50.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_51.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[2.534, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_52.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_53.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[1.134, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_54.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_55.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-0.266, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_56.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_57.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[0.434, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_58.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_59.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[8.834, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_60.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_61.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[6.034, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_62.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_63.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[3.234, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_64.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_65.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-1.666, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_66.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_67.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[5.334, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_68.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_69.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[6.734, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_70.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_71.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-2.366, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_72.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_73.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 6.537]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_74.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_75.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 13.537]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_76.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_77.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 4.437]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_78.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_79.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 7.937]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_80.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_81.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 7.237]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_82.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_83.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 12.137]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_84.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_85.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 5.137]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_86.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_87.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 9.337]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_88.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_89.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 3.037]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_90.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_91.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 3.737]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_92.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_93.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 14.237]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_94.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_95.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 10.737]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_96.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_97.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 1.637]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_98.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_99.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 8.637]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_100.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_101.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 12.837]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_102.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_103.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 5.837]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_104.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_105.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 10.037]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_106.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_107.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 11.437]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_108.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_109.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 2.337]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_110.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_111.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 0.937]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_112.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_113.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 3.037]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_114.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_115.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 1.637]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_116.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_117.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 4.437]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_118.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_119.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 2.337]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_120.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_121.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 5.137]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_122.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_123.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 3.737]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_124.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_125.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 0.937]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_126.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_127.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 5.837]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_128.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_129.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 6.537]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_130.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_131.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 12.837]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_132.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_133.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 12.137]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_134.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_135.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 9.337]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_136.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_137.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 7.937]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_138.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_139.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 8.637]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_140.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_141.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 11.437]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_142.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_143.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 10.037]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_144.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_145.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 10.737]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_146.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_147.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 7.237]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_148.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_149.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 13.537]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_150.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_151.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 14.937]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_152.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_153.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.534, 7.478, 14.287]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_154.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_155.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.316, 7.478, 14.237]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_156.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_157.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.816, 7.478, 14.287]} rotation={[-Math.PI, -1.571, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_158.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_159.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-4.866, 7.478, 15.937]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_160.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_161.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-4.166, 7.478, 15.937]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_162.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_163.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-5.566, 7.478, 15.937]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_164.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_165.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 15.887]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_166.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_167.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-6.266, 7.478, 15.937]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.025, 0.025, 0.022]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_168.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_169.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.466, 7.478, 15.937]} rotation={[0, -1.571, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_170.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_171.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-6.916, 7.478, 16.537]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.025, 0.025, 0.03]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_172.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_173.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-7.566, 10.228, 15.937]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_174.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_175.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-7.566, 8.128, 15.937]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_176.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_177.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-7.566, 11.628, 15.937]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_178.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_179.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-7.566, 9.528, 15.937]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_180.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_181.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-7.566, 10.928, 15.937]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_183.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_184.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-7.566, 8.828, 15.937]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_185.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_186.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-2.816, 10.228, 15.937]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_188.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_189.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-2.816, 11.628, 15.937]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_190.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_191.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-2.816, 9.528, 15.937]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_192.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_193.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-2.816, 10.928, 15.937]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_195.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_196.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-2.816, 8.828, 15.937]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_197.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_198.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[-2.816, 8.128, 15.937]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_199.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_200.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[9.684, 8.128, 14.287]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_201.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_202.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[9.684, 11.628, 14.287]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_203.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_204.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[9.684, 9.528, 14.287]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_205.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_206.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[9.684, 10.228, 14.287]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_208.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_209.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[9.684, 10.928, 14.287]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_210.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_211.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group
          position={[9.684, 8.828, 14.287]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_212.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_213.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-6.916, 7.478, 0.237]} rotation={[-Math.PI, 0, 0]} scale={-0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_214.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_215.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[9.034, 7.478, 0.237]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_216.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_217.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-3.966, 7.478, 0.237]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_218.geometry}
            material={materials['[0135_DarkGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_219.geometry}
            material={materials['[0132_LightGray]']}
          />
        </group>
        <group position={[-11.086, 3.128, 0.187]} scale={0.025}>
          <group position={[-32.576, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 1.089]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_220.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -59.055]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_221.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -62.992]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_222.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -35.433]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_223.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -33.858]}
              scale={[1.917, 1, 2.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_224.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -51.181]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_225.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -43.307]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_226.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -55.118]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_227.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -47.244]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_228.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -39.37]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_229.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -86.614]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_230.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -66.929]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_231.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -94.488]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_232.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -82.677]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_233.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -92.913]}
              scale={[1.917, 1, 4]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_234.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -78.74]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_235.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -98.425]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_236.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -102.362]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_237.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -74.803]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_238.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -70.866]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_239.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -137.795]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_240.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -110.236]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_241.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -106.299]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_242.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -122.047]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_243.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -118.11]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_244.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -133.858]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_245.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -129.921]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_246.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -141.732]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_247.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -114.173]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_248.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -125.984]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_249.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -147.446]}
              scale={[1.917, 1, 2.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_250.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 17.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_251.geometry}
              material={materials['[0136_Charcoal]']}
              position={[31.496, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_252.geometry}
              material={materials['[0136_Charcoal]']}
              position={[82.677, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 1]}
            />
          </group>
          <group position={[805.31, 0, 0]} rotation={[0, -1.571, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_253.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -59.055]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_254.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -62.992]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_255.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -35.433]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_256.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -33.858]}
              scale={[1.917, 1, 2.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_257.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -51.181]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_258.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -43.307]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_259.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -55.118]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_260.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -47.244]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_261.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -39.37]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_262.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -86.614]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_263.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -66.929]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_264.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -94.488]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_265.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -82.677]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_266.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -92.913]}
              scale={[1.917, 1, 4]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_267.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -78.74]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_268.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -98.425]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_269.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -102.362]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_270.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -74.803]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_271.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -70.866]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_272.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -137.795]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_273.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -110.236]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_274.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -106.299]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_275.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -122.047]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_276.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -118.11]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_277.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -133.858]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_278.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -129.921]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_279.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -141.732]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_280.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -114.173]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_281.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -125.984]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_282.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -147.446]}
              scale={[1.917, 1, 2.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_283.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 17.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_284.geometry}
              material={materials['[0136_Charcoal]']}
              position={[31.496, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_285.geometry}
              material={materials['[0136_Charcoal]']}
              position={[82.677, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 1]}
            />
          </group>
          <group position={[293.494, 0, 0]} rotation={[0, -1.571, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_286.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -59.055]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_287.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -62.992]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_288.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -35.433]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_289.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -33.858]}
              scale={[1.917, 1, 2.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_290.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -51.181]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_291.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -43.307]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_292.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -55.118]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_293.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -47.244]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_294.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -39.37]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_295.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -86.614]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_296.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -66.929]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_297.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -94.488]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_298.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -82.677]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_299.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -92.913]}
              scale={[1.917, 1, 4]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_300.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -78.74]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_301.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -98.425]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_302.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -102.362]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_303.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -74.803]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_304.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -70.866]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_305.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -137.795]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_306.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -110.236]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_307.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -106.299]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_308.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -122.047]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_309.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -118.11]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_310.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -133.858]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_311.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -129.921]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_312.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -141.732]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_313.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -114.173]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_314.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -125.984]}
              scale={[1.917, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_315.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -147.446]}
              scale={[1.917, 1, 2.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_316.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 17.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_317.geometry}
              material={materials['[0136_Charcoal]']}
              position={[31.496, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_318.geometry}
              material={materials['[0136_Charcoal]']}
              position={[82.677, 1.575, -29.921]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[2.488, 1, 1]}
            />
          </group>
          <group position={[454.326, 0, 55.118]} rotation={[0, -1.571, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_319.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 0]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_320.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_321.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_322.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_323.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_324.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_325.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_326.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -15.748]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_327.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -19.685]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_328.geometry}
              material={materials['[0136_Charcoal]']}
              position={[3.937, 1.575, 13.386]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.708, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_329.geometry}
              material={materials['[0136_Charcoal]']}
              position={[27.559, 1.575, 13.386]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.708, 1, 1]}
            />
          </group>
          <group position={[302.756, 0, 55.118]} rotation={[0, -1.571, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_330.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 0]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_331.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_332.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_333.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_334.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_335.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_336.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_337.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -15.748]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_338.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -19.685]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_339.geometry}
              material={materials['[0136_Charcoal]']}
              position={[3.937, 1.575, 13.386]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.708, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_340.geometry}
              material={materials['[0136_Charcoal]']}
              position={[27.559, 1.575, 13.386]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.708, 1, 1]}
            />
          </group>
          <group position={[675.389, 0, 55.118]} rotation={[0, -1.571, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_341.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 0]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_342.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_343.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_344.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_345.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_346.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_347.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_348.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -15.748]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_349.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -19.685]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_350.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -23.622]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_351.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -59.055]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_352.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -62.992]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_353.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -35.433]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_354.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -31.496]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_355.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -51.181]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_356.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -43.307]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_357.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -27.559]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_358.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -55.118]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_359.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -47.244]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_360.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -39.37]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_361.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -86.614]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_362.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -66.929]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_363.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -94.488]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_364.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -82.677]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_365.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -90.551]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_366.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -78.74]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_367.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -98.425]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_368.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -102.362]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_369.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -74.803]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_370.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -70.866]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_371.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -137.795]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_372.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -110.236]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_373.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -106.299]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_374.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -122.047]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_375.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -118.11]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_376.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -133.858]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_377.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -129.921]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_378.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -141.732]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_379.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -114.173]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_380.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -125.984]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_381.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -145.669]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_382.geometry}
              material={materials['[0136_Charcoal]']}
              position={[3.937, 1.575, 14.961]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[3.438, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_383.geometry}
              material={materials['[0136_Charcoal]']}
              position={[27.559, 1.575, 14.961]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[3.438, 1, 1]}
            />
          </group>
          <group position={[501.171, 0, 55.118]} rotation={[0, -1.571, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_384.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 0]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_385.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_386.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_387.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, 11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_388.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -11.811]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_389.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -7.874]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_390.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -3.937]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_391.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -15.748]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_392.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -19.685]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_393.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -23.622]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_394.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -59.055]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_395.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -62.992]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_396.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -35.433]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_397.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -31.496]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_398.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -51.181]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_399.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -43.307]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_400.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -27.559]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_401.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -55.118]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_402.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -47.244]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_403.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -39.37]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_404.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -86.614]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_405.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -66.929]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_406.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -94.488]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_407.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -82.677]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_408.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -90.551]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_409.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -78.74]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_410.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -98.425]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_411.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -102.362]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_412.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -74.803]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_413.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -70.866]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_414.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -137.795]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_415.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -110.236]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_416.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -106.299]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_417.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -122.047]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_418.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -118.11]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_419.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -133.858]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_420.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -129.921]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_421.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -141.732]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_422.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -114.173]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_423.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -125.984]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_424.geometry}
              material={materials['[0136_Charcoal]']}
              position={[0, 1.575, -145.669]}
              scale={[0.75, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_425.geometry}
              material={materials['[0136_Charcoal]']}
              position={[3.937, 1.575, 14.961]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[3.438, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_426.geometry}
              material={materials['[0136_Charcoal]']}
              position={[27.559, 1.575, 14.961]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[3.438, 1, 1]}
            />
          </group>
        </group>
        <group position={[-6.916, 7.628, 1.144]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_434.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 9.582]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_435.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 1.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_436.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 17.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_437.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 25.33]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_438.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 56.827]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_439.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 48.953]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_440.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 33.204]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_441.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 41.079]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_442.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 64.701]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_443.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 104.071]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_444.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 88.323]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_445.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 96.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_446.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 119.819]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_447.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 80.449]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_448.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 111.945]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_449.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 72.575]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_450.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 135.567]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_451.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 198.559]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_452.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 206.433]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_453.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 222.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_454.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 237.929]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_455.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 214.307]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_456.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 245.803]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_457.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 127.693]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_458.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 230.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_459.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 253.677]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_460.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 450.527]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_461.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 363.913]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_462.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 324.543]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_463.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 466.275]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_464.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 387.535]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_465.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 458.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_466.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 426.905]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_467.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 474.149]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_468.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 340.291]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_469.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 348.165]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_470.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 419.031]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_471.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 395.409]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_472.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 316.669]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_473.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 371.787]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_474.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 332.417]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_475.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 489.897]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_476.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 356.039]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_477.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 442.653]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_478.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 482.023]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_479.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 497.771]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_480.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 403.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_481.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 411.157]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_482.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 434.779]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_483.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 379.661]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_484.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 513.519]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_485.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 568.638]}
            scale={[1.349, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_486.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 560.764]}
            scale={[1.349, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_487.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 576.512]}
            scale={[1.349, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_488.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 552.89]}
            scale={[1.349, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_489.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 505.645]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_490.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 521.393]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_491.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 545.016]}
            scale={[1.349, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_492.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 529.267]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_493.geometry}
            material={materials['[0132_LightGray]']}
            position={[156.693, 0, 560.764]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.831, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_494.geometry}
            material={materials['[0132_LightGray]']}
            position={[156.693, 0, 576.512]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.831, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_495.geometry}
            material={materials['[0132_LightGray]']}
            position={[156.693, 0, 552.89]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.831, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_496.geometry}
            material={materials['[0132_LightGray]']}
            position={[156.693, 0, 545.016]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.831, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_497.geometry}
            material={materials['[0132_LightGray]']}
            position={[156.693, 0, 568.638]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.831, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_498.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, -6.166]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_499.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, -14.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_500.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 300.921]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_501.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 308.795]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_502.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 269.425]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_503.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 261.551]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_504.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 285.173]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_505.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 293.047]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_506.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 277.299]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_507.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 190.685]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_508.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 167.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_509.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 151.315]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_510.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 143.441]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_511.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 174.937]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_512.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 182.811]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_513.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 159.189]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_514.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 537.141]}
          />
        </group>
        <group position={[-3.316, 7.678, 13.937]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_515.geometry}
            material={materials['[0132_LightGray]']}
            position={[255.906, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_516.geometry}
            material={materials['[0132_LightGray]']}
            position={[383.858, 0, 7.874]}
            scale={[0.8, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_517.geometry}
            material={materials['[0132_LightGray]']}
            position={[127.953, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_518.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 7.874]}
          />
        </group>
        <group position={[-3.316, 7.678, 13.537]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_519.geometry}
            material={materials['[0132_LightGray]']}
            position={[255.906, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_520.geometry}
            material={materials['[0132_LightGray]']}
            position={[383.858, 0, 7.874]}
            scale={[0.8, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_521.geometry}
            material={materials['[0132_LightGray]']}
            position={[127.953, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_522.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 7.874]}
          />
        </group>
        <group position={[-3.316, 7.678, 13.137]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_523.geometry}
            material={materials['[0132_LightGray]']}
            position={[255.906, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_524.geometry}
            material={materials['[0132_LightGray]']}
            position={[383.858, 0, 7.874]}
            scale={[0.8, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_525.geometry}
            material={materials['[0132_LightGray]']}
            position={[127.953, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_526.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 7.874]}
          />
        </group>
        <group position={[-3.316, 7.678, 12.737]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_527.geometry}
            material={materials['[0132_LightGray]']}
            position={[255.906, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_528.geometry}
            material={materials['[0132_LightGray]']}
            position={[383.858, 0, 7.874]}
            scale={[0.8, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_529.geometry}
            material={materials['[0132_LightGray]']}
            position={[127.953, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_530.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 7.874]}
          />
        </group>
        <group position={[-11.536, 43.548, -0.313]} rotation={[0, 0, -Math.PI / 2]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_531.geometry}
            material={materials['[Formica Laminate Light]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_532.geometry}
            material={materials['[Polished Concrete New]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_533.geometry}
            material={materials['[Color M01]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_534.geometry}
            material={materials['[Concrete Form 4x8]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_535.geometry}
            material={materials['[Pavers Flagstone Gray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_536.geometry}
            material={materials['[Granite Dark Gray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_537.geometry}
            material={materials['[Vegetation Juniper]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_538.geometry}
            material={materials['[Wood Floor]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_539.geometry}
            material={materials['[0133_Gray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_540.geometry}
            material={materials['[0100_SteelBlue]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_541.geometry}
            material={materials['[Granite Light Gray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_542.geometry}
            material={materials['[Granite Tile]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_543.geometry}
            material={materials['[0133_Gray]']}
            position={[1404.331, 407.186, 46.496]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_544.geometry}
            material={materials['[0133_Gray]']}
            position={[1404.331, 398.525, 46.496]}
          />
        </group>
        <group position={[0.634, 7.428, 0.737]} scale={0.025}>
          <group position={[163.386, 1.969, -19.685]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_545.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_546.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[1.969, 1.969, -19.685]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_547.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_548.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 90.551]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_549.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_550.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 35.433]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_551.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_552.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 173.228]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_553.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_554.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 62.992]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_555.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_556.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 90.551]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_557.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_558.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 255.906]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_559.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_560.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 35.433]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_561.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_562.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 62.992]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_563.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_564.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_565.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_566.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 145.669]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_567.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_568.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 255.906]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_569.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_570.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 228.346]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_571.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_572.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 200.787]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_573.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_574.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 145.669]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_575.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_576.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 228.346]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_577.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_578.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 7.874]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_579.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_580.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 118.11]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_581.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_582.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 118.11]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_583.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_584.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[163.386, 1.969, 173.228]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_585.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_586.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 1.969, 200.787]} rotation={[-Math.PI, 0, 0]} scale={-1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_587.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_588.geometry}
              material={materials['[0132_LightGray]']}
            />
          </group>
          <group position={[27.559, 0, 210.63]}>
            <group position={[53.543, 1.969, 45.276]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_589.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_590.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Geom3D_Component#5'].geometry}
                material={nodes['Geom3D_Component#5'].material}
              />
            </group>
            <group position={[28.74, 1.969, 45.276]} rotation={[-Math.PI, 0, 0]} scale={-1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_591.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_592.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Geom3D_Component#5_1'].geometry}
                material={nodes['Geom3D_Component#5_1'].material}
              />
            </group>
            <group position={[107.087, 1.969, 45.276]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_593.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_594.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Geom3D_Component#5_2'].geometry}
                material={nodes['Geom3D_Component#5_2'].material}
              />
            </group>
            <group position={[26.772, 1.969, 45.276]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_595.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_596.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Geom3D_Component#5_3'].geometry}
                material={nodes['Geom3D_Component#5_3'].material}
              />
            </group>
            <group position={[80.315, 1.969, 45.276]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_597.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_598.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Geom3D_Component#5_4'].geometry}
                material={nodes['Geom3D_Component#5_4'].material}
              />
            </group>
            <group position={[0, 1.969, 17.717]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_599.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_600.geometry}
                material={materials['[0135_DarkGray]']}
              />
            </group>
            <group position={[26.772, 1.969, 17.717]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_601.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_602.geometry}
                material={materials['[0135_DarkGray]']}
              />
            </group>
            <group position={[53.543, 1.969, 17.717]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_603.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_604.geometry}
                material={materials['[0135_DarkGray]']}
              />
            </group>
            <group position={[80.315, 1.969, 17.717]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_605.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_606.geometry}
                material={materials['[0135_DarkGray]']}
              />
            </group>
            <group position={[107.087, 1.969, 17.717]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_607.geometry}
                material={materials['[0132_LightGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_608.geometry}
                material={materials['[0135_DarkGray]']}
              />
            </group>
            <group position={[107.087, 1.969, -9.843]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_609.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_610.geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[80.315, 1.969, -9.843]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_611.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_612.geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[53.543, 1.969, -9.843]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_613.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_614.geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[26.772, 1.969, -9.843]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_615.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_616.geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
            <group position={[0, 1.969, -9.843]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_617.geometry}
                material={materials['[0135_DarkGray]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Geom3D_618.geometry}
                material={materials['[0132_LightGray]']}
              />
            </group>
          </group>
        </group>
        <group position={[-3.316, 7.678, 11.429]} rotation={[0, 0, -Math.PI]} scale={-0.025}>
          <group position={[0, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_619.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_620.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_621.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[61.024, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_622.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_623.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_624.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_625.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_626.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_627.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_628.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_629.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_630.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_631.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_632.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_633.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_634.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_635.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_636.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_637.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_638.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_639.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 7.874]} scale={[0.981, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_640.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_641.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_642.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
        </group>
        <group position={[-3.336, 7.748, 4.829]} scale={0.025}>
          <group position={[120.866, 0, 122.047]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_643.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[278.346, 0, 122.047]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__1.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_644.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[448.031, 0, 122.047]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__2.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_645.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[0.787, 0, 122.047]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__3.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_646.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[120.866, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__4.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_647.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[278.346, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__5.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_648.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[448.031, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__6.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_649.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[0.787, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__7.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_650.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[278.346, 0, 259.843]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__8.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_651.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[120.866, 0, 259.843]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__9.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_652.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[0.787, 0, 259.843]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__10.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_653.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
          <group position={[448.031, 0, 259.843]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D__11.geometry}
              material={materials['[Translucent Glass Blue]1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_654.geometry}
              material={materials['[0133_Gray]']}
            />
          </group>
        </group>
        <group position={[-3.316, 7.678, 9.327]} scale={0.025}>
          <group position={[0, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_655.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_656.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_657.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[61.024, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_658.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_659.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_660.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_661.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_662.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_663.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_664.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_665.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_666.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_667.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_668.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_669.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_670.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_671.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_672.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_673.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_674.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_675.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 7.874]} scale={[0.981, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_676.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_677.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_678.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
        </group>
        <group position={[-3.316, 7.678, 2.727]} scale={0.025}>
          <group position={[0, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_679.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_680.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_681.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[61.024, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_682.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_683.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_684.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_685.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_686.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_687.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_688.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_689.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_690.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_691.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_692.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_693.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_694.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_695.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_696.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_697.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_698.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_699.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 7.874]} scale={[0.981, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_700.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_701.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_702.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
        </group>
        <group position={[-3.316, 7.678, 4.829]} rotation={[0, 0, -Math.PI]} scale={-0.025}>
          <group position={[0, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_703.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_704.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_705.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[61.024, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_706.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_707.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_708.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_709.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_710.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_711.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_712.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_713.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_714.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_715.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_716.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_717.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_718.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_719.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_720.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_721.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_722.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_723.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 7.874]} scale={[0.981, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_724.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_725.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_726.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
        </group>
        <group position={[-3.316, 7.678, 6.227]} scale={0.025}>
          <group position={[0, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_727.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_728.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_729.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[61.024, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_730.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_731.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_732.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_733.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_734.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_735.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_736.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_737.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_738.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_739.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_740.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_741.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_742.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_743.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_744.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_745.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_746.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_747.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 7.874]} scale={[0.981, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_748.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_749.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_750.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
        </group>
        <group position={[-3.316, 7.678, 7.929]} rotation={[0, 0, -Math.PI]} scale={-0.025}>
          <group position={[0, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_751.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_752.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_753.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[61.024, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_754.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_755.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_756.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_757.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_758.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_759.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_760.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_761.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_762.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_763.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_764.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_765.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_766.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_767.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_768.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 7.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_769.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_770.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_771.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 7.874]} scale={[0.981, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_772.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_773.geometry}
              material={materials['[0135_DarkGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_774.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
        </group>
        <group position={[-3.316, 7.678, 9.777]} scale={0.025}>
          <group position={[61.024, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_777.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_778.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_779.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_780.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_781.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_782.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_783.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_784.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_785.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_786.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_787.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_788.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_789.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_790.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_775.geometry}
            material={materials['[0132_LightGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_776.geometry}
            material={materials['[0135_DarkGray]1']}
          />
        </group>
        <group position={[-3.316, 7.678, 6.677]} scale={[0.025, 0.025, 0.017]}>
          <group position={[61.024, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_793.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_794.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_795.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_796.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_797.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_798.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_799.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_800.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_801.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_802.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_803.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_804.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_805.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_806.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_791.geometry}
            material={materials['[0132_LightGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_792.geometry}
            material={materials['[0135_DarkGray]1']}
          />
        </group>
        <group position={[-3.316, 7.678, 3.177]} scale={0.025}>
          <group position={[61.024, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_809.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_810.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[122.047, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_811.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_812.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[244.094, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_813.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_814.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[183.071, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_815.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_816.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[366.142, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_817.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_818.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[305.118, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_819.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_820.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <group position={[427.165, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_821.geometry}
              material={materials['[0132_LightGray]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_822.geometry}
              material={materials['[0135_DarkGray]1']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_807.geometry}
            material={materials['[0132_LightGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_808.geometry}
            material={materials['[0135_DarkGray]1']}
          />
        </group>
        <group position={[1.021, 7.443, 6.233]} scale={[0.028, 0.025, 0.028]}>
          <group position={[0, -1.181, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_823.geometry}
              material={materials.logo1}
              position={[12.919, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_824.geometry}
              material={materials.logo1}
              position={[56.917, 0, 31.473]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_825.geometry}
              material={materials.logo1}
              position={[0, 0, 18.911]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Geom3D_826.geometry}
              material={materials.logo1}
              position={[49.784, 0, 21.774]}
            />
          </group>
        </group>
        <group position={[1.164, 7.678, 1.327]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_827.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 15.748]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_828.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 7.874]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_829.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 47.244]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_830.geometry}
            material={materials['[0132_LightGray]']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_831.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 31.496]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_832.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 39.37]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_833.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 23.622]}
          />
        </group>
        <group position={[-3.336, 7.678, 0.787]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_834.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 44.882]}
            scale={[0.322, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_835.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 60.63]}
            scale={[0.322, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_836.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 21.26]}
            scale={[0.322, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_837.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 37.008]}
            scale={[0.322, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_838.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 52.756]}
            scale={[0.322, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_839.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 68.504]}
            scale={[0.322, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_840.geometry}
            material={materials['[0132_LightGray]']}
            position={[0, 0, 29.134]}
            scale={[0.322, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_841.geometry}
            material={materials['[0132_LightGray]']}
            position={[124.011, 0, 44.882]}
            scale={[0.302, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_842.geometry}
            material={materials['[0132_LightGray]']}
            position={[124.011, 0, 21.26]}
            scale={[0.302, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_843.geometry}
            material={materials['[0132_LightGray]']}
            position={[124.011, 0, 68.504]}
            scale={[0.302, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_844.geometry}
            material={materials['[0132_LightGray]']}
            position={[124.011, 0, 52.756]}
            scale={[0.302, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_845.geometry}
            material={materials['[0132_LightGray]']}
            position={[124.011, 0, 29.134]}
            scale={[0.302, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_846.geometry}
            material={materials['[0132_LightGray]']}
            position={[124.011, 0, 37.008]}
            scale={[0.302, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Geom3D_847.geometry}
            material={materials['[0132_LightGray]']}
            position={[124.011, 0, 60.63]}
            scale={[0.302, 1, 1]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_848.geometry}
          material={materials['[0135_DarkGray]']}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_849.geometry}
          material={materials['[0132_LightGray]']}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_182.geometry}
          material={materials['[0135_DarkGray]']}
          position={[-7.566, 12.378, 15.887]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={-0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_187.geometry}
          material={materials['[0135_DarkGray]']}
          position={[-3.466, 7.478, 15.887]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_194.geometry}
          material={materials['[0135_DarkGray]']}
          position={[-2.816, 12.378, 15.887]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_207.geometry}
          material={materials['[0135_DarkGray]']}
          position={[9.684, 12.378, 14.237]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_427.geometry}
          material={materials['[0132_LightGray]']}
          position={[5.414, 7.678, 1.727]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_428.geometry}
          material={materials['[0132_LightGray]']}
          position={[5.414, 7.678, 2.327]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_429.geometry}
          material={materials['[0132_LightGray]']}
          position={[5.414, 7.678, 1.527]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_430.geometry}
          material={materials['[0132_LightGray]']}
          position={[5.414, 7.678, 2.527]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_431.geometry}
          material={materials['[0132_LightGray]']}
          position={[5.414, 7.678, 2.127]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_432.geometry}
          material={materials['[0132_LightGray]']}
          position={[5.414, 7.678, 1.327]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Geom3D_433.geometry}
          material={materials['[0132_LightGray]']}
          position={[5.414, 7.678, 1.927]}
          scale={0.025}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/models/eits-factory-04.glb')












