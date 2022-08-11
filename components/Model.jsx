import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export function Model(props) {
  const { nodes, materials } = useGLTF("/mueble-export.glb");
  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Wood MT Dark"]}
        position={[0, 0.35, -0.08]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Wood MT"]}
        position={[0, 0.35, 0.16]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Wood MT"]}
        position={[0.18, 0.04, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Wood MT"]}
        position={[0.07, 0.33, -0.08]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload("/mueble-export.glb");