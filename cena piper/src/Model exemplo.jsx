/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <pointLight intensity={54351.41} decay={2} position={[3.35, 3.37, -2.75]} rotation={[-1.84, 0.6, 1.93]} />
      <PerspectiveCamera makeDefault={true} far={100} near={0.1} fov={22.9} position={[12.99, 6.94, 8.69]} rotation={[-0.5, 0.75, 0.35]} />
      <pointLight intensity={543.51} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.base.geometry} material={materials.SVGMat} position={[2.87, 0.2, 0.29]} scale={31.84} />
      <mesh geometry={nodes.Text.geometry} material={nodes.Text.material} position={[3, 0.06, -1.89]} rotation={[0, Math.PI / 2, 0]} scale={1.79} />
      <mesh geometry={nodes.plant_12.geometry} material={materials['plants atlas 2 mat ']} position={[1.04, 0.99, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.1, 0.12, 0.12]} />
      <mesh geometry={nodes.S.geometry} material={materials['SVGMat.001']} position={[2.22, 0.21, 0.28]} scale={31.84} />
      <mesh geometry={nodes.V.geometry} material={materials['SVGMat.001']} position={[2.88, 0.21, 0.28]} scale={31.84} />
      <mesh geometry={nodes.G.geometry} material={materials['SVGMat.001']} position={[3.53, 0.21, 0.28]} scale={31.84} />
      <mesh geometry={nodes['rename-svg'].geometry} material={materials['SVGMat.003']} position={[2.87, 0.1, -0.35]} scale={31.84} />
      <mesh geometry={nodes.use0.geometry} material={materials['SVGMat.003']} position={[2.87, 0.1, -0.35]} scale={31.84} />
      <mesh geometry={nodes.use1.geometry} material={materials['SVGMat.003']} position={[2.87, 0.1, -0.35]} scale={31.84} />
      <mesh geometry={nodes.use2.geometry} material={materials['SVGMat.003']} position={[2.87, 0.1, -0.35]} scale={31.84} />
      <mesh geometry={nodes['Chrome-Matte_Cw-Chrome-Matte'].geometry} material={materials['CW-Chrome-matte']} position={[0, 0.06, 0]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['Brick_Cw-Brick'].geometry} material={materials.baked} position={[0, 0.06, -2.7]} />
      <mesh geometry={nodes['Mulit-Dirty-Metal_Material_Base'].geometry} material={materials['multi-material-blank']} position={[0, 0.07, -5.48]} />
      <group position={[0, 0, 1.67]}>
        <mesh geometry={nodes.sam015.geometry} material={materials['Sam.001_Baked']} />
        <mesh geometry={nodes.sam015_1.geometry} material={materials.access_Baked} />
      </group>
      <group position={[0.46, 2.73, -5.41]} rotation={[1.38, 0.91, -1.33]} scale={0.98}>
        <mesh geometry={nodes.sam001.geometry} material={materials['Sam.001_Baked']} />
        <mesh geometry={nodes.sam001_1.geometry} material={materials.access_Baked} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
