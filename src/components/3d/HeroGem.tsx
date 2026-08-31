import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface HeroGemProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}

export const HeroGem: React.FC<HeroGemProps> = ({ mousePos }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRing1Ref = useRef<THREE.Group>(null);
  const outerRing2Ref = useRef<THREE.Group>(null);
  const satellite1Ref = useRef<THREE.Mesh>(null);
  const satellite2Ref = useRef<THREE.Mesh>(null);
  const satellite3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;

      const targetX = mousePos.current.x * 0.4;
      const targetY = -mousePos.current.y * 0.4;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY + time * 0.15, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX + time * 0.2, 0.05);
    }

    if (outerRing1Ref.current) {
      outerRing1Ref.current.rotation.x = Math.sin(time * 0.3) * 0.5 + 1.2;
      outerRing1Ref.current.rotation.y += delta * 0.4;
    }

    if (outerRing2Ref.current) {
      outerRing2Ref.current.rotation.x = Math.cos(time * 0.25) * 0.6 - 0.8;
      outerRing2Ref.current.rotation.z += delta * 0.3;
    }

    if (satellite1Ref.current) {
      satellite1Ref.current.position.x = Math.cos(time * 0.8) * 2.8;
      satellite1Ref.current.position.z = Math.sin(time * 0.8) * 2.8;
      satellite1Ref.current.position.y = Math.sin(time * 1.2) * 0.6;
      satellite1Ref.current.rotation.x += delta * 1.5;
      satellite1Ref.current.rotation.y += delta * 1.5;
    }

    if (satellite2Ref.current) {
      satellite2Ref.current.position.x = Math.cos(time * 0.6 + 2) * 3.2;
      satellite2Ref.current.position.z = Math.sin(time * 0.6 + 2) * 3.2;
      satellite2Ref.current.position.y = Math.cos(time * 0.9) * 0.8;
      satellite2Ref.current.rotation.y += delta * 2;
    }

    if (satellite3Ref.current) {
      satellite3Ref.current.position.x = Math.cos(-time * 0.7 + 4) * 2.4;
      satellite3Ref.current.position.z = Math.sin(-time * 0.7 + 4) * 2.4;
      satellite3Ref.current.position.y = Math.sin(-time * 0.8) * 0.7;
      satellite3Ref.current.rotation.z += delta * 1.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <group position={[0, 0, 0]}>
        {/* Central Rich Royal Dark Pink Crystalline Gem */}
        <mesh ref={meshRef} scale={1.45}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#BE185D"
            emissive="#9D174D"
            emissiveIntensity={0.45}
            roughness={0.15}
            metalness={0.55}
            clearcoat={1}
            clearcoatRoughness={0.08}
            distort={0.32}
            speed={1.8}
            wireframe={false}
          />
        </mesh>

        {/* Inner geometric core lattice */}
        <mesh scale={1.1}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#DB2777"
            wireframe={true}
            transparent={true}
            opacity={0.45}
            emissive="#BE185D"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Orbital Ring 1 - Rich Royal Fuchsia / Pink */}
        <group ref={outerRing1Ref}>
          <mesh>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshStandardMaterial
              color="#BE185D"
              emissive="#DB2777"
              emissiveIntensity={1.0}
              transparent
              opacity={0.75}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </group>

        {/* Orbital Ring 2 - Deep Velvet Pink */}
        <group ref={outerRing2Ref}>
          <mesh>
            <torusGeometry args={[2.9, 0.015, 16, 100]} />
            <meshStandardMaterial
              color="#9D174D"
              emissive="#BE185D"
              emissiveIntensity={0.8}
              transparent
              opacity={0.65}
              roughness={0.15}
              metalness={0.85}
            />
          </mesh>
        </group>

        {/* Orbiting Satellites */}
        <mesh ref={satellite1Ref} scale={0.2}>
          <dodecahedronGeometry />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#BE185D"
            emissiveIntensity={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        <mesh ref={satellite2Ref} scale={0.16}>
          <octahedronGeometry />
          <meshStandardMaterial
            color="#FBCFE8"
            emissive="#DB2777"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        <mesh ref={satellite3Ref} scale={0.18}>
          <tetrahedronGeometry />
          <meshStandardMaterial
            color="#FCE7F3"
            emissive="#9D174D"
            emissiveIntensity={1.1}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
};
