// Mostafa.jsx
import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Mostafa = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // Load GLTF model
  const { scene } = useGLTF('/models/Mostafa.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // Load animations from FBX file
  const { animations: idleAnimation } = useFBX('/models/animations/Standing W_Briefcase Idle.fbx');
  
  // Ensure animation exists before setting it up
  const [animation] = idleAnimation;
  if (animation) animation.name = 'idle';

  const { actions } = useAnimations(
    animation ? [animation] : [],
    group,
  );

  useEffect(() => {
    const action = actions[animationName];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => {
        if (action) action.fadeOut(0.5);
      };
    }
  }, [animationName, actions]);

  return (
<group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/Mostafa.glb');
export default Mostafa;