import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const FloatingOrbits: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const geometricGroupRef = useRef<THREE.Group>(null);

  const { positions, colors } = useMemo(() => {
    const count = 350;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#BE185D'),
      new THREE.Color('#DB2777'),
      new THREE.Color('#9D174D'),
      new THREE.Color('#831843'),
      new THREE.Color('#FBCFE8'),
      new THREE.Color('#FFFFFF')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = Math.random() * 10 - 28;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.05;
    }

    if (geometricGroupRef.current) {
      geometricGroupRef.current.rotation.y += delta * 0.05;
      geometricGroupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors={true}
          transparent={true}
          opacity={0.75}
          blending={THREE.NormalBlending}
          sizeAttenuation={true}
        />
      </points>

      {/* Floating geometric crystal shards */}
      <group ref={geometricGroupRef}>
        <mesh position={[-4.5, -6, -2]} scale={0.4} rotation={[0.5, 0.2, 0]}>
          <octahedronGeometry />
          <meshStandardMaterial color="#BE185D" wireframe transparent opacity={0.45} />
        </mesh>

        <mesh position={[4.2, -11, -1]} scale={0.35} rotation={[0.2, 0.8, 0.4]}>
          <dodecahedronGeometry />
          <meshStandardMaterial color="#DB2777" wireframe transparent opacity={0.4} />
        </mesh>

        <mesh position={[-3.8, -17, -2]} scale={0.45} rotation={[0.9, 0.3, 0.1]}>
          <icosahedronGeometry />
          <meshStandardMaterial color="#9D174D" wireframe transparent opacity={0.45} />
        </mesh>

        <mesh position={[3.5, -23, -1.5]} scale={0.3} rotation={[0.4, 0.4, 0.4]}>
          <torusGeometry args={[0.8, 0.08, 16, 50]} />
          <meshStandardMaterial color="#FBCFE8" wireframe transparent opacity={0.5} />
        </mesh>
      </group>
    </group>
  );
};
